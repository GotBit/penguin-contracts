//SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@chainlink/contracts/src/v0.8/VRFConsumerBase.sol';
import 'hardhat/console.sol';

interface IERC721Custom {
    function mint(address user, uint256 tokenId) external;
}

interface IRouter {
    function factory() external view returns (address);

    function WETH() external view returns (address);

    function swapExactTokensForTokens(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external returns (uint256[] memory amounts);

    function swapTokensForExactTokens(
        uint256 amountOut,
        uint256 amountInMax,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external returns (uint256[] memory amounts);

    function swapETHForExactTokens(
        uint256 amountOut,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external payable returns (uint256[] memory amounts);

    function getAmountOut(
        uint256 amountIn,
        uint256 reserveIn,
        uint256 reserveOut
    ) external pure returns (uint256 amountOut);

    function getAmountIn(
        uint256 amountOut,
        uint256 reserveIn,
        uint256 reserveOut
    ) external pure returns (uint256 amountIn);

    function getAmountsOut(uint256 amountIn, address[] calldata path)
        external
        view
        returns (uint256[] memory amounts);

    function getAmountsIn(uint256 amountOut, address[] calldata path)
        external
        view
        returns (uint256[] memory amounts);
}

contract Minting is VRFConsumerBase, Ownable {
    IERC721Custom public nft;
    uint256 public startDate;
    bytes32 public whitelistRoot;
    bytes32 public OGRoot;

    uint256 public ogQuantity = 4;
    uint256 public whitlistQuantity = 2;
    uint256 public maxQuantity = 20;
    uint256 public duration = 7 days;

    bytes32 internal keyHash;
    uint256 internal fee;

    mapping(address => bytes32) public requestIds;
    mapping(bytes32 => uint256) public mintAmount;
    mapping(bytes32 => bool) public unclaim;
    mapping(bytes32 => uint256) public randomNumbers;
    mapping(bytes32 => bool) public filled;

    IRouter public router;

    mapping(address => uint256) public minted;

    mapping(uint256 => uint256) public indexes;
    uint256 public amount = 10_000;

    /// @dev verifies ogs
    /// @param proof array of bytes for merkle tree verifing
    /// @param root tree's root
    /// @param leaf keccak256 of user address
    function verify(
        bytes32[] memory proof,
        bytes32 root,
        bytes32 leaf
    ) public pure returns (bool) {
        bytes32 hash = leaf;
        for (uint256 i = 0; i < proof.length; i++) {
            bytes32 proofElement = proof[i];
            hash = hash < proofElement
                ? keccak256(abi.encodePacked(hash, proofElement))
                : keccak256(abi.encodePacked(proofElement, hash));
        }
        return hash == root;
    }

    function claim() external {
        bytes32 requestId = requestIds[msg.sender];
        require(unclaim[requestId] && filled[requestId]);

        uint256 quantity = mintAmount[requestId];
        uint256 randomness = randomNumbers[requestId];

        for (uint256 i = 0; i < quantity; i++) {
            uint256 randomIndex = range(
                uint256(keccak256(abi.encodePacked(randomness, i))),
                1,
                amount + 1
            ); // 1...10000

            uint256 randomTokenId = 0;

            if (indexes[randomIndex] == 0) randomTokenId = randomIndex;
            else randomTokenId = indexes[randomIndex];

            uint256 newIndex = indexes[amount];
            if (newIndex == 0) indexes[randomIndex] = amount;
            else indexes[randomIndex] = indexes[amount];

            amount -= 1;

            nft.mint(msg.sender, randomTokenId);
        }

        unclaim[requestId] = false;
    }

    /// @dev mints nft to user
    /// @param quantity amount of nft to mint
    /// @param proof array of bytes for merkle tree verifing
    function mint(uint256 quantity, bytes32[] memory proof) external payable {
        require(
            (startDate != 0) && (block.timestamp < startDate + duration),
            'Mint have not started yet'
        );
        require(!unclaim[requestIds[msg.sender]]);

        uint256 mintQuantity = 0;
        if (block.timestamp - startDate < 1 days) {
            bytes32 leaf = keccak256(abi.encode(msg.sender));
            bool isOG = verify(proof, OGRoot, leaf);
            bool isWhitelist = verify(proof, whitelistRoot, leaf);

            require(isOG || isWhitelist, 'You cant mint the nft right now');

            if (isOG) {
                mintQuantity = (quantity > ogQuantity) ? ogQuantity : quantity;
            } else if (isWhitelist) {
                mintQuantity = (quantity > whitlistQuantity)
                    ? whitlistQuantity
                    : quantity;
            }
            mintQuantity -= minted[msg.sender];
        } else {
            mintQuantity = quantity > maxQuantity ? maxQuantity : quantity;
        }

        require(mintQuantity != 0, 'You cant mint zero');

        minted[msg.sender] += mintQuantity;

        bytes32 requestId = _getRandomNumber();
        unclaim[requestId] = true;
        mintAmount[requestId] = mintQuantity;
        requestIds[msg.sender] = requestId;
    }

    /// @dev Call start minting event
    function startMinting() external onlyOwner {
        startDate = block.timestamp;
    }

    /// @dev Call start minting event
    function stopMinting() external onlyOwner {
        startDate = 0;
    }

    /// @dev Call start minting event
    function changeDuration(uint256 _duration) external onlyOwner {
        duration = _duration;
    }

    /// @dev Set whitelist Root
    /// @param _OGRoot OG's tree root
    function saveRootOg(bytes32 _OGRoot) external onlyOwner {
        OGRoot = _OGRoot;
    }

    /// @dev Set whitelist Root
    /// @param _whitelistRoot whitelist's tree root
    function saveRootWhitelist(bytes32 _whitelistRoot) external onlyOwner {
        whitelistRoot = _whitelistRoot;
    }

    /// @dev fee of one spin
    /// @return fee amount of fee for one spin in ETH
    function spinFeeETH() public view returns (uint256) {
        address[] memory path = new address[](2);
        path[0] = router.WETH();
        path[1] = address(LINK);
        return router.getAmountsIn(fee, path)[0];
    }

    /// @dev swaps provided amount of ETH to LINK to cover the fee, and transfers back what is left
    function _feeManagment() internal {
        require(msg.value >= spinFeeETH(), 'Not enough WBNB to pay fee');

        address[] memory path = new address[](2);
        path[0] = router.WETH();
        path[1] = address(LINK);

        uint256[] memory amounts = router.swapETHForExactTokens{value: msg.value}(
            fee,
            path,
            address(this),
            block.timestamp
        );

        payable(msg.sender).transfer(msg.value - amounts[0]);

        // emit LinkSwaped(
        //     block.timestamp,
        //     msg.sender,
        //     msg.value,
        //     spinFeeETH(),
        //     tokenConverter.WETH(),
        //     address(LINK),
        //     amounts[0],
        //     amounts[1]
        // );
    }

    /// @dev requests random number from chainlink nodes
    function _getRandomNumber() internal returns (bytes32) {
        require(LINK.balanceOf(address(this)) >= fee, 'Not enough LINK');
        return requestRandomness(keyHash, fee);
    }

    /// @inheritdoc	VRFConsumerBase
    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
        randomNumbers[requestId] = randomness;
        filled[requestId] = true;
        // games[requestId].randomness = randomness;
        // games[requestId].fulfilled = true;
        // emit Fulfilled(block.timestamp, requestId);
    }

    /// @dev to recieve native from router
    receive() external payable {}

    /// @dev maps number to range from `from` (includes) to `to` (excludes)
    /// @param number initial number
    /// @param from start of range
    /// @param to stop of range
    /// @return map result
    function range(
        uint256 number,
        uint256 from,
        uint256 to
    ) public pure returns (uint256) {
        return (number % (to - from)) + from;
    }

    constructor(
        address nft_,
        address router_,
        address vrfCoordinator_,
        address link_,
        bytes32 keyHash_,
        uint256 fee_
    ) VRFConsumerBase(vrfCoordinator_, link_) {
        nft = IERC721Custom(nft_);
        router = IRouter(router_);
        keyHash = keyHash_;
        fee = fee_;
    }
}

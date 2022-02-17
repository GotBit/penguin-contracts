//SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import '@openzeppelin/contracts/access/Ownable.sol';
import 'hardhat/console.sol';

interface IERC721Custom {
    function mint(address user, uint256 quantity) external;
}

contract Minting is Ownable {
    IERC721Custom public nft;
    uint256 public startDate;
    bytes32 whiteList;

    uint256 public ogQuantity = 4;
    uint256 public whitlistQuantity = 2;
    uint256 public maxQuantity = 20;

    mapping(address => uint256) public minted;

    // before merkle tree
    mapping(address => bool) public ogs;
    mapping(address => bool) public whitelist;

    ///for tests/////////////////////////
    function setOG(address user) external onlyOwner {
        ogs[user] = true;
    }

    function setWhitelist(address user) external onlyOwner {
        whitelist[user] = true;
    }

    ///////////////////////////////////////

    /// @dev verifies ogs
    /// @param sender address of user
    /// @param proof array of bytes for merkle tree verifing
    function verifyOG(address sender, bytes32[] memory proof) public view returns (bool) {
        // TODO: merkle tree proof
        return ogs[sender];
    }

    /// @dev verifies whitelist
    /// @param sender address of user
    /// @param proof array of bytes for merkle tree verifing
    function verifyWhitelist(address sender, bytes32[] memory proof)
        public
        view
        returns (bool)
    {
        // TODO: merkle tree proof
        return whitelist[sender];
    }

    /// @dev mints nft to user
    /// @param quantity amount of nft to mint
    /// @param proof array of bytes for merkle tree verifing
    function mint(uint256 quantity, bytes32[] memory proof) external {
        console.log('start date', startDate);
        require(
            startDate != 0 && block.timestamp < startDate + 7 days,
            'Mint have not started yet'
        );

        if (block.timestamp - startDate < 1 days) {
            bool isOG = verifyOG(msg.sender, proof);
            bool isWhitelist = verifyWhitelist(msg.sender, proof);

            console.log(isOG, isWhitelist);

            require(isOG || isWhitelist, 'You cant mint the nft right now');

            uint256 mintQuantity;
            if (isOG) {
                mintQuantity = (quantity > ogQuantity) ? ogQuantity : quantity;
            } else if (isWhitelist) {
                mintQuantity = (quantity > whitlistQuantity)
                    ? whitlistQuantity
                    : quantity;
            }
            console.log('minted', minted[msg.sender]);
            mintQuantity -= minted[msg.sender];
            console.log('min', mintQuantity);
            require(mintQuantity != 0, 'You cant mint zero');

            nft.mint(msg.sender, mintQuantity);
            minted[msg.sender] += mintQuantity;
        } else {
            nft.mint(msg.sender, quantity > maxQuantity ? maxQuantity : quantity);
            minted[msg.sender] += quantity > maxQuantity ? maxQuantity : quantity;
        }
    }

    /// @dev Call start minting event
    function startMinting() external onlyOwner {
        startDate = block.timestamp;
    }

    /// @dev Call start minting event
    function stopMinting() external onlyOwner {
        startDate = 0;
    }

    /// @dev Set whitelist
    /// @param _whiteList mercle proof coding whitelist
    function createWhitelist(bytes32 _whiteList) external onlyOwner {
        whiteList = _whiteList;
    }

    constructor(address nft_) {
        nft = IERC721Custom(nft_);
    }
}

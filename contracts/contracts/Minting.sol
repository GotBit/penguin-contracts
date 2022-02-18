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
    bytes32 whiteListRoot;
    bytes32 OGRoot;

    uint256 public ogQuantity = 4;
    uint256 public whitlistQuantity = 2;
    uint256 public maxQuantity = 20;

    mapping(address => uint256) public minted;

    /// @dev verifies ogs
    /// @param proof array of bytes for merkle tree verifing
    /// @param root tree's root
    /// @param leaf keccak256 of user address
    function verifyOG(
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

    /// @dev verifies whitelist
    /// @param proof array of bytes for merkle tree verifing
    /// @param root tree's root
    /// @param leaf keccak256 of user address
    function verifyWhitelist(
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

    /// @dev mints nft to user
    /// @param quantity amount of nft to mint
    /// @param proof array of bytes for merkle tree verifing
    function mint(uint256 quantity, bytes32[] memory proof) external {
        console.log('start date', startDate);
        require(
            (startDate != 0) && (block.timestamp < startDate + 7 days),
            'Mint have not started yet'
        );

        if (block.timestamp - startDate < 1 days) {
            bytes32 leaf = keccak256(abi.encode(msg.sender));
            bool isOG = verifyOG(proof, OGRoot, leaf);
            bool isWhitelist = verifyWhitelist(proof, whiteListRoot, leaf);

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
    /// @param _whiteListRoot whitelist's tree root
    /// @param _OGRoot OG's tree root
    function createWhitelist(bytes32 _whiteListRoot, bytes32 _OGRoot) external onlyOwner {
        whiteListRoot = _whiteListRoot;
        OGRoot = _OGRoot;
    }

    constructor(address nft_) {
        nft = IERC721Custom(nft_);
    }
}

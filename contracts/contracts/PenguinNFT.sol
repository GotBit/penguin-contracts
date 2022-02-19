//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import 'erc721a/contracts/ERC721A.sol';
import '@openzeppelin/contracts/access/AccessControl.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract PenguinNFT is ERC721A, AccessControl, Ownable {
    bytes32 public constant minter = 'minter';
    string public baseURI;

    constructor() ERC721A('Genesis Penguin', 'GP') {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /// @dev mint
    /// @param quantity amount to mint
    function mint(address user, uint256 quantity) external payable onlyRole(minter) {
        // _safeMint's second argument now takes in a quantity, not a tokenId.
        _safeMint(user, quantity);
    }

    /// @dev set minter address
    /// @param _minter minter address
    function setMinter(address _minter) external onlyOwner {
        grantRole(minter, _minter);
    }

    /// @dev revoke minter address
    /// @param _minter minter address
    function revokeMinter(address _minter) public {
        revokeRole(minter, _minter);
    }

    function setURI(string memory uri) public onlyOwner {
        baseURI = uri;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC721A, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/access/AccessControl.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

contract PenguinNFT is ERC721, AccessControl, Ownable {
    bytes32 public constant MINTER_ROLE = keccak256('MINTER_ROLE');
    string public baseURI = 'https://mint-penguinkart.com/';
    uint256 public minted;
    uint256 public maxSupply;

    constructor(uint256 maxSupply_) ERC721('Genesis Penguin', 'GP') {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        maxSupply = maxSupply_;
    }

    /// @dev mint
    /// @param id token id to mint
    function mint(address user, uint256 id) external payable onlyRole(MINTER_ROLE) {
        // _safeMint's second argument now takes in a quantity, not a tokenId.
        require((minted += 1) <= maxSupply);
        ERC721._safeMint(user, id);
        minted += 1;
    }

    /// @dev set minter address
    /// @param _minter minter address
    function setMinter(address _minter) external onlyOwner {
        grantRole(MINTER_ROLE, _minter);
    }

    /// @dev revoke minter address
    /// @param _minter minter address
    function revokeMinter(address _minter) public {
        revokeRole(MINTER_ROLE, _minter);
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
        override(ERC721, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}

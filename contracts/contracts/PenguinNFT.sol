//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import 'erc721a/contracts/ERC721A.sol';
import '@openzeppelin/contracts/access/AccessControl.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract PenguinNFT is ERC721A, AccessControl, Ownable {
    bytes32 public constant MINTER_ROLE = keccak256('MINTER_ROLE');
    string public baseURI;
    uint256 public minted;
    uint256 public maxSupply;

    constructor(uint256 maxSupply_) ERC721A('Genesis Penguin', 'GP') {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        maxSupply = maxSupply_;
    }

    /// @dev mint
    /// @param quantity amount to mint
    function mint(address user, uint256 quantity) external payable onlyRole(MINTER_ROLE) {
        // _safeMint's second argument now takes in a quantity, not a tokenId.
        require((quantity + minted) <= maxSupply);
        _safeMint(user, quantity);
        minted += quantity;
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
        override(ERC721A, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}

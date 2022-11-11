// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC721, ERC721URIStorage, Ownable {
    constructor() ERC721("MyToken", "MTK") {}

    event Attest(address indexed to, uint256 indexed tokenId);

    event Revoke(address indexed to, uint256 indexed tokenId);

    function safeMint(
        address to,
        uint256 tokenId,
        string memory uri
    ) public onlyOwner {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 firstTokenId,
        uint256 batchSize
    ) internal virtual override {
        require(batchSize == 0, "Batch minting not allowed");
        require(
            from == address(0) || to == address(0),
            "Soulbound tokens can't be tranfered."
        );
    }

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 firstTokenId,
        uint256 batchSize
    ) internal virtual override {
        require(batchSize == 0, "Batch burning not allowed");
        if (from == address(0)) {
            emit Attest(to, firstTokenId);
        } else if (to == address(0)) {
            emit Revoke(to, firstTokenId);
        }
    }
}

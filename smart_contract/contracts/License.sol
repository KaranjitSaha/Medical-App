// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Misc.sol";

contract MediStore is ERC721, ERC721URIStorage, Ownable, Misc {
    constructor() ERC721("MediStore", "MediStore") {}

    ////BASIC NFT FUNCTIONS

    mapping(address => uint256[]) internal tokenList;

    function safeMint(
        address to,
        uint16[] memory tokenIdParts,
        string memory uri,
        uint16[] memory seedParts,
        string memory timeParts
    ) public onlyOwner {
        ////JS INTEERFACE

        uint256 tokenId = combine(tokenIdParts);
        uint256 seed = combine(seedParts);

        ////BASIC NFT FUNCTION

        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);

        ////SECURITY INIT

        updateSeed(tokenId, seed);
        timeLent[tokenId] = block.timestamp;
        tokenList[msg.sender].push(tokenId);
    }

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

    ////DIFFERENTIAL SECURITY SYSTEM

    mapping(uint256 => uint256) seedMap;
    mapping(uint256 => string) timeLent;

    function updateSeed(uint256 tokenId, uint16[] seedParts) internal {
        seed = combine(seedParts);
        seedMap[tokenId] = seed;
    }

    function getCurrentTime() public view returns (string memory) {
        return uintToString(block.timestamp);
    }

    function getLastUpdatedTime(uint256 tokenId)
        public
        view
        onlyOwner
        returns (string)
    {
        return uintToString(timeLent[tokenId]);
    }

    function getTokenList() public view returns (uint256[] memory) {
        return tokenList[msg.sender];
    }

    ////SOUL BOUND SYSTEM

    event Attest(address indexed to, uint256 indexed tokenId);
    event Revoke(address indexed to, uint256 indexed tokenId);

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256,
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

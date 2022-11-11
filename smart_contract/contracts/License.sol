// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Misc.sol";

contract MediStore is ERC721, ERC721URIStorage, Ownable, Misc {
    constructor() ERC721("MediStore", "MediStore") {}

    ////BASIC NFT FUNCTIONS

    struct metaData {
        string time;
        string group;
        string issue;
    }

    mapping(uint256 => metaData) metaDataMap;

    mapping(address => uint256[]) internal tokenList;

    function safeMint(
        address to,
        uint256 tokenId,
        string memory uri,
        uint256 seed,
        metaData memory mD
    ) public onlyOwner {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);

        updateSeed(tokenId, seed, mD.time);
        metaDataMap[tokenId] = mD;
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

    function getTokenList() public view returns (uint256[] memory) {
        return tokenList[msg.sender];
    }

    ////DIFFERENTIAL SECURITY SYSTEM

    mapping(uint256 => uint256) seedMap;

    function updateSeed(
        uint256 tokenId,
        uint256 seed,
        string memory time
    ) internal {
        seedMap[tokenId] = seed;
        metaDataMap[tokenId].time = time;
    }

    function getSeed(uint256 tokenId) public view returns (uint256) {
        return seedMap[tokenId];
    }

    function getCurrentTime() public view returns (string memory) {
        return uintToString(block.timestamp);
    }

    function getMetaData(uint256 tokenId)
        public
        view
        onlyOwner
        returns (metaData memory)
    {
        return metaDataMap[tokenId];
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
        address,
        address,
        uint256,
        uint256
    ) internal virtual override {
        require(false, "Burning not allowed");
    }
}

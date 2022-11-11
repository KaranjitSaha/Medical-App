// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Misc.sol";

contract MedRecord is ERC721, ERC721URIStorage, Ownable, Misc {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("MedRecord", "MedRecord") {}

    ////BASIC NFT FUNCTIONS

    struct metaData {
        string time;
        string group;
        string issue;
    }

    mapping(uint256 => metaData) metaDataMap;

    mapping(address => uint256[]) internal tokenList;

    function safeMint(
        string memory uri,
        uint256 seed,
        metaData memory mD
    ) public onlyOwner {
        _tokenIds.increment();
        uint256 newItemID = _tokenIds.current();

        _safeMint(msg.sender, newItemID);

        updateSeed(newItemID, seed, mD, uri);
        metaDataMap[newItemID] = mD;
        tokenList[msg.sender].push(newItemID);
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
        metaData memory mD,
        string memory uri
    ) internal {
        seedMap[tokenId] = seed;
        metaDataMap[tokenId] = mD;
        _setTokenURI(tokenId, uri);
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
        address,
        uint256,
        uint256
    ) internal virtual override {
        require(from == address(0), "Medical Records can't be tranfered.");
    }

    function _afterTokenTransfer(
        address from,
        address,
        uint256,
        uint256
    ) internal virtual override {
        require(from == address(0), "Medical Records can't be tranfered.");
    }
}

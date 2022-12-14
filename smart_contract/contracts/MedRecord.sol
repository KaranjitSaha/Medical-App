// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Misc.sol";

contract MedRecord is ERC721, ERC721URIStorage, Ownable, Misc {
    constructor() ERC721("MedRecord", "MedRecord") {}

    ////BASIC NFT FUNCTIONS

    struct metaData {
        string time; //Last time the seed was renewed (Access Revoked)
        string group; //The type of document
        string issue; //Time of issue of document
        string name; //Name of document
        string extension; //Extension of file
        string doctorName; //Doctor Name
    }

    mapping(uint256 => bool) usedTokenId;
    mapping(uint256 => metaData) metaDataMap;
    mapping(address => uint256[]) internal tokenList;

    function safeMint(
        uint256 tokenId,
        string memory uri,
        uint256 seed,
        metaData memory mD
    ) public {
        require(!usedTokenId[tokenId], "Token Id already in use.");
        tokenOwner[tokenId] = msg.sender;
        _safeMint(msg.sender, tokenId);
        updateSeed(tokenId, seed, mD, uri);
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

    //Ownership system

    mapping(uint256 => address) tokenOwner;
    mapping(address => uint256) passCheckSeed;
    mapping(address => string) passCheckHash;
    mapping(address => bool) signedUp;

    modifier onlyTokenOwner(uint256 tokenId) {
        require(
            tokenOwner[tokenId] == msg.sender,
            "Only the owner of this token can access it."
        );
        _;
    }

    modifier onlyNewUser() {
        require(!signedUp[msg.sender], "This user already exists.");
        _;
    }

    modifier onlyOldUser() {
        require(signedUp[msg.sender], "This user already exists.");
        _;
    }

    function preSignUp(uint256 seed) public onlyNewUser {
        passCheckSeed[msg.sender] = seed;
    }

    function getUserSeed() public view returns (uint256) {
        return passCheckSeed[msg.sender];
    }

    function signUp(string memory passHash) public onlyNewUser {
        passCheckHash[msg.sender] = passHash;
        signedUp[msg.sender] = true;
    }

    function getPassCheckHash() public view returns (string memory) {
        return passCheckHash[msg.sender];
    }

    function updatePassword(string memory passHash) public onlyOldUser {
        passCheckHash[msg.sender] = passHash;
    }

    // Differential security system

    mapping(uint256 => uint256) seedMap;

    function updateSeed(
        uint256 tokenId,
        uint256 seed,
        metaData memory mD,
        string memory uri
    ) public onlyTokenOwner(tokenId) {
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
        returns (metaData memory)
    {
        return metaDataMap[tokenId];
    }

    // soul bound nft

    event Attest(address indexed to, uint256 indexed tokenId);
    event Revoke(address indexed to, uint256 indexed tokenId);

    function _beforeTokenTransfer(
        address from,
        address,
        uint256,
        uint256
    ) internal virtual override {
        require(from == address(0), "Soulbound tokens can't be tranfered.");
    }

    function _afterTokenTransfer(
        address from,
        address,
        uint256,
        uint256
    ) internal virtual override {
        require(from == address(0), "Soulbound tokens can't be tranfered.");
    }
}

const { medRecord } = require('deploy')
const { ethers } = require("hardhat")

function mintMedRecord(user, tokenID, URI, seed, metaData) {
    medRecord.connect(user).safeMint(tokenID, URI, seed, metaData);
}

function getURI(tokID) {
    return medRecord.tokenURI(tokID)
}

function getTokenList(user) {

}

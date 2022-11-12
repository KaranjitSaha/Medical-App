const { medRecord } = require('deploy')
const { ethers } = require("hardhat")

function mintMedRecord(user, tokenID, URI, seed, metaData) {
    medRecord.connect(user).safeMint(tokenID, URI, seed, metaData);
}

function getURI(tokID) {
    return medRecord.tokenURI(tokID)
}

function getTokenList(user) {
    return medRecord.connect(user).getTokenList()
}

function updateSeed(user, tokID, seed, metaData, URI) {
    medRecord.connect(user).updateSeed(tokID, seed, metaData, URI)
}

function getSeed(tokID) {
    medRecord.getSeed(tokID)
}

function getCurrentTime() {
    return medRecord.getCurrentTime()
}

function getMetaData(tokID) {
    return medRecord.getMetaData(tokID)
}

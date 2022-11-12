const { medRecord } = require('deploy')
const { ethers } = require("hardhat")
const { encrypt, decrypt } = require("./Security.jss")
const { getRandom256 } = require("./MiscMath.js")

function mintMedRecord(user, URI, metadata, password) {
    tokenID = getRandom256()
    seed = getRandom256()
    time = getCurrentTime()
    metadata["time"] = time
    metadata["issue"] = time
    metadata.time = encrypt(seed, password, metadata.time)
    metadata.group = encrypt(seed, password, metadata.group)
    metadata.issue = encrypt(seed, password, metadata.issue)
    metadata.name = encrypt(seed, password, metadata.name)
    uri = encrypt(seed, password, uri)
    medRecord.connect(user).safeMint(tokenID, URI, seed, metadata);
}

function getURI(tokID, password) {
    uri = medRecord.tokenURI(tokID)
    return decrypt(getSeed(tokenID), password, uri)
}

function getTokenList(user) {
    return medRecord.connect(user).getTokenList()
}

function updateSeed(user, tokID, password) {
    uri = getURI(tokenID)
    metadata = getMetaData(tokenID)
    seed = getSeed(tokenID)
    metadata.time = decrypt(seed, password, metadata.time)
    metadata.group = decrypt(seed, password, metadata.group)
    metadata.issue = decrypt(seed, password, metadata.issue)
    metadata.name = decrypt(seed, password, metadata.name)
    uri = decrypt(seed, password, uri)
    seed = getRandom256()
    metadata.time = encrypt(seed, password, metadata.time)
    metadata.group = encrypt(seed, password, metadata.group)
    metadata.issue = encrypt(seed, password, metadata.issue)
    metadata.name = encrypt(seed, password, metadata.name)
    uri = encrypt(seed, password, uri)
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

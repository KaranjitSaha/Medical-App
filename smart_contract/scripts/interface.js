const { encrypt, decrypt } = require("./Security.js")
const { getRandom256 } = require("./MiscMath.js")



async function getURI(medRecord, tokID, password) {
    uri = medRecord.tokenURI(tokID)
    return await decrypt(getSeed(tokenID), password, uri)
}

async function getTokenList(medRecord, user) {
    return await medRecord.connect(user).getTokenList()
}

async function updateSeed(medRecord, user, tokID, password) {
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
    await medRecord.connect(user).updateSeed(tokID, seed, metaData, URI)
}

async function getSeed(medRecord, tokID) {
    await medRecord.getSeed(tokID)
}

async function getCurrentTime(medRecord) {
    return await medRecord.getCurrentTime()
}

async function getMetaData(medRecord, tokID) {
    return await medRecord.getMetaData(tokID)
}
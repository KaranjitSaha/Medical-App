const { encrypt, decrypt } = require("./Security.js")
const { getRandom256 } = require("./MiscMath.js")

async function getCurrentTime(medRecord) {
    return await medRecord.getCurrentTime()
}


async function mintMedRecord(medRecord, user, URI, metadata, password) {
    tokenID = getRandom256()
    seed = getRandom256()
    time = getCurrentTime(medRecord)
    metadata["time"] = time
    metadata["issue"] = time
    metadata.time = encrypt(seed, password, metadata.time)
    metadata.group = encrypt(seed, password, metadata.group)
    metadata.issue = encrypt(seed, password, metadata.issue)
    metadata.name = encrypt(seed, password, metadata.name)
    URI = encrypt(seed, password, URI)
    await medRecord.connect(user).safeMint(tokenID, URI, seed, metadata);
}
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



async function getMetaData(medRecord, tokID) {
    return await medRecord.getMetaData(tokID)
}
exports.mintMedRecord = mintMedRecord;
exports.getCurrentTime = getCurrentTime
exports.mintMedRecord = mintMedRecord
exports.getURI = getURI
exports.getTokenList = getTokenList
exports.updateSeed = updateSeed
exports.getSeed = getSeed
exports.getMetaData = getMetaData
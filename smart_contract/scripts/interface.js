const { encrypt, decrypt } = require("./Security.js")
const { getRandom256, Hash } = require("./MiscMath.js")

async function getCurrentTime(medRecord, user) {
    return await medRecord.connect(user).getCurrentTime()
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
    metadata.extension = encrypt(seed, password, metadata.extension)
    metadata.doctorName = encrypt(seed, password, metadata.doctorName)
    URI = encrypt(seed, password, URI)
    await medRecord.connect(user).safeMint(tokenID, URI, seed, metadata);
}
async function getURI(medRecord, user, tokID, password) {
    uri = medRecord.connect(user).tokenURI(tokID)
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
    metadata.extension = decrypt(seed, password, metadata.extension)
    metadata.doctorName = decrypt(seed, password, metadata.doctorName)
    uri = decrypt(seed, password, uri)
    seed = getRandom256()
    metadata.time = encrypt(seed, password, metadata.time)
    metadata.group = encrypt(seed, password, metadata.group)
    metadata.issue = encrypt(seed, password, metadata.issue)
    metadata.name = encrypt(seed, password, metadata.name)
    metadata.extension = encrypt(seed, password, metadata.extension)
    metadata.doctorName = encrypt(seed, password, metadata.doctorName)
    uri = encrypt(seed, password, uri)
    await medRecord.connect(user).updateSeed(tokID, seed, metaData, URI)
}

async function getSeed(medRecord, user, tokID) {
    await medRecord.connect(user).getSeed(tokID)
}



async function getMetaData(medRecord, user, tokID) {
    metadata = medRecord.connect(user).getMetaData(tokID)
    metadata.time = decrypt(seed, password, metadata.time)
    metadata.group = decrypt(seed, password, metadata.group)
    metadata.issue = decrypt(seed, password, metadata.issue)
    metadata.name = decrypt(seed, password, metadata.name)
    metadata.extension = decrypt(seed, password, metadata.extension)
    metadata.doctorName = decrypt(seed, password, metadata.doctorName)
    return await metadata
}

async function signUp(medRecord, user, password) {
    seed = getRandom256()
    medRecord.connect(user).preSignUp(seed)
    passCheckHash = Hash(password + seed)
    medRecord.connect(user).updatePassword(passCheckHash)
}

async function signIn(medRecord, user, password) {
    seed = medRecord.connect(user).getUserSeed()
    passCheckHash1 = Hash(password + seed)
    passCheckHash2 = medRecord.connect(user).getPassCheckHash()
    return passCheckHash1 == passCheckHash2
}

async function updatePassword(medRecord, user, password, new_pass) {
    seed = medRecord.connect(user).getUserSeed()
    passCheckHash1 = Hash(password + seed)
    passCheckHash2 = medRecord.connect(user).getPassCheckHash()
    if (passCheckHash1 == passCheckHash2) {
        newPassHash = Hash(new_pass + seed)
        medRecord.connect(user).updatePassword(newPassHash)
    }
}

exports.mintMedRecord = mintMedRecord
exports.getCurrentTime = getCurrentTime
exports.mintMedRecord = mintMedRecord
exports.getURI = getURI
exports.getTokenList = getTokenList
exports.updateSeed = updateSeed
exports.getSeed = getSeed
exports.getMetaData = getMetaData
exports.signIn = signIn
exports.signUp = signUp
exports.updatePassword = updatePassword
const { encrypt, decrypt } = require("./Security.js")
const { getRandom256, Hash } = require("./MiscMath.js")
const { BigNumber } = require('ethers')
const aesjs = require('aes-js');

async function getCurrentTime(medRecord, user) {
    return await medRecord.connect(user).getCurrentTime()
}


async function mintMedRecord(medRecord, user, URI, metadata, password) {
    let tokenID = getRandom256()
    let seed = getRandom256()
    let time = getCurrentTime(medRecord)
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
    let uri = medRecord.connect(user).tokenURI(tokID)
    return await decrypt(getSeed(tokID), password, uri)
}

async function getTokenList(medRecord, user) {
    return await medRecord.connect(user).getTokenList()
}

async function updateSeed(medRecord, user, tokenID, password) {
    let uri = getURI(tokenID)
    let metadata = getMetaData(tokenID)
    let seed = getSeed(tokenID)
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
    await medRecord.connect(user).updateSeed(tokenID, seed, metadata, uri)
}

async function getSeed(medRecord, user, tokID) {
    await medRecord.connect(user).getSeed(tokID)
}



async function getMetaData(medRecord, user, tokID, password) {
    let metadata = medRecord.connect(user).getMetaData(tokID)
    let seed = getSeed(tokID)
    metadata.time = decrypt(seed, password, metadata.time)
    metadata.group = decrypt(seed, password, metadata.group)
    metadata.issue = decrypt(seed, password, metadata.issue)
    metadata.name = decrypt(seed, password, metadata.name)
    metadata.extension = decrypt(seed, password, metadata.extension)
    metadata.doctorName = decrypt(seed, password, metadata.doctorName)
    return await metadata
}

async function signIn(medRecord, user, password) {
    let seed = await medRecord.connect(user).getUserSeed()
    if (seed.toString()==='0') {
        seed = getRandom256()
        await medRecord.connect(user).preSignUp(seed)
        let passCheckHash = aesjs.utils.hex.fromBytes(Hash(password + seed));
        await medRecord.connect(user).signUp(passCheckHash)
        return true
    }
    else{
        let passCheckHash1 = aesjs.utils.hex.fromBytes(Hash(password + seed))
        let passCheckHash2 = await medRecord.connect(user).getPassCheckHash()
        // console.log(passCheckHash1)
        // console.log(passCheckHash2)
        return passCheckHash1 == passCheckHash2
    }
}

async function updatePassword(medRecord, user, new_pass) {
    let seed = medRecord.connect(user).getUserSeed()
    let newPassHash = Hash(new_pass + seed)
    medRecord.connect(user).updatePassword(newPassHash)
}

exports.mintMedRecord = mintMedRecord
exports.getCurrentTime = getCurrentTime
exports.mintMedRecord = mintMedRecord
exports.getURI = getURI
exports.getTokenList = getTokenList
exports.updateSeedsplit = updateSeed
exports.getSeed = getSeed
exports.getMetaData = getMetaData
exports.signIn = signIn
exports.updatePassword = updatePassword
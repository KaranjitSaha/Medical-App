const { Encrypt, Decrypt,  getRandom256, Hash } = require("./MiscMath.js")

function getPassHash(seed, password) {
    return Hash(seed.toString() + password)
}

function encrypt(seed, password, data) {
    let key = getPassHash(seed, password)
    return Encrypt(data, key)
}

function decrypt(seed, password, data) {
    let key = getPassHash(seed, password)
    return Decrypt(data, key)
}

exports.encrypt = encrypt;
exports.decrypt = decrypt;
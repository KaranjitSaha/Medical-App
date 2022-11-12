import { getURI, updateSeed, getMetaData, getSeed } from "./interface.js"
import { Encrypt, getRandom256, Hash } from "./MiscMath.js"

function getPassHash(seed, password) {
    return Hash(seed.toString() + password)
}

function encrypt(seed, password, data) {
    key = getPassHash(seed, password)
    return Encrypt(data, key)
}

function decrypt(seed, password, data) {
    key = getPassHash(seed, password)
    return Decrypt(data, key)
}
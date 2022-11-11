import "./MiscMath.js"
import { Encrypt, Hash } from "./MiscMath.js"

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

function update(seed, metadata, uri, password) {
    metadata.time = encrypt(seed, password, metadata.time)
    metadata.group = encrypt(seed, password, metadata.group)
    metadata.issue = encrypt(seed, password, metadata.issue)
    metadata.name = encrypt(seed, password, metadata.name)
    uri = encrypt(seed, password, uri)
}
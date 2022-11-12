const { BigNumber } = require('ethers')
const CryptoJS = require("crypto-js")
const { createHash } = require('crypto');
const aesjs = require('aes-js');
const sha256 = require('js-sha256');

getRandom16 = function () {
    let rand = 1 << 16;
    rand = rand * Math.random();
    return Math.floor(rand);
}
exports.getRandom16 = getRandom16

split16 = function (bgn) {
    let base = 1 << 16;
    split = [];
    while (!bgn.isEqualTo(0)) {
        sha256 = require('js-sha256');

        split.push((bgn.modulo(base)).toNumber());
        bgn = bgn.dividedToIntegerBy(base);
    }
    return split;
}
exports.split16 = this.split16

split8 = function (bgn) {
    let base = 1 << 8;
    split = [];
    while (!bgn.isEqualTo(0)) {
        split.push((bgn.modulo(base)).toNumber());
        bgn = bgn.dividedToIntegerBy(base);
    }
    return split;
}
exports.split16 = this.split16

combine16 = function (rnd) {
    var out = BigNumber.from(0)
    for (var i = 0; i < 16; i++) {
        out = out.shl(16);
        out = out.or(rnd[i]);
    }
    // rnd.array.forEach(i => {
    //     out = out.shl(16);
    //     out = out.or(i);
    // });
    return out;
}
exports.combine16 = combine16

exports.getRandom256 = function () {
    var arr = []
    for (var i = 0; i < 16; i++) {
        arr.push(getRandom16());
    }
    return combine16(arr);
}

Encrypt = function (object, hash) {
    // return CryptoJS.AES.encrypt(JSON.stringify(object), hash.toString()).toString();
    var textBytes = aesjs.utils.utf8.toBytes(object.toString());
    var aesCtr = new aesjs.ModeOfOperation.ctr(hash);
    var encryptedBytes = aesCtr.encrypt(textBytes);
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    return encryptedHex;
}
exports.Encrypt = Encrypt

Decrypt = function (cipherText, hash) {
    // return CryptoJS.AES.decrypt(cipherText, hash.toString()).toString(CryptoJS.enc.Utf8);
    var encryptedBytes = aesjs.utils.hex.toBytes(cipherText);
    var aesCtr = new aesjs.ModeOfOperation.ctr(hash);
    var decryptedBytes = aesCtr.decrypt(encryptedBytes);
    var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    return decryptedText;
}
exports.Decrypt = this.Decrypt

Hash = function (plainText) {
    // return createHash('sha256').update(plainText).digest('hex');
    return sha256.array(plainText);
}
exports.Hash = Hash
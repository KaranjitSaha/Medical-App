// const { BigNumber } = require('ethers')
// const CryptoJS = require("crypto-js")
// const Cryptr = require('cryptr');
// const { createHash } = require('crypto-browserify');

// getRandom16 = function () {
//     let rand = 1 << 16;
//     rand = rand * Math.random();
//     return Math.floor(rand);
// }
// exports.getRandom16 = getRandom16

// exports.split16 = function (bgn) {
//     let base = 1 << 16;
//     split = [];
//     while (!bgn.isEqualTo(0)) {
//         split.push((bgn.modulo(base)).toNumber());
//         bgn = bgn.dividedToIntegerBy(base);
//     }
//     return split;
// }

// combine16 = function (rnd) {
//     var out = BigNumber.from(0)
//     for (var i = 0; i < 16; i++) {
//         out = out.shl(16);
//         out = out.or(rnd[i]);
//     }
//     // rnd.array.forEach(i => {
//     //     out = out.shl(16);
//     //     out = out.or(i);
//     // });
//     return out;
// }
// exports.combine16 = combine16

// exports.getRandom256 = function () {
//     var arr = []
//     for (var i = 0; i < 16; i++) {
//         arr.push(getRandom16());
//     }
//     return combine16(arr);
// }

// exports.Encrypt = function (object, hash) {
//     // return CryptoJS.AES.encrypt(JSON.stringify(object), hash.toString()).toString();
//     const cryptr = new Cryptr(hash.toString());
//     return cryptr.encrypt(JSON.stringify(object))
// }

// exports.Decrypt = function (cipherText, hash) {
//     // return CryptoJS.AES.decrypt(cipherText, hash.toString()).toString(CryptoJS.enc.Utf8);
//     const cryptr = new Cryptr(hash.toString());
//     return cryptr.decrypt(JSON.stringify(object))
// }

// exports.Hash = function (plainText) {
//     return createHash('sha256').update(plainText).digest('hex');
// }
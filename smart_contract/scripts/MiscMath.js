const { BigNumber } = require('ethers')

exports.getRandom16 = function() {
    let rand=1<<16;
    rand = rand*Math.random();
    return Math.floor(rand);
}

exports.split16 = function(bgn) {
    let base=1<<16;
    split=[];
    while(!bgn.isEqualTo(0)){
        split.push((bgn.modulo(base)).toNumber());
        bgn=bgn.dividedToIntegerBy(base);
    }
    return split;
}

exports.combine16 = function(rnd) {
    var out=BigNumber.from(0)
    rnd.array.forEach(i => {
        out=out.shl(16);
        out=out.or(i);
    });
    return out;
}

const CryptoJS = require("crypto-js");
const bcrypt = require("bcrypt");

exports.Encrypt = function(object,seed){
    return CryptoJS.AES.encrypt(JSON.stringify(object),seed.toString()).toString();
}
exports.Decrypt= function(cipherText, seed){
    return CryptoJS.AES.decrypt(cipherText,seed.toString()).toString(CryptoJS.enc.Utf8);
}

exports.Hashing= async function(plainText, saltRounds){
    return await bcrypt.hash(plainText,saltRounds);
}
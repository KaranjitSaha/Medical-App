const { BigNumber } = require('ethers')
const CryptoJS = require("crypto-js")
const { createHash } = require('crypto');

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

exports.getRandom256 = function() {
    var arr=[]
    for(var i=0;i<16;i++){
        arr.push(getRandom16());
    }
    return combine16(arr);
}

exports.Encrypt = function(object,hash){
    return CryptoJS.AES.encrypt(JSON.stringify(object),hash.toString()).toString();
}

exports.Decrypt = function(cipherText, hash){
    return CryptoJS.AES.decrypt(cipherText,hash.toString()).toString(CryptoJS.enc.Utf8);
}

exports.Hash = function(plainText) {
    return createHash('sha256').update(plainText).digest('hex');
}
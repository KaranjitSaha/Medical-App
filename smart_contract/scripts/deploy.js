// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat")
const { BigNumber } = require('ethers')
const CryptoJS = require("crypto-js")
const { createHash } = require('crypto');

getRandom16 = function () {
    let rand = 1 << 16;
    rand = rand * Math.random();
    return Math.floor(rand);
}

split16 = function (bgn) {
    let base = 1 << 16;
    split = [];
    while (!bgn.isEqualTo(0)) {
        split.push((bgn.modulo(base)).toNumber());
        bgn = bgn.dividedToIntegerBy(base);
    }
    return split;
}

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
combine16 = combine16

getRandom256 = function () {
    var arr = []
    for (var i = 0; i < 16; i++) {
        arr.push(getRandom16());
    }
    return combine16(arr);
}

Encrypt = function (object, hash) {
    return CryptoJS.AES.encrypt(JSON.stringify(object), hash.toString()).toString();
}

Decrypt = function (cipherText, hash) {
    return CryptoJS.AES.decrypt(cipherText, hash.toString()).toString(CryptoJS.enc.Utf8);
}

Hash = function (plainText) {
    return createHash('sha256').update(plainText).digest('hex');
}
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

async function main() {
  const MedRecord = await hre.ethers.getContractFactory("MedRecord")
  const medRecord = await MedRecord.deploy()

  let [customer1, customer2] = await hre.ethers.getSigners()
  await mintMedRecord(medRecord, customer1, "Hello", {
      'time': "10:00",
      'group': "Prescription",
      "issue": "10:00",
      "name": "World2.0"
    }, "raddi")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

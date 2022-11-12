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
const contr = require('./interface')

async function main() {
  const MedRecord = await hre.ethers.getContractFactory("MedRecord")
  const medRecord = await MedRecord.deploy()

  let [customer1, customer2] = await hre.ethers.getSigners()
  await contr.mintMedRecord(medRecord, customer1, "Hello", {
      'time': "10:00",
      'group': "Prescription",
      "issue": "10:00",
      "name": "World2.0"
    }, "raddi")

  console.log(await contr.getTokenList(medRecord, customer1));

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

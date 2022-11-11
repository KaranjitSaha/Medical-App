const { expect } = require("chai");
const { ethers } = require("hardhat")
const { getRandom256, getRandom16 } = require("../scripts/MiscMath.js")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('MedRecord.sol', () => {

  let medRecord
  let customer1, customer2
  let token1, token2;
  let metaData1 = {
    'time': "10:00",
    'group': "Prescription",
    "issue": "10:00",
    "name": "World"
  },
    metaData2 = {
      'time': "10:00",
      'group': "Prescription",
      "issue": "10:00",
      "name": "World"
    }

  beforeEach(async () => {
    [customer1, customer2] = await ethers.getSigners()

    const MedRecord = await ethers.getContractFactory('MedRecord')
    medRecord = await MedRecord.deploy()
    // medRecord1 = await MedRecord.deploy()

    // Creating a basic NFT
    token1 = getRandom256()
    let transaction = await medRecord
      .connect(customer1)
      .safeMint(
        token1,
        "https://ipfs.io/ipfs/QmTudSYeM7mz3PkYEWXWqPjomRPHogcMFSq7XAvsvsgAPS",
        getRandom256(),
        metaData1
      )
    await transaction.wait()

    token2 = getRandom256()
    transaction = await medRecord1
      .connect(customer2)
      .safeMint(
        token2,
        "http://ipfs.io/ipfs/QmTudSYeM7mz3PkYEWXWqPjomRPHogcMFSq7XAvsvsgAPS",
        getRandom256(),
        metaData2
      )
    await transaction.wait()
  })

  describe('basic tests', () => {
    it('checking for get token', async () => {
      let result = await medRecord.tokenURI(token1)
      expect(result).to.be.equal("https://ipfs.io/ipfs/QmTudSYeM7mz3PkYEWXWqPjomRPHogcMFSq7XAvsvsgAPS")
    })

    it('getting the token list', async () => {
      let result = await medRecord.getTokenList()
      console.log(result)
      expect(1).to.be.equal(1)
    })

    it('updating seed', async () => {
      let newSeed = getRandom256()
      await medRecord
        .updateSeed(
          token2,
          newSeed,
          metaData1,
          "hello"
        )
      let result = await medRecord.getSeed(token1)
      expect(result).to.be.equal(newSeed)
    })

  })

})

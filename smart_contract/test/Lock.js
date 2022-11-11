const { expect } = require("chai");
const { ethers } = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('MedRecord.sol', () => {

  let medRecord

  beforeEach(async () => {
    [customer] = await ethers.getSigners()

    const MedRecord = await ethers.getContractFactory('MedRecord')
    medRecord = await MedRecord.deploy()
  })
  describe('Deploy', async () => {
    it('Creating a Basic NFT', async () => {
      let transaction = await medRecord.connect(customer).safeMint("https://ipfs.io/ipfs/QmTudSYeM7mz3PkYEWXWqPjomRPHogcMFSq7XAvsvsgAPS", 10, { 'time': "10:00", 'group': "Prescription", "issue": "10:00" })
      await transaction.wait()
    })
  })

})

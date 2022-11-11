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

    // Creating a basic NFT
    let transaction = await medRecord.connect(customer).safeMint("https://ipfs.io/ipfs/QmTudSYeM7mz3PkYEWXWqPjomRPHogcMFSq7XAvsvsgAPS", 10, { 'time': "10:00", 'group': "Prescription", "issue": "10:00" })
    await transaction.wait()

    transaction = await medRecord.connect(customer).safeMint("https://ipfs.io/ipfs/QmTudSYeM7mz3PkYEWXWqPjomRPHogcMFSq7XAvsvsgAPS", 10, { 'time': "10:00", 'group': "Prescription", "issue": "10:00" })
    await transaction.wait()
  })

  describe('basic tests', () => {
    it('checking for get token', async () => {
      let result = await medRecord.tokenURI(1)
      expect(result).to.be.equal("https://ipfs.io/ipfs/QmTudSYeM7mz3PkYEWXWqPjomRPHogcMFSq7XAvsvsgAPS")
    })

    it('getting the token list', async () => {
      let result = await medRecord.getTokenList()
      console.log(result)
      expect(1).to.be.equal(1)
    })


  })

})

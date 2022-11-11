const { expect } = require("chai")
const { ethers } = require("hardhat")

describe('MedRecord.sol', () => {

    let medRecord
    [customer] = ethers.getSigners()
    const MedRecord = ethers.getContractFactory('MedRecord')
    medRecord = MedRecord.deploy()
    let transaction = medRecord.connect(customer).safeMint("https://ipfs.io/ipfs/QmTudSYeM7mz3PkYEWXWqPjomRPHogcMFSq7XAvsvsgAPS", 10, { 'time': "10:00", 'group': "Prescription", "issue": "10:00" })
    transaction.wait()
    transaction = medRecord.connect(customer).safeMint("https://ipfs.io/ipfs/QmTudSYeM7mz3PkYEWXWqPjomRPHogcMFSq7XAvsvsgAPS", 10, { 'time': "10:00", 'group': "Prescription", "issue": "10:00" })
    transaction.wait()

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
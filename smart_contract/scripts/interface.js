const { expect } = require("chai");
const { ethers } = require("hardhat")
import "./MiscMath.js"
import { getRandom256 } from "./MiscMath.js";

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('MedRecord.sol', () => {

    let medRecord
    [customer] = ethers.getSigners()

    const MedRecord = ethers.getContractFactory('MedRecord')
    medRecord = MedRecord.deploy()

    // Creating a basic NFT
    let token1 = getRandom256()
    let transaction = medRecord.connect(customer).safeMint(getRandom256(), "https://ipfs.io/ipfs/QmTudSYeM7mz3PkYEWXWqPjomRPHogcMFSq7XAvsvsgAPS", 10, { 'time': "10:00", 'group': "Prescription", "issue": "10:00", "name": "World" })
    transaction.wait()
    transaction = medRecord.connect(customer).safeMint(getRandom256(), "https://ipfs.io/ipfs/QmTudSYeM7mz3PkYEWXWqPjomRPHogcMFSq7XAvsvsgAPS", 10, { 'time': "10:00", 'group': "Prescription", "issue": "10:00", "name": "World" })
    transaction.wait()
    result = medRecord.tokenURI(1)

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
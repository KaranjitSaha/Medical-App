import process from 'process'
import { Web3Storage, getFilesFromPath } from 'web3.storage'
import * as dotenv from 'dotenv'
dotenv.config()
const token = process.env.WEB3_STORAGE_KEY

const Web3Client = new Web3Storage({ token: token })

export {retrieveFileFromIPFS, uploadFileIPFSWithProgress}
function retrieveFileFromIPFS(cid,filename){
  return cid + ".ipfs.w3s.link" +"/"+filename
}

async function uploadFileIPFSWithProgress(filePath){

  const files = []

  const pathFiles = await getFilesFromPath(filePath)
  files.push(...pathFiles)


  // show the root cid as soon as it's ready
  const onRootCidReady = cid => {
    console.log('uploading files with cid:', cid)
  }

  // when each chunk is stored, update the percentage complete and display
  const totalSize = files.map(f => f.size).reduce((a, b) => a + b, 0)
  let uploaded = 0

  const onStoredChunk = size => {
    uploaded += size
    const pct = 100 * (uploaded / totalSize)
    console.log(`Uploading... ${pct.toFixed(2)}% complete`)
  }

  // makeStorageClient returns an authorized web3.storage client instance
  const cid = await Web3Client.put(files,{ onRootCidReady, onStoredChunk})
  console.log('stored file with cid: ',cid)
  return cid
}

// TESTING FUNCTIONS
// let cid = await uploadFileIPFSWithProgress("test.pdf")
// let linkToOpen = retrieveFileFromIPFS(cid,"test.pdf")
// console.log(linkToOpen)

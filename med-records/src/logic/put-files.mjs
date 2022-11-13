import process from 'process'
import { Web3Storage, getFilesFromPath } from 'web3.storage'
const token = process.env.WEB3_STORAGE_KEY

const Web3Client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDZhOTgyQWE1ZjQ5NjEyNUNGNGZmMmRFMGViRTQxOTU4MzVjRTNjYjQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjgxODUyNzQwMTksIm5hbWUiOiJNZWRSZWNvcmRzIn0.hddh20-Ag7Oreu7ysStI6ETH3Fv5pi2cfgvQC66eUfo" })

export { retrieveFileFromIPFS, uploadFileIPFSWithProgress }
function retrieveFileFromIPFS(cid, filename) {
  return cid + ".ipfs.w3s.link" + "/" + filename
}

async function uploadFileIPFSWithProgress(myBlob) {

  const files = []
  const myFile = new File([myBlob], myBlob.name, {
    type: myBlob.type,
  });
  console.log(myFile);
  // const pathFiles = await getFilesFromPath(filePath)
  files.push(myFile)

  // makeStorageClient returns an authorized web3.storage client instance
  const cid = await Web3Client.put(files);
  console.log('stored file with cid: ', cid);
  return cid;
}

// TESTING FUNCTIONS
// let cid = await uploadFileIPFSWithProgress("test.pdf")
// let linkToOpen = retrieveFileFromIPFS(cid,"test.pdf")
// console.log(linkToOpen)

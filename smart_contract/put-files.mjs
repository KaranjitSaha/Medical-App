import process from 'process'
import minimist from 'minimist'
import { Web3Storage, getFilesFromPath } from 'web3.storage'
import * as dotenv from 'dotenv'
dotenv.config()
const token = process.env.WEB3_STORAGE_KEY

// async function main (args) { //args is an array and iska arg[0] contains
//   const args = minimist(process.argv.slice(2))
//   console.log(args)

//   if (!token) {
//     return console.error('A token is needed. You can create one on https://web3.storage')
//   }

//   if (args._.length < 1) {
//     return console.error('Please supply the path to a file or directory')
//   }

//   const storage = new Web3Storage({ token })
//   const files = []

//   for (const path of args._) {
//     const pathFiles = await getFilesFromPath(path)
//     files.push(...pathFiles)
//   }

//   console.log(`Uploading ${files.length} files`)
//   const cid = await storage.put(files)
//   console.log('Content added with CID:', cid)
// }
// Construct with token and endpoint
const client = new Web3Storage({ token: token });

const res = await client.get("bafybeighndw3lla25kcsij2kbt7rw4it24tyrk732ce4bpxgwlrcblyxra"); // Web3Response
const files = await res.files(); // Web3File[]
for (const file of files) {
  file.arrayBuffer().then(data=>console.log(data));
}


// main()
//import {a} from './app';
// const app = require('./app')

// console.log('hi')

const fs = require('fs');
// console.log(app)
// console.log(app.z())

// const arr = [4,8,9,7,5,3]

// const res = arr.filter((item)=>{
//     return item==4;
// })

// console.log(res)

fs.writeFileSync("Hello.txt","Hi this file")

console.log(`Dir Name: ==>${__dirname}\nFile Name:==>${__filename}`);
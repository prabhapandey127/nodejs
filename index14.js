
const fs = require('fs');
const { resolve } = require('path');

const path = require('path')

const dirPath = path.join(__dirname,'fs-crud')
const fileName = `${dirPath}/apple.txt`;

// fs.writeFileSync(fileName,'Hello i m good');

// fs.readFile(fileName, 'utf-8', (err,  item)=>{
//     console.log(item)
// })

// fs.appendFile(fileName,'\nNot he is not good', (err,item)=>{
//     if(!err){
//         console.log('file is updated')
//     }
// });

// fs.rename(fileName, `${dirPath}/fruit.txt`, (err)=>{
//     if(!err) console.log("File renamed!!")
// })


// fs.unlinkSync(`${dirPath}/fruit.txt`, (err)=>{
//     if(!err) console.log("File deleted!!")
// })
a =10
b= 20

let waitinData = new Promise ((resolve,reject)=>{
    setTimeout(function(){
       resolve(30)
       },5000)
})


waitinData.then((data)=>{
 b=data;
 console.log(a+b);
}
)




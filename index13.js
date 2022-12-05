const fs = require('fs')
const path = require('path')

const currentPath = path.join(__dirname,'files');
console.log(currentPath)

// for(i=0;i<5;i++){
//     fs.writeFileSync(`${currentPath}/hello${i}.txt`,`Hello${i}`)
// }

fs.readdir(currentPath,(err,files)=>{

    console.log(files)
    files.forEach((file )=>{
        console.log(file)
    })
})

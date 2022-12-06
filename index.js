const express = require('express');


const app = express();

const path = require('path');

const publicPath = path.join(__dirname, 'public')

app.set('view engine', 'ejs')



// text
// app.get('', (req,res) => {
//     res.send(`Hello , ${req.query.name} This is home page`)
// })
//html
// app.get('/about', (req,res) => {
//     res.send(`
//         <input type="text" placeholder="Enter Name" value="${req.query.name}" />
//         <button>Click</button>

//     `)
// })


//json
// app.get('/help', (req,res) => {
//     res.send({
//         name:'Prabhat',
//         age:22
//     })
// })

//page access with extension

//app.use(express.static(publicPath));


//page access without extension

app.get('', (req, res) => {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`)
})


//ejs web page
app.get('/profile', (req, res) => {

    const user = {
        name: "Prabhat", email: "prabhat@yopmail.com", age: 22, city: "Noida",
        skills: ['PHP', 'JS', 'React', 'Laravel', 'C++']
    };
    res.render('profile', { user })
})

app.get('/login', (req, res) => {

    res.render('login')
})

// 404 not found page
app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/404.html`)
})


app.listen(4500)
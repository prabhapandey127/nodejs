const express = require('express');
const filterRequest = require('./seprate-mid')
const app = express();
const route = express.Router();
app.set('view engine', 'ejs')


// application middleware (same file)


// app.use(filterRequest);

// group middleware 

route.use(filterRequest)


app.get('/', (req, res) => {

    res.render('common/header')
})




//route level middleware (used one, group and all routes)

//single middleware

app.get('/profile', filterRequest, (req, res) => {

    const user = {
        name: "Prabhat", email: "prabhat@yopmail.com", age: 22, city: "Noida",
        skills: ['PHP', 'JS', 'React', 'Laravel', 'C++']
    };
    res.render('profile', { user })
})
//double middleware

app.get('/about', filterRequest,(req, res) => {
    res.send('Welcome about us')
})

// group middleware

route.get('/contact',(req, res) => {
    res.send('Welcome contact us')
})
route.get('/help',(req, res) => {
    res.send('Welcome help')
})

app.get('/login', (req, res) => {

    res.render('login')
})

app.use('/',route)


app.listen(4500)
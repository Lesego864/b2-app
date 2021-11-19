const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const path = require('path');
const bodyParser = require('body-parser');



const homeRoutes = require('./routes/home-routes');

const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.static("./static"));

app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRoutes.routes)

// app.listen(3000,() => console.log('App is listening on url http://localhost:3000'))
app.listen(process.env.PORT || 3000);


const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_crud'
});

connection.connect(function(error) {
    if (!!error) console.log(error);
    else console.log('Database Connected!');
});

//set views file
app.set('views', path.join(__dirname, 'views'));

//set view engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res) => {
    // res.send('CRUD Operation using NodeJS / ExpressJS / MySQL');
    let sql = "SELECT * FROM users";
    let query = connection.query(sql, (err, rows) => {
        if (err) throw err;
        res.render('user_index', {
            title: 'CRUD Operation using NodeJS / ExpressJS / MySQL',
            users: rows
        });
    });
});


app.get('/add', (req, res) => {
    res.render('user_add', {
        title: 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.post('/save', (req, res) => {
    let data = { name: req.body.name, email: req.body.email, phone_no: req.body.phone_no };
    let sql = "INSERT INTO users SET ?";
    let query = connection.query(sql, data, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.get('/edit/:userId', (req, res) => {
    const userId = req.params.userId;
    let sql = `Select * from users where id = ${userId}`;
    let query = connection.query(sql, (err, result) => {
        if (err) throw err;
        res.render('user_edit', {
            title: 'CRUD Operation using NodeJS / ExpressJS / MySQL',
            user: result[0]
        });
    });
});


app.post('/update', (req, res) => {
    const userId = req.body.id;
    let sql = "update users SET name='" + req.body.name + "',  email='" + req.body.email + "',  phone_no='" + req.body.phone_no + "' where id =" + userId;
    let query = connection.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});


app.get('/delete/:userId', (req, res) => {
    const userId = req.params.userId;
    let sql = `DELETE from users where id = ${userId}`;
    let query = connection.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});
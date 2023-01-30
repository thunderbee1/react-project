// index.js
let connection = require('./database')
const express = require('express');
const app = express();
const port = 3000

connection.connect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', function (error, results, fields) {
        if (error) throw error;
        console.log(results[0]);
        res.send(results[0])
    });
  })

app.post('/signup', (req, res) => {
    let username = req.body.username
    let email = req.body.email
    let password = req.body.password
    let queryString = `INSERT INTO users (username, email, password) VALUES (?,?,?)`;
    let values = [username, email, password];
    connection.query(queryString, values, (err, result) => {
        if (err) {
            res.send(err)
        }
        else {
            console.log('1 record inserted')
            res.send(result)
        }
    });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
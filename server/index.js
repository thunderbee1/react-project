// index.js
let connection = require('./database')
const express = require('express');
const app = express();
const port = 3000

app.use(express.json());

connection.connect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.send(results)
    });
  })

app.post('/signup', (req, res) => {
    let username = req.body.username
    let id = req.body.id
    let pw = req.body.pw
    let queryString = `INSERT INTO users (username, id, pw) VALUES (?,?,?)`;
    let values = [username, id, pw];
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
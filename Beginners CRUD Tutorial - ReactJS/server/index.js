const express = require('express')
const app = express()
const mysql2 = require('mysql2/promise')



const db = mysql2.createConnection({
        host: 'localhost' ,
        user: 'root', 
        database: 'employeesystem', 
        port: 3306, 
})


app.get('/test',(req, res) => {
    res.send('Hello Test Port 3001')
})



app.get('/data/:id', (req, res)=>{

    //Variables id
    const id = req.params.id

    db.query(`select * from employee where id = ${id}`), (err, rows, fields) => {
        if (rows.length !== 0) {
          res.status(200).json(rows);
        } else {
          res.status(400).send("No products in database");
        }
      }
      console.log(rows)
      db.end()
})


app.post('/create' ,(req, res) => {
    const name = req.body.name
    const age = req.body.age
    const country = req.body.country
    const position = req.body.position
    const wage = req.body.wage

    db.query('INSERT INTO employee (name, age, country, position, wage) VALUES (?,?,?,?,?)',[name, age, country, position, wage], (err,result) => {
        if (err) {
            console.log(err)
        }else{
            res.send('Value Inserted')
        }
    })
})


app.listen(3001, ()=>{
    console.log('Your server running on port 3001')
})
const express = require('express');
const koalaRouter = express.Router();

const pool = require('/modules/pool');




// DB CONNECTION
//TO DO CONNECT TO THE DB

//add /pool.js   



/* 



*/

// GET
koalaRouter.get('/', (req, res)=>{
    const query = 'SELECT * from "koalas" '

pool.query(query)
.then(result=>{
    res.send(result.rows);
})
.catch((err)=>{
console.log('koalaRouter.get issue')
})


})




// POST
koalaRouter.post('/', (req, res) => {
    const newKoala = req.body;
    const query = `INSERT INTO koalas (name, favorite_color, age, ready_to_transfer, notes) VALUES ($1, $2, $3, $4, $5)`;
    const values = [newKoala.name, newKoala.favorite_color, newKoala.age, newKoala.ready_to_transfer, newKoala.notes];
    pool.query(query, values)
        .then(() => {
            res.sendStatus(200); 
        })
        .catch((err) => {
            console.log('error with koala post', err);
            res.sendStatus(500); 
        });
});

// PUT
koalaRouter.put('/:id', (req, res)=>{
    const koalaId=req.params.id;
    //
    pool.query(query, [koalaId])
    .then(() => {
        res.sendStatus(200);
    })
    .catch(err => {
        console.log('Error completing UPDATE koala query', err);
        res.sendStatus(500);
    });
});




// DELETE

module.exports = koalaRouter;
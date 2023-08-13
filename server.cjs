const express = require('express');
const app = express();

const cors = require('cors');

const {connectToDb , getdb} = require('./db');

app.use(express.json());

app.use(cors());


connectToDb((err) =>{
    if(!err){
        app.listen(5000 , ()=>{
            console.log("working ....");
        })
    }
})

app.post('/' , (req , res)=>{
    const post = req.body;
    const db = getdb();

    db.collection('posts').insertOne(post)
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        res.status(500).json({err : "Some Error Occured"})
    })
})
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
    const UserName = post.user;

    db.collection(UserName).updateOne(
        {UserName},
        {
            $set:{
                post

            }
        },
        {
            upsert:true
        }

    )
    .then(result =>{
        res.send("Posted Succesfully");
        console.log(result);
    })
    .catch(err =>{
        res.status(500).json({err:"Somw error occured"})
    })
})

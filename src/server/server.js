const express=require('express');
const app=express();
const PORT=process.env.PORT||8000;
const db=require('./config/db.js');
const bodyParser=require('body-parser');

// config body-parser
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    console.log('root!')
})

app.get('/board',(req,res)=>{
    console.log('/board');
    db.query("select * from db_jumsu.jumsu",(err,data)=>{
        if(!err){
            // console.log(data)
            res.send(data)
        }else{
            console.log(err)
        }
    })
})

app.listen(PORT,()=>{
    console.log(`Server On : htte://localhost:${PORT}/`);
})
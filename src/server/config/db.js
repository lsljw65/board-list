
var mysql=require('mysql');
const db=mysql.createPool({
    host:'localhost',
    user:'admin',
    password:'1234',
    database:'middle',
    port:3306
});

module.exports=db;
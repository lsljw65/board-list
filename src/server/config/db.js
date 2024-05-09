
var mysql=require('mysql');
const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'db_jumsu',
    port:3306
});

module.exports=db;
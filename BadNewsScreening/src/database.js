const mysql = require('mysql');
const { options } = require('./routes/admin');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cyberday',
    multipleStatements: true
});

conn.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('La base de dato esta conectada')
    }
});


module.exports = conn;
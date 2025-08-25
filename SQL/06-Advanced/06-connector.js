const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'root1234',
  database: 'hello_mysql'
});
let usuarios = [];

connection.query('SELECT * FROM user',(error, results)=>{
  
  if (error) throw error;
  usuarios= results;
  console.log(results);
  connection.end();
});
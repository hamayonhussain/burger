let mysql = require("mysql");
let connection;


if(process.env.JAWSDB_URL){
connection= mysql.createconnection(process.env.JAWS);
}
else{
  connection = mysql.createconnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
  });
};


module.exports = connection;

var mysql = require('mysql');

var con = mysql.createPool({

  host: "cloudbazaar-prod-db.cxaubqfbyztl.ap-south-1.rds.amazonaws.com",
  port:"3306",
  user: "virtex",
  password: "2clNwWoeDYY7ND14mdtq",
  database: "puneet_phdcci"
});

// con.connect(function(err) {
    
//   if (err) throw err;
//   console.log("Connected!");
// });

module.exports=con;
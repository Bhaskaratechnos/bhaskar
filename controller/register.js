const con = require("../config/db");



function randomString(length, chars) {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
  return result;
}


module.exports = {

      rdonor: async (name,age,gender,email,mobile,positive,negative,blood,add) => {
        return new Promise(function(resolve,reject){
            console.log(1);
              con.query(
                  "INSERT INTO donor (donorname,donorage,donorgender,donoremail,donormobile,donorpositive,donornegative,donorblood,donoradd) VALUES (?,?,?,?,?,?,?,?,?)",
                  [name,age,gender,email,mobile,positive,negative,blood,add],
                  async (err, rows, fields)  => {
                    if (!err){                            
                            resolve (rows);
                          }                     
                    else{
                      console.log(3,err);
                      return [];
                    } 
                  }
                );
          }).catch((err)=>{
              console.log(err)
              console.log(4);
              return []
          })

      },
      rpatient: async (yname,relation,name,age,gender,email,mobile,blood,add,dname,hname,plasama) => {
        return new Promise(function(resolve,reject){
          var sid=randomString(12, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

            console.log(1);
              con.query(
                  "INSERT INTO `patient`   ( `yname`,  `relation`, `patientname`, `patientage`, `patientgender`, `email`,`password`, `add`,`mobile`,`blood`, `dname`, `hname`,`plasama`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
                  [yname,relation,name,age,gender,email,sid,add,mobile,blood,dname,hname,plasama],
                  async (err, rows, fields)  => {
                    if (!err){                            
                            resolve (rows);
                          }                     
                    else{
                      console.log(3,err);
                      return [];
                    } 
                  }
                );
          }).catch((err)=>{
              console.log(err)
              console.log(4);
              return []
          })

      },
      alldonor: async () => {
        return new Promise(function(resolve,reject){
            console.log(1);
              con.query(
                  "SELECT * FROM donor",
                  async (err, rows, fields)  => {
                    if (!err){                            
                            resolve (rows);
                          }                     
                    else{
                      console.log(3,err);
                      return [];
                    } 
                  }
                );
          }).catch((err)=>{
              console.log(err)
              console.log(4);
              return []
          })

      },
      allpatient: async () => {
        return new Promise(function(resolve,reject){
            console.log(1);
              con.query(
                  "SELECT * FROM patient",
                  async (err, rows, fields)  => {
                    if (!err){                            
                            resolve (rows);
                          }                     
                    else{
                      console.log(3,err);
                      return [];
                    } 
                  }
                );
          }).catch((err)=>{
              console.log(err)
              console.log(4);
              return []
          })

      },
      allcount: async () => {
        return new Promise(function(resolve,reject){
            console.log(1);
              con.query(
                  "SELECT  ( SELECT COUNT(*) FROM   patient) AS pcount, (SELECT COUNT(*) FROM   donor ) AS dcount FROM    dual",
                  async (err, rows, fields)  => {
                    if (!err){                            
                            resolve (rows);
                          }                     
                    else{
                      console.log(3,err);
                      return [];
                    } 
                  }
                );
          }).catch((err)=>{
              console.log(err)
              console.log(4);
              return []
          })

      },
      updatepatient: async (status,id) => {
        return new Promise(function(resolve,reject){
            console.log(1);
              con.query(
                  "UPDATE  patient SET status = ? where patientid=?",
                  [status,id],
                  async (err, rows, fields)  => {
                    if (!err){                            
                            resolve (rows);
                          }                     
                    else{
                      console.log(3,err);
                      return [];
                    } 
                  }
                );
          }).catch((err)=>{
              console.log(err)
              console.log(4);
              return []
          })

      },
      updatedonor: async (status,id) => {
        return new Promise(function(resolve,reject){
            console.log(1);
              con.query(
                "UPDATE  donor SET status = ? where donorid=?",
                [status,id],
                  async (err, rows, fields)  => {
                    if (!err){                            
                            resolve (rows);
                          }                     
                    else{
                      console.log(3,err);
                      return [];
                    } 
                  }
                );
          }).catch((err)=>{
              console.log(err)
              console.log(4);
              return []
          })

      },
      getuser: async (username) => {
        return new Promise(function(resolve,reject){
            console.log(1);
              con.query(
                "select * from admin where email=?",
                [username],
                  async (err, rows, fields)  => {
                    if (!err){                            
                            resolve (rows);
                          }                     
                    else{
                      console.log(3,err);
                      return [];
                    } 
                  }
                );
          }).catch((err)=>{
              console.log(err)
              console.log(4);
              return []
          })

      },
      getpatient: async (email) => {
        return new Promise(function(resolve,reject){
            console.log(1);
              con.query(
                "select * from patient where email=?",
                [email],
                  async (err, rows, fields)  => {
                    if (!err){                            
                            resolve (rows);
                          }                     
                    else{
                      console.log(3,err);
                      return [];
                    } 
                  }
                );
          }).catch((err)=>{
              console.log(err)
              console.log(4);
              return []
          })

      },
      getoxygen: async (location) => {
        return new Promise(function(resolve,reject){
            console.log(1);
              con.query(
                "select * from oxygen where Location LIKE ?",
                [location],
                  async (err, rows, fields)  => {
                    if (!err){                            
                            resolve (rows);
                          }                     
                    else{
                      console.log(3,err);
                      return [];
                    } 
                  }
                );
          }).catch((err)=>{
              console.log(err)
              console.log(4);
              return []
          })

      },
      gethospital: async (location) => {
        return new Promise(function(resolve,reject){
            console.log(1);
              con.query(
                "select * from hospital where Location LIKE ?",
                [location],
                  async (err, rows, fields)  => {
                    if (!err){                            
                            resolve (rows);
                          }                     
                    else{
                      console.log(3,err);
                      return [];
                    } 
                  }
                );
          }).catch((err)=>{
              console.log(err)
              console.log(4);
              return []
          })

      },
      getmedicine: async (location) => {
        return new Promise(function(resolve,reject){
            console.log(1);
              con.query(
                "select * from medicine where Location LIKE ?",
                [location],
                  async (err, rows, fields)  => {
                    if (!err){                            
                            resolve (rows);
                          }                     
                    else{
                      console.log(3,err);
                      return [];
                    } 
                  }
                );
          }).catch((err)=>{
              console.log(err)
              console.log(4);
              return []
          })

      },
      getplasama: async (location) => {
        return new Promise(function(resolve,reject){
            console.log(1);
              con.query(
                "select * from plasama where Location LIKE ?",
                [location],
                  async (err, rows, fields)  => {
                    if (!err){                            
                            resolve (rows);
                          }                     
                    else{
                      console.log(3,err);
                      return [];
                    } 
                  }
                );
          }).catch((err)=>{
              console.log(err)
              console.log(4);
              return []
          })

      },
      getambulance: async (location) => {
        return new Promise(function(resolve,reject){
            console.log(1);
              con.query(
                "select * from ambulance where Location LIKE ?",
                [location],
                  async (err, rows, fields)  => {
                    if (!err){                            
                            resolve (rows);
                          }                     
                    else{
                      console.log(3,err);
                      return [];
                    } 
                  }
                );
          }).catch((err)=>{
              console.log(err)
              console.log(4);
              return []
          })

      },
      getnursing: async (location) => {
        return new Promise(function(resolve,reject){
            console.log(1);
              con.query(
                "select * from nursing where Location LIKE ?",
                [location],
                  async (err, rows, fields)  => {
                    if (!err){                            
                            resolve (rows);
                          }                     
                    else{
                      console.log(3,err);
                      return [];
                    } 
                  }
                );
          }).catch((err)=>{
              console.log(err)
              console.log(4);
              return []
          })

      },
      gethotels: async (location) => {
        return new Promise(function(resolve,reject){
            console.log(1);
              con.query(
                "select * from hotels where Location LIKE ?",
                [location],
                  async (err, rows, fields)  => {
                    if (!err){                            
                            resolve (rows);
                          }                     
                    else{
                      console.log(3,err);
                      return [];
                    } 
                  }
                );
          }).catch((err)=>{
              console.log(err)
              console.log(4);
              return []
          })

      },
      patientbyid: async (id) => {
        return new Promise(function(resolve,reject){
            console.log(1);
              con.query(
                  "SELECT * FROM patient where patientid =?",
                  [id],
                  async (err, rows, fields)  => {
                    if (!err){                            
                            resolve (rows);
                          }                     
                    else{
                      console.log(3,err);
                      return [];
                    } 
                  }
                );
          }).catch((err)=>{
              console.log(err)
              console.log(4);
              return []
          })

      },
      feedback: async (name,email,feedback) => {
        return new Promise(function(resolve,reject){
            console.log(1);
              con.query(
                  "INSERT INTO feedback (name,email,feedback) VALUES (?,?,?)",
                  [name,email,feedback],
                  async (err, rows, fields)  => {
                    if (!err){                            
                            resolve (rows);
                          }                     
                    else{
                      console.log(3,err);
                      return [];
                    } 
                  }
                );
          }).catch((err)=>{
              console.log(err)
              console.log(4);
              return []
          })

      },
      getpatientid: async (id) => {
        return new Promise(function(resolve,reject){
            console.log(1);
              con.query(
                "select * from patient where patientid= ?",
                [id],
                  async (err, rows, fields)  => {
                    if (!err){                            
                            resolve (rows);
                          }                     
                    else{
                      console.log(3,err);
                      return [];
                    } 
                  }
                );
          }).catch((err)=>{
              console.log(err)
              console.log(4);
              return []
          })

      },
      getdonorid: async (id) => {
        return new Promise(function(resolve,reject){
            console.log(1);
              con.query(
                "select * from donor where donorid= ?",
                [id],
                  async (err, rows, fields)  => {
                    if (!err){                            
                            resolve (rows);
                          }                     
                    else{
                      console.log(3,err);
                      return [];
                    } 
                  }
                );
          }).catch((err)=>{
              console.log(err)
              console.log(4);
              return []
          })

      },

}
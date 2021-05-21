const donor = require("../../controller/register");
import Cookies from 'cookies'
export default async (req, res) => {
    const cookies = new Cookies(req, res)
    switch (req.method) {
        
        case 'GET':
        res.status(200).json({ data:"getdata" })
          break
        case 'POST':
            var result= await donor.getuser(req.body.username)
            console.log(result[0].password,req.body.password)
            console.log(result[0].email,req.body.username)
            if(result.length>0){

            console.log(1)
            if(result[0].password ==req.body.password){
                cookies.set('user', 'admin', {
                    httpOnly: true // true by default
                })
                res.status(200).json({status:"success", data:result })

            }
            else{
                console.log(3)
                res.status(200).json({ status:"fail", data:result })
            }
        }
            else{
                console.log(2)
                res.status(200).json({ status:"fail", data:result })
            }
            
          break
        default:
          res.status(405).end() //Method Not Allowed
          break
      }
  }
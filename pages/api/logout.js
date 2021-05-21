const donor = require("../../controller/register");
import Cookies from 'cookies'
export default async (req, res) => {
    const cookies = new Cookies(req, res)
    switch (req.method) {
        
        case 'GET':
            try{
                cookies.set('user')
                res.status(200).json({status:"success" })
            }catch(err){
                res.status(200).json({ status:"fail" })
            }
          break
        case 'POST':

            try{
                cookies.set('user')
                res.status(200).json({status:"success" })
            }catch(err){
                res.status(200).json({ status:"fail" })
            }

                

            
          break
        default:
          res.status(405).end() //Method Not Allowed
          break
      }
  }
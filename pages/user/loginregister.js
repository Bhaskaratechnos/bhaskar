import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios';


export default function LoginRegister({ data }) {

  const router = useRouter();
  const [user_email, setuser_email] = useState('');
  const [user_name, setuser_name] = useState('');
  console.log(data);


  const register = async event => {
    event.preventDefault()
    console.log(user_email);
    if(user_email){
      var result=await axios({
        method: 'post',
        url: 'http://15.206.99.13:5000/webinarreg',
        data: {
          user_name: user_name,
          user_email: user_email,
          webinar_id:router.query.id
        }
      });
      var data=await result.data;
      if(data.auth==true){
        alert("Registerd Successfully Check Your Email")
        router.push('/user/webinar?id=' + router.query.id)
      }
      else{
        alert("Email already Registerd")
        router.push('/user/login?id=' + router.query.id)
      }
    }
    else{
      router.push('/user/explore?id=' + router.query.id)
    }    

  }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link href="/user">
    <a className="navbar-brand" ><img className='logoimage' src="/logo.png" /></a>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto lnav">
        <a className="nav-link active" aria-current="page" href="#">BUSINESS</a>
        <a className="nav-link" href="#">STARTUPS</a>
        <a className="nav-link" href="#">MARKIETING</a>
        <a className="nav-link" href="#">TECHNOLOGY</a>
        <a className="nav-link" href="#">HEALTH</a>
        <a className="nav-link" href="#">ENTERTAINMENT</a>
        <a className="nav-link" href="#">EDUCATION</a>
        <a className="nav-link" href="#">YOUTH</a>
        <a className="nav-link" href="#">POLICY</a>
        <a className="nav-link" href="#">BIOTECH</a>
        {/* <a className="nav-link" href="#" onClick={islogin ? Logout : Login} >{islogin ? 'LOGOUT' : 'LOGIN'}</a>
         */}
      </div>
      <div>
      <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"><img className='logorimage' src='/logor.png'/></a>
      </div>
    </div>
  </div>
</nav>
      <div className="container">
         <div className="row " style={{marginLeft:"50px",marginRight:"50px"}}>
          

          <div className="display-5">Register</div>
            <form >
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                <input type="text" name="user_name" onChange={e => setuser_name(e.target.value)} id="registerEmail" className="form-control" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                <input type="email" name="user_emailr" onChange={e => setuser_email(e.target.value)} id="registerEmail" className="form-control" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Mobile No.</label>
                <input type="tel" name="number"  id="registerEmail" className="form-control" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Company</label>
                <input type="text" name="company"  id="registerEmail" className="form-control" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Designation</label>
                <input type="text" name="designation"  id="registerEmail" className="form-control" required/>
              </div>

              <div className="form-check">

              </div>
              <button type="submit" onClick={register} className="btn btn-primary">Register</button>
            </form>
          </div>
        
      </div>
      <style jsx>{`

        

      `}</style>
    </>
  );

}

export async function getServerSideProps({ req, res }) {


  return {
    props: { data: req.cookies.token || '' }, // will be passed to the page component as props
  };
}




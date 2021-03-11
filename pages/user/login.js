import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
export default function Login({ data }) {

  const router = useRouter();
  const [user_email, setuser_email] = useState('');
  const [user_emailr, setuser_emailr] = useState('');
  const [user_name, setuser_name] = useState('');
  console.log(data);

  const login = async event => {
    event.preventDefault()
    console.log(user_email);
    const res = await fetch(
      process.env.serverUrl+'/userlogin/',
      {
        body: JSON.stringify({
          user_email: user_email,
          user_name: user_name,
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    const result = await res.json();
    // console.log(result)
    if (result.login == "pass") {
      cookie.set("token", "token1", { expires: 1 / 24 })
      if(router.query.id){
        router.push('/user/webinar?id=' + router.query.id)
      }
      else{
        router.push('/user')
      }
    }
    else {
      alert("Some Error Occured");
      router.push('/user/loginregister')
    }
  }
  const register = async event => {
    event.preventDefault()
    console.log(user_email);
    if(user_emailr){
      router.push('/user/webinar?id=' + router.query.id)
    }
    else{
      router.push('/user/explore?id=' + router.query.id)
    }
    
    // const res = await fetch(
    //   'http://15.206.99.13:5000/userregister/',
    //   {
    //     body: JSON.stringify({
    //       user_email: user_emailr,
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     method: 'POST'
    //   }
    // )

    // const result = await res.json();
    // // console.log(result)
    // if (result.login == "pass") {
    //   cookie.set("token", "token1", { expires: 1 / 24 })
    //   if(router.query.id){
    //     router.push('/user/webinar?id=' + router.query.id)
    //   }
    //   else{
    //     router.push('/user')
    //   }
      
    // }
    // else {
    //   alert("Some Error Occured");
    //   router.push('/user/loginregister')
    // }
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
          

          <div className="display-5">Login</div>
            <form >

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                <input type="email" name="user_emailr" onChange={e => setuser_emailr(e.target.value)} id="registerEmail" className="form-control" required/>
              </div>


              <div className="form-check">

              </div>
              <button type="submit" onClick={register} className="btn btn-primary">Login</button>
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




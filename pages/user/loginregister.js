import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import React, {useState,useEffect } from 'react'
import Link from 'next/link'
export default function LoginRegister({data}) {

    const router = useRouter();
    const [user_email, setuser_email] = useState('');
    const [user_emailr, setuser_emailr] = useState('');
    console.log(data);

    useEffect(() => {
      
      if(data){
        router.push('/user')
      }
    });
    const login = async event => {
      event.preventDefault()
      console.log(user_email);
      const res = await fetch(
        'http://15.206.99.13:5000/userlogin/',
        {
          body: JSON.stringify({
              user_email: user_email,
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      )     
  
      const result = await res.json();
      // console.log(result)
      if(result.login=="pass"){
        cookie.set("token","token1",{expires: 1/24})
          router.push('/user')
      }
      else{
          alert("Some Error Occured");
          router.push('/user/loginregister')
      }
    }
    const register = async event => {
      event.preventDefault()
      console.log(user_email);
      const res = await fetch(
        'http://15.206.99.13:5000/userregister/',
        {
          body: JSON.stringify({
              user_email: user_emailr,
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      )     
  
      const result = await res.json();
      // console.log(result)
      if(result.login=="pass"){
        cookie.set("token","token1",{expires: 1/24})
          router.push('/user')
      }
      else{
          alert("Some Error Occured");
          router.push('/user/loginregister')
      }
    }
  return (
    <div className="container" style={{width:"40%",marginTop:'10%'}}>
    <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
      <li class="nav-item" role="presentation">
        <a
          class="nav-link active"
          id="tab-login"
          data-mdb-toggle="pill"
          href="#pills-login"
          role="tab"
          aria-controls="pills-login"
          aria-selected="true"
          >Login</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          id="tab-register"
          data-mdb-toggle="pill"
          href="#pills-register"
          role="tab"
          aria-controls="pills-register"
          aria-selected="false"
          >
            Register
          </a>
      </li>
    </ul>  
    
   
    <div class="tab-content">
      <div
        class="tab-pane fade show active"
        id="pills-login"
        role="tabpanel"
        aria-labelledby="tab-login"
      >
        <form>          
          <div class="form-outline mb-4">
            <input type="email" name="user_email" onChange={e => setuser_email(e.target.value)}  id="loginName" class="form-control" />
            <label class="form-label" for="loginName">Email </label>
          </div>  
          <button type="submit" onClick={login} class="btn btn-primary btn-block mb-4">Sign in</button>
        </form>
      </div>
      <div
        class="tab-pane fade"
        id="pills-register"
        role="tabpanel"
        aria-labelledby="tab-register"
      >
        <form>
          <div class="form-outline mb-4">
            <input type="email" name="user_emailr" onChange={e => setuser_emailr(e.target.value)} id="registerEmail" class="form-control" />
            <label class="form-label" for="registerEmail">Email</label>
          </div>
          <button type="submit" onClick={register} class="btn btn-primary btn-block mb-3">Register</button>
        </form>
      </div>
    </div>
    </div>
  );
  
}

export async function getServerSideProps({req,res}) {


  return {
    props: { data:req.cookies.token||'' }, // will be passed to the page component as props
  };
}




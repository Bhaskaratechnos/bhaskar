
import { useRouter } from 'next/router'
import React, {useState} from 'react'
import Cookies from 'js-cookie'
import Link from 'next/link'
export default function LoginRegister({data}) {

    const router = useRouter();

    if(!data){
        router.push('/user');
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
          >Register</a
        >
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
            <input type="email" id="loginName" class="form-control" />
            <label class="form-label" for="loginName">Email </label>
          </div>  
          <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
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
            <input type="email" id="registerEmail" class="form-control" />
            <label class="form-label" for="registerEmail">Email</label>
          </div>
          <button type="submit" class="btn btn-primary btn-block mb-3">Register</button>
        </form>
      </div>
    </div>
    </div>
  );
  
}

export async function getServerSideProps(context) {
    
    
    var data = Cookies.get('Login');
  
    if (!data) {
        data=0;
    }
    // console.log(data);
  
    return {
      props: {data}, // will be passed to the page component as props
    }
  }

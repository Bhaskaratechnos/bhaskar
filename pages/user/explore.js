import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import React, {useState,useEffect } from 'react'
import Link from 'next/link'


export default function Explore({ data ,islogin}) {
  const router = useRouter();
  const [user_email, setuser_email] = useState('');
  const [user_emailr, setuser_emailr] = useState('');
  const login = async event => {
    

    event.preventDefault();
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
    <div>

      <div className="container">
        <div className="row">
          {data.map((d, index) => (
            <div key={d.webinar_id} className="col-4">
              <div
                className="card"
                style={{ width: "18rem", marginTop: "10px" }}
              >
                <img
                  src={d.webinar_stage}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{d.webinar_title}</h5>
                  <p className="card-text">
                    {d.webinar_startdate}
                    {d.webinar_enddate}
                    {d.webinar_description}
                  </p>
                  
                    <a className="btn btn-primary">Explore</a>
                  
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>


      <div className="container" style={{width:"40%",marginTop:'10%'}}>
    <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
      <li className="nav-item" role="presentation">
        <a
          className="nav-link active"
          id="tab-login"
          data-mdb-toggle="pill"
          href="#pills-login"
          role="tab"
          aria-controls="pills-login"
          aria-selected="true"
          >Login</a
        >
      </li>
      <li className="nav-item" role="presentation">
        <a
          className="nav-link"
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
    
   
    <div className="tab-content">
      <div
        className="tab-pane fade show active"
        id="pills-login"
        role="tabpanel"
        aria-labelledby="tab-login"
      >
        <form>          
          <div className="form-outline mb-4">
            <input type="email" name="user_email" onChange={e => setuser_email(e.target.value)}  id="loginName" className="form-control" />
            <label className="form-label" htmlFor="loginName">Email </label>
          </div>  
          <button type="submit" onClick={login} className="btn btn-primary btn-block mb-4">Sign in</button>
        </form>
      </div>
      <div
        className="tab-pane fade"
        id="pills-register"
        role="tabpanel"
        aria-labelledby="tab-register"
      >
        <form>
          <div className="form-outline mb-4">
            <input type="email" name="user_emailr" onChange={e => setuser_emailr(e.target.value)} id="registerEmail" className="form-control" />
            <label className="form-label" htmlFor="registerEmail">Email</label>
          </div>
          <button type="submit" onClick={register} className="btn btn-primary btn-block mb-3">Register</button>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
}

export async function getServerSideProps({req,query}) {
  const res = await fetch("http://15.206.99.13:5000/webinars/"+query.id);

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  // console.log(data);

  return {
    props: { data,islogin:req.cookies.token||'' }, // will be passed to the page component as props
  };
}

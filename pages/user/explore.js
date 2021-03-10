import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'


export default function Explore({ data, islogin }) {
  const router = useRouter();

  const id = router.query.id;



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
              {/* <a className="nav-link" href="#" onClick={islogin ? Logout : Login} >{islogin ? 'LOGOUT' : 'LOGIN'}</a>
         */}
            </div>
            <div>
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"><img className='logorimage' src='/logor.png' /></a>
            </div>
          </div>
        </div>
      </nav>
      <div className="containerq" >
        <img src='/crousel.jpg' />
        <Link href={`/user/loginregister?id=${id}&&v=1`}><a>
          <button className="btnq btn btn-primary" >Login</button>
        </a>
        </Link>
        <Link href={`/user/loginregister?id=${id}&&v=0`}><a>
          <button className="btnq2 btn btn-primary" >Register</button>
        </a>
        </Link>
      </div>

      <style jsx>{`
        .logoimage {
          height: 50px;
          width:60px;
        }
        .logorimage{
            height: 50px;
            width:80px;  
        }
        .lnav a{
            color:blue;
            font-size:14px;
        }
        .cardimage{
            border-radius: 3%;
            // background: #73AD21;
            // box-shadow: 2px 2px 4px #000000;
        }
        .cardimage1{
          border-radius: 3%;
          // background: #73AD21;
          box-shadow: 2px 2px 4px #000000;
      }
        

      `}</style>
    </>
  );
}

export async function getServerSideProps({ req, query }) {
  const res = await fetch("http://15.206.99.13:5000/webinars/" + query.id);

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  // console.log(data);

  return {
    props: { data, islogin: req.cookies.token || '' }, // will be passed to the page component as props
  };
}

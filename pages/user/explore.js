import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import React, {useState,useEffect } from 'react'
import Link from 'next/link'


export default function Explore({ data ,islogin}) {
  const router = useRouter();





  return (
    <div className="containerq" >
<img src='/crousel.jpg' />
<button className="btnq btn btn-primary" onClick={()=>router.push('/user/loginregister')}>Login</button>
<button className="btnq2 btn btn-primary" onClick={()=>router.push('/user/loginregister')}>Register</button>

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

import Head from "next/head";
import React, { useEffect } from "react";
import Router from 'next/router'
import User from "./user/index";
// import "../public/script.js";
export default function Home() {
  useEffect(() => {
    const {pathname} = Router    
        Router.push('/user')   
  });
  return (
<>
<Head>

<meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
    
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="This is an example dashboard created using build-in elements and components."
        />
        <meta name="msapplication-tap-highlight" content="no" />
</Head>


</>


  );
}

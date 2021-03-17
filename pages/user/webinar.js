import cookie from 'js-cookie'

import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios';
export default function Webinar({ data, islogin }) {
  const router = useRouter();

  const [frame, setFrame] = useState('');
  const [msg, setmsg] = useState('');


  const printdata=async ()=>{
    if(msg){
      var result=await axios({
        method: 'post',
        url: 'http://15.206.99.13:5000/sendmsg',
        data: {
          message: msg,
          webinar_id: router.query.id,
        }
      });
      var data=await result.data;
      console.log(msg);
      setmsg('');
      alert('Message Sent')
    }

  }
  
  useEffect(() => {
    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(data[0].webinar_player, 'text/html');
    setFrame(htmlDoc.body.firstChild.src);
    console.log(frame);
  }, [])

  return (
    <>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
     
    <a href="/user" className="navbar-brand" ><img className='logoimage' src="/logo.png" /></a>
    
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
    <div className="containerq" >
      <img className="con-image" src={data[0].webinar_stage} />


        <iframe className="webplayer" src={frame} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
       
<img src={data[0].webinar_platinium1} className="platinium1"/>



<img src={data[0].webinar_platinium2} className="platinium2"/>


<img src={data[0].webinar_sponser} className="sponser"/>


    </div>


    <button className="chatbox-open">
    <i className="fa fa-comment fa-2x" aria-hidden="true"></i>
  </button>
<button className="chatbox-close">
    <i className="fa fa-close fa-2x" aria-hidden="true"></i>
  </button>
<section className="chatbox-popup">
  <header className="chatbox-popup__header">
    <aside style={{flex:"3"}}>
      <i className="fa fa-user-circle fa-4x chatbox-popup__avatar" aria-hidden="true"></i>
    </aside>
    <aside style={{flex:"8"}}>
      <h1>ATechnos</h1> Agent (Online)
    </aside>
    <aside style={{flex:"1"}}>
      {/* <button className="chatbox-maximize"><i className="fa fa-window-maximize" aria-hidden="true"></i></button> */}
    </aside>
  </header>
  <main className="chatbox-popup__main">
    We make it simple and seamless for<br/> bussiness and people to talk to each<br/> other. Ask us anything.
  </main>
  <footer className="chatbox-popup__footer">
    <aside style={{flex:"1",color:"#888",textAlign:"center"}}>
      {/* <i className="fa fa-camera" aria-hidden="true"></i> */}
    </aside>
    <aside style={{flex:"10"}}>
      <textarea type="text" rows="4" placeholder="Type your message here..." value={msg} onChange={(e)=>setmsg(e.target.value)} autoFocus></textarea>
    </aside>
    <aside style={{flex:"1",color:"#888",textAlign:"center"}}>
      <a onClick={printdata} href="#">
      <i className="fa fa-paper-plane" aria-hidden="true"></i>
      </a>
    </aside>
  </footer>
</section>




    </>
  );
}

export async function getServerSideProps({ req, query }) {
  const res = await fetch(process.env.serverUrl+"webinars/" + query.id);

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

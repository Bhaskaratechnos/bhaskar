import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios';
import Livecount from '../../components/livecount'
export default function Webinar({ data, islogin }) {
  const router = useRouter();

  const [frame, setFrame] = useState('');
  const [msg, setmsg] = useState('');


  const printdata=async ()=>{
    if(msg){
      var result=await axios({
        method: 'post',
        url: 'https://api.phdcciwebinar.live/sendmsg',
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
          <Head>
        <title>PHDCCI</title>
      </Head>

    <div className="containerq"  >
      <img className="con-image" src={data[0].webinar_stage} />


        <iframe className="webplayer" src={frame} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
{/*        
<img src={data[0].webinar_platinium1} className="platinium1"/>



<img src={data[0].webinar_platinium2} className="platinium2"/>


<img src={data[0].webinar_sponser} className="sponser"/> */}

<Livecount/>
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
      <h1>PHDCCI</h1> Ask your questions here...
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

<style global jsx>{`
body{overflow-y:hidden}
html{overflow-y:hidden}
`}</style>


    </>
  );
}

export async function getServerSideProps({ req, query }) {
  const res = await fetch(process.env.serverUrl+"webinarform/" + query.id);

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

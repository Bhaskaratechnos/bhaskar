import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import {io} from "socket.io-client";

const ENDPOINT = "https://socket.phdcciwebinar.live";
const socket = io(ENDPOINT);
export default function Liv() {
    const router = useRouter();
    const [livecount, setLivecount] = useState('');


      const sendMessage = () => {
          console.log(livecount);
          setLivecount("");
        socket.emit("livecount", JSON.stringify({ count: livecount }));
      }

    return (
<>

<section className="valume">
        <input  type='text' value={livecount} onChange={(e)=>setLivecount(e.target.value)}/>
        <button onClick={()=>sendMessage()}>Send</button>
</section>

<style global jsx>{`


`}</style>
</>

);
}




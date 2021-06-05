import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://15.206.99.13:4001";
const socket = socketIOClient(ENDPOINT,{transports:['websocket']});
export default function Livecount() {
    const router = useRouter();
    const [livecount, setLivecount] = useState('0');

    useEffect(() => {

        // list of connected users
        socket.on("livecounts", data => {
            console.log(JSON.parse(data).count)
            setLivecount(JSON.parse(data).count )
        });

      }, []);

    return (
<>

<section className="valume">
        <div className="col-12 col-md-12 col-lg-12">
          <div className="live">
            <div className="live-text">
              LIVE WATCHING
            </div>
            <div className="score">
              {livecount}
            </div>

          </div>
        </div>
      </section>

<style global jsx>{`


`}</style>
</>

);
}




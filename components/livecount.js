import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import socketIOClient from "socket.io-client";
import { w3cwebsocket as W3CWebSocket } from "websocket";
const ENDPOINT = "https://socket.phdcciwebinar.live";
const socket = socketIOClient(ENDPOINT);
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

{/* <section className="valume">
        <div className="col-12 col-md-12 col-lg-12">
          <div className="live">
            <div className="live-text">
              <img src="/live.png" class="img-fluid" alt=""/>
            </div>
            <div className="score">
              {livecount}
            </div>

          </div>
        </div>
      </section> */}


  <div className="vallll"> 
    <div className="mini-box11"> 
    <img src="/live1.png" class="img-fluid" alt=""/>
    </div>
            <div className="score">
              {livecount}11
            </div>
            
</div>



<style global jsx>{`
.vallll {
  width: 40%;
  position: absolute;
  top: 51%;
  left: 51%;

}
.mini-box11 img {
  width: 9%;
}
.score {
  position: absolute;
  bottom: 9px;
  right: 80%;
  background: #00000063;
  color: white;
  font-size: 18px;
  font-weight: 500;
  padding: 0px 0px;
  width: 12%;
  text-align: center;
  border-radius: 5px;
  margin: auto;
}
@media only screen and (max-width: 720px) {
  .vallll {
    width: 100%;
    position: absolute;
    top: 45%;
    left: 45%;
  }
  .score {
    position: absolute;
    bottom: 7px;
    right: 78%;
    background: #00000063;
    color: white;
    font-size: 14px;
    font-weight: 500;
    padding: 0px 0px;
    width: 12%;
    text-align: center;
    border-radius: 5px;
    margin: auto;

  }
  .mini-box11 img {
    width: 11%;
    
}
@media only screen and (min-device-width : 320px) and (max-device-width : 1024px) and (orientation : landscape) {
  .vallll {
    width: 100%;
    position: absolute;
    top: 45%;
    left: 47%;
  }
  .score {
    position: absolute;
    bottom: 13px;
    right: 83%;
    background: #00000063;
    text-align: center;
    height: 7vh;
    color: white;
    font-size: 14px;
    font-weight: 500;
    padding: 0px 0px;
    width: 7%;
    border-radius: 5px;
    margin: auto;
 }
}

`}</style>
</>

);
}




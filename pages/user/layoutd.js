import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';

export default function Layout2({data}) {
    const router = useRouter();


    return (
        <>

            <nav className="navbar navbar-expand-lg  margin"  >
                <div className="container-fluid">

                    <a className="navbar-brand" ><img className='logoimage' src="/logo.png" /></a>

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
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"><img className='logorimage' src='/logor.png' /></a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container">

                <h5 className="mx-auto title"><strong>Event 1</strong> <i className="fas fa-angle-double-left"></i> PHDCCI IPFC <i className="fas fa-angle-double-right"></i></h5>
                {/* <p className="margin"><i className="fa fa-calendar" aria-hidden="true"></i> MAR 22, 5:30PM TO MAR 24, 10:30PM IST</p> */}
                <p className="margin"><i className="fa fa-calendar" aria-hidden="true"></i> <strong>{new Date(Date.parse(data[0].webinar_startdate)).toString()}</strong> To <strong>{new Date(Date.parse(data[0].webinar_enddate)).toString()}</strong></p>

                <div className="row margin">
                    <div className="col-md-8">
                        <img className="banner" src={data[0].webinar_mainbanner}></img>
                    </div>
                    <div className="col-md-4">
                        <div className="card" >
                            <div className="card-body">
                                <p className="card-text">Already registered? Log In to access the event</p>
                                <input className="form-control margin" type="text" />

                                <input className="btn btn-primary button" type="button" value="LOGIN" />

                                <button onClick={()=> $('#exampleModal').modal('show')} className="btn btn-primary button" type="button"  >REGISTER</button>

                            </div>
                        </div>
                        <div className="card " >
                            <div className="card-body">
                                <p className="card-title">Share on</p>
                                <div className="row">
                                    <img className="social" src="/fb.png" />
                                    <img className="social" src="/tw.png" />
                                    <img className="social" src="/is.png" />
                                    <img className="social" src="/lk.png" />
                                    <img className="social" src="/wp.png" />
                                    <img className="social" src="/em.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-6  ">
                        <p className="automargin">SPONSORS</p>
                        <hr />
                    </div>
                    <div className="col-md-6 ">
                        <p className="automargin">DESCRIPTION</p>
                        <hr />
                    </div>
                </div>

                <div className="card row margin logos " >

                    <img src="/logo1.png" />
                    <img src="/logo2.png" />
                    <img src="/logo3.png" />
                    <img src="/logo4.png" />
                    <img src="/logo5.png" />
                    <img src="/logo6.png" />
                    <img src="/logo7.png" />
                    <img src="/logo8.png" />
                    <img src="/logo9.png" />
                    <img src="/logo10.png" />
                    <img src="/logo11.png" />
                    <img src="/logo12.png" />
                    <img src="/logo13.png" />



                </div>

                <div className="margin">
                    <h5>{data[0].webinar_title}</h5>
                    <p>{data[0].webinar_description}
                    </p>
                    <h5>STRUCTURE OF PHDCCI INTERNATIONAL WEEK</h5>
                    <p>The International Affairs and Trade Fairs Commitee of PHDCCI is organiasing the Hybrid Edition of "PHDCCI International Week" from 15-19 March 2021
                    where in each of the weekday will focus on India's Economic and Trade relations with one region and delibrate upon the Business Opportunities
                    and Challenges faced by the Industry & Stakeholders
                    </p>
                    <p>1. Inaugural Session</p>
                    <p>2. Plenary Session (Pre & Post Lunch</p>
                    <p>3. Hybrid Exhibition</p>
                    <p>4. B2B Meetings</p>
                    <h5>KEY TAKEWAYS</h5>
                    <p>1. Inaugural Session</p>
                    <p>2. Plenary Session (Pre & Post Lunch</p>
                    <p>3. Hybrid Exhibition</p>
                    <p>4. B2B Meetings</p>
                </div>
                <div>
                    <h4>SPEAKERS</h4>
                    <div className="card speakers">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-sm-3 marginauto">
                                        <img className="speakerimg " src="/sp.png" />
                                    </div>
                                    <div className="col-sm-9 speakerdetail">
                                        <h6>Mr. Sanjay Aggarwal</h6>
                                        <p>President, PHDCCI</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-sm-3 marginauto">
                                        <img className="speakerimg" src="/sp.png" />
                                    </div>
                                    <div className="col-sm-9 speakerdetail">
                                        <h6>Mr. Pradeep Multani</h6>
                                        <p>Sr. Vice President, PHDCCI</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-sm-3 marginauto">
                                        <img className="speakerimg" src="/sp.png" />
                                    </div>
                                    <div className="col-sm-9 speakerdetail">
                                        <h6>Mr. Saket Dalmia</h6>
                                        <p>Vice President, PHDCCI</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-sm-3 marginauto">
                                        <img className="speakerimg" src="/sp.png" />
                                    </div>
                                    <div className="col-sm-9 speakerdetail">
                                        <h6>Mr. Vivek Agarwal</h6>
                                        <p>Chair-Africa</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-sm-3 marginauto" >
                                        <img className="speakerimg" src="/sp.png" />
                                    </div>
                                    <div className="col-sm-9 speakerdetail">
                                        <h6>Mr. Amitava Ray</h6>
                                        <p>Chair-Ameeicas</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-sm-3 marginauto">
                                        <img className="speakerimg" src="/sp.png" />
                                    </div>
                                    <div className="col-sm-9 speakerdetail">
                                        <h6>Mr. Ajay Psddar</h6>
                                        <p>chair-East Asia South East Asia & Oceania</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-sm-3 marginauto">
                                        <img className="speakerimg" src="/sp.png" />
                                    </div>
                                    <div className="col-sm-9 speakerdetail ">
                                        <h6 >Mr. Sanjay Aggarwal</h6>
                                        <p >President, PHDCCI</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <div className="row">

                        <img className="banner" src="/speakers.jpg" />
                    </div> */}
                </div>
            </div>
            <footer className="ccenter back">
        <div className="row d-flex justify-content-center">
          <img className="socialf" src="/fb.png" />
          <img className="socialf" src="/tw.png" />
          <img className="socialf" src="/is.png" />
          <img className="socialf" src="/lk.png" />
          <img className="socialf" src="/wp.png" />
          <img className="socialf" src="/em.png" />
        </div>
        <div className="row foot">

          <a className="col" href="#">BUSINESS</a>
          <a className="col" href="#">STARTUPS</a>
          <a className="col" href="#">MARKETING</a>
          <a className="col" href="#">TECHNOLOGY</a>
          <a className="col" href="#">HEALTH</a>
          <a className="col" href="#">ENTERTAINMENT</a>
          <a className="col" href="#">EDUCATION</a>
          <a className="col" href="#">YOUTH</a>
          <a className="col" href="#">POLICY</a>

        </div>
      </footer>


      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

            <style global jsx>{`
.title{
    font-size:20px;
}
.banner{
    width:100%;
    border-radius: 2%;
}
.banner2{
    width:30%;
}
.social{
    width:15%; 
}
.logos{
    display:block;
    text-align: center;
}
.speakers{
    padding:20px;
}
.speakerimg{
    width:100%;
    border-radius: 50%;
}
.speakerdetail {
    padding:7px;
    width:100%;
    margin:auto;
}
.speakerdetail h6{
    
    width:100%;
    margin:auto;
    font-size:11px;
    font-weight: bold;
}
.speakerdetail p{

    width:100%;
    margin:auto;
    font-size:9px;
}
.logos img{
    width:10%;
    margin:10px;
}
.button{
    width:100%;
    margin-bottom:4%;
}
.margin{
    margin-bottom:5%;
}
.automargin{
    margin: auto;
    width: 30%;
}



.back{
    background-color:black;
    padding:10px;
}
.ccenter{
    margin-top:50px
}
.ccenter p{
font-size:9px;
}
.ccenter h2{
font-size:25px;
color:#002db3;
}
.f{
color:white;
font-size:50px;
}
.foot{
font-size: 14px;
height: auto;

padding: 32px 64px;
text-align: center;
grid-area: footer;
}
.foot a{
text-decoration:none; 
margin: 10px;
color:white;
}
.socialf{
width:70px; 
color:white;
}
@media screen and (max-width: 575px) {
    .speakerimg{
        
        
        border-radius: 50%;
    }
    .marginauto{
        width:50px;
        margin:auto;
    }
  }
            `}</style>
        </>
    )
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
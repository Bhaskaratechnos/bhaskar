import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';

export default function Layout2() {
    const router = useRouter();


    return (
        <>

            <nav className="navbar navbar-expand-lg  margin" id="scroll" >
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
                <p className="margin"><i className="fa fa-calendar" aria-hidden="true"></i> MAR 22, 5:30PM TO MAR 24, 10:30PM IST</p>


                <div className="row margin">
                    <div className="col-md-8">
                        <img className="banner" src="/banner.jpg"></img>
                    </div>
                    <div className="col-md-4">
                        <div className="card" >
                            <div className="card-body">
                                <p className="card-text">Already registered? Log In to access the event</p>
                                <input className="form-control margin" type="text" />

                                <input className="btn btn-primary button" type="button" value="LOGIN" />

                                <input className="btn btn-primary button" type="button" value="REGISTER" />

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
                <div className="row margin  " >
                    <img className="banner"  src="/logos.jpg" />
                    

                    
                </div>

                <div className="margin">
                    <h5>About PHDCCI International Week</h5>
                    <p>The International Affairs and Trade Fairs Commitee of PHDCCI is organiasing the Hybrid Edition of "PHDCCI International Week" from 15-19 March 2021
                    where in each of the weekday will focus on India's Economic and Trade relations with one region and delibrate upon the Business Opportunities
                    and Challenges faced by the Industry & Stakeholders while doing business in the region. The virtual platform will be created
                    by PHDCCI
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
                    <div className="row">
                        {/* <div className="col-md-3">
                            <div className="row">
                                <div className="col-md-4">
                                    <img className="banner" src="/sp.png"/>
                                </div>
                                <div className="col-md-8">
                                    <h6>Mr. Sanjay Aggarwal</h6>
                                    <p>President, PHDCCI</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="row">
                                <div className="col-md-4">
                                    <img className="banner" src="/sp.png"/>
                                </div>
                                <div className="col-md-8">
                                    <h6>Mr. Sanjay Aggarwal</h6>
                                    <p>President, PHDCCI</p>
                                </div>
                            </div>
                        </div> */}
                        <img className="banner"   src="/speakers.jpg" />
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
            `}</style>
        </>
    )
}
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Head from 'next/head';

export default function Layout({ data }) {
  const router = useRouter();

  return (
    <>
          <Head>
        <title>PHDCCI</title>
      </Head>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light navbar-custom"
        id="scroll"
        style={{ backgroundColor: "white", borderBottom: "0" }}
      >
        <div className="container-fluid">
          <a href="/user/layout" className="navbar-brand">
            <img className="logoimage" src="/logo.png" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto lnav">
              <a className="nav-link active" aria-current="page" href="#">
                BUSINESS
              </a>
              <a className="nav-link" href="#">
                STARTUPS
              </a>
              <a className="nav-link" href="#">
                MARKETING
              </a>
              <a className="nav-link" href="#">
                TECHNOLOGY
              </a>
              <a className="nav-link" href="#">
                HEALTH
              </a>
              <a className="nav-link" href="#">
                ENTERTAINMENT
              </a>
              <a className="nav-link" href="#">
                EDUCATION
              </a>
              <a className="nav-link" href="#">
                YOUTH
              </a>
              <a className="nav-link" href="#">
                POLICY
              </a>
              {/* <a className="nav-link" href="#">BIOTECH</a> */}
              {/* <a className="nav-link" href="#" onClick={islogin ? Logout : Login} >{islogin ? 'LOGOUT' : 'LOGIN'}</a>
               */}
            </div>
            <div>
              <a
                className="nav-link disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                <img className="logorimage" src="/logor.png" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container-fluid " style={{padding:"0"}}>
        <div className="row headeritem">
          <div className="col-12 col-md-12">
            <div className="headerheading text-center">ANNUAL SPONSORS</div>
          </div>
          <div className="col-12 col-md-3">
            <div className="bimg1 ">
<img className="img-fluid" src="/logo3.png " alt="a"></img>
            </div>
          </div>
          <div className="col-12 col-md-3">
          <div className="bimg1">
<img className="img-fluid" src="/logo4.png " alt="a"></img>
            </div>
          </div>
          <div className="col-12 col-md-3">
          <div className="bimg1">
<img className="img-fluid" src="/logo5.png " alt="a"></img>
            </div>
          </div>
          <div className="col-12 col-md-3">
          <div className="bimg1">
<img className="img-fluid" src="/logo6.png " alt="a"></img>
            </div>
          </div>
        </div>
      </div>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/a.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/b.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/c.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container  ccenter">
        <h2 className="d-flex justify-content-center">INFORMATION OF EVENTS</h2>
      </div>

      <div className="container ">
        <div className="row ">
          {data.map((d, index) => (
            <div
              key={d.webinar_id}
              className="col-12  d-flex justify-content-center"
            >
              <div
                className="card cardimage1 "
                style={{ width: "20rem", marginTop: "20px" }}
              >
                <Link href={"/user/layoutd?id=" + d.webinar_id}>
                  <a>
                    <img
                      src={d.webinar_mainbanner}
                      className="card-img-top cardimage"
                      alt="..."
                    />
                  </a>
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{d.webinar_title}</h5>
                  <p className="card-text">
                    <span>Date {d.webinar_startdate.split(" ")[0]} </span>
                  </p>

                  <p className="card-text ellipsis">
                    Description {d.webinar_description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container  ccenter">
        <h2 className="d-flex justify-content-center">EVENT SPEAKERS</h2>
      </div>
      <div className="container ">
        <div className="row d-flex justify-content-center ">
          <img
            src="/1.png"
            className="rounded-circle space"
            style={{ width: "100px", height: "100px" }}
          />
          <img
            src="/2.png"
            className="rounded-circle space"
            style={{ width: "100px", height: "100px" }}
          />
          <img
            src="/3.jpg"
            className="rounded-circle space"
            style={{ width: "100px", height: "100px" }}
          />
          <img
            src="/4.png"
            className="rounded-circle space"
            style={{ width: "100px", height: "100px" }}
          />
          <img
            src="/5.jpg"
            className="rounded-circle space"
            style={{ width: "100px", height: "100px" }}
          />
          <img
            src="/6.jpg"
            className="rounded-circle space"
            style={{ width: "100px", height: "100px" }}
          />
          <img
            src="/7.jpg"
            className="rounded-circle space"
            style={{ width: "100px", height: "100px" }}
          />
          <img
            src="/8.jpg"
            className="rounded-circle space"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div className="row d-flex justify-content-center ">
          <img
            src="/9.png"
            className="rounded-circle space"
            style={{ width: "100px", height: "100px" }}
          />
          <img
            src="/10.jpg"
            className="rounded-circle space"
            style={{ width: "100px", height: "100px" }}
          />
          <img
            src="/11.jpg"
            className="rounded-circle space"
            style={{ width: "100px", height: "100px" }}
          />
          <img
            src="/12.jpg"
            className="rounded-circle space"
            style={{ width: "100px", height: "100px" }}
          />
          <img
            src="/13.png"
            className="rounded-circle space"
            style={{ width: "100px", height: "100px" }}
          />
          <img
            src="/14.jpg"
            className="rounded-circle space"
            style={{ width: "100px", height: "100px" }}
          />
          <img
            src="/15.jpg"
            className="rounded-circle space"
            style={{ width: "100px", height: "100px" }}
          />

        </div>
      </div>
      <img className="sponsorsimg " src="/sponsor.jpg" />

      {/* <div className="container  ccenter" >
        <p className="d-flex justify-content-center">Info Update</p>
        <h2 className="d-flex justify-content-center">LATEST NEWS</h2>
      </div>
      <div className="container ">
        <div className="container ">
          <div className="row ">


            <div className="col-4 d-flex justify-content-center">

              <div
                className="card  "
                style={{ width: "20rem", marginTop: "20px" }}
              >

                <a href="#">
                  <img src="#" className="card-img-top cardimage" alt="..." />
                </a>

                <div className="card-body">
                  <h5 className="card-title">Title</h5>
                  <p className="card-text"><span >Date   </span></p>

                  <p className="card-text ellipsis">Description </p>
                </div>
              </div>

            </div>

            <div className="col-4 d-flex justify-content-center">

              <div
                className="card  "
                style={{ width: "20rem", marginTop: "20px" }}
              >

                <a href="#">
                  <img src="#" className="card-img-top cardimage" alt="..." />
                </a>

                <div className="card-body">
                  <h5 className="card-title">Title</h5>
                  <p className="card-text"><span >Date   </span></p>

                  <p className="card-text ellipsis">Description </p>
                </div>
              </div>

            </div>
            <div className="col-4 d-flex justify-content-center">

              <div
                className="card  "
                style={{ width: "20rem", marginTop: "20px" }}
              >

                <a href="#">
                  <img src="#" className="card-img-top cardimage" alt="..." />
                </a>

                <div className="card-body">
                  <h5 className="card-title">Title</h5>
                  <p className="card-text"><span >Date   </span></p>

                  <p className="card-text ellipsis">Description </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div> */}
      <footer className="ccenter back">
        <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-12 foot">
          <a target="_blank" href="https://www.facebook.com/phdcci1905/">
            <img className="socialf" src="/fb.png" />
          </a>
          <a target="_blank" href="https://twitter.com/phdchamber">
            <img className="socialf" src="/tw.png" />
          </a>
          <a target="_blank" href="https://instagram.com/phdcci?igshid=1ckst5srfo4yv">
            <img className="socialf" src="/is.png" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/phdcci?trk=company_name">
            <img className="socialf" src="/lk.png" />
          </a>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=919582268262">
            <img className="socialf" src="/wp.png" />
          </a>
          <a target="_blank" href="mailto:shreya@atechnos.org">
            <img className="socialf" src="/em.png" />
          </a>
        </div>
        </div>
        <div className="row foot">
          <a className="col" href="#">
            BUSINESS
          </a>
          <a className="col" href="#">
            STARTUPS
          </a>
          <a className="col" href="#">
            MARKETING
          </a>
          <a className="col" href="#">
            TECHNOLOGY
          </a>
          <a className="col" href="#">
            HEALTH
          </a>
          <a className="col" href="#">
            ENTERTAINMENT
          </a>
          <a className="col" href="#">
            EDUCATION
          </a>
          <a className="col" href="#">
            YOUTH
          </a>
          <a className="col" href="#">
            POLICY
          </a>
        </div>
      </footer>
      <style global jsx>{`
        .ccenter {
          margin-top: 50px;
        }
        .carousel-control-next-icon {
          background-image: none !important;
        }
        .carousel-control-prev-icon {
          background-image: none !important;
        }
        .back {
          background-color: black;
          padding: 10px;
        }

        .logos {
          display: block;
          text-align: center;
          padding: 10px;
        }
        .logos img {
          width: 10%;
          margin: 10px;
        }
        .space {
          margin: 20px;
        }
        .ccenter p {
          font-size: 9px;
        }
        .ccenter h2 {
          font-size: 25px;
          color: #002db3;
        }
        .f {
          color: white;
          font-size: 50px;
        }
        .foot {
          font-size: 14px;
          height: auto;
          padding: 20px 0px;
          text-align: center;
          grid-area: footer;
        }
        .foot a {
          text-decoration: none;
          margin: 10px;
          color: white;
        }
        .social {
          width: 5%;
          color: white;
        }

        // * {
        //   -webkit-box-sizing: border-box;
        //   box-sizing: border-box;
        // }

        .gallery {
          background: #eee;
        }

        .gallery-cell {
          width: 66%;
          height: 200px;
          margin-right: 10px;
          background: #8c8;
          counter-increment: gallery-cell;
        }

        .gallery-cell:before {
          display: block;
          text-align: center;
          content: counter(gallery-cell);
          line-height: 200px;
          font-size: 80px;
          color: white;
        }

        h3 {
          font-size: 24px;
          font-weight: 500;
          color: #000;
        }

        .main-menu {
          margin-top: 0;
        }
        .main-menu ul {
          margin: 0;
          padding: 0;
          position: relative;
        }
        .main-menu ul,
        .main-menu li {
          list-style: none none;
        }
        .main-menu li {
          display: inline-block;
          clear: none;
        }
        .main-menu a {
          display: grid;
          grid-template-columns: 24px auto;
          grid-template-rows: 24px;
          grid-column-gap: 8px;
          grid-row-gap: 0;
          padding: 16px;
          text-decoration: none;
          color: #fff;
          opacity: 0.75;
        }
        .main-menu a:hover {
          opacity: 1;
          background-color: #ffd525;
          color: #222;
        }
        .main-menu img {
          width: 24px;
          height: 24px;
        }
        .main-menu span {
          font-size: 12px;
          font-weight: 400;
          line-height: 12px;
          align-self: center;
        }
        .main-menu a.nav-orioles:hover {
          background-color: #df4601;
          color: #fff;
        }
        .main-menu a.nav-ravens:hover {
          background-color: #241773;
          color: #fff;
        }
        .main-menu a.nav-terps:hover {
          background-color: #e03a3e;
          color: #fff;
        }
        .main-menu a.nav-msgbrd:hover img {
          -webkit-filter: invert(1);
          filter: invert(1);
        }
        .main-menu a.nav-more {
          position: absolute;
          right: 0;
          top: 0;
        }
        .main-menu a.nav-more:hover {
          background-color: #222;
          color: #fff;
        }
        .main-menu .view-more-menu-options:hover .nav-more {
          background-color: #222;
          color: #fff;
          opacity: 1;
        }
        .main-menu .subnav {
          display: none;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
        }
        .main-menu .view-more-menu-options:hover .subnav {
          display: block;
          width: 320px;
          position: absolute;
          right: 0;
          margin: 0;
          padding: 0;
          top: 56px;
          background-color: #222;
          max-height: calc(100vh - 146px);
          overflow: auto;
        }

        .subnav li {
          display: block;
          grid-template-columns: 24px 256px;
        }
        .subnav li:hover img {
          -webkit-filter: invert(1);
          filter: invert(1);
        }

        .view-more-menu-options:hover {
          background-color: #222;
        }

        .content {
          width: calc(100vw - 32px);
          min-width: 320px;
          max-width: 928px;
          margin: 16px auto;
          grid-area: content;
        }
        .content img {
          width: 100%;
          max-width: 928px;
          height: auto;
          margin: 0 auto;
        }

        .feature-article-teaser {
          box-sizing: border-box;
          background: #fff;
          margin: 32px auto;
          max-width: 928px;
        }
        .feature-article-teaser img {
          width: 100%;
          height: auto;
          margin-bottom: 16px;
        }
        .feature-article-teaser h3 {
          margin: 0;
        }
        .feature-article-teaser h3 a {
          display: block;
          width: 100%;
          margin: 0 0 8px 0;
          font-size: 24px;
          font-weight: 700;
          text-decoration: none;
          color: #555;
          line-height: 1;
        }
        .feature-article-teaser p {
          margin: 0;
        }
        .feature-article-teaser p a {
          display: block;
          width: 100%;
          text-decoration: none;
          margin: 0;
          font-size: 14px;
          font-weight: 200;
          font-family: helvetica, arial, sans-serif;
          color: #555;
          line-height: 1.5;
          letter-spacing: 1px;
        }
        .feature-article-teaser_content {
          padding: 0 32px 32px 32px;
        }
        .feature-article-teaser .meta {
          display: block;
          font-size: 12px;
          line-height: 1;
          padding: 16px 0 0;
          border-top: 1px solid #979797;
          margin-top: 16px;
          text-align: left;
          color: #444;
          font-family: helvetica;
          letter-spacing: 1px;
        }
        .feature-article-teaser .tag {
          margin-right: 0;
        }

        .recent-articles {
          box-sizing: border-box;
          padding: 32px;
          background: #fff;
          margin: 32px auto;
          max-width: 928px;
        }
        .recent-articles section.article {
          display: block;
          display: grid;
          grid-template-columns: 240px auto;
          grid-template-rows: auto;
          grid-template-areas: "image content";
          grid-column-gap: 16px;
          margin-bottom: 24px;
          border-bottom: 1px solid #979797;
          padding-bottom: 18px;
        }
        .recent-articles .article:last-child {
          border-bottom: 0;
          padding-bottom: 0;
          margin-bottom: 0;
        }
        section.article img {
          grid-area: image;
          width: 240px;
          height: auto;
        }
        section.article .preview {
          grid-area: content;
        }
        .preview h3 {
          margin: 0;
        }
        .preview h3 a {
          display: block;
          width: 100%;
          margin: 0 0 8px 0;
          font-size: 18px;
          font-weight: 700;
          text-decoration: none;
          color: #555;
          line-height: 1;
        }
        .preview p {
          margin: 0;
        }
        .preview p a {
          display: block;
          width: 100%;
          text-decoration: none;
          margin: 0;
          font-size: 14px;
          font-weight: 200;
          font-family: helvetica, arial, sans-serif;
          color: #555;
          line-height: 1.5;
          letter-spacing: 1px;
        }
        .preview .meta {
          display: block;
          width: 100%;
          margin: 0 0 4px 0;
          line-height: 1;
        }
        .tag {
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          color: #fe6022;
          display: inline-block;
          margin-right: 8px;
        }
        .published-on {
          font-size: 12px;
          font-weight: 200;
          color: #444;
          display: inline-block;
        }

        footer {
          display: block;
          clear: both;
          background-color: #212529;
          font-size: 24px;
          height: auto;
          padding: 32px 64px;
          text-align: center;
          grid-area: footer;
        }

        .sponsors ul {
          display: block;
          list-style: none none;
          text-align: center;
          margin: 0;
          padding: 0;
        }
        .sponsors li {
          display: inline-block;
          width: 96px;
          height: 96px;
          clear: none;
          margin: 16px;
        }
        .sponsors img {
          width: 96px;
          height: 96px;
        }

        .extended-nav {
          margin-top: 64px;
          margin-bottom: 64px;
        }
        .extended-nav ul {
          list-style: none;
          column-count: 5;
          column-gap: 16px;
          padding: 0;
          margin: 0;
        }
        .extended-nav li {
          list-style: none;
          margin: 2px 0;
          text-align: left;
          display: block;
        }
        .extended-nav ul li a {
          text-decoration: none;
          color: #000;
          font-size: 12px;
          line-height: 1.618;
        }
        @media screen and (max-width: 770px) {
          .marginauto {
            width: 50px;
            margin: auto;
          }
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const res = await fetch(process.env.serverUrl + "webinarform/");

  const data = await res.json();
  // const res = await fetch(process.env.serverUrl + "webinarform/" + query.id);

  // const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  // console.log(data);

  return {
    props: { data, islogin: req.cookies.token || "" }, // will be passed to the page component as props
  };
}

import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Head from 'next/head';
export default function Layout2({ data }) {
  const router = useRouter();
  const [user_emailr, setuser_emailr] = useState("");
  // console.log(data);

  const register = async (event) => {
    event.preventDefault();
    console.log(user_emailr);
    if (user_emailr) {
      var result = await axios({
        method: "post",
        url: "https://api.phdcciwebinar.live/webinarlog",
        data: {
          user_email: user_emailr,
          webinar_id: router.query.id,
        },
      });
      var data = await result.data;
      if (data.auth == true) {
        window.location.replace("/user/webinar?id=" + router.query.id);
      } else {
        alert("Email Not Registerd");
        router.push("/user/loginregister?id=" + router.query.id);
      }
    } 
    // else {
    //   router.push("/user/explore?id=" + router.query.id);
    // }
  };

  return (
    <>
              <Head>
        <title>PHDCCI</title>
      </Head>
      <nav className="navbar navbar-expand-lg  margin navbar-light bg-light navbar-custom">
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
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto lnav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              <a className="nav-link active" aria-current="page" href="#">
                BUSINESS
              </a>
              </li>
      <li className="nav-item active">
              <a className="nav-link" href="#">
                STARTUPS
              </a>
              </li>
      <li className="nav-item active">
              <a className="nav-link" href="#">
                MARKIETING
              </a>
              </li>
      <li className="nav-item active">
              <a className="nav-link" href="#">
                TECHNOLOGY
              </a>
              </li>
      <li className="nav-item active">
              <a className="nav-link" href="#">
                HEALTH
              </a>
              </li>
      <li className="nav-item active">
              <a className="nav-link" href="#">
                ENTERTAINMENT
              </a>
              </li>
              <li className="nav-item active">
              <a className="nav-link" href="#">
                EDUCATION
              </a>
              </li>
      <li className="nav-item active">
              <a className="nav-link" href="#">
                YOUTH
              </a>
              </li>
              
      <li className="nav-item active">
              <a className="nav-link" href="#">
                POLICY
              </a>
              </li>
              </ul>
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

      <div className="container">
        <h5 className="mx-auto title">
          <strong>{data[0].webinar_title}</strong> 
        </h5>
        {/* <p className="margin"><i className="fa fa-calendar" aria-hidden="true"></i> MAR 22, 5:30PM TO MAR 24, 10:30PM IST</p> */}
        <p className="margin">
          <i className="fa fa-calendar" aria-hidden="true"></i>
          <strong>
          &ensp;{new Date(Date.parse(data[0].webinar_startdate)).toString().split("GM")[0]} To {new Date(Date.parse(data[0].webinar_enddate)).toString().split("GM")[0]}
          </strong>
        </p>

        <div className="row margin">
          <div className="col-md-8">
            <img className="banner" src={data[0].webinar_mainbanner}></img>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  Already registered? Log In to access the event
                </p>
                <input
                  className="form-control margin"
                  onChange={(e) => setuser_emailr(e.target.value)}
                  type="text"
                />

                <input
                  onClick={register}
                  className="btn btn-primary button"
                  type="button"
                  value="LOGIN"
                />

                <button
                  onClick={() =>
                    router.push("/user/loginregister?id=" + router.query.id)
                  }
                  className="btn btn-primary button"
                  type="button"
                >
                  REGISTER
                </button>
              </div>
            </div>
            <div className="card ">
              <div className="card-body">
                <p className="card-title">Share on</p>
                <div className="row">
                <a target="_blank" className='col' href="https://www.facebook.com/sharer/sharer.php?u=https://phdcciwebinar.live/user/layoutd?id=99, 'facebook-share-dialog'">
                  <img className="social" src="/fb.png" />
                  </a>
                  <a target="_blank" className='col' href="https://twitter.com/intent/tweet?url=https://phdcciwebinar.live/user/layoutd?id=99">
                  <img className="social" src="/tw.png" />
                  </a>
                  <a target="_blank" className='col' href="https://instagram.com/phdcci?igshid=1ckst5srfo4yv">
                  
                  <img className="social" src="/is.png" />
                  </a>
                  <a target="_blank" className='col' href="https://www.linkedin.com/company/phdcci?trk=company_name">
                  <img className="social" src="/lk.png" />
                  </a>
                  <a target="_blank" className='col' href="https://web.whatsapp.com/">
                  <img className="social" src="/wp.png" />
                  </a>
                  <a target="_blank" className='col' href="mailto:contact@test.com">
                  <img className="social" src="/em.png" />
                  </a>
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

        
          <img className="sponsors" src="/sponsor.jpg" />

        

        <div className="margin">
          <h5>{data[0].webinar_title}</h5>
          <p>{data[0].webinar_description}</p>

        </div>
        <div>
          <h4>SPEAKERS</h4>

            <section>
   <div className="container bg">
      <div className="row bg-background">


        {data[0].webinar_speaker.map((speaker, index)=>(
        <div className="col-12 col-md-3 col-lg-3">
        <div className="img-spon">
          <div className="speakerimg2">
          <img src={speaker.speaker_photo} className="img-fluid" alt=""/>
          </div>
            <p className="img-name">{speaker.speaker_name}<br/>
            {speaker.speaker_desig}</p>
            
        </div>
      </div>
))

}
      </div>

   </div>
 </section>

          {/* <div className="row">

                        <img className="banner" src="/speakers.jpg" />
                    </div> */}
        </div>
      </div>
      <footer className="ccenter back">
        <div className="row d-flex justify-content-center">
        <div className="foot">
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
          <a target="_blank" href="https://web.whatsapp.com/">
            <img className="socialf" src="/wp.png" />
          </a>
          <a target="_blank" href="mailto:contact@test.com">
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

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <style global jsx>{`
        .title {
          font-size: 20px;
        }
        .banner {
          width: 100%;
          border-radius: 2%;
        }
        .banner2 {
          width: 30%;
        }
        .social {
          width: 100%;
        }
        .logos {
          display: block;
          text-align: center;
        }
        .speakers {
          padding: 20px;
        }
        .speakerimg {
          width: 100%;
          margin: auto;
          border-radius: 50%;
        }
        .speakerdetail {
          padding: 7px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .speakerdetail h6 {
          font-size: 11px;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .speakerdetail p {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 9px;
        }
        .logos img {
          width: 10%;
          margin: 10px;
        }
        .button {
          width: 100%;
          margin-bottom: 4%;
        }
        .margin {
          margin-bottom: 5%;
        }
        .automargin {
          margin: auto;
          width: 30%;
        }

        .back {
          background-color: black;
          padding: 10px;
        }
        .ccenter {
          margin-top: 50px;
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

          padding: 32px 64px;
          text-align: center;
          grid-area: footer;
        }
        .foot a {
          text-decoration: none;
          margin: 10px;
          color: white;
        }
        .socialf {
          width: 5%;
          color: white;
        }
        .marginauto {
          display: flex;
          justify-content: center;
          align-items: center;
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

export async function getServerSideProps({ req, query }) {
  const res = await fetch(process.env.serverUrl + "webinarform/" + query.id);

  const data = await res.json();

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

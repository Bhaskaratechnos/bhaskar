import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
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
    } else {
      router.push("/user/explore?id=" + router.query.id);
    }
  };

  return (
    <>
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
          <strong>Event 1</strong> <i className="fas fa-angle-double-left"></i>
          PHDCCI IPFC <i className="fas fa-angle-double-right"></i>
        </h5>
        {/* <p className="margin"><i className="fa fa-calendar" aria-hidden="true"></i> MAR 22, 5:30PM TO MAR 24, 10:30PM IST</p> */}
        <p className="margin">
          <i className="fa fa-calendar" aria-hidden="true"></i>
          <strong>
            {new Date(Date.parse(data[0].webinar_startdate)).toString()}
          </strong>
          To
          <strong>
            {new Date(Date.parse(data[0].webinar_enddate)).toString()}
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

        <div className="card row margin logos ">
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
          <p>{data[0].webinar_description}</p>
          <h5>STRUCTURE OF PHDCCI INTERNATIONAL WEEK</h5>
          <p>
            The International Affairs and Trade Fairs Commitee of PHDCCI is
            organiasing the Hybrid Edition of "PHDCCI International Week" from
            15-19 March 2021 where in each of the weekday will focus on India's
            Economic and Trade relations with one region and delibrate upon the
            Business Opportunities and Challenges faced by the Industry &
            Stakeholders
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

            <section>
   <div className="container bg">
      <div className="row bg-background">
        <div className="col-12 col-md-3 col-lg-3">
          <div className="img-spon">
            <img src="/a1.jpg" className="img-fluid" alt=""/>
              <p className="img-name">Mr. Sanjay Aggarwal <br/>
                President, PHDCCI</p>
          </div>
        </div>
        <div className="col-12 col-md-3 col-lg-3">
          <div className="img-spon">
            <img src="/a2.jpg" className="img-fluid" alt=""/>
              <p className="img-name">Mr. Sanjay Aggarwal <br/>
                President, PHDCCI</p>
          </div>
        </div>
        <div className="col-12 col-md-3 col-lg-3">
          <div className="img-spon">
            <img src="/a3.jpg" className="img-fluid" alt=""/>
              <p className="img-name">Mr. Sanjay Aggarwal <br/>
                President, PHDCCI</p>
          </div>
        </div>
        <div className="col-12 col-md-3 col-lg-3">
          <div className="img-spon">
            <img src="/a4.jpg" className="img-fluid" alt=""/>
              <p className="img-name">Mr. Sanjay Aggarwal <br/>
                President, PHDCCI</p>
          </div>
        </div>

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
          <a href="https://www.facebook.com/phdcci1905/">
            <img className="socialf" src="/fb.png" />
          </a>
          <a href="https://twitter.com/phdchamber">
            <img className="socialf" src="/tw.png" />
          </a>
          <a href="https://instagram.com/phdcci?igshid=1ckst5srfo4yv">
            <img className="socialf" src="/is.png" />
          </a>
          <a href="https://www.linkedin.com/company/phdcci?trk=company_name">
            <img className="socialf" src="/lk.png" />
          </a>
          <a href="https://www.facebook.com/phdcci1905/">
            <img className="socialf" src="/wp.png" />
          </a>
          <a href="https://www.facebook.com/phdcci1905/">
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
          width: 15%;
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

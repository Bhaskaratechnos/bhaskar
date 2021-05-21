import React, { useEffect } from "react";
import {useRouter} from 'next/router'
export default function Home() {

  return (
<>
<section className="hover-color">
  <div className="container-fluid bg">
    <div className="row ">
      <div className="col-12 col-md-12 col-lg-12">
        <div className="form-body-login">
          <form className="form-aligement-login">
            <h4 className="text-center-login">Login Form</h4>
            <div className="form-group font-style-login">
              <label for="exampleInputEmail1">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="form-group font-style-login">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="Signin-btn-login">
              <button type="submit" className="Signin-style-login">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<style global jsx>{`
    .bg {
        background-image: url('/phd1.png');
        background-size: 100% 100vh;
        width: 100%;
        height: 100vh;
      }
  
      .form-body-login {
        margin-top: 30vh;
      }
  
      .text-center-login {
        text-align: center;
      }
  
      .form-aligement-login {
        width: 40%;
        margin: auto;
        background-color: white;
        padding: 20px 30px 20px;
        border-radius: 20px;
        font-family: 'brandon-grotesque-bold-italic-58a8a48221563';
      }
  
      .font-style-login {
        color: #818181;
        font-size: 16px;
        font-weight: 500;
        font-family: inherit;
      }
  
      .Signin-btn-login {
        font-size: 16px;
        font-family: 'brandon-grotesque-bold-italic-58a8a48221563';
        font-weight: 500;
      }
  
      .Signin-style-login {
        background: #061c48;
        color: white;
        border-radius: 5px;
        border: none;
        padding: 6px 14px;
      }
  
      @media only screen and (max-width: 720px) {
        .form-aligement-login {
          width: 100%;
          margin: auto;
          background-color: white;
          padding: 20px 30px 20px;
          border-radius: 10px;
        }
      }
      `}</style>
</>


  );
}

// export async function getServerSideProps(context) {

//     return {
//       redirect: {
//         permanent: false,
//         destination: "/user/layout"
//       }
//     }

// }
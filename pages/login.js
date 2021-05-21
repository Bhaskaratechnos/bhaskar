import React, {useState} from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from "axios";
import Cookies from 'cookies'
import Notiflix from "notiflix";
export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (event) => {
      event.preventDefault(); // don't redirect the page
      Notiflix.Loading.init({svgColor:"rgba(241,230,230,0.985)",});
      const Data = {
          username:username,
          password:password,

      };
      let config = {
        onUploadProgress: Notiflix.Loading.circle()
      }
      const ress = await axios.post(
        "/api/login",
        Data,
        config
      );
      const result = await ress;
      console.log(result);
      if (result.data.status=="success") {
        Notiflix.Loading.remove();
        router.push("/admin") 
      } else {
        Notiflix.Loading.remove();
        alert("Some Error Occured");
      }
    };
  return (
<>
<section className="hover-color">
  <div className="container-fluid bg">
    <div className="row ">
      <div className="col-12 col-md-12 col-lg-12">
        <div className="form-body-login">
          <form onSubmit={login} className="form-aligement-login">
            <h4 className="text-center-login">Login Form</h4>
            <div className="form-group font-style-login">
              <label for="exampleInputEmail1">Email</label>
              <input type="email" onChange={(e) => setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="form-group font-style-login">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
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

export async function getServerSideProps({ req, res }) {
  try {
      
      const cookies = new Cookies(req, res)
      const user = cookies.get('user')
      console.log(user)
      if (user=="admin"){
          return {
              redirect: {
                permanent: false,
                destination: '/admin',
              },
          }
      }

  
      return {
        props: {
          
        },
      };
    } catch (err) {
      return {
        redirect: {
          permanent: false,
          destination: '/user/layout',
        },
      };
    }

}
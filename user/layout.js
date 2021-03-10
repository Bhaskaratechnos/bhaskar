


import { useRouter } from 'next/router'
import cookie from 'js-cookie'

export default function Layoutuser({islogin,children}) {
  const router = useRouter();
  const Login = async event => {
    router.push('/user/loginregister');
  }
  const Logout = async event => {
    cookie.remove('token')
    router.push('/user/');
  }

    
 
  return (
    
<>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className='logoimage' src="/logo.png" /></a>
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
        <a className="nav-link" href="#" onClick={islogin ? Logout : Login} >{islogin ? 'LOGOUT' : 'LOGIN'}</a>
        
      </div>
      <div>
      <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"><img className='logorimage' src='/logor.png'/></a>
      </div>
    </div>
  </div>
</nav>
{children}
<style jsx>{`
        .logoimage {
          height: 50px;
          width:60px;
        }
        .logorimage{
            height: 50px;
            width:80px;  
        }
        .lnav a{
            color:blue;
            font-size:14px;
        }
        .cardimage{
            border-radius: 3%;
            // background: #73AD21;
            // box-shadow: 2px 2px 4px #000000;
        }
        .cardimage1{
          border-radius: 3%;
          // background: #73AD21;
          box-shadow: 2px 2px 4px #000000;
      }
        

      `}</style>
</>
  );
}

export async function getServerSideProps({req}) {

  // console.log(data);

  return {
    props: { islogin:req.cookies.token||'' }, // will be passed to the page component as props
  };
}

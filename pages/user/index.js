import { useRouter } from 'next/router'
import cookie from 'js-cookie'
import Link from 'next/link'
export default function User({ data ,islogin}) {
  const router = useRouter();
  const Login = async event => {
    router.push('/user/loginregister');
  }
  const Logout = async event => {
    cookie.remove('token')
    router.push('/user/');
  }
  const explore = async id => {
if(islogin){
  router.push("/user/explore?id=" +id);
}
else{
  router.push('/user/loginregister');
}
    
    
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
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/crousel.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/crousel.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/crousel.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="container">
        <div className="row">

          {data.map((d, index) => (
            <div key={d.webinar_id} className="col-4">

              <div
                className="card border-0"
                style={{ width: "18rem", marginTop: "10px" }}
              >
                <Link href={islogin ? "/user/webinar?id=" + d.webinar_id : "/user/explore?id=" + d.webinar_id}>
                <a>
                <img src={d.webinar_stage} className="card-img-top cardimage" alt="..." />
                </a>
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>

      <div className="container-fluid mt-5">

</div>
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
            background: #73AD21;
            box-shadow: 2px 2px 4px #000000;
        }
        

      `}</style>
</>
  );
}

export async function getServerSideProps({req}) {
  const res = await fetch("http://15.206.99.13:5000/webinars/");

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  // console.log(data);

  return {
    props: { data,islogin:req.cookies.token||'' }, // will be passed to the page component as props
  };
}

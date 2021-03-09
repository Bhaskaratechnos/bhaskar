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
    
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a href="#" className="navbar-brand">
          Brand
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
            <a href="#" className="nav-item nav-link active">
              Home
            </a>
            <a href="#" className="nav-item nav-link">
              Profile
            </a>
            <a href="#" className="nav-item nav-link">
              Messages
            </a>
            <a href="#" className="nav-item nav-link disabled" tabIndex="-1">
              Reports
            </a>
          </div>
          
    
          <div className="navbar-nav ml-auto">

            <a onClick={islogin ? Logout : Login} className="nav-item nav-link">
            {islogin ? 'Logout' : 'Login'}
              
            </a>
          </div>

        </div>
      </nav>
      <div className="container">
        <div className="row">
          {data.map((d, index) => (
            <div key={d.webinar_id} className="col-4">
              <div
                className="card"
                style={{ width: "18rem", marginTop: "10px" }}
              >
                <img
                  src={d.webinar_stage}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{d.webinar_title}</h5>
                  <p className="card-text">Start Date-{d.webinar_startdate} End Date-{d.webinar_enddate} Description-{d.webinar_description}
                  </p>

                  <Link href={islogin ? "/user/webinar?id=" + d.webinar_id : "/user/explore?id=" + d.webinar_id}>
                    <a  className="btn btn-primary">Explore</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
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

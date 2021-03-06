
import Link from 'next/link'
export default function User({ data }) {
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
            <a href="#" className="nav-item nav-link">
              Login
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
                  src="/assets/hello.svg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{d.webinar_title}</h5>
                  <p className="card-text">
                    {d.webinar_startdate}
                    {d.webinar_enddate}
                    {d.webinar_description}
                  </p>
                  <Link href={"/user/explore?id=" + d.webinar_id}>
                    <a className="btn btn-primary">Explore</a>
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

export async function getServerSideProps(context) {
  const res = await fetch("http://15.206.99.13:5000/webinars/");

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  console.log(data);

  return {
    props: { data }, // will be passed to the page component as props
  };
}

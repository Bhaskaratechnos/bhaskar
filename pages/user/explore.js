
import Link from 'next/link'
export default function Explore({ data }) {
  return (
    <div>

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
                  <Link href={"/admin/comp/editwebinar?id=" + d.webinar_id}>
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

export async function getServerSideProps({query}) {
  const res = await fetch("http://127.0.0.1:5000/webinars/"+query.id);

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

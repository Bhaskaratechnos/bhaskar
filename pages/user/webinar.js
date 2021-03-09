import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import React, {useState,useEffect } from 'react'
import Link from 'next/link'


export default function Webinar({ data ,islogin}) {
  const router = useRouter();
  useEffect(() => {
    
    if(!islogin){
      router.push('/user');
    }
  });
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
                  src={d.webinar_stage}
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
                  
                    <a className="btn btn-primary">Explore</a>
                  
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({req,query}) {
  const res = await fetch("http://15.206.99.13:5000/webinars/"+query.id);

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

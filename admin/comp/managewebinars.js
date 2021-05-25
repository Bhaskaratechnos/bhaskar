import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Managewebinars({data}) {
    const router = useRouter();
    const webinardelete = async id => {
        
    
        const res = await fetch(
          'https://api.phdcciwebinar.live/webinars/'+id,
          {
            
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'DELETE'
          }
        )
        var result = await res;
        // console.log(result)
        router.push('/admin/comp/managewebinars');
    

      }
    return (
<main>
<div className="main__container">
<div className="row">
    <div className="col-sm-8 display-5">
      Webinars
    </div>

    <div className="col-sm-4">
        <Link href="/admin/comp/addwebinar">
    <a><button type="button" className="btn btn-success">ADD WEBINAR</button></a>
    </Link>
    </div>
  </div>
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">S no.</th>
      <th scope="col">Title</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
      
      <th scope="col">Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {data.map((d, index)=>(  
        <tr key={d.webinar_id }>
        <th scope="row">{index}</th>
        <td>{d.webinar_title }</td>
        <td>{d.webinar_startdate }{console.log(d.webinar_startdate)}</td>
        <td>{d.webinar_enddate }</td>
        <td>{d.webinar_description }</td>
  
        <td><Link href={"/admin/comp/editwebinar?id="+d.webinar_id}><a><button type="button" className="btn btn-primary">Edit</button></a></Link>  <button type="button" onClick={()=>{webinardelete(d.webinar_id)}} className="btn btn-danger">Delete</button></td>
      </tr>   
         
))}
    
  </tbody>
</table>

</div>
</main>

);
}

export async function getServerSideProps(context) {
    const res = await fetch('https://api.phdcciwebinar.live/webinars/')
    
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
    // console.log(data);
  
    return {
      props: {data}, // will be passed to the page component as props
    }
  }

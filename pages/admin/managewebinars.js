import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Managewebinars({data}) {
    const router = useRouter();
    const webinardelete = async id => {
        
    
        const res = await fetch(
          'https://api.phdcciwebinar.live/webinarform/'+id,
          {
            
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'DELETE'
          }
        )
        var result = await res;
        // console.log(result)
        router.push('/admin/managewebinars');
    

      }
    return (
<main>
<div className="main__container">
<div className="row">
    <div className="col-sm-8 display-5">
      Webinars
    </div>

    <div className="col-sm-4">
        <Link href="/admin/addwebinar">
    <a><button type="button" className="btn btn-success">ADD WEBINAR</button></a>
    </Link>
    </div>
  </div>
<table className="table table-striped">
  <thead>
    <tr className="fonthead">
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
        <th className="middle" scope="row">{index}</th>
        <td className="fontcontrol maxwidth middle"><p className="ellipsis" style={{marginBottom:0}}>{d.webinar_title }</p></td>
        <td className="fontcontrol middle">{d.webinar_startdate }{console.log(d.webinar_startdate)}</td>
        <td className="fontcontrol middle">{d.webinar_enddate }</td>
        <td className="fontcontrol maxwidth middle"><p className="ellipsis" style={{marginBottom:0}}>{d.webinar_description }</p></td>
  
        <td><Link href={"/admin/editwebinar?id="+d.webinar_id}><a><button type="button" className="btn btn-primary">Edit</button></a></Link>  <button type="button" onClick={()=>{webinardelete(d.webinar_id)}} className="btn btn-danger">Delete</button></td>
      </tr>   
         
))}
    
  </tbody>
</table>

</div>


<style jsx>{`

      `}</style>

</main>

);
}

export async function getServerSideProps(context) {
    const res = await fetch(process.env.serverUrl+'webinarform/')
    
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

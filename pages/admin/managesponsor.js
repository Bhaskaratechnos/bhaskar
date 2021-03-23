import Link from 'next/link'
import { useRouter } from 'next/router'
import Notiflix from "notiflix";

export default function Managesponsor({data}) {
    const router = useRouter();
    const speakerdelete = async id => {
      Notiflix.Loading.Circle()
        const res = await fetch(
          'http://127.0.0.1:5000/sponsor/'+id,
          {
            
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'DELETE'
          }
        )
        var result = await res;
        // console.log(result)
        Notiflix.Loading.Remove();
        router.push('/admin/managesponsor');
    

      }
    return (
<main>
<div className="main__container">

<div className="row">
    <div className="col-sm-8 display-5">
    Sponsors
    </div>

    <div className="col-sm-4">
    <Link href="/admin/addsponsor">
    <a><button type="button" className="btn btn-success">ADD Sponser</button></a>
    </Link>
    </div>
  </div>
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">S no.</th>
      <th scope="col">Type</th>
      <th scope="col">Name</th>
      <th scope="col">Logo</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
       
  {data.map((d, index)=>(  
        <tr key={index }>
        <th scope="row">{index}</th>
        <td>{d.sponsor_type }</td>
        <td>{d.sponsor_name }</td> 
        <td><img src={d.sponsor_logo} className="image"/></td>
  
        <td><Link href={"/admin/editsponsor?id="+d.id}><a><button type="button" className="btn btn-primary">Edit</button></a></Link>  <button type="button" onClick={()=>{speakerdelete(d.id)}} className="btn btn-danger">Delete</button></td>
      </tr>   
         
))} 
 

    
  </tbody>
</table>
</div>
<style jsx>{`
        .image {
          height: 30px;
          width:30px;
        }

      `}</style>
   
</main>

);
}


export async function getServerSideProps(context) {
    const res = await fetch(process.env.serverUrl+'sponsor/')
    
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

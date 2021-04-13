import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Allspeakers({data}) {
    const router = useRouter();
    const speakerdelete = async id => {
        const res = await fetch(
          'http://15.206.99.13:5000/speakers/'+id,
          {
            
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'DELETE'
          }
        )
        var result = await res;
        // console.log(result)
        router.push('/admin/allspeakers');
    

      }
    return (
<main>
<div className="main__container">

<div className="row">
    <div className="col-sm-8 display-5">
    Speakers
    </div>

    <div className="col-sm-4">
    <Link href="/admin/addspeaker">
    <a><button type="button" className="btn btn-success">ADD Speaker</button></a>
    </Link>
    </div>
  </div>
<table className="table table-striped">
  <thead>
    <tr className="fonthead">
      <th scope="col">S no.</th>
      <th scope="col">Name</th>
      <th scope="col">Designation</th>
      <th scope="col">Company</th>
      <th scope="col">Photo</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
       
  {data.map((d, index)=>(  
        <tr key={d.speaker_id }>
        <th scope="row">{index}</th>
        <td className="fontcontrol">{d.speaker_name }</td>
        <td className="fontcontrol">{d.speaker_desig }</td>
        <td className="fontcontrol">{d.speaker_company}</td>
        <td className="fontcontrol"><img src={d.speaker_photo} className="image"/></td>
  
        <td><Link href={"/admin/editspeaker?id="+d.speaker_id}><a><button type="button" className="btn btn-primary">Edit</button></a></Link>  <button type="button" onClick={()=>{speakerdelete(d.speaker_id)}} className="btn btn-danger">Delete</button></td>
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
    const res = await fetch(process.env.serverUrl+'speakers/')
    
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

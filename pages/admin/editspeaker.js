import { useRouter } from 'next/router'
import React, {useState} from 'react'
import axios from 'axios';
export default function Addspeaker({data}) {
    const router = useRouter();
    const [speaker_name, setspeaker_name] = useState(data[0].speaker_name||"");
    const [speaker_desig, setspeaker_desig] = useState(data[0].speaker_desig||"");
    const [speaker_company, setspeaker_company] = useState(data[0].speaker_company||"");
    const [speaker_photo, setspeaker_photo] = useState(data[0].speaker_photo||"");

    const speakeradd = async event => {
        event.preventDefault()
        console.log(speaker_photo);
        var formData = new FormData();
        formData.append('speaker_name', speaker_name);
        formData.append('speaker_desig', speaker_desig);
        formData.append('speaker_company', speaker_company);
        formData.append('speaker_photo', speaker_photo);
        formData.append('time_stamp', Date.now());
        for (var key of formData.entries()) {
          console.log(key[0] );
      }
      const ress=await axios.put("http://15.206.99.13:5000/speakers/"+router.query.id, formData);
      const result = await ress;
      console.log(result)
        if(result.data.affectedRows){
            router.push('/admin/allspeakers')
        }
        else{
            alert("Some Error Occured");
        }
      }
    return (
<main>
<div className="main__container">
<form onSubmit={speakeradd}>
  <div className="form-group">
    <label > Name</label>
    <input type="text" className="form-control" name="speaker_name" onChange={e => setspeaker_name(e.target.value)}  defaultValue={speaker_name} required/>
    
  </div>
  <div className="form-group">
    <label > Designation</label>
    <input type="text" className="form-control" name="speaker_desig" onChange={e => setspeaker_desig(e.target.value)} defaultValue={speaker_desig} required/>
  </div>
  <div className="form-group">
    <label >Company</label>
    <input type="text" className="form-control" name="speaker_company" onChange={e => setspeaker_company(e.target.value)} defaultValue={speaker_company} required/>
  </div>
  <div className="form-group">
    <label >Photo</label>
    <input type="file" className="form-control" name="speaker_photo" onChange={e => setspeaker_photo(e.target.files[0])}  required/>
  </div>


  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>
</main>

);
}

export async function getServerSideProps({ query }) {

    const res = await fetch(process.env.serverUrl+'speakers/'+query.id)
  
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
    console.log(data);
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }

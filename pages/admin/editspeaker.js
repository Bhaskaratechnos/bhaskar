import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Notiflix from "notiflix";
export default function Addspeaker({data}) {
    const router = useRouter();
    const [speaker_name, setspeaker_name] = useState(data[0].speaker_name||"");
    const [speaker_desig, setspeaker_desig] = useState(data[0].speaker_desig||"");
    const [speaker_company, setspeaker_company] = useState(data[0].speaker_company||"");
    const [speaker_photo, setspeaker_photo] = useState(data[0].speaker_photo||"");
    // console.log(speaker_photo);

    useEffect(async () => {
      console.log(speaker_photo)
      let blob = await fetch(speaker_photo).then(r => r.blob());
      var reader = new FileReader();
      reader.readAsDataURL(blob)
      reader.onload = (event) => {
        setspeaker_photo(event.target.result);
      };
    });
    const speakeradd = async event => {
        event.preventDefault()
        
        var formData = new FormData();
        formData.append('speaker_name', speaker_name);
        formData.append('speaker_desig', speaker_desig);
        formData.append('speaker_company', speaker_company);
        formData.append('speaker_photo', speaker_photo);
        formData.append('time_stamp', Date.now());
        for (var key of formData.entries()) {
          console.log(key[0] );
      }
      let config = {
        onUploadProgress: Notiflix.Loading.Circle()
      }
      const ress=await axios.put("http://127.0.0.1:5000/speakers/"+router.query.id, formData,config );
      const result = await ress;
      // console.log(result)
        if(result.data.affectedRows){
          Notiflix.Loading.Remove();
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
    
    <input type="file" className="form-control" name="speaker_photo" onChange={(e) =>{
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0])
      // console.log(reader);
      reader.onload = (event) => {
        setspeaker_photo(event.target.result);
      };
      
    }}  required/>
    <img className="form-control" src={speaker_photo} className="image"/>
  </div>


  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>
<style jsx>{`
        .image {
          height: 100px;
          width:100px;
          margin:10px
        }

      `}</style>
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
    // console.log(data);
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }

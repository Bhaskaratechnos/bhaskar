import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Notiflix from "notiflix";
export default function Addspeaker({data}) {
    const router = useRouter();
    const [creativetype_id, setcreativetype_id] = useState('');
    const [creative_title, setcreative_title] = useState(data[0].creative_title);
    const [creative_url, setcreative_url] = useState(data[0].creative_url);
    const [creative_description, setcreative_description] = useState(data[0].creative_description);
    // console.log(speaker_photo);


    const speakeradd = async event => {
        event.preventDefault()
        const Data={
            creative_title:creative_title,
            creative_url:creative_url,
            creative_description:creative_description,

        }
      const ress=await axios.put("https://api.phdcciwebinar.live/creative/"+router.query.id, Data);
      const result = await ress;
      console.log(result)
        if(result.data.affectedRows){
            router.push('/admin/allcreatives')
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
    <input type="text" className="form-control" name="creative_title" onChange={e => setcreative_title(e.target.value)}  defaultValue={creative_title} required/>
    
  </div>
  <div className="form-group">
    <label >Image</label>
    <div className="custom-file-upload">
    
    <img  src={creative_url} className="image"/>
    <label className="im">
    <input type="file" accept="image/*"  name="creative_url" onChange={(e) =>{
      try {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        // console.log(reader);
        reader.onload = (event) => {
          setcreative_url(event.target.result);
        };
      }
      catch(err) {
        console.log(err)
      }      
    }}  />
    <i className="fa fa-cloud-upload"></i> Upload
    </label>

    </div>
  </div>
  <div className="form-group">
    <label >Description</label>
    <input type="text" className="form-control" name="creative_description" onChange={e => setcreative_description(e.target.value)}  defaultValue={creative_description} required/>
    
  </div>


  <button type="submit" className="btn btn-primary">Submit</button>
</form>


</div>
<style jsx>{`
        .image {
          width:100%;
          margin:10px
        }

      `}</style>
</main>

);
}

export async function getServerSideProps({ query }) {

    const res = await fetch(process.env.serverUrl+'creative/'+query.id)
  
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

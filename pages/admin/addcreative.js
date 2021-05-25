import { useRouter } from 'next/router'
import React, {useState} from 'react'
import axios from 'axios';
export default function Addcreative() {
    const router = useRouter();
    const [creativetype_id, setcreativetype_id] = useState('');
    const [creative_title, setcreative_title] = useState('');
    const [creative_url, setcreative_url] = useState('');
    const [creative_description, setcreative_description] = useState('');

    const creativeadd = async event => {
        event.preventDefault()
        const Data={
            creative_title:creative_title,
            creative_url:creative_url,
            creative_description:creative_description,

        }
      const ress=await axios.post("https://api.phdcciwebinar.live/creative", Data);
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
<form onSubmit={creativeadd}>
  <div className="form-group">
    <label > Name</label>
    <input type="text" className="form-control" name="creative_title" onChange={e => setcreative_title(e.target.value)}  placeholder="" required/>
    
  </div>
  <div className="form-group">
    <label >Image :</label>
    <div className="custom-file-upload mt-3">
    
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
  <div className="form-group mt-3">
    <label >Description</label>
    <input type="text" className="form-control" name="creative_description" onChange={e => setcreative_description(e.target.value)}  placeholder="" required/>
    
  </div>

  <button type="submit" className="btn btn-primary mt-3">Submit</button>
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

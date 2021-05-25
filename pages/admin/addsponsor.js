import { useRouter } from 'next/router'
import React, {useState} from 'react'
import axios from 'axios';
import Notiflix from "notiflix";
export default function AddSponsor() {
    const router = useRouter();
    const [sponsor_type, setsponsor_type] = useState('');
    const [sponsor_name, setsponsor_name] = useState(''); 
    const [sponsor_logo, setsponsor_logo] = useState('');

    const sponsoradd = async event => {
        event.preventDefault()
        let config = {
            onUploadProgress: Notiflix.Loading.Circle()
          }
      const ress=await axios.post("https://api.phdcciwebinar.live/sponsor", {sponsor_type:sponsor_type,sponsor_name:sponsor_name,sponsor_logo:sponsor_logo},config);
      const result = await ress;
      console.log(result)
        if(result.data.affectedRows){
            Notiflix.Loading.Remove();
            router.push('/admin/managesponsor')
        }
        else{
            Notiflix.Loading.Remove();
            alert("Some Error Occured");

        }
      }
    return (
<main>
<div className="main__container">
<form onSubmit={sponsoradd}>
<div className="form-group">
    <label > Type</label>
    <select onChange={e => setsponsor_type(e.target.value)} className="form-control" name="sponsor_type" id="sponsor_type">
    <option value="">Select Sponsor Type</option>
  <option value="Platinium">Platinium</option>
  <option value="Dimond">Dimond</option>
  <option value="Gold">Gold</option>
  <option value="Silver">Silver</option>
  <option value="Partner">Partner</option>
  <option value="Associates">Associates</option>
  <option value="Session">Session</option>
</select>
  </div>
  <div className="form-group">
    <label > Name</label>
    <input type="text" className="form-control" name="sponsor_name" onChange={e => setsponsor_name(e.target.value)}  placeholder="" required/>
    
  </div>

  <div className="form-group">
    <label >Logo (100x200 png):</label>
    <div className="custom-file-upload mt-3">
    
    <img  src={sponsor_logo} className="image"/>
    <label className="im">
    <input type="file" accept="image/*"  name="sponsor_logo" onChange={(e) =>{
      try {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        // console.log(reader);
        reader.onload = (event) => {
          setsponsor_logo(event.target.result);
        };
      }
      catch(err) {
        console.log(err)
      }      
    }}  />
    <i className="fa fa-cloud-upload"></i> Upload
    </label>

    </div>  </div>


  <button type="submit" className="btn btn-primary mt-5">Submit</button>
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

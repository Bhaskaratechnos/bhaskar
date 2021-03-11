import { useRouter } from 'next/router'
import React, {useState} from 'react'
import axios from 'axios';
export default function Addspeaker() {
    const router = useRouter();
    const [speaker_name, setspeaker_name] = useState('');
    const [speaker_desig, setspeaker_desig] = useState('');
    const [speaker_company, setspeaker_company] = useState('');
    const [speaker_photo, setspeaker_photo] = useState('');

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
      const ress=await axios.post(process.env.serverUrl+"/speakers", formData);
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
    <input type="text" className="form-control" name="speaker_name" onChange={e => setspeaker_name(e.target.value)}  placeholder="" required/>
    
  </div>
  <div className="form-group">
    <label > Designation</label>
    <input type="text" className="form-control" name="speaker_desig" onChange={e => setspeaker_desig(e.target.value)} placeholder="" required/>
  </div>
  <div className="form-group">
    <label >Company</label>
    <input type="text" className="form-control" name="speaker_company" onChange={e => setspeaker_company(e.target.value)} placeholder="" required/>
  </div>
  <div className="form-group">
    <label >Photo</label>
    <input type="file" className="form-control" name="speaker_photo" onChange={e => setspeaker_photo(e.target.files[0])} placeholder="" required/>
  </div>


  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>
</main>

);
}

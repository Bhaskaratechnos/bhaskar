import { useRouter } from 'next/router'
import React, {useState} from 'react'
import axios from 'axios';
export default function Addwebinar() {
    const router = useRouter();
    const [webinar_title, setwebinar_title] = useState('');
    const [webinar_description, setwebinar_description] = useState('');
    const [webinar_startdate, setwebinar_startdate] = useState('');
    const [webinar_starttime, setwebinar_starttime] = useState('');
    const [webinar_enddate, setwebinar_enddate] = useState('');
    const [webinar_endtime, setwebinar_endtime] = useState('');
    const [webinar_mainbanner, setwebinar_mainbanner] = useState('');
    const [webinar_speaker, setwebinar_speaker] = useState('');
    const [webinar_meetinglink, setwebinar_meetinglink] = useState('');
    const [webinar_stage, setwebinar_stage] = useState('');

    const webinaradd = async event => {
        event.preventDefault()
        console.log(webinar_stage);
        var formData = new FormData();
        formData.append('webinar_title', webinar_title);
        formData.append('webinar_description', webinar_description);
        formData.append('webinar_startdate', webinar_startdate+' '+webinar_starttime);
        formData.append('webinar_enddate', webinar_enddate+' '+webinar_endtime);
        formData.append('webinar_mainbanner', webinar_mainbanner);
        formData.append('webinar_speaker', webinar_speaker);
        formData.append('webinar_meetinglink', webinar_meetinglink);
        formData.append('webinar_stage', webinar_stage);
        for (var key of formData.entries()) {
          console.log(key[0] );
      }
      const ress=await axios.post("http://127.0.0.1:5000/webinars", formData);
      const result = await ress;
      console.log(result)
        if(result.data.affectedRows){
            router.push('/admin/comp/managewebinars')
        }
        else{
            alert("Some Error Occured");
        }
      }
    return (
<main>
<div className="main__container">
<form onSubmit={webinaradd}>
  <div className="form-group">
    <label >Webinar Title</label>
    <input type="text" className="form-control" name="webinar_title" onChange={e => setwebinar_title(e.target.value)}  placeholder="Enter Webinar Title" required/>
    
  </div>
  <div className="form-group">
    <label >Webinar Description</label>
    <input type="text" className="form-control" name="webinar_description" onChange={e => setwebinar_description(e.target.value)} placeholder="Enter Webinar Description" required/>
  </div>
  <div className="form-group">
    <label >Webinar Start Date</label>
    <input type="date" className="form-control" name="webinar_startdate" onChange={e => setwebinar_startdate(e.target.value)} placeholder="Enter Webinar Start Date" required/>
    <input type="time" className="form-control" name="webinar_starttime" onChange={e => setwebinar_starttime(e.target.value)} placeholder="Enter Webinar Start Date" required/>
  </div>
  <div className="form-group">
    <label >Webinar End Date</label>
    <input type="date" className="form-control" name="webinar_enddate" onChange={e => setwebinar_enddate(e.target.value)} placeholder="Enter Webinar End Date" required/>
    <input type="time" className="form-control" name="webinar_endtime" onChange={e => setwebinar_endtime(e.target.value)} placeholder="Enter Webinar End Date" required/>
  </div>
  <div className="form-group">
    <label >Webinar Main Banner</label>
    <input type="text" className="form-control" name="webinar_mainbanner" onChange={e => setwebinar_mainbanner(e.target.value)}  placeholder="Enter Webinar Main Banner"required/>
  </div>
  <div className="form-group">
    <label >Webinar Speaker</label>
    <input type="text" className="form-control"  name="webinar_speaker" onChange={e => setwebinar_speaker(e.target.value)} placeholder="Enter Webinar Speaker" required/>
  </div>
  <div className="form-group">
    <label >Webinar stage </label>
    <input type="file" className="form-control" name="webinar_stage" onChange={e => setwebinar_stage(e.target.files[0])} placeholder="Enter Webinar stage"required/>
  </div>
  <div className="form-group">
    <label >Webinar Meeting Link</label>
    <input type="text" className="form-control" name="webinar_meetinglink"  onChange={e => setwebinar_meetinglink(e.target.value)} placeholder="Enter Meeting Link" required/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>
</main>

);
}

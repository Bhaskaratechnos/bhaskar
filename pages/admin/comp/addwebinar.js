import { useRouter } from 'next/router'
import React, {useState} from 'react'
export default function Addwebinar() {
    const router = useRouter();
    const [webinar_title, setwebinar_title] = useState('');
    const [webinar_description, setwebinar_description] = useState('');
    const [webinar_startdate, setwebinar_startdate] = useState('');
    const [webinar_enddate, setwebinar_enddate] = useState('');
    const [webinar_mainbanner, setwebinar_mainbanner] = useState('');
    const [webinar_speaker, setwebinar_speaker] = useState('');
    const [webinar_meetinglink, setwebinar_meetinglink] = useState('');
    const [webinar_stage, setwebinar_stage] = useState('');

    const webinaradd = async event => {
        event.preventDefault()
        const res = await fetch(
          'http://15.206.99.13:5000/webinars/',
          {
            body: JSON.stringify({
                webinar_title: webinar_title,
                webinar_description: webinar_description,
                webinar_startdate: webinar_startdate,
                webinar_enddate: webinar_enddate,
                webinar_mainbanner: webinar_mainbanner,
                webinar_speaker: webinar_speaker,
                webinar_meetinglink: webinar_meetinglink,
                webinar_stage: webinar_stage

            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          }
        )
    
        const result = await res.json();
        // console.log(result)
        if(result.affectedRows){
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
    <input type="text" className="form-control" name="webinar_title" onChange={e => setwebinar_title(e.target.value)}  placeholder="Enter Webinar Title"/>
    
  </div>
  <div className="form-group">
    <label >Webinar Description</label>
    <input type="text" className="form-control" name="webinar_description" onChange={e => setwebinar_description(e.target.value)} placeholder="Enter Webinar Description"/>
  </div>
  <div className="form-group">
    <label >Webinar Start Date</label>
    <input type="date" className="form-control" name="webinar_startdate" onChange={e => setwebinar_startdate(e.target.value)} placeholder="Enter Webinar Start Date"/>
  </div>
  <div className="form-group">
    <label >Webinar End Date</label>
    <input type="date" className="form-control" name="webinar_enddate" onChange={e => setwebinar_enddate(e.target.value)} placeholder="Enter Webinar End Date"/>
  </div>
  <div className="form-group">
    <label >Webinar Main Banner</label>
    <input type="text" className="form-control" name="webinar_mainbanner" onChange={e => setwebinar_mainbanner(e.target.value)}  placeholder="Enter Webinar Main Banner"/>
  </div>
  <div className="form-group">
    <label >Webinar Speaker</label>
    <input type="text" className="form-control"  name="webinar_speaker" onChange={e => setwebinar_speaker(e.target.value)} placeholder="Enter Webinar Speaker"/>
  </div>
  <div className="form-group">
    <label >Webinar stage </label>
    <input type="text" className="form-control" name="webinar_stage" onChange={e => setwebinar_stage(e.target.value)} placeholder="Enter Webinar stage"/>
  </div>
  <div className="form-group">
    <label >Webinar Meeting Link</label>
    <input type="text" className="form-control" name="webinar_meetinglink"  onChange={e => setwebinar_meetinglink(e.target.value)} placeholder="Enter Meeting Link"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>
</main>

);
}

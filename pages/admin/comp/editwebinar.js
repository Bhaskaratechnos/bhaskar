import React, {useState} from 'react'
import { useRouter } from 'next/router'

import axios from 'axios';
export default function Editwebinar(props) {
    const router = useRouter();

    const [webinar_title, setwebinar_title] = useState(props.data[0].webinar_title);
    const [webinar_description, setwebinar_description] = useState(props.data[0].webinar_description);
    const [webinar_startdate, setwebinar_startdate] = useState(props.data[0].webinar_startdate);
    const [webinar_starttime, setwebinar_starttime] = useState(props.data[0].webinar_startdate);
    const [webinar_enddate, setwebinar_enddate] = useState(props.data[0].webinar_enddate);
    const [webinar_endtime, setwebinar_endtime] = useState(props.data[0].webinar_enddate);
    const [webinar_mainbanner, setwebinar_mainbanner] = useState(props.data[0].webinar_mainbanner);
    const [webinar_speaker, setwebinar_speaker] = useState(props.data[0].webinar_speaker);
    const [webinar_meetinglink, setwebinar_meetinglink] = useState(props.data[0].webinar_meetinglink);
    const [webinar_stage, setwebinar_stage] = useState(props.data[0].webinar_stage);

    const webinarupdate = async event => {
        console.log(new Date(webinar_startdate+' '+webinar_starttime))
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
          console.log(key[0]+','+key[1] );
      }
      const ress=await axios.put("http://127.0.0.1:5000/webinars/"+router.query.id, formData);
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

<form onSubmit={webinarupdate}>
<div className="form-group">
    <label >Webinar Title</label>
    <input type="text" className="form-control" name="webinar_title" onChange={e => setwebinar_title(e.target.value)}  defaultValue={webinar_title}/>
    
  </div>
  <div className="form-group">
    <label >Webinar Description</label>
    <input type="text" className="form-control " name="webinar_description" onChange={e => setwebinar_description(e.target.value)} defaultValue={webinar_description}/>
  </div>
  <div className="form-group">
    <label >Webinar Start Date</label>
    
    <input type="date" className="form-control col-6" name="webinar_startdate" onChange={e => setwebinar_startdate(e.target.value)} defaultValue={webinar_startdate}/>
    <input type="time" className="form-control col-6" name="webinar_starttime" onChange={e => setwebinar_starttime(e.target.value)} defaultValue={webinar_startdate}/>

    </div>

  <div className="form-group">
    <label >Webinar End Date</label>
    
    <input type="date" className="form-control col-6" name="webinar_enddate" onChange={e => setwebinar_enddate(e.target.value)} defaultValue={webinar_enddate}/>
    <input type="time" className="form-control col-6" name="webinar_endtime" onChange={e => setwebinar_endtime(e.target.value)} defaultValue={webinar_enddate}/>
    
  </div>
  <div className="form-group">
    <label >Webinar Main Banner</label>
    <input type="text" className="form-control" name="webinar_mainbanner" onChange={e => setwebinar_mainbanner(e.target.value)}  defaultValue={webinar_mainbanner}/>
  </div>
  <div className="form-group">
    <label >Webinar Speaker</label>
    <input type="text" className="form-control"  name="webinar_speaker" onChange={e => setwebinar_speaker(e.target.value)} defaultValue={webinar_speaker}/>
  </div>
  <div className="form-group">
    <label >Webinar stage </label>
    <input type="file" className="form-control" name="webinar_stage" onChange={e => setwebinar_stage(e.target.files[0])} defaultValue={webinar_stage}/>
  </div>
  <div className="form-group">
    <label >Webinar Meeting Link</label>
    <input type="text" className="form-control" name="webinar_meetinglink"  onChange={e => setwebinar_meetinglink(e.target.value)} defaultValue={webinar_meetinglink}/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>
</main>

);
}

export async function getServerSideProps({query}) {
    
    const res = await fetch('http://15.206.99.13:5000/webinars/'+query.id)
    
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


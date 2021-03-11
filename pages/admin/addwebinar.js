import { useRouter } from 'next/router'
import React, {useState} from 'react'
import axios from 'axios';
import MultiSelect from "react-multi-select-component";
export default function Addwebinar({data}) {
    const router = useRouter();
    const [webinar_title, setwebinar_title] = useState('');
    const [webinar_description, setwebinar_description] = useState('');
    const [webinar_startdate, setwebinar_startdate] = useState('');
    const [webinar_starttime, setwebinar_starttime] = useState('');
    const [webinar_enddate, setwebinar_enddate] = useState('');
    const [webinar_endtime, setwebinar_endtime] = useState('');
    const [webinar_mainbanner, setwebinar_mainbanner] = useState('');
    const [webinar_platinium1, setwebinar_platinium1] = useState('');
    const [webinar_platinium2, setwebinar_platinium2] = useState('');
    const [webinar_sponser, setwebinar_sponser] = useState('');
    const [webinar_speaker, setwebinar_speaker] = useState('');
    const [webinar_meetinglink, setwebinar_meetinglink] = useState('');
    const [webinar_stage, setwebinar_stage] = useState('');
    const [webinar_player, setwebinar_player] = useState('');
    const [selected, setSelected] = useState([]);

    const d=data.map((d,index)=>(
      {label:d.speaker_name,value:d.speaker_id}
    ))
    const webinaradd = async event => {
        event.preventDefault()
        console.log(webinar_stage);
        var formData = new FormData();
        formData.append('webinar_title', webinar_title);
        formData.append('webinar_description', webinar_description);
        formData.append('webinar_startdate', webinar_startdate+' '+webinar_starttime);
        formData.append('webinar_enddate', webinar_enddate+' '+webinar_endtime);
        formData.append('webinar_mainbanner', webinar_mainbanner);
        formData.append('webinar_platinium1', webinar_platinium1);
        formData.append('webinar_platinium2', webinar_platinium2);
        formData.append('webinar_sponser', webinar_sponser);
        formData.append('webinar_speaker', JSON.stringify(selected));
        formData.append('webinar_meetinglink', webinar_meetinglink);
        formData.append('webinar_stage', webinar_stage);
        formData.append('webinar_player', webinar_player);
        for (var key of formData.entries()) {
          console.log(key[0] );
      }
      const ress=await axios.post("http://15.206.99.13:5000/webinarform", formData);
      const result = await ress;
      console.log(result)
        if(result.data.affectedRows){
            router.push('/admin/managewebinars')
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
    <input type="file" className="form-control" name="webinar_mainbanner" onChange={e => setwebinar_mainbanner(e.target.files[0])}  required/>
  </div>
  <div className="form-group">
    <label >Webinar Platinium Banner1</label>
    <input type="file" className="form-control" name="webinar_mainbanner" onChange={e => setwebinar_platinium1(e.target.files[0])}  required/>
  </div>
  <div className="form-group">
    <label >Webinar Platinium Banner2</label>
    <input type="file" className="form-control" name="webinar_mainbanner" onChange={e => setwebinar_platinium2(e.target.files[0])}  required/>
  </div>
  <div className="form-group">
    <label >Webinar Sponser Banner</label>
    <input type="file" className="form-control" name="webinar_mainbanner" onChange={e => setwebinar_sponser(e.target.files[0])}  required/>
  </div>
  <div className="form-group">
    <label >Webinar Speaker</label>
    <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={d}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
      />

</div>
  <div className="form-group">
    <label >Webinar stage </label>
    <input type="file" className="form-control" name="webinar_stage" onChange={e => setwebinar_stage(e.target.files[0])} placeholder="Enter Webinar stage"required/>
  </div>
  <div className="form-group">
    <label >Webinar Meeting Link</label>
    <input type="text" className="form-control" name="webinar_meetinglink"  onChange={e => setwebinar_meetinglink(e.target.value)} placeholder="Enter Meeting Link" required/>
  </div>
  <div className="form-group">
    <label >Player Link</label>
    <input type="text" className="form-control" name="webinar_player"  onChange={e => setwebinar_player(e.target.value)} placeholder="Player Link" required/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>
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

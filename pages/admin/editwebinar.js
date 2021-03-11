import React, { useState } from 'react'
import { useRouter } from 'next/router'
import MultiSelect from "react-multi-select-component";
import axios from 'axios';
export default function Editwebinar(props) {
  const router = useRouter();
  const d=props.data2.map((d,index)=>(
    {label:d.speaker_name,value:d.speaker_id}
  ))
  
  const [webinar_title, setwebinar_title] = useState(props.data[0].webinar_title);
  const [webinar_description, setwebinar_description] = useState(props.data[0].webinar_description);
  const [webinar_startdate, setwebinar_startdate] = useState(props.data[0].webinar_startdate);
  const [webinar_starttime, setwebinar_starttime] = useState(props.data[0].webinar_startdate);
  const [webinar_enddate, setwebinar_enddate] = useState(props.data[0].webinar_enddate);
  const [webinar_endtime, setwebinar_endtime] = useState(props.data[0].webinar_enddate);
  const [webinar_mainbanner, setwebinar_mainbanner] = useState(props.data[0].webinar_mainbanner);
  const [webinar_platinium1, setwebinar_platinium1] = useState('');
  const [webinar_platinium2, setwebinar_platinium2] = useState('');
  const [webinar_sponser, setwebinar_sponser] = useState('');
  const [webinar_speaker, setwebinar_speaker] = useState(props.data[0].webinar_speaker);
  const [webinar_meetinglink, setwebinar_meetinglink] = useState(props.data[0].webinar_meetinglink);
  const [webinar_stage, setwebinar_stage] = useState(props.data[0].webinar_stage);
  const [webinar_player, setwebinar_player] = useState(props.data[0].webinar_player);
  const [selected, setSelected] = useState([]);

  const webinarupdate = async event => {
    
    event.preventDefault()
    
    var formData = new FormData();
    formData.append('webinar_title', webinar_title);
    formData.append('webinar_description', webinar_description);
    formData.append('webinar_startdate', webinar_startdate + ' ' + webinar_starttime);
    formData.append('webinar_enddate', webinar_enddate + ' ' + webinar_endtime);
    formData.append('webinar_mainbanner', webinar_mainbanner);
    formData.append('webinar_platinium1', webinar_platinium1);
    formData.append('webinar_platinium2', webinar_platinium2);
    formData.append('webinar_sponser', webinar_sponser);
    formData.append('webinar_speaker', JSON.stringify(selected));
    formData.append('webinar_meetinglink', webinar_meetinglink);
    formData.append('webinar_stage', webinar_stage);
    formData.append('webinar_player', webinar_player);
    for (var key of formData.entries()) {
      console.log(key[0] + ',' + key[1]);
    }
    const ress = await axios.put("http://127.0.0.1:5000/webinarform/" + router.query.id, formData);
    const result = await ress;
    console.log(result)
    if (result.data.affectedRows) {
      router.push('/admin/managewebinars')
    }
    else {
      alert("Some Error Occured");
    }
  }
  return (
    <main>
      <div className="main__container">

        <form onSubmit={webinarupdate}>
          <div className="form-group">
            <label >Webinar Title</label>
            <input type="text" className="form-control" name="webinar_title" onChange={e => setwebinar_title(e.target.value)} defaultValue={webinar_title} required />

          </div>
          <div className="form-group">
            <label >Webinar Description</label>
            <input type="text" className="form-control" name="webinar_description" onChange={e => setwebinar_description(e.target.value)} defaultValue={webinar_description} required />
          </div>
          <div className="form-group">
            <label >Webinar Start Date</label>
            <input type="date" className="form-control" name="webinar_startdate" onChange={e => setwebinar_startdate(e.target.value)} placeholder="Enter Webinar Start Date" required />
            <input type="time" className="form-control" name="webinar_starttime" onChange={e => setwebinar_starttime(e.target.value)} placeholder="Enter Webinar Start Date" required />
          </div>
          <div className="form-group">
            <label >Webinar End Date</label>
            <input type="date" className="form-control" name="webinar_enddate" onChange={e => setwebinar_enddate(e.target.value)} placeholder="Enter Webinar End Date" required />
            <input type="time" className="form-control" name="webinar_endtime" onChange={e => setwebinar_endtime(e.target.value)} placeholder="Enter Webinar End Date" required />
          </div>
          <div className="form-group">
            <label >Webinar Main Banner</label>
            <input type="file" className="form-control" name="webinar_mainbanner" onChange={e => setwebinar_mainbanner(e.target.files[0])}  required />
          </div>
          <div className="form-group">
            <label >Webinar Platinium Banner1</label>
            <input type="file" className="form-control" name="webinar_mainbanner" onChange={e => setwebinar_platinium1(e.target.files[0])} required />
          </div>
          <div className="form-group">
            <label >Webinar Platinium Banner2</label>
            <input type="file" className="form-control" name="webinar_mainbanner" onChange={e => setwebinar_platinium2(e.target.files[0])} required />
          </div>
          <div className="form-group">
            <label >Webinar Sponser Banner</label>
            <input type="file" className="form-control" name="webinar_mainbanner" onChange={e => setwebinar_sponser(e.target.files[0])} required />
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
            <input type="file" className="form-control" name="webinar_stage" onChange={e => setwebinar_stage(e.target.files[0])}  required />
          </div>
          <div className="form-group">
            <label >Webinar Meeting Link</label>
            <input type="text" className="form-control" name="webinar_meetinglink" onChange={e => setwebinar_meetinglink(e.target.value)} defaultValue={webinar_meetinglink} required />
          </div>
          <div className="form-group">
            <label >Player Link</label>
            <input type="text" className="form-control" name="webinar_player" onChange={e => setwebinar_player(e.target.value)} defaultValue={webinar_player} required />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>
    </main>

  );
}

export async function getServerSideProps({ query }) {

  const res = await fetch(process.env.serverUrl + 'webinars/' + query.id)

  const data = await res.json()
  const res2 = await fetch(process.env.serverUrl+'speakers/')
  
  const data2 = await res2.json()
  if (!data) {
    return {
      notFound: true,
    }
  }
  // console.log(data);

  return {
    props: { data,data2 }, // will be passed to the page component as props
  }
}


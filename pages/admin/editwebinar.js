
import { useRouter } from 'next/router'
import MultiSelect from "react-multi-select-component";
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Notiflix from "notiflix";
export default function Editwebinar(props) {

  const parsedata=(data)=>{
    try {
  
     return JSON.parse(data);
  } catch (e) {
    return [];
  }
  }
  
  console.log(props.data[0].webinar_enddate.split(" ")[0]);
  var sdate=props.data[0].webinar_startdate.split(" ");
  var edate=props.data[0].webinar_enddate.split(" ");
  const [webinar_title, setwebinar_title] = useState(props.data[0].webinar_title);
  const [webinar_description, setwebinar_description] = useState(props.data[0].webinar_description);
  const [webinar_startdate, setwebinar_startdate] = useState(sdate[0]);
  const [webinar_starttime, setwebinar_starttime] = useState(sdate[1]);
  const [webinar_enddate, setwebinar_enddate] = useState(edate[0]);
  const [webinar_endtime, setwebinar_endtime] = useState(edate[1]);
  const [webinar_mainbanner, setwebinar_mainbanner] = useState(props.data[0].webinar_mainbanner);
  const [webinar_platinium1, setwebinar_platinium1] = useState(props.data[0].webinar_platinium1);
  const [webinar_platinium2, setwebinar_platinium2] = useState(props.data[0].webinar_platinium2);
  const [webinar_sponser, setwebinar_sponser] = useState(props.data[0].webinar_sponser);
  const [webinar_speaker, setwebinar_speaker] = useState(props.data[0].webinar_speaker);
  const [webinar_meetinglink, setwebinar_meetinglink] = useState(props.data[0].webinar_meetinglink);
  const [webinar_stage, setwebinar_stage] = useState(props.data[0].webinar_stage);
  const [webinar_player, setwebinar_player] = useState(props.data[0].webinar_player);
  const [selected, setSelected] = useState(parsedata(props.data[0].webinar_speaker));
  const router = useRouter();
  
  const da=props.data2.map((d,index)=>(
    {label:d.speaker_name,value:d.speaker_id}
  ))
  console.log(webinar_speaker)
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
    let config = {
      onUploadProgress: Notiflix.Loading.Circle()
    }
    const ress = await axios.put("http://15.206.99.13:5000/webinarform/" + router.query.id, formData,config);
    const result = await ress;
    console.log(result)
    if (result.data.affectedRows) {
      Notiflix.Loading.Remove();
      router.push('/admin/managewebinars')
    }
    else {
      alert("Some Error Occured");
      Notiflix.Loading.Remove();
    }
  }
  return (
    <main>
      <div className="main__container">

        <form onSubmit={webinarupdate}>
          <div className="form-group">
            <label >Webinar Title:</label>
            <input type="text" className="form-control" name="webinar_title" onChange={e => setwebinar_title(e.target.value)} defaultValue={webinar_title} required />

          </div>
          <div className="form-group">
            <label >Webinar Description:</label>
            <textarea rows="4" type="text" className="form-control" name="webinar_description" onChange={e => setwebinar_description(e.target.value)} defaultValue={webinar_description} required ></textarea>
          </div>

          <div className="form-group">
            <label >Webinar Start Date:</label>
            <input type="date" className="form-control" name="webinar_startdate" onChange={e => setwebinar_startdate(e.target.value)} defaultValue={webinar_startdate} required />
            <input type="time" className="form-control" name="webinar_starttime" onChange={e => setwebinar_starttime(e.target.value)} defaultValue={webinar_starttime} required />
          </div>
          <div className="form-group">
            <label >Webinar End Date:</label>
            <input type="date" className="form-control" name="webinar_enddate" onChange={e => setwebinar_enddate(e.target.value)} defaultValue={webinar_enddate} required />
            <input type="time" className="form-control" name="webinar_endtime" onChange={e => setwebinar_endtime(e.target.value)} defaultValue={webinar_endtime} required />
          </div>
          <div className="form-group">
            <label >Webinar Main Banner (720x1920 jpg):</label>
            {/* <input type="file" className="form-control" name="webinar_mainbanner" onChange={e => setwebinar_mainbanner(e.target.files[0])}  required /> */}
            <div className="custom-file-upload">    
    <img  src={webinar_mainbanner} className="image"/>
    <label className="im">
    <input type="file" accept="image/*"  name="webinar_mainbanner" onChange={(e) =>{
      try {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        // console.log(reader);
        reader.onload = (event) => {
          setwebinar_mainbanner(event.target.result);
        };
      }
      catch(err) {
        console.log(err)
      }      
    }}  />
    <i className="fa fa-cloud-upload"></i> Upload
    </label>
    </div >
          </div>
          <div className="form-group">
            <label >Webinar Platinum Banner1 (1150x650 jpg):</label>
            {/* <input type="file" className="form-control" name="webinar_platinium1" onChange={e => setwebinar_platinium1(e.target.files[0])} required /> */}
    <div className="custom-file-upload">
    
    <img  src={webinar_platinium1} className="image"/>
    <label className="im">
    <input type="file" accept="image/*"  name="webinar_platinium1" onChange={(e) =>{
      try {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        // console.log(reader);
        reader.onload = (event) => {
          setwebinar_platinium1(event.target.result);
        };
      }
      catch(err) {
        console.log(err)
      }      
    }}  />
    <i className="fa fa-cloud-upload"></i> Upload
    </label>
    </div >
          </div>
          <div className="form-group">
            <label >Webinar Platinum Banner2 (1150x650 jpg):</label>
            {/* <input type="file" className="form-control" name="webinar_platinium2" onChange={e => setwebinar_platinium2(e.target.files[0])} required /> */}
    <div className="custom-file-upload">
    
    <img  src={webinar_platinium2} className="image"/>
    <label className="im">
    <input type="file" accept="image/*"  name="webinar_platinium2" onChange={(e) =>{
      try {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        
        reader.onload = (event) => {
          setwebinar_platinium2(event.target.result);
          console.log(reader);
        };
      }
      catch(err) {
        console.log(err)
      }      
    }}  />
    <i className="fa fa-cloud-upload"></i> Upload
    </label>
    </div >
          </div>
          <div className="form-group">
            <label >Webinar Sponsor Banner (1150x650 jpg):</label>
            {/* <input type="file" className="form-control" name="webinar_sponser" onChange={e => setwebinar_sponser(e.target.files[0])} required /> */}
    <div className="custom-file-upload">    
    <img  src={webinar_sponser} className="image"/>
    <label className="im">
    <input type="file" accept="image/*"  name="webinar_sponser" onChange={(e) =>{
      try {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        // console.log(reader);
        reader.onload = (event) => {
          setwebinar_sponser(event.target.result);
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
            <label >Webinar Speaker:</label>
            {/* <pre>{JSON.stringify(selected)}</pre> */}
            <MultiSelect
              options={da}
              value={selected}
              onChange={setSelected}
              labelledBy={"Select"}
            />

          </div>
          <div className="form-group">
            <label >Webinar stage (1110x960 jpg): </label>
            {/* <input type="file" className="form-control" name="webinar_stage" onChange={e => setwebinar_stage(e.target.files[0])}  required /> */}
            <div className="custom-file-upload">    
    <img  src={webinar_stage} className="image"/>
    <label className="im">
    <input type="file" accept="image/*"  name="webinar_stage" onChange={(e) =>{
      try {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        // console.log(reader);
        reader.onload = (event) => {
          setwebinar_stage(event.target.result);
        };
      }
      catch(err) {
        console.log(err)
      }      
    }}  />
    <i className="fa fa-cloud-upload"></i> Upload
    </label>
    </div >
          </div>
          <div className="form-group">
            <label >Webinar Meeting Link:</label>
            <input type="text" className="form-control" name="webinar_meetinglink" onChange={e => setwebinar_meetinglink(e.target.value)} defaultValue={webinar_meetinglink} required />
          </div>
          <div className="form-group">
            <label >Player Link:</label>
            <input type="text" className="form-control" name="webinar_player" onChange={e => setwebinar_player(e.target.value)} defaultValue={webinar_player} required />
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

  const res = await fetch(process.env.serverUrl + 'webinarform/' + query.id)

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


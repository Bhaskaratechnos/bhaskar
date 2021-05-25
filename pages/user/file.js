import React, {useState} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';

export default function Editwebinar() {
    const router = useRouter();

    const [file, setfile] = useState('');

    const fileupload = async event => {
        event.preventDefault()
        console.log(file);
        var Data = new FormData();
    
        // Update the formData object
        Data.append('file',file);
        for (var key of Data.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }
    
        const ress=await axios.post("https://api.phdcciwebinar.live/file", Data);
        const result = await ress;
        console.log(result)
        }
    return (
<main>
<div className="maincointainer">

<form onSubmit={fileupload}>
<div className="fcontainer">
    <label >Webinar File</label>
    <input type="file" className="" name="file" onChange={e => setfile(e.target.files[0])}  />
    
  </div>


  <button type="submit" className="">Submit</button>
</form>

</div>


<style global jsx>{`
.maincointainer{
    position:absolute;
    left:50%;
    top:50%;
    width: 500px;
    height: 200px;
    margin: -100px 0 0 -250px;
    border: 1px solid grey;
    border-radius:5px;
    padding:20px;
    background:white;
}
.fcontainer{
    position:relative;
    
}

`}</style>
</main>

);
}




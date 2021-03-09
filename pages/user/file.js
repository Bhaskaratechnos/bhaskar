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
    
        const ress=await axios.post("http://15.206.99.13:5000/file", Data);
        const result = await ress;
        console.log(result)
        }
    return (
<main>
<div className="main__container">

<form onSubmit={fileupload}>
<div className="form-group">
    <label >Webinar File</label>
    <input type="file" className="form-control" name="file" onChange={e => setfile(e.target.files[0])}  />
    
  </div>


  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>
</main>

);
}




import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Notiflix from "notiflix";
export default function Editsponsor({ data }) {
    const router = useRouter();
    const [sponsor_type, setsponsor_type] = useState(data[0].sponsor_type || "");
    const [sponsor_name, setsponsor_name] = useState(data[0].sponsor_name || "");
    const [sponsor_logo, setsponsor_logo] = useState(data[0].sponsor_logo || "");

    console.log(sponsor_type);

    const sponsoredit = async event => {
        event.preventDefault()

        const data = {
            sponsor_type: sponsor_type,
            sponsor_name: sponsor_name,
            sponsor_logo: sponsor_logo
        }
        let config = {
            onUploadProgress: Notiflix.Loading.Circle()
        }
        const ress = await axios.put("http://15.206.99.13:5000/sponsor/" + router.query.id, data, config);
        const result = await ress;
        // console.log(result)
        if (result.data.affectedRows) {
            Notiflix.Loading.Remove();
            router.push('/admin/managesponsor')
        }
        else {
            alert("Some Error Occured");
            Notiflix.Loading.Remove();
        }
    }
    return (
        <main>
            <div className="main__container">
                <form onSubmit={sponsoredit}>
                    <div className="form-group">
                        <label > Type</label>
                        <select onChange={e => setsponsor_type(e.target.value)} className="form-control" defaultValue={sponsor_type} name="sponsor_type" id="sponsor_type">
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
                        <input type="text" className="form-control" name="sponsor_name" onChange={e => setsponsor_name(e.target.value)} defaultValue={sponsor_name} required />

                    </div>

                    <div className="form-group">
                        <label >Logo (100x200 png):</label>
                        <div className="custom-file-upload">

                            <img src={sponsor_logo} className="image" />
                            <label className="im">
                                <input type="file" accept="image/*" name="sponsor_logo" onChange={(e) => {
                                    try {
                                        var reader = new FileReader();
                                        reader.readAsDataURL(e.target.files[0])
                                        // console.log(reader);
                                        reader.onload = (event) => {
                                            setsponsor_logo(event.target.result);
                                        };
                                    }
                                    catch (err) {
                                        console.log(err)
                                    }
                                }} />
                                <i className="fa fa-cloud-upload"></i> Upload
                            </label>

                        </div>  
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

    const res = await fetch(process.env.serverUrl + 'sponsor/' + query.id)

    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }
    // console.log(data);

    return {
        props: { data }, // will be passed to the page component as props
    }
}

import axios from 'axios';
import FileSaver from 'file-saver';
import { Parser } from 'json2csv';
export default function Allquestions({ data }) {
  const csvdata = async (id) => {
    var result = await axios.get('http://127.0.0.1:5000/questionid/' + id);
    var data = await result.data;
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(data);
    console.log(csv);
    console.log(data);
    const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    FileSaver.saveAs(csvData, "Webinar-Dataj.csv")
  }

  return (
    <main>
      <div className="main__container">
        {data.map((d, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <p>{d.webinar_title}  </p>
              <p>Total Login No. {d.number}</p>
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <a onClick={() => csvdata(d.webinar_id)} href="#" className="btn btn-primary">Click here to Download Webinar Data</a>
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(process.env.serverUrl + 'questions/')

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
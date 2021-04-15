export default function Livewebinars({data}) {
    return (
<main>
<div className="main__container">
<div className="card">
  <div className="card-header">
    Webinar 1
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>


<div className="card">
  <div className="card-header">
  Webinar 2
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>

<div className="card">
  <div className="card-header">
  Webinar 3
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
{/* {data.map(d=>(  
    <div>      
         <li key={d.userId}>{d.title }{d.completed}{d.userId}</li>
         <p>{d.completed}</p>
         </div>     
         
         
))} */}

</div>
</main>

);
};


export async function getServerSideProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
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
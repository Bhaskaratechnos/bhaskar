



export default function Allcreatives() {
    return (
<main>
<div className="main__container">

<div className="row">
    <div className="col-sm-8 display-5">
    Creatives
    </div>

    <div className="col-sm-4">

    <a><button type="button" className="btn btn-success">ADD Creatives</button></a>

    </div>
  </div>
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">S no.</th>
      <th scope="col">Title</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
      
      <th scope="col">Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
       
        <tr >
        <th scope="row">1</th>
        <td>title1</td>
        <td>data1</td>
        <td>data2</td>
        <td>data3</td>
  
        <td><a><button type="button" className="btn btn-primary">Edit</button></a>  <button type="button"  className="btn btn-danger">Delete</button></td>
      </tr>   
      <tr >
        <th scope="row">2</th>
        <td>title2</td>
        <td>data1</td>
        <td>data2</td>
        <td>data3</td>
  
        <td><a><button type="button" className="btn btn-primary">Edit</button></a>  <button type="button"  className="btn btn-danger">Delete</button></td>
      </tr>  
 

    
  </tbody>
</table>
</div>
</main>

);
}

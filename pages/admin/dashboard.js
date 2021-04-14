



export default function Dashboard() {
    return (
<main>
<div className="main__container">
  {/* <!-- MAIN TITLE STARTS HERE --> */}

  <div className="main__title">
    <img src="/assets/hello.svg" alt="" />
    <div className="main__greeting">
      <h1>Hello PHDCCI</h1>
      <p>Welcome to your admin dashboard</p>
    </div>
  </div>
  {/* 
<!-- MAIN TITLE ENDS HERE -->

<!-- MAIN CARDS STARTS HERE --> */}
  <div className="main__cards">
    <div className="card0">
      <i
        className="fa fa-user-o fa-2x text-lightblue"
        aria-hidden="true"
      ></i>
      <div className="card_inner">
        <p className="text-primary-p">Number of Registrations</p>
        <span className="font-bold text-title">578</span>
      </div>
    </div>

    <div className="card0">
      <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
      <div className="card_inner">
        <p className="text-primary-p">Numbers of Login</p>
        <span className="font-bold text-title">2467</span>
      </div>
    </div>

    <div className="card0">
      <i
        className="fa fa-video-camera fa-2x text-yellow"
        aria-hidden="true"
      ></i>
      <div className="card_inner">
        <p className="text-primary-p">Number of Webinars</p>
        <span className="font-bold text-title">340</span>
      </div>
    </div>

    <div className="card0">
      <i
        className="fa fa-thumbs-up fa-2x text-green"
        aria-hidden="true"
      ></i>
      <div className="card_inner">
        <p className="text-primary-p">Number of Questions</p>
        <span className="font-bold text-title">645</span>
      </div>
    </div>
  </div>


</div>
</main>

);
}

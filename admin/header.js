

export default function HeaderAdmin() {
    return (
      
        <nav className="navbar">
          <div className="nav_icon" onClick={()=>{toggleSidebar()}}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div className="navbar__left">
            <a href="#">Webinar Project</a>
            {/* <a href="#">Video Management</a>
            <a className="active_link" href="#">
              Admin
            </a> */}
          </div>
          <div className="navbar__right">
            <a href="#">
              <i className="fa fa-search" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-clock-o" aria-hidden="true"></i>
            </a>
            <a href="#">
              <img width="30" src="/assets/avatar.svg" alt="" />
            </a>
          </div>
        </nav>
    );
  }
  
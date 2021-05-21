import Link from 'next/link'
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "cookies";
import Notiflix from "notiflix";
export default function SidebarAdmin() {
  const router = useRouter();

  const logout = async (event) => {

    Notiflix.Loading.init({svgColor:"rgba(241,230,230,0.985)",});
    let config = {
      onUploadProgress: Notiflix.Loading.circle()
    }
    const ress = await axios.get("/api/logout",config);
    Notiflix.Loading.remove();
    router.replace("/admin");
  };
  return (
    <div id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src="/logo.jpeg" alt="logo" />
          <h1>PHDCCI</h1>
        </div>
        <i
          onClick={()=>{closeSidebar()}}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className={router.pathname == "/admin" ? "sidebar__link active_menu_link" : "sidebar__link"}>
          <i className="fa fa-home"></i>
          <Link href="/admin" >
          <a >Dashboard</a>
          </Link>
        </div>
        <h2>Webinars</h2>
        {/* <div className={router.pathname == "/admin/livewebinars" ? "sidebar__link active_menu_link" : "sidebar__link"}>
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <Link href="/admin/livewebinars" >
          <a >Live Webinars</a>
          </Link>
        </div> */}
        {/* <div className={router.pathname == "/admin/allwebinars" ? "sidebar__link active_menu_link" : "sidebar__link"}>
          <i className="fa fa-building-o"></i>
          <Link href="/admin/allwebinars" >
          <a >All Webinars</a>
          </Link>
        </div> */}
        <div className={router.pathname == "/admin/managewebinars" ? "sidebar__link active_menu_link" : "sidebar__link"}>
          <i className="fa fa-wrench"></i>
          <Link href="/admin/managewebinars" >
          <a >Manage Webinars</a>
          </Link>
        </div>
        <div className={router.pathname == "/admin/registration" ? "sidebar__link active_menu_link" : "sidebar__link"}>
          <i className="fa fa-archive"></i>
          <Link href="/admin/registration">
          <a >Registration Data</a>
          </Link>
        </div>
        <div className={router.pathname == "/admin/logindata" ? "sidebar__link active_menu_link" : "sidebar__link"}>
          <i className="fa fa-archive"></i>
          <Link href="/admin/logindata">
          <a >Login Data</a>
          </Link>
        </div>
        <div className={router.pathname == "/admin/allquestions" ? "sidebar__link active_menu_link" : "sidebar__link"}>
          <i className="fa fa-building-o"></i>
          <Link href="/admin/allquestions" >
          <a >Users Questions</a>
          </Link>
        </div>

        <h2>Creatives</h2>


        <div className={router.pathname == "/admin/allspeakers" ? "sidebar__link active_menu_link" : "sidebar__link"}>
          <i className="fa fa-question"></i>
          <Link href="/admin/allspeakers" >
          <a >Manage Speakers</a>
          </Link>
        </div>
        <div className={router.pathname == "/admin/managesponsor" ? "sidebar__link active_menu_link" : "sidebar__link"}>
          <i className="fa fa-question"></i>
          <Link href="/admin/managesponsor" >
          <a >Manage Sponsors</a>
          </Link>
        </div>
        {/* <div className={router.pathname == "/admin/allcreativetype" ? "sidebar__link active_menu_link" : "sidebar__link"}>
          <i className="fa fa-question"></i>
          <Link href="/admin/allcreativetype" >
          <a >Manage Creatives Type</a>
          </Link>
        </div> */}
        <div className={router.pathname == "/admin/allcreatives" ? "sidebar__link active_menu_link" : "sidebar__link"}>
          <i className="fa fa-question"></i>
          <Link href="/admin/allcreatives" >
          <a >Manage Creatives</a>
          </Link>
        </div>




        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <button onClick={() => logout()}>Log out</button>
        </div>
      </div>
    </div>
  );
}

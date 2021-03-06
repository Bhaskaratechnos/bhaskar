import Link from 'next/link'
import { useRouter } from 'next/router'

export default function SidebarAdmin() {
  const router = useRouter();
  // console.log(router.pathname);
  return (
    <div id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src="/assets/logo.png" alt="logo" />
          <h1>ATechnos</h1>
        </div>
        <i
          onClick={()=>{closeSidebar()}}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className={router.pathname == "/" ? "sidebar__link active_menu_link" : "sidebar__link"}>
          <i className="fa fa-home"></i>
          <Link href="/" >
          <a >Dashboard</a>
          </Link>
        </div>
        <h2>Webinars</h2>
        <div className={router.pathname == "/admin/comp/livewebinars" ? "sidebar__link active_menu_link" : "sidebar__link"}>
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <Link href="/admin/comp/livewebinars" >
          <a >Live Webinars</a>
          </Link>
        </div>
        <div className={router.pathname == "/admin/comp/allwebinars" ? "sidebar__link active_menu_link" : "sidebar__link"}>
          <i className="fa fa-building-o"></i>
          <Link href="/admin/comp/allwebinars" >
          <a >All Webinars</a>
          </Link>
        </div>
        <div className={router.pathname == "/admin/comp/managewebinars" ? "sidebar__link active_menu_link" : "sidebar__link"}>
          <i className="fa fa-wrench"></i>
          <Link href="/admin/comp/managewebinars" >
          <a >Manage Webinars</a>
          </Link>
        </div>
        <div className={router.pathname == "/admin/comp/innext" ? "sidebar__link active_menu_link" : "sidebar__link"}>
          <i className="fa fa-archive"></i>
          <Link href="/admin/comp/innext">
          <a >Webinars in Next 2 days</a>
          </Link>
        </div>

        <h2>Creatives</h2>
        <div className={router.pathname == "/admin/comp/allcreatives" ? "sidebar__link active_menu_link" : "sidebar__link"}>
          <i className="fa fa-question"></i>
          <Link href="/admin/comp/allcreatives" >
          <a >Manage Creatives</a>
          </Link>
        </div>


        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
}

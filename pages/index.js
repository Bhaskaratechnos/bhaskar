import Head from "next/head";
import Login from "./admin/login";
import LayoutAdmin from "./admin/layout";
import Dashboard from "./admin/comp/dashboard";
// import "../public/script.js";
export default function Home() {
  //   var sidebarOpen = false;
  // var sidebar = document.getElementById("sidebar");
  // var sidebarCloseIcon = document.getElementById("sidebarIcon");

  // function toggleSidebar() {
  //   if (!sidebarOpen) {
  //     sidebar.classList.add("sidebar_responsive");
  //     sidebarOpen = true;
  //   }
  // }

  // function closeSidebar() {
  //   if (sidebarOpen) {
  //     sidebar.classList.remove("sidebar_responsive");
  //     sidebarOpen = false;
  //   }
  // }
  return (
<>
<Head>

<meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="Content-Language" content="en" />
        <meta http-equiv="Content-Type" content="text/html; charSet=utf-8" />
    
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="This is an example dashboard created using build-in elements and components."
        />
        <meta name="msapplication-tap-highlight" content="no" />
</Head>

<Dashboard/>
</>


  );
}

// import App from 'next/app'

import LayoutAdmin from "../admin/layout"
import { useRouter } from "next/router";
import Cookies from 'js-cookie'
import "../public/styles.css"
import 'bootstrap/dist/css/bootstrap.css'
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname.startsWith("/admin")) {

    return (

      <LayoutAdmin>
        <Component {...pageProps} />

      </LayoutAdmin>


    )
  }
  else {

    return (

      <Component {...pageProps} />

    )

  }
}

export default MyApp
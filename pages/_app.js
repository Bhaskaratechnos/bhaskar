// import App from 'next/app'

import LayoutAdmin from "../admin/layout"
import Layoutuser from "../user/layout"
import { useRouter } from "next/router";
import style from '../public/style.scss'

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
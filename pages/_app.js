// import App from 'next/app'

import LayoutAdmin from "./admin/layout"



function MyApp({ Component, pageProps }) {
    return(
<LayoutAdmin>
        <Component {...pageProps} />

        </LayoutAdmin>)
    
  }

  
  export default MyApp
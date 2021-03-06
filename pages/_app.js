// import App from 'next/app'

import LayoutAdmin from "./admin/layout"
import { useRouter } from "next/router";
import Cookies from 'js-cookie'

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    if (router.pathname.startsWith("/user") ) {
        
        return(   

                    <Component {...pageProps} />         
                    
                
        )  
      }
      else{
          
    return(

<LayoutAdmin>
        <Component {...pageProps} />

        </LayoutAdmin>)
    
  }
}
  
  export default MyApp
// import App from 'next/app'

import LayoutAdmin from "./admin/layout"
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {
    const router = useRouter();
    if (router.pathname.startsWith("/user") ) {
        console.log("if");
        return(            
                    <Component {...pageProps} />         
                    
                
        )  
      }
      else{
          console.log("else");
    return(

<LayoutAdmin>
        <Component {...pageProps} />

        </LayoutAdmin>)
    
  }
}
  
  export default MyApp
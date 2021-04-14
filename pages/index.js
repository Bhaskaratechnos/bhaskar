
import React, { useEffect } from "react";
import {useRouter} from 'next/router'
export default function Home() {

  return (
<>



</>


  );
}

export async function getServerSideProps(context) {

    return {
      redirect: {
        permanent: false,
        destination: "/user/layout"
      }
    }

}

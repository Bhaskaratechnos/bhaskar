import Head from 'next/head'
import Layout from './layout'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

<Layout/>

      
    </div>
  )
}

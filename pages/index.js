import Head from 'next/head'
import Footer from '../components/footer'
import Main from '../components/main'

export default function Home() {

  return (
    <div className="h-screen">
      <Head>
        <title>Final Project</title>
      </Head>

      <main className="w-full">
        <Main/>
        <Footer/>
      </main>
      
    </div>
  )
}

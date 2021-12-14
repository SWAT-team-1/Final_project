import Head from 'next/head'
import Footer from '../components/footer'
import Main from '../components/main'

import LoginForm from '../components/LoginForm'
import SingUpForm from '../components/SingUpForm'
import CookieStandeAdmin from '../components/Hello'
import Singup from './singup'
import Login from './login'
import { useAuth } from '../contexts/auth'

export default function Home() {
  const { user } = useAuth();
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

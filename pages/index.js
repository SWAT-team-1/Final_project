import Head from 'next/head'
import LoginForm from '../components/LoginForm'
import SingUpForm from '../components/SingUpForm'
import CookieStandeAdmin from '../components/Hello'
import Singup from './singup'
import Login from './login'
import { useAuth } from '../contexts/auth'
export default function Home() {
  const { user } = useAuth();
  return (
    
     <div>
       <>
       {/* <SingUpForm/> */}
       </>
      {user ?
      <CookieStandeAdmin/> 
      :<Login/>
   }
   
     </div>

    
  )
}

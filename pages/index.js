import Head from 'next/head'
import LoginForm from '../components/LoginForm'
import SingUpForm from '../components/SingUpForm'

export default function Home() {
  return (
 
     <div>
       <LoginForm/>     
       <SingUpForm/>
     </div>

    
  )
}

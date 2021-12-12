import React from "react";
import { useAuth } from '../contexts/auth'


export default function SingUpForm() {
    const registerUser = async event => {
        event.preventDefault()
    
        const res = await fetch('/api/register', {
          body: JSON.stringify({
            name: event.target.name.value
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        })
    
        const result = await res.json()
        // result.user => 'Ada Lovelace'
      }
  
    return (
        <div className='flex h-screen bg-gray-bg1'>
        <div className='w-full max-w-md px-16 py-10 m-auto bg-white border rounded-lg border-primaryBorder shadow-default'>
            <h1 className='mt-4 mb-12 text-2xl font-medium text-center text-primary'>
                Register
            </h1>

            <form onSubmit={registerUser}>
            <div>
                    <label htmlFor='password'>Username</label>
                    <input
                        type='text'
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        id='user_name'
                        placeholder='user_name'
                    />
                </div>
                <div>
                    <label htmlFor='password'>Pohne</label>
                    <input
                        type='password'
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        id='password'
                        placeholder='Your Password'
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        id='email'
                        placeholder='Your Email'
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        id='password'
                        placeholder='Your Password'
                    />
                </div>
                <div className='flex items-center justify-center mt-6'>
                    <button
                         className="p-1 px-2 m-3 bg-green-500 text-black-50" type='submit'>   
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
     
    )
  }
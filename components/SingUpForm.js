import React from "react";
import Link from 'next/link'
import useResource from '../hooks/useResourceCreateUser'
export default function SignUp() {
    const { createResource } = useResource();

    async function onCreate(event) {
        event.preventDefault();
        const obj = {
            'password': event.target.password1.value,    
            'user_email': event.target.user_email.value,
            "user_name": event.target.user_name.value,
            'phone_number': event.target.phone_number.value,
            'address': event.target.address.value,
        }
        console.log(obj)
        createResource(obj)
    }
    return (
        <div className="font-sans">
            <div className="relative flex flex-col items-center min-h-screen bg-gray-800 sm:justify-center">
                <div className="relative w-full sm:max-w-sm">
                    <div className="absolute w-full h-full transform bg-red-500 shadow-lg card rounded-3xl -rotate-6"></div>
                    <div className="absolute w-full h-full transform bg-yellow-500 shadow-lg card rounded-3xl rotate-6"></div>

                    <div className="relative w-full px-6 py-4 bg-gray-100 shadow-md rounded-3xl">
                        <label htmlFor="" className="block mt-3 text-2xl font-semibold text-center text-gray-700">
                            Register
                        </label>
                        <form onSubmit={onCreate} className="mt-10">
                            <div>
                                <input type="text" id='user_name' placeholder="username" className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>

                            <div className="mt-7">
                                <input type="email" id="user_email" placeholder="Enter your email" className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>

                            <div className="mt-7">
                                <input type="password" id="password1" placeholder="Password" className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                <input type="password" id="password2" placeholder="Password confirmation" className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>
                            <div className="mt-7">
                               
                            </div>
                            <div>
                                <input type="text" id='address' placeholder="address" className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>
                            <div>
                                <input type="text" id='phone_number' placeholder="+9627912345678" className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>

                            <div className="mt-7">
                                <button className="w-full py-3 text-white transition duration-500 ease-in-out transform bg-gray-800 shadow-xl rounded-xl hover:shadow-inner focus:outline-none hover:-translate-x hover:scale-105 " type='submit'>
                                    Register Now
                                </button>
                            </div>
                            <div className="mt-7">
                                <div className="flex items-center justify-center">
                                    <label className="mr-2" >Do you already have an account?</label>
                                    <Link href='/'>
                                        <a className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                                            Log in
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
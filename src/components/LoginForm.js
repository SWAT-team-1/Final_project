import React from "react";
import { useAuth } from '../contexts/auth'

import Link from 'next/link'
const LoginForm = () => {
    const { login } = useAuth();
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.user_email.value;
        let password = e.target.elements.password.value;
        console.log(email , password)

        login(email,password)
    };

    const styling = {
        backgroundImage: "url(https://thumbs.dreamstime.com/b/blank-product-display-blue-studio-background-pedestal-podium-empty-showcase-stand-backdrops-d-rendering-188287997.jpg)",
        width:"100%",
    }
    return (
        <div className="font-sans">
            <div className="relative flex flex-col items-center min-h-screen bg-gray-800 sm:justify-center">
                <div className="relative w-full sm:max-w-sm">
                    <div className="absolute w-full h-full transform bg-red-500 shadow-lg card rounded-3xl -rotate-6"></div>
                    <div className="absolute w-full h-full transform bg-yellow-500 shadow-lg card rounded-3xl rotate-6"></div>
                    <div className="relative w-full px-6 py-4 bg-gray-100 shadow-md rounded-3xl">
                        <label htmlFor="" className="block mt-3 text-2xl font-semibold text-center text-gray-700">
                            Login
                        </label>
                        <form onSubmit={handleFormSubmit} className="mt-10">
                            <div>
                                <input type="email" id ="user_email" data-testid="email-input" placeholder="mai@gmail.com" className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>

                            <div className="mt-7">
                                <input type="password"  id ="password" placeholder="Enter your psassword" className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>

                            <div className="flex mt-7">
                            <label htmlFor="remember_me" className="inline-flex items-center w-full cursor-pointer">
                                    <input id="remember_me" type="checkbox" className="text-indigo-600 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember" />
                                    <span className="ml-2 text-sm text-gray-600">
                                        Remember me
                                    </span>
                                </label>

                             
                            </div>

                            <div className="mt-7">
                                <button className="w-full py-3 text-white transition duration-500 ease-in-out transform bg-gray-800 shadow-xl rounded-xl hover:shadow-inner focus:outline-none hover:-translate-x hover:scale-105 " type='submit'>
                                    Login
                                </button>
                            </div>

                            <div className="mt-7">
                                <div className="flex items-center justify-center">
                                    <label className="mr-2" >Don't have an account? </label>
                                    <Link href="/singup">
                                    <a className="text-gray-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                                        Sign up
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

export default LoginForm;

import Head from "next/head";

import React from 'react'
import useResource from '../hooks/useResourceCreateUser'
import { useAuth } from '../contexts/auth'
export default function CookieStandeAdmin() {
  const [showModal, setShowModal] = React.useState(false);
  // const { resources, createResource, deleteResource } = useResource();
  const { logout } = useAuth()
  return (
    <div className="flex flex-col justify-between h-screen min-h-screen ">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <button className="w-full py-3 text-white transition duration-500 ease-in-out transform bg-gray-800 shadow-xl rounded-xl hover:shadow-inner focus:outline-none hover:-translate-x hover:scale-105 " onClick={logout}>
        logout
      </button>
      {/* Pop up section */}
      <>
        <button
          className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open regular modal
        </button>
        {showModal ? (
          <>
            <div
              className="fixed inset-0 z-50 flex items-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
            >
              <div className="relative w-auto max-w-3xl mx-auto my-6">
                {/*content*/}
                <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                    <h3 className="text-3xl font-semibold">
                      Modal Title
                    </h3>
                    <button
                      className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="font-sans">
                    <div className="relative flex flex-col items-center min-h-screen bg-gray-800 sm:justify-center">
                      <div className="relative w-full sm:max-w-sm">
                        <div className="absolute w-full h-full transform bg-red-500 shadow-lg card rounded-3xl -rotate-6"></div>
                        <div className="absolute w-full h-full transform bg-yellow-500 shadow-lg card rounded-3xl rotate-6"></div>

                        <div className="relative w-full px-6 py-4 bg-gray-100 shadow-md rounded-3xl">
                          <label htmlFor="" className="block mt-3 text-2xl font-semibold text-center text-gray-700">
                            Register
                          </label>
                          <form  className="mt-10">
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
                            <div>
                              <input type="file" id='phone_number' className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>

                            <div className="mt-7">
                              <button className="w-full py-3 text-white transition duration-500 ease-in-out transform bg-gray-800 shadow-xl rounded-xl hover:shadow-inner focus:outline-none hover:-translate-x hover:scale-105 " type='submit'>
                                Register Now
                              </button>
                            </div>
                            <div className="mt-7">
                              <div className="flex items-center justify-center">
                                <label className="mr-2" >Do you already have an account?</label>
                                
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                    <button
                      className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </>
    </div>
  )
}
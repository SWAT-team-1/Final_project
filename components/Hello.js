import Head from "next/head";

import React from 'react'
import useResource from '../hooks/useResourceCreateUser'
import { useAuth } from '../contexts/auth'
export default function CookieStandeAdmin() {
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
    </div>
  )
}
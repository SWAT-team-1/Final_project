import React from 'react'
import Head from 'next/head'
import LoginForm from '../components/LoginForm'
export default function Login() {
    return (
        <div>
            <Head>
                <title>Rentaxon</title>
                <link rel="icon" href="/Rentaxon-logos.png" />
            </Head>
            <LoginForm />
        </div>
    )
}

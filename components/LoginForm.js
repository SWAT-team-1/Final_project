import React from "react";
import { useAuth } from '../contexts/auth'
// import Footer from '../components/Footer'



const LoginForm = () => {
    const { login } = useAuth();
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        login(username, password)
    };
    return (
        <div className='flex h-screen bg-gray-bg1'>
            <div className='w-full max-w-md px-16 py-10 m-auto bg-white border rounded-lg border-primaryBorder shadow-default'>
                <h1 className='mt-4 mb-12 text-2xl font-medium text-center text-primary'>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={handleFormSubmit}>
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
    );
};

export default LoginForm;
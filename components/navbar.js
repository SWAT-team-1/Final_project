import Link from 'next/link'
import { useState } from 'react' 

export default function NavBar(){
    const [style, setStyle] = useState("hidden");
  
    const changeStyle = () => {
        console.log("you just clicked");
        if (style === "hidden"){
            setStyle("block");
        }else{
            setStyle("hidden");
        }
    };
    return(
        <nav className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <a className="text-xl font-bold text-white transition-colors duration-300 transform md:text-2xl hover:text-indigo-400"
                            href="#">Brand</a>

                        <div className="flex md:hidden">
                            <button onClick={changeStyle} type="button" className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                                aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path fillRule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        </div>
                        <div className={style}>
                        <div className="flex flex-col mt-2 space-y-4 md:space-y-0 md:flex-col md:items-center md:space-x-10 md:mt-0">
                        <a className="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400"
                            href="#">
                            Home
                        </a>
                        <Link href='/browse'>
                            <a className="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400">
                                Browse
                            </a>
                        </Link>
                        <Link href='/About-us'>
                            <a className="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400">
                                About us
                            </a>
                        </Link>
                        <div>
                            <Link href='/signUp'>
                                <a className="px-4 py-1 mr-3 text-sm font-medium text-center text-gray-200 transition-colors duration-300 transform border rounded hover:bg-indigo-400">
                                    Sign up
                                </a>
                            </Link>
                            <Link href='/login'>
                                <a className="px-4 py-1 text-sm font-medium text-center text-indigo-400 transition-colors duration-300 transform bg-gray-200 border rounded hover:bg-indigo-400 hover:text-gray-200">
                                    Log In
                                </a>
                            </Link>
                        </div>
                    </div>
                    </div>
                    
                    <div className="flex-col hidden mt-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
                        <a className="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400"
                            href="#">
                            Home
                        </a>
                        <Link href='/browse'>
                            <a className="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400">
                                Browse
                            </a>
                        </Link>
                        <Link href='/About-us'>
                            <a className="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400">
                                About us
                            </a>
                        </Link>
                        <div>
                            <Link href='/signUp'>
                                <a className="px-4 py-1 mr-3 text-sm font-medium text-center text-gray-200 transition-colors duration-300 transform border rounded hover:bg-indigo-400">
                                    Sign up
                                </a>
                            </Link>
                            <Link href='/login'>
                                <a className="px-4 py-1 text-sm font-medium text-center text-indigo-400 transition-colors duration-300 transform bg-gray-200 border rounded hover:bg-indigo-400 hover:text-gray-200">
                                    Log In
                                </a>
                            </Link>
                        </div>
                    </div>
                </nav>
    )
}
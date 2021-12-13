import useResource from '../hooks/useResourceProfile'
import { useAuth } from '../contexts/auth'
export default function Profile() {
    const { resources } = useResource();
    console.log(resources[1]);
    const { user } = useAuth();
    
    // function user_data(resources) {
        
    
    // }


    return (


        <div className="container p-5 mx-auto my-5">
            <div className="md:flex no-wrap md:-mx-2 ">

                {/* <!-- Left Side --> */}



                <div className="w-full md:w-3/12 md:mx-2">
                    {/* <!-- Profile Card --> */}

                    {/* {user ?
         
         :
     } */}
                    {resources?.map(e =>

                        <div className="p-3 bg-white border-t-4 border-blue-400">
                            <div className="overflow-hidden image">
                                <img className="w-full h-auto mx-auto"
                                    src="https://scontent.famm3-2.fna.fbcdn.net/v/t1.6435-1/c208.434.1092.1092a/s240x240/61656587_10219346345910370_286168087474995200_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeHabd31VwMsZAjlq_LZk8wZoE3Ich7PAUygTchyHs8BTLs4a_LVjSeDFmvQt51HxP4&_nc_ohc=vwcn6BEPeBAAX9qpaDP&_nc_ht=scontent.famm3-2.fna&oh=00_AT_cvIK-HZUHP0r6_YILgfYQV80WSwNR-Nc8SI5RkJXJRA&oe=61DDD85D"
                                    alt="" />
                            </div>
                            <h1 className="my-1 text-xl font-bold leading-8 text-gray-900">{e.user_name}</h1>
                            <p className="text-sm leading-6 text-gray-500 hover:text-gray-600">Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.
                                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>

                        </div>

                        // {/* <!-- End of profile card --> */}
                    )}
                </div>



                {/* <!-- End of Left Side --> */}



                {/* <!-- Right Side --> */}
                <div className="w-full h-64 mx-2 md:w-9/12">
                    {/* <!-- Profile tab --> */}
                    {/* <!-- About Section --> */}
                    <div className="p-3 bg-white rounded-sm shadow-sm">
                        <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                            <span clas="text-green-500">
                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <span className="tracking-wide">About</span>
                        </div>
                        <div className="text-gray-700">
                            <div className="grid text-sm md:grid-cols-2">

                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Name</div>
                                    <div className="px-4 py-2">Yousef Jariry</div>
                                </div>


                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                                    <div className="px-4 py-2">+962 787875177</div>
                                </div>

                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Location</div>
                                    <div className="px-4 py-2">Amman, Jordan</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Email.</div>
                                    <div className="px-4 py-2">
                                        <a className="text-blue-800" href="mailto:jane@example.com">jariryyoysef@gmail.com</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    {/* <!-- End of about section --> */}

                    {/* <!-- Review Section --> */}
                    <div className="p-3 bg-white rounded-sm shadow-sm">
                        <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900">

                            <span className="tracking-wide">Reviews</span>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="relative inline-block">
                                    <div className="relative w-16 h-16 overflow-hidden rounded-full">
                                        <img className="absolute top-0 left-0 object-cover w-full h-full bg-cover object-fit" src="https://picsum.photos/id/646/200/200" alt="Profile picture" />
                                        <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="ml-6">
                                <p className="flex items-baseline">
                                    <span className="font-bold text-gray-600">Moayed</span>
                                </p>
                                <div className="flex items-center mt-4 text-gray-600">
                                </div>
                                <div className="mt-3">
                                    <span className="font-bold">Sapien consequat eleifend!</span>
                                    <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                                <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">

                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- End of Review Section --> */}


                    {/* <!-- Review Form Section --> */}
                    <div className="relative p-8 bg-white shadow-sm sm:rounded-xl">
                        <form className="w-full">
                            <div className="relative mb-5">
                                <input type="text" id="text" className="w-full h-16 p-3 pt-8 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" />
                                <label for="text" className="absolute top-0 left-0 h-full px-3 py-5 transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">Add your review </label>
                            </div>

                            <button onclick="javascript:void(0);" className="block w-full p-3 my-4 text-sm font-semibold text-blue-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs">Add</button>
                        </form>

                    </div>
                    {/* <!--End of Review Form Section --> */}





                    {/* <div className="flex flex-col justify-center min-h-screen py-6 bg-gray-100 sm:py-12">
                            <div className="relative w-11/12 max-w-xl py-3 sm:mx-auto">


                            </div>
                        </div> */}

                </div>
            </div>

        </div>



    )
}

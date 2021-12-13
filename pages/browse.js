import Footer from "../components/footer"
import Link from 'next/link'
import NavBar from "../components/navbar"

export default function Browse() {
    return (
        <div className="bg-white">
            <header>
                <div className="bg-gray-800">
                    <NavBar />
                </div>
                <div className="container flex justify-center px-6 py-3 mx-auto">
                    <div className="relative mt-6">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <input className="w-full py-2 pl-10 pr-4 border rounded-md focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search" />
                    </div>
                    <div>
                        <div className="relative mt-6 ml-2">
                            <select className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 bg-gray-200 border rounded-md appearance-none focus:border-blue-500 focus:outline-none focus:shadow-outline" placeholder="Regular input">
                                <option>Tools</option>
                                <option>Clothes</option>
                                <option>Camera equipment</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="my-8">
                <div className="container px-6 mx-auto">
                    <div className="h-64 overflow-hidden bg-bottom bg-cover rounded-md" style={{ backgroundImage: "url('/dresses.jpeg')" }}>
                        <div className="flex items-center h-full bg-gray-900 bg-opacity-50">
                            <div className="max-w-xl px-10">
                                <h2 className="text-2xl font-semibold text-white">Clothes</h2>
                                <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                                <button className="flex items-center px-3 py-2 mt-4 text-sm font-medium text-white uppercase bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <span>Rent Now</span>
                                    <svg className="w-5 h-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 md:flex md:-mx-4">
                        <div className="w-full h-64 overflow-hidden bg-center bg-cover rounded-md md:mx-4 md:w-1/2" style={{ backgroundImage: "url('/tools.jpg')" }}>
                            <div className="flex items-center h-full bg-gray-900 bg-opacity-50">
                                <div className="max-w-xl px-10">
                                    <h2 className="text-2xl font-semibold text-white">Tools</h2>
                                    <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                                    <button className="flex items-center mt-4 text-sm font-medium text-white uppercase rounded hover:underline focus:outline-none">
                                        <span>Rent Now</span>
                                        <svg className="w-5 h-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-64 mt-8 overflow-hidden bg-center bg-cover rounded-md md:mx-4 md:mt-0 md:w-1/2" style={{ backgroundImage: "url('/camera.jpg')" }}>
                            <div className="flex items-center h-full bg-gray-900 bg-opacity-50">
                                <div className="max-w-xl px-10">
                                    <h2 className="text-2xl font-semibold text-white">Camera Equipment</h2>
                                    <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                                    <button className="flex items-center mt-4 text-sm font-medium text-white uppercase rounded hover:underline focus:outline-none">
                                        <span>Rent Now</span>
                                        <svg className="w-5 h-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <h3 className="text-2xl font-medium text-gray-600">Fashions</h3>
                        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            <div className="w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-md">
                                <div className="flex items-start justify-end w-full h-56 p-3 bg-cover" style={{ backgroundImage: "url('/dress.jpg')" }}>
                                    <button className="mr-2 bg-gray-100 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="px-5 py-3">
                                    <h3 className="my-2 text-gray-700 uppercase">Dress</h3>
                                    <span className="my-2 text-gray-700">$12<span className="mt-2 text-gray-400"> / day</span></span>
                                    <p className="my-2">Location</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <h3 className="text-2xl font-medium text-gray-600">Tools</h3>
                        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            <div className="w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-md">
                                <div className="flex items-start justify-end w-full h-56 p-3 bg-cover" style={{ backgroundImage: "url('/drill.jpeg')" }}>
                                    <button className="mr-2 bg-gray-100 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="px-5 py-3">
                                    <h3 className="my-2 text-gray-700 uppercase">Drill</h3>
                                    <span className="my-2 text-gray-700">$12<span className="mt-2 text-gray-400"> / day</span></span>
                                    <p className="my-2">Location</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
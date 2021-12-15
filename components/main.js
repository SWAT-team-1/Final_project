import NavBar from './navbar'
import { useEffect, useRef, useState } from 'react'
import useResourceCategory from '../hooks/useResourceCategory'
import Link from 'next/link'

export default function Main() {
    const { categories } = useResourceCategory()
    
    return (
        <div>
            <header className="bg-gray-800">
                <NavBar />
                <section className="flex items-center justify-center bg-gray-800 bg-opacity-50 bg-center bg-cover" style={{ backgroundImage: "url(/hero1.jpg)", height: "700px" }}>
                    <div className="text-center">
                        <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">Borrow Almost Anything.<br />
                            Or <span className='text-yellow-500'>Earn Money</span> Renting out your Items.
                        </h2>

                        <div className="flex justify-center mt-8">
                            <Link href="/browse">
                            <a className="px-8 py-2 text-lg font-medium text-white transition-colors duration-300 transform bg-gray-500 rounded hover:bg-gray-700">
                                Browse Rentals
                            </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </header>

            <section className="bg-gray-300">
                <div className="px-6 py-16">
                    <div className="items-center justify-between w-full mx-auto md:flex md:space-x-6">
                        <div className="mx-auto">
                            <h3 className="text-4xl font-semibold text-center text-gray-800">About</h3>
                            <p className="max-w-md mt-8 text-2xl text-center text-gray-700 text-hight-2 sm:text-left">
                                Many people can't afford to purchase everything new. With Rentaxon, now you can just borrow something for a few days, that help you to save your money instead of buying it.Also,Try something yourself and decide whether it's time to purchase.
                            </p>
                        </div>

                        <div className="mt-8 md:mt-0 md:w-1/2">
                            <div className="flex items-center justify-center">
                                <div className="mx-auto">
                                    <img className="object-cover object-center w-full rounded-md shadow" style={{ height: "500px" }}
                                        src="/about.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="px-6 py-16">
                    <div className="items-center justify-between w-full mx-auto md:flex md:space-x-6">
                        <div className="mt-8 md:mt-0 md:w-1/2">
                            <div className="flex items-center justify-center">
                                <div className="mx-auto">
                                    <img className="object-cover object-center w-full rounded-md shadow" style={{ height: "500px" }}
                                        src="/way.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto mt-8 md:mt-0 md:w-1/2">
                            <h3 className="text-4xl font-semibold text-center text-gray-800 sm:text-left">A safer way to rent</h3>
                            <p className="max-w-md mt-4 text-2xl text-gray-700">Fully vetted community</p>
                            <p className="max-w-md mt-4 text-2xl text-gray-700">Liability waiver</p>
                            <p className="max-w-md mt-4 text-2xl text-gray-700">Personal liability guarantee</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-200">
                <div className="w-10/12 pb-16 mx-auto">
                    <div className="w-full px-6 py-16">
                        <div className="text-center">
                            <h2 className="text-4xl font-semibold text-gray-800">How it works</h2>
                        </div>

                        <div className="grid gap-8 mt-10 md:grid-cols-3 sm:grid-cols-1">
                            <div className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md">
                                <img src='/search.svg' className='mx-auto' />
                                <h3 className='py-3 text-center text-blue-500'>Find the item you'd like to borrow.</h3>
                                <p className="max-w-md mx-auto mt-2 text-center text-gray-800">Search in dozens of categories from electric skateboards to tools.</p>
                            </div>

                            <div className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md">
                                <img src='/book.png' className='mx-auto' />
                                <h3 className='py-3 text-center text-blue-500'>Book the item.</h3>
                                <p className="max-w-md mx-auto mt-2 text-center text-gray-800">Choose rental period, pickup and return time and book the item.</p>
                            </div>

                            <div className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md sm:px-30">
                                <img src='/pickup.png' className='mx-auto' />
                                <h3 className='py-3 text-center text-blue-500'>Pick up from the owner.</h3>
                                <p className="max-w-md mx-auto mt-2 text-center text-gray-800">Coordinate pickup and return with them via messages on FriendWithA as well as text messages.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-10/12 mx-auto bg-white">
                <div className="w-full px-6 py-20 mb-16 text-center">
                    <h2 className="mb-10 text-4xl font-semibold text-gray-800">Most Popular Rental Categories</h2>

                    <div className="grid gap-8 mt-6 md:grid-cols-2 lg:grid-cols-4">
                        {categories?.map((category) => {
                            return (
                                    <Link href={'/category/' + category.id}
                                      key={category.id}>
                                    <div className="relative cursor-pointer">
                                    <img className="object-cover object-center w-full h-64 rounded-md shadow"
                                        src={'/' + category.category_name + '.jpg'}/>
                                        <div className="absolute object-cover object-center w-full h-64 -mt-64 bg-gray-800 bg-opacity-50 rounded-md hover:hidden"></div>
                                    <h3 className="absolute w-full mx-auto -mt-32 text-2xl font-medium text-center text-gray-200">{category.category_name}</h3>
                                    </div>
                                    </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
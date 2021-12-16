import React from 'react'
import { useRouter } from 'next/router'
import NavBar from "../../components/navbar"
import { useAuth } from '../../contexts/auth'
import Footer from '../../components/footer'
import useResourceProduct from '../../hooks/useResourceProducts'
import userResource from '../../hooks/useResourceCreateUser'
import Link from 'next/link'


export default function Product() {//here just waiting to props to be added to filter on them
    const { users } = userResource()
    const { products } = useResourceProduct();
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <div className="bg-gray-800">
                    <NavBar />
            </div>
            {products?.map(product => {
                if (product.id == id) {
                    return (
                        <div>
                            <div className="grid grid-cols-2 grid-rows-2" style={{ "maxHeight": "500px" }}>
                                <div className="row-span-2">
                                    <img src={product.product_img_1} className="object-cover object-center w-full h-full" />
                                </div>
                                <div>
                                    <img src={product.product_img_2} className="w-full h-full bg-contain" />
                                </div>
                                <div>
                                    <img src={product.product_img_3} className="w-full h-full bg-contain" />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-end mr-16 sm:mr-48 sm:-mt-32 sm:flex sm:flex-row">
                                    <div className="z-10 flex self-center justify-center">
                                        <div className="p-12 mx-auto bg-gray-100 shadow-2xl rounded-2xl w-100 ">
                                            <div className="flex items-center justify-between mx-4">
                                                <span className="my-2 text-xl font-semibold text-gray-800">${product.product_price}<span className="mt-2 text-gray-400"> / day</span></span>
                                                <span className="my-2 text-xl font-semibold text-gray-800">${product.product_price * 6}<span className="mt-2 text-gray-400"> / week</span></span>

                                            </div>
                                            <div className="space-y-5">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium tracking-wide text-gray-700">Rental Start</label>
                                                    <input className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="date" placeholder="Add start date" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="mb-5 text-sm font-medium tracking-wide text-gray-700">
                                                        Rental End
                                                    </label>
                                                    <input className="content-center w-full px-4 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="date" placeholder="Add end date" />
                                                </div>
                                                <div>
                                                    <button type="submit" className="flex justify-center w-full p-3 mt-6 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in bg-gray-700 rounded-full shadow-lg cursor-pointer hover:bg-gray-500">
                                                        Book Now
                                                    </button>
                                                </div>
                                                <div>
                                                    <a href="mailto:example@gmail.com" target="_blank" className="flex justify-center w-full p-3 font-semibold text-gray-800 transition duration-500 ease-in bg-gray-300 border-blue-500 rounded-full shadow-lg shadow-outline cursor-pointer hover:bg-gray-700 hover:text-gray-100">
                                                        Message Owner
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-9/12 mb-5 ml-10 -mt-72">
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <h2 className='text-4xl font-semibold'>{product.product_name}</h2>
                                        </div>
                                        <div className="mr-96">
                                            {users?.map(user => {
                                                if (product.product_owner === user.id && user.avatar) {
                                                    return (
                                                        <Link href={'/profile/' + user.id}>
                                                        <div className='flex items-center justify-center cursor-pointer'>
                                                            <img src={user.avatar} className='w-20 h-20 mx-auto rounded-full' />
                                                            <p className='ml-2 text-xl text-center'>{user.user_name}</p>
                                                        </div>
                                                        </Link>
                                                    )
                                                } else if (product.product_owner === user.id) {
                                                    return (
                                                        <Link href={'/profile/' + user.id}>
                                                        <div className='flex items-center justify-center cursor-pointer'>
                                                            <div src={user.avatar} className='w-20 h-20 bg-gray-800 rounded-full'>
                                                                <h3 className='mt-5 text-2xl text-center text-gray-200'>{user.user_name[0]}{user.user_name[1]}</h3>
                                                            </div>
                                                            <p className='ml-2 text-xl text-center'>{user.user_name}</p>
                                                        </div>
                                                        </Link>
                                                    )
                                                }
                                            })}
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between w-8/12 mt-5'>
                                        <div>
                                            <h3 className="text-3xl font-semibold text-left text-gray-700">Description</h3>
                                        </div>
                                        <div className="flex items-center jusrify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="blue">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="my-2 ml-2">{product.product_location}</span>
                                        </div>
                                    </div>
                                    <div className='w-9/12'>
                                        <p className="w-full mt-8 text-xl text-center text-gray-700 text-hight-2 sm:text-left">
                                            {product.product_description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
            <section className="w-8/12">
                <div className="w-10/12 pb-16 mx-auto">
                    <div className="w-full px-6 py-16">
                        <div className="grid gap-8 mt-10 md:grid-cols-3 sm:grid-cols-1">
                            <div className="px-6 py-8 overflow-hidden bg-gray-200 rounded-md shadow-md">
                                <img src='/save.png' className='h-32 mx-auto' />
                                <h3 className='py-3 text-center text-blue-500'>
                                    Expertly Maintained
                                    </h3>
                            </div>

                            <div className="px-6 py-8 overflow-hidden bg-gray-200 rounded-md shadow-md ">
                                <img src='/book.png' className='mx-auto' />
                                <h3 className='py-3 text-center text-blue-500'>Free cancellation</h3>
                            </div>

                            <div className="px-6 py-8 bg-gray-200 rounded-md shadow-md overflow-hidde sm:px-30 ">
                                <img src='/pickup.png' className='mx-auto' />
                                <h3 className='py-3 text-center text-blue-500'>Pick up from the owner.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
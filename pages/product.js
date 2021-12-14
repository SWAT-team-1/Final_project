import React from 'react'
import { useState } from 'react'
import NavBar from "../components/navbar"
import { useAuth } from '../contexts/auth'
import Footer from '../components/footer'
import useResource from '../hooks/useRecourcesProducts'
import userResource from '../hooks/useRecourcesGetUser'


export default function Product() {//here just waiting to props to be added to filter on them
    const { user } = useAuth()
    console.log(user)
    const { resources } = useResource();
    console.log(resources);
    const { resources1 } = userResource();
    console.log(resources1);
    return (        
        <div>
            <NavBar />
            <div className="grid grid-cols-2 grid-rows-2" style={{ "maxHeight": "500px" }}>
                <div className="row-span-2">
                    <img src={resources[0].product_img_1} className="w-full h-full bg-contain" />
                </div>
                <div>
                    <img src={resources[0].product_img_2} className="w-full h-full bg-contain" />
                </div>
                <div>
                    <img src={resources[0].product_img_3} className="w-full h-full bg-contain" />
                </div>
            </div>
            <div>
                <div className="sticky flex justify-end mr-16 sm:mr-48 sm:-mt-32 sm:flex sm:flex-row">
                    <div className="z-10 flex self-center justify-center">
                        <div className="p-12 mx-auto bg-gray-100 shadow-2xl rounded-2xl w-100 ">
                            <div className="flex items-center justify-between mx-4">
                                <span className="my-2 text-xl font-semibold text-gray-800">${resources[0].product_price}<span className="mt-2 text-gray-400"> / day</span></span>
                                <span className="my-2 text-xl font-semibold text-gray-800">${resources[0].product_price*7}<span className="mt-2 text-gray-400"> / week</span></span>

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
                <div className="-mt-72 ml-10 mb-20">
                    <div>
                        <div className="mr-96">
                            <img src='/profilepic.png' className='mx-auto rounded w-20 h-20	rounded-full' />
                            <label>{resources1[0].user_name}</label>
                        </div>
                        <div>
                            <h3 className="text-4xl font-semibold text-left text-gray-800">Description</h3>
                        </div>
                        <div>
                            <p className="max-w-md mt-8 text-xl text-center text-gray-700 text-hight-2 sm:text-left">
                            {resources[0].product_description}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}



{/* <div className="items-center justify-between w-full mx-auto md:flex md:space-x-6 bg-gray-800">
                    <div className="mx-auto">
                        <div className="flex items-center justify-center pb-16">
                            <div>
                                <img className="w-full rounded-md shadow hover:scale-105" style={{ height: "500px" }}
                                    src={resources[0].product_img_1} />
                            </div>
                            <div>
                                <img className="w-full rounded-md shadow hover:scale-105" style={{ height: "500px" }}
                                    src={resources[0].product_img_2} />
                            </div>
                            <div>
                                <img className="w-full rounded-md shadow hover:scale-105" style={{ height: "500px" }}
                                   src={resources[0].product_img_3} />
                            </div>
                        </div>
                    </div>
                </div> */}


{/* <section className="bg-gray-300"> */ }
{/* <div className="px-6 py-16">
                        <div className="items-center justify-between w-full mx-auto md:flex md:space-x-6">
                           
                            <div className="mt-8 md:mt-0 md:w-1/2">
                                <div className="flex items-center justify-center">
                                    <div className="mx-auto">
                                        <form>
                                            <fieldset>
                                                <table >
                                                    <tr>
                                                        <td>
                                                                <div className="flex-col w-1/2 mx-10">
                                                                    <label>From : </label>
                                                                    <input type='date' className="w-60" name="min" />
                                                                </div>
                                                        </td>
                                                        <td>
                                                            <div className="flex-col w-1/2 mx-10">
                                                                <label >To : </label>
                                                                <input type='date' className="w-60" name="max" />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr colSpan="2"><td className="flex items-center">
                                                        <div className="flex items-center w-1/2 gap-12 pt-4 ml-12 pb-6" >
                                                            <button className="flex items-center px-3 py-2 mt-4 text-sm font-medium text-white uppercase bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                                                <span>Book Now</span>
                                                                <svg className="w-5 h-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                                            </button>
                                                        </div>
                                                    </td></tr>
                                                </table>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
{/* </section> */ }
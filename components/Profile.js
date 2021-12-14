import useResource from '../hooks/useResourceProfile'

import useResourceProduct from '../hooks/createResourceProduct';

import { useAuth } from '../contexts/auth'
import Footer from './footer';
import NavBar from '../components/navbar'

import React from 'react';

export default function Profile() {
    const [showModal, setShowModal] = React.useState(false);
    const { createResource, resources } = useResource();
    const { createResourceProduct ,resources1} = useResourceProduct()
    const { user } = useAuth();
    console.log(resources)
    console.log(resources1)

    function CreateItem(event) {
        event.preventDefault();
        const obj = {
            'product_name': event.target.product_name.value,
            "product_location": event.target.product_location.value,
            'product_description': event.target.product_des.value,
            'product_price': event.target.price.value,
            'product_img_1': "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6356/6356535_sd.jpg",
            'product_img_2': "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6356/6356535_sd.jpg",
            'product_img_3': "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6356/6356535_sd.jpg",
            'product_category': 1,
            "product_owner": user.id,
        }
        console.log(obj)
        createResourceProduct(obj)
    }



    async function CreateReview(event) {
        event.preventDefault();
        const obj = {

            "review_content": event.target.review_content.value,
            "auther": user.id,
            "reviewed": resources.id

        }
        console.log(obj)
        createResource(obj)
    }

    return (
        <>
            <div className="bg-gray-800">
                <NavBar />
            </div>
            <div className="container mx-auto my-5 p-70">
                <div className="md:flex no-wrap md:-mx-2 ">

                    {/* <!-- Left Side --> */}

                    <div className="w-full md:w-3/12 md:mx-2 ">
                        {/* <!-- Profile Card --> */}


                        <div className="p-3 bg-white border-t-4 border-blue-400">
                            <div className="overflow-hidden image">
                                <img className="w-full h-auto mx-auto"
                                    src="https://scontent.famm3-2.fna.fbcdn.net/v/t1.6435-1/c208.434.1092.1092a/s240x240/61656587_10219346345910370_286168087474995200_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeHabd31VwMsZAjlq_LZk8wZoE3Ich7PAUygTchyHs8BTLs4a_LVjSeDFmvQt51HxP4&_nc_ohc=vwcn6BEPeBAAX9qpaDP&_nc_ht=scontent.famm3-2.fna&oh=00_AT_cvIK-HZUHP0r6_YILgfYQV80WSwNR-Nc8SI5RkJXJRA&oe=61DDD85D"
                                    alt="" />
                            </div>

                            <h1 className="my-1 text-xl font-bold leading-8 text-gray-900">{

                                user.username
                            }</h1>
                            <button
                                className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-700 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
                                type="button"
                                onClick={() => setShowModal(true)}
                            >
                                add new item
                            </button>
                            <p className="text-sm leading-6 text-gray-500 hover:text-gray-600">Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.
                                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>

                        </div>

                        {/* <!-- End of profile card --> */}

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
                                        <div className="px-4 py-2">{user.username}</div>
                                    </div>


                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Contact No.</div>
                                        <div className="px-4 py-2">{user.phone_number}</div>
                                    </div>

                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Location</div>
                                        <div className="px-4 py-2">{user.address}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Email.</div>
                                        <div className="px-4 py-2">

                                            <a className="text-blue-800" href={`mailto:${user.email}`}>{user.email}</a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        {/* <!-- End of about section --> */}

                        {/* <!-- Review Section --> */}

                        <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900">

                            <span className="tracking-wide">Reviews</span>
                        </div>


                        {/* {resources?.map((review) => {
                            return ( */}

                        <>
                            <div className="p-3 bg-white rounded-sm shadow-sm">
                                <div className="flex items-start p-3 bg-white rounded-sm shadow-sm">

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
                                            <span className="font-bold text-gray-600">
                                                {/* {review.auther} */}
                                            </span>
                                        </p>
                                        <div className="flex items-center mt-4 text-gray-600">
                                        </div>
                                        <div className="mt-3">

                                            <p className="mt-1">
                                                {/* {review.review_content} */}
                                            </p>

                                        </div>
                                        <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </>

                        {/* })} */}




                        {/* <!-- End of Review Section --> */}


                        {/* <!-- Review Form Section --> */}
                        <div className="relative bg-white shadow-sm sm:rounded-xl">
                            <form className="w-full " >
                                <div className="relative mb-5">
                                    <input type="text" id="review_content" className="w-full h-16 p-3 pt-8 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" />
                                    <label for="text" className="absolute top-0 left-0 h-full px-3 py-5 transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1 ">Add your review </label>
                                </div>

                                <button type='submit' className="block w-full p-3 my-4 text-sm font-semibold text-gray-200 rounded-lg hover:bg-indigo-400 ">Add</button>
                            </form>

                        </div>
                        {/* <!--End of Review Form Section --> */}




                    </div>

                </div>
                {/* <!-- User item Section --> */}
               
                <div className="mt-16">
                    <h3 className="text-2xl font-medium text-gray-600">User Item</h3>

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
               
                {/* <!--End of user item Section --> */}
                <Footer />
            </div>
       
            {/* Pop up section */}
            <>

                {showModal ? (
                    <>
                        <div
                            className="fixed inset-0 z-50 flex items-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
                        >
                            <div className="relative w-auto max-w-3xl mx-auto my-6">
                                {/*content*/}
                                <div className="relative flex flex-col w-full bg-gray-800 border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                    {/*header*/}
                                    {/* <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200"> */}

                                    <button
                                        className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                    {/* </div> */}
                                    {/*body*/}
                                    <div className="flex flex-col p-6">



                                        <div className="font-sans">
                                            <div className="relative flex flex-col items-center bg-gray-800 sm:justify-center">
                                                <div className="relative w-full sm:max-w-sm">

                                                    <div className="relative w-full px-6 py-4 bg-gray-100 shadow-md rounded-3xl">
                                                        <label htmlFor="" className="block mt-3 text-2xl font-semibold text-center text-gray-700">
                                                            Register
                                                        </label>
                                                        <form className="mt-10" onSubmit={CreateItem}>
                                                            <div>
                                                                <input type="text" id='product_name' placeholder="Product Name" className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                                            </div>

                                                            <div className="mt-7">
                                                                <input type="text" id="product_des" placeholder="Product Description" className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                                            </div>

                                                            <div className="mt-7">
                                                                <input type="text" id="product_location" placeholder="Proudct Location" className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />

                                                                <input type="text" id="price" placeholder="Price" className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                                            </div>
                                                            <div className="mt-7">

                                                            </div>

                                                            <div>
                                                                <input type="file" id='product_img1' className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />

                                                                <input type="file" id='product_img2' className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />

                                                                <input type="file" id='product_img3' className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                                            </div>

                                                            <div className="mt-7">
                                                                <button className="w-full py-3 text-white transition duration-500 ease-in-out transform bg-gray-800 shadow-xl rounded-xl hover:shadow-inner focus:outline-none hover:-translate-x hover:scale-105 "
                                                                    type='submit'
                                                                    onClick={() => setShowModal(false)}
                                                                >
                                                                    Save Changes
                                                                </button>
                                                                <button
                                                                    className="w-full py-3 text-red-500 transition duration-500 ease-in-out transform bg-gray-800 shadow-xl rounded-xl hover:shadow-inner focus:outline-none hover:-translate-x hover:scale-105"
                                                                    type="button"
                                                                    onClick={() => setShowModal(false)}
                                                                >
                                                                    Close
                                                                </button>

                                                            </div>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </>
                ) : null}
            </>


        </>




    )

}

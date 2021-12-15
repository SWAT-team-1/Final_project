import useResourceProfile from '../hooks/useResourceProfile'
import useResourceProduct from '../hooks/useResourceProducts'
import useResourceCategory from '../hooks/useResourceCategory'
import { useAuth } from '../contexts/auth'
import Footer from '../components/footer';
import NavBar from '../components/navbar'
import React from 'react';
import { useState, useEffect } from 'react'
import useResource from '../hooks/useResourceCreateUser'
import Link from 'next/link'

export default function Profile() {
    const [showModal, setShowModal] = React.useState(false);
    const { createResource, resources } = useResourceProfile();
    const { products, createProduct, deleteProduct } = useResourceProduct()
    const { categories } = useResourceCategory()
    const [items, setItems] = useState(0);
    const { users } = useResource()

    const { user } = useAuth();

    useEffect(()=>{
        let items = 0;
        products?.map( product =>{
            if(product.product_owner == user.id){
                items++
            }
            setItems(items)
        })
    },[])

    function CreateItem(event) {
        event.preventDefault();
        setShowModal(false)
        console.log(event.target.select.value)
        const obj = {
            'product_name': event.target.product_name.value,
            "product_location": event.target.product_location.value,
            'product_description': event.target.product_des.value,
            'product_price': event.target.price.value,
            'product_img_1': event.target.product_img1.value,
            'product_img_2': event.target.product_img1.value,
            'product_img_3': event.target.product_img1.value,
            'product_category': event.target.select.value,
            "product_owner": user.id,
        }
        console.log(obj)
        createProduct(obj)
    }

    function deleteItem(e){
        e.preventDefault()
        const id = e.target.id
        deleteProduct(id)
    }

    return (
        <>
            {user ?
                <>
                    <div className="bg-gray-800">
                        <NavBar />
                    </div>
                    <div className="container mx-auto my-5 p-70">
                        <div className="md:flex no-wrap md:-mx-2 ">

                            {/* <!-- Left Side --> */}

                            <div className="w-full md:w-3/12 md:mx-2 ">
                                    <div className="p-3 ml-20 bg-white border-t-4 border-blue-400">
                                        {user.avatar ?
                                            <div className="overflow-hidden image">
                                                <img className="mx-auto rounded-full w-60 h-60"
                                                    src={user.avatar}
                                                    alt="avatar" />
                                            </div>
                                            : <div className="flex items-center justify-center mt-2">
                                                <div className='bg-gray-800 rounded-full w-60 h-60'>
                                                    <p className='mt-16 text-center text-gray-200 text-8xl'>{user.username[0]}{user.username[1]}</p>
                                                </div>
                                            </div>
                                        }
                                        <button
                                        className="px-6 py-3 mt-5 mb-4 ml-16 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-gray-700 rounded shadow outline-none hover:bg-gray-400 hover:text-gray-800 hover:shadow-lg focus:outline-none"
                                        type="button"
                                        onClick={() => setShowModal(true)}
                                    >
                                        add new item
                                    </button>
                                        <div className="flex items-center text-3xl text-blue-500 jusrify-center">
                                        <svg height="32" version="1.1" viewBox="0 0 768 768" width="32" xmlns="http://www.w3.org/2000/svg"><title/><path d="M579.008 260.496l-45.008-162.992-262.992 74 41.984 162.992z" fill="#0096FF"/>
                                        <path d="M245.968 436.352l0.032 0.144 42.992-12.992-104-404h-177.984v56.992h128.768l90.72 365.76z" fill="#0096FF"/><path d="M749.376 497.104l-5.376-22.608-274.336 76.32 21.2 66.528 270.128-78.688-9.984-42z" fill="#0096FF"/>
                                        <path d="M408.496 529.392l19.52-19.52-35.392-35.408-19.504 19.536c-11.344-7.52-24.016-13.12-37.568-16.64v-29.168h-62.816v29.168c-13.84 3.584-26.8 9.344-38.336 17.104l-18.72-18.736-35.392 35.392 19.040 19.040c-7.28 11.136-12.736 23.568-16.176 36.784h-29.152v62.784h29.152c3.52 13.552 9.12 26.256 16.656 37.616l-19.52 19.504 35.392 35.376 19.52-19.52c11.376 7.552 24.096 13.168 37.68 16.672v29.12h62.576v-29.12c13.28-3.408 25.712-8.912 36.896-16.176l20.288 20.272 35.392-35.36-19.984-20.016c7.808-11.6 13.6-24.64 17.152-38.544h29.12v-62.368h-29.12c-3.504-13.616-9.12-26.384-16.704-37.792zM304.16 649.824c-28.432 0-51.472-23.040-51.472-51.488 0-28.416 23.040-51.472 51.472-51.472 28.416 0 51.472 23.040 51.472 51.472 0 28.448-23.056 51.488-51.472 51.488z" fill="#0096FF"/>
                                        <path d="M342.848 442.256c63.344-11.248 95.648 32.448 95.648 32.448 0.112 0.112 0.224 0.224 0.336 0.336 0.48 0.512 0.864 0.992 1.312 1.488 6.352 7.84 10.944 19.44 10.944 19.44l2.672 8.384 307.248-84.864-44-163.008-394 108 19.84 77.776z" fill="#0096FF"/>
                                        </svg>
                                            <span className="my-2 ml-2">{items} Items</span>
                                        </div>
                                        <div className="flex items-center text-3xl text-blue-500 jusrify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                            <span className="my-2 ml-2">Delivers Item</span>
                                        </div>
                                        <div className="flex items-center text-3xl text-blue-500 jusrify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                            <span className="my-2 ml-2">Email Verified</span>
                                        </div>
                                    </div>

                                    {/* <!-- End of profile card --> */}

                                </div>


                            {/* <!-- End of Left Side --> */}



                            {/* <!-- Right Side --> */}
                            <div className="w-full mx-2 md:w-9/12">
                                {/* <!-- Profile tab --> */}
                                {/* <!-- About Section --> */}
                                <div className="p-3 bg-white rounded-sm shadow-sm">
                                    <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                                        <span className="text-green-500">
                                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
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

                                    <h3 className="mt-8 ml-3 text-3xl font-medium text-gray-600">Reviews</h3>
                                </div>


                                {resources?.map((review) => {
                                    if(review.reviewed === user.id){
                                        return(
                                        users?.map(userI =>{
                                            if(userI.id === review.auther){
                                                console.log(userI)
                                                return (

                                                    <>
                                                        <div className="p-3 bg-white rounded-sm shadow-sm">
                                                            <div className="flex items-end p-4 bg-gray-200 rounded-sm shadow-sm">
            
                                                                <div className="flex-shrink-0">
                                                                    <div className="relative inline-block">
                                                                        <div className="relative w-16 h-16 mt-3 overflow-hidden rounded-full">
                                                                            <img className="absolute top-0 left-0 object-cover w-full h-full bg-cover object-fit" src={userI.avatar} alt="Profile picture" />
                                                                            <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
            
                                                                <div className="ml-6">
                                                                    <div>
            
                                                                        <p>
                                                                            {review.review_content}
                                                                        </p>
            
                                                                    </div>
                                                                    <div className="mt-3">
                                                                        <span className="font-bold text-gray-600">
                                                                            {userI.user_name}
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center mt-4 text-gray-600">
                                                                    </div>
                                                                </div>
                                                            </div>
            
            
                                                        </div>
                                                    </>
                                                )
                                            }
                                        
                                        })
                                        )
                                    }
                                })}




                                {/* <!-- End of Review Section --> */}
                                <h3 className="mt-8 ml-3 text-3xl font-medium text-gray-600">{user.username}'s items </h3>

                                <div className="grid grid-cols-1 gap-6 mt-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
                                    {products?.map(product => {
                                        if (product.product_owner === user.id)
                                            return (
                                                <div className="w-full max-w-sm mx-auto overflow-hidden bg-gray-100 rounded-md shadow-lg">
                                                    <div className="flex items-start justify-end w-full h-56 p-3 bg-cover" style={{ backgroundImage: `url(${product.product_img_1})` }}>
                                                        <button className="mr-2 bg-gray-100 rounded-full">
                                                            <svg id={product.id} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path id={product.id} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                        </button>
                                                        <button onClick={deleteItem} className="mr-2 bg-gray-100 rounded-full">
                                                            <svg id={product.id} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path id={product.id} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className="px-5 py-3">
                                                        <h3 className="my-2 text-xl text-gray-800 uppercase">{product.product_name}</h3>
                                                        <div className="flex items-center justify-between">

                                                            <span className="my-2 text-xl font-semibold text-gray-800">${product.product_price}<span className="mt-2 text-gray-400"> / day</span></span>
                                                            <div className="flex items-center jusrify-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="blue">
                                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                                </svg>
                                                                <span className="my-2 ml-2">{product.product_location}</span>
                                                            </div>
                                                        </div>
                                                        {user.avatar ?
                                                            <Link href={'/profile/' + user.id}>
                                                            <div className="flex items-center justify-start mt-2">
                                                                <img src={user.avatar} className="rounded-full w-14 h-14" />
                                                                <p className="ml-3 text-xl text-gray-700">{user.user_name}</p>
                                                            </div>
                                                        </Link>
                                                        :
                                                        <Link href={'/profile/' + user.id}>
                                                              <div className="flex items-center justify-start mt-2">
                                                                <div className='bg-gray-800 rounded-full w-14 h-14'>
                                                                    <p className='mt-3 text-2xl text-center text-gray-200'>{user.username[0]}{user.username[1]}</p>
                                                                </div>
                                                                <p className="ml-3 text-xl text-gray-700">{user.username}</p>
                                                            </div>
                                                        </Link>
                                                        }
                                                    </div>
                                                </div>
                                            )
                                    })}
                                </div>


                            </div>

                        </div>
                    </div>
                    <Footer />
                </>
                :
                <></>
            }
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
                                            x
                                        </span>
                                    </button>
                                    {/* </div> */}
                                    {/*body*/}

                                    <div className="flex flex-col px-6 pb-6">
                                        <div className="font-sans">
                                            <div className="relative flex flex-col items-center bg-gray-800 sm:justify-center">
                                                <div className="relative w-full sm:max-w-sm">

                                                    <div className="relative w-full px-6 py-4 bg-gray-100 shadow-md rounded-3xl">
                                                        <label htmlFor="" className="block mt-3 text-2xl font-semibold text-center text-gray-700">
                                                            Add New Item
                                                        </label>
                                                        <form className="mt-10" onSubmit={CreateItem}>
                                                            <div>
                                                                <input type="text" id='product_name' placeholder="Product Name" className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" required/>
                                                            </div>

                                                            <div className="mt-7">
                                                                <input type="text" id="product_des" placeholder="Product Description" className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" required/>
                                                            </div>
                                                            <div className="relative ml-2 mt-7">
                                                                <select name="select" className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 bg-gray-200 border rounded-md appearance-none focus:border-blue-500 focus:outline-none focus:shadow-outline" placeholder="Regular input" required>
                                                                    {categories?.map(category => {
                                                                        return (
                                                                            <option value={category.id}>{category.category_name}</option>
                                                                        )
                                                                    })}

                                                                </select>
                                                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                                                </div>
                                                            </div>
                                                            <div className="mt-7">
                                                                <input type="text" id="product_location" placeholder="Proudct Location" className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" required/>

                                                                <input type="number" id="price" placeholder="Price" className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" required/>
                                                            </div>
                                                            <div className="mt-7">

                                                            </div>

                                                            <div>
                                                                <input type="url" id='product_img1' placeholder="Product Image 1" className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" required/>

                                                                <input type="url" id='product_img2' placeholder="Product Image 2" className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" required/>

                                                                <input type="url" id='product_img3' placeholder="Product Image 3" className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" required/>
                                                            </div>

                                                            <div className="mt-7">
                                                                <button className="w-full py-3 text-white transition duration-500 ease-in-out transform bg-gray-700 shadow-xl rounded-xl hover:bg-gray-500 hover:text-gray-800"
                                                                    type='submit'
                                                                >
                                                                    Save Changes
                                                                </button>
                                                                <button
                                                                    className="w-full py-3 mt-2 text-gray-800 transition duration-500 ease-in-out transform bg-gray-400 shadow-xl rounded-xl hover:shadow-inner"
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

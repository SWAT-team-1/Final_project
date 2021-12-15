import useResourceProduct from '../../hooks/useResourceProducts'
import useResourceCategory from '../../hooks/useResourceCategory'
import { useAuth } from '../../contexts/auth'
import Footer from '../../components/footer'
import NavBar from '../../components/navbar'
import useResource from '../../hooks/useResourceCreateUser'
import useResourceProfile from '../../hooks/useResourceProfile'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import useResourceFavourite from '../../hooks/useResourceFavourites'

export default function Profile() {
    const [items, setItems] = useState(0);
    const { createResource, resources } = useResourceProfile();
    const { products, createProduct, deleteProduct } = useResourceProduct()
    
    const { categories } = useResourceCategory()
    const { users } = useResource()
    const router = useRouter()
    const { id } = router.query
    const { user } = useAuth();
    const { addFavourite } = useResourceFavourite()
    async function CreateReview(event) {
        event.preventDefault();
        const obj = {

            "review_content": event.target.review_content.value,
            "auther": user.id,
            "reviewed": resources.id

        }
        createResource(obj)
    }

    useEffect(()=>{
        let items = 0;
        products?.map( product =>{
            if(product.product_owner == id){
                items++
            }
            setItems(items)
        })
    },[])
    const addToFavourite = (e) => {
        e.preventDefault()
        const value = e.target.id
        const info = {
            "user": user.id,
            "product_favorite": value
        }
        addFavourite(info)
    }

    function CreateReview(event) {
        event.preventDefault();
        const obj = {

            "review_content": event.target.review_content.value,
            "auther": user.id,
            "reviewed": event.target.reviewed_user.value
        }
        createResource(obj)
    }

    return (
        <div>
            <div className="bg-gray-800">
                <NavBar />
            </div>
            {users?.map(userI => {
                if (userI.id == id) {
                    return (
                        <div className="container mx-auto my-5 p-70">
                            <div className="md:flex no-wrap md:-mx-2 ">

                                {/* <!-- Left Side --> */}


                                {/* <!-- Profile Card --> */}
                                <div className="w-full md:w-3/12 md:mx-2 ">
                                    <div className="p-3 ml-20 bg-white border-t-4 border-blue-400">
                                        {userI.avatar ?
                                            <div className="overflow-hidden image">
                                                <img className="mx-auto rounded-full w-60 h-60"
                                                    src={userI.avatar}
                                                    alt="avatar" />
                                            </div>
                                            : <div className="flex items-center justify-center mt-2">
                                                <div className='bg-gray-800 rounded-full w-60 h-60'>
                                                    <p className='mt-16 text-center text-gray-200 text-8xl'>{userI.user_name[0]}{userI.user_name[1]}</p>
                                                </div>
                                            </div>
                                        }
                                        <h1 className="my-1 text-xl font-bold leading-8 text-gray-900">
                                            {userI.user_name}
                                        </h1>
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
                                            <span className="my-2 ml-2">Delivers gear </span>
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
                                                    <div className="px-4 py-2">{userI.user_name}</div>
                                                </div>


                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                                                    <div className="px-4 py-2">{userI.phone_number}</div>
                                                </div>

                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Location</div>
                                                    <div className="px-4 py-2">{userI.address}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Email.</div>
                                                    <div className="px-4 py-2">

                                                        <a className="text-blue-800" href={`mailto:${userI.user_email}`}>{userI.user_email}</a>
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
                                    if(review.reviewed == id){
                                        return(
                                        users?.map(userII =>{
                                            
                                            if(userII.id === review.auther){
                                                
                                                return (

                                                    <>
                                                        <div className="p-3 bg-white rounded-sm shadow-sm">
                                                            <div className="flex items-end p-4 bg-gray-200 rounded-sm shadow-sm">
            
                                                                <div className="flex-shrink-0">
                                                                    <div className="relative inline-block">
                                                                        <div className="relative w-16 h-16 mt-3 overflow-hidden rounded-full">
                                                                            <img className="absolute top-0 left-0 object-cover w-full h-full bg-cover object-fit" src={userII.avatar} alt="Profile picture" />
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
                                                                            {userII.user_name}
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


                                    {/* <!-- Review Form Section --> */}
                                    {user ?
                                        <div className="relative flex justify-center sm:rounded-xl ">
                                            <form className="w-3/4" onSubmit={CreateReview}>
                                                <div className="relative mb-5 shadow-md">
                                                    <input type="text" id="review_content" className="w-full h-20 p-3 pt-8 placeholder-transparent border border-gray-300 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" />
                                                    <input type="hidden" id="reviewed_user" value={userI.id} className="w-full h-20 p-3 pt-8 placeholder-transparent border border-gray-300 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" />
                                                    <label htmlFor="text" className="absolute top-0 left-0 h-full px-3 py-5 transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1 ">
                                                        Add your review
                                                    </label>
                                                </div>

                                                <button type='submit' className="block w-1/2 p-3 mx-auto my-4 text-sm font-semibold text-gray-200 bg-gray-700 rounded-lg hover:bg-gray-500">Add</button>
                                            </form>

                                        </div>
                                        : <></>
                                    }
                                    {/* <!--End of Review Form Section --> */}
                                    <h3 className="mt-8 ml-3 text-3xl font-medium text-gray-600">Browse items</h3>

                                    <div className="grid grid-cols-1 gap-6 mt-6 mb-6 sm:grid-cols-2 lg:grid-cols-3">
                                        {products?.map(product => {
                                            if (product.product_owner == id) {
                                                return (
                                                    <div className="w-full max-w-sm mx-auto mb-8 overflow-hidden bg-gray-100 rounded-md shadow-lg cursor-pointer">
                                                        <Link href={'/product/' + product.id}>
                                                            <div className="flex items-start justify-end w-full h-56 p-3 bg-cover" style={{ backgroundImage: `url(${product.product_img_1})` }}>
                                                                {user ? <button onClick={addToFavourite} className="mr-2 bg-gray-100 rounded-full">
                                                                    <svg id={product.id} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="red">
                                                                        <path id={product.id} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                                    </svg>
                                                                </button> :
                                                                    <Link href='/login'>
                                                                        <a className="mr-2 bg-gray-100 rounded-full">
                                                                            <svg id="4" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="red">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                                            </svg>
                                                                        </a>
                                                                    </Link>
                                                                }
                                                            </div>
                                                        </Link>
                                                        <div className="px-5 py-3">
                                                            <Link href={'/product/' + product.id}>
                                                                <div>
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
                                                                </div>
                                                            </Link>
                                                            {users?.map(user => {
                                                                if (product.product_owner === user.id && user.avatar) {
                                                                    return (
                                                                        <Link href={'/profile/' + user.id}>
                                                                            <div className="flex items-center justify-start mt-2">
                                                                                <img src={user.avatar} className="rounded-full w-14 h-14" />
                                                                                <p className="ml-3 text-xl text-gray-700">{user.user_name}</p>
                                                                            </div>
                                                                        </Link>
                                                                    )
                                                                } else if (product.product_owner === user.id) {
                                                                    return (
                                                                        <Link href={'/profile/' + user.id}>
                                                                            <div className="flex items-center justify-start mt-2">
                                                                                <div className='bg-gray-800 rounded-full w-14 h-14'>
                                                                                    <p className='mt-3 text-2xl text-center text-gray-200'>{user.user_name[0]}{user.user_name[1]}</p>
                                                                                </div>
                                                                                <p className="ml-3 text-xl text-gray-700">{user.user_name}</p>
                                                                            </div>
                                                                        </Link>
                                                                    )
                                                                }
                                                            })}
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            })}
            <Footer />
        </div>
    )

}

import useResourceProduct from '../hooks/useResourceProducts'
import useResource from '../hooks/useResourceCreateUser'
import { useRouter } from 'next/router'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import useResourceCategory from '../hooks/useResourceCategory'
import Link from 'next/link'
import { useAuth } from '../contexts/auth'
import useResourceFavourite from '../hooks/useResourceFavourites'

export default function category() {
    const { products } = useResourceProduct()
    const { users } = useResource()
    const { categories } = useResourceCategory()
    const { user } = useAuth();
    const { addFavourite, favourites,deleteFavourite } = useResourceFavourite()
    const router = useRouter()
    const { id } = router.query
    const deleteFavorite = (e) => {
        e.preventDefault()
        const value = e.target.id
        console.log(value);
        deleteFavourite(value)
    }
    
   
    return (
        <div className="h-screen">
            <div className="bg-gray-800">
                <NavBar />
            </div>
            <div className="mt-16 mb-32">

                <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {favourites?.map(fav => {
                        if (fav.user == user.id) {
                            return (
                                products?.map(product => {
                                    if (fav.product_favorite === product.id) {
                                        return (

                                            <div className="w-full max-w-sm mx-auto overflow-hidden bg-gray-100 rounded-md shadow-lg cursor-pointer">
                                                <Link href={'/product/' + product.id}>
                                                    <div className="flex items-start justify-end w-full h-56 p-3 bg-cover" style={{ backgroundImage: `url(${product.product_img_1})` }}>
                                                        <button onClick={deleteFavorite} className="mr-2 bg-gray-100 rounded-full">

                                                            <svg id={fav.id} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path  id={fav.id} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                          
                                                        </button> 
                                                          
                                                        
                                                        </div >
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
                                                                            <p className='mt-2 text-2xl text-center text-gray-200'>{user.user_name[0]}{user.user_name[1]}</p>
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
                                }))
                        }
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}
import axios from 'axios'
import useSWR from 'swr'

export const apiUrl = process.env.NEXT_PUBLIC_FAVOURITES_URL;
import { useAuth } from '../contexts/auth'

export default function useResourceFavourite() {

    const { tokens, logout } = useAuth()

    const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource);

    async function fetchResource(apiUrl) {

        try {
            const response = await axios.get(apiUrl);

            return response.data;

        } catch (error) {
            handleError(error);
        }
    }

    async function addFavourite(info) {

        try {
            await axios.post(apiUrl, info, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function deleteFavourite(id) {

        try {
            const url = apiUrl + id;
            await axios.delete(url, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }


    // helper function to handle getting Authorization headers EXACTLY right
    function config() {

        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            }
        }
    }

    function handleError(error) {
        console.error(error);
        // currently just log out on error
        // but a common error will be short lived token expiring
        // STRETCH: refresh the access token when it has expired
        logout();
    }

    return {
        favourites: data,
        error,
        loading: tokens && !error && !data,
        addFavourite,
        deleteFavourite,
    }
}

/* STRETCH
This approach works, but it's not very snappy for the user.
Check the SWR docs to see if you can "optomistically" render updated state while the API response is pending.
*/
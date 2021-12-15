import axios from 'axios'
import useSWR from 'swr'
import { useAuth } from '../contexts/auth'

export const apiUrl = process.env.NEXT_PUBLIC_API_URL_REVIEW;

export default  function useResourceProfile() {

    const { logout } = useAuth()

    const { data, error, mutate } = useSWR([apiUrl], fetchResource)
    async function fetchResource(apiUrl) {

        try {
            const response = await axios.get(apiUrl);

            return response.data;

        } catch (error) {
            handleError(error);
        }
    }



    // const { data,error, mutate } = useSWR([resApiUrl], useResourceFavourite);

    // async function useResourceFavourite(url) {
    //     if (!tokens) {
    //         return;
    //     }

    //     try {
    //         const response1 = await axios.get(url, config());

    //         return response1.data;

    //     } catch (error) {
    //         handleError(error);
    //     }
    // }

    
    async function createResource(info) {

        try {
            await axios.post(apiUrl, info, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function deleteResource(id) {

        try {
            const url = apiUrl + id;
            await axios.delete(url, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function updateResource(resource) {
        // STRETCH
        // Add ability for user to update an existing resource
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
        resources: data,
        error,
        loading: !error && !data,
        createResource,
        deleteResource,
        updateResource,
    }
}
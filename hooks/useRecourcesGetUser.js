import axios from 'axios'
import useSWR from 'swr'

export const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URL;
import { useAuth } from '../contexts/auth'

export default function userResource() {

    const { logout } = useAuth()

    const { data, error, mutate } = useSWR([apiUrl], fetchResource);

    async function fetchResource(url) {
        try {
            const response = await axios.get(url);
            return response.data;            

        } catch (error) {
            handleError(error);
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
        resources1: data,
        error,
        loading: !error,
    }
}

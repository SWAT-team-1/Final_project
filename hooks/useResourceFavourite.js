import axios from 'axios'
import useSWR from 'swr'
import { useAuth } from '../contexts/auth'

export const resApiUrl = process.env.NEXT_PUBLIC_API_URL_FAVOURITE;

export default function useResource1() {

    const { tokens, logout } = useAuth()

    const { data, error, mutate } = useSWR([resApiUrl], fetchResource)
    async function fetchResource(url) {

        if (!tokens) {
            return;
        }

        try {
            const response = await axios.get(url, config());

            return response.data;

        } catch (error) {
            handleError(error);
        }
    }

    return {
        resources1: data,
    }
}


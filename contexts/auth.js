import { createContext, useContext, useState } from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios'
import Router from 'next/router';
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const tokenUrl = baseUrl + 'api/token/';

const AuthContext = createContext();

export function useAuth() {
    const auth = useContext(AuthContext);
    if (!auth) throw new Error('You forgot AuthProvider!');
    return auth;
}

export function AuthProvider(props) {

    const [state, setState] = useState({
        tokens: null,
        user: null,
        login,
        logout,
    });

    async function login(user_email, password) {

        const response = await axios.post(tokenUrl, { user_email, password });

        const decodedAccess = jwt.decode(response.data.access);

        const newState = {
            tokens: response.data,
            user: {
                email: decodedAccess.email,
                username: decodedAccess.username,
                phone_number: decodedAccess.phone_number,
                address: decodedAccess.address,
                avatar: decodedAccess.avatar,
                id: decodedAccess.user_id
            },
        }

        setState(prevState => ({ ...prevState, ...newState }));
        Router.push('/')
    }

    function logout() {
        const newState = {
            tokens: null,
            user: null,
        }
        setState(prevState => ({ ...prevState, ...newState }));
        Router.push('/')
    }

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    );
}
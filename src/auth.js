import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = createContext({});

function AuthProvider({ children }){
    const navigate = useNavigate();

    const initialState = {
        cart: [],
    }
    const [ user, setUser ] = useState(initialState);

    const addToCart = (payload) => {
        setUser({
            ...user,
            cart: [...user.cart, payload]
        });
    };

    const login = ({ username }) =>{
        setUser({ username });
        navigate('/admin')
    }
    
    const logout = () =>{
        setUser(null);
        navigate('/home')
    }

    const auth = { user, login, logout, addToCart};
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const auth = useContext(AuthContext);
    return auth;
}

function AuthRoute(props){
    const auth = useAuth();

    if (!auth.user) {
        return <Navigate to={'/login'}/>
    }
    return props.children;
}

export {
    AuthProvider,
    AuthRoute,
    useAuth,
}
import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { KEY_AUTHOBJ, PAGES } from '../constants';

export const AuthRequire = ({ children }) => {

    const location = useLocation();

    const auth  = JSON.parse(localStorage.getItem(KEY_AUTHOBJ));

    if (!auth?.id) {
        return <Navigate to={PAGES.INDEX} state={{ from: location }}/>
    }
    return children;
}
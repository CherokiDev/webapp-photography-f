import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const { uid } = useSelector(state => state.user)
    return uid ? children : <Redirect to='/login' />
}

export default ProtectedRoute;
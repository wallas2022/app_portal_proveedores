

import { Navigate } from 'react-router-dom'
import { AuthContext } from '../pages/auth/context/AuthContext'
import { useContext } from 'react';

export const PrivateRoute = ({ children }) => {

 const { logged } =  useContext( AuthContext);

    return (logged)
        ? children
        : <Navigate to="/login" replace />    
 }
 


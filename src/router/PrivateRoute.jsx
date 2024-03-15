

import { Navigate } from 'react-router-dom'
import { AuthContext } from '../pages/auth/context/AuthContext'
import { useContext } from 'react';
import { useSelector } from 'react-redux';




export const PrivateRoute = ({ children }) => {

    const actualUsuario = useSelector( state => state.auth)
    console.log("aqui en privadas");
    console.log(actualUsuario);
    return ( actualUsuario.status === 'authenticated')
        ? children
        : <Navigate to="/auth/login" replace />    
  
 }
 


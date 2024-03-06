
import { Navigate } from 'react-router-dom'
import React, { useContext } from 'react'
import { AuthContext } from '../pages/auth/context/AuthContext';


export const PublicRoute = ({children}) => {

  const { logged } =  useContext( AuthContext);
  return  (!logged)
  ? children
  : <Navigate to="/dashboard" /> 
}

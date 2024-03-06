import React from 'react'
import { Route } from 'react-router-dom'
import  LoginForm  from '../LoginForm'
import  RegisterForm  from '../RegisterForm'
import  RecuperarClave  from '../RecuperarClave'

export const PrincipalesPublicasRoute = () => {
  return (
         <>
            <Route path="/registro" element={<LoginForm />} />
            <Route path="/registro" element={<RegisterForm />} />
            <Route path="/recuperar_clave" element={<RecuperarClave />} />
            
        </> 
  )
}

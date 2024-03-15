import { Route, Routes } from "react-router-dom"
import { LoginForm } from "../pages/auth/LoginForm"
import RecuperarClave from "../pages/auth/RecuperarClave"
import { RegisterForm } from "../pages/auth/RegisterForm"
import { ConfirmacionRegistro } from "../pages/auth/ConfirmacionRegistro"


export const PortalPagePublic = () => {
  return (
    <>
    <Routes>
    <Route path="/*" element={<LoginForm />} /> 
        <Route path="login" element={<LoginForm />} />
        <Route path="registro" element={<RegisterForm />} />
        <Route path="confirmacion_registro" element={<ConfirmacionRegistro />} />
        <Route path="recuperar_clave" element={<RecuperarClave />} /> 
    </Routes>    
    </>
  )
}

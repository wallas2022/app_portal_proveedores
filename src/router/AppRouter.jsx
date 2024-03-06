import { Route, Routes } from "react-router-dom";
import { LoginForm } from "../pages/auth/LoginForm";
import  {PortalRouter}  from "./PortalRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import {RegisterForm} from "../pages/auth/RegisterForm";
import RecuperarClave from "../pages/auth/RecuperarClave";



export const AppRouter = () => {
return (
    <>
    
     <Routes>
        
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registro" element={<RegisterForm />} />
        <Route path="/recuperar_clave" element={<RecuperarClave />} />
     


        <Route path="/*" element={<PrivateRoute>
      
            <PortalRouter />

        </PrivateRoute>} />

     


    </Routes></>
)
}
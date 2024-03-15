

import { registerUser, singIn } from "../../providers/endpoints";
import { checkingCredentials, logout, login, registered } from "./authSlice";



export const checkingAuthentication = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() ); 
    }
}
export const startSignIn = ({correo_electronico, password}) => {
    return async( dispatch ) => {
         dispatch(checkingCredentials());
       
       await singIn({correo_electronico, password}).then((result)=>{
     
        //  console.log(result)
    
        if (result.ok){ 
            
           return  dispatch(login(result));
        }
        else {
            localStorage.setItem('isAuthenticated','false')
            localStorage.setItem('userData','')
          return  dispatch(logout(result))
         }
        
       
       }).catch((error)=>{
        const err = error.response
    
        return  dispatch(logout(err));
       });
   
     
    }
}
export const startCreatingUser = (nombres, apellidos,empresa,nit,correo_electronico,password) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials());

        const err = ""
       await registerUser(nombres, apellidos,empresa,nit,correo_electronico,password)
       
        .then((resp)=> {
          
             console.log(resp);
            if( !resp.ok ){
                 const error1 = {ok: resp.ok, errorMessage:  resp.errorMessage.error}
        
                 return dispatch( logout( error1 ) );
            }
          
                 console.log(resp);
                    const  displayName = resp.usuario.nombres + resp.usuario.apellidos
                    const email  = resp.usuario.correo_electronico
                    const id = resp.usuario.id
                    const nit = resp.usuario.nit
                    const nombre_empresa = resp.usuario.nombre_empresa 
                    const payload = {displayName,email,id,nit,nombre_empresa}
                    
                 return  dispatch(registered(payload))

                 }).catch((error) =>{
                    console.log(error);
                    const error1 = {ok: error.ok, errorMessage:  error.errorMessage.error}
                    return dispatch( logout( error1 ) );
                    
                 });

       
        }

}
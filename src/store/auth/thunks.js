import { registerUser, singIn } from "../../providers/endpoints";
import { checkingCredentials, logout, login } from "./";




export const checkingAuthentication = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        
    }
}
export const startSignIn = ({correo_electronico, password}) => {
    return async( dispatch ) => {
        dispatch(checkingCredentials());

        const result = singIn({correo_electronico, password});
        console.log(result);
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );
        dispatch( login( result ));
    }
}
export const startCreatingUser = (nombres, apellidos,empresa,nit,correo_electronico,password) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials());
       const resp = await  registerUser(nombres, apellidos,empresa,nit,correo_electronico,password)
       if ( !resp.ok ) return dispatch( logout( resp.errorMessage ) );

       dispatch( login( id,displayName,email ))
    }

}
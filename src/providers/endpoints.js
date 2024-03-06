import axios from "axios"


export const singIn = async ( { correo_electronico, password})=>{
 
     try {
      const  result = await axios.post('http://localhost:3000/usuarios/login', { correo_electronico, password})
    
            // cambio 
            const { token,usuario} = result.data
             const displayName = result.nombres + ' ' + result.apellidos
             const email = result.correo_electronico
              console.log(result.data.usuario,token)
            //errores
            return { 
                ok:true,
                id,displayName,nombre_empresa,email
            }
    
    } catch (error) {
 
        return {ok: false, errorMessage: error.message}
        
    }
  
    return result

}

export const registerUser = async ( nombres, apellidos,empresa,nit,correo_electronico,password) => {
       const username = nombres + "." +apellidos;
       const nombre_empresa = empresa;
       const telefono = '123456789';
       const celular = '123131313';
       const estado = true;

       const userData = {
        username, // Esto es equivalente a username: username
        password,
        nombres,
        apellidos,
        nit,
        nombre_empresa,
        correo_electronico,
        telefono,
        celular,
        estado
    };
 try {
        result = await axios.post('http://localhost:3000/usuarios/registro',userData)
         .then(response=>{
             // cambio 
             const {id,nombres,apellidos,nombre_empresa} = response.data;
             //errores
             return {
                ok: true,
                id,nombres,apellidos,nombre_empresa
             }
         })
     } catch (error) {
      
         return { ok: false, errorMessage: error.message}
         
     }
}
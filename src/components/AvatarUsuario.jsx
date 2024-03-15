import { Avatar, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"




const AvatarUsuario = () => {
  const [nombresUsuario, setNombresUsuario] = useState('')
  const {actualUsuario} = useSelector( state => state.auth)

  useEffect(()=>{
    const usuario= JSON.parse(localStorage.getItem('userData'))
    console.log(usuario);
    if(usuario){
       setNombresUsuario(usuario['displayName'])
    }
  },[])

  return (
    <div>
      <Stack direction='row'>
        <Avatar name={nombresUsuario} src='#' />
      </Stack>
    </div>
  )
}

export default AvatarUsuario

import { useDispatch, useSelector } from 'react-redux';
import React, { useContext, useEffect, useMemo, useState } from 'react';

import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useForm } from '../../hooks/useForm';
import { checkingAuthentication, startSignIn } from '../../store/auth';




export const LoginForm = () => {
  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();
  const { login } = useContext( AuthContext)

  const isAuthenticating = useMemo( () => status === 'checking', [status]);
  // const onLogin = () =>{
  //   login( 'Walter Rosales ');
  //   navigate('/registro',{ replace: true});
  // }
  const [correo_electronico, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmployee, setIsEmployee] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  

   // Array de URLs de imágenes
   const images = [
    'url("./src/assets/images/fnd_py01.jpg")',
    'url("./src/assets/images/fnd_py02.jpg")',
    'url("./src/assets/images/fnd_py03.jpg")',
    'url("./src/assets/images/fnd_py04.jpg")',
  ];

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex) => (currentImageIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(intervalId);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
     login( 'Walter Rosales ');
    navigate('/dashboard',{ replace: true});
    // Aquí manejarías el envío del formulario
     dispatch( startSignIn({correo_electronico,password}))
    // console.log({ correo_electronico, password, isEmployee });
  };
  let navigate = useNavigate();
  return (
    <Flex
      minHeight="100vh"
      width="full"
      align="center"
      justifyContent="center"
      // backgroundImage={images[currentImageIndex]}
      backgroundColor={"gray.50"}
      backgroundSize="cover"
      transition="background-image 1s ease-in-out" // Añade esta línea para la transición
      sx={{
        // Asegúrate de que el cambio de imagen sea suave
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: images[currentImageIndex],
          backgroundSize: 'cover',
          filter: 'blur(8px)', // Añade un efecto de desenfoque si lo deseas
          zIndex: -1,
        }
      }}
    >
      <Box
        p={8}
        width="full"
        maxWidth="500px"
        borderRadius="lg"
        boxShadow="lg"
        backgroundColor={useColorModeValue('whiteAlpha.800', 'gray.700')}
      >
        <Box lineHeight={1} pb={6} textAlign={"center"}>
         <Heading as='section' pb={5} textAlign={"center"} size="lg" mb="0.2" lineHeight="tight" > Iniciar sesión</Heading>
         <Text mt="-4" lineHeight="short">Portal de proveedores Popoyán</Text>
        </Box>
   
          
        <form 
        onSubmit={handleSubmit}
        >
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Ingresa tu email"
                onChange={(e) => setEmail(e.target.value)}
                value={correo_electronico}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input
                type="password"
                placeholder="Ingresa tu contraseña"
            
                required
                aria-required="true"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
               
               
              />
            </FormControl>
            <Checkbox isChecked={isEmployee} onChange={(e) => setIsEmployee(e.target.checked)}>
              ¿Empleado?
            </Checkbox>
            <Stack spacing={6}>
              <Button
                type="submit"
                disabled= { isAuthenticating }
                colorScheme="green"
              >
                Iniciar sesión
              </Button>
              <Button
                variant="outline"
                colorScheme="green"
                onClick={() =>{ navigate('/registro') }  }
              >
                Registro
              </Button>
            </Stack>
            <Link color="teal.500" href="#" onClick={() => navigate('/recuperar_clave')}  textAlign={"center"} >
              Se me olvidó la contraseña
            </Link>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};



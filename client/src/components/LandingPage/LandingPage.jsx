import React from "react";
import { Link } from "react-router-dom";
import { Box,  Text, Button, Flex,  } from "@chakra-ui/react";
//import count from "../../img/pases.jpg";
import { Player } from '@lottiefiles/react-lottie-player';
import "../fonts.css";

export default function LandingPage() {
  return (
    
    <Box display= "flex"
  background="linear-gradient(to right, yellow, #9E9E9E)"
  minHeight="100vh"
  height= {{base:"100vh", md: "100%"}} width= {{base: "130vh", md:"100%"}}
>
    <Box display= "flex"
    height= {{base:"100vh", md: "100%"}} width= {{base: "130vh", md:"100%"}} 
     //backgroundColor= "yellow" 
     marginTop= {{base:"-5rem", md: "-5rem"}}>
     
     
 <Flex flexDirection={{ base: "column", md: "row" }}>
  <Box
  
  height= {{base:"100vh"}}width= {{base: "100vh", md:"100%"}} 
    marginTop= "4rem"
  marginLeft= "1rem" padding= "4rem">
  <Player 
        src= 'https://assets6.lottiefiles.com/private_files/lf30_ahlkj7sh.json'
        className="player"
        loop
        autoplay
      />
  </Box>
  <Box>
  <Box width= "60%"
    textAlign= "center"
    marginTop={{ base: "-10rem", md: "5rem" }}
    marginLeft={{ base: "10rem", md: "10px" }}
  >
    <Text
      fontSize={{ base: "54px", md: "35px" }}
      color="black"
      fontWeight="bold"
      fontFamily="Pacifico"
      
      
    >
      Bienvenidos a
    </Text>

    <Text
      fontSize={{ base: "100px", md: "120px" }}
      color= {{base: "black", md: "black"}}
      fontWeight="bold"
      fontFamily="Pacifico"
      textAlign= "center"
      
    >
      Países!
    </Text>
  </Box>

  <Box
    textAlign={{ base: "center", md: "justify" }}
    marginLeft={{ base: "0px", md: "0" }}
    marginTop={{ base: "0px", md: "0px" }}
    
  >
    <Box color="black" width={{ base: "100%", md: "60%" }} fontSize= "16px"
   
    marginTop= {{base: "0rem", md:"3rem"}}>
    <Text 

    fontStyle= "italic">
      Países es una app que te permitirá ver la descripción de cada País, en la
      cual podremos ver su bandera, su población, su capital, su región, y muchas
      cosas mas. No solo eso, sino que también nos permitirá agregar actividades
      turísticas de cada país en particular.
    </Text>
    <br />
    <Link to={"/Home"}>
  <Button 
    size={{ base: "sm", md: "lg" }} 
    colorScheme="white" 
    _hover={{
      fontSize: "70px",
      opacity: "0.9",
      boxShadow: "0 10px 20px rgba(0,0,0,0.3)", // Agregamos una sombra
      transform: "translateY(-5px)", // Hacemos que el botón se levante un poco al pasar el cursor
      background: "linear-gradient(to right, #FFDAB9, #FFA07A)" // Agregamos un gradiente de color al fondo
    }}
    marginLeft= {{base: "35rem", md: "7rem"}}
    marginTop= {{base: "-20rem", md: "0rem"}}
    boxShadow="x4" 
    padding={{ base: "5px", md: "5px" }} 
    borderRadius= "15px"
    borderColor="blue"
    backgroundColor= "blue.700"
    color="black"
    transition="all 0.3s ease-in-out" // Agregamos una transición suave
  >
    <Text
      fontSize={{ base: "35px", md: "35px" }}
      fontFamily="monospace"
      fontWeight= "extrabold"
    >
      Ingresar
    </Text>
  </Button>
</Link>
    </Box>
  </Box>
  </Box>
  </Flex>

  

</Box>
</Box>

  )}





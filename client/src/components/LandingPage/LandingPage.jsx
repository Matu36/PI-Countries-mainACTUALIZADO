import React from "react";
import { Link } from "react-router-dom";
import { Box,  Text, Button,  } from "@chakra-ui/react";
import count from "../../img/pais.jpg";
import "../fonts.css";

export default function LandingPage() {
  return (
    <Box
  display="flex"
  flexDirection={{ base: "column", md: "column" }}
  alignItems="center"
  justifyContent="center"
  height={{ base: "100vh", md: "100vh" }}
   backgroundImage={count}
  //backgroundSize="cover"
  backgroundPosition={{ base: "center", md: "left" }}
  //backgroundAttachment="fixed"
  backgroundSize={{base: "100% 100%", md:"100% 100%"}}
  filter="contrast(100%)"
  backgroundRepeat="no-repeat"
  width={{base: "100vh", md: "217vh"}}
  
>
  <Box
    textAlign= "center"
    marginTop={{ base: "30px", md: "0" }}
    marginLeft={{ base: "350px", md: "450px" }}
  >
    <Text
      fontSize={{ base: "54px", md: "24px" }}
      color="black"
      fontWeight="bold"
      fontFamily="Pacifico"
      
      
    >
      Bienvenidos a
    </Text>

    <Text
      fontSize={{ base: "100px", md: "100px" }}
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
    marginLeft={{ base: "500px", md: "650px" }}
    marginTop={{ base: "0px", md: "0px" }}
    
  >
    <Text color="black" width={{ base: "70%", md: "60%" }} fontSize= "13px"

    fontStyle= "italic">
      Países es una app que te permitirá ver la descripción de cada País, en la
      cual podremos ver su bandera, su población, su capital, su región, y muchas
      cosas mas. No solo eso, sino que también nos permitirá agregar actividades
      turísticas de cada país en particular.
    </Text>
  </Box>

  <Box marginTop={{ base: "180px", md: "40px" }} marginLeft={{ base: "450px", md: "650px" }}>
    <Link to={"/Home"}>
      <Button size={{ base: "lg", md: "xl" }} colorScheme="black" _hover={{
    fontSize: "70px",
    opacity: "0.4",
  }}boxShadow="x4" padding={{ base: "5px", md: "5px" }} borderRadius= "15px">
        <Text
        color= "black"
          fontSize={{ base: "45px", md: "35px" }}
          fontFamily="fantasy"
          fontWeight="bold"
        >
          Ingresar
        </Text>
      </Button>
    </Link>
  </Box>

</Box>
  )}
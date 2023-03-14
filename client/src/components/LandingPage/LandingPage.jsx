import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/soyhenry.png";
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import Paises from "../../img/Paises.jpg";
import "../fonts.css";

export default function LandingPage() {
  return (
    <Box
  display="flex"
  flexDirection={{ base: "column", md: "column" }}
  alignItems="center"
  justifyContent="center"
  height={{ base: "100vh", md: "100vh" }}
  backgroundImage={Paises}
  backgroundSize="cover"
  backgroundPosition={{ base: "center right", md: "center center" }}
  backgroundAttachment="fixed"
  filter="contrast(100%)"
>
  <Box
    textAlign= "center"
    marginTop={{ base: "150", md: "-80px" }}
    marginLeft={{ base: "100px", md: "650px" }}
  >
    <Text
      fontSize={{ base: "34px", md: "24px" }}
      color="black"
      fontWeight="bold"
      fontFamily="Pacifico"
      
      
    >
      Bienvenidos a
    </Text>

    <Text
      fontSize={{ base: "100px", md: "100px" }}
      color="black"
      fontWeight="bold"
      fontFamily="Pacifico"
      
    >
      Países!
    </Text>
  </Box>

  <Box
    textAlign={{ base: "center", md: "justify" }}
    marginLeft={{ base: "200px", md: "670px" }}
    marginTop={{ base: "0px", md: "60px" }}
    
  >
    <Text color="black" width={{ base: "70%", md: "95%" }} fontSize= "13px"

    fontStyle= "italic">
      Países es una app que te permitirá ver la descripción de cada País, en la
      cual podremos ver su bandera, su población, su capital, su región, y muchas
      cosas mas. No solo eso, sino que también nos permitirá agregar actividades
      turísticas de cada país en particular.
    </Text>
  </Box>

  <Box marginTop={{ base: "20px", md: "20px" }} marginLeft={{ base: "100px", md: "650px" }}>
    <Link to={"/Home"}>
      <Button size={{ base: "md", md: "xl" }} colorScheme="yellow" _hover={{
    fontSize: "70px",
    opacity: "0.4",
  }}boxShadow="x4" padding={{ base: "5px", md: "5px" }} borderRadius= "15px">
        <Text
          fontSize={{ base: "18px", md: "35px" }}
          fontFamily="fantasy"
          fontWeight="bold"
        >
          Ingresar
        </Text>
      </Button>
    </Link>
  </Box>
<Flex>
  <Box 
    position={{ base: "relative", md: "absolute" }}
    bottom={{ base: "-60px", md: "0" }}
    left={{ base: "210px", md: "unset" }}
    right={{ base: "0px", md: "20px" }}
    textAlign={{ base: "center", md: "right" }}
    marginTop={{ base: "20px", md: "280px" }}
  >
   
    
    <Text color="black"> Creado Por Matías Pineda</Text>
    </Box>
    <Box position="fixed" bottom="0px" right="210px">
    <Image marginBottom= "0"
    marginLeft= "600px"
    width="25px" height="25px" src={logo} alt="logo" />
  </Box>
  </Flex>
</Box>
  )}
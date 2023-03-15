import React from "react";
import style from "../NavBar/NavBar.module.css";
import { Link } from "react-router-dom";
import { Text, Box, Button, Image, Flex } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <div className= {style.Nav}>
      <Link className = {style.link} to="/">
        <h2 className= {style.h2}> Países</h2>
      </Link>
      <div>
        <Link className = {style.link} to="/create">
          <Button mt={6} 
          size="lg" 
          colorScheme="yellow"
          marginTop={{base: "2px", md: "2px"}}
          marginLeft={{base: "70", md: "-400px"}}  title="Crear Actividad" tertiary>
            <span>Crear Actividad</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

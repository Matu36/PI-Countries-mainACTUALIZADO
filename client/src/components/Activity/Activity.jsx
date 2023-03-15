import React from "react";
import style from "../Activity/Activity.module.css"
import { Text, Box, Button, Image, Flex } from "@chakra-ui/react";

export default function Activity({ name, difficulty, duration, seasson }) {
  return (
    <div className= {style.dive}>
      <h2 className= {style.spane}>Nombre: </h2>
      <Text fontSize= "20px" color= "black">{name}</Text>
      <div>
        <span className= {style.spane}>Dificultad: </span>
        <Text fontSize= "20px" color= "black">{difficulty}</Text>
      </div>
      <div>
        <span className= {style.spane}>Duración: </span>
        <Text fontSize= "20px" color= "black">{duration} Días </Text>
      </div>
      <div>
        <span className= {style.spane}>Temporada: </span>
        <Text fontSize= "20px" color= "black">{seasson}</Text>
      </div>
    </div>
  );
}



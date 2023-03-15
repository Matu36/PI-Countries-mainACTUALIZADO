import style from "../Country/Country.module.css";
import { Link } from "react-router-dom";
import { Box, Image, Flex } from "@chakra-ui/react";

export default function Country({ id, name, flags, continent }) {
  return (
    <Box
    marginLeft={{base: 0, md: "30px"}}
    width="150px"
    height="150px"
    
    borderWidth="10px"
    borderRadius="2g"
    overflow="hidden"
    boxShadow="lg"
    transition="all 0.2s ease-in-out"
    _hover={{
      transform: "scale(1.05)",
      boxShadow: "xl",
    }}
    borderColor="gray.300" /* Agregar borde sólido */
  backgroundColor="gray.200"
  >
      <Link className = {style.link} to={`/home/detail/${id}`}>
        <img className= {style.flags} src={flags} alt="flag" />
        <div className= {style.data}>
          <h2 className= {style.h222}>{name}</h2>
          <p className= {style.par}>
            <span className= {style.spa}>Continente: </span>{continent} <br />
          </p>
        </div>
      </Link>
    </Box>
  );
}

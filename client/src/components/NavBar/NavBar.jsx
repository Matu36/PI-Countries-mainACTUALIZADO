import React from "react";
import style from "../NavBar/NavBar.module.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <div className={style.Nav}>
      <Link className={style.link} to="/">
        <h2 className={style.h2}> Países</h2>
      </Link>
      <div>
        <Link className={style.link} to="/create">
          <Button
            mt={6}
            size="md"
            colorScheme="gray"
            borderRadius="8px"
            borderWidth="2px"
            borderColor="gray.300"
            bg="white"
            color="gray.700"
            _hover={{
              bg: "gray.100",
              color: "gray.800",
            }}
            marginTop={{ base: "2px", md: "20px" }}
            marginLeft={{ base: "0px", md: "-400px" }}
            title="Crear Actividad"
            tertiary
          >
            <span>Crear Actividad</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

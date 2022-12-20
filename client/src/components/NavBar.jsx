import React from "react";
import { LinkTo } from "../styles/Link";
import { Nav } from "../styles/Nav";
import { Button } from "../styles/Button";
import { IoMdCreate } from "react-icons/io";

export default function NavBar() {
  return (
    <Nav>
      <LinkTo to="/">
        <h2>Countries App</h2>
      </LinkTo>
      <div>
        <LinkTo to="/create">
          <Button title="Crear Actividad" tertiary>
            <IoMdCreate />
            <span>Crear Actividad</span>
          </Button>
        </LinkTo>
      </div>
    </Nav>
  );
}

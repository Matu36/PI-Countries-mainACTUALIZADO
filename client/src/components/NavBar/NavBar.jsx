import React from "react";
import style from "../NavBar/NavBar.module.css";
import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <div className= {style.Nav}>
      <Link className = {style.link} to="/">
        <h2 className= {style.h2}> Países</h2>
      </Link>
      <div>
        <Link className = {style.link} to="/create">
          <button className= {style.button} title="Crear Actividad" tertiary>
            <span>Crear Actividad</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

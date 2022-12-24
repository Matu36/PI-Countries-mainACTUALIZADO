import React from "react";
import style from "../NavBar/NavBar.module.css";
import { Link } from "react-router-dom";
import { IoMdCreate } from "react-icons/io";


export default function NavBar() {
  return (
    <div className= {style.Nav}>
      <Link className = {style.link} to="/">
        <h2 className= {style.h2}> Países</h2>
      </Link>
      <div>
        <Link className = {style.link} to="/create">
          <button className= {style.button} title="Crear Actividad" tertiary>
            <IoMdCreate />
            <span>Crear Actividad</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

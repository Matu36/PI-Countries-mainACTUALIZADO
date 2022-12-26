import React from "react";
import style from "../Activity/Activity.module.css"

export default function Activity({ name, difficulty, duration, seasson }) {
  return (
    <div className= {style.dive}>
      <h2 className= {style.h22}>Nombre: {name}</h2>
      <div>
        <span className= {style.spane}>Dificultad: </span>
        {difficulty}
      </div>
      <div>
        <span className= {style.spane}>Duración: </span>
        {duration} Días
      </div>
      <div>
        <span className= {style.spane}>Temporada: </span>
        {seasson}
      </div>
    </div>
  );
}



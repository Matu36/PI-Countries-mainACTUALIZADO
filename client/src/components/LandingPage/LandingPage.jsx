import React from "react";
import { Link } from "react-router-dom";
import style from "../LandingPage/LandingPage.module.css";
import GLOBO from "../../img/GLOBO.png";
import logo from "../../img/soyhenry.png";

export default function LandingPage () {
    return (
        
        <div class= {style.container}>

<img src={GLOBO} alt="GLOBO" />

<h1 className = {style.title}>Bienvenidos a la App de Paises!</h1>



<p className= {style.paragraph}> Países es una app que te permitirá ver la descripción de cada
    País, en la cual podremos ver su bandera, su población, su capital, su región, y
    muchas cosas mas. No solo eso, sino que también nos permitirá agregar actividades
    turísticas de cada país en particular.
</p>
<Link to= {"/Home"}>
<button className={style.button}>Ingresar</button>
</Link>

<h4 className= {style.creador}> Creado Por Matías Pineda</h4>
<img className= {style.logo}  src={logo} alt="logo" />
        
        </div>
        
    )
}
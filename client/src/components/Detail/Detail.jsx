import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Activity from "../Activity/Activity";
import { Link, useParams } from "react-router-dom";
import { getCountryById } from "../../actions/index";
import {SpinningCircles   } from 'react-loading-icons';
import style from "../Detail/Detail.module.css";
import BACK from "../../img/BBUTTON.PNG";
import { Text } from "@chakra-ui/react";

//El useParams podemos reemplazarlo por props.match.params.id (se usa cuando la info 
//viene por params)

export default function Detail() {
  const { id } = useParams();         // devuelve un objeto con los parametros de la url
  const dispatch = useDispatch();
  const { country } = useSelector((state) => state);  // obtengo datos del estado global
  const [loader, setLoader] = useState(true);         // en esta caso del Id del pais.
  useEffect(() => {
    setLoader(true);
    dispatch(getCountryById(id));
    const timer = setTimeout(() => {   // timer para que se use el loader
      setLoader(false);
    }, 1000);

    return () => clearTimeout(timer);  // cancela el timer
  }, [dispatch, id]);                  // se ejecuta cuando cambia el dispatch o el id

  return (
    <div className= {style.container}>
      {loader ? (
        <SpinningCircles  className= {style.sCircles} />
      ) : (
        country?.name && (                   // si existe el nombre del pais se ejecuta
          <div>
            <div className= {style.top}>
              <Link to="/home">
                <img className ={style.imgbackbutton}src= {BACK} alt= "back"/>
              </Link>
              <div>
                <Text align= "right"  color= "black" fontSize= "20px" fontWeight="bold">{country.name}</Text>
                <img className = {style.img} src={country.flags} width="100px" alt={country.name} />
              </div>
            </div>
            <hr />
            <div className= {style.content}>
              <div className= {style.info}>
                <Text fontSize={{base: "14px", md: "36px"}} fontWeight="extrabold"> Características</Text>
                <hr />
                <div>
                  <span className= {style.span}>Continente: </span> 
                  <Text fontSize= "20px" color= "black">{country.continent} </Text>
                </div>
                <div>
                  <span className={style.span}>Capital: </span>
                  <Text fontSize= "20px" color= "black"> {country.capital}</Text>
                </div>
                <div>
                  <span className={style.span}>Subregion: </span>
                  <Text fontSize= "20px" color= "black">{country.subregion}</Text>
                </div>
                <div>
                  <span className= {style.span}>Área: </span>
                  <Text fontSize= "20px" color= "black">{country.area?.toLocaleString()} km² </Text>
                </div>
                <div>
                  <span className= {style.span}>Habitantes: </span>
                  <Text fontSize= "20px" color= "black">{country.population?.toLocaleString()}  </Text>
                </div>
              </div>
              <div className= {style.act}>
              <Text fontSize={{base: "14px", md: "36px"}} fontWeight="extrabold"> Actividades</Text>
                <hr />
                <div className= {style.adiv}>
                  {country.activities?.length > 0 ? (
                    country.activities?.map((activity, index) => (
                      <Activity
                        key={index}
                        name={activity.name}
                        difficulty={activity.difficulty}
                        duration={activity.duration}
                        seasson={activity.seasson}
                      />
                    ))
                  ) : (
                    <Text fontSize= "20px" color= "black">No se encontraron actividades</Text>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      )}
      {country?.message && (
        <div>
          <h1>{country.message}</h1>
          <Link to="/home">
            <button secondary>Regresar</button>
          </Link>
        </div>
      )}
    </div>
  );
}


//toLocaleString => convierte un numero en un string con separadores de miles
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Activity from "../Activity/Activity";
import { Link, useParams } from "react-router-dom";
import { getCountryById } from "../../actions/index";
import {SpinningCircles   } from 'react-loading-icons';
import style from "../Detail/Detail.module.css";
import BACK from "../../img/BBUTTON.PNG";



export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { country } = useSelector((state) => state);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(true);
    dispatch(getCountryById(id));
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch, id]);

  return (
    <div className= {style.container}>
      {loader ? (
        <SpinningCircles  className= {style.sCircles} />
      ) : (
        country?.name && (
          <div>
            <div className= {style.top}>
              <Link to="/home">
                <img className ={style.imgbackbutton}src= {BACK} alt= "back"/>
              </Link>
              <div>
                <h2>{country.name}</h2>
                <img className = {style.img} src={country.flags} width="100px" alt={country.name} />
              </div>
            </div>
            <hr />
            <div className= {style.content}>
              <div className= {style.info}>
                <h1 className= {style.names}> Características</h1>
                <hr />
                <div>
                  <span className= {style.span}>Continente: </span> {country.continent}
                </div>
                <div>
                  <span className={style.span}>Capital: </span>
                  {country.capital}
                </div>
                <div>
                  <span className={style.span}>Subregion: </span>
                  {country.subregion}
                </div>
                <div>
                  <span className= {style.span}>Área: </span>
                  {country.area?.toLocaleString()} km²
                </div>
                <div>
                  <span className= {style.span}>Habitantes: </span>
                  {country.population?.toLocaleString()}
                </div>
              </div>
              <div className= {style.act}>
                <h1 className= {style.names}>Actividades</h1>
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
                    <h3>No se encontraron actividades</h3>
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

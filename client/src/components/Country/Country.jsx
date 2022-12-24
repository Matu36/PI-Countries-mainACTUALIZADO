import style from "../Country/Country.module.css";
import { Link } from "react-router-dom";

export default function Country({ id, name, flags, continent }) {
  return (
    <div className= {style.Countrys}>
      <Link to={`/home/detail/${id}`}>
        <img className= {style.flags} src={flags} alt="flag" />
        <div className= {style.data}>
          <h2 className= {style.h222}>{name}</h2>
          <p className= {style.par}>
            <span className= {style.spa}>Continente</span> : {continent} <br />
          </p>
        </div>
      </Link>
    </div>
  );
}

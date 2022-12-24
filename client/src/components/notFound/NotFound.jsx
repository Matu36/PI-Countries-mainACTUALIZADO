import notFound from "../../img/404.svg"
import style from "../notFound/notFound.module.css";
import Back from "../../img/BBUTTON.PNG";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className= {style.container}>
      <div className= {style.content}>
        <Link to="/home">
          <img className = {style.btn} src={Back} alt="ATRAS" />
        </Link>
        <div>
        <img className = {style.img} src={notFound} alt="Page Not found" />
        </div>
        <div className= {style.top}>
          <h2>Página no encontrada</h2>
        </div>
      </div>
    </div>
  );
}

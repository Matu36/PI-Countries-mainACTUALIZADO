import style from "../Filters/Filters.module.css";
export default function Filters({
  activities,
  handleOrdered,
  handleFilterContinent,
  handleFilterActivity,
}) {
  return (
    <div className={style.containerr}>
      <select className={style.select} onChange={handleFilterContinent}>
        <option value="All">Todos los Continentes</option>
        <option value="Asia">Asia</option>
        <option value="South America">Sudamérica</option>
        <option value="North America">NorteAmérica</option>
        <option value="Oceania">Ocenia</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europa</option>
      </select>
      <select className={style.select} onChange={handleOrdered}>
        <option value="">Seleccione orden</option>
        <option value="Asc">Nombre Asc</option>
        <option value="Desc">Nombre Desc</option>
        <option value="Min">Población Asc</option>
        <option value="Max">Población Desc</option>
      </select>

      <select className={style.select} onChange={handleFilterActivity}>
        <option value="All">Actividades</option>
        {activities?.map((activity, index) => (
          <option key={index} value={activity.name}>
            {activity.name}
          </option>
        ))}
      </select>
    </div>
  );
}

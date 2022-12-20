import { Filter } from "../styles/Filters";
export default function Filters({
  activities,
  handleOrdered,
  handleFilterContinent,
  handleFilterActivity,
}) {
  return (
    <Filter>
      <select onChange={handleFilterContinent}>
        <option value="All">All</option>
        <option value="Asia">Asia</option>
        <option value="South America">South America</option>
        <option value="North America">North America</option>
        <option value="Oceania">Ocenia</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
      </select>
      <select onChange={handleOrdered}>
        <option value="">Seleccione orden</option>
        <option value="Asc">Nombre Asc</option>
        <option value="Desc">Nombre Desc</option>
        <option value="Min">Población Asc</option>
        <option value="Max">Población Desc</option>
      </select>

      <select onChange={handleFilterActivity}>
        <option value="All">Todas</option>
        {activities?.map((activity, index) => (
          <option key={index} value={activity.name}>
            {activity.name}
          </option>
        ))}
      </select>
    </Filter>
  );
}

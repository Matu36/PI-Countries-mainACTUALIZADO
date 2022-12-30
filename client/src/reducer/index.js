import {
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  SET_CURRENT_PAGE,
  ORDER_COUNTRIES,
  GET_ALL_ACTIVITY,
  CREATE_ACTIVITY,
} from "../actions/types";

const initialState = {
  countries: [],          // => array que se va modificando
  allCountries: [],       // => Todos los paises
  country: [],            // => Pais por id
  allActivity: [],        // => Todas las actividades
  page: 1,                // => Pagina actual
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: payload,
        allCountries: payload,
      };

    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        country: payload,
      };
      case CREATE_ACTIVITY:
        return {
          ...state,
        };
    case GET_ALL_ACTIVITY:
      return {
        ...state,
        allActivity: payload,
      };
    case FILTER_BY_CONTINENT:
      const allCountries = state.allCountries;  // => Todos los paises
      const continentFilter =
        payload === "All"    // => Si el payload es "All" => Todos los paises
          ? allCountries
          : allCountries.filter((country) => 
          country.continent === payload);   // => Si el payload es 
                                            //"America" => Filtrar por America;
        return {
        ...state,
        countries: continentFilter,           // => array que se va modificando
      };

    case FILTER_BY_ACTIVITY:
      const allCountriesActivity = state.allCountries;   // => traigo Todos los paises
      const activityFilter =
        payload === "All"            // => si el payload es "All" => todas las actividades
          ? allCountriesActivity.filter(
              (country) => country.activities.length > 0
            )
          : allCountriesActivity.filter(
              (country) =>
                //  si existe actividades && mapeo las
                // actividades y usamos include para validar
                // que exista el payload dentro del array
                country.activities &&
                country.activities.map((act) => act.name).includes(payload)
            );

      return {
        ...state,
        countries: activityFilter,
      };

    case ORDER_COUNTRIES:
      let ordered = state.countries;

      payload === "Asc" &&
        ordered.sort((a, b) => {
        return a.name.localeCompare(b.name);  // => Ordena alfabeticamente
                                              // => LocaleCompare compara dos cadenas
        });
      payload === "Desc" &&                   
        ordered.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      payload === "Max" &&                       // => Ordena por poblacion
        ordered.sort((a, b) => {
          return b.population - a.population;
        });
      payload === "Min" &&
        ordered.sort((a, b) => {
          return a.population - b.population;
        });

      return {
        ...state,
        countries: ordered,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: payload,
      };
    default:
      return { ...state };
  }
}
export default rootReducer;

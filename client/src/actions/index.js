import axios from "axios";
import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  GET_ALL_ACTIVITY,
  CREATE_ACTIVITY,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  SET_CURRENT_PAGE,
  ORDER_COUNTRIES,
  //DELETE_COUNTRY
} from "./types";


//Traigo los paises por nombre desde el back
export const getAllCountries = (name) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/countries?name=${name ? name : ""}`)
      .then((response) => {
        return dispatch({
          type: GET_ALL_COUNTRIES,
          payload: response.data,
        });
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
};


//Traigo los paises por id desde el back
export const getCountryById = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/countries/${id}`)
      .then((data) => data.json())
      .then((response) => {
        return dispatch({
          type: GET_COUNTRY_BY_ID,
          payload: response,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

/*export const deleteCountry = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete ( `http://Localhost:3001/countriesDel/${id}`)
      return dispatch({
        type: DELETE_COUNTRY,
      })
    } catch (error) {
      console.log (error)
    }
    }
  }
*/
  
//Traigo las actividades desde el back
export const getAllActivity = () => {
  return (dispatch) => {
    axios.get(`http://localhost:3001/activities`).then((response) => {
      return dispatch({
        type: GET_ALL_ACTIVITY,
        payload: response.data,
      });
    });
  };
};


//Creo una actividad en la ruta post del back
export const createActivity = (activity) => {
  return async (dispatch) => {
    try {
      await axios.post(`http://localhost:3001/activity`, activity);
      return dispatch({
        type: CREATE_ACTIVITY,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//Filtro por continente
export const filterCountryByContinent = (payload) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload,
  };
};

//Filtro por actividad
export const filterCountryByActivity = (payload) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload,
  };
};


//Ordeno los paises
export const orderCountries = (payload) => {
  return {
    type: ORDER_COUNTRIES,
    payload,
  };
};


//Paginado
export const setCurrentPage = (payload) => {
  return {
    type: SET_CURRENT_PAGE,
    payload,
  };
};

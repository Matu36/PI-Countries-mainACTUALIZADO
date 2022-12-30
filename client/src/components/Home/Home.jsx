import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../Home/Home.module.css";
import {
  getAllCountries,
  filterCountryByContinent,
  orderCountries,
  filterCountryByActivity,
  getAllActivity,
  setCurrentPage,
} from "../../actions/index";
import Country from "../Country/Country";
import Paged from "../Paged/Paged";
import Filters from "../Filters/Filters";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar.jsx"
import PageNotFound from "../../img/PageNotFound.jpg";
import {SpinningCircles } from 'react-loading-icons';

export default function Home() {
  const dispatch = useDispatch();
  const { countries, page, allActivity } = useSelector((state) => state); 
  const [loader, setLoader] = useState(true);
  const [filters, setFilters] = useState(false);
  const [, setOrder] = useState();
  let countriesPerPage = 10;
  const indexOfLastCountry = page * countriesPerPage - 1; // 1 * 10 - 1 = 9
  const indexOfFirstCountry =
    page === 1
      ? indexOfLastCountry - (countriesPerPage - 1)  // 9 - (10-1) = 0
      : indexOfLastCountry - countriesPerPage; // 9 - (10-1) = 0 | 19 - 10 = 9 | 29 - 10 = 19
  const currentCountries = countries.slice(          // [0,1,2,3,4,5,6,7,8,9]
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const timer = (time) =>
    setTimeout(() => {
      setLoader(false);
    }, time);

  useEffect(() => {
    setLoader(true);
    dispatch(getAllActivity());
    timer(1000);
    dispatch(getAllCountries());

    return () => clearTimeout(timer);
  }, [dispatch]);

  const handleFilterContinent = (e) => {
    e.preventDefault();
    dispatch(filterCountryByContinent(e.target.value));
    dispatch(setCurrentPage(1));
    setOrder(e.target.value);
  };

  const handleFilterActivity = (e) => {
    e.preventDefault();
    dispatch(filterCountryByActivity(e.target.value));
    setOrder(e.target.value);
  };

  const handleOrdered = (e) => {
    e.preventDefault();
    dispatch(orderCountries(e.target.value));
    setOrder(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setLoader(true);
    dispatch(getAllCountries());
    dispatch(setCurrentPage(1));
    timer(500);
  };

  return (
    <div className= {style.container}>
      <NavBar handleClick={handleClick} />
      <SearchBar />
      <div>
        <button className= {style.buttonsf} title="Filtros" 
        primary onClick={() => setFilters(!filters)}>
        <span>Filtros</span>
        </button>
        <button className= {style.buttonsc} secondary onClick={handleClick}>
          <span>Cargar Paises</span>
        </button>
      </div>
      {filters && (
        <Filters
          activities={allActivity}
          handleClick={handleClick}
          handleOrdered={handleOrdered}
          handleFilterContinent={handleFilterContinent}
          handleFilterActivity={handleFilterActivity}
        />
      )}
      <Paged countriesPerPage={countriesPerPage} />
      <div className= {style.countries}>
        {loader ? (
          <SpinningCircles className= {style.sCircles}/>
        ) : (
          (countries.length > 0 &&
            currentCountries?.map((country, index) => (
              <Country
                key={index}
                id={country.id}
                name={country.name}
                flags={country.flags}
                continent={country.continent}
              />
            ))) || (
              <div className= {style.notFound}>
              <img src={PageNotFound} alt="no Results" />
              <h2>No se encontraron resultados</h2>
            </div>
          )
        )}
      </div>
    </div>
  );
}

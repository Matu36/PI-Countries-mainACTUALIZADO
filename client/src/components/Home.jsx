import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  filterCountryByContinent,
  orderCountries,
  filterCountryByActivity,
  getAllActivity,
  setCurrentPage,
} from "../../src/actions";
import Country from "./Country";
import Paged from "./Paged";
import Filters from "./Filters";
import { Button } from "../styles/Button";
import NavBar from "./NavBar";
import Loader from "./Loader";
import SearchBar from "./SearchBar";
import noResults from "../img/noResults.svg"
import { ContainerHome, Countries, Btns, NoResult } from "../styles/Home";

export default function Home() {
  const dispatch = useDispatch();
  const { countries, page, allActivity } = useSelector((state) => state);
  const [loader, setLoader] = useState(true);
  const [filters, setFilters] = useState(false);
  const [, setOrder] = useState();
  let countriesPerPage = 10;
  const indexOfLastCountry = page * countriesPerPage - 1; // 1 * 10 -1 = 9 | 2 * 10 -1 = 19 | 3 * 10 -1 = 29
  const indexOfFirstCountry =
    page === 1
      ? indexOfLastCountry - (countriesPerPage - 1)
      : indexOfLastCountry - countriesPerPage; // 9 - (10-1) = 0 | 19 - 10 = 9 | 29 - 10 = 19
  const currentCountries = countries.slice(
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
    <ContainerHome>
      <NavBar handleClick={handleClick} />
      <SearchBar />
      <Btns>
        <Button title="Filtros" primary onClick={() => setFilters(!filters)}>
          <FaFilter /> <span>Filters</span>
        </Button>
        <Button secondary onClick={handleClick}>
          <IoReload />
          <span>Cargar Paises</span>
        </Button>
      </Btns>
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
      <Countries>
        {loader ? (
          <Loader />
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
            <NoResult>
              <img src={noResults} alt="no Results" />
              <h2>No se encontraron resultados</h2>
            </NoResult>
          )
        )}
      </Countries>
    </ContainerHome>
  );
}

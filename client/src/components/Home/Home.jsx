import React, { useState } from "react"; //Estados Locales
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
import SearchBar from "../SearchBar/SearchBar.jsx";
import PageNotFound from "../../img/PageNotFound.jpg";
import { SpinningCircles } from "react-loading-icons";
import { Button } from "@chakra-ui/react";

export default function Home() {
  const dispatch = useDispatch();
  const { countries, page, allActivity } = useSelector((state) => state);
  const [loader, setLoader] = useState(true);
  const [filters, setFilters] = useState(false); // Estado para mostrar u ocultar filtros
  const [, setOrder] = useState(); // Estado para ordenar por nombre o población

  let countriesPerPage = 10;
  const indexOfLastCountry = page * countriesPerPage - 1; // 1 * 10 - 1 = 9
  const indexOfFirstCountry =
    page === 1
      ? indexOfLastCountry - (countriesPerPage - 1) // 9 - (10-1) = 0
      : indexOfLastCountry - countriesPerPage; // 9 - (10-1) = 0 | 19 - 10 = 9 | 29 - 10 = 19
  const currentCountries = countries.slice(
    // [0,1,2,3,4,5,6,7,8,9]
    indexOfFirstCountry,
    indexOfLastCountry
  );

  //el metodo slice extrae elementos de un array y devuelve un nuevo array

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
    // Filtro por continente
    e.preventDefault();
    dispatch(filterCountryByContinent(e.target.value));
    dispatch(setCurrentPage(1));
    setOrder(e.target.value);
  };

  const handleFilterActivity = (e) => {
    e.preventDefault();
    dispatch(filterCountryByActivity(e.target.value));
    setOrder(e.target.value); // ordeno por actividad
  };

  const handleOrdered = (e) => {
    //Ordenar por nombre asc o desc o población
    e.preventDefault();
    dispatch(orderCountries(e.target.value));
    setOrder(e.target.value);
  };

  const handleClick = (e) => {
    // Cargar Países
    e.preventDefault();
    setLoader(true);
    dispatch(getAllCountries());
    dispatch(setCurrentPage(1));
    timer(500);
  };

  return (
    <div className={style.container}>
      <NavBar handleClick={handleClick} />
      <SearchBar />
      <div>
        <Button
          mt={6}
          size="md"
          colorScheme="gray"
          borderRadius="8px"
          borderWidth="2px"
          borderColor="gray.300"
          marginLeft="60px"
          bg="white"
          color="gray.700"
          _hover={{
            bg: "gray.100",
            color: "gray.800",
          }}
          onClick={() => setFilters(!filters)}
        >
          <span>Filtros</span>
        </Button>
      </div>
      <div>
        <Button
          mt={6}
          size="md"
          colorScheme="gray"
          borderRadius="8px"
          borderWidth="2px"
          borderColor="gray.300"
          bg="white"
          color="gray.700"
          _hover={{
            bg: "gray.100",
            color: "gray.800",
          }}
          marginTop={{ base: "-75px", md: "-338px" }}
          marginLeft={{ base: "200", md: "400px" }}
          secondary
          onClick={handleClick}
        >
          <span>Cargar Paises</span>
        </Button>
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

      <div className={style.countries}>
        {loader ? (
          <SpinningCircles className={style.sCircles} />
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
            <div className={style.notFound}>
              <img src={PageNotFound} alt="no Results" />
              <h2>No se encontraron resultados</h2>
            </div>
          )
        )}
        <Paged countriesPerPage={countriesPerPage} />
      </div>
    </div>
  );
}

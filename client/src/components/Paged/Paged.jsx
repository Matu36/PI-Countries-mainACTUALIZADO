import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../actions";
import style from "../Paged/Paged.module.css";
import { FiArrowLeft, FiArrowRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";


export default function Paged({ countriesPerPage }) {  //exportado a home
  const dispatch = useDispatch();
  const { countries, page } = useSelector((state) => state);

  const pageCountries = [];
  // Método actualizador del estado glabal de la página
  const changePage = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));  
  };

  // Método para calcular el número de páginas (250 / 10 = 25)

  for (let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++) {
    pageCountries.push(i);
  }

  return (
    <div className= {style.pn}>
      {pageCountries.length > 1 && (
        <div className= {style.pn}>
          <button className= {style.button} onClick={() => changePage(1)} disabled={page === 1}> 
            <FiChevronsLeft />
          </button>
          <button className= {style.button} onClick={() => changePage(page - 1)} disabled={page === 1}>
            <FiArrowLeft />
          </button>
          <span className= {style.spanpn}>
            Página {page} 
          </span>
          <button className= {style.button}
            onClick={() => changePage(page + 1)}
            disabled={page >= pageCountries.length}
          >
            <FiArrowRight />
          </button>
          <button className= {style.button}
            onClick={() => changePage(pageCountries.length)}
            disabled={page >= pageCountries.length}
          >
            <FiChevronsRight />
          </button>
        </div>
      )}
      <div className= {style.container}>
        {pageCountries?.map((page) => (
          <span className = {style.spancontain} onClick={() => changePage(page)} key={page}>
            {page}
          </span>
        ))}
      </div>
    </div>
  );
}

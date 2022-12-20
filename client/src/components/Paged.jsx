import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../actions";
import { ContainerPage, PrevNext, BtnPaged } from "../styles/Paged";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiFirstPage, BiLastPage } from "react-icons/bi";

export default function Paged({ countriesPerPage }) {
  const dispatch = useDispatch();
  const { countries, page } = useSelector((state) => state);

  const pageCountries = [];
  // Método actualizador del estado glabal de la página
  const changePage = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  // Método para calcular el número de páginas

  for (let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++) {
    pageCountries.push(i);
  }

  return (
    <div>
      {pageCountries.length > 1 && (
        <PrevNext>
          <BtnPaged onClick={() => changePage(1)} disabled={page === 1}>
            <BiFirstPage />
          </BtnPaged>
          <BtnPaged onClick={() => changePage(page - 1)} disabled={page === 1}>
            <IoIosArrowBack />
          </BtnPaged>
          <span>
            Página {page} de {pageCountries.length}
          </span>
          <BtnPaged
            onClick={() => changePage(page + 1)}
            disabled={page >= pageCountries.length}
          >
            <IoIosArrowForward />
          </BtnPaged>
          <BtnPaged
            onClick={() => changePage(pageCountries.length)}
            disabled={page >= pageCountries.length}
          >
            <BiLastPage />
          </BtnPaged>
        </PrevNext>
      )}
      <ContainerPage>
        {pageCountries?.map((page) => (
          <span onClick={() => changePage(page)} key={page}>
            {page}
          </span>
        ))}
      </ContainerPage>
    </div>
  );
}

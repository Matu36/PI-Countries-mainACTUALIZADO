import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FcSearch } from "react-icons/fc";
import { getAllCountries } from "../../actions/index";
import style from "../SearchBar/SearchBar.module.css"

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    e.preventDefault();
    // dispatch(getAllCountries(e.target.value));
    setSearch(e.target.value)
  };

  const handleOnClick = (e) => {
    e.preventDefault();

    if (!search) {
      alert("Ingresar nombre del País");
    } else {
      dispatch(getAllCountries(search));
      setSearch("");
    }
  };

  return (
  
    <div>
      <form className = {style.form} onSubmit={handleOnClick}>
        <FcSearch className= {style.FcSearch} onClick={handleOnClick} />
        <input className= {style.input}
          type="text"
          placeholder="Buscar País"
          onChange={handleOnChange}
          value={search}
          autoComplete="off"
        />
      </form>
    </div>
  );
}

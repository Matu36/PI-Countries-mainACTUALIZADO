import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Search, IconSearch } from "../styles/SearchBar";
import { getAllCountries } from "../../src/actions";

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
      <Search onSubmit={handleOnClick}>
        <IconSearch onClick={handleOnClick} />
        <input
          type="text"
          placeholder="Buscar País"
          onChange={handleOnChange}
          value={search}
          autoComplete="off"
        />
      </Search>
    </div>
  );
}

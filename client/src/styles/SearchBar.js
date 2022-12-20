import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const Search = styled.form`
  background-color: var(--text-color);
  display: flex;
  align-items: center;
  padding: 0.3rem 0.5rem;
  margin: 1rem 0;
  font-size: 1.2em;
  height: 2.5rem;
  border-radius: 0.75rem;

  input {
    border: none;
    outline: none;
    margin-right: 0.5rem;
    width: 100%;
    height: 100%;
    border-radius: 0.75rem;
    padding: 7px 10px;
    font-size: 1rem;
    font-family: "Quicksand", sans-serif;
  }
`;
export const IconSearch = styled(FaSearch)`
  margin: 0 0.5rem;
  font-size: 1.2rem;
  color: var(--main-color);
  :hover {
    cursor: pointer;
  }
`;

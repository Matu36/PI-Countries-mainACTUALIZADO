import styled from "styled-components";

export const Filter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  select {
    width: 100%;
    cursor: pointer;
    padding: 7px 10px;
    outline: none;
    border: none;
    background: #f0f0f0;
    font-size: 1em;
    margin: 0.1rem 0;
    color: var(--background-color);
    font-family: "Quicksand", sans-serif;
    border: 2px solid rgba(145, 145, 233, 0.5);
    border-radius: 0.75rem;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: 2.5rem;

    select {
      margin: 0;
      width: 240px;
    }
  }
`;

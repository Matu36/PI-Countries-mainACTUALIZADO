import React from "react";
import styled from "styled-components";

export default function Activity({ name, difficulty, duration, seasson }) {
  return (
    <Activities>
      <h2>{name}</h2>
      <div>
        <span>Dificultad</span>
        {difficulty}
      </div>
      <div>
        <span>Duración</span>
        {duration} Días
      </div>
      <div>
        <span>Temporada</span>
        {seasson}
      </div>
    </Activities>
  );
}

const Activities = styled.div`
  h2 {
    margin: 0.3rem 0;
  }
  width: 100%;
  div {
    margin: 0.4rem 0;
    display: flex;
    justify-content: space-between;
  }
  border: 1px solid var(--border-color);

  span {
    color: #fff2ee;
    font-size: 1rem;
    margin: 0;
    font-weight: bold;
  }
`;

import styled from "styled-components";

export const Countries = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  padding: 1rem 0;
  h2 {
    color: var(--text-color);
  }
`;

export const NoResult = styled.div`
  border-radius: 1rem;
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  padding: 1.5rem 1rem;
  text-align: center;
  img {
    width: 100%;
  }
`;
export const ContainerHome = styled.div`
  padding: 1rem;
  min-height: 100vh;
  background-image: url('../img/FONDO.jpg')
`;

export const Btns = styled.div`
  display: flex;
  justify-content: space-between;
`;

import styled from "styled-components";

export const ContainerPage = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1rem 0;

    span {
      backdrop-filter: blur(16px) saturate(180%);
      background-color: rgba(17, 25, 40, 0.75);
      font-weight: bold;
      color: var(--text-color);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      border-radius: 0.4rem;
      margin: 0.2rem;
      min-width: 2rem;
      padding: 0 0.3rem;
      height: 2rem;
      text-decoration: none;
      cursor: pointer;
    }

    span:hover {
      background-color: #ff8906;
      color: #fff;
    }
  }
`;

export const PrevNext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  width: 100%;
  background-color: rgba(17, 25, 40, 0.75);
  padding: 0.4rem;
  border-radius: 1rem;
  span {
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--text-color);
    width: 100%;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;

export const BtnPaged = styled.button`
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 0.4rem;
  margin: 0.2rem;
  min-width: 2rem;
  padding: 0 0.3rem;
  height: 2rem;
  border-style: hidden;
  cursor: pointer;

  :hover {
    background-color: #ff8906;
    color: #fff;
  }

  :disabled {
    background-color: #ffb35c;
  }
`;

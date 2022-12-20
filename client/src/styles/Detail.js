import styled from "styled-components";
import { Button } from "../styles/Button";
import { IoIosArrowDropleftCircle } from "react-icons/io";

export const Container = styled.div`
  padding: 0.5rem 1.5rem;
  color: var(--text-color);
  min-height: 100vh;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const BackBtn = styled(IoIosArrowDropleftCircle)`
  color: var(--text-color);
  font-size: 2.3rem;
`;

export const Info = styled.div`
  font-size: 1rem;
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  width: 100%;
  padding: 1.3rem;
  border-right: 1px solid var(--border-color);

  @media (min-width: 768px) {
    width: 40%;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
    font-size: 1rem;
    font-weight: normal;
  }
  span {
    color: #fff2ee;
    font-size: 1rem;
    margin: 0;
    font-weight: bold;
  }
`;

export const Activities = styled.div`
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 1rem;
  width: 100%;
  padding: 1.3rem;

  h3 {
    text-align: left;
    margin: 1rem 0;
  }

  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const ActDiv = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 1.5rem;

  @media (min-width: 500px) {
    flex-wrap: nowrap;
  }
`;

export const BtnDetail = styled(Button)``;

export const TopDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    display: none;
  }

  div {
    display: flex;
    align-items: center;
  }

  @media (min-width: 500px) {
    img {
      display: block;
      margin: 0.4rem;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
    }
  }
`;

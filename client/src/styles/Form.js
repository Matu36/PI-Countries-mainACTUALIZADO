import styled from "styled-components";
import { Button } from "../styles/Button";

export const FormContainer = styled.form`
  padding: 1rem;
  min-height: 100vh;
  color: var(--text-color);
  h1 {
    color: var(--text-color);
  }
`;

export const BtnForm = styled(Button)`
  width: 100%;
  margin: 1rem 0;
`;

export const Country = styled.div`
  margin: 0.5rem 0;
  font-size: 1rem;
  background: rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(10px);
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  img {
    width: 1.5rem;
    cursor: pointer;
  }
`;

export const InputLabel = styled.div`
  font-size: 1.2rem;
  width: 100%;
  p {
    margin: 1rem 0;
    font-weight: bold;
    font-size: 1rem;
  }
`;

export const Radio = styled.div`
  width: 100%;
  display: flex;
  font-size: 1rem;
  flex-direction: column;
  input {
    margin: 0.5rem;
  }

  @media (min-width: 650px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
export const Top = styled.div`
  display: inline;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  flex-wrap: wrap;
  align-items: center;
  border-radius: 1rem;
  padding: 2rem 2rem 1rem 2rem;
  margin: auto;
  max-width: 600px;
  div {
    width: 100%;
  }
`;

export const Select = styled.select`
  cursor: pointer;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  background: #f0f0f0;
  font-size: 1rem;
  color: var(--background-color);
  font-family: "Quicksand", sans-serif;
  border-radius: 0.4rem;
  width: 100%;
`;
export const InputText = styled.input`
  border: none;
  outline: none;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-family: "Quicksand", sans-serif;
  width: 100%;
`;

export const Error = styled.p`
  color: #f86c7f;
  font-size: 1rem;
  margin: 0.5rem 0;
`;

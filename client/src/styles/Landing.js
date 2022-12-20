import styled from "styled-components";
import { Button } from "./Button";

export const LandingSec = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  padding: 1rem;
  overflow-y: hidden;
`;

export const Title = styled.div`
  h1 {
    font-size: 2.5rem;
    color: #fffffe;
  }
  h2 {
    color: #ff8906;
  }
`;

export const Btn = styled(Button)`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 1rem;
  padding: 1.5rem;
  max-width: 500px;
  text-align: justify;
  p {
    margin: 2rem 0;
    color: var(--text-color);
  }
`;

export const Reference = styled.a`
  text-decoration: none;
  margin: 0 0.3rem;
  color: var(--secondary);
`;

import styled from "styled-components";
import { LinkTo } from "../styles/Link";

export const PageNotFound = styled.div`
  color: var(--text-color);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
`;

export const TopNotFound = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 1rem;
  img {
    width: 100%;
    margin: 1.2rem 0;
  }
`;

export const LinkBack = styled(LinkTo)`
  position: absolute;
  left: 1rem;
  top: 1rem;
`;

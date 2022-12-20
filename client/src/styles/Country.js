import styled from "styled-components";
import { LinkTo } from "../styles/Link";

export const CountryContainer = styled.div`
  width: 285px;
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 1rem;
  transition: all 0.3s 0s ease;
  img {
    width: 100%;
    height: 180px;
    border-radius: 1rem 1rem 0 0;
  }

  :hover {
    transform: translate(0, -10px);
  }
`;

export const Details = styled(LinkTo)`
  color: var(--text-color);
`;

export const Info = styled.div`
  margin-top: 0;
  padding: 1rem;
  border-radius: 0 0 1rem 1rem;

  height: 150px;
  h2 {
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.1rem;
    font-weight: normal;
    span {
      font-weight: bold;
    }
  }
`;

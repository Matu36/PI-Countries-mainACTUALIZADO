import { CountryContainer, Details, Info } from "../styles/Country";
export default function Country({ id, name, flags, continent }) {
  return (
    <CountryContainer>
      <Details to={`/home/detail/${id}`}>
        <img src={flags} alt="flag" />
        <Info>
          <h2>{name}</h2>
          <p>
            <span>Continente</span> : {continent} <br />
          </p>
        </Info>
      </Details>
    </CountryContainer>
  );
}

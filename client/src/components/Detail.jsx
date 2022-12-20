import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Activity from "./Activity";
import { Link, useParams } from "react-router-dom";
import { getCountryById } from "../actions";
import { LinkTo } from "../styles/Link";
import { Button } from "../styles/Button";
import Loader from "./Loader";

import {
  Container,
  Content,
  Info,
  Activities,
  ActDiv,
  BackBtn,
  TopDetail,
} from "../styles/Detail";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { country } = useSelector((state) => state);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(true);
    dispatch(getCountryById(id));
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch, id]);

  return (
    <Container>
      {loader ? (
        <Loader />
      ) : (
        country?.name && (
          <div>
            <TopDetail>
              <Link to="/home">
                <BackBtn />
              </Link>
              <div>
                <h2>{country.name}</h2>
                <img src={country.flags} width="100px" alt={country.name} />
              </div>
            </TopDetail>
            <hr />
            <Content>
              <Info>
                <h1>Detalle</h1>
                <hr />
                <div>
                  <span>Contiente</span> {country.continent}
                </div>
                <div>
                  <span>Capital</span>
                  {country.capital}
                </div>
                <div>
                  <span>Subregion</span>
                  {country.subregion}
                </div>
                <div>
                  <span>Área</span>
                  {country.area?.toLocaleString()} km²
                </div>
                <div>
                  <span>Habitantes</span>
                  {country.population?.toLocaleString()}
                </div>
              </Info>
              <Activities>
                <h1>Actividades</h1>
                <hr />
                <ActDiv>
                  {country.activities?.length > 0 ? (
                    country.activities?.map((activity, index) => (
                      <Activity
                        key={index}
                        name={activity.name}
                        difficulty={activity.difficulty}
                        duration={activity.duration}
                        seasson={activity.seasson}
                      />
                    ))
                  ) : (
                    <h3>No hay actividades para este país</h3>
                  )}
                </ActDiv>
              </Activities>
            </Content>
          </div>
        )
      )}
      {country?.message && (
        <div>
          <h1>{country.message}</h1>
          <LinkTo to="/home">
            <Button secondary>Regresar</Button>
          </LinkTo>
        </div>
      )}
    </Container>
  );
}

import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import trash from "../img/trash.png";
import { Link } from "react-router-dom";
import {
  createActivity,
  getAllCountries,
  getAllActivity,
  orderCountries,
} from "../actions";

import { BackBtn } from "../styles/Detail";
import {
  FormContainer,
  Country,
  InputLabel,
  Top,
  Content,
  Select,
  InputText,
  BtnForm,
  Error,
  Radio,
} from "../styles/Form";

import { validate } from "../utils/validation";

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useHistory();
  const { countries, allActivity } = useSelector((state) => state);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllActivity());
    const timer = setTimeout(() => {
      dispatch(orderCountries("Asc"));
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    seasson: "",
    countries: [],
  });

  const arrActivities = allActivity.map((x) => x.name);

  const handleOnChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({ ...activity, [e.target.name]: e.target.value }, arrActivities)
    );
  };

  const handleSelect = (e) => {
    if (activity.countries.includes(e.target.value)) {
      alert("El pais ya esta seleccionado");
    } else {
      setActivity({
        ...activity,
        countries: [...activity.countries, e.target.value],
      });

      setErrors(
        validate(
          {
            ...activity,
            countries: [...activity.countries, e.target.value],
          },
          arrActivities
        )
      );
    }
  };
  const handleCheck = (e) => {
    if (e.target.checked) {
      setActivity({
        ...activity,
        [e.target.name]: e.target.value,
      });
    }
    setErrors(
      validate(
        {
          ...activity,
          [e.target.name]: e.target.value,
        },
        arrActivities
      )
    );
  };

  const handleDelete = (country) => {
    setActivity({
      ...activity,
      countries: activity.countries.filter((ctry) => ctry !== country),
    });
    setErrors(
      validate(
        {
          ...activity,
          countries: activity.countries.filter((ctry) => ctry !== country),
        },
        arrActivities
      )
    );
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      activity.name &&
      activity.difficulty &&
      activity.duration &&
      activity.seasson &&
      activity.countries.length &&
      !Object.keys(errors).length
    ) {
      dispatch(createActivity(activity));
      alert("Actividad creada");
      setActivity({
        name: "",
        difficulty: "",
        duration: "",
        seasson: "",
        countries: [],
      });
      navigate("/home");
    } else {
      alert("Por favor, complete los campos o revise los errores");
    }
  };

  return (
    <FormContainer onSubmit={handleOnSubmit}>
      <Top>
        <Link to="/home">
          <BackBtn title="Regresar" secondary></BackBtn>
        </Link>
      </Top>
      <Content>
        <h1>Actividad</h1>
        <div>
          <InputLabel>
            <p>País</p>
            <Select name="countries" onChange={handleSelect}>
              <option value="">Seleccionar País</option>
              {countries.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </Select>
            {errors.countries && <Error>{errors.countries}</Error>}
            <div>
              {activity.countries.map((country, index) => (
                <Country key={index}>
                  {country}
                  <img
                    src={trash}
                    alt="trash"
                    onClick={() => handleDelete(country)}
                  />
                </Country>
              ))}
            </div>
          </InputLabel>
        </div>
        <div>
          <InputLabel>
            <p>Nombre</p>
            <InputText
              type="text"
              name="name"
              value={activity.name}
              autoComplete="off"
              placeholder="Nombre de actividad"
              onChange={handleOnChange}
            />
            {errors.name && <Error>{errors.name}</Error>}
          </InputLabel>
        </div>
        <div>
          <InputLabel>
            <p>Duración</p>
            <InputText
              type="number"
              name="duration"
              value={activity.duration}
              autoComplete="off"
              placeholder="Duración en días"
              onChange={handleOnChange}
            />

            {errors.duration && <Error>{errors.duration}</Error>}
          </InputLabel>
        </div>

        <div>
          <InputLabel>
            <p>Dificultad</p>
            <Radio>
              <div>
                <input
                  type="radio"
                  name="difficulty"
                  value="1"
                  onChange={handleCheck}
                />
                Muy fácil
              </div>
              <div>
                <input
                  type="radio"
                  name="difficulty"
                  value="2"
                  onChange={handleCheck}
                />
                Fácil
              </div>
              <div>
                <input
                  type="radio"
                  name="difficulty"
                  value="3"
                  onChange={handleCheck}
                />
                Medio
              </div>
              <div>
                <input
                  type="radio"
                  name="difficulty"
                  value="4"
                  onChange={handleCheck}
                />
                Difícil
              </div>
              <div>
                <input
                  type="radio"
                  name="difficulty"
                  value="5"
                  onChange={handleCheck}
                />
                Muy difícil
              </div>
            </Radio>
            {errors.difficulty && <Error>{errors.difficulty}</Error>}
          </InputLabel>
        </div>
        <div>
          <InputLabel>
            <p>Temporada</p>
            <Radio>
              <div>
                <input
                  type="radio"
                  name="seasson"
                  value="Verano"
                  onChange={handleCheck}
                />
                Verano
              </div>
              <div>
                <input
                  type="radio"
                  name="seasson"
                  value="Otoño"
                  onChange={handleCheck}
                />
                Otoño
              </div>
              <div>
                <input
                  type="radio"
                  name="seasson"
                  value="Invierno"
                  onChange={handleCheck}
                />
                Invierno
              </div>
              <div>
                <input
                  type="radio"
                  name="seasson"
                  value="Primavera"
                  onChange={handleCheck}
                />
                Primavera
              </div>
            </Radio>
            {errors.seasson && <Error>{errors.seasson}</Error>}
          </InputLabel>
        </div>
        <div>
          <BtnForm type="submit" tertiary>
            Guardar
          </BtnForm>
        </div>
      </Content>
    </FormContainer>
  );
}

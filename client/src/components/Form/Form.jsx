import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import trash from "../../img/trash.png";
import { Link } from "react-router-dom";
import {
  createActivity,
  getAllCountries,
  getAllActivity,
  orderCountries,
} from "../../actions/index";
import style from "../Form/form.module.css";
import bbuton from "../../img/BBUTTON.PNG";
import { Box, Text, Image } from "@chakra-ui/react";
import { MdArrowBackIos } from "react-icons/md";
import Turistico from "../../img/Turistico.png";

const validate = (activity, activities = []) => {
  let errors = {};
  //trim son los caracteres sin contenido; espacios en blanco.
  if (!activity.name.trim()) {
    errors.name = "Campo obligatorio";
  } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(activity.name)) {
    errors.name = "El nombre de la actividad debe contener solo letras";
  } else if (activities.includes(activity.name.trim())) {
    errors.name = "Actividad existente";
  }
  if (!activity.difficulty) errors.difficulty = "Campo obligatorio";
  if (!activity.duration) errors.duration = "Campo obligatorio";
  if (parseInt(activity.duration) < 1 || parseInt(activity.duration) > 30)
    // convierte string en numero
    errors.duration = "La duración debe ser mayor a 0 y menor que 30";
  if (!activity.seasson) errors.seasson = "Campo obligatorio";
  if (activity.countries.length === 0) errors.countries = "Campo obligatorio";

  return errors;
};

export default function Form() {
  const dispatch = useDispatch();
  const history = useHistory();
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

  const arrActivities = allActivity.map((x) => x.name); // array de actividades por nombre
  // para validar que no se repitan
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
        countries: [...activity.countries, e.target.value], // agrega el pais al array
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
      // si esta seleccionado lo agrega al array
      setActivity({
        ...activity,
        [e.target.name]: e.target.value,
      });
    }
    setErrors(
      validate(
        {
          ...activity,
          [e.target.name]: e.target.value, // si no esta seleccionado lo elimina del array
        },
        arrActivities // array de actividades para validar que no se repitan
      )
    );
  };

  const handleDelete = (country) => {
    setActivity({
      ...activity,
      countries: activity.countries.filter((ctry) => ctry !== country), // elimina el pais del array
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
      !Object.keys(errors).length // si no hay errores
    ) {
      dispatch(createActivity(activity)); // crea la actividad
      alert("Actividad creada");
      setActivity({
        name: "",
        difficulty: "",
        duration: "",
        seasson: "",
        countries: [],
      });
      history.push("/home"); //redirecciona a home si se crea la actividad
    } else {
      alert("Por favor, complete los campos o revise los errores");
    }
  };

  return (
    <form className={style.container} onSubmit={handleOnSubmit}>
      <Link to="/home">
        <MdArrowBackIos className={style.bbuton} src={bbuton} alt="ATRAS" />
      </Link>
      <Box display="flex" marginTop="4rem">
        <Image src={Turistico} />
      </Box>
      <Box display="flex" justifyContent="space-around">
        <Box
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={{ base: "flex-start", md: "center" }}
          marginTop={{ base: "-2rem", md: "0" }}
          marginLeft={{ base: "1rem", md: "1rem" }}
          padding="20px"
        >
          <Box marginTop="50px">
            <label className={style.label}>
              <Text fontSize="20px" fontWeight="extrabold" marginBottom="5px">
                País
              </Text>
              <select
                className={style.select}
                name="countries"
                onChange={handleSelect}
              >
                <option value="">Seleccionar País</option>
                {countries.map((country, index) => (
                  <option key={index} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.countries && (
                <div className={style.Error}>{errors.countries}</div>
              )}
              <div>
                {activity.countries.map((country, index) => (
                  <div className={style.country} key={index}>
                    {country}
                    <img
                      className={style.trash}
                      src={trash}
                      alt="trash"
                      onClick={() => handleDelete(country)}
                    />
                  </div>
                ))}
              </div>
            </label>
          </Box>
          <div>
            <label className={style.label}>
              <Text marginBottom="5px" fontSize="20px" fontWeight="extrabold">
                Nombre
              </Text>
              <input
                className={style.input}
                type="text"
                name="name"
                value={activity.name}
                autoComplete="off"
                placeholder="Nombre de actividad"
                onChange={handleOnChange}
              />
              {errors.name && <div className={style.Error}>{errors.name}</div>}
            </label>
          </div>
          <div>
            <label className={style.label}>
              <Text marginBottom="5px" fontSize="20px" fontWeight="extrabold">
                Duración
              </Text>
              <input
                className={style.input}
                type="number"
                name="duration"
                value={activity.duration}
                autoComplete="off"
                placeholder=" en días"
                onChange={handleOnChange}
              />

              {errors.duration && (
                <div className={style.Error}>{errors.duration}</div>
              )}
            </label>
          </div>

          <div>
            <label className={style.label}>
              <Text marginBottom="5px" fontSize="20px" fontWeight="extrabold">
                Dificultad
              </Text>
              <div className={style.radio}>
                <Box
                  fontSize={{ base: "10px", md: "16px" }}
                  marginBottom="15px"
                >
                  <input
                    className={style.rinput}
                    type="radio"
                    name="difficulty"
                    value="1"
                    onChange={handleCheck}
                  />
                  Muy baja
                </Box>

                <Box fontSize={{ base: "10px", md: "16px" }}>
                  <input
                    className={style.rinput}
                    type="radio"
                    name="difficulty"
                    value="2"
                    onChange={handleCheck}
                  />
                  baja
                </Box>
                <Box fontSize={{ base: "10px", md: "16px" }}>
                  <input
                    className={style.rinput}
                    type="radio"
                    name="difficulty"
                    value="3"
                    onChange={handleCheck}
                  />
                  Media
                </Box>
                <Box fontSize={{ base: "10px", md: "16px" }}>
                  <input
                    className={style.rinput}
                    type="radio"
                    name="difficulty"
                    value="4"
                    onChange={handleCheck}
                  />
                  alta
                </Box>
                <Box fontSize={{ base: "10px", md: "16px" }}>
                  <input
                    className={style.rinput}
                    type="radio"
                    name="difficulty"
                    value="5"
                    onChange={handleCheck}
                  />
                  Muy alta
                </Box>
              </div>
              {errors.difficulty && (
                <div className={style.Error}>{errors.difficulty}</div>
              )}
            </label>
          </div>
          <div>
            <label className={style.label}>
              <Text marginBottom="5px" fontSize="20px" fontWeight="extrabold">
                Temporada
              </Text>
              <div className={style.radio}>
                <Box fontSize={{ base: "10px", md: "16px" }}>
                  <input
                    className={style.rinput}
                    type="radio"
                    name="seasson"
                    value="Verano"
                    onChange={handleCheck}
                  />
                  Verano
                </Box>
                <Box fontSize={{ base: "10px", md: "16px" }}>
                  <input
                    className={style.rinput}
                    t
                    type="radio"
                    name="seasson"
                    value="Otoño"
                    onChange={handleCheck}
                  />
                  Otoño
                </Box>
                <Box fontSize={{ base: "10px", md: "16px" }}>
                  <input
                    className={style.rinput}
                    type="radio"
                    name="seasson"
                    value="Invierno"
                    onChange={handleCheck}
                  />
                  Invierno
                </Box>
                <Box fontSize={{ base: "10px", md: "16px" }}>
                  <input
                    className={style.rinput}
                    type="radio"
                    name="seasson"
                    value="Primavera"
                    onChange={handleCheck}
                  />
                  Primavera
                </Box>
              </div>
              {errors.seasson && (
                <div className={style.Error}>{errors.seasson}</div>
              )}
            </label>
          </div>

          <button className={style.btn} type="submit" tertiary>
            Crear Actividad
          </button>
        </Box>
      </Box>
    </form>
  );
}

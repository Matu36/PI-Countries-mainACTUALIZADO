import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import trash from "../../img/trash.png"
import { Link } from "react-router-dom";
import {
  createActivity,
  getAllCountries,
  getAllActivity,
  orderCountries,
} from "../../actions/index";
import style from "../Form/form.module.css"
import bbuton from "../../img/BBUTTON.PNG";
import Globo from "../../img/TOURIST.PNG";

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
    errors.duration = "La duración debe ser mayor a 0 y menor que 30";
  if (!activity.seasson) errors.seasson = "Campo obligatorio";
  if (activity.countries.length === 0)
    errors.countries = "Campo obligatorio";

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
      history.push("/home");
    } else {
      alert("Por favor, complete los campos o revise los errores");
    }
  };

  return (
    <form className= {style.container} onSubmit={handleOnSubmit}>
      <Link to="/home">
          <img className = {style.bbuton} src={bbuton} alt="ATRAS" />
        </Link>
        <img className = {style.globo}src={Globo} alt="Globo" />
      <div className= {style.content}>
        <h1 className= {style.h1}> Actividad turística</h1>
        <div>
          <label className= {style.label}>
            <p>País</p>
            <select className= {style.select} name="countries" onChange={handleSelect}>
              <option value="">Seleccionar País</option>
              {countries.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            {errors.countries && <div className= {style.Error}>{errors.countries}</div>}
            <div>
              {activity.countries.map((country, index) => (
                <div className= {style.country} key={index}>
                  {country}
                  <img className= {style.trash}
                    src={trash}
                    alt="trash"
                    onClick={() => handleDelete(country)}
                  />
                </div>
              ))}
            </div>
          </label>
        </div>
        <div>
          <label className= {style.label}>
            <p>Nombre</p>
            <input className= {style.input}
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
          <label className= {style.label}>
            <p>Duración</p>
            <input className= {style.input}
              type="number"
              name="duration"
              value={activity.duration}
              autoComplete="off"
              placeholder=" en días"
              onChange={handleOnChange}
            />

            {errors.duration && <div className = {style.Error}>{errors.duration}</div>}
          </label>
        </div>

        <div>
          <label className= {style.label}>
            <p>Dificultad</p>
            <div className= {style.radio}>
              <div>
                <input className= {style.rinput}
                  type="radio"
                  name="difficulty"
                  value="1"
                  onChange={handleCheck}
                />
                Muy baja
              </div>
              <div>
                <input className= {style.rinput}
                  type="radio"
                  name="difficulty"
                  value="2"
                  onChange={handleCheck}
                />
                baja
              </div>
              <div>
                <input className= {style.rinput}
                  type="radio"
                  name="difficulty"
                  value="3"
                  onChange={handleCheck}
                />
                Media
              </div>
              <div>
                <input className= {style.rinput}
                  type="radio"
                  name="difficulty"
                  value="4"
                  onChange={handleCheck}
                />
                alta
              </div>
              <div>
                <input className= {style.rinput}
                  type="radio"
                  name="difficulty"
                  value="5"
                  onChange={handleCheck}
                />
                Muy alta
              </div>
            </div>
            {errors.difficulty && <div className={style.Error}>{errors.difficulty}</div>}
          </label>
        </div>
        <div>
          <label className= {style.label}>
            <p>Temporada</p>
            <div className= {style.radio}>
              <div>
                <input className= {style.rinput}
                  type="radio"
                  name="seasson"
                  value="Verano"
                  onChange={handleCheck}
                />
                Verano
              </div>
              <div>
                <input className= {style.rinput}t
                  type="radio"
                  name="seasson"
                  value="Otoño"
                  onChange={handleCheck}
                />
                Otoño
              </div>
              <div>
                <input className= {style.rinput}
                  type="radio"
                  name="seasson"
                  value="Invierno"
                  onChange={handleCheck}
                />
                Invierno
              </div>
              <div>
                <input className= {style.rinput}
                  type="radio"
                  name="seasson"
                  value="Primavera"
                  onChange={handleCheck}
                />
                Primavera
              </div>
            </div>
            {errors.seasson && <div className={style.Error}>{errors.seasson}</div>}
          </label>
        </div>
        <div>
          <button className= {style.btn} type="submit" tertiary>
            Crear Actividad
          </button>
        </div>
      </div>
    </form>
  );
}

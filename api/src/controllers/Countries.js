//Traigo los modelos creados desde la DataBase
//Traigo el operador de sequelize
//Traogp axios para cargar datos de la api a mi base de datos
const {Country, Tourist} = require ("../db");
const {Op} = require ('sequelize');
const axios = require ("axios");


//Para ver las tablas creadas pgAdmin VIEWEDITDATA /ALLROWS
//luego la funcion de la api debe llamarse en el index (async function)


//Cargamos la data de la api a la base de datos
const getApi = async () => {
  try {
    let countries = (await axios.get("https://restcountries.com/v3/all")).data;
      countries = await Promise.all(
      countries.map((c) => {
        Country.findOrCreate({
          where: {
            id: c.cca3,
            name: c.name.common,
            flags: c.flags[1],
            continent: c.continents[0],
            capital: c.capital ? c.capital[0] : "Capital no encontrada",
            subregion: c.subregion ? c.subregion : "Subregion no encontrada",
            area: c.area,
            population: c.population,
          },
        });
      })
    );
   
    return "Database cargada";
  } catch (error) {
    return error;
  }
};


//Traemos la data de nuestra base de datos
const getAllCountries = async () => {
  const countries = await Country.findAll({
    attributes: [
      "id",
      "name",
      "flags",
      "continent",
      "population",
      "capital",
      "subregion",
      "area",
    ],
    include: Tourist,
  });
  return countries;
};

//Obtenemos los paises por nombre
const getCountryByName = async (name) => {
  const country = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,   //operador like nombre similar
      },
    },
    attributes: ["id", "name", "flags", "continent", "capital", "population"],
    include: Tourist,
  });

return country;
};

//Peticiones para los paises pasados por nombre (query) y para todos los paises
const getCountries = async (req, res) => {
  const { name } = req.query;
  let data;
  try {
    if (name) {
      data = await getCountryByName(name);
      res.send(data);
    } else {
      data = await getAllCountries();
      data.length > 0
        ? res.send(data)
        : res.status(404).send({ message: "No se encontraron paises " });
    }
  } catch (error) {
    res.send(error);
  }
};


//Peticion por parametro para los ID
const getCountriesById = async (req, res) => {
  const { id } = req.params;
  try {
    let countryId = await Country.findByPk(id.toUpperCase(), {
      attributes: [
        "id",
        "name",
        "flags",
        "continent",
        "capital",
        "population",
        "subregion",
        "area",
      ],
      include: Tourist,
    });
    countryId
      ? res.send(countryId)
      : res.status(404).send({ message: "País no encontrado" });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getApi,
  getCountries,
  getCountriesById,
  getAllCountries,
  getCountryByName,
};
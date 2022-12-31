const {Activity, Country} = require ("../db");



//Vemos las actividades que se van creando asociado a los paises
const getActivitiesByName = (req, res) => {
Activity.findAll ({
    attributes: ["name", "difficulty", "duration", "seasson"],
    include: [{model: Country, attributes: ["name"]}], // solo preciso el nombre del pais
        
        })
        .then ((activities) => {
            res.status (200).send (activities)
        })
        .catch ((error) => {
            res.status(404).send (error)
        });
    };
        

    //Añadimos Actividad Turistica
    const postActivity = async (req, res) => {
        
        const { name, difficulty, duration, seasson, countries } = req.body;
        try {
    
          const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            seasson,
          });
    
      
          countries.forEach(async (country) => {
            const countryActivity = await Country.findOne({
              where: {
                name: country,
              },
            });
            await newActivity.addCountry(countryActivity); // Le agrego la actividad al pais
                                                           // en la tabla countryActivity;
          });
          res.status(200).send({ message: "Actividad creada" });
        } catch (error) {
          res.status(404).send(error);
        }
      };


module.exports = {postActivity, getActivitiesByName};
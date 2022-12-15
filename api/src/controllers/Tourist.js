const {Tourist, Country} = require ("../db");



//Vemos las actividades que se van creando asociado a los paises
const getTouristByName = (req, res) => {
Tourist.findAll ({
    attributes: ["name", "difficulty", "duration", "season"],
    include: [{model: Country, attributes: ["name"]}],
        
        })
        .then ((tourist) => {
            res.status (200).send (tourist)
        })
        .catch ((error) => {
            res.status(404).send (error)
        });
    };
        


    //Añadimos Actividad Turistica
    const addTourist = async (req, res) => {
        
        const { name, difficulty, duration, season, countries } = req.body;
        if (!name || !difficulty || !duration || !season || !countries) 
        return res.status(404).send({msg: 'Faltan datos'})
        try {
    
          const newTourist = await Tourist.create({
            name,
            difficulty,
            duration,
            season,
          });
    
      
          countries.forEach(async (country) => {
            const countryTourist = await Country.findOne({
              where: {
                name: country,
              },
            });
            await newTourist.addCountry(countryTourist);
          });
          res.status(200).send({ message: "Actividad creada" });
        } catch (error) {
          res.status(404).send(error);
        }
      };


module.exports = {addTourist, getTouristByName};
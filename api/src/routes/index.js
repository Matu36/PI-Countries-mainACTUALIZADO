const { Router } = require('express');
const { getCountries, getCountriesById } = require ("../controllers/country");
const {postActivity, getActivitiesByName} = require ("../controllers/activity");


const router = Router();


//Rutas, Controllers
router.get ("/countries", getCountries);
router.get ("/countries/:id", getCountriesById);
// router.delete ("/countriesDel/:id", deleteCountry);
router.get ("/activities", getActivitiesByName);
router.post("/activity", postActivity);



module.exports = router;

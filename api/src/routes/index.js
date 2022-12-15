const { Router } = require('express');
const { getCountries, getCountriesById } = require ("../controllers/Countries");
const {addTourist, getTouristByName} = require ("../controllers/Tourist")


const router = Router();

router.get ("/countries", getCountries);
router.get ("/countries/:id", getCountriesById);
router.get ("/tourist", getTouristByName);
router.post("/activities", addTourist);


module.exports = router;

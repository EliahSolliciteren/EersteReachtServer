const bezoeker = require("../models/applicatieGebruiker")


// deze routes moeten beschermt worden

const router = require("express").Router(),
    applicatieGebruikersController = require("../controllers/applicatieGebruikerController")

router.post("/create", applicatieGebruikersController.createPost)
router.post('/aanmelden', applicatieGebruikersController.aanmelden, applicatieGebruikersController.next)
router.post('/afmelden', applicatieGebruikersController.afmelden)
router.get('/findOne', applicatieGebruikersController.findOne)


module.exports = router;
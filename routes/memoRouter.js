const memoController = require("../controllers/memoController");


const router = require("express").Router()




router.post("/create", memoController.createPost)




module.exports = router;

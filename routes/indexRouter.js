const express = require('express')
const router= require('express').Router()



applicatieGebruikers=require("./gebruikersRouter.js")
memo=require("./memoRouter.js")

router.use('/user',applicatieGebruikers)
router.use('/memo',memo)

module.exports = router;
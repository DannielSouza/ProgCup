const InfoController = require('../controllers/InfoController')
const router = require('express').Router()


router.get('/', InfoController.getMainInfo)



module.exports = router
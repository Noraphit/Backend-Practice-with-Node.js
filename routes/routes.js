const router = require("express").Router()
const controller = require('../controllers/controller')
router.post('/cretesolution/:number', controller.getresult)
module.exports = router
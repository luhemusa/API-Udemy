//controller
const Controller = require('../controllers/Controller.js')
// router
const router = require('express').Router()

//// API ////////

//1 - test
router.get('/getAll', Controller.test ) 
//2 - get all free courses
router.get('/getAllFreeCourses', Controller.getAllFreeCourses)


///////////////

module.exports = router
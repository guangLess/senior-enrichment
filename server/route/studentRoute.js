const route = require('express').Router()
const Student = require('../../db/models/student')

route.get('/', (req, res, next ) => {
    Student.findAll().then(data=> res.status(200).json(data))
    //res.status(200).json('Hello student Route')
})


module.exports = route


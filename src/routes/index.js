const express = require('express')

const usersAPI = require('../components/users/api')
const ownersAPI = require('../components/owners/api')
const residentsAPI = require('../components/residents/api')
const unitsAPI = require('../components/units/api')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.send('Welcome to ObliCond API')
})

routes.use(usersAPI)
routes.use(ownersAPI)
routes.use(residentsAPI)
routes.use(unitsAPI)

module.exports = routes
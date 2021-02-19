const express = require('express')
const usersAPI = require('../components/users/api')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.send('Welcome to ObliCond API')
})

routes.use(usersAPI)

module.exports = routes
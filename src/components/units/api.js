const express = require('express')

const unitsAPI = express.Router()

unitsAPI.get('/units', (req, res) => {
    res.send('API de Unidades')
})

module.exports = unitsAPI
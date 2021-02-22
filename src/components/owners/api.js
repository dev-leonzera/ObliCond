const express = require('express')

const ownersAPI = express.Router()

ownersAPI.get('/owners', (req, res) => {
    res.send('API de Proprietários')
})


module.exports = ownersAPI
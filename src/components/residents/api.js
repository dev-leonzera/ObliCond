const express = require('express')

const residentsAPI = express.Router()

residentsAPI.get('/residents', (req, res) => {
    res.send('API de Moradores')
})

module.exports = residentsAPI
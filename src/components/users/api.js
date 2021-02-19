const express = require('express')

const usersAPI = express.Router()

usersAPI.get('/users', (req, res) => {
    res.send('API de usuários')
})


module.exports = usersAPI
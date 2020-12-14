const routes = require('express').Router()
const { signup, login } = require('../controllers/auth')


routes.post("/api/auth/signup", signup)

routes.get("/api/auth/login", login)


module.exports = routes
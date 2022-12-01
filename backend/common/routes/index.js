const express = require("express");
const userModel = require("../schema/User/schemaUser");
const app = express();
const router = express.Router();
const RouterUser = require('../routes/User/routesUser')
const RouterMessage = require('../routes/Message/routesMessage')
const RouterAuth = require("../routes/auth/routesAuth")
router.get('/', (req, res) => {
    res.send('le')
})
router.use('/user', RouterUser)
router.use('/message', RouterMessage)
router.use('/auth', RouterAuth)

module.exports = router;
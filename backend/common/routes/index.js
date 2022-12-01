const express = require("express");
const app = express();
const router = express.Router();
const RouterUser = require('./User/routesUser');
router.use('/user', RouterUser);

module.exports = router;
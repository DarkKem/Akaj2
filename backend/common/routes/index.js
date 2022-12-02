const express = require("express");
const app = express();
const router = express.Router();
const RouterUser = require('./User/routesUser');
const RouterBoss = require('./Boss/routeBoss');
const RouterCards = require('./Cards/routesCards');

router.use('/user', RouterUser);
router.use('/boss', RouterBoss);
router.use('/cards', RouterCards);

module.exports = router;
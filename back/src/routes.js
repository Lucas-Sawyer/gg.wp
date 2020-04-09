const express = require('express');
const summoner_control = require('./controllers/summoner_control');

const router = express.Router();

router.get('/:name', summoner_control.search);

module.exports = router;
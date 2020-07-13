const express = require('express');
const summoner_page = require('./controllers/summoner_page');

const router = express.Router();

router.get('/:name', summoner_page.search);

module.exports = router;
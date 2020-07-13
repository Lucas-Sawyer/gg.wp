const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://br1.api.riotgames.com/lol/',
    headers: { 'X-Riot-Token': process.env.API_TOKEN }
})

module.exports = instance;
const axios = require('axios');
//const api_key = process.env.API_TOKEN;

const instance = axios.create({
    baseURL: 'https://br1.api.riotgames.com/lol/',
    headers: { 'X-Riot-Token': process.env.API_TOKEN }
    //headers: { 'X-Riot-Token': 'RGAPI-4ca22b41-0302-4231-96d5-003df98ca943' }
})

module.exports = instance;
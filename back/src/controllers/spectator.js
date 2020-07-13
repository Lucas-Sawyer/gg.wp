const axios = require('../config/api');
const localiza_campeoes = require('./find_champions');
const localiza_queues = require('./find_queues');

module.exports = {
    async spec(id_summoner, summoner_name) {
        try {
            const api_spectator = await axios.get(`spectator/v4/active-games/by-summoner/${id_summoner}`);
            const spec_info = {};
            const { gameQueueConfigId: id_queue } = api_spectator.data;
            const { participants } = api_spectator.data;
            const { gameStartTime } = api_spectator.data;

            const participant = participants.filter(participant => participant.summonerName === summoner_name);
            const id_champ_spec = participant.map(item => item.championId);

            const champ_spec = await localiza_campeoes.localizaCampeao(id_champ_spec);

            const map_spec = await localiza_queues.localizaMapa(id_queue);
            const modo_spec = await localiza_queues.localizaModo(id_queue);

            
            spec_info.champion_spec = champ_spec;
            spec_info.map_spec = map_spec;
            spec_info.modo_spec = modo_spec;
            spec_info.game_start = gameStartTime;
            return spec_info;
        }
        catch{ }
    }
}
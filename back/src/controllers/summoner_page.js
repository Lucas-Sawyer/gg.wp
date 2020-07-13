const axios = require('../config/api');
const spectator = require('./spectator');
const champ_rank = require('./champions_rank');
const lanes_rank = require('./roles_rank');

module.exports = {
    async search(req, res) {
        const { name } = req.params;
        try {

            //informações do invocador*****************************************************************************
            const api_summoner = await axios.get(`summoner/v4/summoners/by-name/${name}`);//acesso a api
            const { accountId: id_account } = api_summoner.data;//ID da conta
            const { id: id_summoner } = api_summoner.data;//ID do jogador
            const { profileIconId: icon } = api_summoner.data;//código do icone
            const icon_link = `http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/profileicon/${icon}.png`;//link do icone
            //informações do invocador*****************************************************************************

            //informações de historico*****************************************************************************
            const api_history = await axios.get(`match/v4/matchlists/by-account/${id_account}`);//acesso a api
            //const api_history = await axios.get(`match/v4/matchlists/by-account/${id_account}?endIndex=10`);...acesso alternativo com limite do numero de partida
            const { matches } = api_history.data;//histórico do jogador
            //informações de historico*****************************************************************************

            //informações do modo espectador***********************************************************************
            const spec = await spectator.spec(id_summoner, name);//informações do espectador{campeão, mapa, modo de jogo, inicio do game em 'epoch milliseconds'}
            //informações do modo espectador***********************************************************************

            //ranque dos campeões mais usados pelo jogador*********************************************************
            const champions_rank = await champ_rank.rank_champions(matches)//ranque dos campeoes
            //ranque dos campeões mais usados pelo jogador*********************************************************


            //ranque das lanes mais usadas pelo jogador************************************************************
            const roles_rank = await lanes_rank.rank_roles(matches)//ranque dos campeoes
            //ranque das lanes mais usadas pelo jogador************************************************************

            var info = {};
            info.champions_rank = champions_rank;
            info.roles_rank = roles_rank;
            info.icon = icon_link;
            info.spec = spec;

            return res.json(info);
        } catch (error) {
            console.log(error);
        }
    }
}

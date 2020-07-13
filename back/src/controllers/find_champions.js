const axios = require('../config/api');

module.exports = {

    async localizaCampeoes(keys) {
        try {
            const api_champs = await axios.get('http://ddragon.leagueoflegends.com/cdn/10.9.1/data/en_US/champion.json');
            const array_champs = Object.values(api_champs.data.data);
            const topChamps = []

            keys.forEach(key => {
                const [champ] = array_champs.filter(champions => champions.key === key);
                const { id } = champ;
                topChamps.push(id);
            });
            return topChamps;
        }
        catch{ }
    },

    async localizaCampeao(key) {
        try {
            const api_champs = await axios.get('http://ddragon.leagueoflegends.com/cdn/10.9.1/data/en_US/champion.json');
            const array_champs = Object.values(api_champs.data.data);
            const champ_key = key.toString();

            const [champ] = array_champs.filter(champions => champions.key === champ_key);
            const { id } = champ;
            return id;
        }
        catch{ }



    }
}
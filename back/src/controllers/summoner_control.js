const axios = require('../config/api');

module.exports = {
    async search(req, res) {
        const { name } = req.params;
        try {
            const summoner = await axios.get(`summoner/v4/summoners/by-name/${name}`);
            //const { accountId: id } = summoner.data;
            console.log(summoner);
            /*const history = await axios.get(`match/v4/matchlists/by-account/${id}`);
            return res.json(history.data);*/
        } catch (error) {
            console.log(error);
        }
    }
}

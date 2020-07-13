const axios = require('../config/api');

module.exports = {

    async localizaMapa(id) {
        try {
            const api_queues = await axios.get('http://static.developer.riotgames.com/docs/lol/queues.json');
            const array_queues = Object.values(api_queues.data);
            const [queue] = array_queues.filter(queue => queue.queueId === id);
            const { map } = queue;
            return map;
        }
        catch{ }
    },

    async localizaModo(id) {
        try {
            const api_queues = await axios.get('http://static.developer.riotgames.com/docs/lol/queues.json');
            const array_queues = Object.values(api_queues.data);
            const [queue] = array_queues.filter(queue => queue.queueId === id);
            const { description } = queue;
            return description;
        }
        catch{ }

    }
}
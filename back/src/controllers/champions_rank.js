const findo_champions = require('./find_champions');

module.exports = {
    async rank_champions(matches) {
        const champions = matches.map(function (item) { return item.champion });
        var champ_count = {};
        champions.forEach(function (item) { champ_count[item] = (champ_count[item] || 0) + 1 });
        var champ_rank = Object.keys(champ_count).sort(function (a, b) { return champ_count[b] - champ_count[a] })
        const key_champs = [champ_rank[0], champ_rank[1], champ_rank[2], champ_rank[3], champ_rank[4]];
        const name_champs = await findo_champions.localizaCampeoes(key_champs);
        return name_champs;
    }
}
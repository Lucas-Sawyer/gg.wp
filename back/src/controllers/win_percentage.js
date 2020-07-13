
const match_ids = matches.map(function (item) { return item.gameId });
var ids_player = [];
for (i = 0; i < 1/*match_ids.length*/; i++) {
    const api_matches = await axios.get(`match/v4/matches/${match_ids[i]}`);
    const { participantIdentities } = api_matches.data;
    const players = participantIdentities.map(function (item) { return item.player.summonerName });
    const ids = players.indexOf(name) + 1;
    ids_player.push(ids);
}
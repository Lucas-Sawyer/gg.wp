module.exports = {
    async rank_roles(matches) {
        const role = matches.map(function (item) { return item.role });
        const lane = matches.map(function (item) { return item.lane });
        const role_check = role.filter(function (item) { return item == 'DUO_SUPPORT' || item == 'DUO_CARRY' });
        const lane_check = lane.filter(function (item) { return item == 'TOP' || item == 'JUNGLE' || item == 'MID' });
        const roles = role_check.concat(lane_check);
        var roles_count = {};
        roles.forEach(function (item) { roles_count[item] = (roles_count[item] || 0) + 1 });
        var role_rank = Object.keys(roles_count).sort(function (a, b) { return roles_count[b] - roles_count[a] });
        return role_rank;
    }
}







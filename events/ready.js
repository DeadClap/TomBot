function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.run = (client) => {
    client.user.setPresence({
        activity: {
            name: `\@${client.user.tag} help`,
            type: 0
        }
    })
    var games = [`with ${client.users.size} users on ${client.guilds.size} servers`, `\@${client.user.tag} help`, `https://discord.gg/mDb2CBx`]
    var i = 0
    setInterval(() => {
        client.emit('log', 'Old Game: ' + client.user.presence.activity.name + '\nNew Game: ' + games[i] + " " + i)
        client.user.setPresence({
            status: "online",
            activity: {
                name: games[i],
                type: 0
            }
        })
        i = i + 1
        if (i > games.length - 1) i = 0
    }, 160000)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

exports.run = (client) => {
    client.user.setPresence({
        game: {
            name: `\@${client.user.tag} help`,
            type: 0
        }
    })
    var games = [`with ${client.users.size} users on ${client.guilds.size} servers`, `\@${client.user.tag} help`, `https://discord.gg/mDb2CBx`]
    var i = 0
    setInterval(() => {
        client.emit('log', 'Game: ' + client.user.presence.game.name + " " + i)
        client
            .user
            .setPresence({
                status: "online",
                game: {
                    name: games[i],
                    type: 0
                }
            })
        i = i + 1
        if (i > games.length - 1) 
            i = 0
        
    }, 160000)
}
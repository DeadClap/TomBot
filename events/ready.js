function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

exports.run = (client) => {
    var games = [`with ${client.users.size} users on ${client.guilds.size} servers`, `\@${client.user.tag} help`, `https://discord.gg/mDb2CBx`]
    var i = 0
    setInterval(() => {
        client.emit('log', 'Game: ' + games[i] + " " + i)
        client
            .user
            .setPresence({
                status: "online",
                game: {
                    name: games[i]
                }
            })
        i = i + 1
        if (i > games.length - 1) 
            i = 0
    }, 160000)
}
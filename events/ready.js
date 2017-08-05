function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

exports.run = (client) => {
    var games = [`with ${client.users.size} users on ${client.guilds.size} servers`, `\@${client.user.tag} help`, `https://discord.gg/mDb2CBx`]
    var i = 0
    while (i < 3) {
        client
            .user
            .setgame(games[i])
        i = i + 1
        await sleep(160000)
        if (i > 2) 
            i = 0
    }
}
exports.run = (client) => {
    var games = [`with ${client.users.size} users on ${client.guilds.size} servers`, `\@${client.user.tag} help`, `https://discord.gg/mDb2CBx`]
    for (game in games) {
        client
            .user
            .setGame(game)
        client.emit('log', game)
        setTimeout(() => console.log('Changing Game...'), 120000)
    }
}
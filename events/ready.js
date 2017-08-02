exports.run = (client) => {
    var games = [`with ${client.users.size} users on ${client.guilds.size} servers`, `\@${client.user.tag} help`, `https://discord.gg/mDb2CBx`]
    setTimeout(() => {
    client.user.setGame(games[Math.floor(Math.random() * games.length)])
    }, 120000)
}
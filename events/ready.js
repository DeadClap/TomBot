exports.run = (client) => {
    var games = [`with ${client.users.size} users on ${client.guilds.size} servers`, `\@${client.user.tag} help`]
    setTimeout(() => {
    client.user.setGame(games[Math.floor(Math.random() * games.length)])
    }, 10000)
}
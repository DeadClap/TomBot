exports.run = async (client) => {

    let link = await client.generateInvite(-1)
    client.emit('log', `Ready! \nInvite Link: ${link}\nLogged in as: ${client.user.tag}`)
    client.inviteLink = link
    client.user.setPresence({
        activity: {
            name: `\@${client.user.tag} help`,
            type: 0
        }
    })
    // client.channels.get('363829630207131650').send('<@227110473466773504>, ' + client.ping)
    var i = 0
    setInterval(() => {
        var games = [`with ${client.users.size} users on ${client.guilds.size} servers`, `\@${client.user.tag} help`, `https://discord.gg/mDb2CBx`]
        client.emit('log', 'Old Game: ' + client.user.presence.activity.name + ' | New Game: ' + games[i] + " " + i)
        client.user.setStatus('online')
        client.user.setPresence({
            activity: {
                name: games[i],
                type: 0
            }
        })
        i = i + 1
        if (i > games.length - 1) i = 0
    }, 160000)
}

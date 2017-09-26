exports.run = async(client, msg, [...ann]) => {
    client.guilds.forEach(g => {
        if (client.config.debug && client.funcs.debugServer(client, g)) {
            return client.funcs.announce(client, g, ann)
        } else if (client.config.debug && !client.funcs.debugServer(client, g)) {
            return
        } else if (!client.config.debug) return client.funcs.announce(client, g, ann)
    })
}
exports.conf = {
    enabled: true,
    runIn: ['text', 'dm'],
    aliases: ['ann', 'announcement'],
    permLevel: 8,
    botPerms: [],
    requiredFuncs: [],
    requiredSettings: [],
}
exports.help = {
    name: 'announce',
    description: 'Announce something to all guilds',
    usage: "<ann:str> [...]",
    usageDelim: " "
}

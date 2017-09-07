exports.run = (client, msg, [...ann]) => {
    return msg.channel.send(ann)
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
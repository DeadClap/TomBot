exports.run = async (client, msg, [...ann]) => {
    client.guilds.forEach(g => {
        if (!g.settings.announceChannel) {
            return g.owner.send(`You are recieving this because you don't have a guild announcement channel setup in your server.\n ${ann.join}`)
        } else {
            return g.settings.announceChannel.send(ann.join)
        }
        
    })
    
    // return msg.channel.send(ann.join(' '))
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
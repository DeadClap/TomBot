exports.run = (client, msg, [...ann]) => {
    client.guilds.forEach(g => {
        if (g.id !== '332178051154706432') return
        if (!g.settings.announceChannel) {
            g.owner.send(`You are recieving this because you don't have a guild announcement channel setup in your server.\n ${ann}`)
        } else {
            g.settings.announceChannel.send(ann.join)
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
exports.run = async (client, msg, [...ann]) => {
    client.guilds.forEach(g => {
        if (!g.settings.announceChannel) {
            console.log(`[DM: ${g.name} #${g.owner.tag}`)
            return g.owner.send(`You are recieving this because you don't have a guild announcement channel setup in your server.\n ${ann.join(' ')}`)
        } else {
            console.log(`[${g.name}/#${g.channels.get(g.settings.announceChannel).name}]`)
            return g.channels.get(g.settings.announceChannel).send(ann.join(' '))
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
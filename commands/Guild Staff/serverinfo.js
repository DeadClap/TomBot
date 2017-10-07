exports.run = async (client, msg) => {
return msg.channel.send('indev')
}

exports.conf = {
    enabled: true,
    runIn: ['text','dm'],
    aliases: [],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
    requiredSettings: [],
}

exports.help = {
    name: 'serverinfo',
    description: 'Server information',
    usage: "",
    usageDelim: ""
}
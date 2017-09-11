exports.run = async (client, msg, [link]) => {
    msg.reply('indev')
}

exports.conf = {
    enabled: true,
    runIn: ['text'],
    aliases: [],
    permLevel: 3,
    botPerms: [],
    requiredFuncs: [],
    requiredSettings: [],
}

exports.help = {
    name: 'avatar',
    description: 'Change my avatar',
    usage: "<link:url>",
    usageDelim: ""
}
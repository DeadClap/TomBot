exports.run = async(client, msg, [link]) => {
    msg.reply('indev')
}
exports.conf = {
    enabled: true,
    runIn: ['text'],
    aliases: [],
    permLevel: 8,
    botPerms: [],
    requiredFuncs: [],
    requiredSettings: [],
}
exports.help = {
    name: 'setavatar',
    description: 'Change my avatar',
    usage: "<link:url>",
    usageDelim: ""
}

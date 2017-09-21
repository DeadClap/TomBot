exports.run = async(client, msg, [link]) => {
    var embed = new client.methods.Embed()
    .setImage(`${link}`)
    client.user.setAvatar(`${link}`)
    return msg.channel.send({embed}) && msg.delete()
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

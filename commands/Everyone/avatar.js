exports.run = async (client, msg, [user]) => {
    if (!user) {user = msg.author} else {user = user.user}
    var embed = new client.methods.Embed()
    .setTitle(`${user.tag}'s avatar!`)
    .setImage(user.displayAvatarURL({format: 'png', size: 256}))
    msg.channel.send({embed})
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
    name: 'avatar',
    description: 'Check your avatar',
    usage: "[user:mention]",
    usageDelim: ""
}
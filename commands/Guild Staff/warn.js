exports.run = async(client, msg, [user, ...reason]) => {
    var embed = new client.methods.Embed()
        .setTitle('Warning')
        .addField('Member', user.tag)
        .addField('Reason', reason)
        .setFooter(msg.author.tag, msg.author.displayAvatarURL({format: 'jpg', size: 256}))
    return msg.channel.send({embed})
}

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 2,
    botPerms: ["EMBED_LINKS"],
    requiredFuncs: [],
    requiredSettings: ["modlogs"],
}

exports.help = {
    name: 'warn',
    description: 'Allows guild staff to warn a user for misconduct.',
    usage: '<user:mention> <reason:str> [...]',
    usageDelim: ' '
}

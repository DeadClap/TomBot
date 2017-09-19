exports.run = async(client, msg, [user, ...reason]) => {
    var embed = new client.methods.Embed()
        .setTitle('Warning')
        .addField('Member', user.tag)
        .addField('Reason', reason.join(' '))
        .setFooter(msg.author.tag, msg.author.displayAvatarURL({format: 'jpg', size: 256}))
    if (msg.guild.settings.modlogs) {
        return msg.guild.channels.get(msg.guild.settings.modlogs).send({embed}).catch(e => msg.reply(`Insufficient Permissions in modlogs`))
    } else return msg.channel.send(`Failed: Guild doesn't have a modlogs set in the config.`)
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

exports.run = async(client, msg, [user, ...reason]) => {
    if (user === msg.author) return msg.reply('You cannot warn youself.') && msg.delete()
    var embed = new client.methods.Embed()
        .setColor(client.funcs.hex())
        .setTitle('Warning')
        .addField('Member', user.tag)
        .addField('Reason', reason.join(' '))
        .setFooter(`Acting Moderator: ` + msg.author.tag, msg.author.displayAvatarURL({ format: 'jpg', size: 256 }))
    var embed2 = new client.methods.Embed()
        .setColor(client.funcs.hex())
        .setTitle('Warning in ' + msg.guild.name)
        .addField('Reason', reason.join(' '))
        .setFooter(`Acting Moderator: ` + msg.author.tag, msg.author.displayAvatarURL({ format: 'jpg', size: 256 }))
    var embed3 = new client.methods.Embed()
        .setDescription(`${user.tag} has been successfully warned!`)
        .setColor(client.funcs.hex())
    if (msg.guild.settings.modlogs) {
        user.send({ embed: embed2 })
            .catch(e => msg.reply(`User has dm's disabled.`))
        msg.guild.channels.get(msg.guild.settings.modlogs)
            .send({ embed })
            .catch(e => msg.reply(`Insufficient modlogs permissions.`))
        return msg.delete() && msg.channel.send({ embed: embed3 })
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

exports.ml = (client, msg, guild, author, offender, title, reason) => {
    var embed = new client.methods.Embed()
    .addField('Action', title)    
    .addField('Reason', reason.join(' '))
    .addField('Offender', offender.tag, true)
    .addField('Staff Member', author.tag, true)
    .setColor(client.funcs.hex())
    
    var channel = guild.channels.get(guild.settings.modlogs) || undefined
    
    if (channel) return channel.send({embed}) && true
    if (!channel) return false
}

exports.sl = (client, embed) => {
    if (client.config.beta) {
        var channel = client.channels.get('365999171934748674')
    } else var channel = client.channels.get('340864447037833226')

    return channel.send({embed})
}
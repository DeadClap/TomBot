exports.ml = (client, guild, author, offender, title, reason) => {
    var embed = new client.methods.Embed()
    .addField('Action', title)    
    .addField('Reason', reason.join(' '))
    .addField('Offender', offender.tag, true)
    .addField('Staff Member', author.tag, true)
    .setColor(client.funcs.hex())
    
    var channel = guild.settings.moglogs !== null ? guild.channels.get(guild.settings.modlogs) : null
    if (channel !== null) return channel.send({embed})
    if (channel === null) return "No channel!"
}

exports.sl = (client, embed) => {
    var channel = client.channels.get('365497316494409749')
    return channel.send({embed})
}
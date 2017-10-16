
exports.conf = {
    enabled: true,
    ignoreBots: true,
    ignoreSelf: true
}


function enabled (client, msg, embed, channel) {

    if (msg.attachments.size > 0) {msg.attachments.forEach(a => {
        channel.sendFile(a.url)
        client.emit('log', msg.author.tag + ' DMed: ' + msg.cleanContent + ' (WITH IMAGE(s))')
    })} else client.emit('log', msg.author.tag + ' DMed: ' + msg.cleanContent)
    channel.send({embed})


}


exports.run = (client, msg, cmd) => {
    var prefix = client.config.beta ? 'b.' : client.settings.guilds.schema.prefix.default
    var disabledEmbed = new client.methods.Embed()
    .setTitle('Direct Message Logging Disabled')
    .setDescription('Please Select from one of these.')
    .addField('Help with EverWing Hacks by Tomas', `[Click here (Its just a invite link)](https://discord.gg/93UhENE)`)
    .addField('Help with TomBot', `[Click here (Its just a invite link)](https://discord.gg/mDb2CBx)`)

    var loggerEmbed = new client.methods.Embed()
    .setAuthor(msg.author.tag + ` (${msg.author.id}) sent:`, msg.author.displayAvatarURL({format: 'png', size: 256}))
    .setDescription(msg.cleanContent)    

    if (msg.channel.type !== 'dm') return;
    var channel = client.config.beta ? client.channels.get('363829630207131650') : client.channels.get('363809453260144650')
    var commands = client.commands.keyArray()
    var aliases = client.aliases.keyArray()
    var wordArray = msg.content.split(' ');
    var one = wordArray[0].replace(client.settings.guilds.schema.prefix.default, '')
    if (commands.includes(one) || aliases.includes(one)) return
    if (msg.mentions.users.has(client.user.id)) return
    // return msg.channel.send({embed: disabledEmbed})


    
    // if (msg.attachments.size > 0) {msg.attachments.forEach(a => {
    //     channel.sendFile(a.url)
    //     client.emit('log', msg.author.tag + ' DMed: ' + msg.cleanContent + ' (WITH IMAGE(s))')
    // })} else client.emit('log', msg.author.tag + ' DMed: ' + msg.cleanContent)
    // channel.send({embed})

    if (client.config.extraCFG.dmDisabled) {
      return msg.channel.send({embed: disabledEmbed})
    } else return enabled(client, msg, loggerEmbed, channel)

    
}
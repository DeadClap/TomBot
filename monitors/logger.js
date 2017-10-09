
exports.conf = {
    enabled: true,
    ignoreBots: true,
    ignoreSelf: true
}

exports.run = (client, msg, cmd) => {
    
    var disabledEmbed = new client.methods.Embed()
    .setTitle('Direct Message Logging Desabled')
    .setDescription('Please Select from one of these.')
    .addField('Help with EverWing Hacks by Tomas', `[Click here](https://discord.gg/93UhENE)`)
    .addField('Help wit TomBot', `[Click here](https://discord.gg/mDb2CBx)`)
    
    if (msg.channel.type !== 'dm') return;
    
    if (client.config.beta) {
        var channel = client.channels.get('363829630207131650');
    } else var channel = client.channels.get('363809453260144650')
    var commands = client.commands.keyArray()
    var aliases = client.aliases.keyArray()
    var wordArray = msg.content.split(' ');
    var one = wordArray[0].replace(client.settings.guilds.schema.prefix.default, '')
    if (commands.includes(one) || aliases.includes(one)) return
    return msg.reply('DM Logging disabled!')

    // var embed = new client.methods.Embed()
    // .setAuthor(msg.author.tag + ` (${msg.author.id}) sent:`, msg.author.displayAvatarURL({format: 'png', size: 256}))
    // .setDescription(msg.cleanContent)
    
    // if (msg.attachments.size > 0) {msg.attachments.forEach(a => {
    //     channel.sendFile(a.url)
    //     client.emit('log', msg.author.tag + ' DMed: ' + msg.cleanContent + ' (WITH IMAGE(s))')
    // })} else client.emit('log', msg.author.tag + ' DMed: ' + msg.cleanContent)
    // channel.send({embed})
    
}
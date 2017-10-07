exports.conf = {
    enabled: true,
    ignoreBots: true,
    ignoreSelf: true
}

exports.run = (client, msg, cmd) => {
    if (msg.channel.type !== 'dm') return;
    var channel = client.channels.get('363809453260144650');
    var commands = client.commands.keyArray()
    var aliases = client.aliases.keyArray()
    var wordArray = msg.content.split(' ');
    var one = wordArray[0].replace(client.settings.guilds.schema.prefix.default, '')
    if (commands.includes(one) || aliases.includes(one)) return
    client.emit('log', msg.author.tag + ' DMed: ' + msg.cleanContent)

    var embed = new client.methods.Embed()
    .setAuthor(msg.author.tag + ` (${msg.author.id})`, msg.author.displayAvatarURL({format: 'png', size: 256}))
    .setDescription(msg.cleanContent)
    

    channel.send({embed})
}
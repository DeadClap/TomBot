exports.run = async (client, msg, [user, ...message]) => {
  var channel = client.channels.get('363809453260144650')
  if (msg.author.id === client.owner.id) return user.send('\*\*DEV\*\* ' + msg.author.tag + ':\n' + message.join(' ')) && msg.channel.send('\*\*DEV\*\* ' + msg.author.tag + 'to ' + user.tag +':\n' + message.join(' ')) && msg.delete() && channel.send('\*\*DEV\*\* ' + msg.author.tag + ' to ' + user.tag +':\n' + message.join(' '))
  if (client.config.extraCFG.owners.includes(msg.author.id)) return user.send('\*\*OWNER\*\* ' + msg.author.tag + ':\n' + message.join(' ')) && msg.channel.send('\*\*OWNER\*\* ' + msg.author.tag + ' to ' + user.tag +':\n' + message.join(' ')) && msg.delete() && channel.send('\*\*OWNER\*\* ' + msg.author.tag + 'to ' + user.tag +':\n' + message.join(' '))
}


exports.conf = {
        enabled: true,
        runIn: ['text','dm'],
        aliases: [],
        permLevel: 8,
        botPerms: [],
        requiredFuncs: [],
        requiredSettings: [],
}
    
exports.help = {
        name: 'dm',
        description: 'Send a user a message, or reply to their comments',
        usage: "<user:user> <message:str> [...]",
        usageDelim: " "
}

exports.run = async (client, msg, [user, ...message]) => {
  if (msg.author.id === client.owner.id) return user.send('\*\*DEV\*\* ' + msg.author.tag + ':\n' + message.join(' '))
  if (client.config.extraCFG.owners.includes(msg.author.id)) return user.send('\*\*OWNER\*\* ' + msg.author.tag + ':\n' + message.join(' '))
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

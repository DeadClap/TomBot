exports.run = async (client, msg, [channel, ...say]) => {
  var chan = channel ? channel : msg.channel
  
  if (!chan.permissionsFor(client.user).has(19456)) return msg.reply(`\`\`\`Error: Missing Permissions in Channel [SEND_MESSAGES, READ_MESSAGES, EMBED_LINKS]`)
  return chan.send(say.join(' '))
}

exports.conf = {
    enabled: true,
    runIn: ['text'],
    aliases: [],
    permLevel: 3,
    botPerms: [],
    requiredFuncs: [],
    requiredSettings: [],
}

exports.help = {
    name: 'say',
    description: 'Say something in a guild channel',
    usage: "[channel:channel] <say:str> [...]",
    usageDelim: " "
}
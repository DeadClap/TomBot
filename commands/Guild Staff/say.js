exports.run = async (client, msg, [channel, ...say]) => {
  var chan = channel ? channel : msg.channel
  
  
  return chan.send(say.join(' ')).catch(msg.reply('\`\`\`Error" No Permission\`\`\`'))
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
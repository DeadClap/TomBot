exports.run = async (client, msg, [channel, ...say]) => {
  return msg.channel.send(say)
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
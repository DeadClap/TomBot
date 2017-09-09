exports.run = async (client, msg, [...say]) => {
  return msg.channel.send('NOPE, indev')
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
    usage: "<say:str> [...]",
    usageDelim: " "
}
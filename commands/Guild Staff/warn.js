exports.run = async (client,msg,[user, ...reason]) => {
    return msg.channel.send('indev')
}

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 2,
    botPerms: ["SEND_MESSAGES", "EMBED_LINKS", "READ_MESSAGES"],
    requiredFuncs: [],
    requiredSettings: ["modlogs"],
}

exports.help = {
    name: 'warn',
    description: 'Allows guild staff to warn a user for misconduct.',
    usage: '<user:mention> <reason:str> [...]',
    usageDelim: ' '
}
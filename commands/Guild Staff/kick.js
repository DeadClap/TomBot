exports.run = (client,msg, [user, ...reason]) => {
    if (!client.funcs.many.kickable(client,msg, msg.member, user, msg.guild)) return msg.channel.send('Sorry but you can not kick this person!',{reply:msg.author.id})
}
exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 2,
    botPerms: [],
};
exports.help = {
    name: "kick",
    description: "Allows you no kick a guild member",
    usage: "<user:member> [reason:str] [...]",
    usageDelim: " "
};
exports.run = async(client,msg, [dry ,user, ...reason]) => {
    if (!client.funcs.many.kickable(client,msg, msg.member, user, msg.guild)) return msg.channel.send('Sorry but you can not kick this person!',{reply:msg.author.id})
    if(!dry) {
        return msg.channel.send(`${user.user.tag} has been kicked sucessfully!`)
    } else return msg.channel.send(`${user.user.tag} would have been kicked sucessfully!`)
    
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
    usage: "[-t:literal] <user:member> [reason:str] [...]",
    usageDelim: " "
};
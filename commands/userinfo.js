exports.run = async(client, msg, [user]) => {

    if (!user) var user = msg.member;
    var roleString = user.roles.size >= 2 ? user.roles.sort((a, b) => a.position - b.position || a.id - b.id).map(a => `${a.name}`).slice(1).reverse().join(', ') : 'None'



    var embed = new client.methods.Embed()
        .addField('Full user', `${user.user.tag} (${user.id})`, true)
        if (user.id === client.owner.id) embed.addField('Is Developer', "Yes", true)
        .addField('Roles', roleString)
    if (user.id === client.owner.id) embed.addField('Is Developer', "Yes")
        
    return msg.channel.send({
        embed,
        disableEveryone: true
    });
};

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: ["ui", "user"],
    permLevel: 0,
    botPerms: ["SEND_MESSAGES", "EMBED_LINKS"],
};

exports.help = {
    name: "userinfo",
    description: "Displays Info about the tagged user, or yourself if no mention.",
    usage: "[user:member]",
    usageDelim: ""
};
exports.run = async (client, msg, [user]) => {
    
    if (!user) var user = msg.member;
    if (user.roles.size > 0) { 
        var roleString = user.roles.sort((a, b) => a.position - b.position || a.id - b.id).map(a => `${a.name}`).slice(1).reverse().join(', ')
    } else if (user.roles.size === 0) {
        var roleString = "None"
    }


    
    var embed = new client.methods.Embed()
    .addField('Full user', `${user.user.tag} (${user.id})`)
    if (user.roles.size > 1) { 
        embed.addField('Roles', user.roles.sort((a, b) => a.position - b.position || a.id - b.id).map(a => `${a.name}`).slice(1).reverse().join(', '));
    } else {
        embed.addField('Roles', 'None')
    }
    return msg.channel.send({embed, disableEveryone: true});
};

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: ["ui", "user"],
    permLevel: 0,
    botPerms: ["SEND_MESSAGES","EMBED_LINKS"],
};

exports.help = {
    name: "userinfo",
    description: "Displays Info about the tagged user, or yourself if no mention.",
    usage: "[user:member]",
    usageDelim: ""
};
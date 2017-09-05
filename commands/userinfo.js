exports.run = async (client, msg, [user]) => {
    var embed = new client.methods.Embed().addField('User', `${user.user.tag} (${user.id})`).addfield('Roles', user.roles.sort((a, b) => a.position - b.position || a.id - b.id).map(a => `${a.name}`).join(', ').replace('@everyone\,', ''));
    
    msg.channel.send({embed});
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
    usage: "<user:member>",
    usageDelim: ""
};
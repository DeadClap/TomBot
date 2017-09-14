exports.run = async (client, msg) => {

    var prefix = msg.guild.settings.prefix ? msg.guild.settings.prefix : client.config.prefix
    var embed = new client.methods.Embed()
    .setTitle('TomBot Info')
    .setFooter(`A bot for ${client.users.get('316981944690671616').username} by ${client.owner.username}`, client.owner.displayAvatarURL({format: 'png', size: 256}))
    
    const information = [
        "TomBot is a general use, utility bot.",
        `Want to invite me? Use the \`${prefix}invite\``,
        `Have any suggestions, bugs, or feedback please use \`${prefix}feedback\``,
        `Need some support? Join the TomBot Server: [Click here](https://discord.gg/mDb2CBx)`

    ]
    
    information.forEach(p => embed.addField('\u200B', p))
    
    
    

    msg.channel.send({embed})
};

exports.conf = {
    enabled: true,
    runIn: ["text", "dm"],
    aliases: [],
    permLevel: 0,
    botPerms: [],
};

exports.help = {
    name: "info",
    description: "Displays Info about tombot.",
    usage: "",
    usageDelim: ""
};

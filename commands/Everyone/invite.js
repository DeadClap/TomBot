exports.run = async (client, msg) => {
    var m = [
            "So you want to invite me?",
            "Glad to hear it. Hope you enjoy my services.",
            `[Click here](https://discordapp.com/oauth2/authorize/?permissions=2146958591&scope=bot&client_id=333839071115739137) to invite me!`
        ]
        var embed = new client.methods.Embed()
        .setTitle('TomBot invitation')
        .setDescription(m.join('\n'))
        
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
    name: "invite",
    description: "Displays bot invitation.",
    usage: "",
    usageDelim: ""
};

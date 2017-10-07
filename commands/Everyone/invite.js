exports.run = async(client, msg) => {
    if (!client.funcs.clientHasPerm.channel(client, msg.channel, 19456)) return
    var m = [
            "So you want to invite me?",
            "Glad to hear it. Hope you enjoy my services.",
            `[Click here](${client.inviteLink}) to invite me!`
        ]
    var embed = new client.methods.Embed()
        .setTitle('TomBot invitation')
        .setDescription(m.join('\n'))
    msg.channel.send({ embed })
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

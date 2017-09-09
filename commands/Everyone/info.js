exports.run = async (client, msg) => {

    var prefix = msg.guild.settings.prefix ? msg.guild.settings.prefix : client.config.prefix
    const information = [
        "TomBot is a general use, utility bot.",
        `Want to invite me? Use the \`${prefix}invite\``,
        `Have any suggestions, bugs, or feedback please use \`${prefix}feedback\``

    ]

    msg.channel.send(information)
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

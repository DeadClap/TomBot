exports.run = async (client, msg) => {
    const information = [
        "TomBot is a general use, utility bot.",
        `Want to invite me? Use the \`${msg.guild.settings.prefix}invite\``,
        "Have any suggestions, bugs, or feedback please use \`${msg.guild.settings.prefix}feedback\`"

    ]

    msg.channel.send(information)
};

exports.conf = {
    enabled: true,
    runIn: ["text"],
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

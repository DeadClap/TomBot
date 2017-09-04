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
    runIn: ["text", "dm"],
    aliases: ["bot", "binfo", "details", "what"],
    permlevel: 0
};

exports.help = {
    name: "info",
    description: "Displays Info about tombot.",
    usage: "",
    usageDelim: ""
};
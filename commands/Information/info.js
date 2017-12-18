exports.run = (client,msg) => {
    return msg.channel.send('Indev!')
}

exports.conf = {
    enabled: true,
    runIn: ["text", "dm"],
    aliases: [],
    permLevel: 0,
    botPerms: ["SEND_MESSAGES"],
    requiredFuncs: [],
    requiredSettings: [],    
}

exports.help = {
    name: "info",
    description: "Displays bot information.",
    usage: "",
    usageDelim: ""
}
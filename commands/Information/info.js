exports.run = async (client,msg) => {
   var information = [
       "Tombot is a multipurpose bot",
       "He can do many things like:",
       "> Welcome users to your server. And also wish them farewell. DMs Included.",
       "Suggestions welcome on the [issues page](https://github.com/DeadClap/TomBot/issues)"
   ]
   var embed = new client.methods.Embed()
   .setDescription(information)
//    return msg.channel.send(information, {code: true});
   return msg.channel.send({embed})

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
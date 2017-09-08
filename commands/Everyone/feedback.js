const ghissues = require('ghissues')
    , authOptions = {
        user: 'DiscordTomBot',
        token: require('../../bot_logins.js').tomGithub
    }
exports.run = async (client, msg, [t, ...body]) => {
    var myserver = client.guilds.get('332178051154706432')
    var fbLog = myserver.channels.find('name', 'feedback-log')
    var b = body.join(' ');
    if (t === "fReq" || t === "freq") {
        var type = "feature"
    } else {
        var type = t
    }

    var data = {
        title: "Feedback from " + msg.author.tag + " on " + msg.guild.name,
        body: b,
        labels: [client.funcs.toTitleCase(type), "Bot Sent"]
    }
    ghissues.create(authOptions, 'DeadClap', 'TomBot', data, function (err, issue) {
        if (err) {
            client.emit("error", err)
        }
        console.log(issue)

        var embed = new client.methods.Embed()
            .setTitle(data.title)
            .setDescription(data.body)
            .addField('Keep track of your feedback', `[Click here to go to github](${issue.html_url})`)
        return msg.channel.send('Thanks for your feedback!', { embed }) && fbLog.send({ embed })
    })


    // return msg.channel.send(`${client.funcs.toTitleCase(type)} | ${b}`)
};



exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 0,
    botPerms: [],
    cooldown: 3600
};

exports.help = {
    name: "feedback",
    description: "Allows the send to send feedback to the developers",
    usage: "<bug|fReq|comment> <body:str> [...]",
    usageDelim: " ",
    extendedHelp: "Makes sending of feature requests (fReq), bugs, and comments to the dev easier."
}

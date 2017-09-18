exports.run = async /*Don't forget async*/ (client, msg, [user, ...reason] /* if you add anything to help.usage add the names here. in an Array, if you have a [...] after an arg use [arg1,arg2,...arg3] if you third arg is more than one word.*/) => {
    msg.reply('Indev')
};

exports.conf = {
    enabled: true, // Self Explainatory - Ignore my spelling
    runIn: ['text'], // Channel Types this command can run
    aliases: [], // Other commands that trigger this one
    permLevel: 2, // Minumum Perms required to run this command
    requireFuncs: [], // Funcs required for this to work
    requiredSettings: []  // Guild Settings required for this to run
    //cooldown: 0  // uncomment the first bit to use cooldown function
};

exports.help = {
    name: 'warn', // name of the command
    description: "Warns a user of breaking a rule or guideline", // Description of the command for the help command
    usage: "<user:mention> <reason:str> [...]", // as mentioned above this is your usage string. e example 1: "<user:mention> <reason:str> [...]" in the (client, msg, [user,...reason])
    usageDelim: " " // This is what to split your arguments by, can be a space, comma or anything you want.
};

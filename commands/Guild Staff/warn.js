exports.run = async (client, msg, [user, ...reason]) => {
    msg.reply('Indev')
};

exports.conf = {
    enabled: true, 
    runIn: ['text'], 
    aliases: [], 
    permLevel: 2, 
    requireFuncs: [], 
    requiredSettings: []  
    
};

exports.help = {
    name: 'warn', // name of the command
    description: "Warns a user of breaking a rule or guideline", // Description of the command for the help command
    usage: "<user:mention> <reason:str> [...]", // as mentioned above this is your usage string. e example 1: "<user:mention> <reason:str> [...]" in the (client, msg, [user,...reason])
    usageDelim: " " // This is what to split your arguments by, can be a space, comma or anything you want.
};

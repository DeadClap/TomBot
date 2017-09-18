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
    name: 'warn', 
    description: "Warns a user of breaking a rule or guideline", 
    usage: "<user:mention> <reason:str> [...]",
    usageDelim: " " 
};

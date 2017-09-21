const {
  Client,
  PermLevels
} = require('komada');

var prefix = "t."
var permStructure = new PermLevels()
  .addLevel(0, false, () => true)
  .addLevel(2, false, (client, msg) => {
    if (!msg.guild || !msg.guild.settings.modRole) return false;
    const modRole = msg.guild.roles.get(msg.guild.settings.modRole);
    return modRole && msg.member.roles.has(modRole.id);
  })
  .addLevel(3, false, (client, msg) => {
    if (!msg.guild || !msg.guild.settings.adminRole) return false;
    const adminRole = msg.guild.roles.get(msg.guild.settings.adminRole);
    return adminRole && msg.member.roles.has(adminRole.id);
  })
  .addLevel(4, false, (client, msg) => msg.guild && msg.author.id === msg.guild.owner.id)
  .addLevel(8, false, (client, msg) => client.config.extraCFG.owners.includes(msg.author.id))
  .addLevel(9, true, (client, msg) => msg.author.id === client.config.ownerID)
  .addLevel(10, false, (client, msg) => msg.author.id === client.config.ownerID);

const tomBot = new Client({
  ownerID: "195223544186142727",
  prefix,
  clientOptions: {
    fetchAllMembers: true,
  },
  permStructure,
  provider: {
    engine: "json"
  },
  cmdLogging: true,
  extraCFG: require('./extraCfg.json'),
  debug: true
});
var token = require('../bot_logins.json').Tom;
tomBot.login(token)

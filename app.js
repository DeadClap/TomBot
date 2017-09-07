const Komada = require('komada');

const tomBot = new Komada.Client({
  ownerID: "195223544186142727",
  prefix: "t.",
  clientOptions: {
    fetchAllMembers: true,
  },
  provider: { engine: "json" },
  cmdLogging: true,
  extraCFG: require('./extraCfg.json')
});

tomBot.permStructure.addlevel(8, false, (client, msg) => client.config.extraCFG.owners.includes(msg.author.id))

tomBot.login(require('../bot_logins.json').Tom)

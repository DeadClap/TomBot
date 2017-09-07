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

tomBot.permStructure.addLevel(8, false, (client, msg) => msg.author.username === "Faith");

tomBot.login(require('../bot_logins.json').Tom)

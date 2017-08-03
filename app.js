const Komada = require('komada');

const tomBot = new Komada.Client({
  ownerID: "195223544186142727",
  prefix: "t.",
  clientOptions: {
    fetchAllMembers: true,
  },
  provider: { engine: "sqlite" }
});

tomBot.login(require('../bot_logins.json').Tom)
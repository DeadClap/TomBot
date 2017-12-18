const {Client, PermissionLevels} = require('komada');  
require('dotenv').config()
const bot = new Client({
    ownerID : "195223544186142727",
    prefix: "b.",
    clientOptions: {
      fetchAllMembers: false,
    },
    cmdLogging: true,
    provider: { engine: "sqlite" }
});

bot.login(process.env.DTOKEN);
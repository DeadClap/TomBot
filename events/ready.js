exports.run = (client) => {
    client.user.setGame(`with ${client.users.size} users on ${client.guilds.size} servers`)
}
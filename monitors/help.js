exports.conf = {
    enabled: true,
    ignoreBots: true,
    ignoreSelf: true
}

exports.run = async (client, msg, cmd) => {
  if (msg.content === client.user.username + ', help') {
      client.commands.get('help').run(client, msg, [])
  }
}
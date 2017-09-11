module.exports = (members) => {
    var u = 0
    var b = 0

    members.forEach(m => {
        if (m.user.bot) b = b + 1
        if (!m.user.bot) u = u + 1
    })
    return [u, b]
}
let handler = async (m, { conn, text }) => {
  if (!text) throw 'No Text'
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.profilePictureUrl(m.sender).catch(_ => 'https://telegra.ph/file/748a0245d732559d9a25c.png'),
    comment: text,
    username: conn.getName(m.sender)
  }), 'yt-comment.png', 'Here is your comment', m)
}

handler.help = ['ytcomment <comment>']
handler.tags = ['misc']

handler.command = /^(ytcomment)$/i

export default handler

import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Ex :.logokeneki Umar'
  m.reply('Proses...')
  let res = `https://ziy.herokuapp.com/api/maker/kaneki?nama=${response[0]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'kaneki.jpg', `By Umar Devil 🍫`, m, false)
}
logo-neko.js = ['logokaneki'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logokaneki)$/i

export default handler

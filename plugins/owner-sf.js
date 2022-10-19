import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `uhm.. Where Is The Plugin?\n\nUsage:\n${usedPrefix + command} <teks>\n\nPlugin:\n${usedPrefix + command} plugins/umardevil.js`
    if (!m.quoted.text) throw `balas pesan nya!`
    let path = `${text}`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`🍫Saved in ${path}`)
}
handler.help = ['plugin'].map(v => v + ' <Link>')
handler.tags = ['owner']
handler.command = /^plugin$/i

handler.rowner = true
export default handler

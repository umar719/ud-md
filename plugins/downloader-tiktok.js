import api from 'caliph-api'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Link tiktoknya mana?\n\ncontoh:\n${usedPrefix}${command} https://vt.tiktok.com/ZSdK7vr3C/?k=1`
    let res = await api.downloader.tiktok(args[0])
    let url = res.nowm
    await conn.sendFile(m.chat, url, '', `*DONE*`, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tik|tt|tiktok)$/i

export default handler

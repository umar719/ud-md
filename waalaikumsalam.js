import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = ` 📚 _وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ_\n_wa\'alaikumussalam wr.wb._\n
*Tʜᴇ ᴘᴇʀꜱᴏɴ ᴡʜᴏ ɢʀᴇᴇᴛꜱ ʜɪᴍ ʟɪᴋᴇ ᴛʜɪꜱ ᴡɪʟʟ ɢᴇᴛ 30 ʀᴇᴡᴀʀᴅꜱ, ᴛʜᴇɴ ᴛʜᴇ ᴘᴇʀꜱᴏɴ ʜᴇ ᴀᴅᴅʀᴇꜱꜱᴇꜱ ᴏʀ ʜᴇᴀʀꜱ ʀᴇꜱᴘᴏɴᴅꜱ ᴡɪᴛʜ ᴛʜᴇ ꜱᴀᴍᴇ ꜱᴇɴᴛᴇɴᴄᴇ, Wᴀʟᴀᴏʟᴜᴍꜱꜱᴀʟᴀᴍ, ᴏʀ ɪꜱ ɢʀᴇᴇᴛᴇᴅ ᴡɪᴛʜ ꜱᴏᴍᴇᴏɴᴇ ᴇʟꜱᴇ (Wᴀʀɪᴅʜᴡᴀᴀɴᴀ). Iᴛ ᴍᴇᴀɴꜱ SᴇʟAɪɴ Tʜᴀɴ'A Hᴀᴘᴘʏ Aʟꜱᴏ Aꜱᴋɪɴɢ Gᴏᴅ Sᴡᴛ'* `
await conn.send2ButtonDoc(m.chat, `${htki} ᴜ s ᴇ ʀ s ${htka}`, info, 'Jawab', '.tts id Waalaikumsalam', '🎀 Menu', '.menu', fpayment, adReply)
await conn.sendMessage(m.chat, {
          react: {
            text: '🥀',
            key: m.key,
          }})
}
handler.customPrefix = /^(assalam(ualaikum)?|(salamualaiku|(sa(lamu|m)liku|sala))m)$/i
handler.command = new RegExp

export default handler

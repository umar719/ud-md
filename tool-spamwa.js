let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw '*[ ⚠️ ] ENTER THE NUMBER THAT WOULD BE IN THE SPAM MESSAGE !*\n*PENGGUNAAN YANG BENAR:*\n*—◉ #spamwa nomor|teks|jumlah*\n*jumlah:*\n*—◉ #spamwa 5219999999999|hai :v|25*'
if (!pesan) throw '*[ ⚠️ ] PLEASE INCLUDE THE MESSAGE TO SPAM!*\n*USE THE CORRECT:*\n*—◉ #spamwa nomor|teks|jumlah*\n*CONTOH:*\n*—◉ #spamwa 5219999999999|merespons :v|25*'
if (jumlah && isNaN(jumlah)) throw '*[ ⚠️ ] QUANTITY MUST BE NUMBER!*\n*PENGGUNAAN YANG TEPAT:*\n*—◉ #spamwa nomor|teks|jumlah*\n*CONTOH:*\n*—◉ #spamwa 5219999999999|merespons :v|25*'

let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 50) throw '*[ ⚠️ ] TOO MANY MESSAGES! QUANTITY MUST BE LESS THAN 50 MESSAGES*️'
await m.reply(`*[❗] SPAM MESSAGE TO NUMBER ${nomor} IT WAS DONE SUCCESSFULLY *\n*QUANTITY SENT:*\n*—◉ ${fixedJumlah} waktu!*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['tools']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.private = true
handler.limit = true
export default handler

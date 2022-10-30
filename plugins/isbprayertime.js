import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 Prayer Time In Islamabad✨」*


*FAJR  =   5:01 AM*


*SUNRISE   =   6:25 AM*


*DHUHR   =   11:51 AM*


*ASR      =  3:39 PM*


*MAGHRIB  =  5:18 PM*


*ISHA   =   6:42 PM*



*H3Y J4WN 4LL CR34D!75 7O UM4R R3H4N✨👻😩*


`.trim()
  m.reply(caption)
}
handler.help = ['isbprayertime']
handler.tags = ['isbprayertime']
handler.command = /^(isbprayertime)$/i


export default handler

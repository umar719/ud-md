import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 Ud-Md Bot Cooded By Umar Rehman ✨」*

*Thanks For Using Ud-md Bot*


*Source Link!*

*github.com/umar404/ud-md*


*Vru Don't Forget Star*


*SUBSCRIBE YOUTUBE CHANNEL✨🍿👻*


*https://www.youtube.com/c/UMARMODS*



*Save Owner Number For Status Views And Say Done 🤤🤤🤤✨👻🍿*

*wa.me/923165123719*


*UMAR REHAN*


*16000000000*


*RAWALPINDI, PAKISTAN 🇵🇰*


*MOST FAMOUS PERSON ON WHATSAPP WORLD 👻🤤🤤🤤🤤✨😩*


*JOIN BOT GROUP 🤍 🍫 👑*


*https://chat.whatsapp.com/BBQgiM0adHc1m3wM6fEw5Y*

*UD-MD WHATSAPP BOT CODED BY UMAR DEVIL 🍫*



*ALL CREADITS TO UMAR REHAN 🍫 ✨ 😬*


`.trim()
  m.reply(caption)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i


export default handler 

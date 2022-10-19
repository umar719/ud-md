import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 Owner Intro 」*

 *Name*

               *𝐷𝛥𝑅𝛫 𝐷𝛯𝛻𝛪𝐿 👑🇵🇰🤍*


*From*

           *Rawalpindi, Pakistan 🇵🇰*


*Age*

       *160000*


*Github Id Link!*

*https://github.com/umar404*


*Owner Number*


*wa.me/923165123719*


*Save Owner Number For Whatsapp Status Views And Say Done🍫🤍*


`.trim()
  m.reply(caption)
}
handler.help = ['ownerintro']
handler.tags = ['intro']
handler.command = /^(ownerintro)$/i


export default handler

function handler(m) {
/*  
  const kontak = {
	"displayName": 'Dark Devil Umar',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('923165123719@s.whatsapp.net')}\nitem1.TEL;waid=923165123719:923165123719\nitem1.X-ABLabel:Busy.\nURL;My Yt: https://www.youtube.com/c/UMARMODS\nEMAIL;Email Owner: umardevil48@gamil.com\nORG: Save My  + Owner number\nTEL;My number ;waid=923165123719:923165123719\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  */
this.sendContact(m.chat, [['923165123719', 'Owner']], m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler

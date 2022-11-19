function handler(m) {
  
  const kontak = {
	"displayName": 'My Owner Umar',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('923165123719@s.whatsapp.net')}\nitem1.TEL;waid=923165123719:923165123719\nitem1.X-ABLabel:save-me.\nURL;My Web: https://github.com/umar404\nEMAIL;Email Owner:umardevil48@gamil.com\nORG: NOT A BOT +SAVE ME\nTEL;My number ;waid=4917396999993:4917396999993\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler

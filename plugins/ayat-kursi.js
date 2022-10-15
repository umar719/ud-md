import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 Ayat Kursi 」*

اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ

“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”

ترجمہ: اللہ، کوئی معبود نہیں ہے (جس کی عبادت کی جائے) مگر وہ جو ہمیشہ زندہ ہے اور (اپنی مخلوقات کی) دیکھ بھال کرتا ہے، نہ وہ سوتا ہے اور نہ سوتا ہے، اسی کا ہے جو کچھ آسمانوں میں ہے اور جو کچھ ہے۔ زمین، کوئی نہیں ہے جو شفا دے سکتا ہے، خدا کے پاس اس کی اجازت کے بغیر.

Meaning: Allah, there is no God (who deserves to be worshipped) but He Who lives eternally and continues to take care of (His creatures); He does not sleep and does not sleep. To Him belongs what is in the heavens and on earth. There is no one who can give healing. at the side of God without His permission." 
(QS. Al Baqarah: 255)
`.trim()
  m.reply(caption)
}
handler.help = ['ayatkursi']
handler.tags = ['quran']
handler.command = /^(ayatkursi)$/i


export default handler

module.exports = [{
  name: "çal",
  aliases: ["p","play","oynat"],
  $if: "v4",
  code:`
  <:tik_yunusli:950808333458219079>  **Şarkı listeye eklendi** \`Liste İçin Y!sıra\`
  $let[a;$playTrack[youtube;$noMentionMessage]]
  $if[$voiceID[$clientID]==]
  $channelSendMessage[$channelID;<a:katilma_yunusli:933431964797657098> **\`$channelName[$voiceID[$authorID]]\` kanalına girdim**]
  $joinVC[$voiceID[$authorID]]
  $endif
  $onlyIf[$voiceID[$authorID]!=;<:carpi_yunusli:950808351581810718> **Bir sesli kanala girmelisin.**]
  $onlyIf[$noMentionMessage!=;<:carpi_yunusli:950808351581810718> **Bir şarkı ismi gir.**]
  $suppressErrors[<:carpi_yunusli:950808351581810718> **Hata!**
**Hata sebebi:** \`Düşüncemize göre bot kapandıktan sonra bu komutu kullanıyorsun bu hatanın tek çözümü botun bağlantısını kesmektir.\`]
  `
},{
  name: "durdur",
  aliases: ["stop","dur","bekle"],
  code:`
  $pauseTrack
  <:tik_yunusli:950808333458219079> **\`$songInfo[title]\` durduruldu**
  $onlyIf[$queue[1;10;<:nokta:991242669470789642> **{title}**]!=;<:carpi:991017937605386274> **Şuan bir şarkı zaten çalmıyor.**]
  $onlyIf[$voiceID[$clientID]!=;<:carpi_yunusli:950808351581810718> **Şuan bir şarkı zaten çalmıyor.**]
  `
},{
  name: "devam",
  aliases: ["resume"],
  code:`
  $resumeTrack
  <:tik_yunusli:950808333458219079> **\`$songInfo[title]\` devam ediyor.**
  $onlyIf[$queue[1;10;<:nokta:991242669470789642> **{title}**]!=;<:carpi:991017937605386274> **Şuan bir şarkı zaten çalmıyor.**]
  $onlyIf[$voiceID[$clientID]!=;<:carpi_yunusli:950808351581810718> **Şuan bir şarkı zaten çalmıyor.**]
  `
},{
  name: "sıra",
  aliases: ["queue","liste","şarkılar"],
  code:`
$queue[1;10;- **{title}**]
 $onlyIf[$queue[1;10;<:nokta:991242669470789642> **{title}**]!=;<:carpi:991017937605386274> **Şuan bir şarkı zaten çalmıyor.**]
  $onlyIf[$voiceID[$clientID]!=;<:carpi_yunusli:950808351581810718> **Şuan bir şarkı zaten çalmıyor.**]
  `
},{
  name: "ses",
  aliases: ["volume"],
  code:`
  $volume[$noMentionMessage]
  <:tik_yunusli:950808333458219079> **Ses başarıyla \`$noMentionMessage\` olarak ayarlandı.**
  $onlyIf[$noMentionMessage<=150;<:carpi_yunusli:950808351581810718> **Hatalı kullanım! Doğru kullanım - Y!ses 50-150**.]
  $onlyIf[$noMentionMessage>=50;<:carpi_yunusli:950808351581810718> **Hatalı kullanım! Doğru kullanım - Y!ses 50-150**.]
  $onlyIf[$isNumber[$noMentionMessage]!=false;<:carpi_yunusli:950808351581810718> **Hatalı kullanım! Doğru kullanım - Y!ses 50-150**.]
  $onlyIf[$queue[1;10;<:nokta:991242669470789642> **{title}**]!=;<:carpi:991017937605386274> **Şuan bir şarkı zaten çalmıyor.**]
  $onlyIf[$voiceID[$clientID]!=;<:carpi_yunusli:950808351581810718> **Şuan bir şarkı zaten çalmıyor.**]
  `
},{
  name: "ayrıl",
  aliases: ["leave"],
  code:`
  $leaveVC
<a:cikma_yunusli:933432054018891816> **$channelName[$voiceID[$clientID]] kanalından ayrıldım.**
 $onlyIf[$voiceID[$clientID]!=;<:carpi_yunusli:950808351581810718> **Şuan bir şarkı zaten çalmıyor**]
  `
},{
  name: "tekrar",
  aliases: ["loop"],
  code:`
  $loopMode[queue]
<:tik_yunusli:950808333458219079> **Loop modu açıldı**
 $onlyIf[$queue[1;10;<:nokta:991242669470789642> **{title}**]!=;<:carpi_yunusli:950808351581810718> **Şuan Bir Şarkı Zaten Çalmıyor**]
 $onlyIf[$voiceID[$clientID]!=;<:carpi_yunusli:950808351581810718> **Şuan Bir Şarkı Zaten Çalmıyor**]
  `
},{
  name: "tekrar-kapat",
  aliases: ["loop-close"],
  code:`
  $loopMode[none]
<:tik_yunusli:950808333458219079> **Loop modu kapatıldı.**
 $onlyIf[$queue[1;10;<:nokta:991242669470789642> **{title}**]!=;<:carpi:991017937605386274> **Şuan bir şarkı zaten çalmıyor.**]
  $onlyIf[$voiceID[$clientID]!=;<:carpi_yunusli:950808351581810718> **Şuan bir şarkı zaten çalmıyor.**]
  `
},{
  name: "geç",
  aliases: ["skip","atla","ileri"],
  code:`
  $skip
<:tik_yunusli:950808333458219079> **\`$songInfo[title]\` geçildi.**
 $onlyIf[$queue[1;10;<:nokta:991242669470789642> **{title}**]!=;<:carpi:991017937605386274> **Şuan bir şarkı zaten çalmıyor.**]
  $onlyIf[$voiceID[$clientID]!=;<:carpi_yunusli:950808351581810718> **Şuan bir şarkı zaten çalmıyor.**]
  `
}]
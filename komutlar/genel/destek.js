module.exports = [{
  name: "destek",
  code:`
<:yunusdev_pp:1010874668338655252> **Bot ile ilgili bir sorun mu yaşıyorsun?**
$addButton[1;Hayır;2;destekhayır_$authorID;no;<:carpi_yunusli:950808351581810718>]
$addButton[1;Evet;2;destekevet_$authorID;no;<:tik_yunusli:950808333458219079>]
$onlyIf[$get[kurallar]!=null;{execute:kurallar}] 
$let[kurallar;$djsEval[const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.get("kurallar_$authorID")
;yes]]
  `
},{
  type: "interaction",
  prototype: "button",
  $if: "v4",
  code:`
$if[$advancedTextSplit[$interactionData[customId];_;1]==destekhayır]
$interactionUpdate[<:pp_yunusli:936254054282174464> **Sorun olmaması beni gururlandırdı.**;;{actionRow:{button:Hayır:2:a:yes:<:carpi_yunusli:950808351581810718>}}]
$endif
$if[$advancedTextSplit[$interactionData[customId];_;1]==destekevet]
$interactionUpdate[<:pp_yunusli:936254054282174464> **Hmm hatamın bulunması beni üzdü.Hatayı butona basarak yetkililerime anlatabilirsin.**;;{actionRow:{button:Destek mesajı gönder!:2:destekmesajı_$authorID:no:<:ticket_yunusli:933431842311381062>}}]
$endif
$if[$advancedTextSplit[$interactionData[customId];_;1]==destekmesajı]
$interactionModal[Hey merhaba!;destek;
    {actionRow:
      {textInput:Sorununuz nedir? Kısaca:1:kısa:yes::4:25}
    }
    {actionRow:
      {textInput:Sorununuz nedir?:2:uzun:yes::50:500}
    }
  ]
$endif
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "content":"<:carpi_yunusli:950808351581810718> | **Bu embed sana ait değil**","ephemeral": true, "options":{ "interaction": true}}]
$onlyIf[$checkContains[$advancedTextSplit[$interactionData[customId];_;1];destekhayır;destekevet;destekmesajı]==true;]
`
},{
  name: "destek",
  prototype: 'modal',
  type: "interaction",
  code: `
  $interactionUpdate[**Sorununu ne yazdıysan aynısını gönderdim.** \`Sorun değilse karaliste sizi bekliyor.\`

**Sorun (Kısaca)**
\`$textInputValue[kısa]\`

**Açıklayıcı bir şekilde sorun**
\`$textInputValue[uzun]\`
  ]
$channelSendMessage[1055191748957179934;{newEmbed:{title:$textInputValue[kısa]}{thumbnail:$userAvatar}{color:5865F2}{footer:$userTag - $authorID Raporladı}{description:
**Genel sorun:**
\`$textInputValue[uzun]\`
}}]
  `
}]
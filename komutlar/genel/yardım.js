module.exports = [{
  name: "yardım",
  code:`
$title[1;<:ev_yunusli:1047943420955611157> Ana sayfa]
$thumbnail[1;$userAvatar[$clientID]]
$description[1;**Buton Açıklamaları**
<:sol_yunusli:1045345483301863434> **Geri gelmeni sağlar.**

<:sa_yunusli:1045345807030816929> **İleri gitmeni sağlar.**
]
$color[1;5865F2]
$footer[1;$userTag;$userAvatar]
$addButton[1;Davet Linkim;link;https://discord.com/api/oauth2/authorize?client_id=$clientID&permissions=8&scope=bot;no;<:link_yunusli:934792237408223285>]
$addButton[1;Destek Sunucum;link;https://discord.gg/ynHVHtRgH2;no;<:link_yunusli:934792237408223285>]
$addButton[2;;2;sayfa2_$authorID;no;<:sa_yunusli:1045345807030816929>]
$addButton[2;1/5;2;b;yes;]
$addButton[2;;2;a;yes;<:sol_yunusli:1045345483301863434>]
$onlyIf[$get[kurallar]!=null;{execute:kurallar}] 
$let[kurallar;$djsEval[const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.get("kurallar_$authorID")
;yes]]
$onlyIf[$checkContains[$authorID;$botOwnerID;$getVar[owner]]$getGlobalUserVar[bakım;$clientID]!=falseevet;{execute:bakım}]
  `
},{
  type: "interaction",
  prototype: "button",
  $if: "v4",
  code:`
$if[$advancedTextSplit[$interactionData[customId];_;1]==sayfa2]
$interactionUpdate[;{newEmbed:{title:
<:uye_yunusli:934792156156145715> Kullanıcı}{thumbnail:$userAvatar[$clientID]}{description:
- **$getVar[prefix]istatistik**: ↷
\`Botun istatistiklerini gösterir.\`
- **$getVar[prefix]avatar**: ↷
\`Kişinin avatarını gösterir.\`
- **$getVar[prefix]sunucu-bilgi**: ↷
\`Sunucu bilgilerini gösterir.\`
- **$getVar[prefix]ping**: ↷
\`Botun pingini gösterir.\`
- **$getVar[prefix]destek**: ↷
\`Yaşanan sorunla alakalı destek alırsın.\`
- **$getVar[prefix]ayarlar**: ↷
\`Sunucu ayarlarını gösterir.\`
}{color:5865F2}{footer:$userTag:$userAvatar}};{actionRow:{button:Destek Sunucum:link:$get[sunucu]:no:<:link_yunusli:934792237408223285>}{button:Davet Linkim:link:$get[davet]:no:<:link_yunusli:934792237408223285>}}{actionRow:{button::2:anasayfa_$authorID:no:<:sol_yunusli:1045345483301863434>}{button:2/5:2:b:yes:}{button::2:sayfa3_$authorID:no:<:sa_yunusli:1045345807030816929>}}]
$endif
$if[$advancedTextSplit[$interactionData[customId];_;1]==anasayfa]
$interactionUpdate[;{newEmbed:{title:
<:ev_yunusli:1047943420955611157> Ana sayfa}{thumbnail:$userAvatar[$clientID]}{description:**Buton Açıklamaları**
<:sol_yunusli:1045345483301863434> **Geri gelmeni sağlar.**

<:sa_yunusli:1045345807030816929> **İleri gitmeni sağlar.**}{color:5865F2}{footer:$userTag:$userAvatar}};{actionRow:{button:Destek Sunucum:link:$get[sunucu]:no:<:link_yunusli:934792237408223285>}{button:Davet Linkim:link:$get[davet]:no:<:link_yunusli:934792237408223285>}}{actionRow:{button::2:a:yes:<:sol_yunusli:1045345483301863434>}{button:1/5:2:b:yes:}{button::2:sayfa2_$authorID:no:<:sa_yunusli:1045345807030816929>}}]
$endif
$if[$advancedTextSplit[$interactionData[customId];_;1]==sayfa3]
$interactionUpdate[;{newEmbed:{title:<:guard_yunusli:935238206163652628> Moderasyon}{thumbnail:$userAvatar[$clientID]}{description:
- **$getVar[prefix]sayaç**: ↷
\`Giriş çıkışı loglar.\`
- **$getVar[prefix]level-sistemi**: ↷
\`Level sistemini ayarlarsın.\`
}{color:5865F2}{footer:$userTag:$userAvatar}};{actionRow:{button:Destek Sunucum:link:$get[sunucu]:no:<:link_yunusli:934792237408223285>}{button:Davet Linkim:link:$get[davet]:no:<:link_yunusli:934792237408223285>}}{actionRow:{button::2:sayfa2_$authorID:no:<:sol_yunusli:1045345483301863434>}{button:3/5:2:b:yes:}{button::2:sayfa4_$authorId:no:<:sa_yunusli:1045345807030816929>}}]
$endif
$if[$advancedTextSplit[$interactionData[customId];_;1]==sayfa4]
$interactionUpdate[;{newEmbed:{title:<a:yunusli_lirasi:960542370187870308> Eğlence}{thumbnail:$userAvatar[$clientID]}{description:
- **$getVar[prefix]kur**: ↷
\`Türkiye döviz kurunu gösterir.\`
- **$getVar[prefix]kaçcm**: ↷
\`Ölçüm yapar.\`
- **$getVar[prefix]tkm**: ↷
\`Taş kağıt makas oynarsın.\`
}{color:5865F2}{footer:$userTag:$userAvatar}};{actionRow:{button:Destek Sunucum:link:$get[sunucu]:no:<:link_yunusli:934792237408223285>}{button:Davet Linkim:link:$get[davet]:no:<:link_yunusli:934792237408223285>}}{actionRow:{button::2:sayfa3_$authorID:no:<:sol_yunusli:1045345483301863434>}{button:4/5:2:b:yes:}{button::2:sayfa5_$authorID:no:<:sa_yunusli:1045345807030816929>}}]
$endif
$if[$advancedTextSplit[$interactionData[customId];_;1]==sayfa5]
$interactionUpdate[;{newEmbed:{title:<a:muzik:1056548569282261042> Müzik}{thumbnail:$userAvatar[$clientID]}{description:
- **$getVar[prefix]çal**: ↷
\`Müzik başlatır.\`
- **$getVar[prefix]durdur**: ↷
\`Müziği durdurur.\`
- **$getVar[prefix]devam**: ↷
\`Müziği devam ettirir.\`
- **$getVar[prefix]sıra**: ↷
\`Müzik sırasını gösterir.\`
- **$getVar[prefix]ses**: ↷
\`Ses seviyesini ayarlarsın.\`
- **$getVar[prefix]ayrıl**: ↷
\`Sesli kanaldan ayrılırım.\`
- **$getVar[prefix]tekrar**: ↷
\`Tekrar modunu açarsın.\`
- **$getVar[prefix]tekrar-kapat**: ↷
\`Tekrar modunu kapatırsın.\`
}{color:5865F2}{footer:$userTag:$userAvatar}};{actionRow:{button:Destek Sunucum:link:$get[sunucu]:no:<:link_yunusli:934792237408223285>}{button:Davet Linkim:link:$get[davet]:no:<:link_yunusli:934792237408223285>}}{actionRow:{button::2:sayfa4_$authorID:no:<:sol_yunusli:1045345483301863434>}{button:5/5:2:b:yes:}{button::2:a:yes:<:sa_yunusli:1045345807030816929>}}]
$endif
$let[sunucu;https://discord.gg/ynHVHtRgH2]
$let[davet;https://discord.com/api/oauth2/authorize?client_id=$clientID&permissions=8&scope]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "content":"<:carpi_yunusli:950808351581810718> | **Bu embed sana ait değil**","ephemeral": true, "options":{ "interaction": true}}]
$onlyIf[$checkContains[$advancedTextSplit[$interactionData[customId];_;1];sayfa2;anasayfa;sayfa3;sayfa4;sayfa5]==true;]
`
}]
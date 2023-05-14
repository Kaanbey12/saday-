module.exports = [{
  name: "sunucu-bilgi",
  aliases: ["sunucu"],
  code:`
$title[1;<:servers_yunusli:934736438753378305> Sunucu Bilgi]
$thumbnail[1;$userAvatar]
$description[1;
<:ticket_yunusli:933431842311381062> __**Sunucunun Genel Bilgileri**__
**Sunucu İsmi:** \`[ $serverName ]\`
**Sunucu Kurucusu:** \`[ $userTag[$ownerID] ]\`
**Sunucu Id:** \`[ $guildID ]\`
**Sunucu Konumu:** \`[ $djsEval[message.guild.preferredLocale;yes] ]\`
**Oluşturulma Tarihi:** \`[ $creationDate[$guildID] ]\`

<:roket_yunusli:933432226060849245> __**Boost Bilgileri**__
**Boost Sayısı:** \`[ $serverBoostCount ]\`
**Sunucu Leveli:** \`[ $replaceText[$serverBoostLevel;NONE;0] ]\`

<:uye_yunusli:934792156156145715> __**İstatistikler**__
**Toplam Üye Sayısı:** \`[ $membersCount ]\`
**Üye Sayısı:** \`[ $sub[$membersCount;$botCount] ]\`
**Bot Sayısı:** \`[ $botCount ]\`

<:guard_yunusli:935238206163652628> __**Güvenlik**__
**Giriş Güvenliği:** \`[ $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$serverVerificationLevel;NONE;Yok];LOW;Düşük];MEDIUM;Orta];HIGH;Yüksek];VERY_HIGH;Çok Yüksek] ]\`
**Filtreleme Seviyesi:** \`[ $replaceText[$replaceText[$replaceText[$serverContentFilter;DISABLED;Kapalı];MEMBERS_WITHOUT_ROLES;Rolü olmayan üyeleri];ALL_MEMBERS;Tüm üyeleri] ]\`

<:metin_yunusli:933431877690355784> __**Rol, Emoji Ve Kanal Bilgileri**__
**Rol Sayısı:** \`[ $roleCount ]\`
**Emoji Sayısı:** \`[ $emojiCount[$guildID] ]\`
**Kanal Sayısı:** \`[ $channelCount ]\`
**Metin:** \`[ $channelCount[$guildID;Text] ]\` | **Ses:** \`[ $channelCount[$guildID;Voice] ]\` | **Kategori:** \`[ $channelCount[$guildID;Category] ]\` 

<:link_yunusli:934792237408223285> __**Linkler**__
[[Sunucu iconu]($serverIcon)]
]
$color[1;5865F2]
$footer[1;$userTag;$userAvatar]  
$onlyIf[$get[kurallar]!=null;{execute:kurallar}] 
$let[kurallar;$djsEval[const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.get("kurallar_$authorID")
;yes]]
  `
}]
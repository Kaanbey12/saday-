module.exports = [{
  name: "kullanıcı-bilgi",
  aliases: ["kişi"],
  code:`
$title[1;<:uye_yunusli:934792156156145715> Kullanıcı bilgi]
$thumbnail[1;$userAvatar[$mentioned[1;yes]]]
$description[1;
<:uye_yunusli:934792156156145715> __**Kullanıcı Bilgi**__
**İsmi:**
\`- [ $username[$mentioned[1;yes]] ]\`
**İd:**
\`- [ $mentioned[1;yes] ]\`
**#:**
\`- [ $discriminator[$mentioned[1;yes]] ]\`

<:plus_yunusli:933432197938049105> __**Tarihler**__
**Hesap kuruluş tarihi:** \`- [ $creationDate[$mentioned[1;yes];date] ] \`

<:ticket_yunusli:933431842311381062> __**Rolleri [$userRolesCount[$mentioned[1;yes]]]**__
$userRoles[$mentioned[1;yes];$guildID;mention]

<:yunusdev_pp:1010874668338655252> __**Oyun İstatistikleri**__
**Taş - Kağıt - Makas:** \`[ Kazanma: [ $getGlobalUserVar[tkmw;$mentioned[1;yes]] ] | Kaybetme: [ $getGlobalUserVar[tkml;$mentioned[1;yes]] ] | Berabere: [ $getGlobalUserVar[tkmb;$mentioned[1;yes]] ] ]\`
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
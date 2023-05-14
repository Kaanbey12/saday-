module.exports = [{
  name: "istatistik",
  aliases: ["bot-bilgi","botbilgi","i"],
  code:`
$title[1;<:pp_yunusli:936254054282174464> İstatistiklerim]
$thumbnail[1;$userAvatar[$clientID]]
$description[1;
<:crown_yunusli:974368313058660382> __**Kurucular:**__
<:yunusdev_pp:1010874668338655252> **[!                   YunusDEVᵁᴰᴾ](https://discord.com/users/980866019511898242)**

<:uye_yunusli:934792156156145715> __**Geliştiriciler:**__
<:uye_yunusli:934792156156145715> **[Mainsea](https://discord.com/users/930128403024216065)**

<:servers_yunusli:934736438753378305> __**Sunucu Sayım:**__
\`- [ $serverCount Server ]\`

<:uye_yunusli:934792156156145715> __**Kullanıcı Sayım:**__
\`- [ $allMembersCount Member ]\`

<:servers_yunusli:934736438753378305> __**Kanal Sayım:**__
\`- [ $allChannelsCount Channel ]\`

<:ping_yunusli:933431707925901353> __**Pingim:**__
\`- [ $ping MS ]\`

<:ram_yunusli:934736483011665920> __**Botun Hafızası Ve Diğer Bilgileri:**__
**İşletim Sistemi:** \`[ $get[işletim] ]\`
**Ram:** \`[ $ram MB/$maxRam ]\`
**Cpu:** \`[ $get[cpu] - %$cpu/100]\`
**Bit:** \`[ $get[bit] ]\`

<:nodejs_yunusli:936254018467008512> __**Kullanılan Yazılımlar**__
**Node.js:** \`[ $nodeVersion ]\`
**Aoi.js:** \`[ v$packageVersion ]\`

<:roket_yunusli:933432226060849245> __**Sistemin Açık Kalma Süresi**__
\`- [ $uptime ]\`
]
$color[1;5865F2]
$footer[1;$userTag;$userAvatar]
$let[işletim;$djsEval[const os = require('os')
os.platform;yes]]
$let[cpu;$djsEval[const os = require('os')
os.cpus().map(i => i.model)[0];yes]]
$let[bit;$djsEval[const os = require('os')
os.arch();yes]]
$onlyIf[$get[kurallar]!=null;{execute:kurallar}] 
$let[kurallar;$djsEval[const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.get("kurallar_$authorID")
;yes]]
`
}]
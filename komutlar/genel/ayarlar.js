module.exports = [{
  name: "ayarlar",
  code:`
$title[1;<:ayarlar_yunusli:933431817002963015> Sunucu Ayarları]
$thumbnail[1;$userAvatar[$mentioned[1;yes]]]
$description[1;
<a:hosgeldin_yunusli:933431907163717682> **Sayaç:**  $replaceText[[ <#$getServerVar[sayaçkanal]> ];[ <#> ];\`[ Kapalı ]\`]

<a:1773confetti1:989936969444376596> **Level sistemi:** **[ $replaceText[$replaceText[$getServerVar[levelsistemi];evet;Açık - [ Log - $replaceText[<#$getServerVar[levellog]>;<#>;Yok] ]];hayır;Kapalı] ]**
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
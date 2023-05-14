module.exports = [{
  name: "kurallar",
  type: "awaited",
  code:`
$title[1;<:kurallar_yunusli:934792199663656991> Kurallar]
$thumbnail[1;$userAvatar[$clientID]]
$description[1;
1 ) **Botun komutlarını spamlayarak bota ping yapmayınız.**
2 ) **Ayarladığınız sistemleri birdaha aynı kanala/role v.b. şeylere ayarlamayınız.**
3 ) **Bottaki bugları aleyhinize kullanmayınız yoksa karalisteye alınırsınız.**
4 ) **Bottaki komutlarda bug olursa destek ekibine bildiriniz.**

**Bu güne kadar toplam \`$get[kişi]\` kişi kuralları kabul etti.**
]
$let[kişi;$replaceText[$djsEval[
const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.get("kurallar_kişi");
;yes];null;0]]
$color[1;5865F2]
$footer[1;$userTag;$userAvatar]
$addButton[1;Kabul Et;3;kkabul_$authorID;no;<:tik_yunusli:950808333458219079>]
`
},{
  type: "interaction",
  prototype: "button",
  code:`
$interactionDelete
$wait[5s]
$interactionUpdate[;{newEmbed:{title:<:kurallar_yunusli:934792199663656991> Kurallar}{description:1 ) **Botun komutlarını spamlayarak bota ping yapmayınız.**
2 ) **Botun para birimini alışveriş etmek yasaktır.**
3 ) **Bottaki bugları aleyhinize kullanmayınız yoksa karalisteye alınırsınız.**
4 ) **Bottaki komutlarda bug olursa destek ekibine bildiriniz.**

**Bu güne kadar toplam \`$get[kişi]\` kişi kuralları kabul etti.**} {color:YELLOW}{footer:$userTag:$userAvatar}{thumbnail:$userAvatar[$clientID]}};{actionRow:{button:Kabul Et:3:a:yes:<:tik_yunusli:950808333458219079>}}]
$djsEval[
const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.set("kurallar_$authorID","evet");
;no]
$djsEval[
const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.add("kurallar_kişi","1");
;no]
$let[kişi;$sum[$replaceText[$djsEval[
const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.get("kurallar_kişi");
;yes];null;0];1]]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "content":"<:carpi_yunusli:950808351581810718> | **Bu embed sana ait değil**","ephemeral": true, "options":{ "interaction": true}}]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==kkabul;]
`
}]
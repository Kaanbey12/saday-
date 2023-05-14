module.exports = [{
  name: "level-sistemi",
  $if: "v4",
  code:`
$if[$message[1]==aç]
<:tik_yunusli:950808333458219079> **Level sistemi logu <#$mentionedChannels[1;yes]> olarak ayarlandı.**
$setServerVar[levellog;$mentionedChannels[1;yes]]
$setServerVar[levelsistemi;evet]
$endif
$if[$message[1]==kapat]
<:tik_yunusli:950808333458219079> **Level sistemi kapatıldı.**
$resetServerVar[levellog]
$setServerVar[levelsistemi;hayır]
$onlyIf[$getServerVar[levelsistemi]!=;<:carpi_yunusli:950808351581810718> **Level sistemi zaten kapalı**]
$endif
$onlyIf[$checkContains[$message[1];aç;kapat]!=false;<:carpi_yunusli:950808351581810718> **Hatalı kullanım! Doğru kullanım \`$getVar[prefix]level-sistemi aç/kapat {kanal} => (İsteğe bağlı) \`**]
  `
},{
  name: "$alwaysExecute",
  code:`
$if[$get[xpsınır]<=$get[xp];{execute:levelatladı}]
$let[xpsınır;$djsEval[
const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.get("levelxpsınır_$guildID_$authorID") || 75
;yes]]
$let[xp;$djsEval[
const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.get("levelxp_$guildID_$authorID")
;yes]]
$djsEval[
const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.add("levelxp_$guildID_$authorID","$get[randomxp]");
;no]
$let[randomxp;$random[5;9]]
$cooldown[7s;]
$onlyIf[$getServerVar[levelsistemi]!=hayır;]
  `
},{
  name: "levelatladı",
  type: "awaited",
  code:`
$if[$getServerVar[levellog]!=;{execute:levellog};<a:1773confetti1:989936969444376596> **Tebrikler <@$authorID>!** \`$get[level]\` **leveline ulaştın.**]
$djsEval[
const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.add("levelxpsınır_$guildID_$authorID",75)
;no]
$let[level;$djsEval[
const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.add("level_$guildID_$authorID", 1);
;yes]]
$djsEval[
const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
const xp = db.get("levelxp_$guildID_$authorID")
db.subtract("levelxp_$guildID_$authorID", xp);
;no]
  `
},{
  name: "levellog",
  type: "awaited",
  code:`
$channelSendMessage[$getServerVar[levellog];<a:1773confetti1:989936969444376596> **Tebrikler <@$authorID>!** \`$get[level]\` **leveline ulaştın.**]
$let[level;$djsEval[
const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.get("level_$guildID_$authorID");
;yes]]
  `
},{
  name: "rank",
  aliases: ["level","xp"],
  code:`
https://api.daimon-bot.ga/imagegen/rankcardv1?usertag=$uri[$userTag[$mentioned[1;yes]];encode]&avatar=$userAvatar[$mentioned[1;yes]]&xp=$get[xp]&total=$get[xpsınır]&level=$get[level]
$let[xp;$djsEval[
const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.get("levelxp_$guildID_$mentioned[1;yes]") || 0
;yes]]
$let[xpsınır;$djsEval[
const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.get("levelxpsınır_$guildID_$mentioned[1;yes]") || 75
;yes]]
$let[level;$djsEval[
const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.get("level_$guildID_$mentioned[1;yes]") || 0
;yes]]
  `
}]
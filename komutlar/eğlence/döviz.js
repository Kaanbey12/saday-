module.exports = [{
  name: "döviz",
  aliases: ["kur","dolar","euro","sterlin"],
  code:`
$deleteMessage[$get[a]]
$title[1;<a:yunusli_lirasi:960542370187870308> Döviz kuru]
$thumbnail[1;$userAvatar[$clientID]]
$description[1;
💵 **Dolar:** \`[ $get[dolar] ]\`

💶 **Euro:** \`[ $get[euro] ]\`

💷 **Sterlin:** \`[ $get[sterlin] ]\`
]
$color[1;5865F2]
$footer[1;$userTag;$userAvatar]
$let[dolar;$jsonRequest[https://sia-api.myressam.repl.co/doviz/dolar;message]]
$let[euro;$jsonRequest[https://sia-api.myressam.repl.co/doviz/euro;message]]
$let[sterlin;$jsonRequest[https://sia-api.myressam.repl.co/doviz/sterlin;message]]
$let[a;$channelSendMessage[$channelId;<:servers_yunusli:934736438753378305> | **Apiden veriler çekiliyor...**

\`Bu mesaj api gecikmesinden dolayı gönderildi.\`;yes]]
$onlyIf[$get[kurallar]!=null;{execute:kurallar}] 
$let[kurallar;$djsEval[const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.get("kurallar_$authorID")
;yes]]
  `
}]
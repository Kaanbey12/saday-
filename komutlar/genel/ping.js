module.exports = [{
  name: "ping",
  aliases: ["gecikme"],
  code:`
<:roket_yunusli:933432226060849245> **Pingim \`[ $ping ]\` ms.**  
$onlyIf[$get[kurallar]!=null;{execute:kurallar}] 
$let[kurallar;$djsEval[const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.get("kurallar_$authorID")
;yes]]
  `
}]
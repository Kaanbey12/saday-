module.exports = [{
  name: "avatar",
  code:`
$title[1;<:uye_yunusli:934792156156145715> Avatar - $userTag[$mentioned[1;yes]]]
$thumbnail[1;$userAvatar[$mentioned[1;yes]]]
$image[1;$userAvatar[$mentioned[1;yes]]]
$color[1;5865F2]
$footer[1;$userTag;$userAvatar]
$onlyIf[$get[kurallar]!=null;{execute:kurallar}] 
$let[kurallar;$djsEval[const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.get("kurallar_$authorID")
;yes]]
  `
}]
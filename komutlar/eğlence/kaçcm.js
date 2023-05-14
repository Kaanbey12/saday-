module.exports = [{
  name: "kaçcm",
  aliases: ["malafataölçer","ölç"],
  code:`
<:roket_yunusli:933432226060849245> **$username[$mentioned[1;yes]]'in malafata uzunluğu \`[ $random[1;50] ]\` cm.**
$get[a].
$let[a;$djsEval[
const laflar = [
  "Bu İşlerden Anlamam Ama İyi Gibi",
  "Gideri Var",
  "Komutanım Bir Cisim Yaklaşıyor",
  "Bu Nedir Loo",
  "Mezura Bozuldu Galiba",
  "Duvar Deler Mi Bu?",
  "Kaç Kilo Bu?",
  "Askerliği Ne Zaman?",
  "Kaç Yaşında Bu?",
  "Ucunu Gören Var Mı?",
  "WoW aşkım ne zaman müsaitsin?",
  "Benim ki daha büyük :D",
  "Kıskandım",
  "Bunu bir kere gördüm artık unutmam"
]
    const a = laflar[[Math.floor(Math.random() * laflar.length)]]
a
;yes]]
$onlyIf[$get[kurallar]!=null;{execute:kurallar}] 
$let[kurallar;$djsEval[const { Database } = require("ervel.db")
const db = new Database("./data/genel.json")
db.get("kurallar_$authorID")
;yes]]
  `
}]
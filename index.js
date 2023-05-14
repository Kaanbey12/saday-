const express = require("express");
const path = require("path");
var fs = require('fs');
const aoijs = require('aoi.js'); 
const config = require('./config.js'); 
const bot = new aoijs.Bot(config.Bot);
const { Database } = require("ervel.db")
const db = new Database("./data/genel.json") 
const dbb = new Database("./data/ayarlamalı.json") 

var app = express();
var port = 8080;

const voice = new aoijs.Voice(bot, {
  soundcloud: {
    clientId: "iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX",
  },
  cache: {
    cacheType: "Memory",
    enabled: true,
  }, 
});

voice.onTrackStart()
voice.onQueueEnd()

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.listen(port, ()=>{
  console.log("[+] Sistem 8080 portla aktif!")
});

app.get("/", function(req, res) {
  res.render("pages/index",{
    kullanıcı: db.get("kullanıcı"),
    sunucu: db.get("sunucu"),
    ping: db.get("ping"),
    yunuspp: db.get("yunuspp"),
    yunus: db.get("yunusisim")
  });
});
//Web Bitti\\

require('./handler/status')(bot)
require('./handler/variables')(bot)
require('./handler/callbacks')(bot) 
require('./handler/callback/join-leave.js')(bot) 

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./komutlar/")

const files = fs.readdirSync('./events').filter(file => file.endsWith('js'))
files.forEach( x => {
	require(`./events/${x}`)(bot)
});

voice.queueEndCommand({
  channel: "$channelID",
  code:`<:tik_yunusli:950808333458219079> **Liste sona erdi.**
$leaveVC
  `
})

voice.trackStartCommand({
  channel: "$channelID",
  code:`
$title[1;<a:muzik:1056548569282261042> $songInfo[title] çalmaya başladı]
$thumbnail[1;$replaceText[$songInfo[thumbnail];undefined;$userAvatar[$clientID]]]
$description[1;
<:compass_yunusli:934792281158983712> **Şarkı uzunluğu:** \`$digitalFormat[$songInfo[duration]]\`

<:metin_yunusli:933431877690355784> **Kanal:** \`$channelName[$voiceID[$clientID]]\`

<:ses_yunusli:933431861844267078> **Ses:** [\`$volume\`]

<:compass_yunusli:934792281158983712> **Loop:** [\`$replaceText[$replaceText[$checkContains[$loopStatus;song;queue];true;Aktif - $loopStatus];false;Kapalı]\`]
]
$color[1;RANDOM]
$footer[1;$username[$clientID]]
`
})
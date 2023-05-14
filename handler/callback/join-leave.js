module.exports = (bot)  => {
  bot.joinCommand({
  channel: "$getServerVar[sayaçkanal]",
  code:`
<a:katilma_yunusli:933431964797657098> <@$authorID> **Hoşgeldin $randomText[yanında ne getirdin? ;seni bekliyordum. ;yılbaşın kutlu olsun. ]Senle beraber** \`$membersCount\` **kişiyiz.**
  `
})

bot.leaveCommand({
  channel: "$getServerVar[sayaçkanal]",
  code:`
<a:cikma_yunusli:933432054018891816> \`$userTag\` **Görüşürüz sensiz** \`$membersCount\` **kişiyiz.**
  `
})
}
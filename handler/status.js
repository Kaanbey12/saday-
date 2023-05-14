module.exports = (bot) => {

bot.status({
  text: "$numberseparator[$allmemberscount;.] kullanıcı $numberseparator[$servercount;.] sunucuya hizmet ediyorum",
  type: "WATCHING",
  status: "idle",
  time: 6
})

bot.status({
  text: "Prefixim $getVar[prefix]",
  type: "PLAYING",
  status: "idle",
  time: 6
})

bot.status({
  text: "$username[$clientID]",
  type: "PLAYING",
  status: "idle",
  time: 6
})
  
}
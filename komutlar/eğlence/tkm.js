module.exports = [{
  name: "taş-kağıt-makas",
  aliases: ["tkm"],
  code:`
<:hata_yunusli:933432074529017887> **Bu komut kullanılabilmesi için doğrulama yapılması gerek!** \`Doğrulama için butona tıkla.\`
$addButton[1;Doğrulama;2;tkmdoğrula_$authorID;no;<:hata_yunusli:933432074529017887>]
  `
},{
  type: "interaction",
  prototype: "button",
  $if: "v4",
  code:`
$interactionDelete
$interactionFollowUp[;{newEmbed:{title:Tkm oynuna hoş geldin}{thumbnail:$userAvatar}{description:
**Hey selam hiç tkm oynamadın bu mesajda hadi seçimini butonlarda yap.**
}{color:5865F2}{footer:$userTag:$userAvatar}};{actionRow:{button:Taş:2:taş_$get[botkarar]_$authorID:no:}{button:Kağıt:2:kağıt_$get[botkarar]_$authorID:no:}{button:Makas:2:makas_$get[botkarar]_$authorID:no:}}]
$let[botkarar;$randomText[taş;kağıt;makas]]
$wait[$randomText[2s;3s]]

$interactionUpdate[<a:yukleniyor_yunusli:933432120280485939> **Doğrulanıyor...** \`Bu işlem 2-3 saniye sürebilir.\`]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "content":"<:carpi_yunusli:950808351581810718> | **Bu embed sana ait değil**","ephemeral": true, "options":{ "interaction": true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==tkmdoğrula;]
`
},{
  type: "interaction",
  prototype: "button",
  $if: "v4",
  code:`
$if[taş==$advancedTextSplit[$interactionData[customId];_;2]]
$interactionUpdate[;{newEmbed:{title:<:plus_yunusli:933432197938049105> Berabere}{thumbnail:$userAvatar}{description:
**Senin kararın:** \`[ taş ]\`

**Benim kararım:** \`[ taş ]\`
}{color:5865F2}{footer:$userTag:$userAvatar}};{actionRow:{button:Taş:2:taş_$get[botkarar]_$authorID:no:}{button:Kağıt:2:kağıt_$get[botkarar]_$authorID:no:}{button:Makas:2:makas_$get[botkarar]_$authorID:no:}}]
$let[botkarar;$randomText[taş;kağıt;makas]]
$setGlobalUserVar[tkmb;$sum[$getGlobalUserVar[tkmb];1]]
$endif
$if[kağıt==$advancedTextSplit[$interactionData[customId];_;2]]
$interactionUpdate[;{newEmbed:{title:<:carpi_yunusli:950808351581810718> Kaybettin - Ben kazandım hahahahhaha}{thumbnail:$userAvatar[$clientID]}{description:
**Senin kararın:** \`[ taş ]\`

**Benim kararım:** \`[ kağıt ]\`
}{color:5865F2}{footer:$userTag:$userAvatar}};{actionRow:{button:Taş:2:taş_$get[botkarar]_$authorID:no:}{button:Kağıt:2:kağıt_$get[botkarar]_$authorID:no:}{button:Makas:2:makas_$get[botkarar]_$authorID:no:}}]
$let[botkarar;$randomText[taş;kağıt;makas]]
$setGlobalUserVar[tkml;$sum[$getGlobalUserVar[tkml];1]]
$endif
$if[makas==$advancedTextSplit[$interactionData[customId];_;2]]
$interactionUpdate[;{newEmbed:{title:<:tik_yunusli:950808333458219079> Kazandın}{thumbnail:$userAvatar}{description:
**Senin kararın:** \`[ taş ]\`

**Benim kararım:** \`[ makas ]\`
}{color:5865F2}{footer:$userTag:$userAvatar}};{actionRow:{button:Taş:2:taş_$get[botkarar]_$authorID:no:}{button:Kağıt:2:kağıt_$get[botkarar]_$authorID:no:}{button:Makas:2:makas_$get[botkarar]_$authorID:no:}}]
$let[botkarar;$randomText[taş;kağıt;makas]]
$setGlobalUserVar[tkmw;$sum[$getGlobalUserVar[tkmw];1]]
$endif
$onlyIf[$advancedTextSplit[$interactionData[customId];_;3]==$interactionData[author.id];{ "content":"<:carpi_yunusli:950808351581810718> | **Bu embed sana ait değil**","ephemeral": true, "options":{ "interaction": true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==taş;]
`
},{
  type: "interaction",
  prototype: "button",
  $if: "v4",
  code:`
$if[taş==$advancedTextSplit[$interactionData[customId];_;2]]
$interactionUpdate[;{newEmbed:{title:<:tik_yunusli:950808333458219079> Kazandın}{thumbnail:$userAvatar}{description:
**Senin kararın:** \`[ kağıt ]\`

**Benim kararım:** \`[ taş ]\`
}{color:5865F2}{footer:$userTag:$userAvatar}};{actionRow:{button:Taş:2:taş_$get[botkarar]_$authorID:no:}{button:Kağıt:2:kağıt_$get[botkarar]_$authorID:no:}{button:Makas:2:makas_$get[botkarar]_$authorID:no:}}]
$let[botkarar;$randomText[taş;kağıt;makas]]
$setGlobalUserVar[tkmw;$sum[$getGlobalUserVar[tkmw];1]]
$endif
$if[kağıt==$advancedTextSplit[$interactionData[customId];_;2]]
$interactionUpdate[;{newEmbed:{title:<:plus_yunusli:933432197938049105> Berabere}{thumbnail:$userAvatar[$clientID]}{description:
**Senin kararın:** \`[ kağıt ]\`

**Benim kararım:** \`[ kağıt ]\`
}{color:5865F2}{footer:$userTag:$userAvatar}};{actionRow:{button:Taş:2:taş_$get[botkarar]_$authorID:no:}{button:Kağıt:2:kağıt_$get[botkarar]_$authorID:no:}{button:Makas:2:makas_$get[botkarar]_$authorID:no:}}]
$let[botkarar;$randomText[taş;kağıt;makas]]
$setGlobalUserVar[tkmb;$sum[$getGlobalUserVar[tkmb];1]]
$endif
$if[makas==$advancedTextSplit[$interactionData[customId];_;2]]
$interactionUpdate[;{newEmbed:{title:<:carpi_yunusli:950808351581810718> Kaybettin - Ben kazandım hahahahhaha}{thumbnail:$userAvatar}{description:
**Senin kararın:** \`[ kağıt ]\`

**Benim kararım:** \`[ makas ]\`
}{color:5865F2}{footer:$userTag:$userAvatar}};{actionRow:{button:Taş:2:taş_$get[botkarar]_$authorID:no:}{button:Kağıt:2:kağıt_$get[botkarar]_$authorID:no:}{button:Makas:2:makas_$get[botkarar]_$authorID:no:}}]
$let[botkarar;$randomText[taş;kağıt;makas]]
$setGlobalUserVar[tkml;$sum[$getGlobalUserVar[tkml];1]]
$endif
$onlyIf[$advancedTextSplit[$interactionData[customId];_;3]==$interactionData[author.id];{ "content":"<:carpi_yunusli:950808351581810718> | **Bu embed sana ait değil**","ephemeral": true, "options":{ "interaction": true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==kağıt;]
`
},{
  type: "interaction",
  prototype: "button",
  $if: "v4",
  code:`
$if[taş==$advancedTextSplit[$interactionData[customId];_;2]]
$interactionUpdate[;{newEmbed:{title:<:carpi_yunusli:950808351581810718> Kaybettin - Ben kazandım hahahahhaha}{thumbnail:$userAvatar}{description:
**Senin kararın:** \`[ makas ]\`

**Benim kararım:** \`[ taş ]\`
}{color:5865F2}{footer:$userTag:$userAvatar}};{actionRow:{button:Taş:2:taş_$get[botkarar]_$authorID:no:}{button:Kağıt:2:kağıt_$get[botkarar]_$authorID:no:}{button:Makas:2:makas_$get[botkarar]_$authorID:no:}}]
$let[botkarar;$randomText[taş;kağıt;makas]]
$setGlobalUserVar[tkml;$sum[$getGlobalUserVar[tkml];1]]
$endif
$if[kağıt==$advancedTextSplit[$interactionData[customId];_;2]]
$interactionUpdate[;{newEmbed:{title:<:tik_yunusli:950808333458219079> Kazandın}{thumbnail:$userAvatar[$clientID]}{description:
**Senin kararın:** \`[ makas ]\`

**Benim kararım:** \`[ kağıt ]\`
}{color:5865F2}{footer:$userTag:$userAvatar}};{actionRow:{button:Taş:2:taş_$get[botkarar]_$authorID:no:}{button:Kağıt:2:kağıt_$get[botkarar]_$authorID:no:}{button:Makas:2:makas_$get[botkarar]_$authorID:no:}}]
$let[botkarar;$randomText[taş;kağıt;makas]]
$setGlobalUserVar[tkmw;$sum[$getGlobalUserVar[tkmw];1]]
$endif
$if[makas==$advancedTextSplit[$interactionData[customId];_;2]]
$interactionUpdate[;{newEmbed:{title:<:plus_yunusli:933432197938049105> Berabere}{thumbnail:$userAvatar}{description:
**Senin kararın:** \`[ makas ]\`

**Benim kararım:** \`[ makas ]\`
}{color:5865F2}{footer:$userTag:$userAvatar}};{actionRow:{button:Taş:2:taş_$get[botkarar]_$authorID:no:}{button:Kağıt:2:kağıt_$get[botkarar]_$authorID:no:}{button:Makas:2:makas_$get[botkarar]_$authorID:no:}}]
$let[botkarar;$randomText[taş;kağıt;makas]]
$setGlobalUserVar[tkmb;$sum[$getGlobalUserVar[tkmb];1]]
$endif
$onlyIf[$advancedTextSplit[$interactionData[customId];_;3]==$interactionData[author.id];{ "content":"<:carpi_yunusli:950808351581810718> | **Bu embed sana ait değil**","ephemeral": true, "options":{ "interaction": true}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==makas;]
`
}]
module.exports = [{
  name: "bakım",
  $if: "v4",
  code:`
$if[$message[1]==aç]
<:tik_yunusli:950808333458219079> | **Bakım açıldı:**
Sebep: \`[ $messageSlice[1] ]\`
$setGlobalUserVar[bakım;evet;$clientID]
$setGlobalUserVar[bakımsebep;$messageSlice[1];$clientID]
$onlyIf[$messageSlice[1]!=;<:carpi_yunusli:950808351581810718> | **Bir sebep belirt**]
$endif
$if[$message[1]==kapat]
<:tik_yunusli:950808333458219079> | **Bakım kapatıldı**
$setGlobalUserVar[bakım;hayır;$clientID]
$onlyIf[$getGlobalUserVar[bakım;$clientID]!=hayır;<:carpi_yunusli:950808351581810718> | **Bakım modu zaten kapalı**]
$endif
$onlyIf[$checkContains[$message[1];aç;kapat]!=false;<:carpi_yunusli:950808351581810718> | **Hatalı kullanım! $getVar[prefix]bakım aç/kapat {sebep}**]
$onlyForIDs[980866019511898242;$botOwnerID;a]
  `
}]
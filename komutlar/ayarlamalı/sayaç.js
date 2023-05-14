module.exports = [{
  name: "sayaç",
  aliases: ["gelen-giden"],
  $if: "v4",
  code:`
$if[$message[1]==aç]
<:tik_yunusli:950808333458219079> **Sayaç sistemi <#$mentionedChannels[1;yes]> olarak ayarlandı.**
$setServerVar[sayaçkanal;$mentionedChannels[1;yes]]
$endif
$if[$message[1]==kapat]
<:tik_yunusli:950808333458219079> **Sayaç sistemi kapatıldı.**
$resetServerVar[sayaçkanal]
$onlyIf[$getServerVar[sayaçkanal]!=;<:carpi_yunusli:950808351581810718> **Sayaç sistemi zaten kapalı**]
$endif
$onlyIf[$checkContains[$message[1];aç;kapat]!=false;<:carpi_yunusli:950808351581810718> **Hatalı kullanım! Doğru kullanım \`$getVar[prefix]sayaç aç/kapat {kanal} => (İsteğe bağlı) \`**]
  `
}]
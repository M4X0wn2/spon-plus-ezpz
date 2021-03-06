function deobfuscateText()
{
  $('p.obfuscated').each(function (index, elem)
  {
    replaceTextContent(elem);
    $(elem).removeClass('obfuscated').addClass('deobfuscated');
  });
  $('div.obfuscated-content').each(function (index, elem)
  {
    $(elem).removeClass('obfuscated-content').addClass('deobfuscated-content');
  });
}
function replaceTextContent(elem)
{
  $(elem).contents().filter(function ()
  {
    return this.nodeType === 3;
  }).replaceWith(function ()
  {
    var obfuscatedText = this.data;
    var deobfuscatedText = '';
    for (var i = 0; i < obfuscatedText.length; i++)
    {
      var charValue = obfuscatedText.charCodeAt(i);
      if (charValue == 177)
      {
        deobfuscatedText += '&';
      }
      else if (charValue == 178)
      {
        deobfuscatedText += '!';
      }
      else if (charValue == 180)
      {
        deobfuscatedText += ';';
      }
      else if (charValue == 181)
      {
        deobfuscatedText += '=';
      }
      else if (charValue == 32)
      {
        deobfuscatedText += ' ';
      }
      else if (charValue > 33)
      {
        deobfuscatedText += String.fromCharCode(charValue - 1);
      }
    }
    return deobfuscatedText;
  }).end().filter(function ()
  {
    return this.nodeType === 1 && !$(this).hasClass('text-link-int') && !$(this).hasClass('text-link-ext') && !$(this).hasClass('lp-text-link-int') && !$(this).hasClass('lp-text-link-ext') && !$(this).hasClass('spCelink');
  }).each(function ()
  {
    replaceTextContent(this);
  });
}
deobfuscateText();
var parentDiv = document.getElementsByClassName('laterpay-under-overlay') [0].parentNode;
var childrenCnt = parentDiv.children.length;
parentDiv.children[childrenCnt - 1].className = '';

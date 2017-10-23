function CreateFontSizeCSS(fontToSize) {

  var css = document.createElement('style');
  css.type = 'text/css';
  var styleConcat = [];

  fontToSize.forEach(function(meta){
    var deltaFontSize = meta.upperFontSize - meta.lowerFontSize;
    var deltaScreenWidth = meta.upperScreenWidth - meta.lowerScreenWidth;
    var slope = deltaFontSize/deltaScreenWidth;
    var vwCoefficient = 100*slope;
    var pxCoefficient = (-1)*(meta.upperScreenWidth)*slope + meta.upperFontSize;
    styleConcat.push(meta.tag, ' {', 'font-size: calc(',
    vwCoefficient.toFixed(3), 'vw ', (pxCoefficient < 0) ? '- ' : '+ ',
    pxCoefficient.toFixed(3), 'px);} ');
  });
  var style = styleConcat.join('');

  if(css.styleSheet){
    css.styleSheet.cssText = style;
  } else{
    css.appendChild(document.createTextNode(style));
  }
  return css;
}

export default CreateFontSizeCSS;

var fs = require('fs');
var allProps = require('./core-props');
var arg = require('./confing');

module.exports = function(allClasses) {
  var CommonStyle = "",DesktopStyle = "",TabStyle = "",MobileStyle = "",InternalStyle = "",ResetCss="";
  var FontCDN = arg.FontCDN? arg.FontCDN : null; 
  var BreakPointMobile = arg.BreakPointMobile ? arg.BreakPointMobile : 767;
  var BreakPointTab = arg.BreakPointTab ? arg.BreakPointTab : 992;
  var PrimaryFontFamily = arg.PrimaryFontFamily ? arg.PrimaryFontFamily : 'arial';
  var FontSize = arg.FontSize ? arg.FontSize : '16px';
  var BodyFontColor = arg.BodyFontColor ? arg.BodyFontColor : '#999';
  var BodyTitle = arg.BodyTitle ? arg.BodyTitle : "color:#333;";
  var ResetBrowserDefaultCSS = arg.ResetBrowserDefaultCSS ? arg.ResetBrowserDefaultCSS : false;
  var SuperClass = arg.SuperClass ? arg.SuperClass : "";
  
  if (SuperClass != "") {
    SuperClass = '.' + SuperClass;
  }

  if(FontCDN != null){
    FontCDN = `@import url(${FontCDN});`;
  }
  // Add CustomProps from Custom-classes.js
  // for (var i = 0; i < customProps.length; i++) {
  //   allProps.push(customProps[i]);
  // }

  function customCss() {
    if (ResetBrowserDefaultCSS == true) {
      ResetCss = "*{margin:0;padding:0;}"
    } else {
      ResetCss = '';
    }
    CommonStyle = ResetCss + "*{box-sizing:border-box;}h1,h2,h3,h4,h5,h6{" + BodyTitle + "}body{font-family:'" + PrimaryFontFamily + "';color:" + BodyFontColor + ";font-size:" + FontSize + ";}";
  }
  customCss();
 
  for (var k = 0; k < allClasses.length; k++) {
    var type;
    var val;
    var device;
    if (allClasses[k].indexOf('-') != -1) {
      type = allClasses[k].substring(0, allClasses[k].indexOf('-'));
      val = allClasses[k].substring(allClasses[k].indexOf('-') + 1);
    } else {
      type = allClasses[k];
      val = undefined;
    }
    if (allClasses[k].indexOf(':') != -1) {
      device = type.substring(0, allClasses[k].indexOf(':'));
      type = type.substring(allClasses[k].indexOf(':') + 1);
    } else {
      device = undefined;
    }
    addStyle(device, type, val);
  }

  function getSelector(device, type, val, pseudo) {
    var Selector;
    if (pseudo != undefined) {
      var pseu = "\:" + pseudo;
    } else {
      pseu = "";
    }

    if (device != undefined) {
      if (val == undefined || val == "") {
        Selector = SuperClass + ' .' + device + "\\:" + type + pseu;
      } else {
        Selector = SuperClass + ' .' + device + '\\:' + type + '-' + val + pseu;
      }
    } else {
      if (val == undefined || val == "") {
        Selector = SuperClass + ' .' + type + pseu;
      } else {
        Selector = SuperClass + ' .' + type + '-' + val + pseu;
      }
    }
    return Selector;
  }

  function addStyle(device, type, val) {
    for (var m = 0; m < allProps.length; m++) {
      if (allProps[m].name.indexOf(type) != -1) {
        var Selector = getSelector(device, type, val, allProps[m].pseudo);
        if (val !== undefined) {
          var cssVal = getValue(val, allProps[m].valtype, allProps[m].name);
        }
        if (type == allProps[m].name) {
          var getProps = allProps[m].pro;
          var styleVal;
          if (allProps[m].valtype == undefined) {
            styleVal = getProps;
          } else {
            styleVal = getProps + ":" + cssVal;
          }
          checkDevice(device, Selector, styleVal);
        }
      }
    }
  }

  function getValue(val, type, name) {
    var newVal;
    if (val.indexOf('-') != -1) {
      newVal = val.split("-");
      newVal = newVal.join(type + " ");
      newVal = newVal + type;
    } else {
      newVal = val + type;
    }
    if (name == 'bor' || name == 'borb' || name == 'bort' || name == 'borl' || name == 'borr') {
      newVal = getBorder(newVal);
    }
    if (name == 'col' || name == 'bcol' || name == 'borc') {
      newVal = getColor(newVal);
    }
    if (name == 'opa') {
      newVal = newVal.replace('p', '.');
    }
    if(name == 'boxs'){
      newVal = val.split("-");
      newVal = newVal.join(type + "px ");
      newVal = newVal + type;
      var c = newVal.substring(newVal.lastIndexOf(' ') + 1,);
      var colr = getColor(c);
      var f = newVal.substring(0,newVal.lastIndexOf(' ') + 1);
      newVal = f + colr;
    }
    return newVal;
  }

  function getBorder(newVal) {
    var result = newVal.replace(/[' ']/, 'px');
    var colorCode = result.substring(result.indexOf(' ') + 1);
    var bcolorCode = result.substring(0, result.indexOf(' '));
    var isHex = colourNameToHex(colorCode);
    if (isHex == false) {
      colorCode = "#" + colorCode;
    }
    result = bcolorCode + " " + colorCode;
    result = result.replace('px', 'px ');
    return result;
  }

  function getColor(newVal) {
    var isHex = colourNameToHex(newVal);
    if (newVal.split(" ").length - 1 == 2) {
      newVal = newVal.split(" ");
      newVal = newVal.join(",");
      newVal = "rgb(" + newVal + ")"
    } else if (newVal.split(" ").length - 1 == 3) {
      newVal = newVal.split(" ");
      newVal = newVal.join(",");
      newVal = newVal.replace('p', '.');
      newVal = "rgba(" + newVal + ")";
    }
    else {
      if (isHex == false) {
        newVal = "#" + newVal;
      }
    }

    return newVal;
  }

  function checkDevice(device, Selector, styleVal) {
    switch (device) {
      case 'd':
        if (DesktopStyle != undefined) {
          DesktopStyle = DesktopStyle + Selector + "{" + styleVal + "}";
        }
        break;
      case 't':
        if (TabStyle != undefined) {
          TabStyle = TabStyle + Selector + "{" + styleVal + "}";
        }
        break;
      case 'm':
        if (MobileStyle != undefined) {
          MobileStyle = MobileStyle + Selector + "{" + styleVal + "}";
        }
        break;
      default:
        if (CommonStyle != undefined) {
          CommonStyle = CommonStyle + Selector + "{" + styleVal + "}";
        }
        break;
    }
  }

  function GenerateInterStyle(BreakPointMobile, BreakPointTab) {
    var CusStyle = cssCls();  
    if (DesktopStyle != ""){
      DesktopStyle = "@media all and (min-width:" + (BreakPointTab + 1) + "px){" + DesktopStyle + "}"
    }
    if (TabStyle != ""){
      TabStyle = "@media all and (min-width:" + (BreakPointMobile + 1) + "px) and (max-width:" + BreakPointTab + "px){" + TabStyle + "}"
    }
    if (MobileStyle != ""){
      MobileStyle = "@media all and (max-width:" + BreakPointMobile + "px){" + MobileStyle + "}";
    }
    InternalStyle = FontCDN + CommonStyle + DesktopStyle + CusStyle + TabStyle + MobileStyle;
    
    try {
      fs.writeFileSync('css/style.css', InternalStyle , function (err) {
        if (err) return console.log(err);
      });
    } catch(err) {
      console.error(err)
    }
  }
  
  function colourNameToHex(colour) {
    var colours = {
      "aliceblue": "#f0f8ff", "antiquewhite": "#faebd7", "aqua": "#00ffff", "aquamarine": "#7fffd4", "azure": "#f0ffff",
      "beige": "#f5f5dc", "bisque": "#ffe4c4", "black": "#000000", "blanchedalmond": "#ffebcd", "blue": "#0000ff", "blueviolet": "#8a2be2", "brown": "#a52a2a", "burlywood": "#deb887",
      "cadetblue": "#5f9ea0", "chartreuse": "#7fff00", "chocolate": "#d2691e", "coral": "#ff7f50", "cornflowerblue": "#6495ed", "cornsilk": "#fff8dc", "crimson": "#dc143c", "cyan": "#00ffff",
      "darkblue": "#00008b", "darkcyan": "#008b8b", "darkgoldenrod": "#b8860b", "darkgray": "#a9a9a9", "darkgreen": "#006400", "darkkhaki": "#bdb76b", "darkmagenta": "#8b008b", "darkolivegreen": "#556b2f",
      "darkorange": "#ff8c00", "darkorchid": "#9932cc", "darkred": "#8b0000", "darksalmon": "#e9967a", "darkseagreen": "#8fbc8f", "darkslateblue": "#483d8b", "darkslategray": "#2f4f4f", "darkturquoise": "#00ced1",
      "darkviolet": "#9400d3", "deeppink": "#ff1493", "deepskyblue": "#00bfff", "dimgray": "#696969", "dodgerblue": "#1e90ff",
      "firebrick": "#b22222", "floralwhite": "#fffaf0", "forestgreen": "#228b22", "fuchsia": "#ff00ff",
      "gainsboro": "#dcdcdc", "ghostwhite": "#f8f8ff", "gold": "#ffd700", "goldenrod": "#daa520", "gray": "#808080", "green": "#008000", "greenyellow": "#adff2f",
      "honeydew": "#f0fff0", "hotpink": "#ff69b4",
      "indianred ": "#cd5c5c", "indigo": "#4b0082", "ivory": "#fffff0", "khaki": "#f0e68c",
      "lavender": "#e6e6fa", "lavenderblush": "#fff0f5", "lawngreen": "#7cfc00", "lemonchiffon": "#fffacd", "lightblue": "#add8e6", "lightcoral": "#f08080", "lightcyan": "#e0ffff", "lightgoldenrodyellow": "#fafad2",
      "lightgrey": "#d3d3d3", "lightgreen": "#90ee90", "lightpink": "#ffb6c1", "lightsalmon": "#ffa07a", "lightseagreen": "#20b2aa", "lightskyblue": "#87cefa", "lightslategray": "#778899", "lightsteelblue": "#b0c4de",
      "lightyellow": "#ffffe0", "lime": "#00ff00", "limegreen": "#32cd32", "linen": "#faf0e6",
      "magenta": "#ff00ff", "maroon": "#800000", "mediumaquamarine": "#66cdaa", "mediumblue": "#0000cd", "mediumorchid": "#ba55d3", "mediumpurple": "#9370d8", "mediumseagreen": "#3cb371", "mediumslateblue": "#7b68ee",
      "mediumspringgreen": "#00fa9a", "mediumturquoise": "#48d1cc", "mediumvioletred": "#c71585", "midnightblue": "#191970", "mintcream": "#f5fffa", "mistyrose": "#ffe4e1", "moccasin": "#ffe4b5",
      "navajowhite": "#ffdead", "navy": "#000080",
      "oldlace": "#fdf5e6", "olive": "#808000", "olivedrab": "#6b8e23", "orange": "#ffa500", "orangered": "#ff4500", "orchid": "#da70d6",
      "palegoldenrod": "#eee8aa", "palegreen": "#98fb98", "paleturquoise": "#afeeee", "palevioletred": "#d87093", "papayawhip": "#ffefd5", "peachpuff": "#ffdab9", "peru": "#cd853f", "pink": "#ffc0cb", "plum": "#dda0dd", "powderblue": "#b0e0e6", "purple": "#800080",
      "rebeccapurple": "#663399", "red": "#ff0000", "rosybrown": "#bc8f8f", "royalblue": "#4169e1",
      "saddlebrown": "#8b4513", "salmon": "#fa8072", "sandybrown": "#f4a460", "seagreen": "#2e8b57", "seashell": "#fff5ee", "sienna": "#a0522d", "silver": "#c0c0c0", "skyblue": "#87ceeb", "slateblue": "#6a5acd", "slategray": "#708090", "snow": "#fffafa", "springgreen": "#00ff7f", "steelblue": "#4682b4",
      "tan": "#d2b48c", "teal": "#008080", "thistle": "#d8bfd8", "tomato": "#ff6347", "turquoise": "#40e0d0",
      "violet": "#ee82ee",
      "wheat": "#f5deb3", "white": "#ffffff", "whitesmoke": "#f5f5f5",
      "yellow": "#ffff00", "yellowgreen": "#9acd32"
    };
  
    if (typeof colours[colour.toLowerCase()] != 'undefined')
      return colours[colour.toLowerCase()];
  
    return false;
  }

  function cssCls(){
  var allCustomClasses = [];
  var AddCssClass = "";
  var cssClassesData = fs.readFileSync('core/classes.css', 'utf8');
  let Cusresult = cssClassesData.replace(/ +(?= )/g,'');
  Cusresult = Cusresult.replace( /[\r\n]+/gm, "" );
  Cusresult = Cusresult.match(/.(.*?)}/g);
  for (var k = 0; k < allClasses.length; k++) {  
  
      for(var l=0;l<Cusresult.length;l++){
          let f = Cusresult[l].indexOf(`${allClasses[k]} `);
          let g = Cusresult[l].indexOf(`${allClasses[k]}.`);
          let h = Cusresult[l].indexOf(`${allClasses[k]}#`);
          let i = Cusresult[l].indexOf(`${allClasses[k]}{`);
          let j = Cusresult[l].indexOf(`${allClasses[k]}:`);
          if(f != -1 || g != -1 || h != -1 || i != -1 || j != -1){
              AddCssClass = AddCssClass += Cusresult[l];
            }
      }
 }
 // console.log(AddCssClass);
  return AddCssClass;
}

  GenerateInterStyle(BreakPointMobile, BreakPointTab);  
}


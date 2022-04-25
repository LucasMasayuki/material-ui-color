"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("prop-types"),a=require("@mui/material/TextField"),t=require("@mui/material/Popover"),o=require("@mui/styles"),n=require("@mui/material/Button"),l=require("@mui/material/Tooltip"),i=require("@mui/material/Box"),d=require("@mui/material/Divider"),u=require("@mui/material/FormControl"),s=require("@mui/material/FormHelperText"),c=require("@mui/material/InputLabel"),p=require("@mui/material/Input"),h=require("@mui/material/InputAdornment"),g=require("@mui/material/Slider");function f(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function b(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(a){if("default"!==a){var t=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(r,a,t.get?t:{enumerable:!0,get:function(){return e[a]}})}})),r.default=e,Object.freeze(r)}var m=f(e),v=b(e),x=f(r),y=f(a),w=f(t),k=f(n),C=f(l),E=f(i),O=f(d),N=f(u),S=f(s),P=f(c),R=f(p),M=f(h),W=f(g);function j(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function q(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?j(Object(a),!0).forEach((function(r){A(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function A(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function T(){return T=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},T.apply(this,arguments)}function D(e,r){if(null==e)return{};var a,t,o=function(e,r){if(null==e)return{};var a,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var G,L,z={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgrey:11119017,darkgreen:25600,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,grey:8421504,green:32768,greenyellow:11403055,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgrey:13882323,lightgreen:9498256,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},F=(e,r)=>{var a="00000000".concat((16777215&e).toString(16).toUpperCase()).substr(-6);if(!Number.isNaN(r)&&void 0!==r){var t=r.toString(16).toUpperCase();1===t.length&&(t="0".concat(t)),a+=t}return a},I=e=>[(16711680&e)>>16,(65280&e)>>8,255&e],H=e=>{var r=e.map((e=>{var r=e||0;return r<0&&(r=0),r>255&&(r=255),r}));return r[3]<<24|r[0]<<16|r[1]<<8|r[2]},B=e=>{if(!e||e.length<3||e.length>4)return{error:"not valid size"};var r=e.map(((e,r)=>"string"==typeof e?"%"!==e[e.length-1]?Math.round(Number(e)*(3===r?255:1)):Math.round(Number(e.substring(0,e.length-1))/100*255):Math.round(3===r?255*e:e)));return{format:"rgb",value:H(r),rgb:r,alpha:r[3]}},V=e=>{var r,a=Number("0x".concat(e.substring(1)));if(!Number.isInteger(a)||Number.isNaN(a))return{error:"Not an hex value"};var t=[];if(7===e.length||9===e.length){var o=9===e.length?8:0;t[0]=a>>16+o&255,t[1]=a>>8+o&255,t[2]=a>>o&255,9===e.length&&(r=255&a,t[3]=r,a=H(t))}else{if(4!==e.length&&5!==e.length)return{error:"Wrong format"};var n=5===e.length?4:0;t[0]=a>>8+n&15,t[1]=a>>4+n&15,t[2]=a>>n&15,t[0]|=t[0]<<4,t[1]|=t[1]<<4,t[2]|=t[2]<<4,5===e.length&&(r=15&a,r|=r<<4,t[3]=r),a=H(t)}return{format:"hex",value:a,rgb:t,alpha:r}},X=e=>{var r=e;return"string"==typeof r&&(r.indexOf("deg")>-1?r=r.substr(0,r.length-3):r.indexOf("rad")>-1?r=Math.round(r.substr(0,r.length-3)*(180/Math.PI)):r.indexOf("turn")>-1&&(r=Math.round(360*r.substr(0,r.length-4))),r=parseFloat(r,10)),Number.isNaN(r)&&(r=0),r>=360&&(r%=360),r<0&&(r=0),r},Y=e=>{var r=e;return"string"==typeof r&&(r=parseFloat(r.indexOf("%")>-1?r.substring(0,r.length-1):r,10)),Number.isNaN(r)?r=0:r>100?r=100:r<0&&(r=0),r},_=e=>{if(!e||e.length<3||e.length>4)return{error:"Not a valid size"};var r,a=e,t=X(a[0]),o=Y(a[1]),n=Y(a[2]);a[0]=t,a[1]=o,a[2]=n,n/=100;var l=(o/=100)*(1-Math.abs(2*n-1)),i=l*(1-Math.abs(t/60%2-1)),d=n-l/2;0===o?(r=[n,n,n],d=0):r=t>=0&&t<60?[l,i,0]:t>=60&&t<120?[i,l,0]:t>=120&&t<180?[0,l,i]:t>=180&&t<240?[0,i,l]:t>=240&&t<300?[i,0,l]:[l,0,i],r[0]=Math.round(255*(r[0]+d)),r[1]=Math.round(255*(r[1]+d)),r[2]=Math.round(255*(r[2]+d));var u=a[3];return void 0!==u&&("string"==typeof u&&(u=u.indexOf("%")>-1?parseFloat(u.substring(0,u.length-1),10)/100:parseFloat(u,10)),u=Math.floor(255*u),r[3]=u),{format:"hsl",value:H(r),rgb:r,hsl:a,alpha:u}},U=e=>{if(!e||e.length<3||e.length>4)return{error:"Not a valid size"};var r,a=X(e[0]),t=Y(e[1]),o=Y(e[2]);if(o*=2.55,0===t)r=[o=Math.round(o),o,o];else{a/=360,t/=100;var n=Math.floor(6*a),l=6*a-n,i=Math.round(o*(1-t)),d=Math.round(o*(1-t*l)),u=Math.round(o*(1-t*(1-l)));o=Math.round(o),r=0===(n%=6)?[o,u,i]:1===n?[d,o,i]:2===n?[i,o,u]:3===n?[i,d,o]:4===n?[u,i,o]:[o,i,d]}var s=e[3];return void 0!==s&&("string"==typeof s&&(s=s.indexOf("%")>-1?parseFloat(s.substring(0,s.length-1),10)/100:parseFloat(s,10)),s=Math.floor(255*s),r[3]=s),{format:"hsl",value:H(r),rgb:r,hsv:e,alpha:s}},K=e=>{var r=e[0]/255,a=e[1]/255,t=e[2]/255,o=Math.min(r,a,t),n=Math.max(r,a,t);return{cmax:n,cmin:o,delta:n-o,r:r,g:a,b:t}},J=e=>{var{cmin:r,cmax:a,delta:t,r:o,g:n,b:l}=K(e),i=0,d=0,u=(r+a)/2;0!==t&&(d=t/(1-Math.abs(2*u-1)),d=Math.round(+(100*d).toFixed(1)),i=a===o?(n-l)/t%6:a===n?(l-o)/t+2:(o-n)/t+4,(i=Math.round(60*i))<0&&(i+=360));var s=[i,d,u=Math.round(u+100*u)];return 4===e.length&&(s[3]=e[3]/255),s},Q=e=>{var{cmax:r,delta:a,r:t,g:o,b:n}=K(e);if(0===a)return[0,0,Math.round(100*r)];var l,i=r,d=a/r,u=(r-t)/a,s=(r-o)/a,c=(r-n)/a;return(l=(l=t===r?c-s:o===r?2+u-c:4+s-u)/6%1)<0&&(l+=1),[l=Math.round(360*l),d=Math.round(100*d),i=Math.round(100*i)]},Z=e=>{var r=e.substring(e.indexOf("(")+1,e.indexOf(")"));return r.indexOf(",")>-1?r.split(","):r.indexOf(" ")>-1?r.split(" ").filter((e=>e.length>0&&"/"!==e)):void 0},$=["plain","hex","rgb","hsl","hsv"],ee=[e=>({format:"plain",value:z[e[0]]}),e=>V(e[0]),e=>B(e),e=>_(e),e=>U(e)],re=[e=>({format:"plain",value:z[e]}),e=>V(e),e=>B(Z(e)),e=>_(Z(e))],ae=[e=>void 0!==z[e],e=>e.startsWith("#"),e=>e.startsWith("rgb(")||e.startsWith("rgba("),e=>e.startsWith("hsl(")||e.startsWith("hsla(")],te=function(e,r){var a,t,o,n,l,i,d,u=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],c={raw:e},p=r||"unknown";if("transparent"===e)c.name=e,p="plain",t=0;else if("string"==typeof e){var h=e.trim().toLocaleLowerCase(),g=ae.findIndex((e=>e(h)));g>-1&&(({value:a,format:p,rgb:o,hsl:n,alpha:t,error:i}=re[g](h)),"plain"===p&&(c.name=e),p&&(c.css={backgroundColor:e}))}else if(Number.isInteger(e))a=e,p="number";else if(Array.isArray(e)&&p){var f=$.findIndex((e=>e===p));f>-1?({value:a,format:p,rgb:o,hsl:n,hsv:l,alpha:t,error:i}=ee[f](e)):i="unkown format"}else e&&"r"in e&&"g"in e&&"b"in e?(o=[e.r,e.g,e.b],e.a&&o.push(e.a),({value:a,format:p,rgb:o,alpha:t,error:i}=B(o))):e&&"h"in e&&"s"in e&&"l"in e?(n=[e.h,e.s,e.l],e.a&&n.push(e.a),({value:a,format:p,rgb:o,hsl:n,alpha:t,error:i}=_(n))):e&&"h"in e&&"s"in e&&"v"in e&&(l=[e.h,e.s,e.v],e.a&&l.push(e.a),({value:a,format:p,rgb:o,hsv:l,alpha:t,error:i}=U(l)));void 0===a&&(a=0,t=0===t?t:void 0,c.css={backgroundImage:"\n        linear-gradient(45deg, #ccc 25%, transparent 25%), \n        linear-gradient(135deg, #ccc 25%, transparent 25%),\n        linear-gradient(45deg, transparent 75%, #ccc 75%),\n        linear-gradient(135deg, transparent 75%, #ccc 75%)",backgroundSize:"8px 8px",backgroundPosition:"0 0, 4px 0, 4px -4px, 0px 4px",backgroundColor:"white"},"transparent"!==e&&(p="unknown",c.name="none")),i&&(c.error=i),c.value=a,c.alpha=Number.isNaN(t)||void 0===t?1:t/255,c.format=p,u||1===c.alpha?1===c.alpha&&-16777216===c.value&&(d=255):d=Math.floor(255*c.alpha);var b=F(a,d);return c.hex=b,o=o||I(a),c.rgb=o,c.hsv=l||Q(o),c.hsl=n||J(o),c.css||(c.css={backgroundColor:"#".concat(b)}),c.name||(c.name=s&&Object.keys(z).find((e=>z[e]===a))||"color-".concat(b)),c},oe=(e,r,a)=>{var t;return"hex"===r&&(t="#".concat(F(e.value,a||1===e.alpha?void 0:Math.floor(255*e.alpha)))),t},ne=function(e,r,a,t){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],n=e,l=!1;return e&&e.format&&e.name?n.error&&a&&(n.error=a(n.error)):(n=e,a&&"string"==typeof n&&(G&&t===L||(L=t,G={},Object.keys(z).forEach((e=>{G[a(e)]=e}))),l=(n=G[n]||n)!==e),(n=te(n,null,r,!o)).name&&a&&(n.translated=a(n.name),l&&n.translated&&(n.name=n.translated),n.error&&(n.error=a(n.error)))),n},le=r.oneOfType([r.shape({css:r.shape({}),value:r.number,hex:r.string,raw:r.oneOfType([r.string,r.array,r.number,r.shape]),name:r.string,alpha:r.number,rgb:r.arrayOf(r.number),hsv:r.arrayOf(r.number),hsl:r.arrayOf(r.number)}),r.string,r.number]),ie=r.objectOf(r.string),de=r.arrayOf(r.string),ue={use:()=>({i18n:{language:"us"},t:e=>e})},se=e=>(e&&(ue.use=e),ue.use()),ce=["color","size","borderWidth","borderColor","forwardRef","tooltip","disableAlpha","className"],pe=o.makeStyles({root:{backgroundImage:e=>e.colorError||e.alpha<1?"\n    linear-gradient(45deg, #ccc 25%, transparent 25%), \n    linear-gradient(135deg, #ccc 25%, transparent 25%),\n    linear-gradient(45deg, transparent 75%, #ccc 75%),\n    linear-gradient(135deg, transparent 75%, #ccc 75%)":"none",backgroundSize:"8px 8px",backgroundPosition:"0 0, 4px 0, 4px -4px, 0px 4px",backgroundColor:e=>e.backgroundColor||"#fff",boxShadow:"0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",borderColor:e=>e.borderColor||"#767676",borderStyle:"solid",borderWidth:e=>e.borderWidth||0,borderRadius:4,padding:0,width:e=>e.width,minWidth:e=>e.minWidth,height:e=>e.height,"& div":{content:'" "',background:e=>e.colorError?"repeating-linear-gradient(\n      135deg,\n      transparent,\n      transparent ".concat(e.width/2+2,"px,\n      #f44336 ").concat(e.width/2+2,"px,\n      #f44336 ").concat(e.width/2+4,"px\n    )"):"none",backgroundColor:e=>e.colorError?"transparent":e.backgroundColor||"#fff",width:e=>e.width,minWidth:e=>e.minWidth,height:e=>e.height,border:e=>e.colorError?"2px solid #f44336":"".concat(e.borderWidth||0,"px solid ").concat(e.borderColor||"#767676"),borderRadius:4,padding:0},"&:hover div":{backgroundColor:e=>e.hoverColor},"&:active":{boxShadow:"none"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0, 123, 255, 0.5)"}},tooltip:{width:"min-content"}}),he=e=>{var{color:r,size:a,borderWidth:t,borderColor:o,forwardRef:n,tooltip:l,disableAlpha:i,className:d}=e,u=D(e,ce),{t:s,i18n:c}=se(),p=ne(r,i,s,c.language),h=s(l),g=p.css,f=p.hsl[2]-10;f<30&&(f=p.hsl[2]+50);var b=p.alpha,v="hsl(".concat(p.hsl[0],", ").concat(p.hsl[1],"%, ").concat(f,"%, ").concat(b,")"),x=pe(q({width:a,minWidth:a,height:a,hoverColor:v,borderColor:o,borderWidth:t,alpha:b,colorError:!!p.error},g)),y=m.default.createElement(k.default,T({"data-testid":"colorbutton",className:"".concat(x.root," ").concat(null!=d?d:""),ref:n,variant:"contained","aria-label":p.name},u),m.default.createElement("div",null));return l?m.default.createElement(C.default,{title:h},m.default.createElement("div",{className:x.tooltip},y)):y};he.propTypes={color:le.isRequired,size:x.default.number,disableAlpha:x.default.bool,borderWidth:x.default.number,borderColor:x.default.string,tooltip:x.default.string,forwardRef:x.default.shape({current:x.default.elementType})},he.defaultProps={size:24,borderWidth:0,borderColor:void 0,forwardRef:void 0,tooltip:void 0,disableAlpha:!1};var ge="undefined"!=typeof window?v.useLayoutEffect:v.useEffect;function fe(e){var r=v.useRef(e);return ge((()=>{r.current=e})),v.useCallback((function(){return(0,r.current)(...arguments)}),[])}var be=["className","color","onChange","isHsl"],me=o.makeStyles({root:{position:"absolute",width:"inherit",height:"inherit",background:e=>"".concat(e.cssRgb," none repeat scroll 0% 0%"),margin:0},gradientPosition:{position:"absolute",width:"100%",height:"100%"},hsvGradientS:{background:"rgba(0, 0, 0, 0) linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0)) repeat scroll 0% 0%"},hsvGradientV:{background:"rgba(0, 0, 0, 0) linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)) repeat scroll 0% 0%"},hslGradientS:{background:"rgba(0, 0, 0, 0) linear-gradient(to bottom, rgb(128, 128, 128), rgba(255, 255, 255, 0)) repeat scroll 0% 0%"},hslGradientL:{background:"rgba(0, 0, 0, 0) linear-gradient(to left, rgb(0, 0, 0), rgba(128, 128, 128, 0), rgb(255, 255, 255)) repeat scroll 0% 0%"},hsvGradientCursor:{position:"absolute",top:0,left:0,borderColor:"#f0f0f0",borderWidth:1,borderStyle:"solid",boxShadow:"rgba(0, 0, 0, 0.37) 0px 1px 4px 0px",transition:"box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",borderRadius:4,cursor:e=>!e.pressed&&"pointer",zIndex:100,transform:"translate(-4px, -4px)","&:hover":{boxShadow:"0px 0px 0px 8px rgba(63, 81, 181, 0.16)"},"&:focus":{outline:"none !important",boxShadow:"0px 0px 0px 8px rgba(63, 81, 181, 0.16)"},"&:focus > div":{}},hsvGradientCursorC:{width:8,height:8,borderRadius:4,boxShadow:"white 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)"}}),ve=e=>{var{className:r,color:a,onChange:t,isHsl:o}=e,n=D(e,be),l=m.default.useRef(a),[i,d]=m.default.useState(!1),u=m.default.useRef(!1);m.default.useEffect((()=>{l.current=a}));var s,c,p,h,g,f,b,v=m.default.useRef(),x=m.default.useRef(),y={x:0,y:0},w=(s=a.hsv[0],c=s/360,p=255,h=Math.floor(6*c),g=6*c-h,f=Math.round(p*(1-g)),b=Math.round(p*g),p=Math.round(p),0==(h%=6)?[p,b,0]:1===h?[f,p,0]:2===h?[0,p,b]:3===h?[0,f,p]:4===h?[b,0,p]:[p,0,f]),k="rgb(".concat(w[0],",").concat(w[1],",").concat(w[2],")"),C=me(q(q({},n),{},{cssRgb:k})),E=(e,r)=>{y=e,x.current.style.top="".concat(e.y,"px"),x.current.style.left="".concat(e.x,"px"),r&&x.current.focus()},O=e=>{if(e){var{hsv:r,hsl:t}=a;y={x:Math.round((o?100-t[2]:r[1])/100*(e.clientWidth-1)),y:Math.round((o?t[1]:100-r[2])/100*(e.clientHeight-1))},E(y)}};O(v.current),v.current&&(v.current.style.background="".concat(k," none repeat scroll 0% 0%"));var N=(e,r)=>{var{x:a,y:n}=e,i=r.getBoundingClientRect(),d={x:a-i.left,y:n-i.top};d.x<0&&(d.x=0),d.y<0&&(d.y=0),d.x>=r.clientWidth&&(d.x=r.clientWidth-1),d.y>=r.clientHeight&&(d.y=r.clientHeight-1),E(d,!0);var u=l.current;if(o){var s=d.y/(r.clientHeight-1)*100,c=100*(1-d.x/(r.clientWidth-1));t([u.hsl[0],s,c])}else{var p=d.x/(r.clientWidth-1)*100,h=100*(1-d.y/(r.clientHeight-1));t([u.hsv[0],p,h])}};m.default.useEffect((()=>{var e=v.current;O(e);var r=e=>{d(!0),u.current=!0,e.preventDefault()},a=r=>{var a={x:r.pageX-window.scrollX,y:r.pageY-window.scrollY};N(a,e),u.current=!1,r.preventDefault()},t=r=>{if(u.current&&r.buttons){var a={x:r.pageX-window.scrollX,y:r.pageY-window.scrollY};N(a,e),r.preventDefault()}},o=r=>{var a={x:r.touches[0].pageX-window.scrollX,y:r.touches[0].pageY-window.scrollY};N(a,e),r.preventDefault()};return e.addEventListener("mousedown",r),e.addEventListener("mouseup",a),e.addEventListener("mousemove",t),e.addEventListener("touchdown",r),e.addEventListener("touchup",a),e.addEventListener("touchmove",o),()=>{e.removeEventListener("mousedown",r),e.removeEventListener("mouseup",a),e.removeEventListener("mousemove",t),e.removeEventListener("touchdown",r),e.removeEventListener("touchup",a),e.removeEventListener("touchmove",o)}}),[]);var S=fe((e=>{if(i){var{x:r,y:a}=y;switch(e.key){case"ArrowRight":r+=1;break;case"ArrowLeft":r-=1;break;case"ArrowDown":a+=1;break;case"ArrowUp":a-=1;break;case"Tab":return void d(!1);default:return}e.preventDefault();var t=v.current.getBoundingClientRect();N({x:r+t.left,y:a+t.top},v.current)}})),P=fe((e=>{d(!0),e.preventDefault()})),R=fe((e=>{d(!1),e.preventDefault()}));return m.default.createElement("div",{className:r},m.default.createElement("div",T({className:C.root},n,{ref:v,"data-testid":"hsvgradient-color"}),m.default.createElement("div",{className:"muicc-hsvgradient-s ".concat(o?C.hslGradientS:C.hsvGradientS," ").concat(C.gradientPosition)},m.default.createElement("div",{className:"muicc-hsvgradient-v ".concat(o?C.hslGradientL:C.hsvGradientV," ").concat(C.gradientPosition)},m.default.createElement("div",{ref:x,tabIndex:"0",role:"slider","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":a.hsv[1],pressed:"".concat(u.current),"data-testid":"hsvgradient-cursor",className:"muicc-hsvgradient-cursor ".concat(C.hsvGradientCursor),onKeyDown:S,onFocus:P,onBlur:R},m.default.createElement("div",{className:"muicc-hsvgradient-cursor-c ".concat(C.hsvGradientCursorC)}))))))};ve.propTypes={color:le.isRequired,className:x.default.string.isRequired,onChange:x.default.func.isRequired,isHsl:x.default.bool},ve.defaultProps={isHsl:!1};var xe=["Element","defaultValue"],ye=["defaultValue","value","onChange"],we=e=>{var{Element:r,defaultValue:a}=e,t=D(e,xe),[o,n]=m.default.useState(a);return m.default.createElement(r,q(q({},t),{},{value:o,onChange:n}))},ke=e=>{var r=r=>{var{defaultValue:a,value:t,onChange:o}=r,n=D(r,ye);return o||"none"!==t?m.default.createElement(e,q({value:t||a,onChange:o||(()=>{})},n)):m.default.createElement(we,q({Element:e,defaultValue:a},n))};return r.propTypes=q(q({},e.propTypes),{},{defaultValue:e.propTypes.value,onChange:x.default.func}),r.defaultProps=q(q({},e.defaultProps),{},{defaultValue:void 0,onChange:void 0}),r},Ce=["value","format","onChange","disableAlpha","enableErrorDisplay","forwardRef","disablePlainColor"],Ee=o.makeStyles({root:{display:"flex",flexDirection:"row"},colorinputRaw:{paddingRight:4},formControl:{width:100}}),Oe=e=>{var r,a,{value:t,format:o,onChange:n,disableAlpha:l,enableErrorDisplay:i,forwardRef:d,disablePlainColor:u}=e,s=D(e,Ce),c=Ee(),{t:p,i18n:h}=se(),g=ne(t,l,p,h.language,u),f=e=>{if("plain"===o)n(e.target.value);else if("hex"===o)n("#".concat(e.target.value));else{var r=e.target.id,t=Number(e.target.value),l={};Object.keys(a).forEach((e=>{var o=a[e].value;e===r&&((o=t)<a[e].min&&(o=a[e].min),o>a[e].max&&(o=a[e].max)),l[e]=o})),n(l)}},b=(e,r,a,t,o)=>m.default.createElement(m.default.Fragment,null,m.default.createElement(P.default,{htmlFor:e,className:"muicc-colorinput-label","data-testid":"colorinput-label"},r),m.default.createElement(R.default,T({id:e,name:e,className:"muicc-colorinput-input",label:r,value:a,placeholder:r,inputProps:{"aria-label":"color-".concat(r),"data-testid":"colorinput-input"},onChange:f,startAdornment:o&&t&&m.default.createElement(M.default,{position:"start"},t)},s)));if("plain"===o)r=b("color-plain","Color",g.raw);else{a=function(e,r,a){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>e,o=ne(e,a,t),n={};if("rgb"===r)n.r={value:o.rgb[0],format:"integer",min:0,max:255,name:t("R")},n.g={value:o.rgb[1],format:"integer",min:0,max:255,name:t("G")},n.b={value:o.rgb[2],format:"integer",min:0,max:255,name:t("B")};else if("hsv"===r)n.h={value:o.hsv[0],format:"integer",min:0,max:360,name:t("H"),unit:"°"},n.s={value:o.hsv[1],format:"integer",min:0,max:100,name:t("S"),unit:"%"},n.v={value:o.hsv[2],format:"integer",min:0,max:100,name:t("V"),unit:"%"};else if("hsl"===r)n.h={value:o.hsl[0],format:"integer",min:0,max:360,name:t("H"),unit:"°"},n.s={value:o.hsl[1],format:"integer",min:0,max:100,name:t("S"),unit:"%"},n.l={value:o.hsl[2],format:"integer",min:0,max:100,name:t("L"),unit:"%"};else if("hex"===r){var{hex:l}=o;o.raw&&"string"==typeof o.raw&&o.raw.startsWith("#")&&(l=o.raw.substring(1)),n.hex={value:l,format:"hex",name:t("HEX"),unit:"#"}}else n.value=t(o.value),n.format="unknown";return n}(g,o,l,p);var v=Object.keys(a);r=m.default.createElement("div",{ref:d,className:c.root},v.map((e=>m.default.createElement(N.default,{key:e,className:"muicc-colorinput-raw ".concat(c.colorinputRaw),error:!!g.error},b(e,a[e].name,a[e].value,a[e].unit,1===v.length)))))}return m.default.createElement(N.default,{className:c.formControl,error:!!g.error,"data-testid":"colorinput"},r,i&&g.error&&m.default.createElement(S.default,{id:"component-error-text"},g.error))};Oe.propTypes={value:le,format:x.default.string,onChange:x.default.func.isRequired,disableAlpha:x.default.bool,enableErrorDisplay:x.default.bool,forwardRef:x.default.shape({current:x.default.elementType}),disablePlainColor:x.default.bool},Oe.defaultProps={value:"none",format:"plain",forwardRef:void 0,disableAlpha:!1,enableErrorDisplay:!0,disablePlainColor:!1};var Ne=ke(Oe),Se=o.makeStyles({root:{display:"flex",flexDirection:"row",flexWrap:"wrap",padding:"8px 0 0 8px"},paletteButton:{margin:"0 8px 8px 0",padding:0}}),Pe=e=>{var{size:r,borderWidth:a,palette:t,onSelect:o,disableAlpha:n}=e,l=Se(),{t:i}=se();return m.default.createElement("div",{className:l.root},Object.keys(t).map((e=>m.default.createElement(he,{size:r,key:"".concat(e),color:t[e],className:"muicc-palette-button ".concat(l.paletteButton),borderWidth:a,tooltip:e,disableAlpha:n,onClick:()=>(e=>{var r=i(e);o&&o(r,t[e])})(e)}))))};Pe.propTypes={borderWidth:x.default.number,size:x.default.number,palette:ie.isRequired,forwardRef:x.default.shape({current:x.default.elementType}),onSelect:x.default.func,disableAlpha:x.default.bool},Pe.defaultProps={borderWidth:0,size:24,forwardRef:void 0,onSelect:void 0,disableAlpha:!1};var Re=o.makeStyles((()=>({root:{width:"100%",height:16,padding:0},rail:{height:16,opacity:1,background:"rgba(0, 0, 0, 0) linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100% ) repeat scroll 0% 0%",borderRadius:0},track:{height:16,opacity:0,borderRadius:4,backgroundColor:"transparent"},thumb:{width:16,height:16,marginTop:0,marginLeft:-8,backgroundColor:"#f0f0f0",boxShadow:"rgba(0, 0, 0, 0.37) 0px 1px 4px 0px","&:focus":{boxShadow:"0px 0px 0px 8px rgba(63, 81, 181, 0.16)"}}})));function Me(e){var r=Re();return m.default.createElement(W.default,T({},e,{classes:{root:r.root,rail:r.rail,track:r.track,thumb:r.thumb}}))}var We=["color"],je=o.makeStyles({root:{color:"#666",width:"100%",height:16,padding:0,background:"linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(135deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(135deg, transparent 75%, #ccc 75%)",backgroundSize:"8px 8px",backgroundColor:"white",backgroundPosition:"0 0, 4px 0, 4px -4px, 0px 4px"},rail:{height:16,opacity:1,background:e=>"rgba(0, 0, 0, 0) linear-gradient(to right, ".concat(e.color,"00 0%, ").concat(e.color," 100%) repeat scroll 0% 0%"),borderRadius:0},track:{height:16,opacity:0,borderRadius:4},thumb:{width:16,height:16,marginTop:0,marginLeft:-8,backgroundColor:"#f0f0f0",boxShadow:"rgba(0, 0, 0, 0.37) 0px 1px 4px 0px","&:focus":{boxShadow:"0px 0px 0px 8px rgba(63, 81, 181, 0.16)"}}});function qe(e){var{color:r}=e,a=D(e,We),t=je({color:r});return m.default.createElement(W.default,T({},a,{classes:{root:t.root,rail:t.rail,track:t.track,thumb:t.thumb}}))}qe.propTypes={color:le.isRequired};var Ae=["value","palette","inputFormats","deferred","onChange","disableAlpha","hslGradient"],Te=o.makeStyles((e=>({root:{backgroundColor:"white",position:"relative",width:"min-content",height:"min-content",padding:"0px"},container:{justifyContent:"space-around",overflow:"hidden",width:e=>e.boxWidth,padding:0},colorboxHsvGradient:{width:e=>"calc(".concat(e.boxWidth,"px - 16px)"),height:"calc(128px - 16px)",margin:8},colorboxSliders:{width:e=>e.boxWidth,padding:"8px 8px 4px 8px"},colorboxInputs:{display:"flex",flexDirection:"row",flexWrap:"wrap",padding:"8px 4px 8px 8px",justifyContent:"space-between"},colorboxInput:{},colorboxColorBg:{width:48,height:48,background:"linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(135deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(135deg, transparent 75%, #ccc 75%)",backgroundSize:"8px 8px",backgroundPosition:"0 0, 4px 0, 4px -4px, 0px 4px",backgroundColor:"white",borderRadius:4},colorboxColor:{width:48,height:48,background:e=>e.colorError?"repeating-linear-gradient(\n      135deg,\n      transparent,\n      transparent 29px,\n      #f44336 29px,\n      #f44336 32px\n    )":"none",backgroundColor:e=>e.colorError?"transparent":e.backgroundColor,borderRadius:4,border:e=>e.colorError?"2px solid #f44336":"none"},colorboxControls:{display:"flex",flexDirection:"row",flexWrap:"wrap",padding:8,"&> button":{marginLeft:"auto"}},colorboxError:{color:"#f44336",lineHeight:"36.5px"}}))),De=e=>{var r,{value:a,palette:t,inputFormats:o,deferred:n,onChange:l,disableAlpha:i,hslGradient:d}=e,u=D(e,Ae),{t:s,i18n:c}=se(),p=ne(a,i,s,c.language),h=l;n&&([p,h]=m.default.useState(p),r=l);var{hsv:g,hsl:f}=p,{alpha:b}=p;b=void 0===b?100:Math.floor(100*b);var v=oe(p,"hex",!0),{backgroundColor:x}=p.css,y=Te({boxWidth:320,backgroundColor:x,colorError:!!p.error}),w=e=>{var r=te(e);h(r)};return m.default.createElement(E.default,T({p:2,className:y.root},u),m.default.createElement(E.default,{className:y.container},m.default.createElement(ve,{className:"muicc-colorbox-hsvgradient ".concat(y.colorboxHsvGradient),color:p,onChange:e=>{var r=te(e,d?"hsl":"hsv");h(r)},isHsl:d}),m.default.createElement("div",{className:"muicc-colorbox-sliders ".concat(y.colorboxSliders)},m.default.createElement(Me,{"data-testid":"hueslider","aria-label":"color slider",value:d?f[0]:g[0],min:0,max:360,onChange:(e,r)=>{var a=te([r,p.hsv[1],p.hsv[2]],"hsv");h(a)}}),!i&&m.default.createElement(qe,{"data-testid":"alphaslider",color:v,valueLabelDisplay:"auto","aria-label":"alpha slider",value:b,min:0,max:100,onChange:(e,r)=>{var a=r/100,t=te([p.rgb[0],p.rgb[1],p.rgb[2],a],"rgb");h(t)}})),o.length>0&&m.default.createElement("div",{className:"muicc-colorbox-inputs  ".concat(y.colorboxInputs)},m.default.createElement("div",{className:"muicc-colorbox-colorBg ".concat(y.colorboxColorBg)},m.default.createElement("div",{className:"muicc-colorbox-color ".concat(y.colorboxColor)})),o.map((e=>m.default.createElement(Ne,{key:e,value:p,format:e,disableAlpha:!0,enableErrorDisplay:!1,className:"muicc-colorbox-input ".concat(y.colorboxInput),onChange:w})))),t&&m.default.createElement(m.default.Fragment,null,m.default.createElement(O.default,null),m.default.createElement(Pe,{size:26.65,palette:t,onSelect:(e,r)=>{var a=te(r);a.name=e,h(a)},disableAlpha:i})),m.default.createElement("div",{className:"muicc-colorbox-controls ".concat(y.colorboxControls)},p.error&&m.default.createElement("span",{className:"muicc-colorbox-error ".concat(y.colorboxError),"data-testid":"colorbox-error"},s(p.error)),n&&m.default.createElement(k.default,{onClick:()=>{r(p)}},s("Set")))))};De.propTypes={value:le,deferred:x.default.bool,palette:ie,inputFormats:de,onChange:x.default.func.isRequired,disableAlpha:x.default.bool,hslGradient:x.default.bool},De.defaultProps={value:void 0,deferred:!1,palette:void 0,inputFormats:["hex","rgb"],disableAlpha:!1,hslGradient:!1};var Ge=ke(De),Le=o.makeStyles({root:{display:"flex",flexDirection:"row",width:"max-content"},colorpickerButton:{margin:6}}),ze=o.createGenerateClassName({seed:"ColorPicker"}),Fe=r=>{var{value:a,disableTextfield:t,deferred:n,palette:l,inputFormats:i,openAtStart:d,onChange:u,onOpen:s,doPopup:c,disableAlpha:p,hslGradient:h,hideTextfield:g,disablePlainColor:f}=r,b=Le(),v=e.useRef(null),[x,k]=e.useState(!1),{t:C,i18n:E}=se(),O=ne(a,p,C,E.language,f),N=((e,r)=>{var a=r?"color-".concat(e.hex):e.name;return a.startsWith("color-")?a="string"==typeof e.raw&&e.raw.startsWith("#")?e.raw:oe(e,"hex"):"none"===a&&(a=e.raw),a})(O,f);e.useEffect((()=>{d&&k(!0)}),[d]);var S=()=>{var e=Boolean(v.current);k(e),s&&s(e)},P=()=>{k(!1),s&&s(!1)},R=m.default.createElement(Ge,{value:O,style:{position:"relative"},deferred:n,palette:l,inputFormats:i,disableAlpha:p,hslGradient:h,onChange:e=>{u(e),n&&P()}});R=c?c(R):m.default.createElement(w.default,{id:"color-popover",open:x,anchorEl:v.current,onClose:P,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},R);var M=null;return g||(M=t?m.default.createElement("div",{role:"button","data-testid":"colorpicker-noinput",onClick:S},O.raw):m.default.createElement(y.default,{color:"primary",value:N,onChange:e=>{u(e.target.value)},"data-testid":"colorpicker-input"})),m.default.createElement(o.StylesProvider,{generateClassName:ze},m.default.createElement("div",{ref:v,className:b.root},m.default.createElement(he,{"data-testid":"colorpicker-button",className:"muicc-colorpicker-button ".concat(b.colorpickerButton),color:O,onClick:S}),M,R))};Fe.propTypes={value:le,disableTextfield:x.default.bool,deferred:x.default.bool,palette:ie,inputFormats:de,onChange:x.default.func.isRequired,onOpen:x.default.func,openAtStart:x.default.bool,doPopup:x.default.func,disableAlpha:x.default.bool,hslGradient:x.default.bool,hideTextfield:x.default.bool,disablePlainColor:x.default.bool},Fe.defaultProps={value:"none",disableTextfield:!1,deferred:!1,palette:void 0,inputFormats:["hex","rgb"],onOpen:void 0,openAtStart:!1,doPopup:void 0,disableAlpha:!1,hslGradient:!1,hideTextfield:!1,disablePlainColor:!1};var Ie=ke(Fe);exports.ColorBox=Ge,exports.ColorButton=he,exports.ColorInput=Ne,exports.ColorPalette=Pe,exports.ColorPicker=Ie,exports.createColor=te,exports.useTranslate=se;
//# sourceMappingURL=index.js.map

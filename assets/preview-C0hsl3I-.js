import{i as e}from"./rolldown-runtime-DWdDZTNf.js";import{t}from"./esm-DX3N9rO3.js";import{t as n}from"./react-C1___Qvv.js";import{c as r,d as i,i as a,l as o,n as s,u as c}from"./dist-CK1CPH9U.js";var l=e(n(),1),{useParameter:u,addons:d,useEffect:ee,useMemo:te}=__STORYBOOK_MODULE_PREVIEW_API__,{deprecate:ne}=__STORYBOOK_MODULE_CLIENT_LOGGER__,re=Object.defineProperty,ie=(e,t)=>{for(var n in t)re(e,n,{get:t[n],enumerable:!0})},f=`themes`,ae=`storybook/${f}`,oe=`theme`,p={},se={REGISTER_THEMES:`${ae}/REGISTER_THEMES`};ie({},{initializeThemeState:()=>le,pluckThemeFromContext:()=>m,useThemeParameters:()=>ce});function m({globals:e}){return e[oe]||``}function ce(e){return ne(t`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),e?e.parameters[f]??p:u(f,p)}function le(e,t){d.getChannel().emit(se.REGISTER_THEMES,{defaultTheme:t,themes:e})}var ue=`html`,de=e=>e.split(` `).filter(Boolean),fe=({themes:e,defaultTheme:t,parentSelector:n=ue})=>(le(Object.keys(e),t),(r,i)=>{let{themeOverride:a}=i.parameters[f]??{},o=m(i);return ee(()=>{let r=a||o||t,i=document.querySelector(n);if(!i)return;Object.entries(e).filter(([e])=>e!==r).forEach(([e,t])=>{let n=de(t);n.length>0&&i.classList.remove(...n)});let s=de(e[r]);s.length>0&&i.classList.add(...s)},[a,o]),r()}),pe=(()=>{let{meta:e,moduleExports:t}=i(`meta`,[`meta`]).csfFile,n=e.component;return l.createElement(l.Fragment,null,l.createElement(r,{of:t||{}}),l.createElement(c,null),l.createElement(a,{of:t||{}}),l.createElement(s,{of:n||``}),l.createElement(o,null))}),me=Object.defineProperty,h=(e,t)=>me(e,`name`,{value:t,configurable:!0});function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(null,arguments)}h(g,`_extends`);function _(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}h(_,`_assertThisInitialized`);function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}h(v,`_setPrototypeOf`);function he(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,v(e,t)}h(he,`_inheritsLoose`);function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}h(y,`_getPrototypeOf`);function ge(e){try{return Function.toString.call(e).indexOf(`[native code]`)!==-1}catch{return typeof e==`function`}}h(ge,`_isNativeFunction`);function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(b=h(function(){return!!e},`_isNativeReflectConstruct`))()}h(b,`_isNativeReflectConstruct`);function _e(e,t,n){if(b())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var i=new(e.bind.apply(e,r));return n&&v(i,n.prototype),i}h(_e,`_construct`);function x(e){var t=typeof Map==`function`?new Map:void 0;return x=h(function(e){if(e===null||!ge(e))return e;if(typeof e!=`function`)throw TypeError(`Super expression must either be null or a function`);if(t!==void 0){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return _e(e,arguments,y(this).constructor)}return h(n,`Wrapper`),n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),v(n,e)},`_wrapNativeSuper`),x(e)}h(x,`_wrapNativeSuper`);var ve={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function S(){var e=[...arguments],t=e[0],n=[],r;for(r=1;r<e.length;r+=1)n.push(e[r]);return n.forEach(function(e){t=t.replace(/%[a-z]/,e)}),t}h(S,`format`);var C=function(e){he(t,e);function t(t){for(var n,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return n=e.call(this,S.apply(void 0,[ve[t]].concat(i)))||this,_(n)}return h(t,`PolishedError`),t}(x(Error));function w(e){return Math.round(e*255)}h(w,`colorToInt`);function T(e,t,n){return w(e)+`,`+w(t)+`,`+w(n)}h(T,`convertToInt`);function E(e,t,n,r){if(r===void 0&&(r=T),t===0)return r(n,n,n);var i=(e%360+360)%360/60,a=(1-Math.abs(2*n-1))*t,o=a*(1-Math.abs(i%2-1)),s=0,c=0,l=0;i>=0&&i<1?(s=a,c=o):i>=1&&i<2?(s=o,c=a):i>=2&&i<3?(c=a,l=o):i>=3&&i<4?(c=o,l=a):i>=4&&i<5?(s=o,l=a):i>=5&&i<6&&(s=a,l=o);var u=n-a/2,d=s+u,ee=c+u,te=l+u;return r(d,ee,te)}h(E,`hslToRgb`);var D={aliceblue:`f0f8ff`,antiquewhite:`faebd7`,aqua:`00ffff`,aquamarine:`7fffd4`,azure:`f0ffff`,beige:`f5f5dc`,bisque:`ffe4c4`,black:`000`,blanchedalmond:`ffebcd`,blue:`0000ff`,blueviolet:`8a2be2`,brown:`a52a2a`,burlywood:`deb887`,cadetblue:`5f9ea0`,chartreuse:`7fff00`,chocolate:`d2691e`,coral:`ff7f50`,cornflowerblue:`6495ed`,cornsilk:`fff8dc`,crimson:`dc143c`,cyan:`00ffff`,darkblue:`00008b`,darkcyan:`008b8b`,darkgoldenrod:`b8860b`,darkgray:`a9a9a9`,darkgreen:`006400`,darkgrey:`a9a9a9`,darkkhaki:`bdb76b`,darkmagenta:`8b008b`,darkolivegreen:`556b2f`,darkorange:`ff8c00`,darkorchid:`9932cc`,darkred:`8b0000`,darksalmon:`e9967a`,darkseagreen:`8fbc8f`,darkslateblue:`483d8b`,darkslategray:`2f4f4f`,darkslategrey:`2f4f4f`,darkturquoise:`00ced1`,darkviolet:`9400d3`,deeppink:`ff1493`,deepskyblue:`00bfff`,dimgray:`696969`,dimgrey:`696969`,dodgerblue:`1e90ff`,firebrick:`b22222`,floralwhite:`fffaf0`,forestgreen:`228b22`,fuchsia:`ff00ff`,gainsboro:`dcdcdc`,ghostwhite:`f8f8ff`,gold:`ffd700`,goldenrod:`daa520`,gray:`808080`,green:`008000`,greenyellow:`adff2f`,grey:`808080`,honeydew:`f0fff0`,hotpink:`ff69b4`,indianred:`cd5c5c`,indigo:`4b0082`,ivory:`fffff0`,khaki:`f0e68c`,lavender:`e6e6fa`,lavenderblush:`fff0f5`,lawngreen:`7cfc00`,lemonchiffon:`fffacd`,lightblue:`add8e6`,lightcoral:`f08080`,lightcyan:`e0ffff`,lightgoldenrodyellow:`fafad2`,lightgray:`d3d3d3`,lightgreen:`90ee90`,lightgrey:`d3d3d3`,lightpink:`ffb6c1`,lightsalmon:`ffa07a`,lightseagreen:`20b2aa`,lightskyblue:`87cefa`,lightslategray:`789`,lightslategrey:`789`,lightsteelblue:`b0c4de`,lightyellow:`ffffe0`,lime:`0f0`,limegreen:`32cd32`,linen:`faf0e6`,magenta:`f0f`,maroon:`800000`,mediumaquamarine:`66cdaa`,mediumblue:`0000cd`,mediumorchid:`ba55d3`,mediumpurple:`9370db`,mediumseagreen:`3cb371`,mediumslateblue:`7b68ee`,mediumspringgreen:`00fa9a`,mediumturquoise:`48d1cc`,mediumvioletred:`c71585`,midnightblue:`191970`,mintcream:`f5fffa`,mistyrose:`ffe4e1`,moccasin:`ffe4b5`,navajowhite:`ffdead`,navy:`000080`,oldlace:`fdf5e6`,olive:`808000`,olivedrab:`6b8e23`,orange:`ffa500`,orangered:`ff4500`,orchid:`da70d6`,palegoldenrod:`eee8aa`,palegreen:`98fb98`,paleturquoise:`afeeee`,palevioletred:`db7093`,papayawhip:`ffefd5`,peachpuff:`ffdab9`,peru:`cd853f`,pink:`ffc0cb`,plum:`dda0dd`,powderblue:`b0e0e6`,purple:`800080`,rebeccapurple:`639`,red:`f00`,rosybrown:`bc8f8f`,royalblue:`4169e1`,saddlebrown:`8b4513`,salmon:`fa8072`,sandybrown:`f4a460`,seagreen:`2e8b57`,seashell:`fff5ee`,sienna:`a0522d`,silver:`c0c0c0`,skyblue:`87ceeb`,slateblue:`6a5acd`,slategray:`708090`,slategrey:`708090`,snow:`fffafa`,springgreen:`00ff7f`,steelblue:`4682b4`,tan:`d2b48c`,teal:`008080`,thistle:`d8bfd8`,tomato:`ff6347`,turquoise:`40e0d0`,violet:`ee82ee`,wheat:`f5deb3`,white:`fff`,whitesmoke:`f5f5f5`,yellow:`ff0`,yellowgreen:`9acd32`};function O(e){if(typeof e!=`string`)return e;var t=e.toLowerCase();return D[t]?`#`+D[t]:e}h(O,`nameToHex`);var ye=/^#[a-fA-F0-9]{6}$/,be=/^#[a-fA-F0-9]{8}$/,xe=/^#[a-fA-F0-9]{3}$/,Se=/^#[a-fA-F0-9]{4}$/,k=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Ce=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,we=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,Te=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function A(e){if(typeof e!=`string`)throw new C(3);var t=O(e);if(t.match(ye))return{red:parseInt(``+t[1]+t[2],16),green:parseInt(``+t[3]+t[4],16),blue:parseInt(``+t[5]+t[6],16)};if(t.match(be)){var n=parseFloat((parseInt(``+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(``+t[1]+t[2],16),green:parseInt(``+t[3]+t[4],16),blue:parseInt(``+t[5]+t[6],16),alpha:n}}if(t.match(xe))return{red:parseInt(``+t[1]+t[1],16),green:parseInt(``+t[2]+t[2],16),blue:parseInt(``+t[3]+t[3],16)};if(t.match(Se)){var r=parseFloat((parseInt(``+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(``+t[1]+t[1],16),green:parseInt(``+t[2]+t[2],16),blue:parseInt(``+t[3]+t[3],16),alpha:r}}var i=k.exec(t);if(i)return{red:parseInt(``+i[1],10),green:parseInt(``+i[2],10),blue:parseInt(``+i[3],10)};var a=Ce.exec(t.substring(0,50));if(a)return{red:parseInt(``+a[1],10),green:parseInt(``+a[2],10),blue:parseInt(``+a[3],10),alpha:parseFloat(``+a[4])>1?parseFloat(``+a[4])/100:parseFloat(``+a[4])};var o=we.exec(t);if(o){var s=`rgb(`+E(parseInt(``+o[1],10),parseInt(``+o[2],10)/100,parseInt(``+o[3],10)/100)+`)`,c=k.exec(s);if(!c)throw new C(4,t,s);return{red:parseInt(``+c[1],10),green:parseInt(``+c[2],10),blue:parseInt(``+c[3],10)}}var l=Te.exec(t.substring(0,50));if(l){var u=`rgb(`+E(parseInt(``+l[1],10),parseInt(``+l[2],10)/100,parseInt(``+l[3],10)/100)+`)`,d=k.exec(u);if(!d)throw new C(4,t,u);return{red:parseInt(``+d[1],10),green:parseInt(``+d[2],10),blue:parseInt(``+d[3],10),alpha:parseFloat(``+l[4])>1?parseFloat(``+l[4])/100:parseFloat(``+l[4])}}throw new C(5)}h(A,`parseToRgb`);function Ee(e){var t=e.red/255,n=e.green/255,r=e.blue/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2;if(i===a)return e.alpha===void 0?{hue:0,saturation:0,lightness:o}:{hue:0,saturation:0,lightness:o,alpha:e.alpha};var s,c=i-a,l=o>.5?c/(2-i-a):c/(i+a);switch(i){case t:s=(n-r)/c+(n<r?6:0);break;case n:s=(r-t)/c+2;break;default:s=(t-n)/c+4;break}return s*=60,e.alpha===void 0?{hue:s,saturation:l,lightness:o}:{hue:s,saturation:l,lightness:o,alpha:e.alpha}}h(Ee,`rgbToHsl`);function j(e){return Ee(A(e))}h(j,`parseToHsl`);var M=h(function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?`#`+e[1]+e[3]+e[5]:e},`reduceHexValue`);function N(e){var t=e.toString(16);return t.length===1?`0`+t:t}h(N,`numberToHex`);function P(e){return N(Math.round(e*255))}h(P,`colorToHex`);function F(e,t,n){return M(`#`+P(e)+P(t)+P(n))}h(F,`convertToHex`);function I(e,t,n){return E(e,t,n,F)}h(I,`hslToHex`);function L(e,t,n){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`)return I(e,t,n);if(typeof e==`object`&&t===void 0&&n===void 0)return I(e.hue,e.saturation,e.lightness);throw new C(1)}h(L,`hsl`);function R(e,t,n,r){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`&&typeof r==`number`)return r>=1?I(e,t,n):`rgba(`+E(e,t,n)+`,`+r+`)`;if(typeof e==`object`&&t===void 0&&n===void 0&&r===void 0)return e.alpha>=1?I(e.hue,e.saturation,e.lightness):`rgba(`+E(e.hue,e.saturation,e.lightness)+`,`+e.alpha+`)`;throw new C(2)}h(R,`hsla`);function z(e,t,n){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`)return M(`#`+N(e)+N(t)+N(n));if(typeof e==`object`&&t===void 0&&n===void 0)return M(`#`+N(e.red)+N(e.green)+N(e.blue));throw new C(6)}h(z,`rgb`);function B(e,t,n,r){if(typeof e==`string`&&typeof t==`number`){var i=A(e);return`rgba(`+i.red+`,`+i.green+`,`+i.blue+`,`+t+`)`}else{if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`&&typeof r==`number`)return r>=1?z(e,t,n):`rgba(`+e+`,`+t+`,`+n+`,`+r+`)`;if(typeof e==`object`&&t===void 0&&n===void 0&&r===void 0)return e.alpha>=1?z(e.red,e.green,e.blue):`rgba(`+e.red+`,`+e.green+`,`+e.blue+`,`+e.alpha+`)`}throw new C(7)}h(B,`rgba`);var De=h(function(e){return typeof e.red==`number`&&typeof e.green==`number`&&typeof e.blue==`number`&&(typeof e.alpha!=`number`||typeof e.alpha>`u`)},`isRgb`),Oe=h(function(e){return typeof e.red==`number`&&typeof e.green==`number`&&typeof e.blue==`number`&&typeof e.alpha==`number`},`isRgba`),ke=h(function(e){return typeof e.hue==`number`&&typeof e.saturation==`number`&&typeof e.lightness==`number`&&(typeof e.alpha!=`number`||typeof e.alpha>`u`)},`isHsl`),Ae=h(function(e){return typeof e.hue==`number`&&typeof e.saturation==`number`&&typeof e.lightness==`number`&&typeof e.alpha==`number`},`isHsla`);function V(e){if(typeof e!=`object`)throw new C(8);if(Oe(e))return B(e);if(De(e))return z(e);if(Ae(e))return R(e);if(ke(e))return L(e);throw new C(8)}h(V,`toColorString`);function H(e,t,n){return h(function(){var r=n.concat(Array.prototype.slice.call(arguments));return r.length>=t?e.apply(this,r):H(e,t,r)},`fn`)}h(H,`curried`);function U(e){return H(e,e.length,[])}h(U,`curry`);function W(e,t,n){return Math.max(e,Math.min(t,n))}h(W,`guard`);function G(e,t){if(t===`transparent`)return t;var n=j(t);return V(g({},n,{lightness:W(0,1,n.lightness-parseFloat(e))}))}h(G,`darken`);var je=U(G);function K(e,t){if(t===`transparent`)return t;var n=j(t);return V(g({},n,{lightness:W(0,1,n.lightness+parseFloat(e))}))}h(K,`lighten`);var Me=U(K);function q(e,t){if(t===`transparent`)return t;var n=A(t),r=typeof n.alpha==`number`?n.alpha:1;return B(g({},n,{alpha:W(0,1,(r*100-parseFloat(e)*100).toFixed(2)/100)}))}h(q,`transparentize`);var Ne=U(q),J={primary:`#FF4785`,secondary:`#029CFD`,tertiary:`#FAFBFC`,ancillary:`#22a699`,orange:`#FC521F`,gold:`#FFAE00`,green:`#66BF3C`,seafoam:`#37D5D3`,purple:`#6F2CAC`,ultraviolet:`#2A0481`,lightest:`#FFFFFF`,lighter:`#F7FAFC`,light:`#EEF3F6`,mediumlight:`#ECF4F9`,medium:`#D9E8F2`,mediumdark:`#73828C`,dark:`#5C6870`,darker:`#454E54`,darkest:`#2E3438`,border:`hsla(203, 50%, 30%, 0.15)`,positive:`#66BF3C`,negative:`#FF4400`,warning:`#E69D00`,critical:`#FFFFFF`,defaultText:`#2E3438`,inverseText:`#FFFFFF`,positiveText:`#448028`,negativeText:`#D43900`,warningText:`#A15C20`},Pe={app:`#F6F9FC`,bar:J.lightest,content:J.lightest,preview:J.lightest,gridCellSize:10,hoverable:Ne(.9,J.secondary),positive:`#E1FFD4`,negative:`#FEDED2`,warning:`#FFF5CF`,critical:`#FF4400`},Y={fonts:{base:[`"Nunito Sans"`,`-apple-system`,`".SFNSText-Regular"`,`"San Francisco"`,`BlinkMacSystemFont`,`"Segoe UI"`,`"Helvetica Neue"`,`Helvetica`,`Arial`,`sans-serif`].join(`, `),mono:[`ui-monospace`,`Menlo`,`Monaco`,`"Roboto Mono"`,`"Oxygen Mono"`,`"Ubuntu Monospace"`,`"Source Code Pro"`,`"Droid Sans Mono"`,`"Courier New"`,`monospace`].join(`, `)},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},Fe={base:`dark`,colorPrimary:`#FF4785`,colorSecondary:`#029CFD`,appBg:`#222425`,appContentBg:`#1B1C1D`,appPreviewBg:J.lightest,appBorderColor:`rgba(255,255,255,.1)`,appBorderRadius:4,fontBase:Y.fonts.base,fontCode:Y.fonts.mono,textColor:`#C9CDCF`,textInverseColor:`#222425`,textMutedColor:`#798186`,barTextColor:J.mediumdark,barHoverColor:J.secondary,barSelectedColor:J.secondary,barBg:`#292C2E`,buttonBg:`#222425`,buttonBorder:`rgba(255,255,255,.1)`,booleanBg:`#222425`,booleanSelectedBg:`#2E3438`,inputBg:`#1B1C1D`,inputBorder:`rgba(255,255,255,.1)`,inputTextColor:J.lightest,inputBorderRadius:4},Ie={base:`light`,colorPrimary:`#FF4785`,colorSecondary:`#029CFD`,appBg:Pe.app,appContentBg:J.lightest,appPreviewBg:J.lightest,appBorderColor:J.border,appBorderRadius:4,fontBase:Y.fonts.base,fontCode:Y.fonts.mono,textColor:J.darkest,textInverseColor:J.lightest,textMutedColor:J.dark,barTextColor:J.mediumdark,barHoverColor:J.secondary,barSelectedColor:J.secondary,barBg:J.lightest,buttonBg:Pe.app,buttonBorder:J.medium,booleanBg:J.mediumlight,booleanSelectedBg:J.lightest,inputBg:J.lightest,inputBorder:J.border,inputTextColor:J.darkest,inputBorderRadius:4},Le=(()=>{let e;return e=typeof window<`u`?window:typeof globalThis<`u`?globalThis:typeof global<`u`?global:typeof self<`u`?self:{},e})(),{logger:Re}=__STORYBOOK_MODULE_CLIENT_LOGGER__,{window:X}=Le,ze=h(e=>typeof e==`string`?!0:(Re.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1),`isColorString`),Be=h(e=>!/(gradient|var|calc)/.test(e),`isValidColorForPolished`),Ve=h((e,t)=>e===`darken`?B(`${je(1,t)}`,.95):e===`lighten`?B(`${Me(1,t)}`,.95):t,`applyPolished`),He=h(e=>t=>{if(!ze(t)||!Be(t))return t;try{return Ve(e,t)}catch{return t}},`colorFactory`);He(`lighten`),He(`darken`);var Ue=h(()=>!X||!X.matchMedia?`light`:X.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`,`getPreferredColorScheme`),Z={light:Ie,dark:Fe,normal:Ie},Q=Ue(),$=h((e={base:Q},t)=>{let n={...Z[Q],...Z[e.base]||{},...e,base:Z[e.base]?e.base:Q};return{...t,...n,barSelectedColor:e.barSelectedColor||n.colorSecondary}},`create`),We={base:`light`,colorPrimary:`#0056c1`,colorSecondary:`#0056c1`,appBg:`#f6f6f6`,appPreviewBg:`#f6f6f6`,appContentBg:`#fff`,appBorderColor:`#d6d6d6`,appBorderRadius:2,fontBase:`'IBM Plex Sans', sans-serif`,fontCode:`'IBM Plex Mono', monospace`,textColor:`#3d3d3d`,textInverseColor:`#fff`,barTextColor:`#3d3d3d`,barSelectedColor:`#0056c1`,barHoverColor:`#002c63`,barBg:`#fff`,inputBg:`#fff`,inputBorder:`#3d3d3d`,inputTextColor:`#3d3d3d`,inputBorderRadius:2,brandTitle:`Design System — Zanichelli Editore`,brandImage:`images/png/zanichelli-logo.png`,brandUrl:`https://albe.zanichelli.it`,brandTarget:`_blank`},Ge={...We,base:`dark`,colorPrimary:`#5893db`,colorSecondary:`#5893db`,appBg:`#292929`,appPreviewBg:`#fff`,appContentBg:`#292929`,appBorderColor:`#fff`,textColor:`#ebebeb`,textInverseColor:`#292929`,textMutedColor:`#C2C2C2`,barTextColor:`#ebebeb`,barSelectedColor:`#5893db`,barHoverColor:`#5893db`,barBg:`#292929`,buttonBg:`#fff`,buttonBorder:`#fff`,booleanBg:`#525252`,booleanSelectedBg:`#5893db`},Ke=$(We,{color:{seafoam:`#000`}});$(Ge);var qe={Default:`theme-default`,Dark:`theme-dark`,Black:`theme-black`,"Black--red":`theme-black theme-black--red`,"Black--yellow":`theme-black theme-black--yellow`,Red:`theme-red`},Je={parameters:{viewport:{viewports:{mobile:{name:`mobile`,styles:{width:`375px`,height:`667px`}},tablet:{name:`tablet`,styles:{width:`768px`,height:`1024px`}},desktop:{name:`desktop`,styles:{width:`1152px`,height:`100%`}},wide:{name:`wide`,styles:{width:`1366px`,height:`100%`}}}},options:{storySort:{method:`alphabetical`,order:[`Migration`,`Colors`,`Typography`,`Grid`,`Iconset`,`*`,`Snowflakes`,`Deprecated`]}},controls:{sort:`alpha`},docs:{source:{format:!0,language:`tsx`},page:pe,theme:Ke},themes:qe},tags:[`autodocs`],decorators:[(e,t)=>fe({themes:qe,defaultTheme:`Default`,parentSelector:t.viewMode===`docs`?`.docs-story`:`body`})(e,t)]};export{Je as default};
import{n as e}from"./chunk-DnJy8xQt.js";import{$ as t,Q as n,X as r,it as i,nt as a,rt as o}from"./iframe-CJGav67o.js";import{H as s,J as c}from"./beans-NNuswqO1.js";import{P as l,V as u}from"./index2-D8kPOPlZ.js";var d,f,p=e((()=>{o(),l(),d=i(class extends n{constructor(e){super(),e!==!1&&this.__registerHost(),this.mode=u.POLITE}render(){return a(t,{key:`93bfcc69e5d7d76af5deec0c12cee5db73788a5c`,"aria-live":this.mode,"aria-atomic":`true`,"aria-relevant":`additions`},a(`slot`,{key:`7dcfd72ecc06605e78ae738f837cec969997ef7d`}))}},[260,`z-aria-alert`,{mode:[1]}]),f=d})),m,h,g,_,v;e((()=>{r(),c(),p(),m={title:`ZAriaAlert`,component:f,argTypes:{mode:{control:{type:`select`},options:Object.values(s)}},args:{mode:s.POLITE}},h=()=>{let e=setTimeout(()=>{let t=document.querySelector(`z-aria-alert`);t.innerHTML=`Ecco un numero a caso: `+Math.round(Math.random()*100),clearTimeout(e)},1e3)},g={render:e=>a(`div`,null,a(`p`,null,`Open your ScreenReader, Click on the button and wait 3 seconds, the screenreader will read a message`),a(`p`,null,a(`z-button`,{onClick:h},`Click to say something`)),a(`z-aria-alert`,{mode:e.mode},`Testo NON nascosto`))},_={render:e=>a(`div`,null,a(`p`,null,`You can also wrap your `,a(`code`,null,`z-aria-alert`),` with a `,a(`code`,null,`z-visually-hidden`),` tag in order to visually hide the text.`),a(`p`,null,`Open your ScreenReader, Click on the button and wait 3 seconds, the screenreader will read a message`),a(`p`,null,a(`z-button`,{onClick:h},`Click to say something but visually hidden`)),a(`z-visually-hidden`,null,a(`z-aria-alert`,{mode:e.mode},`Testo qua`)))},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <p>Open your ScreenReader, Click on the button and wait 3 seconds, the screenreader will read a message</p>
      <p>
        <z-button onClick={requestDelayedMsg}>Click to say something</z-button>
      </p>
      <z-aria-alert mode={args.mode}>Testo NON nascosto</z-aria-alert>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <p>
        You can also wrap your <code>z-aria-alert</code> with a <code>z-visually-hidden</code> tag in order to visually
        hide the text.
      </p>
      <p>Open your ScreenReader, Click on the button and wait 3 seconds, the screenreader will read a message</p>
      <p>
        <z-button onClick={requestDelayedMsg}>Click to say something but visually hidden</z-button>
      </p>
      <z-visually-hidden>
        <z-aria-alert mode={args.mode}>Testo qua</z-aria-alert>
      </z-visually-hidden>
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Default`,`VisuallyHidden`]}))();export{g as Default,_ as VisuallyHidden,v as __namedExportsOrder,m as default};
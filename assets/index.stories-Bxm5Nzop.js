import{n as e}from"./chunk-DnJy8xQt.js";import{_t as t,ft as n,gt as r,pt as i,ut as a,vt as o}from"./iframe-CcPk1Sjy.js";import{B as s,K as c}from"./beans-zckFsBZy.js";import{A as l,L as u}from"./index2-BFW8y5_u.js";var d,f,p=e((()=>{t(),l(),d=o(class extends n{constructor(e){super(),e!==!1&&this.__registerHost(),this.mode=u.POLITE}render(){return r(i,{key:`89e5c5f82f37b016ae8df7949c2f8f4c29c4de41`,"aria-live":this.mode,"aria-atomic":`true`,"aria-relevant":`additions`},r(`slot`,{key:`794641d2a1cc26567755a7ab12b389446c4ef500`}))}},[260,`z-aria-alert`,{mode:[1]}]),f=d})),m,h,g,_,v;e((()=>{a(),c(),p(),m={title:`ZAriaAlert`,component:f,argTypes:{mode:{control:{type:`select`},options:Object.values(s)}},args:{mode:s.POLITE}},h=()=>{let e=setTimeout(()=>{let t=document.querySelector(`z-aria-alert`);t.innerHTML=`Ecco un numero a caso: `+Math.round(Math.random()*100),clearTimeout(e)},1e3)},g={render:e=>r(`div`,null,r(`p`,null,`Open your ScreenReader, Click on the button and wait 3 seconds, the screenreader will read a message`),r(`p`,null,r(`z-button`,{onClick:h},`Click to say something`)),r(`z-aria-alert`,{mode:e.mode},`Testo NON nascosto`))},_={render:e=>r(`div`,null,r(`p`,null,`You can also wrap your `,r(`code`,null,`z-aria-alert`),` with a `,r(`code`,null,`z-visually-hidden`),` tag in order to visually hide the text.`),r(`p`,null,`Open your ScreenReader, Click on the button and wait 3 seconds, the screenreader will read a message`),r(`p`,null,r(`z-button`,{onClick:h},`Click to say something but visually hidden`)),r(`z-visually-hidden`,null,r(`z-aria-alert`,{mode:e.mode},`Testo qua`)))},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
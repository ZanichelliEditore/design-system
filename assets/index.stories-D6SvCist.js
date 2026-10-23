import{n as e}from"./chunk-DnJy8xQt.js";import{dt as t,pt as n}from"./iframe-iOyjIY3n.js";import{B as r,K as i}from"./beans-zckFsBZy.js";var a,o,s,c,l;e((()=>{t(),i(),a={title:`ZAriaAlert`,component:`z-aria-alert`,argTypes:{mode:{control:{type:`select`},options:Object.values(r)}},args:{mode:r.POLITE}},o=()=>{let e=setTimeout(()=>{let t=document.querySelector(`z-aria-alert`);t.innerHTML=`Ecco un numero a caso: `+Math.round(Math.random()*100),clearTimeout(e)},1e3)},s={render:e=>n(`div`,null,n(`p`,null,`Open your ScreenReader, Click on the button and wait 3 seconds, the screenreader will read a message`),n(`p`,null,n(`z-button`,{onClick:o},`Click to say something`)),n(`z-aria-alert`,{mode:e.mode},`Testo NON nascosto`))},c={render:e=>n(`div`,null,n(`p`,null,`You can also wrap your `,n(`code`,null,`z-aria-alert`),` with a `,n(`code`,null,`z-visually-hidden`),` tag in order to visually hide the text.`),n(`p`,null,`Open your ScreenReader, Click on the button and wait 3 seconds, the screenreader will read a message`),n(`p`,null,n(`z-button`,{onClick:o},`Click to say something but visually hidden`)),n(`z-visually-hidden`,null,n(`z-aria-alert`,{mode:e.mode},`Testo qua`)))},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <p>Open your ScreenReader, Click on the button and wait 3 seconds, the screenreader will read a message</p>
      <p>
        <z-button onClick={requestDelayedMsg}>Click to say something</z-button>
      </p>
      <z-aria-alert mode={args.mode}>Testo NON nascosto</z-aria-alert>
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`Default`,`VisuallyHidden`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <p>Open your ScreenReader, Click on the button and wait 3 seconds, the screenreader will read a message</p>
      <p>
        <z-button onClick={requestDelayedMsg}>Click to say something</z-button>
      </p>
      <z-aria-alert mode={args.mode}>Testo NON nascosto</z-aria-alert>
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}}}))();export{s as Default,c as VisuallyHidden,l as __namedExportsOrder,a as default};
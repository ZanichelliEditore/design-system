import{x as v}from"./lit-element-DGXdXVoE.js";import{k as t}from"./index-CcuDdGyi.js";import"./index-yOVBEWgS.js";import"./index-jJCpT-2t.js";import{s as z,g as r}from"./chunk-GKNNPQCW-BkHQSocK.js";import{d as f,H as g,h as o,a as b}from"./index-8h8udRzn.js";import"./index-BEj-2O7q.js";const T=class extends g{constructor(){super(),this.__registerHost(),this.mode=t.POLITE}render(){return o(b,{key:"f34eba027a113bafcf0116dabb3f0259207547eb","aria-live":this.mode,"aria-atomic":"true","aria-relevant":"additions"},o("slot",{key:"839ab3da36b4375a9aaa358949be049066e60d73"}))}};f(T,[4,"z-aria-alert",{mode:[8]}]);const i={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZAriaAlert",tagName:"z-aria-alert",customElement:!0,members:[{kind:"field",name:"mode",type:"any",description:"Aria live mode",default:"ZAriaAlertMode.POLITE"}],events:[]}],exports:[{kind:"js",name:"ZAriaAlert",declaration:{name:"ZAriaAlert",module:"src/components/z-aria-alert/index.tsx"}},{kind:"custom-element-definition",name:"z-aria-alert",declaration:{name:"ZAriaAlert",module:"src/components/z-aria-alert/index.tsx"}}]}]};z({...r()||{},...i,modules:[...(r()||{}).modules||[],...i.modules]});var s=Object.freeze,k=Object.defineProperty,A=(e,E)=>s(k(e,"raw",{value:s(e.slice())})),d,l;const C={title:"ZAriaAlert",component:"z-aria-alert",argTypes:{mode:{control:{type:"select"},options:Object.values(t)}},args:{mode:t.POLITE}},n={render:e=>v(d||(d=A([`<script>
        function myFunction() {
          const myTimeout = setTimeout(myDelayedFunction, 3000);
        }
        function myDelayedFunction() {
          var myalert = document.getElementById("idAlert");
          myalert.innerHTML = "Ecco un numero a caso: " + Math.random();
        }
      <\/script>
      <div>
        <h2 class="heading-2">ZAriaAlert deafult</h2>
        <span>
          Open your ScreenReader, Click on the button and wait 3 seconds, the screenreader will read a message
        </span>
        <z-button onclick="myFunction()">Click to say something</z-button>
        <z-aria-alert
          id="idAlert"
          mode="`,`"
        >
          Testo NON nascosto
        </z-aria-alert>
      </div>`])),e.mode)},a={render:e=>v(l||(l=A([`<script>
        function myFunction2() {
          const myTimeout = setTimeout(myDelayedFunction2, 3000);
        }
        function myDelayedFunction2() {
          var myalert = document.getElementById("idAlert2");
          myalert.innerHTML = "Ecco un numero a caso: " + Math.random();
        }
      <\/script>
      <div>
        <h2 class="heading-2">ZAriaAlert with VisuallyHidden</h2>
        <span>
          You can also wrap your <code>z-aria-alert</code> with a <code>z-visually-hidden</code> tag in order to
          visually hide the text.
        </span>
        <span>
          Open your ScreenReader, Click on the button and wait 3 seconds, the screenreader will read a message
        </span>
        <z-button onclick="myFunction2()">Click to say something but visually hidden</z-button>
        <z-visually-hidden>
          <z-aria-alert
            id="idAlert2"
            mode="`,`"
          >
            Testo qua
          </z-aria-alert>
        </z-visually-hidden>
      </div>`])),e.mode)};var c,m,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => html\`<script>
        function myFunction() {
          const myTimeout = setTimeout(myDelayedFunction, 3000);
        }
        function myDelayedFunction() {
          var myalert = document.getElementById("idAlert");
          myalert.innerHTML = "Ecco un numero a caso: " + Math.random();
        }
      <\/script>
      <div>
        <h2 class="heading-2">ZAriaAlert deafult</h2>
        <span>
          Open your ScreenReader, Click on the button and wait 3 seconds, the screenreader will read a message
        </span>
        <z-button onclick="myFunction()">Click to say something</z-button>
        <z-aria-alert
          id="idAlert"
          mode="\${args.mode}"
        >
          Testo NON nascosto
        </z-aria-alert>
      </div>\`
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,p,h;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => html\`<script>
        function myFunction2() {
          const myTimeout = setTimeout(myDelayedFunction2, 3000);
        }
        function myDelayedFunction2() {
          var myalert = document.getElementById("idAlert2");
          myalert.innerHTML = "Ecco un numero a caso: " + Math.random();
        }
      <\/script>
      <div>
        <h2 class="heading-2">ZAriaAlert with VisuallyHidden</h2>
        <span>
          You can also wrap your <code>z-aria-alert</code> with a <code>z-visually-hidden</code> tag in order to
          visually hide the text.
        </span>
        <span>
          Open your ScreenReader, Click on the button and wait 3 seconds, the screenreader will read a message
        </span>
        <z-button onclick="myFunction2()">Click to say something but visually hidden</z-button>
        <z-visually-hidden>
          <z-aria-alert
            id="idAlert2"
            mode="\${args.mode}"
          >
            Testo qua
          </z-aria-alert>
        </z-visually-hidden>
      </div>\`
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const H=["Default","VisuallyHidden"];export{n as Default,a as VisuallyHidden,H as __namedExportsOrder,C as default};
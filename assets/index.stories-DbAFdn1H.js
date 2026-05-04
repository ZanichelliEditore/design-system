import{r as e}from"./lit-CgIPLKVa.js";import{i as t,t as n}from"./chunk-L4EGOTBX-KlzQXQPc.js";import{a as r,n as i,o as a,r as o}from"./client-C9JD6DZT.js";import{K as s}from"./beans-CNd94UMz.js";import"./z-button-BvaTgWEC.js";import{t as c}from"./taggedTemplateLiteral-BA-xtlkT.js";import"./z-visually-hidden-CFfBf0U1.js";r(class extends i{constructor(e){super(),e!==!1&&this.__registerHost(),this.mode=s.POLITE}render(){return a(o,{key:`28e5256e783cf2724bbe3723be604b9c2e1b068b`,"aria-live":this.mode,"aria-atomic":`true`,"aria-relevant":`additions`},a(`slot`,{key:`80e59c2d41cb0792462f589ec118148320308fa6`}))}},[260,`z-aria-alert`,{mode:[8]}]);var l={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZAriaAlert`,tagName:`z-aria-alert`,customElement:!0,members:[{kind:`field`,name:`mode`,type:`any`,description:`Aria live mode`,default:`ZAriaAlertMode.POLITE`}],events:[]}],exports:[{kind:`js`,name:`ZAriaAlert`,declaration:{name:`ZAriaAlert`,module:`src/components/z-aria-alert/index.tsx`}},{kind:`custom-element-definition`,name:`z-aria-alert`,declaration:{name:`ZAriaAlert`,module:`src/components/z-aria-alert/index.tsx`}}]}]};t({...n()||{},...l,modules:[...(n()||{}).modules||[],...l.modules]});var u,d,f={title:`ZAriaAlert`,component:`z-aria-alert`,argTypes:{mode:{control:{type:`select`},options:Object.values(s)}},args:{mode:s.POLITE}},p={render:t=>e(u||=c([`<script>
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
      </div>`]),t.mode)},m={render:t=>e(d||=c([`<script>
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
      </div>`]),t.mode)};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};var h=[`Default`,`VisuallyHidden`];export{p as Default,m as VisuallyHidden,h as __namedExportsOrder,f as default};
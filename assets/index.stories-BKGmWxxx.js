import{x as v}from"./lit-element-DGXdXVoE.js";import{P as t}from"./index-CcuDdGyi.js";import{a as k}from"./storybook-utils-DAVCxM-F.js";import"./index-yOVBEWgS.js";import"./index-Bl332Q6e.js";import{s as w,g as i}from"./chunk-GKNNPQCW-BkHQSocK.js";import{d as y,H as T,h as r}from"./index-8h8udRzn.js";import"./index-BEj-2O7q.js";const S=":host{--z-tooltip-theme--surface:var(--color-surface01);--z-tooltip-theme--text:var(--color-default-text);--z-tooltip-shadow-filter:drop-shadow(0 1px 2px var(--shadow-color-base))}:host([dark]) z-popover{--z-popover-theme--surface:var(--color-surface05);--z-popover-theme--text:var(--color-text-inverse)}z-popover{--z-popover-padding:var(--space-unit);--z-popover-theme--surface:var(--z-tooltip-theme--surface);--z-popover-theme--text:var(--z-tooltip-theme--text);--z-popover-shadow-filter:var(--z-tooltip-shadow-filter)}",E=class extends T{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.position=t.AUTO,this.dark=!1,this.open=!1,this.bindTo=void 0,this.closable=!0}onPopoverOpenChange(){this.open=this.popoverEl.open}render(){return r("z-popover",{key:"f83d3a4ac8f580185d3bdfc5067be6cbddab0b3f",ref:o=>this.popoverEl=o,bindTo:this.bindTo,open:this.open,position:this.position,closable:this.closable,center:!0,showArrow:!0},r("slot",{key:"55a30df4c340712d3101cfe122b7faa74f43a978"}))}static get style(){return S}};y(E,[1,"z-tooltip",{position:[520],dark:[516],open:[1540],bindTo:[8,"bind-to"],closable:[4]},[[0,"openChange","onPopoverOpenChange"]]]);const s={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZTooltip",tagName:"z-tooltip",customElement:!0,members:[{kind:"field",name:"position",type:"any",description:"Tooltip position.",default:"PopoverPosition.AUTO"},{kind:"field",name:"dark",type:"boolean",description:"Enable tooltip dark mode.",default:"false"},{kind:"field",name:"open",type:"boolean",description:"The open state of the tooltip.",default:"false"},{kind:"field",name:"bindTo",type:"any",description:"The selector or the element bound with the tooltip."},{kind:"field",name:"closable",type:"boolean",description:'Reflects `closable` prop of the popover.\n"If true, the popover can be closed by clicking outside of it or pressing the escape key.\nOtherwise, it will be closed only programmatically (by setting `open` to `false`)."',default:"true"}],events:[],cssProperties:[{name:"--z-tooltip-theme--surface",description:"background color of the popover."},{name:"--z-tooltip-theme--text",description:"foreground color of the popover."},{name:"--z-tooltip-shadow-filter",description:"drop-shadow filter of the popover."}]}],exports:[{kind:"js",name:"ZTooltip",declaration:{name:"ZTooltip",module:"src/components/z-tooltip/index.tsx"}},{kind:"custom-element-definition",name:"z-tooltip",declaration:{name:"ZTooltip",module:"src/components/z-tooltip/index.tsx"}}]}]};w({...i()||{},...s,modules:[...(i()||{}).modules||[],...s.modules]});var a=Object.freeze,O=Object.defineProperty,g=(o,x)=>a(O(o,"raw",{value:a(o.slice())})),l,p;const $={title:"ZTooltip",component:"z-tooltip",argTypes:{position:{options:[t.AUTO,t.TOP,t.BOTTOM,t.LEFT,t.RIGHT,t.TOP_LEFT,t.TOP_RIGHT,t.BOTTOM_LEFT,t.BOTTOM_RIGHT],control:{type:"select"}},"--z-tooltip-theme--surface":k()},args:{dark:!1,"--z-tooltip-theme--surface":"var(--color-surface01)",position:t.LEFT},parameters:{docs:{description:{component:'To be sure the algorithm finds the right container, when calculating the position, set its position to `position: relative;`\nOn the following Story, the "position" prop can be set only for the original positions of the `z-tooltip` by design.'}}}},n={render:o=>v(l||(l=g([`
    <div class="tooltip-container">
      <z-button
        id="trigger"
        icon="plus-filled"
      ></z-button>
      <z-tooltip
        .position=`,`
        .dark=`,`
        bind-to="#trigger"
        style="--z-tooltip-theme--surface: `,`"
      >
        <div class="container">
          <z-button>Open</z-button>
          <z-button>Save as</z-button>
          <z-button>Share</z-button>
        </div>
      </z-tooltip>
    </div>
    <script>
      document.querySelector("#trigger").addEventListener("click", () => {
        if (document.querySelector("z-tooltip").open) {
          document.querySelector("z-tooltip").open = false;
        } else {
          document.querySelector("z-tooltip").open = true;
        }
      });
    <\/script>
  `])),o.position,o.dark,o["--z-tooltip-theme--surface"])},e={render:o=>v(p||(p=g([`
    <div class="tooltip-container">
      <z-button
        id="info-button"
        icon="arrow-clockwise-up-left"
      ></z-button>
      <z-tooltip
        .position="`,`"
        .dark="`,`"
        closable="false"
        bind-to="#info-button"
        style="--z-tooltip-theme--surface: `,`"
      >
        <span class="tooltip-info-text">Clicca per fare girare la freccia</span>
      </z-tooltip>
    </div>
    <script>
      button = document.querySelector("#info-button");
      tooltip = document.querySelector("z-tooltip");
      button.addEventListener("mouseover", () => {
        tooltip.open = true;
      });
      button.addEventListener("focusin", () => {
        tooltip.open = true;
      });
      button.addEventListener("mouseout", () => {
        tooltip.open = false;
      });
      button.addEventListener("focusout", () => {
        tooltip.open = false;
      });
      button.onclick = () => {
        switch (button.icon) {
          case "arrow-clockwise-up-left":
            button.icon = "arrow-clockwise-up-right";
            break;
          case "arrow-clockwise-up-right":
            button.icon = "arrow-clockwise-down-right";
            break;
          case "arrow-clockwise-down-right":
            button.icon = "arrow-clockwise-up-left";
            break;
        }
      };
    <\/script>
  `])),o.position,o.dark,o["--z-tooltip-theme--surface"])};var c,d,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => html\`
    <div class="tooltip-container">
      <z-button
        id="trigger"
        icon="plus-filled"
      ></z-button>
      <z-tooltip
        .position=\${args.position}
        .dark=\${args.dark}
        bind-to="#trigger"
        style="--z-tooltip-theme--surface: \${args["--z-tooltip-theme--surface"]}"
      >
        <div class="container">
          <z-button>Open</z-button>
          <z-button>Save as</z-button>
          <z-button>Share</z-button>
        </div>
      </z-tooltip>
    </div>
    <script>
      document.querySelector("#trigger").addEventListener("click", () => {
        if (document.querySelector("z-tooltip").open) {
          document.querySelector("z-tooltip").open = false;
        } else {
          document.querySelector("z-tooltip").open = true;
        }
      });
    <\/script>
  \`
} satisfies Story`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var f,m,h,b,z;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => html\`
    <div class="tooltip-container">
      <z-button
        id="info-button"
        icon="arrow-clockwise-up-left"
      ></z-button>
      <z-tooltip
        .position="\${args.position}"
        .dark="\${args.dark}"
        closable="false"
        bind-to="#info-button"
        style="--z-tooltip-theme--surface: \${args["--z-tooltip-theme--surface"]}"
      >
        <span class="tooltip-info-text">Clicca per fare girare la freccia</span>
      </z-tooltip>
    </div>
    <script>
      button = document.querySelector("#info-button");
      tooltip = document.querySelector("z-tooltip");
      button.addEventListener("mouseover", () => {
        tooltip.open = true;
      });
      button.addEventListener("focusin", () => {
        tooltip.open = true;
      });
      button.addEventListener("mouseout", () => {
        tooltip.open = false;
      });
      button.addEventListener("focusout", () => {
        tooltip.open = false;
      });
      button.onclick = () => {
        switch (button.icon) {
          case "arrow-clockwise-up-left":
            button.icon = "arrow-clockwise-up-right";
            break;
          case "arrow-clockwise-up-right":
            button.icon = "arrow-clockwise-down-right";
            break;
          case "arrow-clockwise-down-right":
            button.icon = "arrow-clockwise-up-left";
            break;
        }
      };
    <\/script>
  \`
} satisfies Story`,...(h=(m=e.parameters)==null?void 0:m.docs)==null?void 0:h.source},description:{story:"When `closable` property is set to `false`, you can open the tooltip on hover and still click things outside without closing it.\nIn the Story below, the tooltip is opened hovering the button.",...(z=(b=e.parameters)==null?void 0:b.docs)==null?void 0:z.description}}};const H=["Default","AutocloseOff"];export{e as AutocloseOff,n as Default,H as __namedExportsOrder,$ as default};
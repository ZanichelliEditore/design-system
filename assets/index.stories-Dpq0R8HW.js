import{x as d}from"./lit-element-DGXdXVoE.js";import{o as l}from"./style-map-DWZVjDvr.js";import{P as n}from"./index-BBy8evlc.js";import{g as u}from"./storybook-utils-DX4XXC0w.js";import"./index-JbyyQETK.js";import"./index-DFNWbrxv.js";import"./index-Ca3tC4cf.js";import"./index-ebChDAll.js";import"./directive-CF8sV3Lr.js";import"./index-BfGcbr3R.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";import"./index-CMdrQeyy.js";import"./utils-D8xbZiRf.js";import"./breakpoints-p3CVLX0Q.js";const L=e=>{var r;const o=(r=e.target.closest(".popover-container"))==null?void 0:r.querySelector("z-popover");o&&(o!=null&&o.open?o.open=!1:o.open=!0)},P=e=>{if(e.draggable)return;let o=0,r=0,c=!1,v={x:0,y:0};e.style.position="absolute",e.draggable=!0,e.addEventListener("mousedown",t=>{t.preventDefault(),t.stopPropagation(),c=!0,o=e.offsetLeft-t.clientX,r=e.offsetTop-t.clientY,v={x:t.clientX,y:t.clientY}}),document.addEventListener("mouseup",t=>{t.preventDefault(),t.stopPropagation(),c=!1,!(v.x!==t.clientX||v.y!==t.clientY)&&setTimeout(()=>{L({...t,target:e})},0)}),document.addEventListener("mousemove",t=>{if(c){const m=e.parentElement,M=Math.max(Math.min(t.clientX+o,m.clientWidth-e.offsetWidth),0),C=Math.max(Math.min(t.clientY+r,m.clientHeight-e.offsetHeight),0);e.style.left=`${M}px`,e.style.top=`${C}px`}})},Z={title:"ZPopover",component:"z-popover",argTypes:{position:{options:[null,...Object.values(n).filter(e=>e!==n.AUTO)],control:{type:"select",labels:{null:"-"}}},"--z-popover-theme--surface":u(),"--z-popover-theme--text":u()},args:{position:null,"--z-popover-theme--surface":"var(--color-surface01)","--z-popover-theme--text":"var(--color-default-text)","--z-popover-padding":"0"},parameters:{onTriggerClick:L,docs:{story:{inline:!1,iframeHeight:500}}}},i={args:{"--z-popover-padding":"var(--space-unit)","--z-popover-shadow-filter":"drop-shadow(0 1px 2px var(--shadow-color-base))",center:!1,showArrow:!1,closable:!0},render:e=>(document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("#demo-trigger");o&&P(o)}),d`
      <div class="popover-container">
        <z-popover
          style=${l({"--z-popover-theme--surface":e["--z-popover-theme--surface"],"--z-popover-theme--text":e["--z-popover-theme--text"],"--z-popover-padding":e["--z-popover-padding"]})}
          .position=${e.position}
          .center=${e.center}
          .showArrow=${e.showArrow}
          bind-to="#demo-trigger"
        >
          <div class="popover-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </div>
        </z-popover>
        <z-button
          id="demo-trigger"
          icon="plus-filled"
        ></z-button>
      </div>
      <p class="heading-2">You can move the button to see the positioning adaptation while the popover is open.</p>
    `)},p={args:{"--z-popover-theme--surface":"var(--color-surface01)","--z-popover-padding":"var(--space-unit)",position:n.RIGHT_BOTTOM},render:(e,{parameters:o})=>d`
    <div class="popover-container">
      <z-popover
        style=${l({"--z-popover-theme--surface":e["--z-popover-theme--surface"],"--z-popover-theme--text":e["--z-popover-theme--text"],"--z-popover-padding":e["--z-popover-padding"]})}
        .position=${e.position}
        bind-to="#trigger"
      >
        <z-list>
          <z-list-element divider-type="element">Elemento 1</z-list-element>
          <z-list-element divider-type="element">Elemento 2</z-list-element>
          <z-list-element>Elemento 3</z-list-element>
        </z-list>
      </z-popover>
      <z-button
        id="trigger"
        icon="plus-filled"
        .onclick=${o.onTriggerClick}
      ></z-button>
    </div>
  `},s={args:{position:n.RIGHT,"--z-popover-padding":"var(--space-unit)"},render:(e,{parameters:o})=>d` <div class="popover-container popover-container-tooltip">
      <z-popover
        style=${l({"--z-popover-theme--surface":e["--z-popover-theme--surface"],"--z-popover-theme--text":e["--z-popover-theme--text"],"--z-popover-padding":e["--z-popover-padding"]})}
        .position=${e.position}
        center="true"
        show-arrow="true"
        bind-to="#trigger"
      >
        <div class="popover-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
      </z-popover>
      <z-button
        id="trigger"
        icon="plus-filled"
        .onclick=${o.onTriggerClick}
      ></z-button>
    </div>`},a={args:{position:n.TOP,"--z-popover-padding":"var(--space-unit)"},render:(e,{parameters:o})=>d` <div class="popover-container popover-container-tooltip">
      <div class="popover-internal-container">
        <div class="popover-internal-container-2">
          <z-popover
            style=${l({"--z-popover-theme--surface":e["--z-popover-theme--surface"],"--z-popover-theme--text":e["--z-popover-theme--text"],"--z-popover-padding":e["--z-popover-padding"]})}
            .position=${e.position}
            center="true"
            show-arrow="true"
            bind-to="#trigger"
          >
            <div class="popover-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </div>
          </z-popover>
          <z-button
            id="trigger"
            icon="plus-filled"
            .onclick=${o.onTriggerClick}
          ></z-button>
        </div>
      </div>
    </div>`};var g,z,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    "--z-popover-padding": "var(--space-unit)",
    "--z-popover-shadow-filter": "drop-shadow(0 1px 2px var(--shadow-color-base))",
    "center": false,
    "showArrow": false,
    "closable": true
  },
  render: args => {
    document.addEventListener("DOMContentLoaded", () => {
      const trigger = document.querySelector("#demo-trigger");
      if (trigger) {
        makeDraggable(trigger as HTMLElement);
      }
    });
    return html\`
      <div class="popover-container">
        <z-popover
          style=\${styleMap({
      "--z-popover-theme--surface": args["--z-popover-theme--surface"],
      "--z-popover-theme--text": args["--z-popover-theme--text"],
      "--z-popover-padding": args["--z-popover-padding"]
    })}
          .position=\${args.position}
          .center=\${args.center}
          .showArrow=\${args.showArrow}
          bind-to="#demo-trigger"
        >
          <div class="popover-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </div>
        </z-popover>
        <z-button
          id="demo-trigger"
          icon="plus-filled"
        ></z-button>
      </div>
      <p class="heading-2">You can move the button to see the positioning adaptation while the popover is open.</p>
    \`;
  }
} satisfies Story`,...(h=(z=i.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var f,b,x;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    "--z-popover-theme--surface": "var(--color-surface01)",
    "--z-popover-padding": "var(--space-unit)",
    "position": PopoverPosition.RIGHT_BOTTOM
  },
  render: (args, {
    parameters
  }) => html\`
    <div class="popover-container">
      <z-popover
        style=\${styleMap({
    "--z-popover-theme--surface": args["--z-popover-theme--surface"],
    "--z-popover-theme--text": args["--z-popover-theme--text"],
    "--z-popover-padding": args["--z-popover-padding"]
  })}
        .position=\${args.position}
        bind-to="#trigger"
      >
        <z-list>
          <z-list-element divider-type="element">Elemento 1</z-list-element>
          <z-list-element divider-type="element">Elemento 2</z-list-element>
          <z-list-element>Elemento 3</z-list-element>
        </z-list>
      </z-popover>
      <z-button
        id="trigger"
        icon="plus-filled"
        .onclick=\${parameters.onTriggerClick}
      ></z-button>
    </div>
  \`
} satisfies Story`,...(x=(b=p.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,w,$;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    "position": PopoverPosition.RIGHT,
    "--z-popover-padding": "var(--space-unit)"
  },
  render: (args, {
    parameters
  }) => html\` <div class="popover-container popover-container-tooltip">
      <z-popover
        style=\${styleMap({
    "--z-popover-theme--surface": args["--z-popover-theme--surface"],
    "--z-popover-theme--text": args["--z-popover-theme--text"],
    "--z-popover-padding": args["--z-popover-padding"]
  })}
        .position=\${args.position}
        center="true"
        show-arrow="true"
        bind-to="#trigger"
      >
        <div class="popover-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
      </z-popover>
      <z-button
        id="trigger"
        icon="plus-filled"
        .onclick=\${parameters.onTriggerClick}
      ></z-button>
    </div>\`
} satisfies Story`,...($=(w=s.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var T,k,S;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    "position": PopoverPosition.TOP,
    "--z-popover-padding": "var(--space-unit)"
  },
  render: (args, {
    parameters
  }) => html\` <div class="popover-container popover-container-tooltip">
      <div class="popover-internal-container">
        <div class="popover-internal-container-2">
          <z-popover
            style=\${styleMap({
    "--z-popover-theme--surface": args["--z-popover-theme--surface"],
    "--z-popover-theme--text": args["--z-popover-theme--text"],
    "--z-popover-padding": args["--z-popover-padding"]
  })}
            .position=\${args.position}
            center="true"
            show-arrow="true"
            bind-to="#trigger"
          >
            <div class="popover-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </div>
          </z-popover>
          <z-button
            id="trigger"
            icon="plus-filled"
            .onclick=\${parameters.onTriggerClick}
          ></z-button>
        </div>
      </div>
    </div>\`
} satisfies Story`,...(S=(k=a.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const F=["Demo","ContextualMenuLike","Tooltip","TooltipWithNestedContainer"];export{p as ContextualMenuLike,i as Demo,s as Tooltip,a as TooltipWithNestedContainer,F as __namedExportsOrder,Z as default};

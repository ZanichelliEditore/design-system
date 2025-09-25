import"./lit-element--ufgQf_M.js";import{x as l}from"./lit-html-rc9TYZL2.js";import{o as d}from"./style-map-DBxmrO_k.js";import{P as a}from"./index-BBy8evlc.js";import{g as u}from"./storybook-utils-DX4XXC0w.js";import"./index-D9DlNPLB.js";import"./index-xZQvtuIx.js";import"./index-CtMrd9Qr.js";import"./index-CI55nPcL.js";import"./directive-CF8sV3Lr.js";import"./index-9WVNbtLu.js";import"./chunk-L4EGOTBX-BzYVsoCE.js";import"./entry-preview-uRqU0LK7.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";import"./index-CD6MXd9-.js";const S=()=>{const e=document.querySelector("z-popover");e.open?e.open=!1:e.open=!0},C=(e,o)=>{let t=0,n=0,c=!1;const k=r=>{c=!0,t=r.clientX-e.getBoundingClientRect().left,n=r.clientY-e.getBoundingClientRect().top,document.addEventListener("mousemove",m),document.addEventListener("mouseup",v),e.style.position="absolute",e.style.zIndex="1000"},m=r=>{if(!c)return;const L=Math.max(r.clientY-n,0),M=Math.min(L,o.clientHeight-e.clientHeight),$=Math.max(r.clientX-t,0),E=Math.min($,o.clientWidth-e.clientWidth);e.style.left=`${E}px`,e.style.top=`${M}px`},v=()=>{c=!1,document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",v)};e.addEventListener("mousedown",k)},Z={title:"ZPopover",component:"z-popover",argTypes:{position:{options:[null,...Object.values(a).filter(e=>e!==a.AUTO)],control:{type:"select",labels:{null:"-"}}},"--z-popover-theme--surface":u(),"--z-popover-theme--text":u()},args:{position:null,"--z-popover-theme--surface":"var(--color-surface01)","--z-popover-theme--text":"var(--color-default-text)","--z-popover-padding":"0"},parameters:{onTriggerClick:S,docs:{description:{component:"To ensure the positioning algorithm finds the right container when calculating the position, set its container's `position` to `relative`."}}}},i={args:{"--z-popover-padding":"var(--space-unit)","--z-popover-shadow-filter":"drop-shadow(0 1px 2px var(--shadow-color-base))",center:!1,showArrow:!1},render:(e,{parameters:o})=>(document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("#trigger"),n=document.querySelector(".popover-container");t&&n&&C(t,n)}),l`
      <div class="popover-container popover-container-tooltip">
        <z-popover
          style=${d({"--z-popover-theme--surface":e["--z-popover-theme--surface"],"--z-popover-theme--text":e["--z-popover-theme--text"],"--z-popover-padding":e["--z-popover-padding"]})}
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
      <p class="heading-2">You can move the button to see the positioning adaptation while the popover is open.</p>
    `)},p={args:{"--z-popover-theme--surface":"var(--color-surface01)","--z-popover-padding":"var(--space-unit)",position:a.RIGHT_BOTTOM},render:(e,{parameters:o})=>l`
    <div class="popover-container">
      <z-popover
        style=${d({"--z-popover-theme--surface":e["--z-popover-theme--surface"],"--z-popover-theme--text":e["--z-popover-theme--text"],"--z-popover-padding":e["--z-popover-padding"]})}
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
  `},s={args:{position:a.RIGHT,"--z-popover-padding":"var(--space-unit)"},render:(e,{parameters:o})=>l` <div class="popover-container popover-container-tooltip">
      <z-popover
        style=${d({"--z-popover-theme--surface":e["--z-popover-theme--surface"],"--z-popover-theme--text":e["--z-popover-theme--text"],"--z-popover-padding":e["--z-popover-padding"]})}
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
    </div>`};var g,z,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    "--z-popover-padding": "var(--space-unit)",
    "--z-popover-shadow-filter": "drop-shadow(0 1px 2px var(--shadow-color-base))",
    "center": false,
    "showArrow": false
  },
  render: (args, {
    parameters
  }) => {
    document.addEventListener("DOMContentLoaded", () => {
      const trigger = document.querySelector("#trigger");
      const container = document.querySelector(".popover-container");
      if (trigger && container) {
        makeDraggable(trigger as HTMLElement, container as HTMLElement);
      }
    });
    return html\`
      <div class="popover-container popover-container-tooltip">
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
} satisfies Story`,...(x=(b=p.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,T,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
} satisfies Story`,...(w=(T=s.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const F=["Demo","ContextualMenuLike","TooltipLike"];export{p as ContextualMenuLike,i as Demo,s as TooltipLike,F as __namedExportsOrder,Z as default};

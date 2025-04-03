import{x as d}from"./lit-element-DGXdXVoE.js";import{o as z}from"./style-map-DWZVjDvr.js";import{P as r}from"./index-Dm3VcLdc.js";import{a as t}from"./storybook-utils-CU_QD6z5.js";import"./index-BvUE6Spl.js";import"./index-CIIGVMDx.js";import"./index-DKldPwzU.js";import"./directive-CF8sV3Lr.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";var p=Object.freeze,f=Object.defineProperty,g=(e,h)=>p(f(e,"raw",{value:p(e.slice())})),i,s;const w={title:"ZPopover",component:"z-popover",argTypes:{position:{options:Object.values(r),control:{type:"select"}},"--z-popover-theme--surface":t(),"--z-popover-theme--text":t()},args:{"--z-popover-theme--surface":"var(--color-surface01)","--z-popover-theme--text":"var(--color-default-text)"},parameters:{docs:{description:{component:"To be sure the AUTO algorithm finds the right container when calculating the position, set its container's position to `position: relative;`"}}}},o={args:{"--z-popover-theme--surface":"transparent",position:r.RIGHT_BOTTOM},render:e=>d(i||(i=g([`
    <div class="popover-container">
      <z-popover
        style=`,`
        .position=`,`
        bind-to="#trigger"
      >
        <div class="container">
          <z-button icon="gear">Impostazioni</z-button>
        </div>
      </z-popover>
      <z-icon
        id="trigger"
        name="plus-square-filled"
      ></z-icon>
    </div>
    <script>
      var iconTrigger = document.querySelector("#trigger");
      var popover = document.querySelector("z-popover");
      iconTrigger.addEventListener("click", () => {
        if (popover.open) {
          popover.open = false;
        } else {
          popover.open = true;
        }
      });
    <\/script>
  `])),z({"--z-popover-theme--surface":e["--z-popover-theme--surface"],"--z-popover-theme--text":e["--z-popover-theme--text"]}),e.position)},n={args:{position:r.RIGHT},render:e=>d(s||(s=g([`
    <div class="popover-container popover-container-tooltip">
      <z-popover
        style=`,`
        .position=`,`
        center="true"
        show-arrow="true"
        bind-to="#trigger"
      >
        <div class="container">
          <z-button icon="gear">Impostazioni</z-button>
        </div>
      </z-popover>
      <z-icon
        id="trigger"
        name="plus-square-filled"
      ></z-icon>
    </div>
    <script>
      document.querySelector("#trigger").addEventListener("click", () => {
        if (document.querySelector("z-popover").open) {
          document.querySelector("z-popover").open = false;
        } else {
          document.querySelector("z-popover").open = true;
        }
      });
    <\/script>
  `])),z({"--z-popover-theme--surface":e["--z-popover-theme--surface"],"--z-popover-theme--text":e["--z-popover-theme--text"]}),e.position)};var a,c,v;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    "--z-popover-theme--surface": "transparent",
    "position": PopoverPosition.RIGHT_BOTTOM
  },
  render: args => html\`
    <div class="popover-container">
      <z-popover
        style=\${styleMap({
    "--z-popover-theme--surface": args["--z-popover-theme--surface"],
    "--z-popover-theme--text": args["--z-popover-theme--text"]
  })}
        .position=\${args.position}
        bind-to="#trigger"
      >
        <div class="container">
          <z-button icon="gear">Impostazioni</z-button>
        </div>
      </z-popover>
      <z-icon
        id="trigger"
        name="plus-square-filled"
      ></z-icon>
    </div>
    <script>
      var iconTrigger = document.querySelector("#trigger");
      var popover = document.querySelector("z-popover");
      iconTrigger.addEventListener("click", () => {
        if (popover.open) {
          popover.open = false;
        } else {
          popover.open = true;
        }
      });
    <\/script>
  \`
} satisfies Story`,...(v=(c=o.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var u,l,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    position: PopoverPosition.RIGHT
  },
  render: args => html\`
    <div class="popover-container popover-container-tooltip">
      <z-popover
        style=\${styleMap({
    "--z-popover-theme--surface": args["--z-popover-theme--surface"],
    "--z-popover-theme--text": args["--z-popover-theme--text"]
  })}
        .position=\${args.position}
        center="true"
        show-arrow="true"
        bind-to="#trigger"
      >
        <div class="container">
          <z-button icon="gear">Impostazioni</z-button>
        </div>
      </z-popover>
      <z-icon
        id="trigger"
        name="plus-square-filled"
      ></z-icon>
    </div>
    <script>
      document.querySelector("#trigger").addEventListener("click", () => {
        if (document.querySelector("z-popover").open) {
          document.querySelector("z-popover").open = false;
        } else {
          document.querySelector("z-popover").open = true;
        }
      });
    <\/script>
  \`
} satisfies Story`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const M=["ContextualMenuLike","TooltipLike"];export{o as ContextualMenuLike,n as TooltipLike,M as __namedExportsOrder,w as default};

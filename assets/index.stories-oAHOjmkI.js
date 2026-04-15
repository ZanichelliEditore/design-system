import{x as m}from"./lit-element-DGXdXVoE.js";import{P as o}from"./index-C0TNZEjZ.js";import{g}from"./storybook-utils-DX4XXC0w.js";import"./index-B6eQiPIy.js";import"./index-B_7VQ3-1.js";import"./index-Bo_H2aQL.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-CedYZwFP.js";import"./iframe-DzRr37qK.js";import"./index-V8RlPDNc.js";import"./utils-CvJv1lj0.js";import"./breakpoints-p3CVLX0Q.js";var i=Object.freeze,h=Object.defineProperty,z=(t,w)=>i(h(t,"raw",{value:i(t.slice())})),r,s;const C={title:"ZTooltip",component:"z-tooltip",argTypes:{position:{options:[o.AUTO,o.TOP,o.BOTTOM,o.LEFT,o.RIGHT,o.TOP_LEFT,o.TOP_RIGHT,o.BOTTOM_LEFT,o.BOTTOM_RIGHT],control:{type:"select"}},"--z-tooltip-theme--surface":g()},args:{dark:!1,"--z-tooltip-theme--surface":"var(--color-surface01)",position:o.LEFT},parameters:{docs:{description:{component:'To be sure the algorithm finds the right container, when calculating the position, set its position to `position: relative;`\nOn the following Story, the "position" prop can be set only for the original positions of the `z-tooltip` by design.'}}}},e={render:t=>m(r||(r=z([`
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
  `])),t.position,t.dark,t["--z-tooltip-theme--surface"])},n={render:t=>m(s||(s=z([`
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
  `])),t.position,t.dark,t["--z-tooltip-theme--surface"])};var c,a,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
} satisfies Story`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var p,u,d,f,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
} satisfies Story`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source},description:{story:"When `closable` property is set to `false`, you can open the tooltip on hover and still click things outside without closing it.\nIn the Story below, the tooltip is opened hovering the button.",...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.description}}};const F=["Default","AutocloseOff"];export{n as AutocloseOff,e as Default,F as __namedExportsOrder,C as default};

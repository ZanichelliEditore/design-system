import{r as e}from"./lit-CgIPLKVa.js";import{R as t}from"./beans-CNd94UMz.js";import{t as n}from"./storybook-utils-DtpJwcUL.js";import"./z-button-BRN_Z_XJ.js";import{t as r}from"./taggedTemplateLiteral-BA-xtlkT.js";import"./z-tooltip-CM060rv2.js";var i,a,o={title:`ZTooltip`,component:`z-tooltip`,argTypes:{position:{options:[t.AUTO,t.TOP,t.BOTTOM,t.LEFT,t.RIGHT,t.TOP_LEFT,t.TOP_RIGHT,t.BOTTOM_LEFT,t.BOTTOM_RIGHT],control:{type:`select`}},"--z-tooltip-theme--surface":n()},args:{dark:!1,"--z-tooltip-theme--surface":`var(--color-surface01)`,position:t.LEFT},parameters:{docs:{description:{component:'To be sure the algorithm finds the right container, when calculating the position, set its position to `position: relative;`\nOn the following Story, the "position" prop can be set only for the original positions of the `z-tooltip` by design.'}}}},s={render:t=>e(i||=r([`
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
  `]),t.position,t.dark,t[`--z-tooltip-theme--surface`])},c={render:t=>e(a||=r([`
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
  `]),t.position,t.dark,t[`--z-tooltip-theme--surface`])};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source},description:{story:"When `closable` property is set to `false`, you can open the tooltip on hover and still click things outside without closing it.\nIn the Story below, the tooltip is opened hovering the button.",...c.parameters?.docs?.description}}};var l=[`Default`,`AutocloseOff`];export{c as AutocloseOff,s as Default,l as __namedExportsOrder,o as default};
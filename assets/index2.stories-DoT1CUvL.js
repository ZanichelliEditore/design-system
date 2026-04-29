import{r as e}from"./lit-CgIPLKVa.js";import{R as t}from"./beans-CNd94UMz.js";import{t as n}from"./storybook-utils-DtpJwcUL.js";import{t as r}from"./style-map-CH-uIwiZ.js";import"./z-button-BRN_Z_XJ.js";import{t as i}from"./taggedTemplateLiteral-BA-xtlkT.js";import"./z-list-element-CBl8wSgV.js";import"./z-list-BTBTMFG3.js";import"./z-offcanvas-CP_yLyVN.js";import"./z-popover-nFUNU55R.js";var a,o=e=>{let t=e.target.closest(`.popover-container`)?.querySelector(`z-popover`);t&&(t?.open?t.open=!1:t.open=!0)},s=e=>{if(e.draggable)return;let t=0,n=0,r=!1,i={x:0,y:0};e.style.position=`absolute`,e.draggable=!0,e.addEventListener(`mousedown`,a=>{a.preventDefault(),a.stopPropagation(),r=!0,t=e.offsetLeft-a.clientX,n=e.offsetTop-a.clientY,i={x:a.clientX,y:a.clientY}}),document.addEventListener(`mouseup`,t=>{t.preventDefault(),t.stopPropagation(),r=!1,!(i.x!==t.clientX||i.y!==t.clientY)&&setTimeout(()=>{o({...t,target:e})},0)}),document.addEventListener(`mousemove`,i=>{if(r){let r=e.parentElement,a=Math.max(Math.min(i.clientX+t,r.clientWidth-e.offsetWidth),0),o=Math.max(Math.min(i.clientY+n,r.clientHeight-e.offsetHeight),0);e.style.left=`${a}px`,e.style.top=`${o}px`}})},c={title:`ZPopover`,component:`z-popover`,argTypes:{position:{options:[null,...Object.values(t).filter(e=>e!==t.AUTO)],control:{type:`select`,labels:{null:`-`}}},"--z-popover-theme--surface":n(),"--z-popover-theme--text":n()},args:{position:null,"--z-popover-theme--surface":`var(--color-surface01)`,"--z-popover-theme--text":`var(--color-default-text)`,"--z-popover-padding":`0`},parameters:{onTriggerClick:o,docs:{story:{inline:!1,iframeHeight:500}}}},l={args:{"--z-popover-padding":`var(--space-unit)`,"--z-popover-shadow-filter":`drop-shadow(0 1px 2px var(--shadow-color-base))`,center:!1,showArrow:!1,closable:!0},render:t=>(document.addEventListener(`DOMContentLoaded`,()=>{let e=document.querySelector(`#demo-trigger`);e&&s(e)}),e`
      <div class="popover-container">
        <z-popover
          style=${r({"--z-popover-theme--surface":t[`--z-popover-theme--surface`],"--z-popover-theme--text":t[`--z-popover-theme--text`],"--z-popover-padding":t[`--z-popover-padding`]})}
          .position=${t.position}
          .center=${t.center}
          .showArrow=${t.showArrow}
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
    `)},u={args:{"--z-popover-theme--surface":`var(--color-surface01)`,"--z-popover-padding":`var(--space-unit)`,position:t.RIGHT_BOTTOM},render:(t,{parameters:n})=>e`
    <div class="popover-container">
      <z-popover
        style=${r({"--z-popover-theme--surface":t[`--z-popover-theme--surface`],"--z-popover-theme--text":t[`--z-popover-theme--text`],"--z-popover-padding":t[`--z-popover-padding`]})}
        .position=${t.position}
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
        .onclick=${n.onTriggerClick}
      ></z-button>
    </div>
  `},d={args:{position:t.RIGHT,"--z-popover-padding":`var(--space-unit)`},render:(t,{parameters:n})=>e` <div class="popover-container popover-container-tooltip">
      <z-popover
        style=${r({"--z-popover-theme--surface":t[`--z-popover-theme--surface`],"--z-popover-theme--text":t[`--z-popover-theme--text`],"--z-popover-padding":t[`--z-popover-padding`]})}
        .position=${t.position}
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
        .onclick=${n.onTriggerClick}
      ></z-button>
    </div>`},f={args:{position:t.TOP,"--z-popover-padding":`var(--space-unit)`},render:(t,{parameters:n})=>e` <div class="popover-container popover-container-tooltip">
      <div class="popover-internal-container">
        <div class="popover-internal-container-2">
          <z-popover
            style=${r({"--z-popover-theme--surface":t[`--z-popover-theme--surface`],"--z-popover-theme--text":t[`--z-popover-theme--text`],"--z-popover-padding":t[`--z-popover-padding`]})}
            .position=${t.position}
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
            .onclick=${n.onTriggerClick}
          ></z-button>
        </div>
      </div>
    </div>`},p={args:{position:t.TOP,"--z-popover-padding":`var(--space-unit)`},render:(t,{parameters:n})=>e(a||=i([`<div class="popover-container">
      <script>
        document.addEventListener("DOMContentLoaded", () => {
          const offcanvasTrigger = document.querySelector("#offcanvas-trigger");
          if (offcanvasTrigger) {
            offcanvasTrigger.addEventListener("click", () => {
              const offcanvas = document.querySelector(".popover-container z-offcanvas");
              if (offcanvas) {
                offcanvas.open = true;
              }
            });
          }
        });
      <\/script>
      <z-button id="offcanvas-trigger">open offcanvas</z-button>
      <z-offcanvas
        transitiondirection="up"
        show-backdrop
      >
        <div slot="canvasContent">
          <z-popover
            style=`,`
            .position=`,`
            bind-to="#popover-trigger"
          >
            <div class="popover-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </div>
          </z-popover>
          <z-button
            id="popover-trigger"
            icon="plus-filled"
            .onclick=`,`
          ></z-button>
        </div>
      </z-offcanvas>
    </div>`]),r({"--z-popover-theme--surface":t[`--z-popover-theme--surface`],"--z-popover-theme--text":t[`--z-popover-theme--text`],"--z-popover-padding":t[`--z-popover-padding`]}),t.position,n.onTriggerClick)};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "position": PopoverPosition.TOP,
    "--z-popover-padding": "var(--space-unit)"
  },
  render: (args, {
    parameters
  }) => html\`<div class="popover-container">
      <script>
        document.addEventListener("DOMContentLoaded", () => {
          const offcanvasTrigger = document.querySelector("#offcanvas-trigger");
          if (offcanvasTrigger) {
            offcanvasTrigger.addEventListener("click", () => {
              const offcanvas = document.querySelector(".popover-container z-offcanvas");
              if (offcanvas) {
                offcanvas.open = true;
              }
            });
          }
        });
      <\/script>
      <z-button id="offcanvas-trigger">open offcanvas</z-button>
      <z-offcanvas
        transitiondirection="up"
        show-backdrop
      >
        <div slot="canvasContent">
          <z-popover
            style=\${styleMap({
    "--z-popover-theme--surface": args["--z-popover-theme--surface"],
    "--z-popover-theme--text": args["--z-popover-theme--text"],
    "--z-popover-padding": args["--z-popover-padding"]
  })}
            .position=\${args.position}
            bind-to="#popover-trigger"
          >
            <div class="popover-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </div>
          </z-popover>
          <z-button
            id="popover-trigger"
            icon="plus-filled"
            .onclick=\${parameters.onTriggerClick}
          ></z-button>
        </div>
      </z-offcanvas>
    </div>\`
} satisfies Story`,...p.parameters?.docs?.source}}};var m=[`Demo`,`ContextualMenuLike`,`Tooltip`,`TooltipWithNestedContainer`,`PopoverInsideTransformedElement`];export{u as ContextualMenuLike,l as Demo,p as PopoverInsideTransformedElement,d as Tooltip,f as TooltipWithNestedContainer,m as __namedExportsOrder,c as default};
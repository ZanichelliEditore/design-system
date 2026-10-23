import{n as e}from"./chunk-DnJy8xQt.js";import{dt as t,pt as n}from"./iframe-iOyjIY3n.js";import{K as r,M as i}from"./beans-zckFsBZy.js";import{n as a,o,t as s}from"./storybook-utils-CXFqIWGM.js";var c=e((()=>{})),l,u,d,f,p,m,h,g,_;e((()=>{t(),r(),o(),c(),l={title:`ZTooltip`,component:`z-tooltip`,argTypes:{position:{options:[i.AUTO,i.TOP,i.BOTTOM,i.LEFT,i.RIGHT,i.TOP_LEFT,i.TOP_RIGHT,i.BOTTOM_LEFT,i.BOTTOM_RIGHT],control:{type:`select`}},"--z-tooltip-theme--surface":a()},args:{dark:!1,"--z-tooltip-theme--surface":`var(--color-surface01)`,position:i.LEFT},parameters:{controls:{exclude:[`bind-to`]},docs:{description:{component:'To be sure the algorithm finds the right container, when calculating the position, set its position to `position: relative;`\nOn the following Story, the "position" prop can be set only for the original positions of the `z-tooltip` by design.'}}}},d=()=>{u.open=!u.open},f={render:e=>n(`div`,{class:`tooltip-container`},n(`z-button`,{id:`trigger`,icon:`plus-filled`,onClick:d}),n(`z-tooltip`,{...e,ref:e=>u=e,style:s(e),bindTo:`#trigger`},n(`div`,{class:`content-container`},n(`z-button`,null,`Open`),n(`z-button`,null,`Save as`),n(`z-button`,null,`Share`))))},p=()=>u.open=!0,m=()=>u.open=!1,h=e=>{let t=e.target.closest(`z-button`);switch(t.icon){case`arrow-clockwise-up-left`:t.icon=`arrow-clockwise-up-right`;break;case`arrow-clockwise-up-right`:t.icon=`arrow-clockwise-down-right`;break;case`arrow-clockwise-down-right`:t.icon=`arrow-clockwise-up-left`;break}},g={render:e=>n(`div`,{class:`tooltip-container`},n(`z-button`,{id:`info-button`,icon:`arrow-clockwise-up-left`,onMouseOver:p,onFocusin:p,onMouseOut:m,onFocusout:m,onClick:h}),n(`z-tooltip`,{...e,closable:!1,bindTo:`#info-button`,ref:e=>u=e,style:s(e)},n(`span`,{class:`tooltip-info-text`},`Clicca per fare girare la freccia`)))},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div class="tooltip-container">
      <z-button id="trigger" icon="plus-filled" onClick={toggleTooltip}></z-button>
      <z-tooltip {...args} ref={el => tooltipRef = el} style={extractCSSVars(args)} bindTo="#trigger">
        <div class="content-container">
          <z-button>Open</z-button>
          <z-button>Save as</z-button>
          <z-button>Share</z-button>
        </div>
      </z-tooltip>
    </div>
} satisfies Story`,...f.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div class="tooltip-container">
      <z-button id="info-button" icon="arrow-clockwise-up-left" onMouseOver={onMouseOver} onFocusin={onMouseOver} onMouseOut={onMouseOut} onFocusout={onMouseOut} onClick={rotateIcon}></z-button>
      <z-tooltip {...args} closable={false} bindTo="#info-button" ref={el => tooltipRef = el} style={extractCSSVars(args)}>
        <span class="tooltip-info-text">Clicca per fare girare la freccia</span>
      </z-tooltip>
    </div>
} satisfies Story`,...g.parameters?.docs?.source},description:{story:"When `closable` property is set to `false`, you can open the tooltip on hover and still click things outside without closing it.\nIn the Story below, the tooltip is opened hovering the button.",...g.parameters?.docs?.description}}},_=[`Default`,`AutocloseOff`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div class="tooltip-container">
      <z-button id="trigger" icon="plus-filled" onClick={toggleTooltip}></z-button>
      <z-tooltip {...args} ref={el => tooltipRef = el} style={extractCSSVars(args)} bindTo="#trigger">
        <div class="content-container">
          <z-button>Open</z-button>
          <z-button>Save as</z-button>
          <z-button>Share</z-button>
        </div>
      </z-tooltip>
    </div>
} satisfies Story`,...f.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div class="tooltip-container">
      <z-button id="info-button" icon="arrow-clockwise-up-left" onMouseOver={onMouseOver} onFocusin={onMouseOver} onMouseOut={onMouseOut} onFocusout={onMouseOut} onClick={rotateIcon}></z-button>
      <z-tooltip {...args} closable={false} bindTo="#info-button" ref={el => tooltipRef = el} style={extractCSSVars(args)}>
        <span class="tooltip-info-text">Clicca per fare girare la freccia</span>
      </z-tooltip>
    </div>
} satisfies Story`,...g.parameters?.docs?.source},description:{story:"When `closable` property is set to `false`, you can open the tooltip on hover and still click things outside without closing it.\nIn the Story below, the tooltip is opened hovering the button.",...g.parameters?.docs?.description}}}}))();export{g as AutocloseOff,f as Default,_ as __namedExportsOrder,l as default};
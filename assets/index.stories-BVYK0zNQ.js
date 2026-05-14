import{n as e}from"./chunk-DnJy8xQt.js";import{X as t,tt as n}from"./iframe-DCi19jo_.js";import{N as r,q as i}from"./beans-G7NAvoly.js";import{n as a,o,t as s}from"./storybook-utils-B8oonaCr.js";import{n as c,t as l}from"./index27-OoA--bKP.js";var u,d=e((()=>{c(),u=l})),f=e((()=>{})),p,m,h,g,_,v,y,b,x;e((()=>{t(),i(),o(),d(),f(),p={title:`ZTooltip`,component:u,argTypes:{position:{options:[r.AUTO,r.TOP,r.BOTTOM,r.LEFT,r.RIGHT,r.TOP_LEFT,r.TOP_RIGHT,r.BOTTOM_LEFT,r.BOTTOM_RIGHT],control:{type:`select`}},"--z-tooltip-theme--surface":a()},args:{dark:!1,"--z-tooltip-theme--surface":`var(--color-surface01)`,position:r.LEFT},parameters:{controls:{exclude:[`bind-to`]},docs:{description:{component:'To be sure the algorithm finds the right container, when calculating the position, set its position to `position: relative;`\nOn the following Story, the "position" prop can be set only for the original positions of the `z-tooltip` by design.'}}}},h=()=>{m.open=!m.open},g={render:e=>n(`div`,{class:`tooltip-container`},n(`z-button`,{id:`trigger`,icon:`plus-filled`,onClick:h}),n(`z-tooltip`,{...e,ref:e=>m=e,style:s(e),bindTo:`#trigger`},n(`div`,{class:`content-container`},n(`z-button`,null,`Open`),n(`z-button`,null,`Save as`),n(`z-button`,null,`Share`))))},_=()=>m.open=!0,v=()=>m.open=!1,y=e=>{let t=e.target.closest(`z-button`);switch(t.icon){case`arrow-clockwise-up-left`:t.icon=`arrow-clockwise-up-right`;break;case`arrow-clockwise-up-right`:t.icon=`arrow-clockwise-down-right`;break;case`arrow-clockwise-down-right`:t.icon=`arrow-clockwise-up-left`;break}},b={render:e=>n(`div`,{class:`tooltip-container`},n(`z-button`,{id:`info-button`,icon:`arrow-clockwise-up-left`,onMouseOver:_,onFocusin:_,onMouseOut:v,onFocusout:v,onClick:y}),n(`z-tooltip`,{...e,closable:!1,bindTo:`#info-button`,ref:e=>m=e,style:s(e)},n(`span`,{class:`tooltip-info-text`},`Clicca per fare girare la freccia`)))},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div class="tooltip-container">
      <z-button id="info-button" icon="arrow-clockwise-up-left" onMouseOver={onMouseOver} onFocusin={onMouseOver} onMouseOut={onMouseOut} onFocusout={onMouseOut} onClick={rotateIcon}></z-button>
      <z-tooltip {...args} closable={false} bindTo="#info-button" ref={el => tooltipRef = el} style={extractCSSVars(args)}>
        <span class="tooltip-info-text">Clicca per fare girare la freccia</span>
      </z-tooltip>
    </div>
} satisfies Story`,...b.parameters?.docs?.source},description:{story:"When `closable` property is set to `false`, you can open the tooltip on hover and still click things outside without closing it.\nIn the Story below, the tooltip is opened hovering the button.",...b.parameters?.docs?.description}}},x=[`Default`,`AutocloseOff`]}))();export{b as AutocloseOff,g as Default,x as __namedExportsOrder,p as default};
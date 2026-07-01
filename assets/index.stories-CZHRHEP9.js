import{n as e}from"./chunk-DnJy8xQt.js";import{$ as t,Q as n,X as r,it as i,nt as a,rt as o}from"./iframe-BmS_1CGU.js";import{F as s,P as c,V as l,Y as u,p as d}from"./beans-DwSZ05Mp.js";import{P as f}from"./index2-BcIRfled.js";import{n as p}from"./iconset-D6tUNq_b.js";import{n as m}from"./breakpoints-91-EzIpy.js";import{t as h}from"./index17-2RcrUpLZ.js";function g(e){switch(e){case!0:case`true`:case 1:case`1`:case`on`:case`yes`:return!0;case!1:case`false`:case 0:case`0`:case`off`:case`no`:return!1;default:return e}}var _=e((()=>{})),v,y,b,x,S=e((()=>{o(),f(),m(),p(),h(),v=()=>`:host{position:relative;display:block;overflow:auto;min-width:max-content;max-width:100%;box-sizing:border-box;padding:var(--space-unit)}:host([expandable]){--z-table--expand-button-size:40px}`,y=()=>`z-table,table.z-table{background-color:var(--color-surface01);--z-table--cells-padding:calc(var(--space-unit) * 2)}table.z-table{border-collapse:collapse}z-thead,table.z-table thead{background-color:var(--color-background);--z-table--cells-bottom-border-size:var(--border-size-medium)}z-tfoot,table.z-table tfoot{border-top:var(--border-size-medium) solid var(--color-surface03);border-bottom:var(--border-size-medium) solid var(--color-surface03)}z-tfoot z-tr,table.z-table tfoot tr{border-bottom:calc(var(--z-table--cells-bottom-border-size)) solid var(--color-surface03) !important}z-tr,table.z-table tr{border-bottom:var(--z-table--cells-bottom-border-size, var(--border-size-small)) solid var(--color-surface03)}z-td,z-th,table.z-table td,table.z-table th{padding:var(--z-table--cells-padding, calc(var(--space-unit) * 2));text-align:left}z-th:not(:first-child),z-td:not(:first-child),table.z-table th:not(:first-child),table.z-table td:not(:first-child){border-left:var(--z-table--cell-left-border, none)}z-table[bordered],table.z-table.z-table-bordered{--z-table--cell-left-border:1px solid var(--color-surface03)}table.z-table-hover>tbody>tr:hover>td,table.z-table-hover>tfoot>tr:hover>td{position:relative;background-color:var(--color-surface02)}table.z-table-hover>tbody>tr:hover>td::after,table.z-table-hover>tfoot>tr:hover>td::after{position:absolute;z-index:1;top:0;right:0;bottom:0;left:-1px;box-shadow:inset 0 var(--border-size-small) 0 var(--color-surface04),     inset 0 calc(var(--border-size-small) * -1) 0 var(--color-surface04);content:""}table.z-table-hover>tbody>tr:hover>td:first-child::after,table.z-table-hover>thead>tr:hover>th:first-child::after,table.z-table-hover>tfoot>tr:hover>td:first-child::after{left:0}`,b=i(class extends n{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.bordered=!1,this.expandable=!1}updateExpandable(){this.expandable=this.host.querySelectorAll(`z-tr[expandable]`).length>0}componentWillLoad(){this.expandableMutationObserver=new MutationObserver((()=>{this.updateExpandable()})),this.expandableMutationObserver.observe(this.host,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`expandable`],attributeOldValue:!1})}disconnectedCallback(){var e;(e=this.expandableMutationObserver)==null||e.disconnect()}render(){return a(t,{key:`049f897c8de91812feb63d2c21a37f0bd3cee57f`,expandable:this.expandable},a(`div`,{key:`50dbde44d7ce839bdfbab7cf449dd4167c13c7e2`,class:`table`,role:`table`},a(`slot`,{key:`f624fab82612a01e4703d9096c6903208a4501b7`})))}get host(){return this}static get style(){return v()+y()}},[257,`z-table`,{bordered:[516],expandable:[32]}]),x=b})),C=e((()=>{})),w,T,E,D,O,k,A,j;e((()=>{r(),u(),_(),S(),C(),w={title:`ZTable`,component:x,args:{bordered:!0,"--z-table--cells-padding":`16px`},parameters:{docs:{description:{component:"## Accessibility\n\nThe `ZTable` and its related components comes with a set of roles and ARIA attributes to help screen readers to understand the table structure and its content.\nThe roles are mainly used to identify the table parts, since they are not the native HTML table elements.\nThe ARIA attributes used are the following:\n- [`aria-sort`](https://www.w3.org/TR/wai-aria-1.1/#aria-sort) to identify the sorting direction of a column when sorting is enabled\n- [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded) to identify if a row is expanded or not when expandable rows are enabled. The attribute is set on the button that expands the row, as explained in the [docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)\n- [`aria-controls`](https://www.w3.org/TR/wai-aria-1.1/#aria-controls) is used on the expandable row button to identify the content that is controlled by the button itself, as explained in the [docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls). Maybe the `aria-owns` attribute were more appropriate, but it is not supported on MacOS and iOS with VoiceOver, so we used `aria-controls` instead.\n- [`aria-label`](https://www.w3.org/TR/wai-aria-1.1/#aria-label) is used on the expandable row button to provide a label for the button, since the button doesn't have any text content."}}}},T=(e=1)=>[...Array(e)].map(()=>a(`z-td`,null,`Contenuto cella`)),E={render:e=>a(`z-table`,{class:`z-table-demo`,...e},a(`z-thead`,null,a(`z-tr`,null,[...Array(8)].map(()=>a(`z-th`,null,`Titolo colonna`)))),a(`z-tbody`,null,[...[,,,,,]].map(()=>a(`z-tr`,null,T(8)))),a(`z-tfoot`,null,a(`z-tr`,null,a(`z-td`,{colspan:8},`Table footer`))))},D={render:e=>a(`z-table`,{class:`z-table-demo`,...e},a(`z-thead`,null,a(`z-tr`,null,[...Array(8)].map((e,t)=>a(`z-th`,null,`Colonna `,t+1)))),a(`z-tbody`,null,a(`z-tr`,null,a(`z-td`,null,`Contenuto cella`),a(`z-td`,null,`Contenuto cella`),a(`z-td`,{showMenu:l.ALWAYS},a(`span`,null,`Contenuto cella con menu`),a(`div`,{slot:`contextual-menu`},`Contenuto del popover`)),T(5)),a(`z-tr`,null,T(8)),a(`z-tr`,{expandable:!0},a(`z-td`,null,`Contenuto cella`),a(`z-td`,null,`Contenuto cella`),a(`z-td`,null,a(`span`,null,`Contenuto cella`),a(`z-button`,{class:`prevent-expand`,onClick:()=>alert(`button clicked without expanding the row`),icon:`plus`,size:d.X_SMALL})),T(5),a(`z-td`,null,`Contenuto espanso`)),a(`z-tr`,null,T(8)),a(`z-tr`,{expandable:!0},a(`z-td`,null,`Contenuto cella`),a(`z-td`,{showMenu:l.ALWAYS},a(`span`,null,`Contenuto cella con menu`),a(`div`,{slot:`contextual-menu`},`Contenuto del popover`)),T(6),a(`z-td`,null,`Contenuto espanso`))),a(`z-tfoot`,null,a(`z-tr`,null,a(`z-td`,{colspan:8},`Table footer`))))},O={args:{stickyHeader:!0,stickyFooter:!0,stickFirstColumn:!0},render:e=>a(`z-table`,{class:`z-table-demo`,bordered:e.bordered,style:{"--z-table--cells-padding":e[`--z-table--cells-padding`],height:`400px`}},a(`z-thead`,{sticky:e.stickyHeader},a(`z-tr`,null,a(`z-th`,{sticky:e.stickFirstColumn},`Colonna 1`),[...Array(7)].map((e,t)=>a(`z-th`,null,`Colonna `,t+2)))),a(`z-tbody`,null,a(`z-tr`,null,a(`z-td`,{sticky:e.stickFirstColumn},`Contenuto cella 1`),a(`z-td`,null,`Contenuto cella`),a(`z-td`,null,`Contenuto cella`),a(`z-td`,{showMenu:l.ALWAYS},a(`span`,null,`Contenuto cella con menu`),a(`div`,{slot:`contextual-menu`},`Contenuto del popover`)),T(4)),[...[,,,,,]].map(()=>a(`z-tr`,null,a(`z-td`,{sticky:e.stickFirstColumn},`Contenuto cella 1`),T(7))),a(`z-tr`,{expandable:!0},a(`z-td`,{sticky:e.stickFirstColumn},`Contenuto cella 1`),T(6),a(`z-td`,null,a(`span`,null,`Contenuto cella`),a(`z-button`,{class:`prevent-expand`,onClick:()=>alert(`button clicked`),icon:`plus`,size:d.X_SMALL})),a(`z-td`,null,`Contenuto espanso`)),a(`z-tr`,{expandable:!0},a(`z-td`,{sticky:e.stickFirstColumn},`Contenuto cella 1`),T(7),a(`z-td`,null,`Contenuto espanso`))),a(`z-tfoot`,{sticky:e.stickyFooter},a(`z-tr`,null,a(`z-td`,{colspan:8},`Table footer`))))},k={argTypes:{isFocusable:g,showMenu:{control:{type:`inline-radio`,labels:{null:`hidden`}},popoverPosition:{options:Object.values(c),control:{type:`select`}},options:[null,...Object.values(l)]}},args:{isFocusable:!0,showMenu:l.HOVER,popoverPosition:c.AUTO},render:e=>a(`z-table`,{class:`z-table-demo`,bordered:e.bordered,style:{"--z-table--cells-padding":e[`--z-table--cells-padding`]}},a(`z-thead`,{isFocusable:e.isFocusable},a(`z-tr`,null,a(`z-th`,null,`Colonna 1`),a(`z-th`,{showMenu:e.showMenu,popoverPosition:e.popoverPosition},`Heading con menu`,a(`div`,{slot:`contextual-menu`},`Contenuto del popover`)),a(`z-th`,null,`Colonna 2`))),a(`z-tbody`,null,[...[,,,]].map(()=>a(`z-tr`,null,a(`z-td`,{showMenu:e.showMenu},a(`span`,null,`Contenuto cella con menu`),a(`div`,{slot:`contextual-menu`},`Contenuto del popover`)),a(`z-td`,null,`Contenuto cella`),a(`z-td`,{showMenu:e.showMenu},a(`span`,null,`Contenuto cella con menu`),a(`div`,{slot:`contextual-menu`},`Contenuto del popover`))))))},A={argTypes:{showSorting:{options:Object.values(l),control:{type:`inline-radio`}}},args:{isFocusable:!0,showSorting:l.HOVER},render:e=>a(`z-table`,{class:`z-table-demo`,bordered:e.bordered,style:{"--z-table--cells-padding":e[`--z-table--cells-padding`]}},a(`z-thead`,{isFocusable:e.isFocusable},a(`z-tr`,null,a(`z-th`,{sortDirection:s.ASC,showMenu:l.HOVER,showSorting:e.showSorting},`Colonna 1 con menu e sorting`,a(`div`,{slot:`contextual-menu`},`Contenuto del popover`)),a(`z-th`,null,`Colonna 2`),a(`z-th`,{sortDirection:s.DESC,showSorting:e.showSorting},`Colonna 3 con sorting`))),a(`z-tbody`,null,[...[,,,]].map(()=>a(`z-tr`,null,T(3)))))},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <z-table class="z-table-demo" {...args}>
      <z-thead>
        <z-tr>
          {[...new Array(8)].map(() => <z-th>Titolo colonna</z-th>)}
        </z-tr>
      </z-thead>
      <z-tbody>
        {[...new Array(5)].map(() => <z-tr>{cellsTemplate(8)}</z-tr>)}
      </z-tbody>
      <z-tfoot>
        <z-tr>
          <z-td colspan={8}>Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <z-table class="z-table-demo" {...args}>
      <z-thead>
        <z-tr>
          {[...new Array(8)].map((_, index) => <z-th>Colonna {index + 1}</z-th>)}
        </z-tr>
      </z-thead>
      <z-tbody>
        <z-tr>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td showMenu={VisibilityCondition.ALWAYS}>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-td>
          {cellsTemplate(5)}
        </z-tr>
        <z-tr>{cellsTemplate(8)}</z-tr>
        <z-tr expandable>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>
            <span>Contenuto cella</span>
            <z-button class="prevent-expand" onClick={() => alert("button clicked without expanding the row")} icon="plus" size={ControlSize.X_SMALL}></z-button>
          </z-td>
          {cellsTemplate(5)}
          <z-td>Contenuto espanso</z-td>
        </z-tr>
        <z-tr>{cellsTemplate(8)}</z-tr>
        <z-tr expandable>
          <z-td>Contenuto cella</z-td>
          <z-td showMenu={VisibilityCondition.ALWAYS}>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-td>
          {cellsTemplate(6)}
          <z-td>Contenuto espanso</z-td>
        </z-tr>
      </z-tbody>
      <z-tfoot>
        <z-tr>
          <z-td colspan={8}>Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>
}`,...D.parameters?.docs?.source},description:{story:'Just set `expandable` prop on the `z-tr` element to make it expandable, then put an additional `z-td` as extended content.\nIf you put a clickable item as a child cell of a z-tr with `expandable` set to `true`, you need to set a "prevent-expand" class on that item, in order to prevent unwanted row expansions.',...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    stickyHeader: true,
    stickyFooter: true,
    stickFirstColumn: true
  },
  render: args => <z-table class="z-table-demo" bordered={args.bordered} style={{
    "--z-table--cells-padding": args["--z-table--cells-padding"],
    "height": "400px"
  }}>
      <z-thead sticky={args.stickyHeader}>
        <z-tr>
          <z-th sticky={args.stickFirstColumn}>Colonna 1</z-th>
          {[...new Array(7)].map((_, index) => <z-th>Colonna {index + 2}</z-th>)}
        </z-tr>
      </z-thead>
      <z-tbody>
        <z-tr>
          <z-td sticky={args.stickFirstColumn}>Contenuto cella 1</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td showMenu={VisibilityCondition.ALWAYS}>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-td>
          {cellsTemplate(4)}
        </z-tr>
        {[...new Array(5)].map(() => <z-tr>
            <z-td sticky={args.stickFirstColumn}>Contenuto cella 1</z-td>
            {cellsTemplate(7)}
          </z-tr>)}
        <z-tr expandable>
          <z-td sticky={args.stickFirstColumn}>Contenuto cella 1</z-td>
          {cellsTemplate(6)}
          <z-td>
            <span>Contenuto cella</span>
            <z-button class="prevent-expand" onClick={() => alert("button clicked")} icon="plus" size={ControlSize.X_SMALL}></z-button>
          </z-td>
          <z-td>Contenuto espanso</z-td>
        </z-tr>
        <z-tr expandable>
          <z-td sticky={args.stickFirstColumn}>Contenuto cella 1</z-td>
          {cellsTemplate(7)}
          <z-td>Contenuto espanso</z-td>
        </z-tr>
      </z-tbody>
      <z-tfoot sticky={args.stickyFooter}>
        <z-tr>
          <z-td colspan={8}>Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>
}`,...O.parameters?.docs?.source},description:{story:"To make a column sticky, you need to set the `sticky` prop on the `z-th` and/or `z-td` elements of the same column.\nFor the header or footer, just set the `sticky` prop on the `z-thead` or `z-tfoot` element.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  argTypes: {
    isFocusable: boolean,
    showMenu: {
      control: {
        type: "inline-radio",
        labels: {
          null: "hidden"
        }
      },
      popoverPosition: {
        options: Object.values(PopoverPosition),
        control: {
          type: "select"
        }
      },
      options: [null, ...Object.values(VisibilityCondition)]
    }
  },
  args: {
    isFocusable: true,
    showMenu: VisibilityCondition.HOVER,
    popoverPosition: PopoverPosition.AUTO
  },
  render: args => <z-table class="z-table-demo" bordered={args.bordered} style={{
    "--z-table--cells-padding": args["--z-table--cells-padding"]
  }}>
      <z-thead isFocusable={args.isFocusable}>
        <z-tr>
          <z-th>Colonna 1</z-th>
          <z-th showMenu={args.showMenu} popoverPosition={args.popoverPosition}>
            Heading con menu
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-th>
          <z-th>Colonna 2</z-th>
        </z-tr>
      </z-thead>
      <z-tbody>
        {[...new Array(3)].map(() => <z-tr>
            <z-td showMenu={args.showMenu}>
              <span>Contenuto cella con menu</span>
              <div slot="contextual-menu">Contenuto del popover</div>
            </z-td>
            <z-td>Contenuto cella</z-td>
            <z-td showMenu={args.showMenu}>
              <span>Contenuto cella con menu</span>
              <div slot="contextual-menu">Contenuto del popover</div>
            </z-td>
          </z-tr>)}
      </z-tbody>
    </z-table>
}`,...k.parameters?.docs?.source},description:{story:"Use the `showMenu` prop on `z-td` or `z-th`, setting a value of the enum `VisibilityCondition` (`HOVER` or `ALWAYS`), to show a contextual menu button on the cell. The content of the menu must be placed using the slot `contextual-menu`.\nUse `popoverPosition` prop on `z-th` to set the position of contextual menu, default is `auto`.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  argTypes: {
    showSorting: {
      options: Object.values(VisibilityCondition),
      control: {
        type: "inline-radio"
      }
    }
  },
  args: {
    isFocusable: true,
    showSorting: VisibilityCondition.HOVER
  },
  render: args => <z-table class="z-table-demo" bordered={args.bordered} style={{
    "--z-table--cells-padding": args["--z-table--cells-padding"]
  }}>
      <z-thead isFocusable={args.isFocusable}>
        <z-tr>
          <z-th sortDirection={SortDirection.ASC} showMenu={VisibilityCondition.HOVER} showSorting={args.showSorting}>
            Colonna 1 con menu e sorting
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-th>
          <z-th>Colonna 2</z-th>
          <z-th sortDirection={SortDirection.DESC} showSorting={args.showSorting}>
            Colonna 3 con sorting
          </z-th>
        </z-tr>
      </z-thead>
      <z-tbody>
        {[...new Array(3)].map(() => <z-tr>{cellsTemplate(3)}</z-tr>)}
      </z-tbody>
    </z-table>
}`,...A.parameters?.docs?.source},description:{story:"Set the `sortDirection` prop to `SortDirection.ASC` or `SortDirection.DESC` to enable sorting and show the sort button.\nClicking the button will fire the `sort` event with the `sortDirection` as detail.",...A.parameters?.docs?.description}}},j=[`Default`,`ExpandableRows`,`Sticky`,`CellsWithContextualMenu`,`SortAction`]}))();export{k as CellsWithContextualMenu,E as Default,D as ExpandableRows,A as SortAction,O as Sticky,j as __namedExportsOrder,w as default};
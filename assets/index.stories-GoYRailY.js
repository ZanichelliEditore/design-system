import{n as e}from"./chunk-DnJy8xQt.js";import{dt as t,pt as n}from"./iframe-izO1_eE9.js";import{K as r,M as i,N as a,f as o,z as s}from"./beans-zckFsBZy.js";function c(e){switch(e){case!0:case`true`:case 1:case`1`:case`on`:case`yes`:return!0;case!1:case`false`:case 0:case`0`:case`off`:case`no`:return!1;default:return e}}var l=e((()=>{})),u=e((()=>{})),d,f,p,m,h,g,_,v;e((()=>{t(),r(),l(),u(),d={title:`Deprecated/ZTable`,component:`z-table`,args:{bordered:!0,"--z-table--cells-padding":`16px`},parameters:{docs:{description:{component:"## Accessibility\n\nThe `ZTable` and its related components comes with a set of roles and ARIA attributes to help screen readers to understand the table structure and its content.\nThe roles are mainly used to identify the table parts, since they are not the native HTML table elements.\nThe ARIA attributes used are the following:\n- [`aria-sort`](https://www.w3.org/TR/wai-aria-1.1/#aria-sort) to identify the sorting direction of a column when sorting is enabled\n- [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded) to identify if a row is expanded or not when expandable rows are enabled. The attribute is set on the button that expands the row, as explained in the [docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)\n- [`aria-controls`](https://www.w3.org/TR/wai-aria-1.1/#aria-controls) is used on the expandable row button to identify the content that is controlled by the button itself, as explained in the [docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls). Maybe the `aria-owns` attribute were more appropriate, but it is not supported on MacOS and iOS with VoiceOver, so we used `aria-controls` instead.\n- [`aria-label`](https://www.w3.org/TR/wai-aria-1.1/#aria-label) is used on the expandable row button to provide a label for the button, since the button doesn't have any text content."}}}},f=(e=1)=>[...Array(e)].map(()=>n(`z-td`,null,`Contenuto cella`)),p={render:e=>n(`z-table`,{class:`z-table-demo`,...e},n(`z-thead`,null,n(`z-tr`,null,[...Array(8)].map(()=>n(`z-th`,null,`Titolo colonna`)))),n(`z-tbody`,null,[...[,,,,,]].map(()=>n(`z-tr`,null,f(8)))),n(`z-tfoot`,null,n(`z-tr`,null,n(`z-td`,{colspan:8},`Table footer`))))},m={render:e=>n(`z-table`,{class:`z-table-demo`,...e},n(`z-thead`,null,n(`z-tr`,null,[...Array(8)].map((e,t)=>n(`z-th`,null,`Colonna `,t+1)))),n(`z-tbody`,null,n(`z-tr`,null,n(`z-td`,null,`Contenuto cella`),n(`z-td`,null,`Contenuto cella`),n(`z-td`,{showMenu:s.ALWAYS},n(`span`,null,`Contenuto cella con menu`),n(`div`,{slot:`contextual-menu`},`Contenuto del popover`)),f(5)),n(`z-tr`,null,f(8)),n(`z-tr`,{expandable:!0},n(`z-td`,null,`Contenuto cella`),n(`z-td`,null,`Contenuto cella`),n(`z-td`,null,n(`span`,null,`Contenuto cella`),n(`z-button`,{class:`prevent-expand`,onClick:()=>alert(`button clicked without expanding the row`),icon:`plus`,size:o.X_SMALL})),f(5),n(`z-td`,null,`Contenuto espanso`)),n(`z-tr`,null,f(8)),n(`z-tr`,{expandable:!0},n(`z-td`,null,`Contenuto cella`),n(`z-td`,{showMenu:s.ALWAYS},n(`span`,null,`Contenuto cella con menu`),n(`div`,{slot:`contextual-menu`},`Contenuto del popover`)),f(6),n(`z-td`,null,`Contenuto espanso`))),n(`z-tfoot`,null,n(`z-tr`,null,n(`z-td`,{colspan:8},`Table footer`))))},h={args:{stickyHeader:!0,stickyFooter:!0,stickFirstColumn:!0},render:e=>n(`z-table`,{class:`z-table-demo`,bordered:e.bordered,style:{"--z-table--cells-padding":e[`--z-table--cells-padding`],height:`400px`}},n(`z-thead`,{sticky:e.stickyHeader},n(`z-tr`,null,n(`z-th`,{sticky:e.stickFirstColumn},`Colonna 1`),[...Array(7)].map((e,t)=>n(`z-th`,null,`Colonna `,t+2)))),n(`z-tbody`,null,n(`z-tr`,null,n(`z-td`,{sticky:e.stickFirstColumn},`Contenuto cella 1`),n(`z-td`,null,`Contenuto cella`),n(`z-td`,null,`Contenuto cella`),n(`z-td`,{showMenu:s.ALWAYS},n(`span`,null,`Contenuto cella con menu`),n(`div`,{slot:`contextual-menu`},`Contenuto del popover`)),f(4)),[...[,,,,,]].map(()=>n(`z-tr`,null,n(`z-td`,{sticky:e.stickFirstColumn},`Contenuto cella 1`),f(7))),n(`z-tr`,{expandable:!0},n(`z-td`,{sticky:e.stickFirstColumn},`Contenuto cella 1`),f(6),n(`z-td`,null,n(`span`,null,`Contenuto cella`),n(`z-button`,{class:`prevent-expand`,onClick:()=>alert(`button clicked`),icon:`plus`,size:o.X_SMALL})),n(`z-td`,null,`Contenuto espanso`)),n(`z-tr`,{expandable:!0},n(`z-td`,{sticky:e.stickFirstColumn},`Contenuto cella 1`),f(7),n(`z-td`,null,`Contenuto espanso`))),n(`z-tfoot`,{sticky:e.stickyFooter},n(`z-tr`,null,n(`z-td`,{colspan:8},`Table footer`))))},g={argTypes:{isFocusable:c,showMenu:{control:{type:`inline-radio`,labels:{null:`hidden`}},popoverPosition:{options:Object.values(i),control:{type:`select`}},options:Object.values(s)}},args:{isFocusable:!0,showMenu:s.HOVER,popoverPosition:i.AUTO},render:e=>n(`z-table`,{class:`z-table-demo`,bordered:e.bordered,style:{"--z-table--cells-padding":e[`--z-table--cells-padding`]}},n(`z-thead`,{isFocusable:e.isFocusable},n(`z-tr`,null,n(`z-th`,null,`Colonna 1`),n(`z-th`,{showMenu:e.showMenu,popoverPosition:e.popoverPosition},`Heading con menu`,n(`div`,{slot:`contextual-menu`},`Contenuto del popover`)),n(`z-th`,null,`Colonna 2`))),n(`z-tbody`,null,[...[,,,]].map(()=>n(`z-tr`,null,n(`z-td`,{showMenu:e.showMenu},n(`span`,null,`Contenuto cella con menu`),n(`div`,{slot:`contextual-menu`},`Contenuto del popover`)),n(`z-td`,null,`Contenuto cella`),n(`z-td`,{showMenu:e.showMenu},n(`span`,null,`Contenuto cella con menu`),n(`div`,{slot:`contextual-menu`},`Contenuto del popover`))))))},_={argTypes:{showSorting:{options:Object.values(s),control:{type:`inline-radio`}}},args:{isFocusable:!0,showSorting:s.HOVER},render:e=>n(`z-table`,{class:`z-table-demo`,bordered:e.bordered,style:{"--z-table--cells-padding":e[`--z-table--cells-padding`]}},n(`z-thead`,{isFocusable:e.isFocusable},n(`z-tr`,null,n(`z-th`,{sortDirection:a.ASC,showMenu:s.HOVER,showSorting:e.showSorting},`Colonna 1 con menu e sorting`,n(`div`,{slot:`contextual-menu`},`Contenuto del popover`)),n(`z-th`,null,`Colonna 2`),n(`z-th`,{sortDirection:a.DESC,showSorting:e.showSorting},`Colonna 3 con sorting`))),n(`z-tbody`,null,[...[,,,]].map(()=>n(`z-tr`,null,f(3)))))},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:'Just set `expandable` prop on the `z-tr` element to make it expandable, then put an additional `z-td` as extended content.\nIf you put a clickable item as a child cell of a z-tr with `expandable` set to `true`, you need to set a "prevent-expand" class on that item, in order to prevent unwanted row expansions.',...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"To make a column sticky, you need to set the `sticky` prop on the `z-th` and/or `z-td` elements of the same column.\nFor the header or footer, just set the `sticky` prop on the `z-thead` or `z-tfoot` element.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
      options: Object.values(VisibilityCondition)
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
}`,...g.parameters?.docs?.source},description:{story:"Use the `showMenu` prop on `z-td` or `z-th`, setting a value of the enum `VisibilityCondition` (`HOVER` or `ALWAYS`), to show a contextual menu button on the cell. The content of the menu must be placed using the slot `contextual-menu`.\nUse `popoverPosition` prop on `z-th` to set the position of contextual menu, default is `auto`.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:"Set the `sortDirection` prop to `SortDirection.ASC` or `SortDirection.DESC` to enable sorting and show the sort button.\nClicking the button will fire the `sort` event with the `sortDirection` as detail.",..._.parameters?.docs?.description}}},v=[`Default`,`ExpandableRows`,`Sticky`,`CellsWithContextualMenu`,`SortAction`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:'Just set `expandable` prop on the `z-tr` element to make it expandable, then put an additional `z-td` as extended content.\nIf you put a clickable item as a child cell of a z-tr with `expandable` set to `true`, you need to set a "prevent-expand" class on that item, in order to prevent unwanted row expansions.',...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"To make a column sticky, you need to set the `sticky` prop on the `z-th` and/or `z-td` elements of the same column.\nFor the header or footer, just set the `sticky` prop on the `z-thead` or `z-tfoot` element.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
      options: Object.values(VisibilityCondition)
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
}`,...g.parameters?.docs?.source},description:{story:"Use the `showMenu` prop on `z-td` or `z-th`, setting a value of the enum `VisibilityCondition` (`HOVER` or `ALWAYS`), to show a contextual menu button on the cell. The content of the menu must be placed using the slot `contextual-menu`.\nUse `popoverPosition` prop on `z-th` to set the position of contextual menu, default is `auto`.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:"Set the `sortDirection` prop to `SortDirection.ASC` or `SortDirection.DESC` to enable sorting and show the sort button.\nClicking the button will fire the `sort` event with the `sortDirection` as detail.",..._.parameters?.docs?.description}}}}))();export{g as CellsWithContextualMenu,p as Default,m as ExpandableRows,_ as SortAction,h as Sticky,v as __namedExportsOrder,d as default};
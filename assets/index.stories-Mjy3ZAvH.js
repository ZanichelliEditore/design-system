import{r as e}from"./lit-CgIPLKVa.js";import{i as t,t as n}from"./chunk-L4EGOTBX-KlzQXQPc.js";import{a as r,i,n as a,o,r as s}from"./client-C9JD6DZT.js";import"./z-icon-0wx6NWiZ.js";import{G as c,R as l,h as u,u as d,z as f}from"./beans-CNd94UMz.js";import{t as p}from"./style-map-CH-uIwiZ.js";import"./z-button-BvaTgWEC.js";import{m,t as h}from"./utils-BxCWOr43.js";import"./z-popover-C1O12vpz.js";import{t as g}from"./repeat-zlIAa9HO.js";var _=()=>`:host{display:block;box-sizing:border-box}`;r(class extends a{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow()}render(){return o(s,{key:`98c2aed31dd99bf7a5eaf71dbb8f311f09720f71`,role:`rowgroup`},o(`slot`,{key:`d926216086db64744f8f528f28781b87aabe52af`}))}static get style(){return _()}},[257,`z-tbody`]);var v={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZTbody`,tagName:`z-tbody`,customElement:!0,members:[],events:[],slots:[{name:`-`,description:"ZTbody content (`z-tr`)."}]}],exports:[{kind:`js`,name:`ZTbody`,declaration:{name:`ZTbody`,module:`src/components/table/z-tbody/index.tsx`}},{kind:`custom-element-definition`,name:`z-tbody`,declaration:{name:`ZTbody`,module:`src/components/table/z-tbody/index.tsx`}}]}]};t({...n()||{},...v,modules:[...(n()||{}).modules||[],...v.modules]});var y=()=>`:host{display:block;box-sizing:border-box;border-top:1px solid var(--color-surface03);border-bottom:1px solid var(--color-surface03)}:host([sticky]){position:sticky;z-index:1;bottom:0;background-color:var(--color-surface01)}`;r(class extends a{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.sticky=!1}render(){return o(s,{key:`b936466f9c7ac7841947197af183e6f2c6fb09c2`,role:`rowgroup`,tabIndex:-1},o(`slot`,{key:`f44513dc583990df23fc9cc51a2d20447b04c531`}))}static get style(){return y()}},[257,`z-tfoot`,{sticky:[516]}]);var b={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZTfoot`,tagName:`z-tfoot`,customElement:!0,members:[{kind:`field`,name:`sticky`,type:`boolean`,description:`If true, the footer will be stuck to the bottom of the table.`,default:`false`}],events:[],slots:[{name:`-`,description:"ZTFoot content (`z-tr`)."}]}],exports:[{kind:`js`,name:`ZTfoot`,declaration:{name:`ZTfoot`,module:`src/components/table/z-tfoot/index.tsx`}},{kind:`custom-element-definition`,name:`z-tfoot`,declaration:{name:`ZTfoot`,module:`src/components/table/z-tfoot/index.tsx`}}]}]};t({...n()||{},...b,modules:[...(n()||{}).modules||[],...b.modules]});var x=()=>`:host{--z-table--cells-bottom-border-size:var(     --border-size-medium   );--z-table--cells-background:var(     --color-background   );display:block;box-sizing:border-box}:host([sticky]){position:sticky;z-index:2;top:0;box-shadow:0 2px 4px -2px var(--shadow-color-base)}:host(:focus-visible){box-shadow:none;outline:none}`;r(class extends a{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.sticky=!1,this.isFocusable=!1}render(){return o(s,{key:`55f13ab837dc4d9826dc4daa020b1b6670211f0f`,role:`rowgroup`,tabIndex:this.isFocusable?0:-1},o(`slot`,{key:`5ce8de16f9e8501f83e004cc1b6c9b735549513d`}))}get host(){return this}static get style(){return x()}},[257,`z-thead`,{sticky:[516],isFocusable:[516,`is-focusable`]}]);var S={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZThead`,tagName:`z-thead`,customElement:!0,members:[{kind:`field`,name:`sticky`,type:`boolean`,description:`If true, the header will be stuck to the top of the table.`,default:`false`},{kind:`field`,name:`isFocusable`,type:`boolean`,description:`The element is focusable`,default:`false`}],events:[],slots:[{name:`-`,description:"ZThead content (`z-tr`)."}]}],exports:[{kind:`js`,name:`ZThead`,declaration:{name:`ZThead`,module:`src/components/table/z-thead/index.tsx`}},{kind:`custom-element-definition`,name:`z-thead`,declaration:{name:`ZThead`,module:`src/components/table/z-thead/index.tsx`}}]}]};t({...n()||{},...S,modules:[...(n()||{}).modules||[],...S.modules]});var C=()=>`:host{position:relative;display:flex;max-width:100%;align-items:center;padding:calc(var(--z-table--cells-padding, calc(var(--space-unit) * 2)));background-color:var(--color-surface01);gap:calc(var(--space-unit) * 2) var(--space-unit)}:host,*{box-sizing:border-box}:host([sticky]){position:sticky;z-index:1;top:0;left:0;box-shadow:8px 0 16px -8px var(--shadow-color-base)}:host([menu-open]){z-index:2}.cell--content{display:flex;width:100%;height:100%;align-items:center}:host([show-menu]) .cell--content{column-gap:var(--space-unit)}.cell--menu-container{margin-left:auto}:host(:not([show-menu])) .cell--menu-container{opacity:0;pointer-events:none}:host(:is([show-menu],[menu-open])) .cell--menu-container,:host([show-menu]) .cell--menu-container:focus-within{z-index:1;opacity:1;pointer-events:all}:host .cell-popover{z-index:100}@media (min-width: 768px) and (hover: hover){:host([show-menu="hover"]) .cell--menu-container{opacity:0;pointer-events:none}:host([show-menu="hover"]:hover) .cell--menu-container{z-index:1;opacity:1;pointer-events:all}}`;r(class extends a{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.colspanChange=i(this,`colspanChange`,6),this.sticky=!1,this.showMenu=null,this.popoverPosition=l.AUTO,this.isMenuOpen=!1}updateColspan(){this.colspan?this.host.style.gridColumn=`span ${this.colspan}`:this.host.style.removeProperty(`grid-column`),this.colspanChange.emit(this.colspan||1)}onMenuButtonClick(e){e.stopPropagation(),this.popoverEl.open=!this.popoverEl.open}componentWillLoad(){this.updateColspan()}render(){return o(s,{key:`6d24e3bba2e5e0cd672f732854ae15eab994e083`,role:`cell`,"menu-open":this.isMenuOpen},o(`div`,{key:`9c47d4b8c8e502830c436dbb3d9050ad01841041`,class:`cell--content`},o(`slot`,{key:`0fe756db52413560179b6f7818251756652c9a47`}),this.showMenu&&o(`div`,{key:`6211146d94d1571b07f7ee7a062399627a731953`,class:`cell--menu-container prevent-expand`},o(`z-button`,{key:`dc99ff5c4987d6e7a5b943d44f31b3d485466592`,variant:d.TERTIARY,icon:`contextual-menu`,size:u.X_SMALL,ref:e=>this.menuTrigger=e,onClick:this.onMenuButtonClick.bind(this)}),o(`z-popover`,{key:`4b4a972f2bb6bbf91a2249799a9cb6e378071b56`,class:`cell-popover`,ref:e=>this.popoverEl=e,bindTo:this.menuTrigger,onOpenChange:e=>this.isMenuOpen=e.detail.open,position:this.popoverPosition},o(`slot`,{key:`ac027b9e25fe46ba8262deb57d7e8d98a1341ec7`,name:`contextual-menu`})))))}get host(){return this}static get watchers(){return{colspan:[{updateColspan:0}]}}static get style(){return C()}},[257,`z-td`,{colspan:[2],sticky:[516],showMenu:[520,`show-menu`],popoverPosition:[8,`popover-position`],isMenuOpen:[32]},void 0,{colspan:[{updateColspan:0}]}]);var w={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZTd`,tagName:`z-td`,customElement:!0,members:[{kind:`field`,name:`colspan`,type:`number`,description:`Number of columns that the cell should span.`},{kind:`field`,name:`sticky`,type:`boolean`,description:`Whether the cell should stick.`,default:`false`},{kind:`field`,name:`showMenu`,type:`any`,description:`Enables the contextual menu.
Can be set to "hover" or "always" to show the button only on cell hover or always.
Set a nullish value to hide the menu button.`,default:`null`},{kind:`field`,name:`popoverPosition`,type:`any`,description:`Set the popover position, the default is "auto".`,default:`PopoverPosition.AUTO`}],events:[{kind:`event`,name:`colspanChange`,description:"Emitted when the value of the `colspan` changes."}],slots:[{name:`-`,description:`ZTd content.`}]}],exports:[{kind:`js`,name:`ZTd`,declaration:{name:`ZTd`,module:`src/components/table/cells/z-td/index.tsx`}},{kind:`custom-element-definition`,name:`z-td`,declaration:{name:`ZTd`,module:`src/components/table/cells/z-td/index.tsx`}}]}]};t({...n()||{},...w,modules:[...(n()||{}).modules||[],...w.modules]});var T=()=>`:host{position:relative;display:flex;max-width:100%;align-items:center;padding:calc(var(--z-table--cells-padding, calc(var(--space-unit) * 2)));background-color:var(--color-surface01);gap:calc(var(--space-unit) * 2) var(--space-unit)}:host,*{box-sizing:border-box}:host([sticky]){position:sticky;z-index:1;top:0;left:0;box-shadow:8px 0 16px -8px var(--shadow-color-base)}:host([menu-open]){z-index:2}.cell--content{display:flex;width:100%;height:100%;align-items:center}:host([show-menu]) .cell--content{column-gap:var(--space-unit)}.cell--menu-container{margin-left:auto}:host(:not([show-menu])) .cell--menu-container{opacity:0;pointer-events:none}:host(:is([show-menu],[menu-open])) .cell--menu-container,:host([show-menu]) .cell--menu-container:focus-within{z-index:1;opacity:1;pointer-events:all}:host .cell-popover{z-index:100}@media (min-width: 768px) and (hover: hover){:host([show-menu="hover"]) .cell--menu-container{opacity:0;pointer-events:none}:host([show-menu="hover"]:hover) .cell--menu-container{z-index:1;opacity:1;pointer-events:all}}`,E=()=>`:host{z-index:1;padding:0;background-color:var(--color-background);font-weight:var(--font-sb)}.cell--content{padding:var(--z-table--cells-padding, calc(var(--space-unit) * 2))}:host([show-sorting]) .cell--content{column-gap:var(--space-unit)}.z-th--sort-button{position:relative;padding:0;border:none;background-color:transparent;cursor:pointer;outline:none}.z-th--sort-button:focus,.z-th--sort-button:focus-visible{box-shadow:var(--shadow-focus-primary);opacity:1;outline:none;pointer-events:all}@media (min-width: 768px) and (hover: hover){:host([show-sorting="hover"]) .z-th--sort-button{opacity:0;pointer-events:none}:host([show-sorting="hover"]:hover) .z-th--sort-button,:host([show-sorting="hover"]) .z-th--sort-button:focus:focus-visible,:host([show-sorting="always"]) .z-th--sort-button,:host([sorted]) .z-th--sort-button{opacity:1;pointer-events:all}}:host([show-sorting="hover"]:hover) .z-th--sort-button::after,:host([show-sorting="hover"]) .z-th--sort-button:focus:focus-visible::after,:host([show-sorting="always"]) .z-th--sort-button::after,:host([sorted]) .z-th--sort-button::after{position:absolute;top:6px;left:6px;width:calc(100% - 12px);height:calc(100% - 10px);background-color:transparent;content:""}`;r(class extends a{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.sort=i(this,`sort`,7),this.showMenu=null,this.showSorting=null,this.sticky=!1,this.sorted=!1,this.popoverPosition=l.AUTO,this.isMenuOpen=!1}get ariaSortDirection(){return this.sortDirection?this.sortDirection===f.ASC?`ascending`:`descending`:null}handleSort(){if(!this.sortDirection){this.sorted=!1;return}this.sortDirection=this.sortDirection===f.ASC?f.DESC:f.ASC,this.sorted=!0,this.sort.emit({sortDirection:this.sortDirection})}updateColspan(){this.colspan?this.host.style.gridColumn=`span ${this.colspan}`:this.host.style.removeProperty(`grid-column`)}componentWillLoad(){this.updateColspan()}render(){return o(s,{key:`4a6e6166cd1bf1be141f378c8da4cae5eaa05d24`,role:`columnheader`,"menu-open":this.isMenuOpen,"aria-sort":this.ariaSortDirection,sortable:this.showSorting},o(`div`,{key:`8bb1f21f07083b6ab673c25e34d32f37269d65d5`,class:`cell--content`},o(`slot`,{key:`816794b1740ae3780cff72f05ba7cdc705163a51`}),this.showSorting&&o(`button`,{key:`ef039299e093573261021ca7b4a0e474f896c697`,class:`z-th--sort-button`,type:`button`,onClick:this.handleSort.bind(this)},o(`z-icon`,{key:`fffaa484c1e1acfecf780668149058f859dd8f77`,name:this.sortDirection===f.DESC?`arrow-simple-up`:`arrow-simple-down`,width:14,height:14})),this.showMenu&&o(`div`,{key:`f075e1e6201ed573f52d74129231b0cc8bb6cd81`,class:`cell--menu-container`},o(`z-button`,{key:`1e8c89586411ed9551d1d390cd86be87a67540c0`,variant:d.TERTIARY,icon:`contextual-menu`,size:u.X_SMALL,ref:e=>this.menuTrigger=e,onClick:()=>this.popoverEl.open=!this.popoverEl.open}),o(`z-popover`,{key:`d5a56b6a91a3d6e98132ee0848a494e692306bda`,ref:e=>this.popoverEl=e,bindTo:this.menuTrigger,onOpenChange:e=>this.isMenuOpen=e.detail.open,position:this.popoverPosition},o(`slot`,{key:`23a51fb77f206d7eeb24bdb992dc05e38198a985`,name:`contextual-menu`})))))}get host(){return this}static get watchers(){return{colspan:[{updateColspan:0}]}}static get style(){return T()+E()}},[257,`z-th`,{colspan:[2],showMenu:[520,`show-menu`],showSorting:[520,`show-sorting`],sticky:[516],sortDirection:[1032,`sort-direction`],sorted:[1540],popoverPosition:[8,`popover-position`],isMenuOpen:[32]},void 0,{colspan:[{updateColspan:0}]}]);var D={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZTh`,tagName:`z-th`,customElement:!0,members:[{kind:`field`,name:`colspan`,type:`number`,description:`Number of columns that the cell should span.`},{kind:`field`,name:`showMenu`,type:`any`,description:`Enables the contextual menu.
Can be set to "hover" or "always" to show the button only on cell hover or always.
Set a nullish value to hide the menu button.`,default:`null`},{kind:`field`,name:`showSorting`,type:`any`,description:`Enables the sorting button.
Can be set to "hover" or "always" to show the button only on cell hover or always.
Set a nullish value to hide the sort button.`,default:`null`},{kind:`field`,name:`sticky`,type:`boolean`,description:`Whether the cell should stick.`,default:`false`},{kind:`field`,name:`sortDirection`,type:`any`,description:`Current sorting direction.`},{kind:`field`,name:`sorted`,type:`boolean`,description:`Sorted state of the column.`,default:`false`},{kind:`field`,name:`popoverPosition`,type:`any`,description:`Set popover position.`,default:`PopoverPosition.AUTO`}],events:[{kind:`event`,name:`sort`,description:"Sort event fired when the user clicks on the sort button.\nThe sorting logic must be implemented by the app.\nYou can set an `id` on the `z-th` to easly identify the column in the event listener."}],slots:[{name:`-`,description:`ZTh content.`},{name:`contextual-menu`,description:"Contextual menu content. Only visible when `showMenu` is true."}]}],exports:[{kind:`js`,name:`ZTh`,declaration:{name:`ZTh`,module:`src/components/table/cells/z-th/index.tsx`}},{kind:`custom-element-definition`,name:`z-th`,declaration:{name:`ZTh`,module:`src/components/table/cells/z-th/index.tsx`}}]}]};t({...n()||{},...D,modules:[...(n()||{}).modules||[],...D.modules]});var O=()=>`:host{position:relative;display:grid;width:100%;box-sizing:border-box;grid-auto-flow:column;grid-template-columns:var(--z-table--expand-button-size, 0) repeat(var(--columns), minmax(128px, 1fr));--columns:1}*{box-sizing:border-box}.z-tr--expand-button-container,::slotted(*){border-bottom:var(--z-table--cells-bottom-border-size, var(--border-size-small)) solid var(--color-surface03)}::slotted(*:not(:last-child)){border-right:var(--z-table--cell-left-border, none)}:host([expandable]){--show-expandable-button:visible;cursor:pointer}:host([expandable]) ::slotted(*){grid-row:1}:host([expandable]) ::slotted(:nth-last-child(2)){border-right:none}:host([expandable]) ::slotted(*:last-child){border-left:0;grid-column:1 / span calc(var(--columns) + 1);grid-row:2}:host([expandable]:not([expanded])) ::slotted(*:last-child){display:none}:host([expanded]){margin-bottom:4px;box-shadow:0 4px 4px -2px var(--shadow-color-base)}:host([expanded]) .z-tr--expand-button-container,:host([expanded]) ::slotted(*){background-color:var(--color-background)}:host(:hover) ::slotted(z-td),:host(:hover) ::slotted(z-th){border-top:var(--border-size-small) solid var(--color-surface04);border-bottom:var(--border-size-small) solid var(--color-surface04);background-color:var(--color-surface02)}:host(:focus){position:relative;z-index:20;box-shadow:var(--shadow-focus-primary);outline:none}.z-tr--expand-button-container{display:flex;align-items:center;justify-content:center;background-color:var(--z-table--cells-background, var(--color-surface01))}.z-tr--expand-button-container button{display:flex;align-items:center;justify-content:center;padding:0;border:none;margin:auto;appearance:none;background:transparent;cursor:pointer;visibility:var(--show-expandable-button, hidden)}.z-tr--expand-button-container button z-icon{--z-icon-width:16px;--z-icon-height:16px}.z-tr--focus-overlay{position:absolute;z-index:30;right:0;left:0;width:100%;border-radius:4px;box-shadow:none;inset:0;outline:none;pointer-events:none;transition:box-shadow 0.2s}:host(:focus) .z-tr--focus-overlay{box-shadow:0 0 0 2px var(--shadow-focus-primary),     var(--shadow-focus-primary);outline:none}:host(:focus) ::slotted(*){border-bottom:none}:host(:focus) .z-tr--expand-button-container{border-bottom:none}`;r(class extends a{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.expand=i(this,`expand`,7),this.expandable=!1,this.expanded=!1}updateColumns(){let e=Array.from(this.host.querySelectorAll(`z-td, z-th`));this.expandable&&e.pop();let t=e.map(e=>e.colspan||1).reduce((e,t)=>e+t,0);if(this.host.style.setProperty(`--columns`,`${t}`),this.expandable){let t=e.pop();t.id=t.id||`z-tr-expandable-content-${m()}`,this.expandableContentId=t.id}}onRowClick(e){let t=e.target.closest(`.prevent-expand`);!this.expandable||t||(this.expanded=!this.expanded,this.expand.emit({expanded:this.expanded}))}onKeyDown(e){this.expandable&&document.activeElement===this.host&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.expanded=!this.expanded,this.expand.emit({expanded:this.expanded}))}componentWillLoad(){this.updateColumns()}render(){return o(s,{key:`126852ffdea32b1ffa7a290ad1280d200f6593bb`,role:`row`,tabIndex:0,expanded:this.expanded,onClick:this.onRowClick.bind(this),onKeyDown:this.onKeyDown.bind(this)},o(`div`,{key:`6f82bfcfc25553d9ff258b653c6aab611e17ef17`,class:`z-tr--focus-overlay`,"aria-hidden":`true`}),o(`div`,{key:`b9256e32a247ae432a18623d82ce1b904bbceaf9`,class:`z-tr--expand-button-container`},this.expandable&&o(`button`,{key:`a88335e7c9b1cd829b4039300950abbe3737aee4`,tabIndex:-1,"aria-expanded":this.expanded?`true`:`false`,"aria-label":this.expanded?`Comprimi riga`:`Espandi riga`,"aria-controls":this.expandableContentId,type:`button`},o(`z-icon`,{key:`caaa62aa4d76b5bff4e1d8d28df60998044dbac0`,name:this.expanded?`minus-circled`:`plus-circled`}))),o(`slot`,{key:`c4ebeff95b2f1c3ef745d1edf994fc3415509a58`,onSlotchange:this.updateColumns.bind(this)}))}get host(){return this}static get watchers(){return{expandable:[{updateColumns:0}]}}static get style(){return O()}},[257,`z-tr`,{expandable:[516],expanded:[32],expandableContentId:[32]},[[0,`colspanchange`,`updateColumns`]],{expandable:[{updateColumns:0}]}]);var k={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZTr`,tagName:`z-tr`,customElement:!0,members:[{kind:`field`,name:`expandable`,type:`boolean`,description:`Whether the row is expandable.
Use a \`z-td\` as the last cell of the row for the additional content.
It will show a button to expand/collapse the row.
The last cell will be hidden until the button or row is clicked.

If some element inside the expandable row contains the \`prevent-expand\` css class,
the row will not expand by clicking that element.`,default:`false`}],events:[{kind:`event`,name:`expand`,description:`Row has been expanded`}],slots:[{name:`-`,description:"ZTr content (`z-td` or `z-th`)."}]}],exports:[{kind:`js`,name:`ZTr`,declaration:{name:`ZTr`,module:`src/components/table/z-tr/index.tsx`}},{kind:`custom-element-definition`,name:`z-tr`,declaration:{name:`ZTr`,module:`src/components/table/z-tr/index.tsx`}}]}]};t({...n()||{},...k,modules:[...(n()||{}).modules||[],...k.modules]});var A=()=>`:host{--z-table--cells-padding:calc(var(--space-unit) * 2);position:relative;display:block;overflow:auto;min-width:max-content;max-width:100%;box-sizing:border-box;padding:var(--space-unit);background-color:var(--color-surface01)}:host([expandable]){--z-table--expand-button-size:40px}:host([bordered]){--z-table--cell-left-border:1px solid var(--color-surface03)}`;r(class extends a{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.bordered=!1,this.expandable=!1}updateExpandable(){this.expandable=this.host.querySelectorAll(`z-tr[expandable]`).length>0}componentWillLoad(){this.expandableMutationObserver=new MutationObserver(()=>{this.updateExpandable()}),this.expandableMutationObserver.observe(this.host,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`expandable`],attributeOldValue:!1})}disconnectedCallback(){var e;(e=this.expandableMutationObserver)==null||e.disconnect()}render(){return o(s,{key:`41bcfe3bb2d979e5854a125f2d0d7ecf3daae0c5`,expandable:this.expandable},o(`div`,{key:`31f70306530a9c1346923b23b226886c6ba0db4a`,class:`table`,role:`table`},o(`slot`,{key:`bb6a50cc89e917ca5c859390ffed49d92b737681`})))}get host(){return this}static get style(){return A()}},[257,`z-table`,{bordered:[516],expandable:[32]}]);var j={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZTable`,tagName:`z-table`,customElement:!0,members:[{kind:`field`,name:`bordered`,type:`boolean`,description:`Whether the table cells should show a border between them.`,default:`false`}],events:[],cssProperties:[{name:`--z-table--cells-padding`,description:`Padding of the cells.`}],slots:[{name:`-`,description:"Table content (`z-thead`, `z-tbody`, `z-tfoot`, `z-tr`)."}]}],exports:[{kind:`js`,name:`ZTable`,declaration:{name:`ZTable`,module:`src/components/table/z-table/index.tsx`}},{kind:`custom-element-definition`,name:`z-table`,declaration:{name:`ZTable`,module:`src/components/table/z-table/index.tsx`}}]}]};t({...n()||{},...j,modules:[...(n()||{}).modules||[],...j.modules]});var M={title:`ZTable`,component:`z-table`,args:{bordered:!0,"--z-table--cells-padding":`16px`},parameters:{docs:{description:{component:"## Accessibility\n\nThe `ZTable` and its related components comes with a set of roles and ARIA attributes to help screen readers to understand the table structure and its content.\nThe roles are mainly used to identify the table parts, since they are not the native HTML table elements.\nThe ARIA attributes used are the following:\n- [`aria-sort`](https://www.w3.org/TR/wai-aria-1.1/#aria-sort) to identify the sorting direction of a column when sorting is enabled\n- [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded) to identify if a row is expanded or not when expandable rows are enabled. The attribute is set on the button that expands the row, as explained in the [docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)\n- [`aria-controls`](https://www.w3.org/TR/wai-aria-1.1/#aria-controls) is used on the expandable row button to identify the content that is controlled by the button itself, as explained in the [docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls). Maybe the `aria-owns` attribute were more appropriate, but it is not supported on MacOS and iOS with VoiceOver, so we used `aria-controls` instead.\n- [`aria-label`](https://www.w3.org/TR/wai-aria-1.1/#aria-label) is used on the expandable row button to provide a label for the button, since the button doesn't have any text content."}}}},N=(t=1)=>e`${g([...Array(t)],()=>e`<z-td>Contenuto cella</z-td>`)}`,P={render:t=>e`<z-table
      class="z-table-demo"
      .bordered=${t.bordered}
      style=${p({"--z-table--cells-padding":t[`--z-table--cells-padding`]})}
    >
      <z-thead>
        <z-tr>${g([...Array(8)],()=>e`<z-th>Titolo colonna</z-th>`)}</z-tr>
      </z-thead>
      <z-tbody>${g([...[,,,,,]],()=>e`<z-tr>${N(8)}</z-tr>`)}</z-tbody>
      <z-tfoot>
        <z-tr>
          <z-td colspan="8">Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>`},F={render:t=>e`<z-table
      class="z-table-demo"
      .bordered=${t.bordered}
      style=${p({"--z-table--cells-padding":t[`--z-table--cells-padding`]})}
    >
      <z-thead>
        <z-tr>${g([...Array(8)],(t,n)=>e`<z-th>Colonna ${n+1}</z-th>`)}</z-tr>
      </z-thead>
      <z-tbody>
        <z-tr>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td show-menu>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div></z-td
          >
          ${N(5)}
        </z-tr>
        <z-tr>${g([...Array(8)],()=>e`<z-td>Contenuto cella</z-td>`)}</z-tr>
        <z-tr expandable>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>
            <span>Contenuto cella</span>
            <z-button
              class="prevent-expand"
              onclick="alert('button clicked without expanding the row')"
              icon="plus"
              size="x-small"
            ></z-button
          ></z-td>
          ${N(5)}
          <z-td>Contenuto espanso</z-td>
        </z-tr>
        <z-tr>${N(8)}</z-tr>
        <z-tr expandable>
          <z-td>Contenuto cella</z-td>
          <z-td show-menu="always">
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div></z-td
          >
          ${N(6)}
          <z-td>Contenuto espanso</z-td>
        </z-tr>
      </z-tbody>
      <z-tfoot>
        <z-tr>
          <z-td colspan="8">Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>`},I={args:{stickyHeader:!0,stickyFooter:!0,stickFirstColumn:!0},render:t=>e`<z-table
      class="z-table-demo"
      .bordered=${t.bordered}
      style=${p({"--z-table--cells-padding":t[`--z-table--cells-padding`],height:`400px`})}
    >
      <z-thead .sticky=${t.stickyHeader}>
        <z-tr>
          <z-th .sticky=${t.stickFirstColumn}>Colonna 1</z-th>
          ${g([...Array(7)],(t,n)=>e`<z-th>Colonna ${n+2}</z-th>`)}
        </z-tr>
      </z-thead>
      <z-tbody>
        <z-tr>
          <z-td .sticky=${t.stickFirstColumn}>Contenuto cella 1</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td show-menu>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div></z-td
          >
          ${N(4)}
        </z-tr>
        ${g([...[,,,,,]],()=>e`<z-tr>
              <z-td .sticky=${t.stickFirstColumn}>Contenuto cella 1</z-td>
              ${N(7)}
            </z-tr>`)}
        <z-tr expandable>
          <z-td .sticky=${t.stickFirstColumn}>Contenuto cella 1</z-td>
          ${N(6)}
          <z-td>
            <span>Contenuto cella</span>
            <z-button
              class="prevent-expand"
              onclick="alert('button clicked')"
              icon="plus"
              size="x-small"
            ></z-button
          ></z-td>
          <z-td>Contenuto espanso</z-td>
        </z-tr>
        <z-tr expandable>
          <z-td .sticky=${t.stickFirstColumn}>Contenuto cella 1</z-td>
          ${N(7)}
          <z-td>Contenuto espanso</z-td>
        </z-tr>
      </z-tbody>
      <z-tfoot .sticky=${t.stickyFooter}>
        <z-tr>
          <z-td colspan="8">Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>`},L={argTypes:{isFocusable:h,showMenu:{control:{type:`inline-radio`,labels:{null:`hidden`}},popoverPosition:{options:Object.values(l),control:{type:`select`}},options:[null,...Object.values(c)]}},args:{isFocusable:!0,showMenu:c.HOVER,popoverPosition:l.AUTO},render:t=>e`<z-table
      class="z-table-demo"
      .bordered=${t.bordered}
      style=${p({"--z-table--cells-padding":t[`--z-table--cells-padding`]})}
    >
      <z-thead .isFocusable=${t.isFocusable}>
        <z-tr>
          <z-th>Colonna 1</z-th>
          <z-th
            .showMenu=${t.showMenu}
            .popoverPosition=${t.popoverPosition}
          >
            Heading con menu
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-th>
          <z-th>Colonna 2</z-th>
        </z-tr>
      </z-thead>
      <z-tbody>
        ${g([...[,,,]],()=>e`<z-tr>
              <z-td .showMenu=${t.showMenu}>
                <span>Contenuto cella con menu</span>
                <div slot="contextual-menu">Contenuto del popover</div>
              </z-td>
              <z-td>Contenuto cella</z-td>
              <z-td .showMenu=${t.showMenu}>
                <span>Contenuto cella con menu</span>
                <div slot="contextual-menu">Contenuto del popover</div>
              </z-td>
            </z-tr>`)}
      </z-tbody>
    </z-table>`},R={argTypes:{isFocusable:h,showSorting:{options:Object.values(c),control:{type:`inline-radio`}}},args:{isFocusable:!0,showSorting:c.HOVER},render:t=>e`<z-table
      class="z-table-demo"
      .bordered=${t.bordered}
      style=${p({"--z-table--cells-padding":t[`--z-table--cells-padding`]})}
    >
      <z-thead .isFocusable=${t.isFocusable}>
        <z-tr>
          <z-th
            .sortDirection=${f.ASC}
            .showMenu=${c.HOVER}
            .showSorting=${t.showSorting}
          >
            Colonna 1 con menu e sorting
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-th>
          <z-th>Colonna 2</z-th>
          <z-th
            .sortDirection=${f.DESC}
            .showSorting=${t.showSorting}
            >Colonna 3 con sorting</z-th
          >
        </z-tr>
      </z-thead>
      <z-tbody>${g([...[,,,]],()=>e`<z-tr>${N(3)}</z-tr>`)}</z-tbody>
    </z-table>`};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => html\`<z-table
      class="z-table-demo"
      .bordered=\${args.bordered}
      style=\${styleMap({
    "--z-table--cells-padding": args["--z-table--cells-padding"]
  })}
    >
      <z-thead>
        <z-tr>\${repeat([...new Array(8)], () => html\`<z-th>Titolo colonna</z-th>\`)}</z-tr>
      </z-thead>
      <z-tbody>\${repeat([...new Array(5)], () => html\`<z-tr>\${cellsTemplate(8)}</z-tr>\`)}</z-tbody>
      <z-tfoot>
        <z-tr>
          <z-td colspan="8">Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>\`
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => html\`<z-table
      class="z-table-demo"
      .bordered=\${args.bordered}
      style=\${styleMap({
    "--z-table--cells-padding": args["--z-table--cells-padding"]
  })}
    >
      <z-thead>
        <z-tr>\${repeat([...new Array(8)], (_, index) => html\`<z-th>Colonna \${index + 1}</z-th>\`)}</z-tr>
      </z-thead>
      <z-tbody>
        <z-tr>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td show-menu>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div></z-td
          >
          \${cellsTemplate(5)}
        </z-tr>
        <z-tr>\${repeat([...new Array(8)], () => html\`<z-td>Contenuto cella</z-td>\`)}</z-tr>
        <z-tr expandable>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>
            <span>Contenuto cella</span>
            <z-button
              class="prevent-expand"
              onclick="alert('button clicked without expanding the row')"
              icon="plus"
              size="x-small"
            ></z-button
          ></z-td>
          \${cellsTemplate(5)}
          <z-td>Contenuto espanso</z-td>
        </z-tr>
        <z-tr>\${cellsTemplate(8)}</z-tr>
        <z-tr expandable>
          <z-td>Contenuto cella</z-td>
          <z-td show-menu="always">
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div></z-td
          >
          \${cellsTemplate(6)}
          <z-td>Contenuto espanso</z-td>
        </z-tr>
      </z-tbody>
      <z-tfoot>
        <z-tr>
          <z-td colspan="8">Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>\`
}`,...F.parameters?.docs?.source},description:{story:'Just set `expandable` prop on the `z-tr` element to make it expandable, then put an additional `z-td` as extended content.\nIf you put a clickable item as a child cell of a z-tr with `expandable` set to `true`, you need to set a "prevent-expand" class on that item, in order to prevent unwanted row expansions.',...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    stickyHeader: true,
    stickyFooter: true,
    stickFirstColumn: true
  },
  render: args => html\`<z-table
      class="z-table-demo"
      .bordered=\${args.bordered}
      style=\${styleMap({
    "--z-table--cells-padding": args["--z-table--cells-padding"],
    "height": "400px"
  })}
    >
      <z-thead .sticky=\${args.stickyHeader}>
        <z-tr>
          <z-th .sticky=\${args.stickFirstColumn}>Colonna 1</z-th>
          \${repeat([...new Array(7)], (_, index) => html\`<z-th>Colonna \${index + 2}</z-th>\`)}
        </z-tr>
      </z-thead>
      <z-tbody>
        <z-tr>
          <z-td .sticky=\${args.stickFirstColumn}>Contenuto cella 1</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td show-menu>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div></z-td
          >
          \${cellsTemplate(4)}
        </z-tr>
        \${repeat([...new Array(5)], () => html\`<z-tr>
              <z-td .sticky=\${args.stickFirstColumn}>Contenuto cella 1</z-td>
              \${cellsTemplate(7)}
            </z-tr>\`)}
        <z-tr expandable>
          <z-td .sticky=\${args.stickFirstColumn}>Contenuto cella 1</z-td>
          \${cellsTemplate(6)}
          <z-td>
            <span>Contenuto cella</span>
            <z-button
              class="prevent-expand"
              onclick="alert('button clicked')"
              icon="plus"
              size="x-small"
            ></z-button
          ></z-td>
          <z-td>Contenuto espanso</z-td>
        </z-tr>
        <z-tr expandable>
          <z-td .sticky=\${args.stickFirstColumn}>Contenuto cella 1</z-td>
          \${cellsTemplate(7)}
          <z-td>Contenuto espanso</z-td>
        </z-tr>
      </z-tbody>
      <z-tfoot .sticky=\${args.stickyFooter}>
        <z-tr>
          <z-td colspan="8">Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>\`
}`,...I.parameters?.docs?.source},description:{story:"To make a column sticky, you need to set the `sticky` prop on the `z-th` and/or `z-td` elements of the same column.\nFor the header or footer, just set the `sticky` prop on the `z-thead` or `z-tfoot` element.",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
  render: args => html\`<z-table
      class="z-table-demo"
      .bordered=\${args.bordered}
      style=\${styleMap({
    "--z-table--cells-padding": args["--z-table--cells-padding"]
  })}
    >
      <z-thead .isFocusable=\${args.isFocusable}>
        <z-tr>
          <z-th>Colonna 1</z-th>
          <z-th
            .showMenu=\${args.showMenu}
            .popoverPosition=\${args.popoverPosition}
          >
            Heading con menu
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-th>
          <z-th>Colonna 2</z-th>
        </z-tr>
      </z-thead>
      <z-tbody>
        \${repeat([...new Array(3)], () => html\`<z-tr>
              <z-td .showMenu=\${args.showMenu}>
                <span>Contenuto cella con menu</span>
                <div slot="contextual-menu">Contenuto del popover</div>
              </z-td>
              <z-td>Contenuto cella</z-td>
              <z-td .showMenu=\${args.showMenu}>
                <span>Contenuto cella con menu</span>
                <div slot="contextual-menu">Contenuto del popover</div>
              </z-td>
            </z-tr>\`)}
      </z-tbody>
    </z-table>\`
}`,...L.parameters?.docs?.source},description:{story:"Use the `showMenu` prop on `z-td` or `z-th`, setting a value of the enum `VisibilityCondition` (`HOVER` or `ALWAYS`), to show a contextual menu button on the cell. The content of the menu must be placed using the slot `contextual-menu`.\nUse `popoverPosition` prop on `z-th` to set the position of contextual menu, default is `auto`.",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  argTypes: {
    isFocusable: boolean,
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
  render: args => html\`<z-table
      class="z-table-demo"
      .bordered=\${args.bordered}
      style=\${styleMap({
    "--z-table--cells-padding": args["--z-table--cells-padding"]
  })}
    >
      <z-thead .isFocusable=\${args.isFocusable}>
        <z-tr>
          <z-th
            .sortDirection=\${SortDirection.ASC}
            .showMenu=\${VisibilityCondition.HOVER}
            .showSorting=\${args.showSorting}
          >
            Colonna 1 con menu e sorting
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-th>
          <z-th>Colonna 2</z-th>
          <z-th
            .sortDirection=\${SortDirection.DESC}
            .showSorting=\${args.showSorting}
            >Colonna 3 con sorting</z-th
          >
        </z-tr>
      </z-thead>
      <z-tbody>\${repeat([...new Array(3)], () => html\`<z-tr>\${cellsTemplate(3)}</z-tr>\`)}</z-tbody>
    </z-table>\`
}`,...R.parameters?.docs?.source},description:{story:"Set the `sortDirection` prop to `SortDirection.ASC` or `SortDirection.DESC` to enable sorting and show the sort button.\nClicking the button will fire the `sort` event with the `sortDirection` as detail.",...R.parameters?.docs?.description}}};var z=[`Default`,`ExpandableRows`,`Sticky`,`CellsWithContextualMenu`,`SortAction`];export{L as CellsWithContextualMenu,P as Default,F as ExpandableRows,R as SortAction,I as Sticky,z as __namedExportsOrder,M as default};
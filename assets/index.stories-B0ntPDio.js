import{x as n}from"./lit-element-DGXdXVoE.js";import{c as r}from"./repeat-Dpe--lyG.js";import{o as y}from"./style-map-DWZVjDvr.js";import{B as K,C as Q,P as f,W as l,X as v}from"./index-CcuDdGyi.js";import"./index-yOVBEWgS.js";import{s as i,g as o}from"./chunk-GKNNPQCW-BkHQSocK.js";import{d,H as c,h as t,a as p,c as g}from"./index-8h8udRzn.js";import"./index-BEj-2O7q.js";import{r as ne}from"./utils-B_2tKo6T.js";import"./index-DUF5HaUD.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-Dk0454Fy.js";import"./breakpoints-C5kxgyOu.js";const oe=":host{display:block;box-sizing:border-box}",ae=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow()}render(){return t(p,{key:"c138519336ba957d57e53f00c30c58ebdeba4d7b",role:"rowgroup"},t("slot",{key:"519a2bab70138ee028a26514cb335bdf38363e65"}))}static get style(){return oe}};d(ae,[1,"z-tbody"]);const w={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZTbody",tagName:"z-tbody",customElement:!0,members:[],events:[],slots:[{name:"-",description:"ZTbody content (`z-tr`)."}]}],exports:[{kind:"js",name:"ZTbody",declaration:{name:"ZTbody",module:"src/components/table/z-tbody/index.tsx"}},{kind:"custom-element-definition",name:"z-tbody",declaration:{name:"ZTbody",module:"src/components/table/z-tbody/index.tsx"}}]}]};i({...o()||{},...w,modules:[...(o()||{}).modules||[],...w.modules]});const se=":host{display:block;box-sizing:border-box;border-top:1px solid var(--color-surface03);border-bottom:1px solid var(--color-surface03)}:host([sticky]){position:sticky;z-index:1;bottom:0;background-color:var(--color-surface01)}",re=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.sticky=!1}render(){return t(p,{key:"fbdd02d3292ae50f3b65291d2622eee17e30b016",role:"rowgroup"},t("slot",{key:"b1219edaee3039aad36710b36165928a7d6aca37"}))}static get style(){return se}};d(re,[1,"z-tfoot",{sticky:[516]}]);const k={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZTfoot",tagName:"z-tfoot",customElement:!0,members:[{kind:"field",name:"sticky",type:"boolean",description:"If true, the footer will be stuck to the bottom of the table.",default:"false"}],events:[],slots:[{name:"-",description:"ZTFoot content (`z-tr`)."}]}],exports:[{kind:"js",name:"ZTfoot",declaration:{name:"ZTfoot",module:"src/components/table/z-tfoot/index.tsx"}},{kind:"custom-element-definition",name:"z-tfoot",declaration:{name:"ZTfoot",module:"src/components/table/z-tfoot/index.tsx"}}]}]};i({...o()||{},...k,modules:[...(o()||{}).modules||[],...k.modules]});const le=`:host{--z-table--cells-bottom-border-size:var(
    --border-size-medium
  );--z-table--cells-background:var(
    --color-surface02
  );display:block;box-sizing:border-box}:host([sticky]){position:sticky;z-index:2;top:0;box-shadow:0 2px 4px -2px var(--shadow-color-base)}`,ie=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.sticky=!1}render(){return t(p,{key:"e305801166cd6238d00aa65f918a143f706af9cb",role:"rowgroup"},t("slot",{key:"230604c98db7fbd1ef57821a667487527f9bb9ca"}))}static get style(){return le}};d(ie,[1,"z-thead",{sticky:[516]}]);const C={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZThead",tagName:"z-thead",customElement:!0,members:[{kind:"field",name:"sticky",type:"boolean",description:"If true, the header will be stuck to the top of the table.",default:"false"}],events:[],slots:[{name:"-",description:"ZThead content (`z-tr`)."}]}],exports:[{kind:"js",name:"ZThead",declaration:{name:"ZThead",module:"src/components/table/z-thead/index.tsx"}},{kind:"custom-element-definition",name:"z-thead",declaration:{name:"ZThead",module:"src/components/table/z-thead/index.tsx"}}]}]};i({...o()||{},...C,modules:[...(o()||{}).modules||[],...C.modules]});const ee=':host{position:relative;display:flex;min-width:128px;box-sizing:border-box;align-items:center;padding:var(--z-table--cells-padding, calc(var(--space-unit) * 2));background-color:var(--color-surface01);gap:calc(var(--space-unit) * 2) var(--space-unit)}:host([sticky]){position:sticky;z-index:1;top:0;left:0;box-shadow:8px 0 16px -8px var(--shadow-color-base)}:host([show-menu]):after{display:inline-block;height:100%;margin-right:calc(var(--space-unit) * 4);background:transparent;content:"";-webkit-user-select:none;user-select:none}.cell--menu-container{position:absolute;z-index:1;top:var(--space-unit);right:var(--space-unit)}:host(:not([show-menu])) .cell--menu-container{opacity:0;pointer-events:none}:host(:is([show-menu],[menu-open])) .cell--menu-container,:host([show-menu]) .cell--menu-container:focus-within{opacity:1;pointer-events:all}@media (min-width: 768px) and (hover: hover){:host([show-menu="hover"]) .cell--menu-container{opacity:0;pointer-events:none}:host([show-menu="hover"]:hover) .cell--menu-container{opacity:1;pointer-events:all}}',de=ee+"",ce=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.colspanChange=g(this,"colspanChange",6),this.colspan=void 0,this.sticky=!1,this.showMenu=null,this.isMenuOpen=!1}updateColspan(){this.colspan?this.host.style.gridColumn=`span ${this.colspan}`:this.host.style.removeProperty("grid-column"),this.colspanChange.emit(this.colspan||1)}onMenuButtonClick(e){e.stopPropagation(),this.popoverEl.open=!this.popoverEl.open}componentWillLoad(){this.updateColspan()}render(){return t(p,{key:"55017ff3ea06f28e8db0dc7cb792a1a4c9594296",role:"cell","menu-open":this.isMenuOpen},t("slot",{key:"b2c2b5ff324fa4cd4ed7d3cb6a766fc26b23f41f"}),this.showMenu&&t("div",{key:"3a740e984f9579e41ad2307ea22e360dcd8807b3",class:"cell--menu-container prevent-expand"},t("z-button",{key:"4e83518266163198b81a2a37385bc0197f46880b",variant:K.TERTIARY,icon:"contextual-menu",size:Q.X_SMALL,ref:e=>this.menuTrigger=e,onClick:this.onMenuButtonClick.bind(this)}),t("z-popover",{key:"889c7429d6eb4c9f847322de9279d2db656a578f",ref:e=>this.popoverEl=e,bindTo:this.menuTrigger,onOpenChange:e=>this.isMenuOpen=e.detail.open},t("slot",{key:"a323834798b68d038b0338b738362ad28b0bc3d4",name:"contextual-menu"}))))}get host(){return this}static get watchers(){return{colspan:["updateColspan"]}}static get style(){return de}};d(ce,[1,"z-td",{colspan:[2],sticky:[516],showMenu:[520,"show-menu"],isMenuOpen:[32]},void 0,{colspan:["updateColspan"]}]);const $={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZTd",tagName:"z-td",customElement:!0,members:[{kind:"field",name:"colspan",type:"number",description:"Number of columns that the cell should span."},{kind:"field",name:"sticky",type:"boolean",description:"Whether the cell should stick.",default:"false"},{kind:"field",name:"showMenu",type:"any",description:`Enables the contextual menu.
Can be set to "hover" or "always" to show the button only on cell hover or always.
Set a nullish value to hide the menu button.`,default:"null"}],events:[{kind:"event",name:"colspanChange",description:"Emitted when the value of the `colspan` changes."}],slots:[{name:"-",description:"ZTd content."}]}],exports:[{kind:"js",name:"ZTd",declaration:{name:"ZTd",module:"src/components/table/cells/z-td/index.tsx"}},{kind:"custom-element-definition",name:"z-td",declaration:{name:"ZTd",module:"src/components/table/cells/z-td/index.tsx"}}]}]};i({...o()||{},...$,modules:[...(o()||{}).modules||[],...$.modules]});const pe=ee+":host{background-color:var(--color-surface02);font-weight:var(--font-sb)}:host([sortable]){cursor:pointer}.z-th--sort-button{display:flex;align-items:center;justify-content:center;padding:0;border:none;margin-top:auto;background-color:transparent;cursor:pointer}.z-th--sort-button:focus{box-shadow:var(--shadow-focus-primary);outline:none}",ue=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.sort=g(this,"sort",7),this.colspan=void 0,this.showMenu=null,this.sticky=!1,this.sortDirection=void 0,this.popoverPosition=f.AUTO,this.isMenuOpen=!1}get ariaSortDirection(){return this.sortDirection?this.sortDirection===l.ASC?"ascending":"descending":null}handleSort(){this.sortDirection&&(this.sortDirection=this.sortDirection===l.ASC?l.DESC:l.ASC,this.sort.emit({sortDirection:this.sortDirection}))}updateColspan(){this.colspan?this.host.style.gridColumn=`span ${this.colspan}`:this.host.style.removeProperty("grid-column")}componentWillLoad(){this.updateColspan()}render(){return t(p,{key:"6d4cff2ac3d0a36092604854b38a9de319dd50f5",role:"columnheader","menu-open":this.isMenuOpen,"aria-sort":this.ariaSortDirection},t("slot",{key:"f42bac673385d66600b45b936f82556c92187be5"}),this.sortDirection&&t("button",{key:"859606b2f1d22ec31e50d4c3c7faa75beeb88d4a",class:"z-th--sort-button",type:"button",onClick:this.handleSort.bind(this)},t("z-icon",{key:"f46ec18a664355b80783e65c12eb5aedd1ea57ea",name:this.sortDirection===l.ASC?"arrow-simple-up":"arrow-simple-down",width:14,height:14})),this.showMenu&&t("div",{key:"73a20f7c0c7eccbf39f01c46a6827367e2f25a61",class:"cell--menu-container"},t("z-button",{key:"125124b0dab34bf4f2a2a2d5bda7c52edb02a8cb",variant:K.TERTIARY,icon:"contextual-menu",size:Q.X_SMALL,ref:e=>this.menuTrigger=e,onClick:()=>this.popoverEl.open=!this.popoverEl.open}),t("z-popover",{key:"222ff2e899409e0bb93347a90fa5be578d07be48",ref:e=>this.popoverEl=e,bindTo:this.menuTrigger,onOpenChange:e=>this.isMenuOpen=e.detail.open,position:this.popoverPosition},t("slot",{key:"16c8fa785d3d686dfcecbb60bd182dd9991b7233",name:"contextual-menu"}))))}get host(){return this}static get watchers(){return{colspan:["updateColspan"]}}static get style(){return pe}};d(ue,[1,"z-th",{colspan:[2],showMenu:[520,"show-menu"],sticky:[516],sortDirection:[1032,"sort-direction"],popoverPosition:[8,"popover-position"],isMenuOpen:[32]},void 0,{colspan:["updateColspan"]}]);const T={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZTh",tagName:"z-th",customElement:!0,members:[{kind:"field",name:"colspan",type:"number",description:"Number of columns that the cell should span."},{kind:"field",name:"showMenu",type:"any",description:`Enables the contextual menu.
Can be set to "hover" or "always" to show the button only on cell hover or always.
Set a nullish value to hide the menu button.`,default:"null"},{kind:"field",name:"sticky",type:"boolean",description:"Whether the cell should stick.",default:"false"},{kind:"field",name:"sortDirection",type:"any",description:"Current sorting direction.\nSet `SortDirection.ASC` or `SortDirection.DESC` to show the sort icon."},{kind:"field",name:"popoverPosition",type:"any",description:"Set popover position.",default:"PopoverPosition.AUTO"}],events:[{kind:"event",name:"sort",description:"Sort event fired when the user clicks on the sort button.\nThe sorting logic must be implemented by the app.\nYou can set an `id` on the `z-th` to easly identify the column in the event listener."}],slots:[{name:"-",description:"ZTh content."},{name:"contextual-menu",description:"Contextual menu content. Only visible when `showMenu` is true."}]}],exports:[{kind:"js",name:"ZTh",declaration:{name:"ZTh",module:"src/components/table/cells/z-th/index.tsx"}},{kind:"custom-element-definition",name:"z-th",declaration:{name:"ZTh",module:"src/components/table/cells/z-th/index.tsx"}}]}]};i({...o()||{},...T,modules:[...(o()||{}).modules||[],...T.modules]});const he=":host{--columns:1;display:grid;min-width:max-content;box-sizing:border-box;grid-auto-flow:column;grid-template-columns:var(--z-table--expand-button-size, 0) repeat(var(--columns), minmax(128px, 1fr))}*{box-sizing:border-box}.z-tr--expand-button-container,::slotted(*){border-bottom:var(--z-table--cells-bottom-border-size, var(--border-size-small)) solid var(--color-surface03)}::slotted(*:not(:last-child)){border-right:var(--z-table--cell-left-border, none)}:host([expandable]){--show-expandable-button:visible;cursor:pointer}:host([expandable]) ::slotted(*){grid-row:1}:host([expandable]) ::slotted(:nth-last-child(2)){border-right:none}:host([expandable]) ::slotted(*:last-child){border-left:0;grid-column:1 / span calc(var(--columns) + 1);grid-row:2}:host([expandable]:not([expanded])) ::slotted(*:last-child){display:none}:host([expanded]){margin-bottom:4px;box-shadow:0 4px 4px -2px var(--shadow-color-base)}:host([expanded]) .z-tr--expand-button-container,:host([expanded]) ::slotted(*){background-color:var(--color-surface02)}.z-tr--expand-button-container{display:flex;align-items:center;justify-content:center;background-color:var(--z-table--cells-background, var(--color-surface01))}.z-tr--expand-button-container button{display:flex;align-items:center;justify-content:center;padding:0;border:none;margin:auto;appearance:none;background:transparent;cursor:pointer;visibility:var(--show-expandable-button, hidden)}.z-tr--expand-button-container button:focus{box-shadow:var(--shadow-focus-primary);outline:none}.z-tr--expand-button-container button z-icon{--z-icon-width:16px;--z-icon-height:16px}",be=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.expand=g(this,"expand",7),this.expandable=!1,this.expanded=!1,this.expandableContentId=void 0}updateColumns(){const e=Array.from(this.host.querySelectorAll("z-td, z-th"));this.expandable&&e.pop();const u=e.map(a=>a.colspan||1).reduce((a,te)=>a+te,0);if(this.host.style.setProperty("--columns",`${u}`),this.expandable){const a=e.pop();a.id=a.id||`z-tr-expandable-content-${ne()}`,this.expandableContentId=a.id}}onRowClick(e){const u=e.target.closest(".prevent-expand");!this.expandable||u||(this.expanded=!this.expanded,this.expand.emit({expanded:this.expanded}))}componentWillLoad(){this.updateColumns()}render(){return t(p,{key:"391cfdc94935bca8d72f6945ec3ef1cb1ced59b6",role:"row",onClick:this.onRowClick.bind(this),expanded:this.expanded},t("div",{key:"0587e1fc3ed247ab80085b897e98269c69f1d646",class:"z-tr--expand-button-container"},this.expandable&&t("button",{key:"ed513d864f315227fb15077ce1ef2b52e4721a5b","aria-expanded":this.expanded?"true":"false","aria-label":this.expanded?"Comprimi riga":"Espandi riga","aria-controls":this.expandableContentId,type:"button"},t("z-icon",{key:"f17d2e66462c75c6096774d0ed10dded8e8afcc4",name:this.expanded?"minus-circled":"plus-circled"}))),t("slot",{key:"dd48a1a44179a4274c0b6b43b78c05ebdb5da1a8",onSlotchange:this.updateColumns.bind(this)}))}get host(){return this}static get watchers(){return{expandable:["updateColumns"]}}static get style(){return he}};d(be,[1,"z-tr",{expandable:[516],expanded:[32],expandableContentId:[32]},[[0,"colspanchange","updateColumns"]],{expandable:["updateColumns"]}]);const M={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZTr",tagName:"z-tr",customElement:!0,members:[{kind:"field",name:"expandable",type:"boolean",description:`Whether the row is expandable.
Use a \`z-td\` as the last cell of the row for the additional content.
It will show a button to expand/collapse the row.
The last cell will be hidden until the button or row is clicked.

If some element inside the expandable row contains the \`prevent-expand\` css class,
the row will not expand by clicking that element.`,default:"false"}],events:[{kind:"event",name:"expand",description:"Row has been expanded"}],slots:[{name:"-",description:"ZTr content (`z-td` or `z-th`)."}]}],exports:[{kind:"js",name:"ZTr",declaration:{name:"ZTr",module:"src/components/table/z-tr/index.tsx"}},{kind:"custom-element-definition",name:"z-tr",declaration:{name:"ZTr",module:"src/components/table/z-tr/index.tsx"}}]}]};i({...o()||{},...M,modules:[...(o()||{}).modules||[],...M.modules]});const me=":host{--z-table--cells-padding:calc(var(--space-unit) * 2);position:relative;display:block;overflow:auto;max-width:100%;box-sizing:border-box;background-color:var(--color-surface01)}:host([expandable]){--z-table--expand-button-size:40px}:host([bordered]){--z-table--cell-left-border:1px solid var(--color-surface03)}.table{min-width:max-content}",ze=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.bordered=!1,this.expandable=!1}updateExpandable(){this.expandable=this.host.querySelectorAll("z-tr[expandable]").length>0}componentWillLoad(){this.expandableMutationObserver=new MutationObserver(()=>{this.updateExpandable()}),this.expandableMutationObserver.observe(this.host,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["expandable"],attributeOldValue:!1})}disconnectedCallback(){var e;(e=this.expandableMutationObserver)===null||e===void 0||e.disconnect()}render(){return t(p,{key:"8676f9bfcf6b0c26339a1785d0427e83b20262c6",expandable:this.expandable},t("div",{key:"20a332bd68dee52b4d736459a506e947f013cfda",class:"table",role:"table"},t("slot",{key:"2c587bcfacc29ca3efc482f64d9913b42020dc34"})))}get host(){return this}static get style(){return me}};d(ze,[1,"z-table",{bordered:[516],expandable:[32]}]);const S={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZTable",tagName:"z-table",customElement:!0,members:[{kind:"field",name:"bordered",type:"boolean",description:"Whether the table cells should show a border between them.",default:"false"}],events:[],cssProperties:[{name:"--z-table--cells-padding",description:"Padding of the cells."}],slots:[{name:"-",description:"Table content (`z-thead`, `z-tbody`, `z-tfoot`, `z-tr`)."}]}],exports:[{kind:"js",name:"ZTable",declaration:{name:"ZTable",module:"src/components/table/z-table/index.tsx"}},{kind:"custom-element-definition",name:"z-table",declaration:{name:"ZTable",module:"src/components/table/z-table/index.tsx"}}]}]};i({...o()||{},...S,modules:[...(o()||{}).modules||[],...S.modules]});const Ee={title:"ZTable",component:"z-table",args:{bordered:!0,"--z-table--cells-padding":"16px"},parameters:{docs:{description:{component:"## Accessibility\n\nThe `ZTable` and its related components comes with a set of roles and ARIA attributes to help screen readers to understand the table structure and its content.\nThe roles are mainly used to identify the table parts, since they are not the native HTML table elements.\nThe ARIA attributes used are the following:\n- [`aria-sort`](https://www.w3.org/TR/wai-aria-1.1/#aria-sort) to identify the sorting direction of a column when sorting is enabled\n- [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded) to identify if a row is expanded or not when expandable rows are enabled. The attribute is set on the button that expands the row, as explained in the [docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)\n- [`aria-controls`](https://www.w3.org/TR/wai-aria-1.1/#aria-controls) is used on the expandable row button to identify the content that is controlled by the button itself, as explained in the [docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls). Maybe the `aria-owns` attribute were more appropriate, but it is not supported on MacOS and iOS with VoiceOver, so we used `aria-controls` instead.\n- [`aria-label`](https://www.w3.org/TR/wai-aria-1.1/#aria-label) is used on the expandable row button to provide a label for the button, since the button doesn't have any text content."}}}},s=(e=1)=>n`${r([...new Array(e)],()=>n`<z-td>Contenuto cella</z-td>`)}`,x={render:e=>n`<z-table
      class="z-table-demo"
      .bordered=${e.bordered}
      style=${y({"--z-table--cells-padding":e["--z-table--cells-padding"]})}
    >
      <z-thead>
        <z-tr>${r([...new Array(8)],()=>n`<z-th>Titolo colonna</z-th>`)}</z-tr>
      </z-thead>
      <z-tbody>${r([...new Array(5)],()=>n`<z-tr>${s(8)}</z-tr>`)}</z-tbody>
      <z-tfoot>
        <z-tr>
          <z-td colspan="8">Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>`},h={render:e=>n`<z-table
      class="z-table-demo"
      .bordered=${e.bordered}
      style=${y({"--z-table--cells-padding":e["--z-table--cells-padding"]})}
    >
      <z-thead>
        <z-tr>${r([...new Array(8)],(u,a)=>n`<z-th>Colonna ${a+1}</z-th>`)}</z-tr>
      </z-thead>
      <z-tbody>
        <z-tr>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td show-menu>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div></z-td
          >
          ${s(5)}
        </z-tr>
        <z-tr>${r([...new Array(8)],()=>n`<z-td>Contenuto cella</z-td>`)}</z-tr>
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
          ${s(5)}
          <z-td>Contenuto espanso</z-td>
        </z-tr>
        <z-tr>${s(8)}</z-tr>
        <z-tr expandable>
          <z-td>Contenuto cella</z-td>
          <z-td show-menu="always">
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div></z-td
          >
          ${s(6)}
          <z-td>Contenuto espanso</z-td>
        </z-tr>
      </z-tbody>
      <z-tfoot>
        <z-tr>
          <z-td colspan="8">Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>`},b={args:{stickyHeader:!0,stickyFooter:!0,stickFirstColumn:!0},render:e=>n`<z-table
      class="z-table-demo"
      .bordered=${e.bordered}
      style=${y({"--z-table--cells-padding":e["--z-table--cells-padding"],height:"400px"})}
    >
      <z-thead .sticky=${e.stickyHeader}>
        <z-tr>
          <z-th .sticky=${e.stickFirstColumn}>Colonna 1</z-th>
          ${r([...new Array(7)],(u,a)=>n`<z-th>Colonna ${a+2}</z-th>`)}
        </z-tr>
      </z-thead>
      <z-tbody>
        <z-tr>
          <z-td .sticky=${e.stickFirstColumn}>Contenuto cella 1</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td show-menu>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div></z-td
          >
          ${s(4)}
        </z-tr>
        ${r([...new Array(5)],()=>n`<z-tr>
              <z-td .sticky=${e.stickFirstColumn}>Contenuto cella 1</z-td>
              ${s(7)}
            </z-tr>`)}
        <z-tr expandable>
          <z-td .sticky=${e.stickFirstColumn}>Contenuto cella 1</z-td>
          ${s(6)}
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
          <z-td .sticky=${e.stickFirstColumn}>Contenuto cella 1</z-td>
          ${s(7)}
          <z-td>Contenuto espanso</z-td>
        </z-tr>
      </z-tbody>
      <z-tfoot .sticky=${e.stickyFooter}>
        <z-tr>
          <z-td colspan="8">Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>`},m={argTypes:{showMenu:{control:{type:"inline-radio",labels:{null:"hidden"}},popoverPosition:{options:Object.values(f),control:{type:"select"}},options:[null,...Object.values(v)]}},args:{showMenu:v.HOVER,popoverPosition:f.AUTO},render:e=>n`<z-table
      class="z-table-demo"
      .bordered=${e.bordered}
      style=${y({"--z-table--cells-padding":e["--z-table--cells-padding"]})}
    >
      <z-thead>
        <z-tr>
          <z-th>Colonna 1</z-th>
          <z-th
            .showMenu=${e.showMenu}
            .popoverPosition=${e.popoverPosition}
          >
            Heading con menu
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-th>
          <z-th>Colonna 2</z-th>
        </z-tr>
      </z-thead>
      <z-tbody>
        ${r([...new Array(3)],()=>n`<z-tr>
              <z-td .showMenu=${e.showMenu}>
                <span>Contenuto cella con menu</span>
                <div slot="contextual-menu">Contenuto del popover</div>
              </z-td>
              <z-td>Contenuto cella</z-td>
              <z-td .showMenu=${e.showMenu}>
                <span>Contenuto cella con menu</span>
                <div slot="contextual-menu">Contenuto del popover</div>
              </z-td>
            </z-tr>`)}
      </z-tbody>
    </z-table>`},z={render:e=>n`<z-table
      class="z-table-demo"
      .bordered=${e.bordered}
      style=${y({"--z-table--cells-padding":e["--z-table--cells-padding"]})}
    >
      <z-thead>
        <z-tr>
          <z-th>Colonna 1</z-th>
          <z-th
            .sortDirection=${l.ASC}
            .showMenu=${v.HOVER}
          >
            Colonna 2 con menu e sorting
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-th>
          <z-th .sortDirection=${l.DESC}>Colonna 3 con sorting</z-th>
        </z-tr>
      </z-thead>
      <z-tbody>${r([...new Array(3)],()=>n`<z-tr>${s(3)}</z-tr>`)}</z-tbody>
    </z-table>`};var A,E,Z;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(Z=(E=x.parameters)==null?void 0:E.docs)==null?void 0:Z.source}}};var _,D,O,P,j;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(O=(D=h.parameters)==null?void 0:D.docs)==null?void 0:O.source},description:{story:'Just set `expandable` prop on the `z-tr` element to make it expandable, then put an additional `z-td` as extended content.\nIf you put a clickable item as a child cell of a z-tr with `expandable` set to `true`, you need to set a "prevent-expand" class on that item, in order to prevent unwanted row expansions.',...(j=(P=h.parameters)==null?void 0:P.docs)==null?void 0:j.description}}};var R,H,V,F,I;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(V=(H=b.parameters)==null?void 0:H.docs)==null?void 0:V.source},description:{story:"To make a column sticky, you need to set the `sticky` prop on the `z-th` and/or `z-td` elements of the same column.\nFor the header or footer, just set the `sticky` prop on the `z-thead` or `z-tfoot` element.",...(I=(F=b.parameters)==null?void 0:F.docs)==null?void 0:I.description}}};var W,L,N,U,B;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  argTypes: {
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
      <z-thead>
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
}`,...(N=(L=m.parameters)==null?void 0:L.docs)==null?void 0:N.source},description:{story:"Use the `showMenu` prop on `z-td` or `z-th`, setting a value of the enum `VisibilityCondition` (`HOVER` or `ALWAYS`), to show a contextual menu button on the cell. The content of the menu must be placed using the slot `contextual-menu`.\nUse `popoverPosition` prop on `z-th` to set the position of contextual menu, default is `auto`.",...(B=(U=m.parameters)==null?void 0:U.docs)==null?void 0:B.description}}};var Y,X,q,J,G;z.parameters={...z.parameters,docs:{...(Y=z.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => html\`<z-table
      class="z-table-demo"
      .bordered=\${args.bordered}
      style=\${styleMap({
    "--z-table--cells-padding": args["--z-table--cells-padding"]
  })}
    >
      <z-thead>
        <z-tr>
          <z-th>Colonna 1</z-th>
          <z-th
            .sortDirection=\${SortDirection.ASC}
            .showMenu=\${VisibilityCondition.HOVER}
          >
            Colonna 2 con menu e sorting
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-th>
          <z-th .sortDirection=\${SortDirection.DESC}>Colonna 3 con sorting</z-th>
        </z-tr>
      </z-thead>
      <z-tbody>\${repeat([...new Array(3)], () => html\`<z-tr>\${cellsTemplate(3)}</z-tr>\`)}</z-tbody>
    </z-table>\`
}`,...(q=(X=z.parameters)==null?void 0:X.docs)==null?void 0:q.source},description:{story:"Set the `sortDirection` prop to `SortDirection.ASC` or `SortDirection.DESC` to enable sorting and show the sort button.\nClicking the button will fire the `sort` event with the `sortDirection` as detail.",...(G=(J=z.parameters)==null?void 0:J.docs)==null?void 0:G.description}}};const Ze=["Default","ExpandableRows","Sticky","CellsWithContextualMenu","SortAction"];export{m as CellsWithContextualMenu,x as Default,h as ExpandableRows,z as SortAction,b as Sticky,Ze as __namedExportsOrder,Ee as default};

import{x as n}from"./lit-element-DGXdXVoE.js";import{c as r}from"./repeat-Ci_psrk_.js";import{o as y}from"./style-map-DWZVjDvr.js";import{P as v,B as K,C as Q,X as l,Y as f}from"./index-BnC6Ywep.js";import"./index-DAjW2EC7.js";import{s as i,g as o}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d,H as c,h as t,a as p,c as g}from"./index-BZ0rSFNp.js";import"./index-BpZkdoDR.js";import{r as te}from"./utils-CvvJewYG.js";import"./index-CMtFcR2H.js";import"./directive-CF8sV3Lr.js";import"./index-DrFu-skq.js";import"./breakpoints-p3CVLX0Q.js";const ne=":host{display:block;box-sizing:border-box}",oe=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow()}render(){return t(p,{key:"dee57a9967079d2e6ae77e8660bd7c89ef214827",role:"rowgroup"},t("slot",{key:"64acfd44edb71542ed398999bf44a659de235ded"}))}static get style(){return ne}};d(oe,[1,"z-tbody"]);const w={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZTbody",tagName:"z-tbody",customElement:!0,members:[],events:[],slots:[{name:"-",description:"ZTbody content (`z-tr`)."}]}],exports:[{kind:"js",name:"ZTbody",declaration:{name:"ZTbody",module:"src/components/table/z-tbody/index.tsx"}},{kind:"custom-element-definition",name:"z-tbody",declaration:{name:"ZTbody",module:"src/components/table/z-tbody/index.tsx"}}]}]};i({...o()||{},...w,modules:[...(o()||{}).modules||[],...w.modules]});const se=":host{display:block;box-sizing:border-box;border-top:1px solid var(--color-surface03);border-bottom:1px solid var(--color-surface03)}:host([sticky]){position:sticky;z-index:1;bottom:0;background-color:var(--color-surface01)}",ae=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.sticky=!1}render(){return t(p,{key:"ce598d2def39b4b85f90d015ca487d91d2911464",role:"rowgroup"},t("slot",{key:"d2400ae8dfcae98c246ba0e7bd10fd419734293c"}))}static get style(){return se}};d(ae,[1,"z-tfoot",{sticky:[516]}]);const k={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZTfoot",tagName:"z-tfoot",customElement:!0,members:[{kind:"field",name:"sticky",type:"boolean",description:"If true, the footer will be stuck to the bottom of the table.",default:"false"}],events:[],slots:[{name:"-",description:"ZTFoot content (`z-tr`)."}]}],exports:[{kind:"js",name:"ZTfoot",declaration:{name:"ZTfoot",module:"src/components/table/z-tfoot/index.tsx"}},{kind:"custom-element-definition",name:"z-tfoot",declaration:{name:"ZTfoot",module:"src/components/table/z-tfoot/index.tsx"}}]}]};i({...o()||{},...k,modules:[...(o()||{}).modules||[],...k.modules]});const re=`:host{--z-table--cells-bottom-border-size:var(
    --border-size-medium
  );--z-table--cells-background:var(
    --color-background
  );display:block;box-sizing:border-box}:host([sticky]){position:sticky;z-index:2;top:0;box-shadow:0 2px 4px -2px var(--shadow-color-base)}`,le=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.sticky=!1}render(){return t(p,{key:"08b1bc9ce0d8b06aad54c385facd83a50cf32a0f",role:"rowgroup"},t("slot",{key:"6d3f87de9e269b8204e1b2e767dfcce3e031dfc5"}))}static get style(){return re}};d(le,[1,"z-thead",{sticky:[516]}]);const C={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZThead",tagName:"z-thead",customElement:!0,members:[{kind:"field",name:"sticky",type:"boolean",description:"If true, the header will be stuck to the top of the table.",default:"false"}],events:[],slots:[{name:"-",description:"ZThead content (`z-tr`)."}]}],exports:[{kind:"js",name:"ZThead",declaration:{name:"ZThead",module:"src/components/table/z-thead/index.tsx"}},{kind:"custom-element-definition",name:"z-thead",declaration:{name:"ZThead",module:"src/components/table/z-thead/index.tsx"}}]}]};i({...o()||{},...C,modules:[...(o()||{}).modules||[],...C.modules]});const ie=':host{position:relative;display:flex;max-width:100%;align-items:center;padding:var(--z-table--cells-padding, calc(var(--space-unit) * 2));background-color:var(--color-surface01);gap:calc(var(--space-unit) * 2) var(--space-unit)}:host,*{box-sizing:border-box}:host([sticky]){position:sticky;z-index:1;top:0;left:0;box-shadow:8px 0 16px -8px var(--shadow-color-base)}:host([menu-open]){z-index:2}.cell--content{display:flex;width:100%;height:100%;align-items:center}:host([show-menu]) .cell--content{column-gap:var(--space-unit)}.cell--menu-container{margin-left:auto}:host(:not([show-menu])) .cell--menu-container{opacity:0;pointer-events:none}:host(:is([show-menu],[menu-open])) .cell--menu-container,:host([show-menu]) .cell--menu-container:focus-within{z-index:1;opacity:1;pointer-events:all}:host .cell-popover{z-index:100}@media (min-width: 768px) and (hover: hover){:host([show-menu="hover"]) .cell--menu-container{opacity:0;pointer-events:none}:host([show-menu="hover"]:hover) .cell--menu-container{z-index:1;opacity:1;pointer-events:all}}',de=ie+"",ce=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.colspanChange=g(this,"colspanChange",6),this.colspan=void 0,this.sticky=!1,this.showMenu=null,this.popoverPosition=v.AUTO,this.isMenuOpen=!1}updateColspan(){this.colspan?this.host.style.gridColumn=`span ${this.colspan}`:this.host.style.removeProperty("grid-column"),this.colspanChange.emit(this.colspan||1)}onMenuButtonClick(e){e.stopPropagation(),this.popoverEl.open=!this.popoverEl.open}componentWillLoad(){this.updateColspan()}render(){return t(p,{key:"76f19809eff6cfadb036c1dcbd7885f7862667e8",role:"cell","menu-open":this.isMenuOpen},t("div",{key:"4bcca9d20e2bdc0c073dbb8de34d366558a4eb7d",class:"cell--content"},t("slot",{key:"b43a8037e76f4adce82a0b45f0ac556fbff18ce7"}),this.showMenu&&t("div",{key:"ddd4072792a26e0ed5eb74140a76056823c4dc12",class:"cell--menu-container prevent-expand"},t("z-button",{key:"4ecd2c6d0ecf3347e78386d49d55c56814aecc79",variant:K.TERTIARY,icon:"contextual-menu",size:Q.X_SMALL,ref:e=>this.menuTrigger=e,onClick:this.onMenuButtonClick.bind(this)}),t("z-popover",{key:"85fc6fb7ba12f9de93e01f86f9ef0d04dbeda46d",class:"cell-popover",ref:e=>this.popoverEl=e,bindTo:this.menuTrigger,onOpenChange:e=>this.isMenuOpen=e.detail.open,position:this.popoverPosition},t("slot",{key:"c34d17df4092646988f17b16eafe829cf6a5e613",name:"contextual-menu"})))))}get host(){return this}static get watchers(){return{colspan:["updateColspan"]}}static get style(){return de}};d(ce,[1,"z-td",{colspan:[2],sticky:[516],showMenu:[520,"show-menu"],popoverPosition:[8,"popover-position"],isMenuOpen:[32]},void 0,{colspan:["updateColspan"]}]);const $={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZTd",tagName:"z-td",customElement:!0,members:[{kind:"field",name:"colspan",type:"number",description:"Number of columns that the cell should span."},{kind:"field",name:"sticky",type:"boolean",description:"Whether the cell should stick.",default:"false"},{kind:"field",name:"showMenu",type:"any",description:`Enables the contextual menu.
Can be set to "hover" or "always" to show the button only on cell hover or always.
Set a nullish value to hide the menu button.`,default:"null"},{kind:"field",name:"popoverPosition",type:"any",description:'Set the popover position, the default is "auto".',default:"PopoverPosition.AUTO"}],events:[{kind:"event",name:"colspanChange",description:"Emitted when the value of the `colspan` changes."}],slots:[{name:"-",description:"ZTd content."}]}],exports:[{kind:"js",name:"ZTd",declaration:{name:"ZTd",module:"src/components/table/cells/z-td/index.tsx"}},{kind:"custom-element-definition",name:"z-td",declaration:{name:"ZTd",module:"src/components/table/cells/z-td/index.tsx"}}]}]};i({...o()||{},...$,modules:[...(o()||{}).modules||[],...$.modules]});const pe=':host{position:relative;display:flex;max-width:100%;align-items:center;padding:var(--z-table--cells-padding, calc(var(--space-unit) * 2));background-color:var(--color-surface01);gap:calc(var(--space-unit) * 2) var(--space-unit)}:host,*{box-sizing:border-box}:host([sticky]){position:sticky;z-index:1;top:0;left:0;box-shadow:8px 0 16px -8px var(--shadow-color-base)}:host([menu-open]){z-index:2}.cell--content{display:flex;width:100%;height:100%;align-items:center}:host([show-menu]) .cell--content{column-gap:var(--space-unit)}.cell--menu-container{margin-left:auto}:host(:not([show-menu])) .cell--menu-container{opacity:0;pointer-events:none}:host(:is([show-menu],[menu-open])) .cell--menu-container,:host([show-menu]) .cell--menu-container:focus-within{z-index:1;opacity:1;pointer-events:all}:host .cell-popover{z-index:100}@media (min-width: 768px) and (hover: hover){:host([show-menu="hover"]) .cell--menu-container{opacity:0;pointer-events:none}:host([show-menu="hover"]:hover) .cell--menu-container{z-index:1;opacity:1;pointer-events:all}}',ue=pe+':host{z-index:1;padding:0;background-color:var(--color-background);font-weight:var(--font-sb)}.cell--content{padding:var(--z-table--cells-padding, calc(var(--space-unit) * 2))}:host([show-sorting]) .cell--content{column-gap:var(--space-unit)}.z-th--sort-button{padding:0;border:none;background-color:transparent;cursor:pointer;outline:none}@media (min-width: 768px) and (hover: hover){:host([show-sorting="hover"]) .z-th--sort-button{opacity:0;pointer-events:none}:host([show-sorting="hover"]:hover) .z-th--sort-button,:host([show-sorting="hover"]) .z-th--sort-button:focus:focus-visible,:host([show-sorting="always"]) .z-th--sort-button,:host([sorted]) .z-th--sort-button{opacity:1;pointer-events:all}}:host([show-sorting="hover"]:hover) .z-th--sort-button::after,:host([show-sorting="hover"]) .z-th--sort-button:focus:focus-visible::after,:host([show-sorting="always"]) .z-th--sort-button::after,:host([sorted]) .z-th--sort-button::after{position:absolute;top:6px;left:6px;width:calc(100% - 12px);height:calc(100% - 10px);background-color:transparent;content:""}:host([sorted]) .z-th--sort-button::after,.z-th--sort-button:focus:focus-visible::after{box-shadow:var(--shadow-focus-primary)}',he=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.sort=g(this,"sort",7),this.colspan=void 0,this.showMenu=null,this.showSorting=null,this.sticky=!1,this.sortDirection=void 0,this.sorted=!1,this.popoverPosition=v.AUTO,this.isMenuOpen=!1}get ariaSortDirection(){return this.sortDirection?this.sortDirection===l.ASC?"ascending":"descending":null}handleSort(){if(!this.sortDirection){this.sorted=!1;return}this.sortDirection=this.sortDirection===l.ASC?l.DESC:l.ASC,this.sorted=!0,this.sort.emit({sortDirection:this.sortDirection})}updateColspan(){this.colspan?this.host.style.gridColumn=`span ${this.colspan}`:this.host.style.removeProperty("grid-column")}componentWillLoad(){this.updateColspan()}render(){return t(p,{key:"5c1b34dfb6e1c779deb8a478d495f842145cdb7f",role:"columnheader","menu-open":this.isMenuOpen,"aria-sort":this.ariaSortDirection,sortable:this.showSorting},t("div",{key:"f3a878ff078bccd56e2469d0708f81dfb034a9c2",class:"cell--content"},t("slot",{key:"740edef04b1e7e7f60b4edae99f03a5ab1d0aef7"}),this.showSorting&&t("button",{key:"4b865091d10ade695da96de407fee8730d47adea",class:"z-th--sort-button",type:"button",onClick:this.handleSort.bind(this)},t("z-icon",{key:"15a9300c5f5826ac97fb2ab1c1caf0ef97ad0161",name:this.sortDirection===l.DESC?"arrow-simple-up":"arrow-simple-down",width:14,height:14})),this.showMenu&&t("div",{key:"c496b12b503cb747b7e0fc6a96662a283ea6e25f",class:"cell--menu-container"},t("z-button",{key:"ebabda2436faf42d035b0ff01ecff2548c18f797",variant:K.TERTIARY,icon:"contextual-menu",size:Q.X_SMALL,ref:e=>this.menuTrigger=e,onClick:()=>this.popoverEl.open=!this.popoverEl.open}),t("z-popover",{key:"a0789620d26bbade1978e7c814c65c2bd8aa3365",ref:e=>this.popoverEl=e,bindTo:this.menuTrigger,onOpenChange:e=>this.isMenuOpen=e.detail.open,position:this.popoverPosition},t("slot",{key:"975138eefbe872f3cbd24491de8b71f5b7178003",name:"contextual-menu"})))))}get host(){return this}static get watchers(){return{colspan:["updateColspan"]}}static get style(){return ue}};d(he,[1,"z-th",{colspan:[2],showMenu:[520,"show-menu"],showSorting:[520,"show-sorting"],sticky:[516],sortDirection:[1032,"sort-direction"],sorted:[1540],popoverPosition:[8,"popover-position"],isMenuOpen:[32]},void 0,{colspan:["updateColspan"]}]);const T={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZTh",tagName:"z-th",customElement:!0,members:[{kind:"field",name:"colspan",type:"number",description:"Number of columns that the cell should span."},{kind:"field",name:"showMenu",type:"any",description:`Enables the contextual menu.
Can be set to "hover" or "always" to show the button only on cell hover or always.
Set a nullish value to hide the menu button.`,default:"null"},{kind:"field",name:"showSorting",type:"any",description:`Enables the sorting button.
Can be set to "hover" or "always" to show the button only on cell hover or always.
Set a nullish value to hide the sort button.`,default:"null"},{kind:"field",name:"sticky",type:"boolean",description:"Whether the cell should stick.",default:"false"},{kind:"field",name:"sortDirection",type:"any",description:"Current sorting direction."},{kind:"field",name:"sorted",type:"boolean",description:"Sorted state of the column.",default:"false"},{kind:"field",name:"popoverPosition",type:"any",description:"Set popover position.",default:"PopoverPosition.AUTO"}],events:[{kind:"event",name:"sort",description:"Sort event fired when the user clicks on the sort button.\nThe sorting logic must be implemented by the app.\nYou can set an `id` on the `z-th` to easly identify the column in the event listener."}],slots:[{name:"-",description:"ZTh content."},{name:"contextual-menu",description:"Contextual menu content. Only visible when `showMenu` is true."}]}],exports:[{kind:"js",name:"ZTh",declaration:{name:"ZTh",module:"src/components/table/cells/z-th/index.tsx"}},{kind:"custom-element-definition",name:"z-th",declaration:{name:"ZTh",module:"src/components/table/cells/z-th/index.tsx"}}]}]};i({...o()||{},...T,modules:[...(o()||{}).modules||[],...T.modules]});const be=":host{--columns:1;display:grid;box-sizing:border-box;grid-auto-flow:column;grid-template-columns:var(--z-table--expand-button-size, 0) repeat(var(--columns), minmax(128px, 1fr))}*{box-sizing:border-box}.z-tr--expand-button-container,::slotted(*){border-bottom:var(--z-table--cells-bottom-border-size, var(--border-size-small)) solid var(--color-surface03)}::slotted(*:not(:last-child)){border-right:var(--z-table--cell-left-border, none)}:host([expandable]){--show-expandable-button:visible;cursor:pointer}:host([expandable]) ::slotted(*){grid-row:1}:host([expandable]) ::slotted(:nth-last-child(2)){border-right:none}:host([expandable]) ::slotted(*:last-child){border-left:0;grid-column:1 / span calc(var(--columns) + 1);grid-row:2}:host([expandable]:not([expanded])) ::slotted(*:last-child){display:none}:host([expanded]){margin-bottom:4px;box-shadow:0 4px 4px -2px var(--shadow-color-base)}:host([expanded]) .z-tr--expand-button-container,:host([expanded]) ::slotted(*){background-color:var(--color-background)}.z-tr--expand-button-container{display:flex;align-items:center;justify-content:center;background-color:var(--z-table--cells-background, var(--color-surface01))}.z-tr--expand-button-container button{display:flex;align-items:center;justify-content:center;padding:0;border:none;margin:auto;appearance:none;background:transparent;cursor:pointer;visibility:var(--show-expandable-button, hidden)}.z-tr--expand-button-container button:focus{box-shadow:var(--shadow-focus-primary);outline:none}.z-tr--expand-button-container button z-icon{--z-icon-width:16px;--z-icon-height:16px}",me=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.expand=g(this,"expand",7),this.expandable=!1,this.expanded=!1,this.expandableContentId=void 0}updateColumns(){const e=Array.from(this.host.querySelectorAll("z-td, z-th"));this.expandable&&e.pop();const u=e.map(s=>s.colspan||1).reduce((s,ee)=>s+ee,0);if(this.host.style.setProperty("--columns",`${u}`),this.expandable){const s=e.pop();s.id=s.id||`z-tr-expandable-content-${te()}`,this.expandableContentId=s.id}}onRowClick(e){const u=e.target.closest(".prevent-expand");!this.expandable||u||(this.expanded=!this.expanded,this.expand.emit({expanded:this.expanded}))}componentWillLoad(){this.updateColumns()}render(){return t(p,{key:"5ec5444c93b324d4da006a74e8345e1b810dc3d6",role:"row",onClick:this.onRowClick.bind(this),expanded:this.expanded},t("div",{key:"9bf39c289e1dad005096d1b16daf4ea8b87e1e87",class:"z-tr--expand-button-container"},this.expandable&&t("button",{key:"f0de2000026d8f2e58fe5f068569f55009718c4a","aria-expanded":this.expanded?"true":"false","aria-label":this.expanded?"Comprimi riga":"Espandi riga","aria-controls":this.expandableContentId,type:"button"},t("z-icon",{key:"8bb086c17afdc8203a342acf5df087055509b6ae",name:this.expanded?"minus-circled":"plus-circled"}))),t("slot",{key:"19519d4f3388db30085ecf305cd1f2d86adaf38a",onSlotchange:this.updateColumns.bind(this)}))}get host(){return this}static get watchers(){return{expandable:["updateColumns"]}}static get style(){return be}};d(me,[1,"z-tr",{expandable:[516],expanded:[32],expandableContentId:[32]},[[0,"colspanchange","updateColumns"]],{expandable:["updateColumns"]}]);const S={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZTr",tagName:"z-tr",customElement:!0,members:[{kind:"field",name:"expandable",type:"boolean",description:`Whether the row is expandable.
Use a \`z-td\` as the last cell of the row for the additional content.
It will show a button to expand/collapse the row.
The last cell will be hidden until the button or row is clicked.

If some element inside the expandable row contains the \`prevent-expand\` css class,
the row will not expand by clicking that element.`,default:"false"}],events:[{kind:"event",name:"expand",description:"Row has been expanded"}],slots:[{name:"-",description:"ZTr content (`z-td` or `z-th`)."}]}],exports:[{kind:"js",name:"ZTr",declaration:{name:"ZTr",module:"src/components/table/z-tr/index.tsx"}},{kind:"custom-element-definition",name:"z-tr",declaration:{name:"ZTr",module:"src/components/table/z-tr/index.tsx"}}]}]};i({...o()||{},...S,modules:[...(o()||{}).modules||[],...S.modules]});const ze=":host{--z-table--cells-padding:calc(var(--space-unit) * 2);position:relative;display:block;overflow:auto;max-width:100%;box-sizing:border-box;background-color:var(--color-surface01)}:host([expandable]){--z-table--expand-button-size:40px}:host([bordered]){--z-table--cell-left-border:1px solid var(--color-surface03)}",fe=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.bordered=!1,this.expandable=!1}updateExpandable(){this.expandable=this.host.querySelectorAll("z-tr[expandable]").length>0}componentWillLoad(){this.expandableMutationObserver=new MutationObserver(()=>{this.updateExpandable()}),this.expandableMutationObserver.observe(this.host,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["expandable"],attributeOldValue:!1})}disconnectedCallback(){var e;(e=this.expandableMutationObserver)===null||e===void 0||e.disconnect()}render(){return t(p,{key:"a158715b1881c576048c118d7bfe88089ba83ea4",expandable:this.expandable},t("div",{key:"4e73d1fed088995a2063741cdb5f2de65ce5b35c",class:"table",role:"table"},t("slot",{key:"62865fbe1bf82a4926b00ce54fb19c4828fa8004"})))}get host(){return this}static get style(){return ze}};d(fe,[1,"z-table",{bordered:[516],expandable:[32]}]);const M={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZTable",tagName:"z-table",customElement:!0,members:[{kind:"field",name:"bordered",type:"boolean",description:"Whether the table cells should show a border between them.",default:"false"}],events:[],cssProperties:[{name:"--z-table--cells-padding",description:"Padding of the cells."}],slots:[{name:"-",description:"Table content (`z-thead`, `z-tbody`, `z-tfoot`, `z-tr`)."}]}],exports:[{kind:"js",name:"ZTable",declaration:{name:"ZTable",module:"src/components/table/z-table/index.tsx"}},{kind:"custom-element-definition",name:"z-table",declaration:{name:"ZTable",module:"src/components/table/z-table/index.tsx"}}]}]};i({...o()||{},...M,modules:[...(o()||{}).modules||[],...M.modules]});const Oe={title:"ZTable",component:"z-table",args:{bordered:!0,"--z-table--cells-padding":"16px"},parameters:{docs:{description:{component:"## Accessibility\n\nThe `ZTable` and its related components comes with a set of roles and ARIA attributes to help screen readers to understand the table structure and its content.\nThe roles are mainly used to identify the table parts, since they are not the native HTML table elements.\nThe ARIA attributes used are the following:\n- [`aria-sort`](https://www.w3.org/TR/wai-aria-1.1/#aria-sort) to identify the sorting direction of a column when sorting is enabled\n- [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded) to identify if a row is expanded or not when expandable rows are enabled. The attribute is set on the button that expands the row, as explained in the [docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)\n- [`aria-controls`](https://www.w3.org/TR/wai-aria-1.1/#aria-controls) is used on the expandable row button to identify the content that is controlled by the button itself, as explained in the [docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls). Maybe the `aria-owns` attribute were more appropriate, but it is not supported on MacOS and iOS with VoiceOver, so we used `aria-controls` instead.\n- [`aria-label`](https://www.w3.org/TR/wai-aria-1.1/#aria-label) is used on the expandable row button to provide a label for the button, since the button doesn't have any text content."}}}},a=(e=1)=>n`${r([...new Array(e)],()=>n`<z-td>Contenuto cella</z-td>`)}`,x={render:e=>n`<z-table
      class="z-table-demo"
      .bordered=${e.bordered}
      style=${y({"--z-table--cells-padding":e["--z-table--cells-padding"]})}
    >
      <z-thead>
        <z-tr>${r([...new Array(8)],()=>n`<z-th>Titolo colonna</z-th>`)}</z-tr>
      </z-thead>
      <z-tbody>${r([...new Array(5)],()=>n`<z-tr>${a(8)}</z-tr>`)}</z-tbody>
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
        <z-tr>${r([...new Array(8)],(u,s)=>n`<z-th>Colonna ${s+1}</z-th>`)}</z-tr>
      </z-thead>
      <z-tbody>
        <z-tr>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td show-menu>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div></z-td
          >
          ${a(5)}
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
          ${a(5)}
          <z-td>Contenuto espanso</z-td>
        </z-tr>
        <z-tr>${a(8)}</z-tr>
        <z-tr expandable>
          <z-td>Contenuto cella</z-td>
          <z-td show-menu="always">
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div></z-td
          >
          ${a(6)}
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
          ${r([...new Array(7)],(u,s)=>n`<z-th>Colonna ${s+2}</z-th>`)}
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
          ${a(4)}
        </z-tr>
        ${r([...new Array(5)],()=>n`<z-tr>
              <z-td .sticky=${e.stickFirstColumn}>Contenuto cella 1</z-td>
              ${a(7)}
            </z-tr>`)}
        <z-tr expandable>
          <z-td .sticky=${e.stickFirstColumn}>Contenuto cella 1</z-td>
          ${a(6)}
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
          ${a(7)}
          <z-td>Contenuto espanso</z-td>
        </z-tr>
      </z-tbody>
      <z-tfoot .sticky=${e.stickyFooter}>
        <z-tr>
          <z-td colspan="8">Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>`},m={argTypes:{showMenu:{control:{type:"inline-radio",labels:{null:"hidden"}},popoverPosition:{options:Object.values(v),control:{type:"select"}},options:[null,...Object.values(f)]}},args:{showMenu:f.HOVER,popoverPosition:v.AUTO},render:e=>n`<z-table
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
    </z-table>`},z={argTypes:{showSorting:{options:Object.values(f),control:{type:"inline-radio"}}},args:{showSorting:f.HOVER},render:e=>n`<z-table
      class="z-table-demo"
      .bordered=${e.bordered}
      style=${y({"--z-table--cells-padding":e["--z-table--cells-padding"]})}
    >
      <z-thead>
        <z-tr>
          <z-th
            .sortDirection=${l.ASC}
            .showMenu=${f.HOVER}
            .showSorting=${e.showSorting}
          >
            Colonna 1 con menu e sorting
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-th>
          <z-th>Colonna 2</z-th>
          <z-th
            .sortDirection=${l.DESC}
            .showSorting=${e.showSorting}
            >Colonna 3 con sorting</z-th
          >
        </z-tr>
      </z-thead>
      <z-tbody>${r([...new Array(3)],()=>n`<z-tr>${a(3)}</z-tr>`)}</z-tbody>
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
}`,...(Z=(E=x.parameters)==null?void 0:E.docs)==null?void 0:Z.source}}};var O,_,P,D,R;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(P=(_=h.parameters)==null?void 0:_.docs)==null?void 0:P.source},description:{story:'Just set `expandable` prop on the `z-tr` element to make it expandable, then put an additional `z-td` as extended content.\nIf you put a clickable item as a child cell of a z-tr with `expandable` set to `true`, you need to set a "prevent-expand" class on that item, in order to prevent unwanted row expansions.',...(R=(D=h.parameters)==null?void 0:D.docs)==null?void 0:R.description}}};var V,j,H,F,I;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(H=(j=b.parameters)==null?void 0:j.docs)==null?void 0:H.source},description:{story:"To make a column sticky, you need to set the `sticky` prop on the `z-th` and/or `z-td` elements of the same column.\nFor the header or footer, just set the `sticky` prop on the `z-thead` or `z-tfoot` element.",...(I=(F=b.parameters)==null?void 0:F.docs)==null?void 0:I.description}}};var W,L,U,N,Y;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(U=(L=m.parameters)==null?void 0:L.docs)==null?void 0:U.source},description:{story:"Use the `showMenu` prop on `z-td` or `z-th`, setting a value of the enum `VisibilityCondition` (`HOVER` or `ALWAYS`), to show a contextual menu button on the cell. The content of the menu must be placed using the slot `contextual-menu`.\nUse `popoverPosition` prop on `z-th` to set the position of contextual menu, default is `auto`.",...(Y=(N=m.parameters)==null?void 0:N.docs)==null?void 0:Y.description}}};var B,X,q,J,G;z.parameters={...z.parameters,docs:{...(B=z.parameters)==null?void 0:B.docs,source:{originalSource:`{
  argTypes: {
    showSorting: {
      options: Object.values(VisibilityCondition),
      control: {
        type: "inline-radio"
      }
    }
  },
  args: {
    showSorting: VisibilityCondition.HOVER
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
}`,...(q=(X=z.parameters)==null?void 0:X.docs)==null?void 0:q.source},description:{story:"Set the `sortDirection` prop to `SortDirection.ASC` or `SortDirection.DESC` to enable sorting and show the sort button.\nClicking the button will fire the `sort` event with the `sortDirection` as detail.",...(G=(J=z.parameters)==null?void 0:J.docs)==null?void 0:G.description}}};const _e=["Default","ExpandableRows","Sticky","CellsWithContextualMenu","SortAction"];export{m as CellsWithContextualMenu,x as Default,h as ExpandableRows,z as SortAction,b as Sticky,_e as __namedExportsOrder,Oe as default};
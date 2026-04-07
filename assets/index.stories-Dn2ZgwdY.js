import{x as o}from"./lit-element-DGXdXVoE.js";import{c as r}from"./repeat-Ci_psrk_.js";import{o as y}from"./style-map-DWZVjDvr.js";import{P as v,B as G,C as Q,Y as l,_ as f}from"./index-2GKZ5e5J.js";import{r as oe,d as ee}from"./utils-Di3zQexw.js";import"./index-DKeQRlLO.js";import{s as i,g as n}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d,H as c,h as t,a as p,c as w}from"./index-BZ0rSFNp.js";import"./index-DN_DTmEP.js";import"./index-ChyBFYPc.js";import"./directive-CF8sV3Lr.js";import"./breakpoints-p3CVLX0Q.js";import"./index-DrFu-skq.js";const ne=":host{display:block;box-sizing:border-box}",se=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow()}render(){return t(p,{key:"92c222c395719fe6a19ec419056e51d4dfeb212f",role:"rowgroup"},t("slot",{key:"8b79152309406cc994a5a71e95d295c74562ac26"}))}static get style(){return ne}};d(se,[1,"z-tbody"]);const g={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZTbody",tagName:"z-tbody",customElement:!0,members:[],events:[],slots:[{name:"-",description:"ZTbody content (`z-tr`)."}]}],exports:[{kind:"js",name:"ZTbody",declaration:{name:"ZTbody",module:"src/components/table/z-tbody/index.tsx"}},{kind:"custom-element-definition",name:"z-tbody",declaration:{name:"ZTbody",module:"src/components/table/z-tbody/index.tsx"}}]}]};i({...n()||{},...g,modules:[...(n()||{}).modules||[],...g.modules]});const ae=":host{display:block;box-sizing:border-box;border-top:1px solid var(--color-surface03);border-bottom:1px solid var(--color-surface03)}:host([sticky]){position:sticky;z-index:1;bottom:0;background-color:var(--color-surface01)}",re=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.sticky=!1}render(){return t(p,{key:"e9152698c99d01a224233eaf5911a19f0bbe7cbc",role:"rowgroup",tabIndex:-1},t("slot",{key:"f78e51317352c4f7f3fe15733dc6ac2f7f3391a1"}))}static get style(){return ae}};d(re,[1,"z-tfoot",{sticky:[516]}]);const k={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZTfoot",tagName:"z-tfoot",customElement:!0,members:[{kind:"field",name:"sticky",type:"boolean",description:"If true, the footer will be stuck to the bottom of the table.",default:"false"}],events:[],slots:[{name:"-",description:"ZTFoot content (`z-tr`)."}]}],exports:[{kind:"js",name:"ZTfoot",declaration:{name:"ZTfoot",module:"src/components/table/z-tfoot/index.tsx"}},{kind:"custom-element-definition",name:"z-tfoot",declaration:{name:"ZTfoot",module:"src/components/table/z-tfoot/index.tsx"}}]}]};i({...n()||{},...k,modules:[...(n()||{}).modules||[],...k.modules]});const le=`:host{--z-table--cells-bottom-border-size:var(
    --border-size-medium
  );--z-table--cells-background:var(
    --color-background
  );display:block;box-sizing:border-box}:host([sticky]){position:sticky;z-index:2;top:0;box-shadow:0 2px 4px -2px var(--shadow-color-base)}:host(:focus-visible){box-shadow:none;outline:none}`,ie=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.sticky=!1,this.isFocusable=!1}render(){return t(p,{key:"c535777901cfd0dde3a69077d61e8e99d4491519",role:"rowgroup",tabIndex:this.isFocusable?0:-1},t("slot",{key:"966e32b4ce52d499e500fbcbed1a9c43cac1b3e5"}))}get host(){return this}static get style(){return le}};d(ie,[1,"z-thead",{sticky:[516],isFocusable:[516,"is-focusable"]}]);const C={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZThead",tagName:"z-thead",customElement:!0,members:[{kind:"field",name:"sticky",type:"boolean",description:"If true, the header will be stuck to the top of the table.",default:"false"},{kind:"field",name:"isFocusable",type:"boolean",description:"The element is focusable",default:"false"}],events:[],slots:[{name:"-",description:"ZThead content (`z-tr`)."}]}],exports:[{kind:"js",name:"ZThead",declaration:{name:"ZThead",module:"src/components/table/z-thead/index.tsx"}},{kind:"custom-element-definition",name:"z-thead",declaration:{name:"ZThead",module:"src/components/table/z-thead/index.tsx"}}]}]};i({...n()||{},...C,modules:[...(n()||{}).modules||[],...C.modules]});const de=':host{position:relative;display:flex;max-width:100%;align-items:center;padding:calc(var(--z-table--cells-padding, calc(var(--space-unit) * 2)));background-color:var(--color-surface01);gap:calc(var(--space-unit) * 2) var(--space-unit)}:host,*{box-sizing:border-box}:host([sticky]){position:sticky;z-index:1;top:0;left:0;box-shadow:8px 0 16px -8px var(--shadow-color-base)}:host([menu-open]){z-index:2}.cell--content{display:flex;width:100%;height:100%;align-items:center}:host([show-menu]) .cell--content{column-gap:var(--space-unit)}.cell--menu-container{margin-left:auto}:host(:not([show-menu])) .cell--menu-container{opacity:0;pointer-events:none}:host(:is([show-menu],[menu-open])) .cell--menu-container,:host([show-menu]) .cell--menu-container:focus-within{z-index:1;opacity:1;pointer-events:all}:host .cell-popover{z-index:100}@media (min-width: 768px) and (hover: hover){:host([show-menu="hover"]) .cell--menu-container{opacity:0;pointer-events:none}:host([show-menu="hover"]:hover) .cell--menu-container{z-index:1;opacity:1;pointer-events:all}}',ce=de+"",pe=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.colspanChange=w(this,"colspanChange",6),this.sticky=!1,this.showMenu=null,this.popoverPosition=v.AUTO,this.isMenuOpen=!1}updateColspan(){this.colspan?this.host.style.gridColumn=`span ${this.colspan}`:this.host.style.removeProperty("grid-column"),this.colspanChange.emit(this.colspan||1)}onMenuButtonClick(e){e.stopPropagation(),this.popoverEl.open=!this.popoverEl.open}componentWillLoad(){this.updateColspan()}render(){return t(p,{key:"c3cf68a67c7cfbb3367b16a32efeed6cf4f3d90e",role:"cell","menu-open":this.isMenuOpen},t("div",{key:"da1cb0b860eea45147fc974efb519fdcfa1feb97",class:"cell--content"},t("slot",{key:"27a7b992784bb21c1c66a917ec31b3cc350c0d2a"}),this.showMenu&&t("div",{key:"a343aba67342b9d6b4377ccc2c99ad1a3ec8abb6",class:"cell--menu-container prevent-expand"},t("z-button",{key:"9279a2c7824668ad42d40e03699954efdc4e3457",variant:G.TERTIARY,icon:"contextual-menu",size:Q.X_SMALL,ref:e=>this.menuTrigger=e,onClick:this.onMenuButtonClick.bind(this)}),t("z-popover",{key:"3b62ece1e9ceaa03e4d69a34796eac723be98169",class:"cell-popover",ref:e=>this.popoverEl=e,bindTo:this.menuTrigger,onOpenChange:e=>this.isMenuOpen=e.detail.open,position:this.popoverPosition},t("slot",{key:"8f94c331cdef6c2fcc7ab4ba8cae9163ce0be918",name:"contextual-menu"})))))}get host(){return this}static get watchers(){return{colspan:["updateColspan"]}}static get style(){return ce}};d(pe,[1,"z-td",{colspan:[2],sticky:[516],showMenu:[520,"show-menu"],popoverPosition:[8,"popover-position"],isMenuOpen:[32]},void 0,{colspan:["updateColspan"]}]);const $={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZTd",tagName:"z-td",customElement:!0,members:[{kind:"field",name:"colspan",type:"number",description:"Number of columns that the cell should span."},{kind:"field",name:"sticky",type:"boolean",description:"Whether the cell should stick.",default:"false"},{kind:"field",name:"showMenu",type:"any",description:`Enables the contextual menu.
Can be set to "hover" or "always" to show the button only on cell hover or always.
Set a nullish value to hide the menu button.`,default:"null"},{kind:"field",name:"popoverPosition",type:"any",description:'Set the popover position, the default is "auto".',default:"PopoverPosition.AUTO"}],events:[{kind:"event",name:"colspanChange",description:"Emitted when the value of the `colspan` changes."}],slots:[{name:"-",description:"ZTd content."}]}],exports:[{kind:"js",name:"ZTd",declaration:{name:"ZTd",module:"src/components/table/cells/z-td/index.tsx"}},{kind:"custom-element-definition",name:"z-td",declaration:{name:"ZTd",module:"src/components/table/cells/z-td/index.tsx"}}]}]};i({...n()||{},...$,modules:[...(n()||{}).modules||[],...$.modules]});const ue=':host{position:relative;display:flex;max-width:100%;align-items:center;padding:calc(var(--z-table--cells-padding, calc(var(--space-unit) * 2)));background-color:var(--color-surface01);gap:calc(var(--space-unit) * 2) var(--space-unit)}:host,*{box-sizing:border-box}:host([sticky]){position:sticky;z-index:1;top:0;left:0;box-shadow:8px 0 16px -8px var(--shadow-color-base)}:host([menu-open]){z-index:2}.cell--content{display:flex;width:100%;height:100%;align-items:center}:host([show-menu]) .cell--content{column-gap:var(--space-unit)}.cell--menu-container{margin-left:auto}:host(:not([show-menu])) .cell--menu-container{opacity:0;pointer-events:none}:host(:is([show-menu],[menu-open])) .cell--menu-container,:host([show-menu]) .cell--menu-container:focus-within{z-index:1;opacity:1;pointer-events:all}:host .cell-popover{z-index:100}@media (min-width: 768px) and (hover: hover){:host([show-menu="hover"]) .cell--menu-container{opacity:0;pointer-events:none}:host([show-menu="hover"]:hover) .cell--menu-container{z-index:1;opacity:1;pointer-events:all}}',he=ue+':host{z-index:1;padding:0;background-color:var(--color-background);font-weight:var(--font-sb)}.cell--content{padding:var(--z-table--cells-padding, calc(var(--space-unit) * 2))}:host([show-sorting]) .cell--content{column-gap:var(--space-unit)}.z-th--sort-button{position:relative;padding:0;border:none;background-color:transparent;cursor:pointer;outline:none}.z-th--sort-button:focus,.z-th--sort-button:focus-visible{box-shadow:var(--shadow-focus-primary);opacity:1;outline:none;pointer-events:all}@media (min-width: 768px) and (hover: hover){:host([show-sorting="hover"]) .z-th--sort-button{opacity:0;pointer-events:none}:host([show-sorting="hover"]:hover) .z-th--sort-button,:host([show-sorting="hover"]) .z-th--sort-button:focus:focus-visible,:host([show-sorting="always"]) .z-th--sort-button,:host([sorted]) .z-th--sort-button{opacity:1;pointer-events:all}}:host([show-sorting="hover"]:hover) .z-th--sort-button::after,:host([show-sorting="hover"]) .z-th--sort-button:focus:focus-visible::after,:host([show-sorting="always"]) .z-th--sort-button::after,:host([sorted]) .z-th--sort-button::after{position:absolute;top:6px;left:6px;width:calc(100% - 12px);height:calc(100% - 10px);background-color:transparent;content:""}',be=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.sort=w(this,"sort",7),this.showMenu=null,this.showSorting=null,this.sticky=!1,this.sorted=!1,this.popoverPosition=v.AUTO,this.isMenuOpen=!1}get ariaSortDirection(){return this.sortDirection?this.sortDirection===l.ASC?"ascending":"descending":null}handleSort(){if(!this.sortDirection){this.sorted=!1;return}this.sortDirection=this.sortDirection===l.ASC?l.DESC:l.ASC,this.sorted=!0,this.sort.emit({sortDirection:this.sortDirection})}updateColspan(){this.colspan?this.host.style.gridColumn=`span ${this.colspan}`:this.host.style.removeProperty("grid-column")}componentWillLoad(){this.updateColspan()}render(){return t(p,{key:"92cace6d21987d6ab465af0a89b950be5fbae802",role:"columnheader","menu-open":this.isMenuOpen,"aria-sort":this.ariaSortDirection,sortable:this.showSorting},t("div",{key:"66a115827f5a77772d81b04928d52dd87727af2e",class:"cell--content"},t("slot",{key:"39de7da10834becc062d5797c40cdf298dd4a6a1"}),this.showSorting&&t("button",{key:"e522ab02a827e6c54fe892685a7714d774c67448",class:"z-th--sort-button",type:"button",onClick:this.handleSort.bind(this)},t("z-icon",{key:"49937a06c5e441f232af26d3e284def544c38c84",name:this.sortDirection===l.DESC?"arrow-simple-up":"arrow-simple-down",width:14,height:14})),this.showMenu&&t("div",{key:"536e8411cf3b98ac1b32a28f31e1031424105626",class:"cell--menu-container"},t("z-button",{key:"2e832d80110f1cc3755031df8632bde8d1c9c2dc",variant:G.TERTIARY,icon:"contextual-menu",size:Q.X_SMALL,ref:e=>this.menuTrigger=e,onClick:()=>this.popoverEl.open=!this.popoverEl.open}),t("z-popover",{key:"75ce58eabb93be591753bc730ca76f88f80ea951",ref:e=>this.popoverEl=e,bindTo:this.menuTrigger,onOpenChange:e=>this.isMenuOpen=e.detail.open,position:this.popoverPosition},t("slot",{key:"6849809d5537e89a482073842a65c9fb924eceb9",name:"contextual-menu"})))))}get host(){return this}static get watchers(){return{colspan:["updateColspan"]}}static get style(){return he}};d(be,[1,"z-th",{colspan:[2],showMenu:[520,"show-menu"],showSorting:[520,"show-sorting"],sticky:[516],sortDirection:[1032,"sort-direction"],sorted:[1540],popoverPosition:[8,"popover-position"],isMenuOpen:[32]},void 0,{colspan:["updateColspan"]}]);const T={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZTh",tagName:"z-th",customElement:!0,members:[{kind:"field",name:"colspan",type:"number",description:"Number of columns that the cell should span."},{kind:"field",name:"showMenu",type:"any",description:`Enables the contextual menu.
Can be set to "hover" or "always" to show the button only on cell hover or always.
Set a nullish value to hide the menu button.`,default:"null"},{kind:"field",name:"showSorting",type:"any",description:`Enables the sorting button.
Can be set to "hover" or "always" to show the button only on cell hover or always.
Set a nullish value to hide the sort button.`,default:"null"},{kind:"field",name:"sticky",type:"boolean",description:"Whether the cell should stick.",default:"false"},{kind:"field",name:"sortDirection",type:"any",description:"Current sorting direction."},{kind:"field",name:"sorted",type:"boolean",description:"Sorted state of the column.",default:"false"},{kind:"field",name:"popoverPosition",type:"any",description:"Set popover position.",default:"PopoverPosition.AUTO"}],events:[{kind:"event",name:"sort",description:"Sort event fired when the user clicks on the sort button.\nThe sorting logic must be implemented by the app.\nYou can set an `id` on the `z-th` to easly identify the column in the event listener."}],slots:[{name:"-",description:"ZTh content."},{name:"contextual-menu",description:"Contextual menu content. Only visible when `showMenu` is true."}]}],exports:[{kind:"js",name:"ZTh",declaration:{name:"ZTh",module:"src/components/table/cells/z-th/index.tsx"}},{kind:"custom-element-definition",name:"z-th",declaration:{name:"ZTh",module:"src/components/table/cells/z-th/index.tsx"}}]}]};i({...n()||{},...T,modules:[...(n()||{}).modules||[],...T.modules]});const me=`:host{position:relative;display:grid;width:100%;box-sizing:border-box;grid-auto-flow:column;grid-template-columns:var(--z-table--expand-button-size, 0) repeat(var(--columns), minmax(128px, 1fr));--columns:1}*{box-sizing:border-box}.z-tr--expand-button-container,::slotted(*){border-bottom:var(--z-table--cells-bottom-border-size, var(--border-size-small)) solid var(--color-surface03)}::slotted(*:not(:last-child)){border-right:var(--z-table--cell-left-border, none)}:host([expandable]){--show-expandable-button:visible;cursor:pointer}:host([expandable]) ::slotted(*){grid-row:1}:host([expandable]) ::slotted(:nth-last-child(2)){border-right:none}:host([expandable]) ::slotted(*:last-child){border-left:0;grid-column:1 / span calc(var(--columns) + 1);grid-row:2}:host([expandable]:not([expanded])) ::slotted(*:last-child){display:none}:host([expanded]){margin-bottom:4px;box-shadow:0 4px 4px -2px var(--shadow-color-base)}:host([expanded]) .z-tr--expand-button-container,:host([expanded]) ::slotted(*){background-color:var(--color-background)}:host(:hover) ::slotted(z-td),:host(:hover) ::slotted(z-th){border-top:var(--border-size-small) solid var(--color-surface04);border-bottom:var(--border-size-small) solid var(--color-surface04);background-color:var(--color-surface02)}:host(:focus){position:relative;z-index:20;box-shadow:var(--shadow-focus-primary);outline:none}.z-tr--expand-button-container{display:flex;align-items:center;justify-content:center;background-color:var(--z-table--cells-background, var(--color-surface01))}.z-tr--expand-button-container button{display:flex;align-items:center;justify-content:center;padding:0;border:none;margin:auto;appearance:none;background:transparent;cursor:pointer;visibility:var(--show-expandable-button, hidden)}.z-tr--expand-button-container button z-icon{--z-icon-width:16px;--z-icon-height:16px}.z-tr--focus-overlay{position:absolute;z-index:30;right:0;left:0;width:100%;border-radius:4px;box-shadow:none;inset:0;outline:none;pointer-events:none;transition:box-shadow 0.2s}:host(:focus) .z-tr--focus-overlay{box-shadow:0 0 0 2px var(--shadow-focus-primary),
    var(--shadow-focus-primary);outline:none}:host(:focus) ::slotted(*){border-bottom:none}:host(:focus) .z-tr--expand-button-container{border-bottom:none}`,ze=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.expand=w(this,"expand",7),this.expandable=!1,this.expanded=!1}updateColumns(){const e=Array.from(this.host.querySelectorAll("z-td, z-th"));this.expandable&&e.pop();const u=e.map(s=>s.colspan||1).reduce((s,te)=>s+te,0);if(this.host.style.setProperty("--columns",`${u}`),this.expandable){const s=e.pop();s.id=s.id||`z-tr-expandable-content-${oe()}`,this.expandableContentId=s.id}}onRowClick(e){const u=e.target.closest(".prevent-expand");!this.expandable||u||(this.expanded=!this.expanded,this.expand.emit({expanded:this.expanded}))}onKeyDown(e){!this.expandable||document.activeElement!==this.host||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.expanded=!this.expanded,this.expand.emit({expanded:this.expanded}))}componentWillLoad(){this.updateColumns()}render(){return t(p,{key:"051c60b145b48dd6b5aff80a0de13096fb6f4c3f",role:"row",tabIndex:0,expanded:this.expanded,onClick:this.onRowClick.bind(this),onKeyDown:this.onKeyDown.bind(this)},t("div",{key:"1497d85c62976a7b6dca2c00a311cf7bd5e80d76",class:"z-tr--focus-overlay","aria-hidden":"true"}),t("div",{key:"9c5293126bb1e45ff78c6e46f4cf006abf4a807e",class:"z-tr--expand-button-container"},this.expandable&&t("button",{key:"546264ee84edea78ea1e95b588a5f4bc694d2d1c",tabIndex:-1,"aria-expanded":this.expanded?"true":"false","aria-label":this.expanded?"Comprimi riga":"Espandi riga","aria-controls":this.expandableContentId,type:"button"},t("z-icon",{key:"cea361bef948ae08ec67233a8fe90913a246d325",name:this.expanded?"minus-circled":"plus-circled"}))),t("slot",{key:"3ff854921de66d5654949ffb649bf4dcaa1085a6",onSlotchange:this.updateColumns.bind(this)}))}get host(){return this}static get watchers(){return{expandable:["updateColumns"]}}static get style(){return me}};d(ze,[1,"z-tr",{expandable:[516],expanded:[32],expandableContentId:[32]},[[0,"colspanchange","updateColumns"]],{expandable:["updateColumns"]}]);const S={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZTr",tagName:"z-tr",customElement:!0,members:[{kind:"field",name:"expandable",type:"boolean",description:`Whether the row is expandable.
Use a \`z-td\` as the last cell of the row for the additional content.
It will show a button to expand/collapse the row.
The last cell will be hidden until the button or row is clicked.

If some element inside the expandable row contains the \`prevent-expand\` css class,
the row will not expand by clicking that element.`,default:"false"}],events:[{kind:"event",name:"expand",description:"Row has been expanded"}],slots:[{name:"-",description:"ZTr content (`z-td` or `z-th`)."}]}],exports:[{kind:"js",name:"ZTr",declaration:{name:"ZTr",module:"src/components/table/z-tr/index.tsx"}},{kind:"custom-element-definition",name:"z-tr",declaration:{name:"ZTr",module:"src/components/table/z-tr/index.tsx"}}]}]};i({...n()||{},...S,modules:[...(n()||{}).modules||[],...S.modules]});const fe=":host{--z-table--cells-padding:calc(var(--space-unit) * 2);position:relative;display:block;overflow:auto;min-width:max-content;max-width:100%;box-sizing:border-box;padding:var(--space-unit);background-color:var(--color-surface01)}:host([expandable]){--z-table--expand-button-size:40px}:host([bordered]){--z-table--cell-left-border:1px solid var(--color-surface03)}",ye=class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.bordered=!1,this.expandable=!1}updateExpandable(){this.expandable=this.host.querySelectorAll("z-tr[expandable]").length>0}componentWillLoad(){this.expandableMutationObserver=new MutationObserver(()=>{this.updateExpandable()}),this.expandableMutationObserver.observe(this.host,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["expandable"],attributeOldValue:!1})}disconnectedCallback(){var e;(e=this.expandableMutationObserver)===null||e===void 0||e.disconnect()}render(){return t(p,{key:"6561137a071f059185049bd489d4342008d1e290",expandable:this.expandable},t("div",{key:"1627e588d710e1d2ed7df6501d6a88937bb1c6c9",class:"table",role:"table"},t("slot",{key:"de9af10bd4b04f7ce74a78e480bf7cd1783d39ec"})))}get host(){return this}static get style(){return fe}};d(ye,[1,"z-table",{bordered:[516],expandable:[32]}]);const M={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZTable",tagName:"z-table",customElement:!0,members:[{kind:"field",name:"bordered",type:"boolean",description:"Whether the table cells should show a border between them.",default:"false"}],events:[],cssProperties:[{name:"--z-table--cells-padding",description:"Padding of the cells."}],slots:[{name:"-",description:"Table content (`z-thead`, `z-tbody`, `z-tfoot`, `z-tr`)."}]}],exports:[{kind:"js",name:"ZTable",declaration:{name:"ZTable",module:"src/components/table/z-table/index.tsx"}},{kind:"custom-element-definition",name:"z-table",declaration:{name:"ZTable",module:"src/components/table/z-table/index.tsx"}}]}]};i({...n()||{},...M,modules:[...(n()||{}).modules||[],...M.modules]});const Oe={title:"ZTable",component:"z-table",args:{bordered:!0,"--z-table--cells-padding":"16px"},parameters:{docs:{description:{component:"## Accessibility\n\nThe `ZTable` and its related components comes with a set of roles and ARIA attributes to help screen readers to understand the table structure and its content.\nThe roles are mainly used to identify the table parts, since they are not the native HTML table elements.\nThe ARIA attributes used are the following:\n- [`aria-sort`](https://www.w3.org/TR/wai-aria-1.1/#aria-sort) to identify the sorting direction of a column when sorting is enabled\n- [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded) to identify if a row is expanded or not when expandable rows are enabled. The attribute is set on the button that expands the row, as explained in the [docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)\n- [`aria-controls`](https://www.w3.org/TR/wai-aria-1.1/#aria-controls) is used on the expandable row button to identify the content that is controlled by the button itself, as explained in the [docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls). Maybe the `aria-owns` attribute were more appropriate, but it is not supported on MacOS and iOS with VoiceOver, so we used `aria-controls` instead.\n- [`aria-label`](https://www.w3.org/TR/wai-aria-1.1/#aria-label) is used on the expandable row button to provide a label for the button, since the button doesn't have any text content."}}}},a=(e=1)=>o`${r([...new Array(e)],()=>o`<z-td>Contenuto cella</z-td>`)}`,x={render:e=>o`<z-table
      class="z-table-demo"
      .bordered=${e.bordered}
      style=${y({"--z-table--cells-padding":e["--z-table--cells-padding"]})}
    >
      <z-thead>
        <z-tr>${r([...new Array(8)],()=>o`<z-th>Titolo colonna</z-th>`)}</z-tr>
      </z-thead>
      <z-tbody>${r([...new Array(5)],()=>o`<z-tr>${a(8)}</z-tr>`)}</z-tbody>
      <z-tfoot>
        <z-tr>
          <z-td colspan="8">Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>`},h={render:e=>o`<z-table
      class="z-table-demo"
      .bordered=${e.bordered}
      style=${y({"--z-table--cells-padding":e["--z-table--cells-padding"]})}
    >
      <z-thead>
        <z-tr>${r([...new Array(8)],(u,s)=>o`<z-th>Colonna ${s+1}</z-th>`)}</z-tr>
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
        <z-tr>${r([...new Array(8)],()=>o`<z-td>Contenuto cella</z-td>`)}</z-tr>
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
    </z-table>`},b={args:{stickyHeader:!0,stickyFooter:!0,stickFirstColumn:!0},render:e=>o`<z-table
      class="z-table-demo"
      .bordered=${e.bordered}
      style=${y({"--z-table--cells-padding":e["--z-table--cells-padding"],height:"400px"})}
    >
      <z-thead .sticky=${e.stickyHeader}>
        <z-tr>
          <z-th .sticky=${e.stickFirstColumn}>Colonna 1</z-th>
          ${r([...new Array(7)],(u,s)=>o`<z-th>Colonna ${s+2}</z-th>`)}
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
        ${r([...new Array(5)],()=>o`<z-tr>
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
    </z-table>`},m={argTypes:{isFocusable:ee,showMenu:{control:{type:"inline-radio",labels:{null:"hidden"}},popoverPosition:{options:Object.values(v),control:{type:"select"}},options:[null,...Object.values(f)]}},args:{isFocusable:!0,showMenu:f.HOVER,popoverPosition:v.AUTO},render:e=>o`<z-table
      class="z-table-demo"
      .bordered=${e.bordered}
      style=${y({"--z-table--cells-padding":e["--z-table--cells-padding"]})}
    >
      <z-thead .isFocusable=${e.isFocusable}>
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
        ${r([...new Array(3)],()=>o`<z-tr>
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
    </z-table>`},z={argTypes:{isFocusable:ee,showSorting:{options:Object.values(f),control:{type:"inline-radio"}}},args:{isFocusable:!0,showSorting:f.HOVER},render:e=>o`<z-table
      class="z-table-demo"
      .bordered=${e.bordered}
      style=${y({"--z-table--cells-padding":e["--z-table--cells-padding"]})}
    >
      <z-thead .isFocusable=${e.isFocusable}>
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
      <z-tbody>${r([...new Array(3)],()=>o`<z-tr>${a(3)}</z-tr>`)}</z-tbody>
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
}`,...(Z=(E=x.parameters)==null?void 0:E.docs)==null?void 0:Z.source}}};var F,O,_,D,P;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(_=(O=h.parameters)==null?void 0:O.docs)==null?void 0:_.source},description:{story:'Just set `expandable` prop on the `z-tr` element to make it expandable, then put an additional `z-td` as extended content.\nIf you put a clickable item as a child cell of a z-tr with `expandable` set to `true`, you need to set a "prevent-expand" class on that item, in order to prevent unwanted row expansions.',...(P=(D=h.parameters)==null?void 0:D.docs)==null?void 0:P.description}}};var R,V,j,H,I;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(j=(V=b.parameters)==null?void 0:V.docs)==null?void 0:j.source},description:{story:"To make a column sticky, you need to set the `sticky` prop on the `z-th` and/or `z-td` elements of the same column.\nFor the header or footer, just set the `sticky` prop on the `z-thead` or `z-tfoot` element.",...(I=(H=b.parameters)==null?void 0:H.docs)==null?void 0:I.description}}};var W,L,U,N,Y;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(U=(L=m.parameters)==null?void 0:L.docs)==null?void 0:U.source},description:{story:"Use the `showMenu` prop on `z-td` or `z-th`, setting a value of the enum `VisibilityCondition` (`HOVER` or `ALWAYS`), to show a contextual menu button on the cell. The content of the menu must be placed using the slot `contextual-menu`.\nUse `popoverPosition` prop on `z-th` to set the position of contextual menu, default is `auto`.",...(Y=(N=m.parameters)==null?void 0:N.docs)==null?void 0:Y.description}}};var B,K,q,X,J;z.parameters={...z.parameters,docs:{...(B=z.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(q=(K=z.parameters)==null?void 0:K.docs)==null?void 0:q.source},description:{story:"Set the `sortDirection` prop to `SortDirection.ASC` or `SortDirection.DESC` to enable sorting and show the sort button.\nClicking the button will fire the `sort` event with the `sortDirection` as detail.",...(J=(X=z.parameters)==null?void 0:X.docs)==null?void 0:J.description}}};const _e=["Default","ExpandableRows","Sticky","CellsWithContextualMenu","SortAction"];export{m as CellsWithContextualMenu,x as Default,h as ExpandableRows,z as SortAction,b as Sticky,_e as __namedExportsOrder,Oe as default};

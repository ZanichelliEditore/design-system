import{x as $}from"./lit-element-DGXdXVoE.js";import{g as u,C as r,b,K as l,L as x}from"./index-CcuDdGyi.js";import"./index-BEj-2O7q.js";import"./index-Br9s0Xfc.js";import"./index-BBieR392.js";import"./index-RXeQJHrP.js";import"./index-C9vtIMSq.js";import{s as _,g as f}from"./chunk-GKNNPQCW-BkHQSocK.js";import{d as R,H as O,c as N,h as i}from"./index-8h8udRzn.js";import{r as D,a as v}from"./utils-B_2tKo6T.js";import"./index-BaacvMGM.js";import"./index-BJJOCqId.js";import"./breakpoints-C5kxgyOu.js";const V=':host{display:block;font-family:var(--font-family-sans)}:host>div.fixed{position:relative}:host>div>.header{position:relative;z-index:10;display:flex;min-height:42px;align-items:center;justify-content:space-between;padding:0 calc(var(--space-unit) * 1.5);border:var(--border-size-small) solid var(--color-surface04);margin:0;background-color:var(--color-input-field01);border-radius:var(--border-radius-small);cursor:pointer}:host([size="small"])>div>.header{min-height:34px;font-size:var(--font-size-2)}:host([size="x-small"])>div>.header{min-height:30px;font-size:var(--font-size-2)}:host([size="x-small"])>div>.header p.body-3{padding:calc(var(--space-unit) * 0.5) 0}:host>div>.header:hover{outline:var(--border-size-medium) solid var(--color-surface04);outline-offset:-2px}:host>div.open>div.header:focus:focus-visible{box-shadow:none}:host>div>div.header:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}:host>div>.header>p.body-3{padding:var(--space-unit) 0;margin:0;color:var(--color-default-text)}:host>div>.header>p.body-3>span{font-weight:var(--font-sb)}:host>div>.header>z-icon{fill:var(--color-default-icon);transform:rotate(360deg);transition:all 200ms linear}:host>div>.header>z-icon.small,:host>div>.header>z-icon.x-small{--z-icon-width:16px;--z-icon-height:16px}:host>div.open>.header{border:var(--border-size-small) solid var(--color-primary01);border-radius:var(--border-radius-small) var(--border-radius-small) 0 0}:host>div.disabled{pointer-events:none}:host>div.disabled .header{border-color:var(--color-disabled01);fill:var(--color-disabled01)}:host>div.disabled .header>p.body-3{color:var(--color-disabled03)}:host>div.disabled .header>z-icon:last-child{fill:var(--color-disabled01)}:host>div.open>.header>z-icon{fill:var(--color-default-icon);transform:rotate(180deg);transition:all 200ms linear}:host>div.open>div.open-combo-data{position:relative;z-index:12;padding:var(--space-unit) calc(var(--space-unit) * 2);border:var(--border-size-small) solid var(--gray200);border-top:0;background-color:var(--color-input-field01);border-radius:0}:host>div.open>div.open-combo-data>div>div{overflow:auto;max-height:235px;padding:0;scrollbar-color:var(--color-primary01) transparent}:host>div.open>div.open-combo-data>z-input{width:100%;margin-bottom:calc(var(--space-unit) * 2)}:host>div.open>div.open-combo-data>div>div>ul{max-height:235px;padding:0 3px;margin:0}::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01)}:host>div.open>z-input{position:relative;z-index:1;width:238px;margin:0 calc(var(--space-unit) * 2);color:var(--color-primary01)}:host>div.open>div.open-combo-data>div>div.search{overflow:hidden;max-height:auto;margin-top:0;box-shadow:1px 1px 4px 2px rgb(217 222 227 / 50%)}:host>div.open>div.open-combo-data>div>div.search>ul{overflow:auto;max-height:180px;padding:var(--space-unit) calc(var(--space-unit) * 2);scrollbar-color:var(--color-primary01) transparent}:host>div.open>div.open-combo-data>div>div.search>div{display:flex;justify-content:center}:host>div.open>div.open-combo-data>div>div.search>div>a{display:inline-block;height:44px;color:var(--color-primary01);cursor:pointer;font-size:14px;font-weight:var(--font-sb);line-height:44px;text-align:center;text-transform:uppercase}:host>div.open>div.open-combo-data>div>div.check-all-wrapper{padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 0.5);border-bottom:var(--border-size-small) solid var(--gray800);margin-bottom:var(--space-unit);text-align:left}:host([size="small"])>div.open>div.open-combo-data>div>div.check-all-wrapper{padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 0.5)}:host([size="x-small"])>div.open>div.open-combo-data>div>div.check-all-wrapper{padding:var(--space-unit) calc(var(--space-unit) * 0.5)}',M=class extends O{watchItems(){this.itemsList=typeof this.items=="string"?JSON.parse(this.items):this.items,this.selectedCounter=this.itemsList.filter(e=>e.checked).length,this.updateRenderItemsList()}watchSearchValue(){this.filterItems(this.searchValue)}watchCheckboxes(){this.checkboxes.forEach((e,t)=>e.setAttribute("tabindex",t===0?"0":"-1"))}emitComboboxChange(){this.comboboxChange.emit({id:this.inputid,items:this.itemsList})}constructor(){super(),this.__registerHost(),this.__attachShadow(),this.comboboxChange=N(this,"comboboxChange",7),this.itemsList=[],this.inputType=u.TEXT,this.inputid=`combo-${D()}`,this.items=void 0,this.label=void 0,this.disabled=!1,this.hassearch=!1,this.searchlabel=void 0,this.searchplaceholder=void 0,this.searchtitle=void 0,this.noresultslabel="Nessun risultato",this.isopen=!1,this.isfixed=!1,this.closesearchtext="Chiudi",this.hascheckall=!1,this.checkalltext="Seleziona tutti",this.uncheckalltext="Deseleziona tutti",this.maxcheckableitems=0,this.hasgroupitems=void 0,this.size=r.BIG,this.searchValue=void 0,this.selectedCounter=void 0,this.renderItemsList=[],this.focusedItemId=void 0,this.checkboxes=[],this.toggleComboBox=this.toggleComboBox.bind(this),this.closeFilterItems=this.closeFilterItems.bind(this)}componentWillLoad(){this.watchItems()}componentWillRender(){this.selectedCounter=this.itemsList.filter(e=>e.checked).length}componentDidRender(){const e=this.getAllCheckboxes();JSON.stringify(e)!==JSON.stringify(this.checkboxes)&&(this.checkboxes=e)}getItemId(e){return`combo-checkbox-${this.inputid}-${e.id}`}getCheckboxClass(){return`combo-item-checkbox-input-${this.inputid}`}getAllCheckboxes(){return Array.from(this.element.shadowRoot.querySelectorAll(`.${this.getCheckboxClass()} input:not([disabled])`))}getControlToListSize(){switch(this.size){case r.X_SMALL:return b.SMALL;case r.SMALL:return b.MEDIUM;default:return b.LARGE}}handleSelectArrowsNavigation(e,t){if(![l.ARROW_DOWN,l.ARROW_UP].includes(e.key)||!this.isopen)return;e.preventDefault(),e.stopPropagation();const o=this.element.shadowRoot.querySelector(`#${t}`);if(!o)return;const s=this.checkboxes;if(!s.length)return;const a=s.indexOf(o),c=0,d=s.length-1;let n=null;e.key===l.ARROW_DOWN?n=a===d?s[c]:s[a+1]:e.key===l.ARROW_UP&&(n=a===c?s[d]:s[a-1]),this.focusComboboxItem(n)}handleHeaderKeyboardEvent(e){e.key===l.SPACE&&e.preventDefault(),(e.key===l.ARROW_DOWN&&!this.isopen||e.key===l.ARROW_UP&&this.isopen)&&this.toggleComboBox()}handleCheckboxFocus(e){this.focusedItemId=e}focusComboboxItem(e){this.checkboxes.forEach(function(t){t.setAttribute("tabindex","-1")}),e.setAttribute("tabindex","0"),e.focus()}updateRenderItemsList(){this.searchValue?this.filterItems(this.searchValue):this.resetRenderItemsList()}resetRenderItemsList(){const e=[];this.itemsList.forEach(t=>{e.push(Object.assign({},t))}),this.renderItemsList=e}filterItems(e){if(!e)return this.closeFilterItems();this.resetRenderItemsList(),this.renderItemsList=this.renderItemsList.filter(t=>{const o=t.name.toUpperCase().indexOf(e.toUpperCase()),s=o+e.length,a=t.name.substring(0,o)+"<strong>"+t.name.substring(o,s)+"</strong>"+t.name.substring(s,t.name.length);return t.name=a,o>=0})}checkAll(e=!0){this.itemsList=this.itemsList.map(t=>Object.assign(Object.assign({},t),{checked:e})),this.resetRenderItemsList(),this.emitComboboxChange()}closeFilterItems(){this.searchValue="",this.resetRenderItemsList()}toggleComboBox(){this.isopen=!this.isopen}getComboboxA11yAttributes(){return{role:"combobox","aria-label":this.label,"aria-expanded":this.isopen?"true":"false","aria-activedescendant":this.isopen?this.focusedItemId:"","aria-controls":`${this.inputid}_list`}}renderHeader(){return i("div",{class:"header",onClick:()=>this.toggleComboBox(),onKeyDown:e=>{this.handleHeaderKeyboardEvent(e)},onKeyUp:e=>v(e,this.toggleComboBox),role:"button",tabindex:0,"aria-expanded":this.isopen?"true":"false"},i("p",{class:"body-3"},this.label,i("span",null,this.selectedCounter>0&&` (${this.selectedCounter})`)),i("z-icon",{name:"caret-down",class:this.size}))}renderContent(){if(this.isopen)return i("div",{class:"open-combo-data"},this.hassearch&&this.renderSearchInput(),this.hassearch?null:i("span",Object.assign({},this.getComboboxA11yAttributes())),i("div",{role:"listbox","aria-label":this.label,"aria-multiselectable":!0,id:`${this.inputid}_list`,"aria-owns":`${this.checkboxes.map(e=>e.id).join(" ")}`},this.hascheckall&&this.renderCheckAll(),this.renderItems()))}renderItems(){return i("div",{class:this.searchValue&&"search"},this.renderList(this.renderItemsList),this.searchValue&&this.renderCloseButton())}renderItem(e,t,o){return i("z-list-element",{id:e.id,htmlTabindex:null,dividerType:t!==o-1?x.ELEMENT:x.NONE,size:this.getControlToListSize()},i("z-input",{type:u.CHECKBOX,checked:e.checked,htmlid:this.getItemId(e),label:e.name,class:this.getCheckboxClass(),disabled:!e.checked&&this.maxcheckableitems&&this.selectedCounter>=this.maxcheckableitems,size:this.size===r.X_SMALL?r.SMALL:this.size,role:"option","aria-selected":e.checked?"true":"false",onKeyDown:s=>this.handleSelectArrowsNavigation(s,this.getItemId(e)),onInputCheck:s=>{this.itemsList=this.itemsList.map(a=>(e.id===a.id&&(a.checked=s.detail.checked),a)),this.updateRenderItemsList(),this.emitComboboxChange()},onInputFocus:s=>this.handleCheckboxFocus(s.detail.id)}))}renderList(e){if(e)return!e.length&&this.searchValue?this.renderNoSearchResults():this.hasgroupitems?this.renderGroups(e):i("ul",{role:"none"},e.map((t,o)=>this.renderItem(t,o,e.length)))}renderGroups(e){const t=e.reduce((s,a,c)=>{var d;const{category:n}=a,E=this.renderItem(a,c,e.length);return s[n]=(d=s[n])!==null&&d!==void 0?d:[],s[n].push(E),s},{}),o=Object.entries(t).map(([s,a])=>i("z-list-group",{"divider-type":x.ELEMENT},i("span",{class:"body-3-sb z-list-group-title",slot:"header-title"},s),a.map(c=>c)));return i("ul",{role:"none"},o)}renderNoSearchResults(){return i("ul",{role:"none"},i("z-myz-list-item",{id:"no-results",text:this.noresultslabel,listitemid:"no-results",icon:"multiply-circle",class:this.size}))}renderCloseButton(){return i("div",null,i("a",{onClick:()=>this.closeFilterItems(),onKeyUp:e=>v(e,this.closeFilterItems),role:"button",tabindex:0},this.closesearchtext))}renderSearchInput(){return i("z-input",Object.assign({htmlid:`${this.inputid}_search`,label:this.searchlabel,placeholder:this.searchplaceholder,htmltitle:this.searchtitle,type:this.inputType,value:this.searchValue,message:!1,size:this.size,"aria-autocomplete":"list"},this.getComboboxA11yAttributes(),{onKeyUp:e=>{e.key===l.ESC&&this.closeFilterItems()},onInputChange:e=>{this.searchValue=e.detail.value}}))}renderCheckAll(){if(this.searchValue)return;const e=`combo-checkbox-${this.inputid}-check-all`,t=this.selectedCounter===this.itemsList.length;return i("div",{class:"check-all-wrapper"},i("z-input",{type:u.CHECKBOX,checked:t,htmlid:e,class:this.getCheckboxClass(),label:t?this.uncheckalltext:this.checkalltext,disabled:this.maxcheckableitems&&this.maxcheckableitems<this.itemsList.length,size:this.size===r.X_SMALL?r.SMALL:this.size,role:"option","aria-selected":t?"true":"false",onKeyDown:o=>this.handleSelectArrowsNavigation(o,e),onInputCheck:o=>this.checkAll(o.detail.checked),onInputFocus:o=>this.handleCheckboxFocus(o.detail.id)}))}render(){return i("div",{key:"c9900517479063b92b491fa16393adfacdccfa9e","data-action":`combo-${this.inputid}`,class:{open:this.isopen,fixed:this.isfixed,disabled:this.disabled},id:this.inputid},this.renderHeader(),!this.disabled&&this.renderContent())}get element(){return this}static get watchers(){return{items:["watchItems"],searchValue:["watchSearchValue"],checkboxes:["watchCheckboxes"]}}static get style(){return V}};R(M,[1,"z-combobox",{inputid:[1],items:[1],label:[1],disabled:[516],hassearch:[4],searchlabel:[1],searchplaceholder:[1],searchtitle:[1],noresultslabel:[1],isopen:[1028],isfixed:[4],closesearchtext:[1],hascheckall:[4],checkalltext:[1],uncheckalltext:[1],maxcheckableitems:[2],hasgroupitems:[4],size:[8],searchValue:[32],selectedCounter:[32],renderItemsList:[32],focusedItemId:[32],checkboxes:[32]},void 0,{items:["watchItems"],searchValue:["watchSearchValue"],checkboxes:["watchCheckboxes"]}]);const g={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZCombobox",tagName:"z-combobox",customElement:!0,members:[{kind:"field",name:"inputid",type:"string",description:"input unique id",default:"`combo-${randomId()}`"},{kind:"field",name:"items",type:"string",description:"list items array"},{kind:"field",name:"label",type:"string",description:"label text"},{kind:"field",name:"disabled",type:"boolean",description:"the combobox is disabled",default:"false"},{kind:"field",name:"hassearch",type:"boolean",description:"show search input flag (optional)",default:"false"},{kind:"field",name:"searchlabel",type:"string",description:"search input label text (optional)"},{kind:"field",name:"searchplaceholder",type:"string",description:"search input placeholder text (optional)"},{kind:"field",name:"searchtitle",type:"string",description:"search input title text (optional)"},{kind:"field",name:"noresultslabel",type:"string",description:"no result text message",default:'"Nessun risultato"'},{kind:"field",name:"isopen",type:"boolean",description:"toggle combo list opening flag",default:"false"},{kind:"field",name:"isfixed",type:"boolean",description:"fixed style flag",default:"false"},{kind:"field",name:"closesearchtext",type:"string",description:"close combobox list text",default:'"Chiudi"'},{kind:"field",name:"hascheckall",type:"boolean",description:'show "check all" checkbox (optional)',default:"false"},{kind:"field",name:"checkalltext",type:"string",description:"check all label (optional)",default:'"Seleziona tutti"'},{kind:"field",name:"uncheckalltext",type:"string",description:"uncheck all label (optional)",default:'"Deseleziona tutti"'},{kind:"field",name:"maxcheckableitems",type:"number",description:"max number of checkable items (0 = unlimited)",default:"0"},{kind:"field",name:"hasgroupitems",type:"boolean",description:"group items by category"},{kind:"field",name:"size",type:"any",description:"Available sizes: `big`, `small` and `x-small`. Defaults to `big`.",default:"ControlSize.BIG"}],events:[{kind:"event",name:"comboboxChange",description:"Emitted when value is checked/unchecked. Returns id, items."}]}],exports:[{kind:"js",name:"ZCombobox",declaration:{name:"ZCombobox",module:"src/components/z-combobox/index.tsx"}},{kind:"custom-element-definition",name:"z-combobox",declaration:{name:"ZCombobox",module:"src/components/z-combobox/index.tsx"}}]}]};_({...f()||{},...g,modules:[...(f()||{}).modules||[],...g.modules]});const J={title:"ZCombobox",component:"z-combobox",argTypes:{items:{control:{type:"object"}},size:{control:{type:"inline-radio"},options:Object.values(r)}},args:{items:[{id:"ite_m_1",name:"First item",checked:!1,category:"Gruppo 1"},{id:"ite_m_2",name:"Second item",checked:!1,category:"Gruppo 1"},{id:"it_em_3",name:"Other item",checked:!1,category:"Gruppo 2"},{id:"it_e_m_5",name:"Last item",checked:!1,category:"Gruppo 3"}],checkalltext:"Select all",closesearchtext:"Close",disabled:!1,hascheckall:!0,hassearch:!0,inputid:"combo_1",isfixed:!0,isopen:!0,label:"Combobox Label",maxcheckableitems:4,hasgroupitems:!1,noresultslabel:"No items",searchlabel:"Search Label",searchplaceholder:"Search Placeholder",searchtitle:"Search Title",uncheckalltext:"Uncheck All",size:r.BIG},render:e=>$`<z-combobox
      checkalltext=${e.checkalltext}
      closesearchtext=${e.closesearchtext}
      disabled=${e.disabled}
      hascheckall=${e.hascheckall}
      hassearch=${e.hassearch}
      inputid=${e.inputid}
      isfixed=${e.isfixed}
      isopen=${e.isopen}
      .items=${e.items}
      label=${e.label}
      maxcheckableitems=${e.maxcheckableitems}
      hasgroupitems=${e.hasgroupitems}
      noresultslabel=${e.noresultslabel}
      searchlabel=${e.searchlabel}
      searchplaceholder=${e.searchplaceholder}
      searchtitle=${e.searchtitle}
      uncheckalltext=${e.uncheckalltext}
      size=${e.size}
    />`},h={},m={args:{hasgroupitems:!0}},p={args:{disabled:!0}};var k,y,C;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(C=(y=h.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var z,I,L;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    hasgroupitems: true
  }
} satisfies Story`,...(L=(I=m.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var w,S,A;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
} satisfies Story`,...(A=(S=p.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const Q=["Default","Groups","Disabled"];export{h as Default,p as Disabled,m as Groups,Q as __namedExportsOrder,J as default};
import{r as t,c as i,h as e,g as s}from"./p-cc3c02fe.js";import{I as o,e as r,i as a,g as n,l as h}from"./p-025f494e.js";import{r as d,a as l}from"./p-955da62e.js";import"./p-2c886e8b.js";const c=':host{display:block;font-family:var(--font-family-sans)}:host>div.fixed{position:relative}:host>div>.header{position:relative;z-index:10;display:-ms-flexbox;display:flex;min-height:42px;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:0 calc(var(--space-unit) * 1.5);border:var(--border-size-small) solid var(--color-surface04);margin:0;background-color:var(--color-input-field01);border-radius:var(--border-radius-small);cursor:pointer}:host([size="small"])>div>.header{min-height:34px;font-size:var(--font-size-2)}:host([size="x-small"])>div>.header{min-height:30px;font-size:var(--font-size-2)}:host([size="x-small"])>div>.header p.body-3{padding:calc(var(--space-unit) * 0.5) 0}:host>div>.header:hover{outline:var(--border-size-medium) solid var(--color-surface04);outline-offset:-2px}:host>div.open>div.header:focus:focus-visible{-webkit-box-shadow:none;box-shadow:none}:host>div>div.header:focus:focus-visible{-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary);outline:none}:host>div>.header>p.body-3{padding:var(--space-unit) 0;margin:0;color:var(--color-default-text)}:host>div>.header>p.body-3>span{font-weight:var(--font-sb)}:host>div>.header>z-icon{fill:var(--color-default-icon);-webkit-transform:rotate(360deg);transform:rotate(360deg);-webkit-transition:all 200ms linear;transition:all 200ms linear}:host>div>.header>z-icon.small,:host>div>.header>z-icon.x-small{--z-icon-width:16px;--z-icon-height:16px}:host>div.open>.header{border:var(--border-size-small) solid var(--color-primary01);border-radius:var(--border-radius-small) var(--border-radius-small) 0 0}:host>div.disabled{pointer-events:none}:host>div.disabled .header{border-color:var(--color-disabled01);fill:var(--color-disabled01)}:host>div.disabled .header>p.body-3{color:var(--color-disabled03)}:host>div.disabled .header>z-icon:last-child{fill:var(--color-disabled01)}:host>div.open>.header>z-icon{fill:var(--color-default-icon);-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-transition:all 200ms linear;transition:all 200ms linear}:host>div.open>div.open-combo-data{position:relative;z-index:12;padding:var(--space-unit) calc(var(--space-unit) * 2);border:var(--border-size-small) solid var(--gray200);border-top:0;background-color:var(--color-input-field01);border-radius:0}:host>div.open>div.open-combo-data>div>div{overflow:auto;max-height:235px;padding:0;scrollbar-color:var(--color-primary01) transparent}:host>div.open>div.open-combo-data>z-input{width:100%;margin-bottom:calc(var(--space-unit) * 2)}:host>div.open>div.open-combo-data>div>div>ul{max-height:235px;padding:0 3px;margin:0}::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01)}:host>div.open>z-input{position:relative;z-index:1;width:238px;margin:0 calc(var(--space-unit) * 2);color:var(--color-primary01)}:host>div.open>div.open-combo-data>div>div.search{overflow:hidden;max-height:auto;margin-top:0;-webkit-box-shadow:1px 1px 4px 2px rgb(217 222 227 / 50%);box-shadow:1px 1px 4px 2px rgb(217 222 227 / 50%)}:host>div.open>div.open-combo-data>div>div.search>ul{overflow:auto;max-height:180px;padding:var(--space-unit) calc(var(--space-unit) * 2);scrollbar-color:var(--color-primary01) transparent}:host>div.open>div.open-combo-data>div>div.search>div{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}:host>div.open>div.open-combo-data>div>div.search>div>a{display:inline-block;height:44px;color:var(--color-primary01);cursor:pointer;font-size:14px;font-weight:var(--font-sb);line-height:44px;text-align:center;text-transform:uppercase}:host>div.open>div.open-combo-data>div>div.check-all-wrapper{padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 0.5);border-bottom:var(--border-size-small) solid var(--gray800);margin-bottom:var(--space-unit);text-align:left}:host([size="small"])>div.open>div.open-combo-data>div>div.check-all-wrapper{padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 0.5)}:host([size="x-small"])>div.open>div.open-combo-data>div>div.check-all-wrapper{padding:var(--space-unit) calc(var(--space-unit) * 0.5)}';const p=c;const u=class{watchItems(){this.itemsList=typeof this.items==="string"?JSON.parse(this.items):this.items;this.selectedCounter=this.itemsList.filter((t=>t.checked)).length;this.updateRenderItemsList()}watchSearchValue(){this.filterItems(this.searchValue)}watchCheckboxes(){this.checkboxes.forEach(((t,i)=>t.setAttribute("tabindex",i===0?"0":"-1")))}emitComboboxChange(){this.comboboxChange.emit({id:this.inputid,items:this.itemsList})}constructor(e){t(this,e);this.comboboxChange=i(this,"comboboxChange",7);this.itemsList=[];this.inputType=o.TEXT;this.inputid=`combo-${d()}`;this.items=undefined;this.label=undefined;this.disabled=false;this.hassearch=false;this.searchlabel=undefined;this.searchplaceholder=undefined;this.searchtitle=undefined;this.noresultslabel="Nessun risultato";this.isopen=false;this.isfixed=false;this.closesearchtext="Chiudi";this.hascheckall=false;this.checkalltext="Seleziona tutti";this.uncheckalltext="Deseleziona tutti";this.maxcheckableitems=0;this.hasgroupitems=undefined;this.size=r.BIG;this.searchValue=undefined;this.selectedCounter=undefined;this.renderItemsList=[];this.focusedItemId=undefined;this.checkboxes=[];this.toggleComboBox=this.toggleComboBox.bind(this);this.closeFilterItems=this.closeFilterItems.bind(this)}componentWillLoad(){this.watchItems()}componentWillRender(){this.selectedCounter=this.itemsList.filter((t=>t.checked)).length}componentDidRender(){const t=this.getAllCheckboxes();if(JSON.stringify(t)!==JSON.stringify(this.checkboxes)){this.checkboxes=t}}getItemId(t){return`combo-checkbox-${this.inputid}-${t.id}`}getCheckboxClass(){return`combo-item-checkbox-input-${this.inputid}`}getAllCheckboxes(){return Array.from(this.element.shadowRoot.querySelectorAll(`.${this.getCheckboxClass()} input:not([disabled])`))}getControlToListSize(){switch(this.size){case r.X_SMALL:return a.SMALL;case r.SMALL:return a.MEDIUM;default:return a.LARGE}}handleSelectArrowsNavigation(t,i){if(![n.ARROW_DOWN,n.ARROW_UP].includes(t.key)||!this.isopen){return}t.preventDefault();t.stopPropagation();const e=this.element.shadowRoot.querySelector(`#${i}`);if(!e){return}const s=this.checkboxes;if(!s.length){return}const o=s.indexOf(e);const r=0;const a=s.length-1;let h=null;if(t.key===n.ARROW_DOWN){h=o===a?s[r]:s[o+1]}else if(t.key===n.ARROW_UP){h=o===r?s[a]:s[o-1]}this.focusComboboxItem(h)}handleHeaderKeyboardEvent(t){if(t.key===n.SPACE){t.preventDefault()}if(t.key===n.ARROW_DOWN&&!this.isopen||t.key===n.ARROW_UP&&this.isopen){this.toggleComboBox()}}handleCheckboxFocus(t){this.focusedItemId=t}focusComboboxItem(t){this.checkboxes.forEach((function(t){t.setAttribute("tabindex","-1")}));t.setAttribute("tabindex","0");t.focus()}updateRenderItemsList(){if(this.searchValue){this.filterItems(this.searchValue)}else{this.resetRenderItemsList()}}resetRenderItemsList(){const t=[];this.itemsList.forEach((i=>{t.push(Object.assign({},i))}));this.renderItemsList=t}filterItems(t){if(!t){return this.closeFilterItems()}this.resetRenderItemsList();this.renderItemsList=this.renderItemsList.filter((i=>{const e=i.name.toUpperCase().indexOf(t.toUpperCase());const s=e+t.length;const o=i.name.substring(0,e)+"<strong>"+i.name.substring(e,s)+"</strong>"+i.name.substring(s,i.name.length);i.name=o;return e>=0}))}checkAll(t=true){this.itemsList=this.itemsList.map((i=>Object.assign(Object.assign({},i),{checked:t})));this.resetRenderItemsList();this.emitComboboxChange()}closeFilterItems(){this.searchValue="";this.resetRenderItemsList()}toggleComboBox(){this.isopen=!this.isopen}getComboboxA11yAttributes(){return{role:"combobox","aria-label":this.label,"aria-expanded":this.isopen?"true":"false","aria-activedescendant":this.isopen?this.focusedItemId:"","aria-controls":`${this.inputid}_list`}}renderHeader(){return e("div",{class:"header",onClick:()=>this.toggleComboBox(),onKeyDown:t=>{this.handleHeaderKeyboardEvent(t)},onKeyUp:t=>l(t,this.toggleComboBox),role:"button",tabindex:0,"aria-expanded":this.isopen?"true":"false"},e("p",{class:"body-3"},this.label,e("span",null,this.selectedCounter>0&&` (${this.selectedCounter})`)),e("z-icon",{name:"caret-down",class:this.size}))}renderContent(){if(!this.isopen){return}return e("div",{class:"open-combo-data"},this.hassearch&&this.renderSearchInput(),!this.hassearch?e("span",Object.assign({},this.getComboboxA11yAttributes())):null,e("div",{role:"listbox","aria-label":this.label,"aria-multiselectable":true,id:`${this.inputid}_list`,"aria-owns":`${this.checkboxes.map((t=>t.id)).join(" ")}`},this.hascheckall&&this.renderCheckAll(),this.renderItems()))}renderItems(){return e("div",{class:this.searchValue&&"search"},this.renderList(this.renderItemsList),this.searchValue&&this.renderCloseButton())}renderItem(t,i,s){return e("z-list-element",{id:t.id,htmlTabindex:null,dividerType:i!==s-1?h.ELEMENT:h.NONE,size:this.getControlToListSize()},e("z-input",{type:o.CHECKBOX,checked:t.checked,htmlid:this.getItemId(t),label:t.name,class:this.getCheckboxClass(),disabled:!t.checked&&this.maxcheckableitems&&this.selectedCounter>=this.maxcheckableitems,size:this.size===r.X_SMALL?r.SMALL:this.size,role:"option","aria-selected":t.checked?"true":"false",onKeyDown:i=>this.handleSelectArrowsNavigation(i,this.getItemId(t)),onInputCheck:i=>{this.itemsList=this.itemsList.map((e=>{if(t.id===e.id){e.checked=i.detail.checked}return e}));this.updateRenderItemsList();this.emitComboboxChange()},onInputFocus:t=>this.handleCheckboxFocus(t.detail.id)}))}renderList(t){if(!t){return}if(!t.length&&this.searchValue){return this.renderNoSearchResults()}if(this.hasgroupitems){return this.renderGroups(t)}return e("ul",{role:"none"},t.map(((i,e)=>this.renderItem(i,e,t.length))))}renderGroups(t){const i=t.reduce(((i,e,s)=>{var o;const{category:r}=e;const a=this.renderItem(e,s,t.length);i[r]=(o=i[r])!==null&&o!==void 0?o:[];i[r].push(a);return i}),{});const s=Object.entries(i).map((([t,i])=>e("z-list-group",{"divider-type":h.ELEMENT},e("span",{class:"body-3-sb z-list-group-title",slot:"header-title"},t),i.map((t=>t)))));return e("ul",{role:"none"},s)}renderNoSearchResults(){return e("ul",{role:"none"},e("z-myz-list-item",{id:"no-results",text:this.noresultslabel,listitemid:"no-results",icon:"multiply-circle",class:this.size}))}renderCloseButton(){return e("div",null,e("a",{onClick:()=>this.closeFilterItems(),onKeyUp:t=>l(t,this.closeFilterItems),role:"button",tabindex:0},this.closesearchtext))}renderSearchInput(){return e("z-input",Object.assign({htmlid:`${this.inputid}_search`,label:this.searchlabel,placeholder:this.searchplaceholder,htmltitle:this.searchtitle,type:this.inputType,value:this.searchValue,message:false,size:this.size,"aria-autocomplete":"list"},this.getComboboxA11yAttributes(),{onKeyUp:t=>{if(t.key===n.ESC){this.closeFilterItems()}},onInputChange:t=>{this.searchValue=t.detail.value}}))}renderCheckAll(){if(this.searchValue){return}const t=`combo-checkbox-${this.inputid}-check-all`;const i=this.selectedCounter===this.itemsList.length;return e("div",{class:"check-all-wrapper"},e("z-input",{type:o.CHECKBOX,checked:i,htmlid:t,class:this.getCheckboxClass(),label:i?this.uncheckalltext:this.checkalltext,disabled:this.maxcheckableitems&&this.maxcheckableitems<this.itemsList.length,size:this.size===r.X_SMALL?r.SMALL:this.size,role:"option","aria-selected":i?"true":"false",onKeyDown:i=>this.handleSelectArrowsNavigation(i,t),onInputCheck:t=>this.checkAll(t.detail.checked),onInputFocus:t=>this.handleCheckboxFocus(t.detail.id)}))}render(){return e("div",{key:"118ffd4229b6b7f060d9b28ace7d5a59796620b9","data-action":`combo-${this.inputid}`,class:{open:this.isopen,fixed:this.isfixed,disabled:this.disabled},id:this.inputid},this.renderHeader(),!this.disabled&&this.renderContent())}get element(){return s(this)}static get watchers(){return{items:["watchItems"],searchValue:["watchSearchValue"],checkboxes:["watchCheckboxes"]}}};u.style=p;export{u as z_combobox};
//# sourceMappingURL=p-2bf1edba.entry.js.map
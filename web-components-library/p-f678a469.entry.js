import{r as t,h as o,g as e}from"./p-d17ebc2f.js";import{L as i}from"./p-c9d57d05.js";const n=class{constructor(o){t(this,o),this.opened=!1,this.customContent=!1,this.isOpen=!1,this.allowTooltipAuthors=!1}handleToggle(){if(this.isOpen=!this.isOpen,this.isOpen){const t=this.getFirstListItem();t&&requestAnimationFrame((()=>{t.focus()}))}}getTitleAuthors(){return this.allowTooltipAuthors?this.autori:""}componentWillLoad(){this.opened&&(this.isOpen=!0)}elementsEllipsis(){this.allowTooltipAuthors=!!this.elementAuthorsHasEllipsis()}elementAuthorsHasEllipsis(){return this.ellipsisAuthors.offsetWidth<this.ellipsisAuthors.scrollWidth}retrieveClass(){return{isopen:this.isOpen,real:this.cardtype===i.REAL,trial:this.cardtype===i.TRIAL,temp:this.cardtype===i.TEMP,"custom-content":this.customContent}}footerTransitionHandler(t){["visibility","height"].includes(t.propertyName)&&this.elementsEllipsis()}getFirstListItem(){return this.host.querySelector("[slot=list] > li a")}render(){return o("div",{class:Object.assign(Object.assign({},this.retrieveClass()),{wrapper:!0})},o("footer",{class:this.retrieveClass(),onTransitionEnd:t=>this.footerTransitionHandler(t)},o("span",{class:"toggle"},o("slot",{name:"toggle"})),this.titolo&&o("p",{class:{"custom-content":this.customContent}},this.titolo),o("div",{class:{content:!0,"custom-content":this.customContent}},o("div",null,o("p",{class:"authors",ref:t=>this.ellipsisAuthors=t},o("span",{title:this.getTitleAuthors()},o("span",{"aria-description":"Autori",class:"bold"},this.autori))),o("p",{class:"year-isbn"},o("span",{class:"isbn"},o("span",null,o("span",{"aria-description":"ISBN edizione cartacea",class:"bold"},this.isbn)," ","(ed. cartacea)")))),o("div",{class:"slot-handler "+(this.isOpen?"visible":"hidden")},o("slot",{name:"list"})))),this.customContent&&o("slot",{name:"content"}))}get host(){return e(this)}};n.style='footer{position:relative;z-index:5;top:0;width:auto;height:calc(var(--space-unit) * 6);padding:0;border-top:var(--border-size-medium) solid var(--color-surface03);margin:0;background-color:var(--color-surface01);border-radius:0 0 var(--border-radius) var(--border-radius);color:var(--color-surface05);font-family:var(--font-family-sans);font-weight:var(--font-rg);transition:height 500ms ease-in-out, top 500ms ease-in-out}footer.real,footer.trial,footer.temp{border-top:var(--border-size-medium) solid var(--accent)}footer .bold{font-family:var(--font-family-sans);font-weight:var(--font-sb)}footer>p{overflow:hidden;height:40px;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 2) var(--space-unit) calc(var(--space-unit) * 2);margin:0;background-color:var(--color-surface01);font-family:var(--font-family-sans);font-size:16px;font-weight:var(--font-rg);line-height:22px;transition:all 200ms linear}footer.isopen>p{background-color:var(--bg-neutral-200);font-size:14px;font-weight:var(--font-sb);transition:all 200ms linear}footer.isopen.real>p,footer.isopen.trial>p,footer.isopen.temp>p{background-color:var(--accent)}footer .visible{display:block}footer .hidden{display:none}footer>div.content{overflow:hidden;height:60px}footer>div.content>div:not(.slot-handler){padding:var(--space-unit) calc(var(--space-unit) * 2)}footer>div.content>div>p{overflow:hidden;height:20px;padding:0;margin:0;font-size:14px;line-height:20px;text-overflow:ellipsis;white-space:nowrap}footer>div.content>div>p.year-isbn{display:flex;flex-direction:row;justify-content:space-between;padding-top:var(--space-unit)}footer>div.content>div>p.year-isbn>span.isbn{overflow:hidden;text-overflow:ellipsis}footer.isopen>div.content>div:not(.slot-handler){height:68px}footer.isopen>div.content>div>p.authors{height:40px;text-overflow:initial;white-space:initial}footer.isopen>div.content>div>p.year-isbn{height:50px;flex-direction:column;padding-left:0}footer.isopen>div.content>div>p.year-isbn>span.isbn{display:inline-grid;padding-left:0}footer.isopen{top:-212px;height:295px;transition:height 500ms ease-in-out, top 500ms ease-in-out}footer.isopen.custom-content{top:-292px}footer.isopen>div.content{height:280px;transition:height 500ms ease-in-out, top 500ms ease-in-out}footer.isopen.custom-content>div.content{height:230px}.toggle{position:absolute;z-index:10;top:-24px;left:16px}.faded{opacity:0.3;pointer-events:none}footer>p.custom-content,footer .content.custom-content{display:none}footer.isopen>p.custom-content,footer.isopen .content.custom-content{display:block}div.wrapper{position:relative;height:100%}div.wrapper ::slotted([slot="content"]){position:absolute;z-index:10;top:calc(var(--space-unit) * 2);display:block;width:100%;height:112px;box-sizing:border-box;padding:0 calc(var(--space-unit) * 2);border-top:var(--border-size-medium) solid transparent;background:var(--color-white)}div.wrapper.isopen ::slotted([slot="content"]){top:0;bottom:0;height:128px;padding:calc(var(--space-unit) * 2);border-color:var(--accent)}';export{n as z_myz_card_footer}
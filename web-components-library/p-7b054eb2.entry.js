import{r as t,h as i,H as s,g as r}from"./p-98268a57.js";import{k as e,o,D as a}from"./p-d79f69f2.js";const h=class{constructor(i){t(this,i),this.size=e.medium,this.dividerType=o.none,this.dividerSize=a.small,this.dividerColor="gray200"}componentDidLoad(){const t=this.host.children;for(let i=0;i<t.length;i++)t.length-1>i&&(t[i].setAttribute("divider-type",this.dividerType),t[i].setAttribute("divider-size",this.dividerSize),t[i].setAttribute("divider-color",this.dividerColor)),t[i].setAttribute("size",this.size)}componentWillLoad(){this.hasHeader=!!this.host.querySelector('[slot="header-title"]')}render(){return i(s,{role:"group"},i("div",{class:{"z-list-group-header-container":!0,"has-header":this.hasHeader}},i("slot",{name:"header-title"}),this.dividerType===o.header&&i("z-divider",{color:this.dividerColor,size:this.dividerSize})),i("slot",null))}get host(){return r(this)}};h.style=":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.z-list-group-header-container{color:var(--gray700);font-size:var(--font-size-2);font-weight:var(--font-sb) !important;line-height:1.4;letter-spacing:0.16px}:host>.z-list-group-header-container.has-header{padding-top:var(--space-unit);padding-bottom:var(--space-unit)}:host>.z-list-group-header-container.has-header>z-divider{margin-top:var(--space-unit)}";export{h as z_list_group}
import{r as e,c as t,h as i}from"./p-98268a57.js";import{P as o}from"./p-d79f69f2.js";const n=class{constructor(i){e(this,i),this.clickContextualMenu=t(this,"clickContextualMenu",7),this.color="color-primary01",this.popoverPosition=o.bottom_right}componentWillRender(){this.elements&&(this.jsonElements=JSON.parse(this.elements.replace(/&quot;/g,'"')))}componentDidLoad(){this.popover.bindTo=this.triggerButton}showIcon(){return!this.jsonElements.some((e=>!e.icon))}togglePopover(){this.popover.open||(this.popover.open=!0)}render(){var e,t;return[i("button",{ref:e=>this.triggerButton=e,"aria-label":(null===(e=this.popover)||void 0===e?void 0:e.open)?"chiudi menu contestuale":"apri menu contestuale",onClick:()=>this.togglePopover()},i("z-icon",{name:"contextual-menu",fill:this.color})),i("z-popover",{ref:e=>this.popover=e,position:this.popoverPosition},i("div",{class:"popover-content-container"},i("z-list",null,i("z-list-group",{"divider-type":"element"},null===(t=this.jsonElements)||void 0===t?void 0:t.map(((e,t)=>i("z-list-element",{clickable:!e.disabled,class:"my-z-list-element","align-button":"left","expandable-style":"accordion",color:e.disabled?"color-disabled03":this.color,isContextualMenu:!0,listElementId:t,onClickItem:e=>this.clickContextualMenu.emit(e.detail)},i("div",{class:e.disabled?"disabled-element-container":"element-container"},this.showIcon()&&i("div",{class:"element-icon"},i("z-icon",{name:e.icon,width:16,height:16})),i("div",{class:"element-text"},i("span",null,e.text))))))))))]}};n.style=":host{position:relative;display:flex;justify-content:center;align-items:center;font-family:var(--font-family-sans);font-weight:var(--font-rg)}button{width:100%;height:100%;border:none;background:transparent;cursor:pointer;padding:0}z-popover{overflow:hidden}.popover-content-container{position:relative;min-width:112px;max-width:280px;white-space:nowrap;background-color:var(--color-surface02);box-shadow:var(--shadow-2)}.element-container:hover{color:var(--color-hover-primary);fill:var(--color-hover-primary)}.element-text{overflow:hidden;text-overflow:ellipsis;font-size:14px}.element-container,.disabled-element-container{display:flex;align-items:center;gap:var(--space-unit);fill:var(--color-disabled03);padding:calc(var(--space-unit) / 2) var(--space-unit);min-height:calc(var(--space-unit) * 4);box-sizing:border-box}.element-container{fill:var(--color-primary01)}.element-icon{display:flex}";export{n as z_contextual_menu}
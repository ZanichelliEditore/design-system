import{r as t,h as s,H as i}from"./p-98268a57.js";import{A as a}from"./p-d79f69f2.js";const e=class{constructor(s){t(this,s),this.size=a.medium,this.textColor="text-white",this.backgroundColor="bg-grey-700",this.text||this.image||console.warn("z-avatar must contain at least one prop between text and image")}getTextSize(){return this.size===a.small?"5":this.size===a.medium?"4":this.size===a.large?"2":void 0}render(){return s(i,{class:{[this.size]:!0,[`body-${this.getTextSize()}-sb`]:!0},style:{color:`var(--${this.textColor})`,backgroundColor:`var(--${this.backgroundColor})`}},this.text&&!this.image&&s("span",null,this.text.substring(0,2)),this.image&&s("img",{src:this.image,onError:()=>this.image=""}))}};e.style=":host{font-family:var(--font-family-sans);background-color:var(--bg-grey-700);border-radius:50%;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;text-transform:uppercase}:host(.small),:host(.small)>img{height:calc(var(--space-unit) * 3);width:calc(var(--space-unit) * 3)}:host(.medium),:host(.medium)>img{height:calc(var(--space-unit) * 4);width:calc(var(--space-unit) * 4)}:host(.large),:host(.large)>img{height:calc(var(--space-unit) * 5);width:calc(var(--space-unit) * 5)}:host>img{object-fit:cover}";export{e as z_avatar}
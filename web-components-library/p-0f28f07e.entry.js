import{r as t,h as e,H as i,g as o}from"./p-d17ebc2f.js";import{F as s,D as r}from"./p-9ecf936d.js";const l=class{constructor(e){t(this,e),this.dividerPosition=s.BEFORE,this.uppercase=!0}componentWillRender(){this.hasSecondaryTitle=!!this.host.querySelector("[slot=secondary-title]")}render(){return e(i,null,e("slot",{name:"secondary-title"}),!this.hasSecondaryTitle&&this.dividerPosition===s.BEFORE&&e("z-divider",{size:r.LARGE,color:"z-section-title--divider-color"}),e("slot",{name:"primary-title"}),!this.hasSecondaryTitle&&this.dividerPosition===s.AFTER&&e("z-divider",{size:r.LARGE,color:"z-section-title--divider-color"}))}get host(){return o(this)}};l.style=':host{--z-section-title--divider-color:var(--red500);display:flex;width:fit-content;flex-direction:column;align-items:flex-start;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host,:host ::slotted(*){box-sizing:border-box}::slotted(*){margin:0}::slotted([slot="secondary-title"]){padding-bottom:calc(var(--space-unit) / 2);border-bottom:var(--border-size-large) solid var(--z-section-title--divider-color);font-size:var(--font-size-3);line-height:1.5rem;text-transform:uppercase}::slotted([slot="primary-title"]){font-size:var(--font-size-6);line-height:2rem}:host([uppercase]:not([uppercase="false"])) ::slotted([slot="primary-title"]){text-transform:uppercase}@media (min-width: 1152px){::slotted([slot="primary-title"]){font-size:var(--font-size-7);line-height:2.25rem}}';export{l as z_section_title}
import { r as registerInstance, c as createEvent, h, H as Host } from './index-DafJ7_Il.js';

const stylesCss = () => `:host,*,::slotted(*){box-sizing:border-box}:host{--z-info-box--border-color:unset;--z-info-box--left-icon-color:var(--z-info-box--border-color, var(--color-primary01-icon));--z-info-box--background-color:var(--color-primary03);display:flex;flex-direction:column;padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 2);border:var(--border-size-medium) solid var(--z-info-box--border-color, transparent);background:var(--z-info-box--background-color);border-radius:var(--border-radius);font-family:var(--font-family-sans);font-weight:var(--font-rg);gap:calc(var(--space-unit) * 2)}.main-content{display:flex;align-items:flex-start}.main-content .left-icon,.close-button{display:flex;height:1.25rem;align-items:center}.main-content .left-icon z-icon{--z-icon-width:1rem;--z-icon-height:1rem;fill:var(--z-info-box--left-icon-color)}::slotted([slot="content"]){color:var(--color-default-text);font-size:var(--font-size-2);line-height:1.25rem}.main-content .left-icon+::slotted([slot="content"]){margin-left:var(--space-unit)}:host([isclosable]) ::slotted([slot="content"]){margin-right:calc(var(--space-unit) * 2)}.close-button{padding:0;border:none;margin:0;margin-left:auto;background:none;cursor:pointer}.close-button z-icon{fill:var(--color-primary01-icon)}`;

const ZInfoBox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.infoBoxClose = createEvent(this, "infoBoxClose", 7);
        /** render close icon */
        this.isclosable = true;
        /** Aria label for the close button */
        this.closeButtonAriaLabel = "Chiudi pannello informazioni";
    }
    emitInfoBoxClose() {
        this.infoBoxClose.emit({ boxid: this.boxid });
    }
    render() {
        return (h(Host, { key: '4cd2008ec9cd85fe976cca7f4e1d89c53b5dc538', id: this.boxid }, h("div", { key: 'aac0bd67dedd12740d3b14af25b17d90b96341a2', class: "main-content" }, this.leftIcon && (h("div", { key: '2df226b5e1569ee41e282fa9d4d69df82d25278f', class: "left-icon" }, h("z-icon", { key: '421f5d58e5db25f17f2b5402138899ccc36d81cf', name: this.leftIcon }))), h("slot", { key: '75eca851c2ae4febe1dbd1498333947e591a2e85', name: "content" }), this.isclosable && (h("button", { key: '3b88257dd4ad70c58ef7c04628dc644b87c69659', class: "close-button", "aria-label": this.closeButtonAriaLabel, onClick: () => this.emitInfoBoxClose() }, h("z-icon", { key: 'ed577a2e5ec651ee872b2872f81153d5ec73700f', name: "multiply" })))), h("slot", { key: '631ba8f5dcf905ca4225c3f94f6427d42be87551', name: "additional-content" })));
    }
};
ZInfoBox.style = stylesCss();

export { ZInfoBox as z_info_box };

import { r as registerInstance, c as createEvent, h, H as Host } from './index-SFwvdS4t.js';

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
        return (h(Host, { key: '941ce7f2fe8dd4273ebd60b5d3ad6fc41153975c', id: this.boxid }, h("div", { key: 'b2ab0c1220b7d9a11b719f5c261b256e79db7f5e', class: "main-content" }, this.leftIcon && (h("div", { key: '0ab9812f4ab3d060b0b19ec7a8899750ab9c2152', class: "left-icon" }, h("z-icon", { key: 'fbd9db893abba33a23a928625789ce5bb8aad9c3', name: this.leftIcon }))), h("slot", { key: 'c7dcb26d5ed88d1d961704e601f4c4b862757d76', name: "content" }), this.isclosable && (h("button", { key: 'e99216af6d38fea2c4e19e57036c6e88ab650502', class: "close-button", "aria-label": this.closeButtonAriaLabel, onClick: () => this.emitInfoBoxClose() }, h("z-icon", { key: '24501ab7c3c747aa093e7374c8f7af1cd6e98c19', name: "multiply" })))), h("slot", { key: 'fa0efb767218a7a26c24cf54f4bfb011c08ccde7', name: "additional-content" })));
    }
};
ZInfoBox.style = stylesCss();

export { ZInfoBox as z_info_box };

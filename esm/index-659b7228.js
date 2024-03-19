import { r as registerInstance, h, a as Host, g as getElement } from './index-f16bc2ca.js';
import { B as ButtonVariant, d as ButtonSize } from './index-2255c6c8.js';

const stylesCss = ":host{display:table-cell;border-bottom:var(--border-size-small) solid var(--color-surface03);background-color:var(--color-white);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.button-container{display:none}:host:hover>.button-container{display:initial}.button-container{position:absolute;z-index:5;top:8px;right:8px}.button-content{position:relative}.contextual-menu-container{position:absolute;top:calc(100% - var(--space-unit));right:0;display:none}.button-container.visible,.contextual-menu-container.visible{display:initial}:host([padding=\"x-small\"]){padding:calc(var(--space-unit) * 0.5)}:host([padding=\"small\"]){padding:calc(var(--space-unit))}:host([padding=\"medium\"]){padding:calc(var(--space-unit) * 2)}:host([padding=\"large\"]){padding:calc(var(--space-unit) * 2.5)}:host([padding=\"special\"]){padding:0}";
const ZTableCellStyle0 = stylesCss;

const ZTableCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.showButton = undefined;
        this.padding = "medium";
        this.isMenuOpened = false;
    }
    handleMenu() {
        this.isMenuOpened = !this.isMenuOpened;
    }
    componentWillRender() {
        this.host.setAttribute("role", "cell");
    }
    render() {
        return (h(Host, { key: 'a55491d43ef04929fdd38073b589d12d5d373ca4' }, this.showButton && (h("div", { class: {
                "button-container": true,
                "visible": this.isMenuOpened,
            } }, h("div", { class: "button-content" }, h("z-button", { icon: "contextual-menu", variant: ButtonVariant.TERTIARY, size: ButtonSize.X_SMALL, onClick: () => this.handleMenu() }), h("div", { class: {
                "contextual-menu-container": true,
                "visible": this.isMenuOpened,
            } }, h("slot", { name: "contextual-menu" }))))), h("slot", { key: 'd8d5dab5bac78f43151d50d22df6cfbefdc81694' })));
    }
    get host() { return getElement(this); }
};
ZTableCell.style = ZTableCellStyle0;

export { ZTableCell as Z };

//# sourceMappingURL=index-659b7228.js.map
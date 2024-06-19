import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { t as ToastNotificationPosition } from './index2.js';

const stylesCss = ":host{position:fixed;z-index:10000;display:flex;flex-flow:column nowrap;margin-top:calc(var(--space-unit) * 2);margin-bottom:calc(var(--space-unit) * 2);font-family:var(--font-family-sans);font-weight:var(--font-rg)}::slotted(z-toast-notification){width:100vw}::slotted(:not(:last-child)){margin-bottom:calc(var(--space-unit) * 1)}:host([position=\"bottom-centre\"]),:host([position=\"bottom-right\"]),:host([position=\"bottom-left\"]){bottom:0;align-items:flex-end;justify-content:flex-end}:host([position=\"top-left\"]),:host([position=\"top-right\"]),:host([position=\"top-centre\"]){top:0;align-items:flex-start;justify-content:flex-start}@media only screen and (min-width: 768px){:host{margin:calc(var(--space-unit) * 3)}:host([position=\"top-centre\"]){top:0;left:50%;align-items:center;justify-content:flex-start;transform:translateX(-50%)}:host([position=\"top-left\"]){top:0;left:0;align-items:flex-start;justify-content:flex-start}:host([position=\"top-right\"]){top:0;right:0;align-items:flex-end;justify-content:flex-start}:host([position=\"bottom-centre\"]){bottom:0;left:50%;align-items:center;justify-content:flex-end;transform:translateX(-50%)}:host([position=\"bottom-right\"]){right:0;bottom:0;align-items:flex-end;justify-content:flex-end}:host([position=\"bottom-left\"]){bottom:0;left:0;align-items:flex-start;justify-content:flex-end}::slotted(z-toast-notification){width:50vw}}@media only screen and (min-width: 1366px){:host{margin:calc(var(--space-unit) * 4)}::slotted(z-toast-notification){width:33vw}}";
const ZToastNotificationListStyle0 = stylesCss;

const ZToastNotificationList$1 = /*@__PURE__*/ proxyCustomElement(class ZToastNotificationList extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.position = ToastNotificationPosition.TOP_RIGHT;
        this.newestontop = true;
    }
    watchPropNewestontop(newValue) {
        this.hostElement.append(...this.notificationArray.reverse());
        if (newValue) {
            this.hostElement.shadowRoot.addEventListener("slotchange", this.slotChangeHandler);
        }
        else {
            this.hostElement.shadowRoot.removeEventListener("slotchange", this.slotChangeHandler);
        }
    }
    componentWillLoad() {
        if (this.newestontop) {
            this.handleNewestOnTop();
        }
    }
    handleNewestOnTop() {
        this.notificationArray = Array.from(this.hostElement.children);
        this.hostElement.append(...this.notificationArray.reverse());
        this.hostElement.shadowRoot.addEventListener("slotchange", this.slotChangeHandler.bind(this));
    }
    slotChangeHandler() {
        const difference = Array.from(this.hostElement.children).filter((elem) => !this.notificationArray.includes(elem));
        if (difference) {
            difference.forEach((elem) => {
                this.notificationArray.push(elem);
                const newElem = elem;
                elem.remove();
                this.hostElement.prepend(newElem);
            });
        }
    }
    render() {
        return h("slot", { key: 'ead27e0dd8742e6008aa4fc6ffa4129cae868af8', name: "toasts" });
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "newestontop": ["watchPropNewestontop"]
    }; }
    static get style() { return ZToastNotificationListStyle0; }
}, [1, "z-toast-notification-list", {
        "position": [513],
        "newestontop": [4]
    }, undefined, {
        "newestontop": ["watchPropNewestontop"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-toast-notification-list"];
    components.forEach(tagName => { switch (tagName) {
        case "z-toast-notification-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZToastNotificationList$1);
            }
            break;
    } });
}

const ZToastNotificationList = ZToastNotificationList$1;
const defineCustomElement = defineCustomElement$1;

export { ZToastNotificationList, defineCustomElement };

//# sourceMappingURL=z-toast-notification-list.js.map
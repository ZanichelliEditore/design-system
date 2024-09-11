import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './index9.js';

const stylesCss = ".sc-z-tag-h{--z-icon-width:14px;--z-icon-height:14px;display:flex;width:fit-content;max-width:inherit;height:fit-content;max-height:inherit;align-items:flex-start;padding:calc(var(--space-unit) / 2);background-color:var(--z-tag-bg, var(--color-hover-primary));border-radius:var(--border-radius);color:var(--z-tag-text-color, var(--color-text-inverse));fill:currentcolor;font-family:var(--font-family-sans);font-size:var(--font-size-1);font-weight:var(--font-sb);letter-spacing:0.32px;line-height:14px;text-transform:uppercase}.expandable.sc-z-tag-h>z-icon.sc-z-tag{transition:margin-right 0.3s ease-out}.sc-z-tag-h:not(.expandable)>z-icon.sc-z-tag,.expandable.sc-z-tag-h:hover>z-icon.sc-z-tag{margin-right:var(--space-unit);transition:margin-right 0.3s ease-out 0s}.sc-z-tag-h>z-icon.sc-z-tag:has(+div.sc-z-tag:empty){margin-right:0}.expandable.sc-z-tag-h>div.sc-z-tag{overflow:hidden;max-width:0;max-height:0}.expandable.sc-z-tag-h:hover>div.sc-z-tag{max-width:100%;max-height:100%}";
const ZTagStyle0 = stylesCss;

const ZTag = /*@__PURE__*/ proxyCustomElement(class ZTag extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.icon = undefined;
        this.expandable = undefined;
    }
    render() {
        return (h(Host, { key: 'dab9210f7c3cfc75d0c009f4bc8a1841bdbc371b', class: {
                expandable: this.expandable && !!this.icon,
            } }, this.icon && h("z-icon", { key: 'e7dc02062a4c525977b3734540dd1c2f4b5375a3', name: this.icon }), h("div", { key: '9b72b749cddf039f2c92345e9b02061c322c3e58' }, h("slot", { key: 'df6fe3eaea544ad012168bce4049d0d7fa239944' }))));
    }
    static get style() { return ZTagStyle0; }
}, [6, "z-tag", {
        "icon": [1],
        "expandable": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-tag", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-tag":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZTag);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { ZTag as Z, defineCustomElement as d };

//# sourceMappingURL=index24.js.map
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { D as DividerSize, h as DividerOrientation } from './index2.js';

const stylesCss = ".sc-z-divider-h{display:block;padding:0;margin:0}.divider-horizontal.sc-z-divider-h{width:100%}.divider-vertical.sc-z-divider-h{height:100%}.divider-small.divider-horizontal.sc-z-divider-h{height:var(--border-size-small)}.divider-medium.divider-horizontal.sc-z-divider-h{height:var(--border-size-medium)}.divider-large.divider-horizontal.sc-z-divider-h{height:var(--border-size-large)}.divider-small.divider-vertical.sc-z-divider-h{width:var(--border-size-small)}.divider-medium.divider-vertical.sc-z-divider-h{width:var(--border-size-medium)}.divider-large.divider-vertical.sc-z-divider-h{width:var(--border-size-large)}";
const ZDividerStyle0 = stylesCss;

const ZDivider = /*@__PURE__*/ proxyCustomElement(class ZDivider extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.size = DividerSize.SMALL;
        this.color = "gray200";
        this.orientation = DividerOrientation.HORIZONTAL;
    }
    render() {
        return (h(Host, { key: '2f058ffac1fd07ea8bd499de4749a4fd1f766414', class: `divider-${this.size} divider-${this.orientation}`, style: { backgroundColor: `var(--${this.color})` } }));
    }
    static get style() { return ZDividerStyle0; }
}, [2, "z-divider", {
        "size": [1],
        "color": [1],
        "orientation": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-divider"];
    components.forEach(tagName => { switch (tagName) {
        case "z-divider":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZDivider);
            }
            break;
    } });
}

export { ZDivider as Z, defineCustomElement as d };

//# sourceMappingURL=index6.js.map
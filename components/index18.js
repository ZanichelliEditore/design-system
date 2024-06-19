import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const stylesCss = "img{display:block;max-width:100%;height:340px;margin:auto;object-fit:cover}img.faded{opacity:0.3}";
const ZMyzCardCoverStyle0 = stylesCss;

const ZMyzCardCover = /*@__PURE__*/ proxyCustomElement(class ZMyzCardCover extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.img = undefined;
        this.titolo = undefined;
        this.faded = undefined;
        this.defaultimg = undefined;
    }
    hadleOnImageError() {
        this.img = this.defaultimg;
    }
    render() {
        return (h("img", { key: 'd7131bee1289159c5f6e60d390cd6e0984ac776f', class: this.faded && "faded", onError: this.hadleOnImageError.bind(this), alt: this.titolo, src: this.img }));
    }
    static get style() { return ZMyzCardCoverStyle0; }
}, [1, "z-myz-card-cover", {
        "img": [1],
        "titolo": [1],
        "faded": [4],
        "defaultimg": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-myz-card-cover"];
    components.forEach(tagName => { switch (tagName) {
        case "z-myz-card-cover":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZMyzCardCover);
            }
            break;
    } });
}

export { ZMyzCardCover as Z, defineCustomElement as d };

//# sourceMappingURL=index18.js.map
import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { q as PocketStatus } from './index2.js';

const stylesCss = ":host{width:inherit;height:100%;margin:inherit;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{width:inherit;height:100%;margin:inherit}:host>div>div.background{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;width:0;height:0}:host>div>div.background.open{width:100%;height:100%}:host>div>div.content-wrapper{position:fixed;z-index:999;bottom:0;left:0;width:inherit;margin:inherit}:host>div>div.content-wrapper>div{margin:calc(var(--space-unit) * 0.5) calc(var(--space-unit) * 0.5) 0 calc(var(--space-unit) * 0.5);border-radius:var(--space-unit) var(--space-unit) 0 0;box-shadow:0 -2px calc(var(--space-unit) * 0.5) 0 rgb(66 69 72 / 40%)}";
const ZPocketStyle0 = stylesCss;

const ZPocket = /*@__PURE__*/ proxyCustomElement(class ZPocket extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pocketToggle = createEvent(this, "pocketToggle", 7);
        this.pocketid = undefined;
        this.status = PocketStatus.PREVIEW;
    }
    /** open z-pocket */
    async open() {
        this.status = PocketStatus.OPEN;
    }
    /** close z-pocket */
    async close() {
        this.status = PocketStatus.CLOSED;
    }
    emitPocketToggle(id, status) {
        this.pocketToggle.emit({ id, status });
    }
    handlePocketHeaderClick(e) {
        if (e.detail.id && e.detail.id === this.pocketid) {
            switch (this.status) {
                case PocketStatus.PREVIEW:
                case PocketStatus.CLOSED:
                    this.status = PocketStatus.OPEN;
                    break;
                case PocketStatus.OPEN:
                    this.status = PocketStatus.CLOSED;
                    break;
            }
        }
    }
    handlePocketHeaderPan(e) {
        if (e.detail.id && e.detail.id === this.pocketid) {
            if (e.detail.direction === "up") {
                this.status = PocketStatus.OPEN;
            }
            else if (e.detail.direction === "down") {
                this.status = PocketStatus.CLOSED;
            }
        }
    }
    watchStatusHandler(newVal) {
        this.emitPocketToggle(this.pocketid, newVal);
    }
    componentWillLoad() {
        this.emitPocketToggle(this.pocketid, this.status);
    }
    handleBackgroundClick(e) {
        if (e.target.dataset.action == "pocketBackground") {
            this.close();
        }
    }
    render() {
        return (h("div", { key: 'e900c7a30cc100691a08e99eef3e75ab09228ac6' }, h("div", { key: '789f4dd2b162f4693b4d6d4d0636d6614a69e2a3', "data-action": "pocketBackground", "data-pocket": this.pocketid, class: `background ${this.status}`, onClick: (e) => this.handleBackgroundClick(e) }), h("div", { key: 'f53572738d1fc377efafa3f4c9b2b012eb8dcd87', id: this.pocketid, class: "content-wrapper" }, h("div", { key: '8bc1cdbc0c8cd10bb978dd4e04da88da183a2a0c' }, h("slot", { key: '6ac22e14a792914aca4dca5a7da5bd3999a6dd17' })))));
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "status": ["watchStatusHandler"]
    }; }
    static get style() { return ZPocketStyle0; }
}, [1, "z-pocket", {
        "pocketid": [1],
        "status": [1025],
        "open": [64],
        "close": [64]
    }, [[0, "pocketHeaderClick", "handlePocketHeaderClick"], [0, "pocketHeaderPan", "handlePocketHeaderPan"]], {
        "status": ["watchStatusHandler"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-pocket"];
    components.forEach(tagName => { switch (tagName) {
        case "z-pocket":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZPocket);
            }
            break;
    } });
}

export { ZPocket as Z, defineCustomElement as d };

//# sourceMappingURL=index22.js.map
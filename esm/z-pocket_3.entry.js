import { r as registerInstance, c as createEvent, h, g as getElement } from './index-f16bc2ca.js';
import { q as PocketStatus } from './index-2255c6c8.js';
import { a as handleKeyboardSubmit } from './utils-7983d02c.js';
import { H as Hammer } from './hammer-f1ed46b5.js';
import './breakpoints-680e0e56.js';

const stylesCss$2 = ":host{width:inherit;height:100%;margin:inherit;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{width:inherit;height:100%;margin:inherit}:host>div>div.background{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;width:0;height:0}:host>div>div.background.open{width:100%;height:100%}:host>div>div.content-wrapper{position:fixed;z-index:999;bottom:0;left:0;width:inherit;margin:inherit}:host>div>div.content-wrapper>div{margin:calc(var(--space-unit) * 0.5) calc(var(--space-unit) * 0.5) 0 calc(var(--space-unit) * 0.5);border-radius:var(--space-unit) var(--space-unit) 0 0;box-shadow:0 -2px calc(var(--space-unit) * 0.5) 0 rgb(66 69 72 / 40%)}";
const ZPocketStyle0 = stylesCss$2;

const ZPocket = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { key: 'ad25460e1d77b82434d7237fc8bf70bdaccd1037' }, h("div", { key: '66003489b14556acf7ea4345dfd942cb244abfad', "data-action": "pocketBackground", "data-pocket": this.pocketid, class: `background ${this.status}`, onClick: (e) => this.handleBackgroundClick(e) }), h("div", { key: '69e23ca317f9aa2d68e00213af6d4aba2d01a5f9', id: this.pocketid, class: "content-wrapper" }, h("div", { key: '1d02d4b55e0853375c3770bd0f038e38922ce3f4' }, h("slot", { key: 'a4a0ebc7522d5f242263ac87b8b61191dd98d2b7' })))));
    }
    get hostElement() { return getElement(this); }
    static get watchers() { return {
        "status": ["watchStatusHandler"]
    }; }
};
ZPocket.style = ZPocketStyle0;

const stylesCss$1 = ":host{display:block;width:100%;box-sizing:border-box;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>main{overflow:auto;border-right:var(--border-size-small) solid var(--color-surface03);border-left:var(--border-size-small) solid var(--color-surface03);background:var(--color-surface01);scrollbar-width:none}:host>main.preview{max-height:225px;transition:all 200ms ease-in-out, top 200ms ease-in-out}:host>main.open{max-height:calc(100vh - 48px);transition:all 200ms ease-in-out, top 200ms ease-in-out}:host>main.closed{height:0;transition:all 200ms ease-in-out, top 200ms ease-in-out}:host ::-webkit-scrollbar{width:0}@media only screen and (min-width: 768px){:host>main.preview{max-height:157px}}";
const ZPocketBodyStyle0 = stylesCss$1;

const ZPocketBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.pocketid = undefined;
        this.status = PocketStatus.PREVIEW;
    }
    handlePocketToggle(e) {
        if (e.detail.id && e.detail.id === this.pocketid) {
            this.status = e.detail.status;
        }
    }
    render() {
        return (h("main", { key: 'f017441cd9ae7d12e0bea9ee61f6ebae5809ade7', class: this.status }, h("slot", { key: '02d262a95a8d41b1e303ac9d0efbd4218e8b28c9' })));
    }
};
ZPocketBody.style = ZPocketBodyStyle0;

const stylesCss = ":host{display:block;width:100%;box-sizing:border-box;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>header{display:flex;height:36px;flex-flow:row nowrap;align-items:center;justify-content:center;border:var(--border-size-small) solid var(--color-surface03);background:var(--color-surface01);border-radius:var(--space-unit) var(--space-unit) 0 0;cursor:pointer}:host>header:focus{outline:none}:host>header::-moz-focus-inner{border:0}";
const ZPocketHeaderStyle0 = stylesCss;

const ZPocketHeader = class {
    emitPocketHeaderClick() {
        this.pocketHeaderClick.emit({ id: this.pocketid });
    }
    emitPocketHeaderPan(direction) {
        this.pocketHeaderPan.emit({ id: this.pocketid, direction });
    }
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.pocketHeaderClick = createEvent(this, "pocketHeaderClick", 7);
        this.pocketHeaderPan = createEvent(this, "pocketHeaderPan", 7);
        this.pocketid = undefined;
        this.emitPocketHeaderClick = this.emitPocketHeaderClick.bind(this);
    }
    componentDidLoad() {
        // INFO: swipe handling
        const mc = new Hammer(this.swipeWrap);
        mc.get("pan").set({ direction: Hammer.DIRECTION_VERTICAL });
        mc.on("panup", () => this.emitPocketHeaderPan("up"));
        mc.on("pandown", () => this.emitPocketHeaderPan("down"));
    }
    render() {
        return (h("header", { key: 'f14fbd3ff1d6757a840175eb9f17e71e40d7c507', role: "button", tabindex: 0, onClick: () => this.emitPocketHeaderClick(), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.emitPocketHeaderClick), ref: (el) => (this.swipeWrap = el) }, h("slot", { key: 'f6087dbe044ca3f0d2777194a73e60c4d5306c3c' })));
    }
};
ZPocketHeader.style = ZPocketHeaderStyle0;

export { ZPocket as z_pocket, ZPocketBody as z_pocket_body, ZPocketHeader as z_pocket_header };

//# sourceMappingURL=z-pocket_3.entry.js.map
import { r as registerInstance, c as createEvent, h, g as getElement } from './index-ab5f1eaa.js';
import { q as PocketStatus } from './index-2255c6c8.js';
import { H as Hammer } from './hammer-f1ed46b5.js';
import { a as handleKeyboardSubmit } from './utils-7983d02c.js';
import './breakpoints-680e0e56.js';

const stylesCss$2 = ":host{width:inherit;height:100%;margin:inherit;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{width:inherit;height:100%;margin:inherit}:host>div>div.background{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;width:0;height:0}:host>div>div.background.open{width:100%;height:100%}:host>div>div.content-wrapper{position:fixed;z-index:999;bottom:0;left:0;width:inherit;margin:inherit}:host>div>div.content-wrapper>div{margin:calc(var(--space-unit) * 0.5) calc(var(--space-unit) * 0.5) 0 calc(var(--space-unit) * 0.5);border-radius:var(--space-unit) var(--space-unit) 0 0;-webkit-box-shadow:0 -2px calc(var(--space-unit) * 0.5) 0 rgb(66 69 72 / 40%);box-shadow:0 -2px calc(var(--space-unit) * 0.5) 0 rgb(66 69 72 / 40%)}";
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
        return (h("div", { key: '45e8cd09d2390cda3ef219256245868d2c96a970' }, h("div", { key: '3eb0f5af6a61188321d4258eaa8201f7ee24a607', "data-action": "pocketBackground", "data-pocket": this.pocketid, class: `background ${this.status}`, onClick: (e) => this.handleBackgroundClick(e) }), h("div", { key: '453fc771bb812749b02687a4acf43eb60c8a32ec', id: this.pocketid, class: "content-wrapper" }, h("div", { key: 'd84500c28a276e0e30eb3eef88d8141dd047f290' }, h("slot", { key: 'dcd5b7827d6fc211ce38300af4aaa7efcbe71ef2' })))));
    }
    get hostElement() { return getElement(this); }
    static get watchers() { return {
        "status": ["watchStatusHandler"]
    }; }
};
ZPocket.style = ZPocketStyle0;

const stylesCss$1 = ":host{display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>main{overflow:auto;border-right:var(--border-size-small) solid var(--color-surface03);border-left:var(--border-size-small) solid var(--color-surface03);background:var(--color-surface01);scrollbar-width:none}:host>main.preview{max-height:225px;-webkit-transition:all 200ms ease-in-out,\n    top 200ms ease-in-out;transition:all 200ms ease-in-out,\n    top 200ms ease-in-out}:host>main.open{max-height:calc(100vh - 48px);-webkit-transition:all 200ms ease-in-out,\n    top 200ms ease-in-out;transition:all 200ms ease-in-out,\n    top 200ms ease-in-out}:host>main.closed{height:0;-webkit-transition:all 200ms ease-in-out,\n    top 200ms ease-in-out;transition:all 200ms ease-in-out,\n    top 200ms ease-in-out}:host ::-webkit-scrollbar{width:0}@media only screen and (min-width: 768px){:host>main.preview{max-height:157px}}";
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
        return (h("main", { key: 'b617d3b45b165732ac7f354c52e789b141eef47a', class: this.status }, h("slot", { key: 'bfed72b7529e4ee7f05e929d332a5913f46445bf' })));
    }
};
ZPocketBody.style = ZPocketBodyStyle0;

const stylesCss = ":host{display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>header{display:-ms-flexbox;display:flex;height:36px;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:var(--border-size-small) solid var(--color-surface03);background:var(--color-surface01);border-radius:var(--space-unit) var(--space-unit) 0 0;cursor:pointer}:host>header:focus{outline:none}:host>header::-moz-focus-inner{border:0}";
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
        return (h("header", { key: 'e7f1ed78dd4b33c701d5bd0f648c9401d8a38313', role: "button", tabindex: 0, onClick: () => this.emitPocketHeaderClick(), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.emitPocketHeaderClick), ref: (el) => (this.swipeWrap = el) }, h("slot", { key: '1d8bb012ac6dcdf3337d0c70df59b3b098e9de56' })));
    }
};
ZPocketHeader.style = ZPocketHeaderStyle0;

export { ZPocket as z_pocket, ZPocketBody as z_pocket_body, ZPocketHeader as z_pocket_header };

//# sourceMappingURL=z-pocket_3.entry.js.map
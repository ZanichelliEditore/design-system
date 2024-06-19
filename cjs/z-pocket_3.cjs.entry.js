'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');
const index$1 = require('./index-39ce4edf.js');
const hammer = require('./hammer-eaf294be.js');
const utils = require('./utils-d0b10736.js');
require('./breakpoints-5c22092a.js');

const stylesCss$2 = ":host{width:inherit;height:100%;margin:inherit;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{width:inherit;height:100%;margin:inherit}:host>div>div.background{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;width:0;height:0}:host>div>div.background.open{width:100%;height:100%}:host>div>div.content-wrapper{position:fixed;z-index:999;bottom:0;left:0;width:inherit;margin:inherit}:host>div>div.content-wrapper>div{margin:calc(var(--space-unit) * 0.5) calc(var(--space-unit) * 0.5) 0 calc(var(--space-unit) * 0.5);border-radius:var(--space-unit) var(--space-unit) 0 0;box-shadow:0 -2px calc(var(--space-unit) * 0.5) 0 rgb(66 69 72 / 40%)}";
const ZPocketStyle0 = stylesCss$2;

const ZPocket = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.pocketToggle = index.createEvent(this, "pocketToggle", 7);
        this.pocketid = undefined;
        this.status = index$1.PocketStatus.PREVIEW;
    }
    /** open z-pocket */
    async open() {
        this.status = index$1.PocketStatus.OPEN;
    }
    /** close z-pocket */
    async close() {
        this.status = index$1.PocketStatus.CLOSED;
    }
    emitPocketToggle(id, status) {
        this.pocketToggle.emit({ id, status });
    }
    handlePocketHeaderClick(e) {
        if (e.detail.id && e.detail.id === this.pocketid) {
            switch (this.status) {
                case index$1.PocketStatus.PREVIEW:
                case index$1.PocketStatus.CLOSED:
                    this.status = index$1.PocketStatus.OPEN;
                    break;
                case index$1.PocketStatus.OPEN:
                    this.status = index$1.PocketStatus.CLOSED;
                    break;
            }
        }
    }
    handlePocketHeaderPan(e) {
        if (e.detail.id && e.detail.id === this.pocketid) {
            if (e.detail.direction === "up") {
                this.status = index$1.PocketStatus.OPEN;
            }
            else if (e.detail.direction === "down") {
                this.status = index$1.PocketStatus.CLOSED;
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
        return (index.h("div", { key: '45e8cd09d2390cda3ef219256245868d2c96a970' }, index.h("div", { key: '3eb0f5af6a61188321d4258eaa8201f7ee24a607', "data-action": "pocketBackground", "data-pocket": this.pocketid, class: `background ${this.status}`, onClick: (e) => this.handleBackgroundClick(e) }), index.h("div", { key: '453fc771bb812749b02687a4acf43eb60c8a32ec', id: this.pocketid, class: "content-wrapper" }, index.h("div", { key: 'd84500c28a276e0e30eb3eef88d8141dd047f290' }, index.h("slot", { key: 'dcd5b7827d6fc211ce38300af4aaa7efcbe71ef2' })))));
    }
    get hostElement() { return index.getElement(this); }
    static get watchers() { return {
        "status": ["watchStatusHandler"]
    }; }
};
ZPocket.style = ZPocketStyle0;

const stylesCss$1 = ":host{display:block;width:100%;box-sizing:border-box;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>main{overflow:auto;border-right:var(--border-size-small) solid var(--color-surface03);border-left:var(--border-size-small) solid var(--color-surface03);background:var(--color-surface01);scrollbar-width:none}:host>main.preview{max-height:225px;transition:all 200ms ease-in-out,\n    top 200ms ease-in-out}:host>main.open{max-height:calc(100vh - 48px);transition:all 200ms ease-in-out,\n    top 200ms ease-in-out}:host>main.closed{height:0;transition:all 200ms ease-in-out,\n    top 200ms ease-in-out}:host ::-webkit-scrollbar{width:0}@media only screen and (min-width: 768px){:host>main.preview{max-height:157px}}";
const ZPocketBodyStyle0 = stylesCss$1;

const ZPocketBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.pocketid = undefined;
        this.status = index$1.PocketStatus.PREVIEW;
    }
    handlePocketToggle(e) {
        if (e.detail.id && e.detail.id === this.pocketid) {
            this.status = e.detail.status;
        }
    }
    render() {
        return (index.h("main", { key: 'b617d3b45b165732ac7f354c52e789b141eef47a', class: this.status }, index.h("slot", { key: 'bfed72b7529e4ee7f05e929d332a5913f46445bf' })));
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
        index.registerInstance(this, hostRef);
        this.pocketHeaderClick = index.createEvent(this, "pocketHeaderClick", 7);
        this.pocketHeaderPan = index.createEvent(this, "pocketHeaderPan", 7);
        this.pocketid = undefined;
        this.emitPocketHeaderClick = this.emitPocketHeaderClick.bind(this);
    }
    componentDidLoad() {
        // INFO: swipe handling
        const mc = new hammer.Hammer(this.swipeWrap);
        mc.get("pan").set({ direction: hammer.Hammer.DIRECTION_VERTICAL });
        mc.on("panup", () => this.emitPocketHeaderPan("up"));
        mc.on("pandown", () => this.emitPocketHeaderPan("down"));
    }
    render() {
        return (index.h("header", { key: 'e7f1ed78dd4b33c701d5bd0f648c9401d8a38313', role: "button", tabindex: 0, onClick: () => this.emitPocketHeaderClick(), onKeyPress: (ev) => utils.handleKeyboardSubmit(ev, this.emitPocketHeaderClick), ref: (el) => (this.swipeWrap = el) }, index.h("slot", { key: '1d8bb012ac6dcdf3337d0c70df59b3b098e9de56' })));
    }
};
ZPocketHeader.style = ZPocketHeaderStyle0;

exports.z_pocket = ZPocket;
exports.z_pocket_body = ZPocketBody;
exports.z_pocket_header = ZPocketHeader;

//# sourceMappingURL=z-pocket_3.cjs.entry.js.map
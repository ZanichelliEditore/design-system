'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');
const index$1 = require('./index-39ce4edf.js');
const utils = require('./utils-d0b10736.js');
const hammer = require('./hammer-eaf294be.js');
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
        return (index.h("div", { key: '97d80e0b2cb56a932f35aa104256bf763f1eee7c' }, index.h("div", { key: '9e8f3eacd18892d80cc1a5c314c861ef18178daa', "data-action": "pocketBackground", "data-pocket": this.pocketid, class: `background ${this.status}`, onClick: (e) => this.handleBackgroundClick(e) }), index.h("div", { key: 'ee7d44929e94ebe8f2c128a74e0b8250819df04b', id: this.pocketid, class: "content-wrapper" }, index.h("div", { key: '57a77810690ce70ed3c7fac92cc4fa7e5158f17d' }, index.h("slot", { key: '9f1c1757f0bc2ff2db326ac9158d80f33802970f' })))));
    }
    get hostElement() { return index.getElement(this); }
    static get watchers() { return {
        "status": ["watchStatusHandler"]
    }; }
};
ZPocket.style = ZPocketStyle0;

const stylesCss$1 = ":host{display:block;width:100%;box-sizing:border-box;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>main{overflow:auto;border-right:var(--border-size-small) solid var(--color-surface03);border-left:var(--border-size-small) solid var(--color-surface03);background:var(--color-surface01);scrollbar-width:none}:host>main.preview{max-height:225px;transition:all 200ms ease-in-out, top 200ms ease-in-out}:host>main.open{max-height:calc(100vh - 48px);transition:all 200ms ease-in-out, top 200ms ease-in-out}:host>main.closed{height:0;transition:all 200ms ease-in-out, top 200ms ease-in-out}:host ::-webkit-scrollbar{width:0}@media only screen and (min-width: 768px){:host>main.preview{max-height:157px}}";
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
        return (index.h("main", { key: 'cd660568916f4384dc815a3c0067a579c217fa33', class: this.status }, index.h("slot", { key: '3dd94db83f10a36a3656914a90ca571bd088fc6d' })));
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
        return (index.h("header", { key: '4f1f69686926f9b45d72800e711ae8437a3ca2f5', role: "button", tabindex: 0, onClick: () => this.emitPocketHeaderClick(), onKeyPress: (ev) => utils.handleKeyboardSubmit(ev, this.emitPocketHeaderClick), ref: (el) => (this.swipeWrap = el) }, index.h("slot", { key: 'cfdaf2acf381639e86ea15349a83834c311fda71' })));
    }
};
ZPocketHeader.style = ZPocketHeaderStyle0;

exports.z_pocket = ZPocket;
exports.z_pocket_body = ZPocketBody;
exports.z_pocket_header = ZPocketHeader;

//# sourceMappingURL=z-pocket_3.cjs.entry.js.map
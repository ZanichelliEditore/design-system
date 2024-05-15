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
        return (index.h("div", { key: '1f4362d03177bb2bfd444088334a59f62421d571' }, index.h("div", { key: '188212c09305eecc4dc7ddf2d7f386bf8c69fed4', "data-action": "pocketBackground", "data-pocket": this.pocketid, class: `background ${this.status}`, onClick: (e) => this.handleBackgroundClick(e) }), index.h("div", { key: 'e7e7ca655263acaaf32e5b957b2be6ff2464a468', id: this.pocketid, class: "content-wrapper" }, index.h("div", { key: '60b7f7651dae196192aa2b2ffee763558bed7845' }, index.h("slot", { key: '09a2f3491ca662949f6ab78f0bab977d3269cc87' })))));
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
        return (index.h("main", { key: '9440ba5927ca7fd3ef12656dacc0bb9ea8312b51', class: this.status }, index.h("slot", { key: '66d68d48f04ae4496d2f73a466f0f5878bdfdde8' })));
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
        return (index.h("header", { key: '3dc18f87c3e61e8647eb44a23a26d9298c894fb6', role: "button", tabindex: 0, onClick: () => this.emitPocketHeaderClick(), onKeyPress: (ev) => utils.handleKeyboardSubmit(ev, this.emitPocketHeaderClick), ref: (el) => (this.swipeWrap = el) }, index.h("slot", { key: 'a7f560d9e9de0bd40384e56747f316dc9b9ec629' })));
    }
};
ZPocketHeader.style = ZPocketHeaderStyle0;

exports.z_pocket = ZPocket;
exports.z_pocket_body = ZPocketBody;
exports.z_pocket_header = ZPocketHeader;

//# sourceMappingURL=z-pocket_3.cjs.entry.js.map
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-28bcd719.js');
const utils = require('./utils-1b75af6b.js');
const hammer = require('./hammer-4f20813e.js');
require('./breakpoints-ebe1a437.js');
require('./_commonjsHelpers-537d719a.js');

const stylesCss$2 = ":host{width:inherit;height:100%;margin:inherit;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{width:inherit;height:100%;margin:inherit}:host>div>div.background{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;width:0;height:0}:host>div>div.background.open{width:100%;height:100%}:host>div>div.content-wrapper{position:fixed;z-index:999;bottom:0;left:0;width:inherit;margin:inherit}:host>div>div.content-wrapper>div{margin:calc(var(--space-unit) * 0.5) calc(var(--space-unit) * 0.5) 0 calc(var(--space-unit) * 0.5);border-radius:var(--space-unit) var(--space-unit) 0 0;box-shadow:0 -2px calc(var(--space-unit) * 0.5) 0 rgb(66 69 72 / 40%)}";

const ZPocket = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.pocketToggle = index.createEvent(this, "pocketToggle", 7);
    /** pocket status */
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
    return (index.h("div", null, index.h("div", { "data-action": "pocketBackground", "data-pocket": this.pocketid, class: `background ${this.status}`, onClick: (e) => this.handleBackgroundClick(e) }), index.h("div", { id: this.pocketid, class: "content-wrapper" }, index.h("div", null, index.h("slot", null)))));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "status": ["watchStatusHandler"]
  }; }
};
ZPocket.style = stylesCss$2;

const stylesCss$1 = ":host{display:block;width:100%;box-sizing:border-box;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>main{overflow:auto;border-right:var(--border-size-small) solid var(--color-surface03);border-left:var(--border-size-small) solid var(--color-surface03);background:var(--color-surface01);scrollbar-width:none}:host>main.preview{max-height:225px;transition:all 200ms ease-in-out, top 200ms ease-in-out}:host>main.open{max-height:calc(100vh - 48px);transition:all 200ms ease-in-out, top 200ms ease-in-out}:host>main.closed{height:0;transition:all 200ms ease-in-out, top 200ms ease-in-out}:host ::-webkit-scrollbar{width:0}@media only screen and (min-width: 768px){:host>main.preview{max-height:157px}}";

const ZPocketBody = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** pocket status */
    this.status = index$1.PocketStatus.PREVIEW;
  }
  handlePocketToggle(e) {
    if (e.detail.id && e.detail.id === this.pocketid) {
      this.status = e.detail.status;
    }
  }
  render() {
    return (index.h("main", { class: this.status }, index.h("slot", null)));
  }
};
ZPocketBody.style = stylesCss$1;

const stylesCss = ":host{display:block;width:100%;box-sizing:border-box;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>header{display:flex;height:36px;flex-flow:row nowrap;align-items:center;justify-content:center;border:var(--border-size-small) solid var(--color-surface03);background:var(--color-surface01);border-radius:var(--space-unit) var(--space-unit) 0 0;cursor:pointer}:host>header:focus{outline:none}:host>header::-moz-focus-inner{border:0}";

const ZPocketHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.pocketHeaderClick = index.createEvent(this, "pocketHeaderClick", 7);
    this.pocketHeaderPan = index.createEvent(this, "pocketHeaderPan", 7);
    this.emitPocketHeaderClick = this.emitPocketHeaderClick.bind(this);
  }
  emitPocketHeaderClick() {
    this.pocketHeaderClick.emit({ id: this.pocketid });
  }
  emitPocketHeaderPan(direction) {
    this.pocketHeaderPan.emit({ id: this.pocketid, direction });
  }
  componentDidLoad() {
    // INFO: swipe handling
    const mc = new hammer.hammer(this.swipeWrap);
    mc.get("pan").set({ direction: hammer.hammer.DIRECTION_VERTICAL });
    mc.on("panup", () => this.emitPocketHeaderPan("up"));
    mc.on("pandown", () => this.emitPocketHeaderPan("down"));
  }
  render() {
    return (index.h("header", { role: "button", tabindex: 0, onClick: () => this.emitPocketHeaderClick(), onKeyPress: (ev) => utils.handleKeyboardSubmit(ev, this.emitPocketHeaderClick), ref: (el) => (this.swipeWrap = el) }, index.h("slot", null)));
  }
};
ZPocketHeader.style = stylesCss;

exports.z_pocket = ZPocket;
exports.z_pocket_body = ZPocketBody;
exports.z_pocket_header = ZPocketHeader;

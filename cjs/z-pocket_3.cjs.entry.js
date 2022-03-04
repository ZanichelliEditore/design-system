'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dee3e21d.js');
const index$1 = require('./index-de6c491e.js');
const utils = require('./utils-12053886.js');
const hammer = require('./hammer-54230951.js');
require('./breakpoints-88c4fd6c.js');
require('./_commonjsHelpers-119ffc74.js');

const stylesCss$2 = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg);width:inherit;height:100%;margin:inherit}:host>div{width:inherit;height:100%;margin:inherit}:host>div>div.background{position:fixed;left:0;right:0;top:0;bottom:0;z-index:998;width:0;height:0}:host>div>div.background.open{height:100%;width:100%}:host>div>div.contentWrapper{position:fixed;z-index:999;bottom:0;left:0;width:inherit;margin:inherit}:host>div>div.contentWrapper>div{border-radius:var(--space-unit) var(--space-unit) 0px 0px;box-shadow:0px -2px calc(var(--space-unit) * 0.5) 0px rgba(66, 69, 72, 0.4);margin:calc(var(--space-unit) * 0.5) calc(var(--space-unit) * 0.5) 0 calc(var(--space-unit) * 0.5)}";

const ZPocket = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.pocketToggle = index.createEvent(this, "pocketToggle", 7);
    /** pocket status */
    this.status = index$1.PocketStatusEnum.preview;
  }
  /** open z-pocket */
  async open() {
    this.status = index$1.PocketStatusEnum.open;
  }
  /** close z-pocket */
  async close() {
    this.status = index$1.PocketStatusEnum.closed;
  }
  emitPocketToggle(id, status) {
    this.pocketToggle.emit({ id, status });
  }
  handlePocketHeaderClick(e) {
    if (e.detail.id && e.detail.id === this.pocketid) {
      switch (this.status) {
        case index$1.PocketStatusEnum.preview:
        case index$1.PocketStatusEnum.closed:
          this.status = index$1.PocketStatusEnum.open;
          break;
        case index$1.PocketStatusEnum.open:
          this.status = index$1.PocketStatusEnum.closed;
          break;
      }
    }
  }
  handlePocketHeaderPan(e) {
    if (e.detail.id && e.detail.id === this.pocketid) {
      if (e.detail.direction === "up") {
        this.status = index$1.PocketStatusEnum.open;
      }
      else if (e.detail.direction === "down") {
        this.status = index$1.PocketStatusEnum.closed;
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
    return (index.h("div", null, index.h("div", { "data-action": "pocketBackground", "data-pocket": this.pocketid, class: `background ${this.status}`, onClick: (e) => this.handleBackgroundClick(e) }), index.h("div", { id: this.pocketid, class: "contentWrapper" }, index.h("div", null, index.h("slot", null)))));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "status": ["watchStatusHandler"]
  }; }
};
ZPocket.style = stylesCss$2;

const stylesCss$1 = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg);display:block;width:100%;box-sizing:border-box}:host>main{background:var(--color-surface01);border-left:var(--border-size-small) solid var(--color-surface03);border-right:var(--border-size-small) solid var(--color-surface03);overflow:auto;scrollbar-width:none}:host>main.preview{max-height:225px;transition:all 200ms ease-in-out, top 200ms ease-in-out}:host>main.open{max-height:calc(100vh - 48px);transition:all 200ms ease-in-out, top 200ms ease-in-out}:host>main.closed{height:0px;transition:all 200ms ease-in-out, top 200ms ease-in-out}:host ::-webkit-scrollbar{width:0}@media only screen and (min-width: 768px){:host>main.preview{max-height:157px}}";

const ZPocketBody = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** pocket status */
    this.status = index$1.PocketStatusEnum.preview;
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

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg);display:block;width:100%;box-sizing:border-box}:host>header{background:var(--color-surface01);border:var(--border-size-small) solid var(--color-surface03);border-radius:var(--space-unit) var(--space-unit) 0px 0px;height:36px;cursor:pointer;display:flex;flex-wrap:nowrap;flex-direction:row;justify-content:center;align-items:center}:host>header:focus{outline:none}:host>header::-moz-focus-inner{border:0}";

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
    return (index.h("header", { role: "button", tabindex: 0, onClick: () => this.emitPocketHeaderClick(), onKeyPress: (ev) => utils.handleKeyboardSubmit(ev, this.emitPocketHeaderClick), ref: el => (this.swipeWrap = el) }, index.h("slot", null)));
  }
};
ZPocketHeader.style = stylesCss;

exports.z_pocket = ZPocket;
exports.z_pocket_body = ZPocketBody;
exports.z_pocket_header = ZPocketHeader;

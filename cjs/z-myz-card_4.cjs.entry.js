'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-e8ce94a1.js');

const stylesCss$3 = ":host{--card-overflow:hidden}div{display:flex;overflow:var(--card-overflow);width:auto;width:256px;height:522px;box-sizing:border-box;flex-direction:column;border:var(--border-size-medium) solid var(--color-surface03);background-color:var(--color-surface01);border-radius:var(--border-radius)}div.real,div.trial,div.temp{border-color:var(--accent)}div.faded{border:var(--border-size-medium) solid var(--color-surface02)}div.highlighted{box-shadow:var(--shadow-4);outline:none}div.pressed{box-shadow:var(--shadow-8);outline:none}div:focus{box-shadow:var(--shadow-focus-primary);outline:none}";

const ZMyzCardComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** pressed status */
    this.ispressed = false;
    /** highlighted status */
    this.ishighlighted = false;
  }
  retrieveClass() {
    let elemClasses = "";
    if (this.cardtype === index$1.LicenseType.REAL) {
      elemClasses += "real";
    }
    else if (this.cardtype === index$1.LicenseType.TRIAL) {
      elemClasses += "trial";
    }
    else if (this.cardtype === index$1.LicenseType.TEMP) {
      elemClasses += "temp";
    }
    if (this.faded) {
      elemClasses += " faded";
    }
    else if (this.ispressed) {
      elemClasses += " pressed";
    }
    else if (this.ishighlighted) {
      elemClasses += " highlighted";
    }
    return elemClasses;
  }
  render() {
    return (index.h("div", { class: this.retrieveClass(), tabindex: "0" }, index.h("slot", null)));
  }
};
ZMyzCardComponent.style = stylesCss$3;

const stylesCss$2 = ":host{width:auto;height:340px}:host>div{position:relative;display:flex;width:auto;height:340px;align-items:center;justify-content:center}";

const ZMyzCardBody = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", null, index.h("slot", { name: "alert" }), index.h("slot", { name: "cover" })));
  }
};
ZMyzCardBody.style = stylesCss$2;

const stylesCss$1 = "img{display:block;max-width:100%;height:340px;margin:auto;object-fit:cover}img.faded{opacity:0.3}";

const ZMyzCardCover = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  hadleOnImageError() {
    this.img = this.defaultimg;
  }
  render() {
    return (index.h("img", { class: this.faded && "faded", onError: this.hadleOnImageError.bind(this), alt: this.titolo, src: this.img }));
  }
};
ZMyzCardCover.style = stylesCss$1;

const stylesCss = "header{position:relative;display:flex;width:auto;height:calc(var(--space-unit) * 6);flex-direction:row;align-items:flex-start;justify-content:space-between;border-bottom:var(--border-size-medium) solid var(--color-surface03);background-color:var(--color-surface01);border-radius:var(--border-radius) var(--border-radius) var(--border-no-radius) var(--border-no-radius)}slot[name=\"aria-heading\"]::slotted(*){position:absolute;overflow:hidden !important;width:1px !important;height:1px !important;padding:0 !important;border:0 none !important;margin:-1px !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important}header.real,header.trial,header.temp{border-bottom:var(--border-size-medium) solid var(--accent);background-color:var(--accent-lighter)}.card-title{overflow:hidden;height:calc(var(--space-unit) * 2);padding:calc(var(--space-unit) * 2);margin:0;color:var(--color-surface05);font-family:var(--font-family-sans);font-size:12px;font-weight:var(--font-sb);letter-spacing:0.22px;line-height:calc(var(--space-unit) * 2);text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap}.faded{border-bottom:var(--border-size-medium) solid var(--color-surface02)}.faded.real,.faded.trial,.faded.temp{border-top:var(--border-size-medium) solid var(--accent);border-right:var(--border-size-medium) solid var(--accent);border-left:var(--border-size-medium) solid var(--accent)}";

const ZMyzCardHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.allowTooltip = false;
  }
  getTitle() {
    return this.allowTooltip ? this.titolo : "";
  }
  componentDidLoad() {
    if (this.elementHasEllipsis()) {
      this.allowTooltip = true;
    }
  }
  elementHasEllipsis() {
    return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
  }
  retrieveClass() {
    return {
      real: this.cardtype === index$1.LicenseType.REAL,
      trial: this.cardtype === index$1.LicenseType.TRIAL,
      temp: this.cardtype === index$1.LicenseType.TEMP,
      faded: this.faded,
    };
  }
  render() {
    return (index.h("header", { class: this.retrieveClass() }, index.h("slot", { name: "aria-heading" }), index.h("span", { class: "card-title", ref: (el) => (this.ellipsis = el), title: this.getTitle() }, this.titolo), index.h("slot", { name: "icon" })));
  }
};
ZMyzCardHeader.style = stylesCss;

exports.z_myz_card = ZMyzCardComponent;
exports.z_myz_card_body = ZMyzCardBody;
exports.z_myz_card_cover = ZMyzCardCover;
exports.z_myz_card_header = ZMyzCardHeader;

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-3dd0f9bd.js');

const stylesCss$3 = ":host{--card-overflow:hidden}div{background-color:var(--color-surface01);display:flex;flex-direction:column;width:auto;box-sizing:border-box;width:256px;height:522px;border:var(--border-size-medium) solid var(--color-surface03);border-radius:var(--border-radius);overflow:var(--card-overflow)}div.real,div.trial,div.temp{border-color:var(--accent)}div.faded{border:var(--border-size-medium) solid var(--color-surface02)}div.highlighted{box-shadow:var(--shadow-4);outline:none}div.pressed{box-shadow:var(--shadow-8);outline:none}div:focus{box-shadow:var(--shadow-focus-primary);outline:none}";

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
    if (this.cardtype === index$1.LicenseTypeEnum.real)
      elemClasses += "real";
    else if (this.cardtype === index$1.LicenseTypeEnum.trial)
      elemClasses += "trial";
    else if (this.cardtype === index$1.LicenseTypeEnum.temp)
      elemClasses += "temp";
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

const stylesCss$2 = ":host{height:340px;width:auto}:host>div{height:340px;width:auto;display:flex;align-items:center;justify-content:center;position:relative}";

const ZMyzCardBody = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", null, index.h("slot", { name: "alert" }), index.h("slot", { name: "cover" })));
  }
};
ZMyzCardBody.style = stylesCss$2;

const stylesCss$1 = "img{display:block;margin:auto auto;height:340px;max-width:100%;object-fit:cover}img.faded{opacity:0.3}";

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

const stylesCss = "header{display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;width:auto;height:calc(var(--space-unit) * 6);position:relative;border-bottom:var(--border-size-medium) solid var(--color-surface03);border-radius:var(--border-radius) var(--border-radius)\n    var(--border-no-radius) var(--border-no-radius);background-color:var(--color-surface01)}header.real,header.trial,header.temp{background-color:var(--accent-lighter);border-bottom:var(--border-size-medium) solid var(--accent)}h2{font-family:var(--font-family-sans);font-weight:var(--font-sb);color:var(--color-surface05);height:calc(var(--space-unit) * 2);font-size:12px;text-transform:uppercase;letter-spacing:0.22px;line-height:calc(var(--space-unit) * 2);margin:0px;padding:calc(var(--space-unit) * 2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.faded{border-bottom:var(--border-size-medium) solid var(--color-surface02)}.faded.real,.faded.trial,.faded.temp{border-top:var(--border-size-medium) solid var(--accent);border-right:var(--border-size-medium) solid var(--accent);border-left:var(--border-size-medium) solid var(--accent)}";

const ZMyzCardHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.allowTooltip = false;
  }
  getTitle() {
    return this.allowTooltip ? this.titolo : "";
  }
  componentDidLoad() {
    if (this.elementHasEllipsis())
      this.allowTooltip = true;
  }
  elementHasEllipsis() {
    return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
  }
  retrieveClass() {
    return {
      real: this.cardtype === index$1.LicenseTypeEnum.real,
      trial: this.cardtype === index$1.LicenseTypeEnum.trial,
      temp: this.cardtype === index$1.LicenseTypeEnum.temp,
      faded: this.faded,
    };
  }
  render() {
    return (index.h("header", { class: this.retrieveClass() }, index.h("h2", { ref: (el) => (this.ellipsis = el), title: this.getTitle() }, this.titolo), index.h("slot", { name: "icon" })));
  }
};
ZMyzCardHeader.style = stylesCss;

exports.z_myz_card = ZMyzCardComponent;
exports.z_myz_card_body = ZMyzCardBody;
exports.z_myz_card_cover = ZMyzCardCover;
exports.z_myz_card_header = ZMyzCardHeader;

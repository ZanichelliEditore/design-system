'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');
const index$1 = require('./index-39ce4edf.js');

const stylesCss$3 = ":host{--card-overflow:hidden}div{display:flex;overflow:var(--card-overflow);width:auto;width:256px;height:522px;box-sizing:border-box;flex-direction:column;border:var(--border-size-medium) solid var(--color-surface03);background-color:var(--color-surface01);border-radius:var(--border-radius)}div.real,div.trial,div.temp{border-color:var(--blue100)}div.faded{border:var(--border-size-medium) solid var(--color-surface02)}div.highlighted{box-shadow:var(--shadow-4);outline:none}div.pressed{box-shadow:var(--shadow-8);outline:none}div:focus{box-shadow:var(--shadow-focus-primary);outline:none}";
const ZMyzCardStyle0 = stylesCss$3;

const ZMyzCardComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.faded = undefined;
        this.cardtype = undefined;
        this.ispressed = false;
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
        return (index.h("div", { key: '566806a9792c54f2853f4e02e22a4494a69e906c', class: this.retrieveClass(), tabindex: "0" }, index.h("slot", { key: 'bc8776f2ea59e0a421b7559bb6d5c9e2923f0276' })));
    }
};
ZMyzCardComponent.style = ZMyzCardStyle0;

const stylesCss$2 = ":host{width:auto;height:340px}:host>div{position:relative;display:flex;width:auto;height:340px;align-items:center;justify-content:center}";
const ZMyzCardBodyStyle0 = stylesCss$2;

const ZMyzCardBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'cf1d5f3496d5d26fc8af29aaadb102fb6d05fc01' }, index.h("slot", { key: 'c0e3125ceecc33606e9644c514643de2ff59be1b', name: "alert" }), index.h("slot", { key: 'fbac52128264cd4a5637a7acbe3f57670efb5d50', name: "cover" })));
    }
};
ZMyzCardBody.style = ZMyzCardBodyStyle0;

const stylesCss$1 = "img{display:block;max-width:100%;height:340px;margin:auto;object-fit:cover}img.faded{opacity:0.3}";
const ZMyzCardCoverStyle0 = stylesCss$1;

const ZMyzCardCover = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.img = undefined;
        this.titolo = undefined;
        this.faded = undefined;
        this.defaultimg = undefined;
    }
    hadleOnImageError() {
        this.img = this.defaultimg;
    }
    render() {
        return (index.h("img", { key: 'ed7d7aad0833e7ead92536e260de19da601a605f', class: this.faded && "faded", onError: this.hadleOnImageError.bind(this), alt: this.titolo, src: this.img }));
    }
};
ZMyzCardCover.style = ZMyzCardCoverStyle0;

const stylesCss = "header{position:relative;display:flex;width:auto;height:calc(var(--space-unit) * 6);flex-direction:row;align-items:flex-start;justify-content:space-between;border-bottom:var(--border-size-medium) solid var(--color-surface03);background-color:var(--color-surface01);border-radius:var(--border-radius) var(--border-radius) var(--border-no-radius) var(--border-no-radius)}slot[name=\"aria-heading\"]::slotted(*){position:absolute;overflow:hidden !important;width:1px !important;height:1px !important;padding:0 !important;border:0 none !important;margin:-1px !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important}header.real,header.trial,header.temp{border-bottom:var(--border-size-medium) solid var(--blue100);background-color:var(--color-primary03)}.card-title{overflow:hidden;height:calc(var(--space-unit) * 2);padding:calc(var(--space-unit) * 2);margin:0;color:var(--color-surface05);font-family:var(--font-family-sans);font-size:12px;font-weight:var(--font-sb);letter-spacing:0.22px;line-height:calc(var(--space-unit) * 2);text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap}.faded{border-bottom:var(--border-size-medium) solid var(--color-surface02)}.faded.real,.faded.trial,.faded.temp{border-top:var(--border-size-medium) solid var(--blue100);border-right:var(--border-size-medium) solid var(--blue100);border-left:var(--border-size-medium) solid var(--blue100)}";
const ZMyzCardHeaderStyle0 = stylesCss;

const ZMyzCardHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.titolo = undefined;
        this.faded = undefined;
        this.cardtype = undefined;
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
        return (index.h("header", { key: '2899cd14120a644cd410c8e3ecbf5dc8057741aa', class: this.retrieveClass() }, index.h("slot", { key: '9fc6922f5caae746f28dd045662791755a12e531', name: "aria-heading" }), index.h("span", { key: 'c9e10b400ec78bbecb3c2f4620e3a4934dfed3f4', class: "card-title", ref: (el) => (this.ellipsis = el), title: this.getTitle() }, this.titolo), index.h("slot", { key: '71828a2ea10c63e807951f1a5e71725a8779cd9e', name: "icon" })));
    }
};
ZMyzCardHeader.style = ZMyzCardHeaderStyle0;

exports.z_myz_card = ZMyzCardComponent;
exports.z_myz_card_body = ZMyzCardBody;
exports.z_myz_card_cover = ZMyzCardCover;
exports.z_myz_card_header = ZMyzCardHeader;

//# sourceMappingURL=z-myz-card_4.cjs.entry.js.map
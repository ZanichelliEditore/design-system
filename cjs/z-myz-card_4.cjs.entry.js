'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');
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
        return (index.h("div", { key: '254e3f158fbaa9eae4c801cd491abe9227fdd1fb', class: this.retrieveClass(), tabindex: "0" }, index.h("slot", { key: '52145b4e99ae3616f767760faf97433d1e3047d8' })));
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
        return (index.h("div", { key: '6eaaf5ff0351e8844d3aa616e473712dafcff7fd' }, index.h("slot", { key: '2984020a0568593cf9dd47aac83c4890c53d7460', name: "alert" }), index.h("slot", { key: '85e70e9dcd8068d00bdb40e71acaffae88326225', name: "cover" })));
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
        return (index.h("img", { key: 'd7131bee1289159c5f6e60d390cd6e0984ac776f', class: this.faded && "faded", onError: this.hadleOnImageError.bind(this), alt: this.titolo, src: this.img }));
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
        return (index.h("header", { key: '5d2f8e09c654cc0b51b0adf3619e8e85dbc81ff5', class: this.retrieveClass() }, index.h("slot", { key: '884987f3e799018b57de5a6ab48a2534cbd5dec1', name: "aria-heading" }), index.h("span", { key: 'c64c93f31d58655a0e17a3141cd9baf17bcf3122', class: "card-title", ref: (el) => (this.ellipsis = el), title: this.getTitle() }, this.titolo), index.h("slot", { key: 'f28cc800f9632ed16e4a53a6753a2173a19460f4', name: "icon" })));
    }
};
ZMyzCardHeader.style = ZMyzCardHeaderStyle0;

exports.z_myz_card = ZMyzCardComponent;
exports.z_myz_card_body = ZMyzCardBody;
exports.z_myz_card_cover = ZMyzCardCover;
exports.z_myz_card_header = ZMyzCardHeader;

//# sourceMappingURL=z-myz-card_4.cjs.entry.js.map
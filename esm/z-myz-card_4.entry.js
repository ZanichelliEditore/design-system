import { r as registerInstance, h } from './index-f16bc2ca.js';
import { L as LicenseType } from './index-2255c6c8.js';

const stylesCss$3 = ":host{--card-overflow:hidden}div{display:flex;overflow:var(--card-overflow);width:auto;width:256px;height:522px;box-sizing:border-box;flex-direction:column;border:var(--border-size-medium) solid var(--color-surface03);background-color:var(--color-surface01);border-radius:var(--border-radius)}div.real,div.trial,div.temp{border-color:var(--blue100)}div.faded{border:var(--border-size-medium) solid var(--color-surface02)}div.highlighted{box-shadow:var(--shadow-4);outline:none}div.pressed{box-shadow:var(--shadow-8);outline:none}div:focus{box-shadow:var(--shadow-focus-primary);outline:none}";
const ZMyzCardStyle0 = stylesCss$3;

const ZMyzCardComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.faded = undefined;
        this.cardtype = undefined;
        this.ispressed = false;
        this.ishighlighted = false;
    }
    retrieveClass() {
        let elemClasses = "";
        if (this.cardtype === LicenseType.REAL) {
            elemClasses += "real";
        }
        else if (this.cardtype === LicenseType.TRIAL) {
            elemClasses += "trial";
        }
        else if (this.cardtype === LicenseType.TEMP) {
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
        return (h("div", { key: '37a248c80cbcc045d2c053bda3acb7506a6d3028', class: this.retrieveClass(), tabindex: "0" }, h("slot", { key: 'e62b60f5edc7bc949261b0e1f5a9734db07f3ed9' })));
    }
};
ZMyzCardComponent.style = ZMyzCardStyle0;

const stylesCss$2 = ":host{width:auto;height:340px}:host>div{position:relative;display:flex;width:auto;height:340px;align-items:center;justify-content:center}";
const ZMyzCardBodyStyle0 = stylesCss$2;

const ZMyzCardBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '7d193913aaee1ce18633cb39f322bde63dd0f636' }, h("slot", { key: '59b557d02f579f35c15ac0ac03a084a3f43a00c0', name: "alert" }), h("slot", { key: 'bcd8832a6c010f6dbc6a6d5579efe7801ff6a60c', name: "cover" })));
    }
};
ZMyzCardBody.style = ZMyzCardBodyStyle0;

const stylesCss$1 = "img{display:block;max-width:100%;height:340px;margin:auto;object-fit:cover}img.faded{opacity:0.3}";
const ZMyzCardCoverStyle0 = stylesCss$1;

const ZMyzCardCover = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.img = undefined;
        this.titolo = undefined;
        this.faded = undefined;
        this.defaultimg = undefined;
    }
    hadleOnImageError() {
        this.img = this.defaultimg;
    }
    render() {
        return (h("img", { key: '5d3f258dae6077687ccd98690f6caad390bc05aa', class: this.faded && "faded", onError: this.hadleOnImageError.bind(this), alt: this.titolo, src: this.img }));
    }
};
ZMyzCardCover.style = ZMyzCardCoverStyle0;

const stylesCss = "header{position:relative;display:flex;width:auto;height:calc(var(--space-unit) * 6);flex-direction:row;align-items:flex-start;justify-content:space-between;border-bottom:var(--border-size-medium) solid var(--color-surface03);background-color:var(--color-surface01);border-radius:var(--border-radius) var(--border-radius) var(--border-no-radius) var(--border-no-radius)}slot[name=\"aria-heading\"]::slotted(*){position:absolute;overflow:hidden !important;width:1px !important;height:1px !important;padding:0 !important;border:0 none !important;margin:-1px !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important}header.real,header.trial,header.temp{border-bottom:var(--border-size-medium) solid var(--blue100);background-color:var(--color-primary03)}.card-title{overflow:hidden;height:calc(var(--space-unit) * 2);padding:calc(var(--space-unit) * 2);margin:0;color:var(--color-surface05);font-family:var(--font-family-sans);font-size:12px;font-weight:var(--font-sb);letter-spacing:0.22px;line-height:calc(var(--space-unit) * 2);text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap}.faded{border-bottom:var(--border-size-medium) solid var(--color-surface02)}.faded.real,.faded.trial,.faded.temp{border-top:var(--border-size-medium) solid var(--blue100);border-right:var(--border-size-medium) solid var(--blue100);border-left:var(--border-size-medium) solid var(--blue100)}";
const ZMyzCardHeaderStyle0 = stylesCss;

const ZMyzCardHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            real: this.cardtype === LicenseType.REAL,
            trial: this.cardtype === LicenseType.TRIAL,
            temp: this.cardtype === LicenseType.TEMP,
            faded: this.faded,
        };
    }
    render() {
        return (h("header", { key: '904634bcd078321c3142c3b92eb8ad14244c6c4b', class: this.retrieveClass() }, h("slot", { key: 'c6e19f0f2b536def7a32c3dd9343439f8d532e98', name: "aria-heading" }), h("span", { key: '36da9db6eb1620f5ef38db575ec81196997ccb48', class: "card-title", ref: (el) => (this.ellipsis = el), title: this.getTitle() }, this.titolo), h("slot", { key: '7f3f94bb0161e385189963b861eb61ef224c1548', name: "icon" })));
    }
};
ZMyzCardHeader.style = ZMyzCardHeaderStyle0;

export { ZMyzCardComponent as z_myz_card, ZMyzCardBody as z_myz_card_body, ZMyzCardCover as z_myz_card_cover, ZMyzCardHeader as z_myz_card_header };

//# sourceMappingURL=z-myz-card_4.entry.js.map
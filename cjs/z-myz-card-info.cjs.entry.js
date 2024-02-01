'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-195ca522.js');
const index$1 = require('./index-cf9497bc.js');
const utils = require('./utils-ee86db4f.js');
require('./breakpoints-ebe1a437.js');

const stylesCss = ":host{width:100%;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{position:relative;display:grid;width:calc(100% + calc(var(--space-unit) * 2));height:402px;box-sizing:border-box;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 3);border:var(--border-size-small) solid var(--color-primary01);margin-left:calc(-1 * var(--space-unit));background:var(--color-surface01);border-radius:0;box-shadow:0 2px 4px 0 rgb(66 69 72 / 35%)}:host>div>z-icon{position:absolute;top:var(--space-unit);right:var(--space-unit);cursor:pointer;fill:var(--color-primary01)}:host>div>div.cta-wrapper{display:flex;flex-flow:column nowrap;align-self:end;justify-content:space-between}:host>div>div.content-wrapper{position:relative;overflow:hidden;align-self:stretch}:host>div>div.content-wrapper>section{box-sizing:border-box;padding:var(--space-unit) 0;border-bottom:var(--border-size-small) solid var(--color-surface04);color:var(--color-surface05);font-size:14px;line-height:20px}:host>div>div.content-wrapper>section:last-child{border-bottom:none}:host>div>div.content-wrapper>section.info-wrapper{position:relative;overflow:hidden;box-sizing:border-box}:host>div>div.content-wrapper>section.info-wrapper.hidden::after{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg, rgb(255 0 0 / 0%), rgb(255 0 0 / 0%) 60%, white);content:\"\";pointer-events:none}:host>div>div.content-wrapper>section>span.license-heading{display:flex;justify-content:space-between}:host>div>div.content-wrapper>section>span.license-heading>span.expired{color:var(--color-secondary02);font-size:12px;font-weight:600}:host>div>div.content-wrapper>section>span.license-heading>span.expiring{color:var(--color-warning01);font-size:12px;font-weight:600}:host>div>div.content-wrapper>z-popover{position:absolute;top:0;left:calc(var(--space-unit) * 4)}";

const ZMyzCardInfo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.flipCard = index.createEvent(this, "flipCard", 7);
    /** tabindex link attribute (optional) */
    this.htmltabindex = 0;
    this.hiddenContent = false;
    this.tooltip = false;
    this.emitFlipCard = this.emitFlipCard.bind(this);
  }
  emitFlipCard(showBack = false) {
    this.flipCard.emit(showBack);
  }
  componentWillLoad() {
    this.setStringOrArray();
  }
  componentWillUpdate() {
    this.setStringOrArray();
  }
  componentDidRender() {
    this.handleContentHeight();
  }
  handleContentHeight() {
    if (!this.contentWrapper && !this.infoWrapper) {
      this.hiddenContent = false;
      return;
    }
    if (this.contentWrapper.scrollHeight > this.contentWrapper.offsetHeight ||
      this.infoWrapper.scrollHeight > this.infoWrapper.offsetHeight) {
      const height = this.contentWrapper.offsetHeight -
        this.onlineLicenseWrapper.offsetHeight -
        this.offlineLicenseWrapper.offsetHeight;
      this.infoWrapper.style.height = `${height}px`;
      this.hiddenContent = true;
      return;
    }
    this.hiddenContent = false;
  }
  setStringOrArray() {
    if (typeof this.data === "string") {
      this.cardData = JSON.parse(this.data);
    }
    else {
      this.cardData = this.data;
    }
  }
  renderCloseIcon() {
    return (index.h("z-icon", { name: "multiply-circled-filled", height: 18, width: 18, onClick: () => this.emitFlipCard(false), tabindex: this.htmltabindex, onKeyUp: (e) => {
        utils.handleKeyboardSubmit(e, this.emitFlipCard, false);
      } }));
  }
  renderGeneralSection() {
    var _a, _b;
    const title = (_a = this === null || this === void 0 ? void 0 : this.cardData) === null || _a === void 0 ? void 0 : _a.title;
    const description = (_b = this === null || this === void 0 ? void 0 : this.cardData) === null || _b === void 0 ? void 0 : _b.description;
    return (index.h("section", { class: `info-wrapper ${this.hiddenContent ? "hidden" : ""}`, onClick: () => {
        if (this.hiddenContent) {
          this.tooltip = !this.tooltip;
        }
      }, ref: (el) => (this.infoWrapper = el) }, this.renderAuthor(), this.renderYear(), title, index.h("br", null), description));
  }
  renderAuthor() {
    var _a;
    const author = (_a = this === null || this === void 0 ? void 0 : this.cardData) === null || _a === void 0 ? void 0 : _a.author;
    if (!author) {
      return null;
    }
    return (index.h("span", null, "Autore: ", index.h("b", null, author), index.h("br", null)));
  }
  renderYear() {
    var _a;
    const year = (_a = this === null || this === void 0 ? void 0 : this.cardData) === null || _a === void 0 ? void 0 : _a.year;
    if (!year) {
      return null;
    }
    return (index.h("span", null, "Anno: ", index.h("b", null, year), index.h("br", null)));
  }
  renderTooltip() {
    if (!this.tooltip) {
      return;
    }
    if (!this.cardData) {
      return;
    }
    const { title, year, author, description } = this.cardData;
    return (index.h("z-popover", { position: index$1.PopoverPosition.RIGHT, onClick: () => (this.tooltip = false) }, `${title} ${year} ${author} ${description}`));
  }
  setExpirationLicenseMessage(type) {
    if ((type === "online" && this.cardData.onlineLicense.expired) ||
      (type === "offline" && this.cardData.offlineLicense.expired)) {
      return index.h("span", { class: "expired" }, "SCADUTA");
    }
    if ((type === "online" && this.cardData.onlineLicense.expiring) ||
      (type === "offline" && this.cardData.offlineLicense.expiring)) {
      return index.h("span", { class: "expiring" }, "IN SCADENZA");
    }
  }
  renderOnlineLicenseSection() {
    var _a;
    if (!((_a = this === null || this === void 0 ? void 0 : this.cardData) === null || _a === void 0 ? void 0 : _a.onlineLicense)) {
      return;
    }
    return (index.h("section", { ref: (el) => (this.onlineLicenseWrapper = el) }, index.h("span", { class: "license-heading" }, index.h("span", null, "Licenza online"), this.setExpirationLicenseMessage("online")), "Scadenza il ", index.h("b", null, this.cardData.onlineLicense.expiration), index.h("br", null)));
  }
  renderOfflineLicenseSection() {
    var _a;
    if (!((_a = this === null || this === void 0 ? void 0 : this.cardData) === null || _a === void 0 ? void 0 : _a.offlineLicense)) {
      return;
    }
    return (index.h("section", { ref: (el) => (this.offlineLicenseWrapper = el) }, index.h("span", { class: "license-heading" }, index.h("span", null, "Licenza offline"), this.setExpirationLicenseMessage("offline")), "Scadenza il ", index.h("b", null, this.cardData.offlineLicense.expiration), index.h("br", null), "Installazioni disponibili: ", index.h("b", null, this.cardData.offlineLicense.installations)));
  }
  render() {
    return (index.h("div", null, this.renderCloseIcon(), index.h("div", { class: "content-wrapper", ref: (el) => (this.contentWrapper = el) }, this.renderGeneralSection(), this.renderTooltip(), this.renderOnlineLicenseSection(), this.renderOfflineLicenseSection()), index.h("div", { class: "cta-wrapper" }, index.h("slot", null))));
  }
};
ZMyzCardInfo.style = stylesCss;

exports.z_myz_card_info = ZMyzCardInfo;

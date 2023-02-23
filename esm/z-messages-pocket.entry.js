import { r as registerInstance, h } from './index-a2ca4b97.js';
import { p as PocketStatus } from './index-525f32e2.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>z-pocket{width:100%}:host>z-pocket.closed{width:158px}:host>z-pocket>z-pocket-header{color:var(--color-primary01);fill:var(--color-primary01);font-size:12px;font-weight:var(--font-sb)}:host>z-pocket>z-pocket-header span.badge{display:inline-block;padding:0 calc(var(--space-unit) * 0.5);margin-left:var(--space-unit);background:var(--color-secondary02);border-radius:50%;color:var(--color-surface01)}:host>z-pocket>z-pocket-header>z-icon{margin-left:var(--space-unit)}:host>z-pocket>z-pocket-body>div.body{overflow:hidden;padding:var(--space-unit);margin:0 var(--space-unit)}:host>z-pocket.preview>z-pocket-body{position:relative}:host>z-pocket.preview>z-pocket-body>div.gradient{position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(rgb(255 0 0 / 0%), white)}:host>z-pocket.open>z-pocket-body>div.body{overflow:auto;max-height:calc(100vh - 166px);scrollbar-width:none}:host ::-webkit-scrollbar{width:0}@media only screen and (min-width: 768px){:host>z-pocket{width:768px;margin:0 calc((100% - 768px) / 2)}:host>z-pocket.closed{margin:0 calc((100% - 158px) / 2)}:host>z-pocket.open>z-pocket-body>div.body{max-height:326px}}@media only screen and (min-width: 1152px){:host>z-pocket.open>z-pocket-body>div.body{scrollbar-color:var(--color-primary01) var(--color-surface03);scrollbar-width:thin}:host ::-webkit-scrollbar{width:10px;background:linear-gradient(\n      90deg,\n      var(--color-surface01) 2px,\n      var(--color-surface03) 4px,\n      var(--color-surface01) 8px\n    );border-radius:var(--radius-base)}:host ::-webkit-scrollbar-thumb{width:var(--space-unit);background-color:var(--color-primary01);border-radius:var(--radius-base)}}";

const ZMessagesPocket = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** pocket status */
    this.status = PocketStatus.PREVIEW;
  }
  handlePocketToggle(e) {
    if (e.detail.id === this.pocketid) {
      this.status = e.detail.status;
    }
  }
  renderHeader() {
    let message;
    let icon;
    switch (this.status) {
      case PocketStatus.PREVIEW:
      case PocketStatus.CLOSED:
        message = (h("span", null, "Messaggi ", h("span", { class: "badge" }, this.messages)));
        icon = "chevron-up";
        break;
      case PocketStatus.OPEN:
        message = h("span", null, "Riduci");
        icon = "chevron-down";
        break;
    }
    return (h("z-pocket-header", { pocketid: this.pocketid }, message, h("z-icon", { name: icon, width: 14, height: 14 })));
  }
  renderBody() {
    return (h("z-pocket-body", { pocketid: this.pocketid }, h("div", { class: "body" }, h("slot", null)), h("div", { class: "gradient" })));
  }
  render() {
    return (h("z-pocket", { pocketid: this.pocketid, status: this.status, class: this.status }, this.renderHeader(), this.renderBody()));
  }
};
ZMessagesPocket.style = stylesCss;

export { ZMessagesPocket as z_messages_pocket };

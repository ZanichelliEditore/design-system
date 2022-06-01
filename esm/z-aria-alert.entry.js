import { r as registerInstance, h, H as Host } from './index-90e18641.js';
import { Z as ZAriaAlertMode } from './index-5fef5bc0.js';

const ZAriaAlert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mode = ZAriaAlertMode.polite;
  }
  render() {
    return (h(Host, { "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, h("slot", null)));
  }
};

export { ZAriaAlert as z_aria_alert };

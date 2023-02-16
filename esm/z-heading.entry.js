import { r as registerInstance, h } from './index-a2ca4b97.js';

const ZHeading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Font weight variant */
    this.variant = "regular";
  }
  render() {
    return (h("z-typography", { tabIndex: 0, component: this.component || `h${this.level}`, level: `h${this.level}`, variant: this.variant }, h("slot", null)));
  }
};

export { ZHeading as z_heading };

import { r as registerInstance, c as createEvent, h } from './index-fa9e549c.js';
import { T as ThemeVariant } from './index-6b86a3f1.js';

const stylesCss = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}button{display:flex;justify-content:center;align-content:center;background-color:transparent;border:none;padding:0}button>z-icon{color:var(--bg-white);fill:currentColor}button>z-icon.light{color:var(--bg-grey-900);fill:currentColor}";

const ZAppSwitcher = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.appButtonClick = createEvent(this, "appButtonClick", 7);
    /** theme variant, default 'dark' */
    this.theme = ThemeVariant.dark;
    this.isopen = false;
    this.emitAppButtonClick = this.emitAppButtonClick.bind(this);
  }
  emitAppButtonClick() {
    this.isopen = !this.isopen;
    this.appButtonClick.emit({ isopen: this.isopen });
  }
  render() {
    return (h("button", { title: "app-switcher", onClick: () => this.emitAppButtonClick() }, h("z-icon", { name: "app-switcher", class: this.theme })));
  }
};
ZAppSwitcher.style = stylesCss;

export { ZAppSwitcher as z_app_switcher };

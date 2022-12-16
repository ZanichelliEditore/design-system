'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-fa110f37.js');

const stylesCss = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}button{display:flex;align-content:center;justify-content:center;padding:0;border:none;background-color:transparent}button>z-icon{color:var(--bg-white);fill:currentcolor}button>z-icon.light{color:var(--bg-grey-900);fill:currentcolor}";

const ZAppSwitcher = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.appButtonClick = index.createEvent(this, "appButtonClick", 7);
    /** theme variant, default 'dark' */
    this.theme = index$1.ThemeVariant.DARK;
    this.isopen = false;
    this.emitAppButtonClick = this.emitAppButtonClick.bind(this);
  }
  emitAppButtonClick() {
    this.isopen = !this.isopen;
    this.appButtonClick.emit({ isopen: this.isopen });
  }
  render() {
    return (index.h("button", { title: "app-switcher", onClick: () => this.emitAppButtonClick() }, index.h("z-icon", { name: "app-switcher", class: this.theme })));
  }
};
ZAppSwitcher.style = stylesCss;

exports.z_app_switcher = ZAppSwitcher;

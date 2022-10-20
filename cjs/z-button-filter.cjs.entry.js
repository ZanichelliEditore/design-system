'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');

const stylesCss = "button.container{min-height:32px;padding:0 calc(var(--space-unit) * 2);border:var(--border-size-small) solid var(--bg-grey-200);border-radius:16px;box-shadow:0 2px 5px 0 var(--bg-neutral-300);cursor:pointer;font-family:var(--dashboard-font);font-size:12px;font-weight:var(--font-sb);letter-spacing:0.17px;line-height:32px;opacity:1;text-align:center;transition:all 200ms linear}button.container.small{min-height:24px;line-height:24px}button.container:focus{outline:0}button.container::-moz-focus-inner{border:0}.text-container{margin-left:4px}button.container,button.container:focus,button.container:hover{background-color:var(--bg-white);color:var(--text-grey-700);fill:var(--text-grey-700)}button.container.isactive{background-color:var(--bg-white);color:var(--myz-blue);fill:var(--myz-blue)}button.container.isactive:hover{color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}button.container.isactive:focus{border-color:var(--myz-blue-dark);background-color:var(--myz-blue-dark);box-shadow:0 0 4px 0 var(--text-grey-800);color:var(--bg-white);fill:var(--bg-white)}button z-icon{display:inline-block}";

const ZButtonFilter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.removefilter = index.createEvent(this, "removefilter", 7);
    /** disable action on button */
    this.isfixed = false;
    /** add icon to button */
    this.hasicon = true;
    /** reduce button size (optional) */
    this.issmall = false;
    this.handleRemovingFilterClick = this.handleRemovingFilterClick.bind(this);
  }
  handleRemovingFilterClick() {
    this.removefilter.emit({
      filterid: this.filterid,
    });
  }
  renderFixedPillow(filtername) {
    return (index.h("button", { class: `container ${this.issmall ? "small" : ""}` }, this.renderIcon(), this.renderContent(filtername)));
  }
  renderDynamicPillow(filtername) {
    return (index.h("button", { class: `container isactive ${this.issmall ? "small" : ""}`, onClick: this.handleRemovingFilterClick }, this.renderIcon(), this.renderContent(filtername)));
  }
  renderIcon() {
    if (!this.hasicon) {
      return null;
    }
    return (index.h("z-icon", { class: "close-icon-container", name: "multiply", height: 12, width: 12 }));
  }
  renderContent(filtername) {
    return index.h("span", { class: "text-container" }, filtername);
  }
  render() {
    if (this.isfixed) {
      return this.renderFixedPillow(this.filtername);
    }
    return this.renderDynamicPillow(this.filtername);
  }
};
ZButtonFilter.style = stylesCss;

exports.z_button_filter = ZButtonFilter;

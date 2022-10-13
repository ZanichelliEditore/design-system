import { r as registerInstance, c as createEvent, h } from './index-a2ca4b97.js';

const stylesCss = "button.container{min-height:32px;line-height:32px;border:var(--border-size-small) solid var(--bg-grey-200);border-radius:16px;box-shadow:0px 2px 5px 0px var(--bg-neutral-300);-webkit-box-shadow:0px 2px 5px 0px var(--bg-neutral-300);-moz-box-shadow:0px 2px 5px 0px var(--bg-neutral-300);text-align:center;padding:0 calc(var(--space-unit) * 2);cursor:pointer;letter-spacing:0.17px;font-family:var(--dashboard-font);font-size:12px;font-weight:var(--font-sb);opacity:1;transition:all 200ms linear}button.container.small{min-height:24px;line-height:24px}button.container:focus{outline:0}button.container::-moz-focus-inner{border:0}.text-container{margin-left:4px}button.container,button.container:focus,button.container:hover{background-color:var(--bg-white);color:var(--text-grey-700);fill:var(--text-grey-700)}button.container.isactive{background-color:var(--bg-white);color:var(--myz-blue);fill:var(--myz-blue)}button.container.isactive:hover{color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}button.container.isactive:focus{background-color:var(--myz-blue-dark);border-color:var(--myz-blue-dark);box-shadow:0px 0px 4px 0px var(--text-grey-800);color:var(--bg-white);fill:var(--bg-white)}button z-icon{display:inline-block}";

const ZButtonFilter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.removefilter = createEvent(this, "removefilter", 7);
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
    return (h("button", { class: `container ${this.issmall ? "small" : ""}` }, this.renderIcon(), this.renderContent(filtername)));
  }
  renderDynamicPillow(filtername) {
    return (h("button", { class: `container isactive ${this.issmall ? "small" : ""}`, onClick: this.handleRemovingFilterClick }, this.renderIcon(), this.renderContent(filtername)));
  }
  renderIcon() {
    if (!this.hasicon)
      return null;
    return (h("z-icon", { class: "close-icon-container", name: "multiply", height: 12, width: 12 }));
  }
  renderContent(filtername) {
    return h("span", { class: "text-container" }, filtername);
  }
  render() {
    if (this.isfixed) {
      return this.renderFixedPillow(this.filtername);
    }
    return this.renderDynamicPillow(this.filtername);
  }
};
ZButtonFilter.style = stylesCss;

export { ZButtonFilter as z_button_filter };

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');

const stylesCss = "button{font-family:var(--dashboard-font);font-weight:var(--font-sb);height:36px;border:var(--border-size-medium) solid;border-color:transparent;border-radius:var(--border-radius);color:var(--myz-blue);fill:var(--myz-blue);background-color:var(--bg-white);box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.2);text-transform:uppercase;font-size:14px;outline:none;padding-left:0px;padding-right:calc(var(--space-unit) * 2);transition:all 200ms linear;cursor:pointer}button::-moz-focus-inner{border:0}button:hover{color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}button:focus{border-color:var(--myz-blue);color:var(--myz-blue);fill:var(--myz-blue);box-shadow:0px 0px 2px 2px var(--accent-dark)}button:active{border-color:var(--myz-blue-light);color:var(--myz-blue-light);fill:var(--myz-blue-light);box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.4)}button:disabled{color:var(--text-grey-700);fill:var(--text-grey-700)}z-icon{display:inline-block;margin:0 var(--space-unit) 0 calc(var(--space-unit) * 2);transform:rotate(360deg);transition:all 200ms linear}button.isopen{top:-20px}button.avoid-clicks{pointer-events:none}";

const ZToggleButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.toggleClick = index.createEvent(this, "toggleClick", 7);
    /** disabled status flag (optional) */
    this.isdisabled = false;
    /** open by default (optional) */
    this.opened = false;
  }
  emitToggleClick() {
    if (this.isdisabled)
      return;
    this.opened = !this.opened;
    this.toggleClick.emit(this.opened);
  }
  retrieveButtonClass() {
    let className = this.opened && "isopen";
    if (this.avoidclick)
      className = className + " avoid-clicks";
    return className;
  }
  render() {
    return (index.h("button", { tabindex: this.avoidclick ? "-1" : "0", class: this.retrieveButtonClass(), disabled: this.isdisabled, onClick: () => this.emitToggleClick() }, index.h("z-icon", { name: this.opened ? "chevron-down" : "chevron-up", width: 16, height: 16 }), this.label));
  }
};
ZToggleButton.style = stylesCss;

exports.z_toggle_button = ZToggleButton;

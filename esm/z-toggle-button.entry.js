import { r as registerInstance, c as createEvent, h } from './index-a2ca4b97.js';

const stylesCss = "button{height:36px;padding-right:calc(var(--space-unit) * 2);padding-left:0;border:var(--border-size-medium) solid;border-color:transparent;background-color:var(--bg-white);border-radius:var(--border-radius);box-shadow:0 0 4px 0 rgb(0 0 0 / 20%);color:var(--myz-blue);cursor:pointer;fill:var(--myz-blue);font-family:var(--dashboard-font);font-size:14px;font-weight:var(--font-sb);outline:none;text-transform:uppercase}button::-moz-focus-inner{border:0}button:hover{color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}button:focus{box-shadow:var(--shadow-focus-primary);color:var(--myz-blue);fill:var(--myz-blue)}button:active{border-color:var(--myz-blue-light);box-shadow:0 2px 4px 0 rgb(0 0 0 / 40%);color:var(--myz-blue-light);fill:var(--myz-blue-light)}button:disabled{color:var(--text-grey-700);fill:var(--text-grey-700)}z-icon{display:inline-block;margin:0 var(--space-unit) 0 calc(var(--space-unit) * 2);transform:rotate(360deg);transition:all 200ms linear}button.isopen{top:-20px}button.avoid-clicks{pointer-events:none}";

const ZToggleButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toggleClick = createEvent(this, "toggleClick", 7);
    /** disabled status flag (optional) */
    this.isdisabled = false;
    /** open by default (optional) */
    this.opened = false;
  }
  emitToggleClick() {
    if (this.isdisabled) {
      return;
    }
    this.opened = !this.opened;
    this.toggleClick.emit(this.opened);
  }
  render() {
    return (h("button", { tabindex: this.avoidclick ? "-1" : "0", class: {
        "isopen": this.opened,
        "avoid-clicks": this.avoidclick,
      }, disabled: this.isdisabled, onClick: () => this.emitToggleClick() }, h("z-icon", { name: this.opened ? "chevron-down" : "chevron-up", width: 16, height: 16 }), this.label));
  }
};
ZToggleButton.style = stylesCss;

export { ZToggleButton as z_toggle_button };

import { r as registerInstance, h, H as Host } from './index-90e18641.js';
import { S as StatusTagStatus } from './index-e5e2b27f.js';
import { c as classnames } from './index-abb47b30.js';
import './_commonjsHelpers-9943807e.js';

const stylesCss = ":host{--z-icon-width:14px;--z-icon-height:14px;font-family:var(--font-family-sans);height:22px;border-radius:var(--border-radius);padding-right:4px;padding-left:4px;text-transform:uppercase;display:inline-flex;align-items:center}:host(.expandable)>z-icon{margin-right:0;transition:margin-right 0.3s ease-out 0.2s}:host(:not(.expandable))>z-icon:not(:last-child),:host(.expandable:hover)>z-icon:not(:last-child){margin-right:var(--space-unit);transition:margin-right 0.3s ease-out 0s}:host(.expandable)>span{max-width:0;transition:max-width 0.3s ease-out 0.2s;white-space:nowrap;overflow:hidden}:host(.expandable:hover)>span{max-width:20rem;transition:max-width 0.3s ease-out 0s}:host([status=\"warning\"]){background-color:var(--status-warning-yellow-lighter);color:var(--status-warning-yellow-dark);fill:var(--status-warning-yellow-dark)}:host([status=\"warning\"].light){background-color:transparent;color:var(--status-warning-yellow-dark);fill:var(--status-warning-yellow-dark)}:host([status=\"warning\"].dark){background-color:var(--status-warning-yellow-dark);color:var(--status-warning-yellow-lighter);fill:var(--status-warning-yellow-lighter)}:host([status=\"error\"]){background-color:var(--status-error-red-lighter);color:var(--status-error-red-dark);fill:var(--status-error-red-dark)}:host([status=\"error\"].light){background-color:transparent;color:var(--status-error-red-dark);fill:var(--status-error-red-dark)}:host([status=\"error\"].dark){background-color:var(--status-error-red-dark);color:var(--status-error-red-lighter);fill:var(--status-error-red-lighter)}:host([status=\"success\"]){background-color:var(--status-success-green-lighter);color:var(--status-success-green-dark);fill:var(--status-success-green-dark)}:host([status=\"success\"].light){background-color:transparent;color:var(--status-success-green-dark);fill:var(--status-success-green-dark)}:host([status=\"success\"].dark){background-color:var(--status-success-green-dark);color:var(--status-success-green-lighter);fill:var(--status-success-green-lighter)}:host([status=\"default\"]){background-color:var(--myz-blue-lighter);color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}:host([status=\"default\"].light){background-color:transparent;color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}:host([status=\"default\"].dark){background-color:var(--myz-blue-dark);color:var(--myz-blue-lighter);fill:var(--myz-blue-lighter)}:host([status=\"neutral\"]){background-color:var(--bg-grey-050);color:var(--text-grey-800);fill:var(--text-grey-800)}:host([status=\"neutral\"].light){background-color:transparent;color:var(--text-grey-800);fill:var(--text-grey-800)}:host([status=\"neutral\"].dark){background-color:var(--bg-grey-800);color:var(--text-white);fill:var(--text-white)}";

const ZStatusTag = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** [optional] Status tag color */
    this.status = StatusTagStatus.default;
    if (!this.icon && !this.text) {
      console.warn("z-status-tag must contain at least one prop between icon and text");
    }
  }
  render() {
    return (h(Host, { class: classnames(this.variant, "body-5-sb", {
        expandable: this.expandable && this.icon && this.text,
      }) }, this.icon && h("z-icon", { name: this.icon }), this.text && h("span", null, this.text)));
  }
};
ZStatusTag.style = stylesCss;

export { ZStatusTag as z_status_tag };

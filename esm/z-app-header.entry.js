import { r as registerInstance, h } from './index-3f358781.js';

const stylesCss = ":host{--app-header-typography-1-size:24px;--app-header-typography-2-size:28px;--app-header-typography-3-size:32px;--app-header-typography-4-size:36px;--app-header-typography-5-size:42px;--app-header-typography-6-size:48px;--app-header-typography-7-size:54px;--app-header-typography-8-size:60px;--app-header-typography-9-size:68px;--app-header-typography-10-size:76px;--app-header-typography-11-size:84px;--app-header-typography-12-size:92px;--app-header-typography-1-lineheight:1.33;--app-header-typography-2-lineheight:1.29;--app-header-typography-3-lineheight:1.25;--app-header-typography-4-lineheight:1.24;--app-header-typography-5-lineheight:1.24;--app-header-typography-6-lineheight:1.25;--app-header-typography-7-lineheight:1.2;--app-header-typography-8-lineheight:1.26;--app-header-typography-9-lineheight:1.24;--app-header-typography-10-lineheight:1.26;--app-header-typography-11-lineheight:1.2;--app-header-typography-12-lineheight:1.2;--app-header-typography-1-tracking:calc(-0.2 / 1em);--app-header-typography-2-tracking:calc(-0.4 / 1em);--app-header-typography-3-tracking:calc(-0.6 / 1em);--app-header-typography-4-tracking:calc(-0.8 / 1em);--app-header-typography-5-tracking:calc(-1 / 1em);--app-header-typography-6-tracking:calc(-1.2 / 1em);--app-header-typography-7-tracking:calc(-1.4 / 1em);--app-header-typography-8-tracking:calc(-1.6 / 1em);--app-header-typography-9-tracking:calc(-1.8 / 1em);--app-header-typography-10-tracking:calc(-2 / 1em);--app-header-typography-11-tracking:calc(-2.2 / 1em);--app-header-typography-12-tracking:calc(-2.4 / 1em);display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}:host(:not(:empty)){padding-top:calc(var(--space-unit) * 3.5);padding-bottom:calc(var(--space-unit) * 4.5)}::slotted(*){margin:0;color:var(--text-grey-800)}::slotted([slot='title']){font-weight:700;font-family:'IBM Plex Serif', serif;font-size:var(--app-header-typography-3-size);line-height:var(--app-header-typography-3-lineheight);letter-spacing:var(--app-header-typography-3-tracking)}::slotted([slot='subtitle']){margin-top:var(--space-unit);font-family:var(--dashboard-font);font-style:italic;font-weight:500;font-size:20px;line-height:1.2}@media only screen and (min-width: 768px){::slotted([slot='title']){font-size:var(--app-header-typography-5-size);line-height:var(--app-header-typography-5-lineheight);letter-spacing:var(--app-header-typography-5-tracking)}}@media only screen and (min-width: 1152px){::slotted([slot='title']){font-size:var(--app-header-typography-7-size);line-height:var(--app-header-typography-7-lineheight);letter-spacing:var(--app-header-typography-7-tracking)}}@media only screen and (min-width: 1366px){::slotted([slot='title']){font-size:var(--app-header-typography-9-size);line-height:var(--app-header-typography-9-lineheight);letter-spacing:var(--app-header-typography-9-tracking)}}";

const ZAppHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return [
      h("slot", { name: "title" }),
      h("slot", { name: "subtitle" }),
    ];
  }
};
ZAppHeader.style = stylesCss;

export { ZAppHeader as z_app_header };

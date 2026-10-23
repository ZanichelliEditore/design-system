import { r as registerInstance, h } from './index-DafJ7_Il.js';

const stylesCss = () => `:host{position:absolute;overflow:hidden;width:1px;height:1px;padding:0;border:0;margin:0 -1px -1px 0;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}`;

const ZVisuallyHidden = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("slot", { key: 'e5b7767ebb02bdbed941d12f89f1be1ca715eb8c' });
    }
};
ZVisuallyHidden.style = stylesCss();

export { ZVisuallyHidden as z_visually_hidden };

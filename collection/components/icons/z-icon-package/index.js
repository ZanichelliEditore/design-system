import { Component, h } from '@stencil/core';
import { icons } from '../z-icon/icons';
export class ZIconPackage {
    render() {
        const iconsNames = Object.keys(icons);
        return (h("div", null, iconsNames.map((icon) => {
            return (h("div", null,
                h("z-icon", { name: icon }),
                h("label", null, icon)));
        })));
    }
    static get is() { return "z-icon-package"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get styleUrls() { return {
        "$": ["styles.css"]
    }; }
}

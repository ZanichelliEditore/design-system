import { Component, Prop, Event, h } from "@stencil/core";
export class ZButtonFilter {
    constructor() {
        /** disable action on button */
        this.isfixed = false;
        /** add icon to button */
        this.hasicon = true;
        this.handleRemovingFilterClick = this.handleRemovingFilterClick.bind(this);
    }
    handleRemovingFilterClick() {
        this.removefilter.emit({
            filterid: this.filterid
        });
    }
    renderFixedPillow(filtername) {
        return (h("button", { class: "container" },
            this.hasicon && h("z-icon", { class: "close-icon-container", name: "close", height: 12, width: 12 }),
            h("span", { class: "text-container" }, filtername)));
    }
    renderDynamicPillow(filtername) {
        return (h("button", { class: "container isactive" },
            this.hasicon && h("z-icon", { class: "close-icon-container", name: "close", height: 12, width: 12, onClick: this.handleRemovingFilterClick }),
            h("span", { class: "text-container" }, filtername)));
    }
    render() {
        if (this.isfixed) {
            return this.renderFixedPillow(this.filtername);
        }
        return this.renderDynamicPillow(this.filtername);
    }
    static get is() { return "z-button-filter"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get styleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get properties() { return {
        "filtername": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "filter text content"
            },
            "attribute": "filtername",
            "reflect": false
        },
        "isfixed": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "disable action on button"
            },
            "attribute": "isfixed",
            "reflect": false,
            "defaultValue": "false"
        },
        "hasicon": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "add icon to button"
            },
            "attribute": "hasicon",
            "reflect": false,
            "defaultValue": "true"
        },
        "filterid": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "filter id"
            },
            "attribute": "filterid",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "removefilter",
            "name": "removefilter",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "remove filter click event, returns filterid"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}

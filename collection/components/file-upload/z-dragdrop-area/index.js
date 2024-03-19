import { h } from "@stencil/core";
export class ZDragdropArea {
    constructor() {
        this.dragAndDropLabel = undefined;
    }
    fileDroppedHandler(files) {
        this.fileDropped.emit(files);
    }
    renderOnDragOverMessage() {
        return (h("div", { class: "dragover-container" }, h("div", { class: "dragover-message" }, h("span", { class: "body-2-sb" }, this.dragAndDropLabel))));
    }
    render() {
        return (h("div", { key: '8bd841a6a59b438bd0e794a842aa6326dd88ef04', tabIndex: 0, ref: (val) => (this.dragDropContainer = val), class: "dragdrop", onDragOver: (e) => {
                e.preventDefault();
                this.dragDropContainer.classList.add("dragover");
            }, onDragLeave: () => {
                this.dragDropContainer.classList.remove("dragover");
            }, onDrop: (e) => {
                e.preventDefault();
                if (e.dataTransfer.files.length) {
                    this.dragDropContainer.classList.remove("dragover");
                    this.fileDroppedHandler(e.dataTransfer.files);
                }
            } }, this.renderOnDragOverMessage(), h("slot", { key: 'd99944c1db4408ff5028f628e35c9d5225a37055' })));
    }
    static get is() { return "z-dragdrop-area"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["styles.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["styles.css"]
        };
    }
    static get properties() {
        return {
            "dragAndDropLabel": {
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
                    "text": "drag & drop button label"
                },
                "attribute": "drag-and-drop-label",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "fileDropped",
                "name": "fileDropped",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when user drop one or more files"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=index.js.map

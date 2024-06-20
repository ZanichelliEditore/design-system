import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.dragdrop{position:relative;display:-ms-flexbox;display:flex;height:228px;-ms-flex-direction:column;flex-direction:column;padding:calc(var(--space-unit) * 2);border-color:var(--color-surface04);background-color:var(--color-surface02);background-image:url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='2' ry='2' stroke='%23CACCCEFF' stroke-width='2' stroke-dasharray='15%2c 10%2c 14%2c 11' stroke-dashoffset='3' stroke-linecap='square'/%3e%3c/svg%3e\");border-radius:2px;color:var(--color-default-text)}:host>.dragdrop.dragover *{pointer-events:none}:host>.dragdrop .dragover-container{position:absolute;z-index:10;top:0;left:0;display:none;width:100%;height:100%;background-color:var(--color-primary03);-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary)}:host>.dragdrop .dragover-container .dragover-message{padding:10px 28px;background-color:var(--color-link-primary);color:var(--color-text-inverse)}:host>.dragdrop.dragover .dragover-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}";
const ZDragdropAreaStyle0 = stylesCss;

const ZDragdropArea = /*@__PURE__*/ proxyCustomElement(class ZDragdropArea extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.fileDropped = createEvent(this, "fileDropped", 7);
        this.dragAndDropLabel = undefined;
    }
    fileDroppedHandler(files) {
        this.fileDropped.emit(files);
    }
    renderOnDragOverMessage() {
        return (h("div", { class: "dragover-container" }, h("div", { class: "dragover-message" }, h("span", { class: "body-2-sb" }, this.dragAndDropLabel))));
    }
    render() {
        return (h("div", { key: '41334ac77bca3fb0d30518480b702c815d95b125', tabIndex: 0, ref: (val) => (this.dragDropContainer = val), class: "dragdrop", onDragOver: (e) => {
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
            } }, this.renderOnDragOverMessage(), h("slot", { key: '83344ee14fcec799690b644fe0a56cc86e1b4476' })));
    }
    static get style() { return ZDragdropAreaStyle0; }
}, [1, "z-dragdrop-area", {
        "dragAndDropLabel": [1, "drag-and-drop-label"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-dragdrop-area"];
    components.forEach(tagName => { switch (tagName) {
        case "z-dragdrop-area":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZDragdropArea);
            }
            break;
    } });
}

export { ZDragdropArea as Z, defineCustomElement as d };

//# sourceMappingURL=index7.js.map
import { Component, Prop, h, State, Event } from "@stencil/core";
import Hammer from "hammerjs";
import { handleKeyboardSubmit } from "../../../utils/utils";
export class ZPaginationBar {
    constructor() {
        /** current displayed page (mutable) */
        this.currentpage = 1;
        /** initial page (mutable) */
        this.startpage = 1;
        /** array of history of visited pages (mutable, optional) */
        this.listhistoryrow = [];
        this.currentPages = [];
        this.velocityConstantMultiplier = 2;
        this.navigateRight = this.navigateRight.bind(this);
        this.navigateLeft = this.navigateLeft.bind(this);
        this.emitGoToPage = this.emitGoToPage.bind(this);
    }
    componentDidLoad() {
        this.scrollPage = this.scrollPage.bind(this);
        let mc = new Hammer(this.bar);
        // listen to events...
        mc.on("swiperight", this.scrollPage);
        mc.on("swipeleft", this.scrollPage);
    }
    componentWillRender() {
        this.initPagination();
    }
    componentWillUpdate() {
        this.initPagination();
    }
    initPagination() {
        this.loadPages();
        if (this.historyraw) {
            this.parsehistoryraw(this.historyraw);
        }
    }
    parsehistoryraw(historyraw) {
        this.listhistoryrow = [...JSON.parse(historyraw)];
    }
    scrollPage(ev) {
        let vel = Math.round(Math.abs(ev.velocity)) * this.velocityConstantMultiplier;
        const deltaPage = Math.max(1, vel);
        switch (ev.type) {
            case "swiperight":
                if (!this.canNavigateLeft())
                    break;
                const newstartPage1 = this.startpage - deltaPage;
                if (newstartPage1 > 1)
                    this.emitChangeStartPage(newstartPage1);
                else
                    this.emitChangeStartPage(1);
                break;
            case "swipeleft":
                if (!this.canNavigateRight())
                    break;
                const newstartPage2 = this.startpage + deltaPage;
                if (newstartPage2 < this.pages - this.visiblepages + 1)
                    this.emitChangeStartPage(newstartPage2);
                else
                    this.emitChangeStartPage(this.pages - this.visiblepages + 1);
                break;
            default:
                break;
        }
    }
    emitGoToPage(page) {
        this.currentpage = page;
        this.goToPage.emit({ page: page });
        this.addPageToHistory.emit({ page: page });
    }
    emitChangeStartPage(startpage) {
        this.startpage = startpage;
        this.changeStartPage.emit({ startpage: startpage });
    }
    emitAddPageToHistory(page) {
        this.listhistoryrow.push(page);
        this.changeStartPage.emit({ page: page });
    }
    loadPages() {
        this.currentPages.splice(0);
        const lastPage = this.pageWindow();
        let i;
        for (i = 0; i < lastPage; i++) {
            this.currentPages.push(i + this.startpage);
        }
    }
    pageWindow() {
        return Math.min(this.pages, this.visiblepages); //How many pages are there to show?
    }
    canNavigateLeft() {
        return this.startpage > 1;
    }
    canNavigateRight() {
        return this.startpage + this.visiblepages - 1 < this.pages;
    }
    navigateLeft() {
        if (this.canNavigateLeft()) {
            this.startpage--;
            this.emitChangeStartPage(this.startpage);
            this.loadPages();
        }
    }
    navigateRight() {
        if (this.canNavigateRight()) {
            this.startpage++;
            this.emitChangeStartPage(this.startpage);
            this.loadPages();
        }
    }
    render() {
        return (h("div", { ref: el => (this.bar = el) },
            h("z-icon", { name: "chevron-left", class: !this.canNavigateLeft() && "disabled", onClick: () => this.navigateLeft(), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.navigateLeft), tabindex: this.canNavigateLeft() ? 0 : -1 }),
            this.currentPages.map(page => (h("z-pagination-page", { value: page, isselected: page === this.currentpage, onClick: () => this.emitGoToPage(page), onKeyDown: (ev) => handleKeyboardSubmit(ev, this.emitGoToPage, page), isvisited: this.listhistoryrow.includes(page) }))),
            h("z-icon", { name: "chevron-right", class: !this.canNavigateRight() && "disabled", onClick: () => this.navigateRight(), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.navigateRight), tabindex: this.canNavigateRight() ? 0 : -1 })));
    }
    static get is() { return "z-pagination-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get styleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get properties() { return {
        "pages": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "pages number"
            },
            "attribute": "pages",
            "reflect": false
        },
        "visiblepages": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "number of visible pages"
            },
            "attribute": "visiblepages",
            "reflect": false
        },
        "currentpage": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "current displayed page (mutable)"
            },
            "attribute": "currentpage",
            "reflect": false,
            "defaultValue": "1"
        },
        "startpage": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "initial page (mutable)"
            },
            "attribute": "startpage",
            "reflect": false,
            "defaultValue": "1"
        },
        "historyraw": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "json stringified history of visited pages (optional)"
            },
            "attribute": "historyraw",
            "reflect": false
        },
        "listhistoryrow": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "number[]",
                "resolved": "number[]",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "array of history of visited pages (mutable, optional)"
            },
            "defaultValue": "[]"
        }
    }; }
    static get states() { return {
        "currentPages": {}
    }; }
    static get events() { return [{
            "method": "goToPage",
            "name": "goToPage",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "emitted on page number click, returns page"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "changeStartPage",
            "name": "changeStartPage",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "emitted on start page change, returns startpage"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "addPageToHistory",
            "name": "addPageToHistory",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "emitted on adding page to isvisited array, returns page"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}

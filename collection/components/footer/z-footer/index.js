import { Component, Prop, State, h } from "@stencil/core";
import { mobileBreakpoint } from "../../../constants/breakpoints";
export class ZFooter {
    constructor() {
        this.isOpen = [];
    }
    componentWillLoad() {
        this.jsonData = JSON.parse(this.data);
        this.isOpen = Array(this.jsonData.zanichelliLinks.length).fill(false);
    }
    componentDidLoad() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    resize() {
        this.isMobile = window.innerWidth <= mobileBreakpoint;
    }
    handleOnHeaderClick(id) {
        // stencil non si accorge delle modifiche su isOpen quindi copio l'array prima
        var open = this.isOpen.slice(0);
        open[id] = !open[id];
        this.isOpen = [...open];
    }
    renderFooterSection(id, group) {
        return (h("nav", null,
            h("div", { class: "header" },
                h("h2", null, group.title),
                this.isMobile && (h("button", { onClick: () => this.handleOnHeaderClick(id) },
                    h("z-icon", { name: this.isOpen[id] ? "chevron-up" : "chevron-down", width: 16, height: 16 })))),
            h("div", { class: "content" },
                h("ul", { class: this.isOpen[id] ? "show" : "" }, group.items.map((item) => (h("li", null,
                    h("a", { href: item.link, target: item.target ? item.target : "_blank" }, item.label))))))));
    }
    renderFooterTop() {
        const zanichelliLinks = this.jsonData.zanichelliLinks;
        const bottomLinks = this.jsonData.bottomLinks;
        const zanichelliLinksToRender = zanichelliLinks.slice();
        if (this.isMobile) {
            zanichelliLinksToRender.push({
                title: "Altre informazioni",
                items: bottomLinks
            });
        }
        return (h("section", { class: "top" }, zanichelliLinksToRender.map((item, id) => this.renderFooterSection(id, item))));
    }
    renderZLogo() {
        const myzLink = this.jsonData.myzLink;
        return (h("z-logo", { link: myzLink.link, width: 144, height: 38, imagealt: myzLink.label, targetblank: true }));
    }
    renderAddress() {
        const zanichelliAddress = this.jsonData.zanichelliAddress;
        return h("p", null, zanichelliAddress);
    }
    renderSocial() {
        const social = this.jsonData.social;
        return (h("ul", { class: "social" }, social.map((item) => (h("li", null,
            h("a", { href: item.link, target: "_blank" },
                h("img", { src: item.icon, alt: item.description })))))));
    }
    renderCopyright() {
        if (!!this.copyrightuser) {
            return (h("p", null,
                "Copyright \u2013 2018-",
                new Date().getFullYear(),
                " ",
                this.copyrightuser,
                h("span", null, " All rights reserved ")));
        }
        else
            return;
    }
    renderCertification() {
        const certification = this.jsonData.certification;
        return h("p", null, certification);
    }
    renderBottomLinks() {
        const bottomLinks = this.jsonData.bottomLinks;
        if (!this.isMobile) {
            return (h("div", { class: "item bottom-links" },
                h("ul", null, bottomLinks.map((item) => (h("li", null,
                    h("a", { href: item.link, target: item.target ? item.target : "_blank" }, item.label)))))));
        }
    }
    renderFooterBottom() {
        return (h("section", { class: "bottom" },
            h("div", { class: "item logo" },
                this.renderZLogo(),
                this.renderCopyright(),
                this.renderCertification()),
            h("div", { class: "item" },
                this.renderAddress(),
                this.renderSocial()),
            this.renderBottomLinks()));
    }
    render() {
        if (this.jsonData) {
            return (h("footer", null,
                this.renderFooterTop(),
                this.renderFooterBottom()));
        }
    }
    static get is() { return "z-footer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get styleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get properties() { return {
        "data": {
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
                "text": "JSON stringified data to fill the footer"
            },
            "attribute": "data",
            "reflect": false
        },
        "copyrightuser": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "set copyright user (optional)"
            },
            "attribute": "copyrightuser",
            "reflect": false
        }
    }; }
    static get states() { return {
        "isOpen": {},
        "isMobile": {}
    }; }
}

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6bd008a2.js');
const utils = require('./utils-18e8ee34.js');

const stylesCss = "button{font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:14px;letter-spacing:0.3px;border-width:var(--border-base);border-style:solid;border-radius:var(--radius-base);height:44px;text-transform:uppercase;padding:0px var(--basex2);cursor:pointer;white-space:nowrap;outline:none;width:inherit}button::-moz-focus-inner{border:0}button.small{height:36px}button.primary{background-color:var(--myz-blue);border-color:var(--myz-blue);color:var(--bg-white);fill:var(--bg-white)}button.primary:hover{background-color:var(--myz-blue-dark);border-color:var(--myz-blue-dark);color:var(--bg-white);fill:var(--bg-white)}button.primary:focus{background-color:var(--myz-blue);border-color:var(--myz-blue);color:var(--bg-white);fill:var(--bg-white);-webkit-box-shadow:0px 0px 2px 2px var(--accent-dark);box-shadow:0px 0px 2px 2px var(--accent-dark)}button.primary:active{background-color:var(--myz-blue-light);border-color:var(--myz-blue-light);color:var(--bg-white);fill:var(--bg-white);-webkit-box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.4);box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.4)}button.primary:disabled{background-color:var(--bg-neutral-200);border-color:var(--bg-neutral-200);color:var(--text-grey-700);fill:var(--text-grey-700)}button.secondary{background-color:var(--bg-white);border-color:var(--myz-blue);color:var(--myz-blue);fill:var(--myz-blue)}button.secondary:hover{background-color:var(--bg-white);border-color:var(--myz-blue-dark);color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}button.secondary:focus{background-color:var(--bg-white);border-color:var(--myz-blue);color:var(--myz-blue);fill:var(--myz-blue);-webkit-box-shadow:0px 0px 2px 2px var(--accent-dark);box-shadow:0px 0px 2px 2px var(--accent-dark)}button.secondary:active{background-color:var(--bg-white);border-color:var(--myz-blue-light);color:var(--myz-blue-light);fill:var(--myz-blue-light);-webkit-box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.4);box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.4)}button.secondary:disabled{background-color:var(--bg-white);border-color:var(--bg-neutral-200);color:var(--text-grey-700);fill:var(--text-grey-700)}button.tertiary{background-color:transparent;border-color:transparent;color:var(--myz-blue);fill:var(--myz-blue)}button.tertiary:hover{background-color:transparent;border-color:transparent;color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}button.tertiary:focus{background-color:var(--bg-white);border-color:var(--bg-white);color:var(--myz-blue);fill:var(--myz-blue);-webkit-box-shadow:0px 0px 2px 2px var(--accent-dark);box-shadow:0px 0px 2px 2px var(--accent-dark)}button.tertiary:active{background-color:var(--bg-white);border-color:var(--bg-white);color:var(--myz-blue-light);fill:var(--myz-blue-light);-webkit-box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.4);box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.4)}button.tertiary:disabled{background-color:transparent;border-color:transparent;color:var(--text-grey-700);fill:var(--text-grey-700)}button>z-icon{margin-right:var(--half-x3)}button:disabled{pointer-events:none}";

/**
 * @slot - button label
 */
class ZButton {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** disable button */
        this.disabled = false;
        /** button type */
        this.type = utils.ButtonTypeEnum.button;
        /** graphic variant */
        this.variant = utils.ButtonVariantEnum.primary;
        /** reduce button size (optional) */
        this.issmall = false;
    }
    render() {
        this.hostElement.style.pointerEvents = this.disabled ? "none" : "auto";
        return (index.h("button", { id: this.htmlid, name: this.name, type: this.type, disabled: this.disabled, class: `${this.variant} ${this.issmall && "small"}` }, this.icon && index.h("z-icon", { name: this.icon, width: 16, height: 16 }), index.h("slot", null)));
    }
    get hostElement() { return index.getElement(this); }
}
ZButton.style = stylesCss;

const stylesCss$1 = "button.container{min-height:32px;line-height:32px;border:var(--border-size-small) solid var(--bg-grey-200);border-radius:16px;box-shadow:0px 2px 5px 0px var(--bg-neutral-300);-webkit-box-shadow:0px 2px 5px 0px var(--bg-neutral-300);-moz-box-shadow:0px 2px 5px 0px var(--bg-neutral-300);text-align:center;padding:0 var(--basex2);cursor:pointer;letter-spacing:0.17px;font-family:var(--dashboard-font);font-size:12px;font-weight:var(--font-sb);opacity:1;-webkit-transition:all 200ms linear;transition:all 200ms linear}button.container:focus{outline:0}button.container::-moz-focus-inner{border:0}.text-container{margin-left:4px}button.container,button.container:focus,button.container:hover{background-color:var(--bg-white);color:var(--text-grey-700);fill:var(--text-grey-700)}button.container.isactive{background-color:var(--bg-white);color:var(--myz-blue);fill:var(--myz-blue)}button.container.isactive:hover{color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}button.container.isactive:focus{background-color:var(--myz-blue-dark);border-color:var(--myz-blue-dark);-webkit-box-shadow:0px 0px 4px 0px var(--text-grey-800);box-shadow:0px 0px 4px 0px var(--text-grey-800);color:var(--bg-white);fill:var(--bg-white)}";

class ZButtonFilter {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** disable action on button */
        this.isfixed = false;
        /** add icon to button */
        this.hasicon = true;
        this.handleRemovingFilterClick = this.handleRemovingFilterClick.bind(this);
        this.removefilter = index.createEvent(this, "removefilter", 7);
    }
    handleRemovingFilterClick() {
        this.removefilter.emit({
            filterid: this.filterid
        });
    }
    renderFixedPillow(filtername) {
        return (index.h("button", { class: "container" }, this.hasicon && index.h("z-icon", { class: "close-icon-container", name: "close", height: 12, width: 12 }), index.h("span", { class: "text-container" }, filtername)));
    }
    renderDynamicPillow(filtername) {
        return (index.h("button", { class: "container isactive" }, this.hasicon && index.h("z-icon", { class: "close-icon-container", name: "close", height: 12, width: 12, onClick: this.handleRemovingFilterClick }), index.h("span", { class: "text-container" }, filtername)));
    }
    render() {
        if (this.isfixed) {
            return this.renderFixedPillow(this.filtername);
        }
        return this.renderDynamicPillow(this.filtername);
    }
}
ZButtonFilter.style = stylesCss$1;

const stylesCss$2 = "button{height:36px;border:var(--border-base) solid var(--myz-blue);border-radius:var(--radius-base);color:var(--myz-blue);fill:var(--myz-blue);background-color:var(--bg-white);outline:none;padding:0 var(--basex1);cursor:pointer}button::-moz-focus-inner{border:0}button:hover{border-color:var(--myz-blue-dark);color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}button:focus{border-color:var(--myz-blue);color:var(--myz-blue);fill:var(--myz-blue);-webkit-box-shadow:0px 0px 2px 2px var(--accent-dark);box-shadow:0px 0px 2px 2px var(--accent-dark)}button:active{border-color:var(--myz-blue-light);color:var(--myz-blue-light);fill:var(--myz-blue-light);-webkit-box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.4);box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.4)}button.selected{border-color:var(--myz-blue-dark);background-color:var(--myz-blue-dark);color:var(--bg-white);fill:var(--bg-white)}button>label{cursor:pointer;font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:14px;margin-right:var(--basex2)}button>span{font-family:var(--dashboard-font);font-weight:var(--font-rg);font-size:14px;margin-right:var(--half-x1)}button>z-icon{padding-top:var(--half-x1)}";

class ZButtonSort {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** label content (descending) */
        this.desclabel = this.label;
        /** sort label content (ascending) (optional) */
        this.sortlabelasc = 'A-Z';
        /** sort label content (descending) (optional) */
        this.sortlabeldesc = 'Z-A';
        /** selected flag (optional) */
        this.isselected = false;
        /** sortable flag (optional) */
        this.sortasc = true;
        this.buttonSortClick = index.createEvent(this, "buttonSortClick", 7);
    }
    emitButtonSortClick() {
        if (!this.isselected) {
            this.isselected = true;
        }
        else {
            this.sortasc = !this.sortasc;
        }
        this.buttonSortClick.emit({ buttonid: this.buttonid, sortAsc: this.sortasc });
    }
    render() {
        return (index.h("button", { id: this.buttonid, class: this.isselected && "selected", onClick: () => this.emitButtonSortClick() }, index.h("label", null, this.sortasc ? this.label : this.desclabel, this.counter && ` (${this.counter})`), index.h("span", null, this.sortasc ? this.sortlabelasc : this.sortlabeldesc), index.h("z-icon", { name: "drop-up-down", width: 16, height: 16 })));
    }
}
ZButtonSort.style = stylesCss$2;

const stylesCss$3 = "div{background-color:var(--bg-white);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;width:auto;-webkit-box-sizing:border-box;box-sizing:border-box;width:256px;height:522px;border:var(--border-base) solid var(--bg-grey-200);border-radius:var(--radius-base)}div.real,div.trial{border-color:var(--accent)}div.faded{border:none}div.highlighted{-webkit-box-shadow:0px 4px 8px 0px rgba(66, 69, 72, 0.4);box-shadow:0px 4px 8px 0px rgba(66, 69, 72, 0.4);outline:none}div.pressed{-webkit-box-shadow:0px 8px 16px 0px rgba(66, 69, 72, 0.4);box-shadow:0px 8px 16px 0px rgba(66, 69, 72, 0.4);outline:none}div:focus{-webkit-box-shadow:0px 0px 2px 2px var(--accent-dark);box-shadow:0px 0px 2px 2px var(--accent-dark);outline:none}";

/**
 * @slot  - generic card slot
 */
class ZCardComponent {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** pressed status */
        this.ispressed = false;
        /** highlighted status */
        this.ishighlighted = false;
    }
    retrieveClass() {
        let elemClasses = "";
        if (this.cardtype === utils.LicenseTypeEnum.real)
            elemClasses += "real";
        else if (this.cardtype === utils.LicenseTypeEnum.trial)
            elemClasses += "trial";
        if (this.faded) {
            elemClasses += " faded";
        }
        else if (this.ispressed) {
            elemClasses += " pressed";
        }
        else if (this.ishighlighted) {
            elemClasses += " highlighted";
        }
        return elemClasses;
    }
    render() {
        return (index.h("div", { class: this.retrieveClass(), tabindex: "0" }, index.h("slot", null)));
    }
}
ZCardComponent.style = stylesCss$3;

const stylesCss$4 = ":host{position:absolute;font-family:var(--dashboard-font);font-weight:var(--font-rg);width:100%;top:0px;left:0px;z-index:2}.relativeContainer{position:relative;height:48px;display:grid;grid-template-columns:34px auto 62px;grid-template-rows:1fr;grid-column-gap:8px;-ms-flex-align:center;align-items:center;padding:0 var(--basex1);outline:none}.relativeContainer::-moz-focus-inner{border:0}:host div.addAlert{background:var(--status-success-green-lighter)}:host div.removeAlert{background:var(--status-warning-yellow-lighter);border:var(--border-base) solid var(--bg-grey-200);border-top:none}:host div>.contentText{color:var(--text-grey-800);font-size:14px;height:20px;letter-spacing:0.16px;line-height:20px}:host div>.contentAction{color:var(--myz-blue);font-size:12px;font-weight:var(--font-sb);height:20px;letter-spacing:0.32px;line-height:20px;cursor:pointer}:host div>z-icon{justify-self:center}:host div>z-icon.addAlert{color:var(--status-success-green);fill:var(--status-success-green)}:host div>z-icon.removeAlert{color:var(--status-warning-yellow-dark);fill:var(--status-warning-yellow-dark)}";

class ZCardAlert {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.undoAction = index.createEvent(this, "undoAction", 7);
    }
    emitUndoAction() {
        this.undoAction.emit({ actionType: this.type });
    }
    handleSpaceKeyPress(e) {
        if (e.keyCode == 32 || e.keyCode == 13) {
            e.preventDefault();
            this.emitUndoAction();
        }
    }
    handleActionButtonClick(e) {
        e.preventDefault();
        this.emitUndoAction();
    }
    retrieveClass() {
        let className = "";
        switch (this.type) {
            case "add":
                className = "addAlert";
                break;
            case "remove":
                className = "removeAlert";
                break;
            default:
                className = "";
                break;
        }
        return className;
    }
    render() {
        return (index.h("div", { class: `relativeContainer ${this.retrieveClass()}` }, index.h("z-icon", { name: this.iconname, width: 18, height: 18, class: this.retrieveClass() }), index.h("span", { class: "contentText" }, this.contenttext), this.actiontext && !!this.actiontext.trim().length && (index.h("span", { role: "button", tabindex: "0", class: "contentAction", onClick: (e) => {
                this.handleActionButtonClick(e);
            }, onKeyPress: (e) => {
                this.handleSpaceKeyPress(e);
            } }, this.actiontext))));
    }
}
ZCardAlert.style = stylesCss$4;

const stylesCss$5 = ":host{height:340px;width:auto}:host>div{height:340px;width:auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative}";

/**
 * @slot alert - card alert slot
 * @slot cover - book cover slot
 */
class ZCardBody {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", null, index.h("slot", { name: "alert" }), index.h("slot", { name: "cover" })));
    }
}
ZCardBody.style = stylesCss$5;

const stylesCss$6 = "img{display:block;max-height:340px;margin:auto auto}img.faded{opacity:0.3}";

class ZCardCover {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    hadleOnImageError() {
        this.img = this.defaultimg;
    }
    render() {
        return (index.h("img", { class: this.faded && "faded", onError: this.hadleOnImageError.bind(this), alt: this.titolo, src: this.img }));
    }
}
ZCardCover.style = stylesCss$6;

const stylesCss$7 = "footer{font-family:var(--dashboard-font);font-weight:var(--font-rg);color:var(--text-grey-800);background-color:var(--bg-white);margin:0px;padding:0px;position:relative;z-index:5;height:48px;width:auto;top:0px;-webkit-transition:height 500ms ease-in-out, top 500ms ease-in-out;transition:height 500ms ease-in-out, top 500ms ease-in-out;border-radius:0px 0px var(--radius-base) var(--radius-base);border-top:var(--border-base) solid var(--bg-grey-200)}footer.real,footer.trial{border-top:var(--border-base) solid var(--accent)}footer b{font-family:var(--dashboard-font);font-weight:var(--font-sb)}footer>h2{font-family:var(--dashboard-font);font-weight:var(--font-rg);font-size:16px;line-height:22px;height:40px;margin:0px;padding:var(--basex2) var(--basex2) var(--basex1) var(--basex2);overflow:hidden;background-color:var(--bg-white);-webkit-transition:all 200ms linear;transition:all 200ms linear}footer.isopen>h2{font-weight:var(--font-sb);-webkit-transition:all 200ms linear;transition:all 200ms linear;background-color:var(--bg-neutral-200)}footer.isopen.real>h2,footer.isopen.trial>h2{background-color:var(--accent)}footer>div{padding:var(--basex1) var(--basex2);height:40px;overflow:hidden}footer>div>p{font-size:14px;height:20px;line-height:20px;margin:0px;padding:0px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}footer>div>p.year_isbn{padding-top:var(--basex1);display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between}footer>div>p.year_isbn>span.isbn{text-overflow:ellipsis;overflow:hidden}footer.isopen>div{height:70px}footer.isopen>div>p.year_isbn{-ms-flex-direction:column;flex-direction:column;height:50px;padding-left:0px}footer.isopen>div>p.year_isbn>span.isbn{display:inline-grid;padding-left:0px}footer.isopen{height:300px;top:-169px;-webkit-transition:height 500ms ease-in-out, top 500ms ease-in-out;transition:height 500ms ease-in-out, top 500ms ease-in-out}.toggle{position:absolute;top:-24px;left:16px;z-index:10}.faded{opacity:0.3;pointer-events:none}";

/**
 * @slot toggle - toggle button slot
 * @slot list - card resources list slot
 */
class ZCardFooter {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** authors label text */
        this.autorilabel = "Autore";
        this.isOpen = false;
    }
    handleToggle() {
        this.isOpen = !this.isOpen;
    }
    retrieveClass() {
        return {
            isopen: this.isOpen,
            real: this.cardtype === utils.LicenseTypeEnum.real,
            trial: this.cardtype === utils.LicenseTypeEnum.trial,
        };
    }
    render() {
        return (index.h("div", { class: this.faded && "faded" }, index.h("footer", { class: this.retrieveClass() }, index.h("span", { class: "toggle" }, index.h("slot", { name: "toggle" })), index.h("h2", null, this.titolo), index.h("div", null, index.h("p", { class: "authors" }, this.autorilabel, ": ", index.h("b", null, this.autori)), index.h("p", { class: "year_isbn" }, index.h("span", { class: "isbn" }, "ISBN (ed. cartacea): ", index.h("b", null, this.isbn)))), this.isOpen && index.h("slot", { name: "list" }))));
    }
}
ZCardFooter.style = stylesCss$7;

const stylesCss$8 = "header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:start;align-items:flex-start;width:auto;height:var(--basex6);position:relative;border-bottom:var(--border-base) solid var(--bg-grey-200);border-radius:var(--radius-base) var(--radius-base) var(--radius-min)\n    var(--radius-min);background-color:var(--bg-white)}header.real,header.trial{background-color:var(--accent-lighter);border-bottom:var(--border-base) solid var(--accent)}h2{font-family:var(--dashboard-font);font-weight:var(--font-sb);color:var(--text-grey-800);width:80%;height:var(--basex2);font-size:12px;text-transform:uppercase;letter-spacing:0.22px;line-height:var(--basex2);margin:0px;padding:var(--basex2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.faded{border-top:var(--border-base) solid var(--bg-grey-200);border-right:var(--border-base) solid var(--bg-grey-200);border-left:var(--border-base) solid var(--bg-grey-200)}.faded.real,.faded.trial{border-top:var(--border-base) solid var(--accent);border-right:var(--border-base) solid var(--accent);border-left:var(--border-base) solid var(--accent)}";

/**
 * @slot icon - card header icon slot
 */
class ZCardHeader {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    retrieveClass() {
        return {
            real: this.cardtype === utils.LicenseTypeEnum.real,
            trial: this.cardtype === utils.LicenseTypeEnum.trial,
            faded: this.faded,
        };
    }
    render() {
        return (index.h("header", { class: this.retrieveClass() }, index.h("h2", null, this.titolo), index.h("slot", { name: "icon" })));
    }
}
ZCardHeader.style = stylesCss$8;

const stylesCss$9 = "button{width:42px;height:40px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--myz-blue);fill:var(--myz-blue);cursor:pointer;outline:none;background:none;border:none;border-left:var(--border-base) solid var(--bg-grey-200);border-radius:0px var(--radius-base) 0px 0px;margin:0;padding:0px;width:48px;height:48px}button:active,button:focus{color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}button>span{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:28px;height:28px;border-radius:var(--radius-base);border:0px}button:hover>span{background:var(--myz-blue-lighter)}button:focus>span{background:var(--bg-white);border-radius:var(--radius-base);-webkit-box-shadow:0px 0px 2px 2px var(--accent-dark);box-shadow:0px 0px 2px 2px var(--accent-dark)}button:active>span{background:var(--bg-white);border-radius:var(--radius-base);-webkit-box-shadow:0px 2px 4px 0px rgba(66, 69, 72, 0.4);box-shadow:0px 2px 4px 0px rgba(66, 69, 72, 0.4)}button:disabled{cursor:not-allowed}button:disabled>span{background:none;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;pointer-events:none}button:disabled>span>z-icon{fill:var(--bg-grey-200)}button::-moz-focus-inner{border:0}";

class ZCardIcon {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** disabled status flag */
        this.isdisabled = false;
    }
    render() {
        return (index.h("button", { disabled: this.isdisabled }, index.h("span", null, index.h("z-icon", { name: this.icon, width: 16, height: 16 }))));
    }
}
ZCardIcon.style = stylesCss$9;

const stylesCss$a = "ul{font-family:var(--dashboard-font);color:var(--myz-blue);margin:0 var(--basex2);padding:0px;overflow:hidden;list-style:none;width:auto;height:auto}ul>li{padding-left:10px;padding-bottom:var(--half-x1);text-indent:-10px}ul>li>a{font-size:14px;font-weight:var(--font-sb);text-decoration:none;color:var(--myz-blue);letter-spacing:0.16px;line-height:var(--half-x5)}ul>li>a:before{content:\"•\";padding-right:5px}ul>li>span{font-size:14px;font-weight:var(--font-rg);text-decoration:none;color:var(--text-grey-700);padding:var(--basex1) var(--basex2);letter-spacing:0.16px;line-height:var(--half-x5)}";

class ZCardList {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.renderList = this.renderList.bind(this);
    }
    handleSpaceKeyPress(e, url) {
        if (e.keyCode == 32 || e.keyCode == 13) {
            e.preventDefault();
            window.open(url, "_blank");
        }
    }
    formatListContent(data) {
        const { value, isLink, url } = data;
        if (!isLink)
            return index.h("span", null, value);
        return (index.h("a", { role: "button", onKeyPress: (e) => this.handleSpaceKeyPress(e, url), href: url, target: "_blank" }, value));
    }
    renderList(dataArray) {
        return dataArray.map((data) => {
            return index.h("li", null, this.formatListContent(data));
        });
    }
    render() {
        return index.h("ul", null, this.renderList(JSON.parse(this.listdata)));
    }
}
ZCardList.style = stylesCss$a;

const stylesCss$b = ":host>div{display:inline-block;min-height:28px;line-height:28px;padding:0 var(--half-x3);background-color:var(--bg-white);border:var(--border-size-small) solid var(--bg-grey-200);border-radius:14px;color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-size:12px}.boldtext{font-weight:bold}";

class ZChip {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", null, index.h("span", { class: "boldtext" }, this.boldtext), " ", this.regulartext));
    }
}
ZChip.style = stylesCss$b;

const stylesCss$c = ":host{display:block}:host>div.fixed{position:relative;height:48px}:host>div>.header{background-color:var(--bg-white);border-radius:var(--radius-base);border:var(--border-base) solid var(--bg-grey-200);position:relative;z-index:10;min-height:48px;margin:0;padding:0 var(--basex2);display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;cursor:pointer}:host>div.open>.header{border-radius:var(--radius-base) var(--radius-base) 0 0}:host>div>.header>h2{font-family:var(--dashboard-font);font-weight:var(--font-rg);color:var(--text-grey-800);font-size:16px;line-height:24px;margin:0;padding:var(--basex1) 0}:host>div>.header>h2>span{font-weight:var(--font-sb)}:host>div>.header>z-icon{fill:var(--myz-blue);-webkit-transform:rotate(360deg);transform:rotate(360deg);-webkit-transition:all 200ms linear;transition:all 200ms linear;padding-top:10px}:host>div.open>.header>z-icon{fill:var(--myz-blue);-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-transition:all 200ms linear;transition:all 200ms linear;padding-top:-2px;margin-right:2px}:host>div.open>div.openComboData{background-color:var(--bg-white);border-radius:0 0 var(--radius-base) var(--radius-base);border:var(--border-base) solid var(--bg-grey-200);border-top:0px;position:relative;z-index:12;padding:var(--basex1) var(--basex2)}:host>div.open>div.openComboData>div{padding:0;max-height:235px;overflow:auto;scrollbar-width:thin;scrollbar-color:var(--myz-blue) var(--bg-grey-200)}:host>div.open>div.openComboData>z-input{margin-bottom:var(--basex2);width:100%}:host>div.open>div.openComboData>div>ul{margin:0;padding:0 3px;max-height:235px}::-webkit-scrollbar{background:linear-gradient(\n    90deg,\n    var(--bg-white) 2px,\n    var(--bg-grey-200) 4px,\n    var(--bg-white) 8px\n  );border-radius:var(--radius-base);width:10px}::-webkit-scrollbar-thumb{background-color:var(--myz-blue);border-radius:var(--radius-base);width:10px}:host>div.open>z-input{color:var(--myz-blue);margin:0 var(--basex2);width:238px;position:relative;z-index:1}:host>div.open>div.openComboData>div.search{-webkit-box-shadow:1px 1px 4px 2px rgba(217, 222, 227, 0.5);box-shadow:1px 1px 4px 2px rgba(217, 222, 227, 0.5);margin-top:0;max-height:auto;overflow:hidden}:host>div.open>div.openComboData>div.search>ul{padding:var(--basex1) var(--basex2);max-height:180px;overflow:auto;scrollbar-width:thin;scrollbar-color:var(--myz-blue) var(--bg-grey-200)}:host>div.open>div.openComboData>div.search>div{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}:host>div.open>div.openComboData>div.search>div>a{display:inline-block;cursor:pointer;color:var(--myz-blue);font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:14px;height:44px;line-height:44px;text-align:center;text-transform:uppercase}:host>div.open>div.openComboData>div.checkAllWrapper{padding:var(--basex2) var(--half-x1);text-align:left}";

class ZCombobox {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** show search input flag (optional) */
        this.hassearch = false;
        /** no result text message */
        this.noresultslabel = "Nessun risultato";
        /** toggle combo list opening flag */
        this.isopen = true;
        /** fixed style flag */
        this.isfixed = false;
        /** close combobox list text */
        this.closesearchtext = "Chiudi";
        /** show "check all" checkbox (optional) */
        this.hascheckall = false;
        /** check all label (optional) */
        this.checkalltext = "Seleziona tutti";
        /** uncheck all label (optional) */
        this.uncheckalltext = "Deseleziona tutti";
        /** max number of checkable items (0 = unlimited) */
        this.maxcheckableitems = 0;
        this.renderItemsList = []; // used for render only
        this.itemsList = [];
        this.inputType = utils.InputTypeEnum.text;
        this.closeComboBox = this.closeComboBox.bind(this);
        this.closeFilterItems = this.closeFilterItems.bind(this);
        this.comboboxChange = index.createEvent(this, "comboboxChange", 7);
    }
    watchItems() {
        this.itemsList =
            typeof this.items === "string" ? JSON.parse(this.items) : this.items;
        this.selectedCounter = this.itemsList.filter(item => item.checked).length;
        if (this.searchValue) {
            this.filterItems(this.searchValue);
        }
        else {
            this.resetRenderItemsList();
        }
    }
    inputCheckListener(e) {
        const id = e.detail.id.replace(`combo-checkbox-${this.inputid}-`, "");
        if (id === "check-all" &&
            (!this.maxcheckableitems ||
                this.maxcheckableitems >= this.itemsList.length)) {
            return this.checkAll(e.detail.checked);
        }
        this.itemsList = this.itemsList.map((item) => {
            if (item.id === id)
                item.checked = e.detail.checked;
            return item;
        });
        this.resetRenderItemsList();
        this.emitComboboxChange();
    }
    emitComboboxChange() {
        this.comboboxChange.emit({ id: this.inputid, items: this.itemsList });
    }
    componentWillLoad() {
        this.watchItems();
    }
    componentWillRender() {
        this.selectedCounter = this.itemsList.filter(item => item.checked).length;
        if (this.searchValue) {
            this.filterItems(this.searchValue);
        }
    }
    resetRenderItemsList() {
        const renderItemsList = [];
        this.itemsList.forEach((item) => {
            renderItemsList.push(Object.assign({}, item));
        });
        this.renderItemsList = renderItemsList;
    }
    filterItems(value) {
        if (!value)
            return this.closeFilterItems();
        this.searchValue = value;
        this.resetRenderItemsList();
        this.renderItemsList = this.renderItemsList.filter(item => {
            const start = item.name.toUpperCase().indexOf(value.toUpperCase());
            const end = start + value.length;
            const newName = item.name.substring(0, start) +
                item.name.substring(start, end).bold() +
                item.name.substring(end, item.name.length);
            item.name = newName;
            return start >= 0;
        });
    }
    checkAll(checked = true) {
        this.itemsList = this.itemsList.map((item) => (Object.assign(Object.assign({}, item), { checked: checked })));
        this.resetRenderItemsList();
        this.emitComboboxChange();
    }
    closeFilterItems() {
        this.searchValue = "";
        this.resetRenderItemsList();
    }
    closeComboBox() {
        this.isopen = !this.isopen;
    }
    renderHeader() {
        return (index.h("div", { class: "header", onClick: () => this.closeComboBox(), onKeyDown: (ev) => {
                if (ev.keyCode === utils.keybordKeyCodeEnum.SPACE)
                    ev.preventDefault();
            }, onKeyUp: (ev) => utils.handleKeyboardSubmit(ev, this.closeComboBox), role: "button", tabindex: 0 }, index.h("h2", null, this.label, index.h("span", null, this.selectedCounter > 0 && ` (${this.selectedCounter})`)), index.h("z-icon", { name: "drop-down", width: 18, height: 18 })));
    }
    renderContent() {
        if (!this.isopen)
            return;
        return (index.h("div", { class: "openComboData" }, this.hassearch && this.renderSearchInput(), this.hascheckall && this.renderCheckAll(), this.renderItems()));
    }
    renderItems() {
        if (!this.isopen)
            return;
        return (index.h("div", { class: this.searchValue && "search", tabindex: -1 }, this.renderList(this.renderItemsList), this.searchValue && this.renderCloseButton()));
    }
    renderList(items) {
        if (!items)
            return;
        if (!items.length && this.searchValue)
            return this.renderNoSearchResults();
        return (index.h("ul", null, items.map((item, i) => {
            return (index.h("z-list-item", { id: item.id, listitemid: item.id, action: `combo-li-${this.inputid}`, underlined: i === items.length - 1 ? false : true }, index.h("z-input", { type: utils.InputTypeEnum.checkbox, checked: item.checked, htmlid: `combo-checkbox-${this.inputid}-${item.id}`, label: item.name, disabled: !item.checked &&
                    this.maxcheckableitems &&
                    this.maxcheckableitems === this.selectedCounter })));
        })));
    }
    renderNoSearchResults() {
        return (index.h("ul", null, index.h("z-list-item", { id: "no-results", text: this.noresultslabel, listitemid: "no-results", icon: "circle-cross-stroke" })));
    }
    renderCloseButton() {
        return (index.h("div", null, index.h("a", { onClick: () => this.closeFilterItems(), onKeyUp: (e) => utils.handleKeyboardSubmit(e, this.closeFilterItems), role: "button", tabindex: 0 }, this.closesearchtext)));
    }
    renderSearchInput() {
        if (!this.isopen)
            return;
        return (index.h("z-input", { htmlid: `${this.inputid}_search`, label: this.searchlabel, placeholder: this.searchplaceholder, htmltitle: this.searchtitle, type: this.inputType, value: this.searchValue, hasmessage: false, onInputChange: (e) => {
                if (e.detail.keycode === 27)
                    return this.closeFilterItems();
                this.filterItems(e.detail.value);
            } }));
    }
    renderCheckAll() {
        if (this.searchValue)
            return;
        const allChecked = this.selectedCounter === this.itemsList.length;
        return (index.h("div", { class: "checkAllWrapper" }, index.h("z-input", { type: utils.InputTypeEnum.checkbox, checked: allChecked, htmlid: `combo-checkbox-${this.inputid}-check-all`, label: allChecked ? this.uncheckalltext : this.checkalltext, disabled: this.maxcheckableitems &&
                this.maxcheckableitems < this.itemsList.length })));
    }
    render() {
        return (index.h("div", { "data-action": `combo-${this.inputid}`, class: `${this.isopen && "open"} ${this.isfixed && "fixed"}`, id: this.inputid }, this.renderHeader(), this.renderContent()));
    }
    static get watchers() { return {
        "items": ["watchItems"]
    }; }
}
ZCombobox.style = stylesCss$c;

const mobileBreakpoint = 767;

const stylesCss$d = ":host{width:100%}footer{width:auto;height:auto;font-family:var(--dashboard-font);font-size:13px;padding:var(--basex1) 0 var(--basex1) 0;background-color:var(--bg-grey-900);color:var(--text-grey-050)}footer>section{display:grid;width:auto;height:auto}footer>section.top>nav{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;margin:var(--half-x1) 0 var(--half-x1) 0;padding:0;border-bottom:none}footer>section.top>nav>.header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:start;align-content:flex-start;margin-left:var(--basex4);margin-right:var(--basex4);padding-bottom:var(--basex1);height:var(--basex4);border-bottom:1px solid var(--bg-grey-050);line-height:1}footer>section.top>nav>.header>h2{font-size:var(--basex2);margin:var(--basex1) 0 var(--basex1) 0}footer>section.top>nav>.header{fill:var(--text-white)}footer>section.top>nav>.header>z-icon{position:absolute;right:36px;margin-top:var(--basex1)}footer>section.top>nav>.content{padding-left:var(--basex4);padding-right:var(--basex4);background-color:var(--text-grey-800);background-color:var(--text-grey-800)}footer>section.top>nav>.content>ul{display:none;height:0;-webkit-transition:0.3s ease;transition:0.3s ease;padding:var(--half-x1) 0 var(--basex2) 0}footer>section.top>nav>.content>ul>li{width:100%;margin:0;padding:var(--basex1) 0 var(--basex1) 0;border-bottom:1px solid var(--bg-grey-050)}footer>section.top>nav>.content>ul.show{display:block;height:auto;-webkit-transition:0.3s ease;transition:0.3s ease}footer>section.top>nav>.content>ul>li{list-style:none}footer>section.top>nav>.content>ul>li>a{font-size:14px;font-weight:300;color:var(--text-grey-050);text-decoration:none;padding:0}footer>section.top>nav>div>ul>li>a{letter-spacing:0.2px;padding:10px 0;text-decoration:underline;font-weight:300;font-size:14px;line-height:2}footer>section.bottom{display:grid;grid-template-columns:1fr;width:auto;height:auto;margin:0;padding:0;white-space:pre-line;font-size:12px}footer>section.bottom>div.item{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;grid-column:span 1;height:auto;width:auto;padding:var(--basex2) 0;margin:0 var(--basex3)}footer>section.bottom>div.item:nth-child(1){-ms-flex-order:2;order:2}footer>section.bottom>div.item:nth-child(2){-ms-flex-order:1;order:1;border-bottom:1px solid var(--bg-grey-050)}footer>section.bottom>div.item>ul.social{display:-ms-flexbox;display:flex;width:auto;padding:0;margin-bottom:0px}footer>section.bottom>div.item>ul.social>li{list-style:none;margin-right:14px}footer>section.bottom>div.item>ul.social img{width:var(--basex3)}footer>section.bottom>div.bottom-links{display:none}footer>section.bottom>div.item>p{width:50%;padding:var(--basex1) 0;margin:0}footer>section.bottom>div.item:nth-child(1)>p{width:253px}footer>section.bottom>div.logo>p>span{display:block}@media only screen and (min-width: 768px){footer{padding:0}footer>section.top{padding:var(--basex2) var(--basex4);background-color:var(--text-grey-800)}footer>section.top>nav{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;display:grid;grid-template-columns:1fr 3fr;grid-template-rows:1fr;grid-column-gap:18px;padding:var(--basex2) 0 var(--basex1) 0;border-bottom:1px solid var(--bg-white);margin:0}footer>section.top>nav:last-child{border-bottom:none}footer>section.top>nav>.header{border-bottom:none;padding:0;margin:0}footer>section.top>nav>.header>h2{border:none}footer>section.top>nav>.content{padding:0;margin:0}footer>section.top>nav>.content>ul{height:auto;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch;border-bottom:none;margin:0}footer>section.top>nav>.content>ul>li{width:223px;margin:0 var(--basex1) 0 0;padding:var(--half-x1) 0px;border:none}footer>section.top>nav>.content>ul>li>a{font-size:12px;line-height:1;border-bottom:1px solid var(--bg-white)}footer>section.bottom{grid-template-columns:1fr 1fr 2fr;background-color:var(--bg-grey-900);padding:0 var(--basex2)}footer>section.bottom>div.item{margin:0}footer>section.bottom>div.item:nth-child(1){-ms-flex-order:1;order:1}footer>section.bottom>div.item:nth-child(2){-ms-flex-order:2;order:2;border-bottom:none;margin:0px var(--basex2) 0px var(--basex2)}footer>section.bottom>div.item>p{width:80%;padding-top:0}footer>section.bottom>div.item>ul.social img{width:var(--basex3);height:var(--basex3);border:none}footer>section.bottom>div.logo>z-logo{height:39px;width:220px}footer>section.bottom>div.bottom-links{display:block;-ms-flex-order:3;order:3}footer>section.bottom>div.bottom-links>ul{display:grid;grid-template-columns:repeat(2, auto);height:54px;margin:0 var(--half-x1);padding:0;font-size:12px}footer>section.bottom>div.bottom-links>ul>li{margin-bottom:var(--basex1);list-style:none}footer>section.bottom>div.bottom-links>ul>li>a{color:var(--text-white)}}@media only screen and (min-width: 1025px){footer>section.top{grid-template-columns:repeat(6, 1fr);grid-template-rows:7fr 1fr;grid-column-gap:18px;padding:var(--basex3) var(--basex4);height:100%}footer>section.top>nav{display:grid;grid-template-columns:1fr;grid-template-rows:40px 4fr;padding:0;border-bottom:none}footer>section.top>nav>div>h2{width:auto;font-size:16px;line-height:1;font-weight:600;color:var(--text-grey-050);padding:0 0 var(--basex1);margin:0}footer>section.top>nav>.header{border-bottom:1px solid var(--bg-grey-050);width:120px}footer>section.top>nav>.header>h2{position:absolute}footer>section.bottom{padding:var(--basex2) var(--basex4)}footer>section.bottom>div.item:nth-child(1)>p:nth-of-type(1){margin-top:var(--basex2)}footer>section.bottom>div.item:nth-child(1)>p:nth-of-type(2){font-size:10px}footer>section.bottom>div.item>p{padding-bottom:0;margin-bottom:var(--basex1)}footer>section.bottom>div.item>ul.social{margin-top:0}footer>section.bottom>div.item>ul.social>li{margin-right:var(--half-x3)}footer>section.bottom>div.item>ul.social img{width:var(--basex2);height:var(--basex2)}footer>section.bottom>div.bottom-links{padding:var(--basex2) 0 0 var(--basex2)}footer>section.bottom>div.bottom-links>ul{grid-template-columns:repeat(3, 1fr);grid-column-gap:18px;margin:0}footer>section.bottom>div.bottom-links>ul>li{margin-bottom:var(--basex2)}}";

class ZFooter {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("nav", null, index.h("div", { class: "header" }, index.h("h2", null, group.title), this.isMobile && (index.h("z-icon", { name: this.isOpen[id] ? "chevron-up" : "chevron-down", width: 16, height: 16, onClick: () => this.handleOnHeaderClick(id) }))), index.h("div", { class: "content" }, index.h("ul", { class: this.isOpen[id] ? "show" : "" }, group.items.map((item) => (index.h("li", null, index.h("a", { href: item.link, target: item.target ? item.target : "_blank" }, item.label))))))));
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
        return (index.h("section", { class: "top" }, zanichelliLinksToRender.map((item, id) => this.renderFooterSection(id, item))));
    }
    renderZLogo() {
        const myzLink = this.jsonData.myzLink;
        return (index.h("z-logo", { link: myzLink.link, width: 144, height: 38, imagealt: myzLink.label, targetblank: true }));
    }
    renderAddress() {
        const zanichelliAddress = this.jsonData.zanichelliAddress;
        return index.h("p", null, zanichelliAddress);
    }
    renderSocial() {
        const social = this.jsonData.social;
        return (index.h("ul", { class: "social" }, social.map((item) => (index.h("li", null, index.h("a", { href: item.link, target: "_blank" }, index.h("img", { src: item.icon, alt: item.description })))))));
    }
    renderCopyright() {
        if (!!this.copyrightuser) {
            return (index.h("p", null, "Copyright \u2013 2018-", new Date().getFullYear(), " ", this.copyrightuser, index.h("span", null, " All rights reserved ")));
        }
        else
            return;
    }
    renderCertification() {
        const certification = this.jsonData.certification;
        return index.h("p", null, certification);
    }
    renderBottomLinks() {
        const bottomLinks = this.jsonData.bottomLinks;
        if (!this.isMobile) {
            return (index.h("div", { class: "item bottom-links" }, index.h("ul", null, bottomLinks.map((item) => (index.h("li", null, index.h("a", { href: item.link, target: item.target ? item.target : "_blank" }, item.label)))))));
        }
    }
    renderFooterBottom() {
        return (index.h("section", { class: "bottom" }, index.h("div", { class: "item logo" }, this.renderZLogo(), this.renderCopyright(), this.renderCertification()), index.h("div", { class: "item" }, this.renderAddress(), this.renderSocial()), this.renderBottomLinks()));
    }
    render() {
        if (this.jsonData) {
            return (index.h("footer", null, this.renderFooterTop(), this.renderFooterBottom()));
        }
    }
}
ZFooter.style = stylesCss$d;

const stylesCss$e = ":host a{cursor:pointer}header{position:-webkit-sticky;position:sticky;top:-32px;z-index:99;display:grid;grid-template-columns:1fr;grid-template-rows:1fr;grid-template-areas:\"main-header\";margin-bottom:64px;font-family:var(--dashboard-font);font-weight:var(--font-rg)}.main-header{display:grid;grid-template-columns:2fr 2fr 4fr 100px;grid-template-rows:1fr;grid-template-areas:\"logo link-int link-ext login\";grid-area:main-header;grid-column-gap:var(--half-x1);-ms-flex-align:center;align-items:center;background-color:var(--bg-grey-900);height:auto;align-items:center;z-index:10}.top-header{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;grid-template-areas:\"editors\";grid-area:top-header;height:32px;-ms-flex-align:center;align-items:center;background-color:var(--bg-white)}.editors{grid-area:editors;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.editors>::slotted(img){height:32px;width:auto;margin:0;-webkit-transform:scale(0.6);transform:scale(0.6)}.main-header.myz-out{background-color:var(--bg-white)}.logo{grid-area:logo;padding:6px}z-logo{-webkit-transform:scale(0.9);transform:scale(0.9)}.dropdown-menu{display:none}.dropdown-menu.hidden{visibility:hidden}.dropdown-links{grid-area:dropdown-links;list-style:none;display:block;max-height:32px;margin:0;padding:0}.arrow{fill:var(--text-grey-200)}.dropdown-links>li{list-style:none;display:inline-block;margin:0;padding:0}.dropdown-links>li>a{width:auto;height:auto;color:var(--myz-blue);font-size:14px;letter-spacing:0.18px;line-height:32px;text-decoration:none;margin:var(--basex1);padding-bottom:var(--half-x1)}.dropdown-links>li>a:hover,.dropdown-links>li>a.active{color:var(--text-grey-800);border-bottom:2px solid var(--myz-blue)}.mobile-header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center;width:100%;background-color:var(--bg-grey-900);z-index:inherit;height:52px;position:fixed;top:0px;left:0;z-index:999}.mobile-header.myz-out{background-color:var(--bg-white)}.mobile-header>z-button{margin:0 var(--basex2)}.mobile-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;background-color:var(--bg-grey-900);position:fixed;top:52px;left:0;z-index:999;max-height:0px;overflow:hidden;-webkit-transition:max-height 1s cubic-bezier(0.46, 0, 1, 0.79);transition:max-height 1s cubic-bezier(0.46, 0, 1, 0.79)}.mobile-content.open{max-height:100vh;-webkit-transition:max-height 2s cubic-bezier(0, 0.79, 0.46, 1);transition:max-height 2s cubic-bezier(0, 0.79, 0.46, 1)}.mobile-content.myz-out{background-color:var(--bg-white)}hr{display:block;position:relative;padding:0;margin:0px var(--basex4);height:0;width:calc(100% - 64px);max-height:0;font-size:1px;line-height:0;clear:both;border:none;border-top:1px solid var(--text-grey-700)}.menu-mobile{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;color:var(--bg-white);padding:var(--basex2) var(--basex3);cursor:pointer}.myz-out .menu-mobile{color:var(--text-grey-800)}.menu-toggle{grid-area:menu-toggle;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0 var(--basex1)}.menu-toggle .bar{width:20px;height:2px;background-color:var(--bg-white);margin:2px auto;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out}.myz-out .menu-toggle .bar{background-color:var(--text-grey-800)}.menu-toggle:hover{cursor:pointer}#mobile-menu.is-active .bar:nth-child(2){opacity:0}#mobile-menu.is-active .bar:nth-child(1){-webkit-transform:translateY(6px) rotate(45deg);transform:translateY(6px) rotate(45deg)}#mobile-menu.is-active .bar:nth-child(3){-webkit-transform:translateY(-6px) rotate(-45deg);transform:translateY(-6px) rotate(-45deg)}.booktab-button,.mobile-login{overflow:hidden;height:0%;max-height:100%;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch;padding:0}.hidden{visibility:hidden}.login{grid-area:login;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding:0 var(--basex2)}.login>z-button{color:var(--bg-white);fill:var(--bg-white)}.booktab-button>z-button{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;padding:var(--basex2) 0px var(--basex4) 0px}.link-ext{grid-area:link-ext;overflow:hidden;height:0%;max-height:100%;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch;padding:0}.link-ext-span{display:inline-block;width:100%;margin:var(--half-x1) auto;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0px auto 0px auto;padding:0px var(--basex4) 0px var(--basex4);line-height:44px}.link-ext-span.myz:hover,.link-ext-span.myz:focus{background:var(--text-grey-800);border-radius:var(--radius-base);cursor:pointer}.link-ext z-link{font-size:12px;font-weight:var(--font-sb)}.link-int{overflow:hidden;max-height:100%;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch;padding:0}.link-int>span{width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:start;align-content:flex-start}.link-int>span>.menu-item{height:auto;color:var(--bg-white);letter-spacing:0.2px;font-weight:var(--font-sb);font-size:16px;text-decoration:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0px auto 0px auto;padding:0px var(--basex4) 0px var(--basex4);line-height:44px}.link-int>span>.menu-item:hover,.link-int>span>.menu-item:focus{border-radius:0px}.link-int>span>.menu-item>span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.link-int>span>.menu-item>i{padding-top:var(--basex2);height:28px;width:24px;text-align:right}.link-int>span:first-child>.menu-item{margin-top:0}.link-int>span>svg{display:none}.link-int>.mobile-dropdown{padding:0 48px}.mobile-login>span{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:start;align-content:flex-start;fill:white}.mobile-login>span:focus,.mobile-login>span:hover{background:var(--text-grey-800)}.myz-out .mobile-login>span:focus,.myz-out .mobile-login>span:hover{background:none}.mobile-login>span>.menu-item{height:auto;color:var(--bg-white);letter-spacing:0.2px;font-weight:var(--font-sb);font-size:16px;text-decoration:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0px auto 0px auto;padding:0px var(--basex4) 0px var(--basex4);line-height:44px}.myz-out .mobile-login>span>.menu-item{color:var(--text-grey-800)}.mobile-login>span>.menu-item>i{padding-top:var(--basex2);height:28px;width:24px;text-align:right}.mobile-login>span>.menu-item>span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mobile-login>span>.menu-item>span>z-icon{padding-right:var(--basex1);fill:var(--bg-white)}.menu-item>i::before{border-style:solid;border-width:0.12em 0.12em 0 0;content:\" \";display:inline-block;height:0.45em;left:0.16em;position:relative;top:0.24em;-webkit-transform:rotate(-45deg) scale(1.2);transform:rotate(-45deg) scale(1.2);vertical-align:top;width:0.45em;margin-top:2px;margin-left:2px;margin-right:6px;-webkit-transition:all 0.5s ease;transition:all 0.5s ease}.menu-item.isopen>i::before{top:-0.12em;-webkit-transform:rotate(135deg) scale(1.2);transform:rotate(135deg) scale(1.2);-webkit-transition:all 0.5s ease;transition:all 0.5s ease}.mobile-dropdown{background:white;display:block;overflow:hidden;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0px auto 0px auto;padding:0px var(--basex4) 0px var(--basex4);line-height:44px;max-height:0px;-webkit-transition:max-height 0.3s ease;transition:max-height 0.3s ease}.mobile-dropdown.visible{max-height:100vh;-webkit-transition:max-height 0.5s ease;transition:max-height 0.5s ease}@media only screen and (min-width: 768px){header{grid-template-columns:1fr 0.8fr 1.5fr 1.1fr 0.7fr;grid-template-rows:0.2fr 0.2fr 0.2fr;grid-template-areas:\"top-header top-header top-header top-header top-header\" \"main-header main-header main-header main-header main-header\" \"dropdown-menu dropdown-menu dropdown-menu dropdown-menu dropdown-menu\";margin-bottom:0}header.myz-out{top:0px;grid-template-rows:1fr}.main-header{display:grid;grid-template-columns:170px 168px 4fr 120px;grid-template-rows:1fr;grid-template-areas:\"logo link-int link-ext login\";grid-area:main-header}.dropdown-menu{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;grid-template-areas:\"dropdown-links\";grid-area:dropdown-menu;grid-column-gap:var(--basex1);background:var(--bg-grey-200);height:32px;visibility:visible;z-index:9;padding-left:160px}.booktab-button,.mobile-header,.mobile-login,.mobile-dropdown,.menu-mobile{display:none}.link-int{grid-area:link-int;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-height:46px;margin-top:var(--half-x1)}.link-int>span{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.link-int>span>.menu-item{width:auto;height:auto;color:var(--bg-white);letter-spacing:0.2px;line-height:14px;font-weight:var(--font-sb);text-decoration:none;outline:none;padding:var(--half-x3)}.link-int>span>svg{display:block}.menu-item>i{display:none}.link-int>span>.menu-item:focus,.link-int>span>.menu-item:hover{background:var(--text-grey-800);border-radius:var(--radius-base);cursor:pointer}.link-int>span>.menu-item::-moz-focus-inner{border:0}.link-int>span>.menu-item:focus+svg{visibility:visible}.link-ext{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-height:46px}.link-ext-span{width:auto;line-height:14px;margin:var(--basex1);padding:var(--half-x1) var(--basex1)}}@media only screen and (min-width: 1025px){.main-header{grid-template-columns:170px 168px 4fr 180px}}";

/**
 * @slot editors - top menu editors images bar (only with ismyz prop === true)
 */
class ZHeader {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isMobile = true;
        this.isMenuMobileOpen = false;
        this.intMenuData = [];
        this.extMenuData = [];
        this.isLogged = false;
    }
    activeIntLinkChange(newValue) {
        this.activeMenuItem = this.currentMenuItem = this.intMenuData.find((item) => item.id === newValue);
    }
    handleResize() {
        this.isMobile = window.innerWidth <= mobileBreakpoint;
    }
    handleZListItemLinkClick() {
        this.isMenuMobileOpen = false;
    }
    handleZListItemClick() {
        this.isMenuMobileOpen = false;
    }
    componentWillLoad() {
        if (this.intlinkdata) {
            this.intMenuData =
                typeof this.intlinkdata === "string"
                    ? JSON.parse(this.intlinkdata)
                    : this.intlinkdata;
        }
        this.activeMenuItem = this.currentMenuItem = this.intMenuData.find((item) => item.id === this.activeintlinkid);
        if (this.extlinkdata) {
            this.extMenuData =
                typeof this.extlinkdata === "string"
                    ? JSON.parse(this.extlinkdata)
                    : this.extlinkdata;
        }
        if (this.userdata) {
            this.userData =
                typeof this.userdata === "string"
                    ? JSON.parse(this.userdata)
                    : this.userdata;
            this.isLogged = this.userData.islogged;
        }
        this.handleResize();
    }
    renderTopHeader() {
        if (!this.ismyz)
            return;
        return (index.h("div", { class: "top-header" }, index.h("div", { class: "editors" }, index.h("slot", { name: "editors" }))));
    }
    renderLogoDiv() {
        return (index.h("div", { class: "logo" }, index.h("z-logo", { link: this.logolink ? this.logolink : null, targetblank: true, width: 144, height: 36, imagealt: this.imagealt })));
    }
    renderIntMenu(menuItems) {
        if (!this.isLogged || !this.ismyz)
            return;
        return (index.h("div", { id: "link-int", class: "link-int" }, menuItems.map(item => this.renderIntMenuItem(item))));
    }
    renderIntMenuItem(menuItem) {
        const { id, label, link } = menuItem;
        return (index.h("span", null, index.h("a", { href: link ? link : null, id: id, class: "menu-item", onClick: () => {
                this.activeMenuItem = this.currentMenuItem = menuItem;
                this.activeintlinkid = menuItem.id;
                if (menuItem.subMenu)
                    this.handleToggleMobileMenuItem(menuItem.id);
            }, onMouseEnter: () => {
                this.activeMenuItem = menuItem;
            }, onMouseLeave: () => {
                this.activeMenuItem = this.currentMenuItem;
            }, role: link ? "link" : "button", tabindex: this.getIntMenuItemTabindex(menuItem) }, index.h("span", null, label), menuItem.subMenu ? index.h("i", null) : null), index.h("svg", { height: "8", width: "16", class: (!this.activeMenuItem || this.activeMenuItem.id !== id) ? "hidden" : "" }, index.h("polygon", { points: "8,0 16,8 0,8", class: "arrow" })), this.isMobile && this.renderMenuItemsData(menuItem)));
    }
    getIntMenuItemTabindex(item) {
        return this.intMenuData.indexOf(item) + 1;
    }
    handleToggleMobileMenuItem(elementId) {
        if (!this.isMobile)
            return;
        this.element.shadowRoot
            .getElementById(elementId)
            .classList.toggle("isopen");
        this.element.shadowRoot
            .getElementById("mobile-dropdown-" + elementId)
            .classList.toggle("visible");
    }
    renderMenuItemsData(menuItem) {
        if (!menuItem.subMenu)
            return null;
        const listItems = menuItem.subMenu.map((item) => {
            return {
                id: item.id,
                text: item.label,
                link: item.link,
                listitemid: item.id
            };
        });
        return this.renderMobileSubMenu(listItems, menuItem.id);
    }
    renderMobileSubMenu(menuItems, id) {
        return (index.h("span", { class: "mobile-dropdown", id: id ? `mobile-dropdown-${id}` : "" }, index.h("z-list", { list: menuItems })));
    }
    renderSubMenu(menuItem) {
        if (!this.ismyz || !this.isLogged)
            return;
        if (!menuItem || !menuItem["subMenu"]) {
            return index.h("div", { id: "dropdown-menu", class: `dropdown-menu hidden` });
        }
        return (index.h("div", { id: "dropdown-menu", class: `dropdown-menu` }, index.h("ul", { class: "dropdown-links" }, menuItem.subMenu.map((item) => (index.h("li", null, index.h("a", { id: item.id, class: item.id === this.activesublinkid ? "active" : "", href: item.link ? item.link : null, role: item.link ? "link" : "button", tabindex: this.getIntMenuItemTabindex(menuItem) }, item.label)))))));
    }
    renderExtMenu(menuItems) {
        if (!this.isLogged)
            return index.h("div", null);
        return (index.h("div", { id: "link-ext", class: "link-ext" }, menuItems.map((menuItem) => {
            const { id, label, link, icon } = menuItem;
            return (index.h("span", { class: `link-ext-span${this.ismyz ? " myz" : ""}` }, index.h("z-link", { id: id, htmlid: id, href: link, icon: icon, iswhite: !!this.ismyz, target: "_blank", htmltabindex: 10 }, label)));
        })));
    }
    renderLoginDiv(userData) {
        return (index.h("div", { class: "login" }, this.isLogged ? (index.h("z-menu-dropdown", { nomeutente: userData.name, menucontent: JSON.stringify(userData.userlinks) })) : (this.renderLoginButton())));
    }
    renderLoginButton() {
        return (index.h("z-button", { htmlid: "login-button", variant: this.ismyz ? utils.ButtonVariantEnum.secondary : utils.ButtonVariantEnum.tertiary, icon: "enter", issmall: true }, "entra"));
    }
    renderMobileLoginDiv(userData) {
        return (index.h("div", { id: "mobile-login", class: "mobile-login" }, index.h("span", null, index.h("a", { class: "menu-item", id: "user-data", onClick: () => this.handleToggleMobileMenuItem("user-data"), role: "button" }, index.h("span", null, index.h("z-icon", { name: "user", height: 16, width: 16 }), userData.name), index.h("i", null)), this.renderUserData(userData))));
    }
    renderUserData(userData) {
        if (this.isMobile && !userData)
            return null;
        const listItems = userData.userlinks.map((item) => {
            return {
                text: item.label,
                link: item.link,
                icon: item.icon,
                listitemid: item.id
            };
        });
        return this.renderMobileSubMenu(listItems, "user-data");
    }
    renderDesktopHeader() {
        return (index.h("header", { class: !this.ismyz ? "myz-out" : "" }, this.renderTopHeader(), this.renderMainHeader(), this.renderSubMenu(this.activeMenuItem)));
    }
    renderMainHeader() {
        return (index.h("div", { id: "main-header", class: `main-header${this.ismyz ? "" : " myz-out"}` }, this.renderLogoDiv(), this.renderIntMenu(this.intMenuData), this.renderExtMenu(this.extMenuData), this.renderLoginDiv(this.userData)));
    }
    renderMobileHeader() {
        return (index.h("header", null, this.renderMobileMenu(), this.renderMobileMenuContent()));
    }
    renderMobileMenu() {
        return (index.h("div", { id: "mobile-header", class: `mobile-header${this.ismyz ? "" : " myz-out"}` }, this.renderLogoDiv(), this.renderMobileMenuToggle()));
    }
    renderMobileMenuToggle() {
        if (!this.isLogged)
            return this.renderLoginButton();
        return (index.h("div", { class: "menu-mobile", id: "mobile-menu-wrapper", onClick: () => (this.isMenuMobileOpen = !this.isMenuMobileOpen) }, index.h("div", { class: `menu-toggle${this.isMenuMobileOpen ? " is-active" : ""}`, id: "mobile-menu" }, index.h("span", { class: "bar" }), index.h("span", { class: "bar" }), index.h("span", { class: "bar" })), index.h("span", null, "Menu")));
    }
    renderMobileMenuContent() {
        if (!this.isLogged)
            return null;
        return (index.h("div", { id: "mobile-content", class: `mobile-content${this.isMenuMobileOpen ? " open" : ""}${this.ismyz ? "" : " myz-out"}` }, this.renderMobileLoginDiv(this.userData), this.ismyz && index.h("hr", null), this.renderIntMenu(this.intMenuData), index.h("hr", null), this.renderExtMenu(this.extMenuData)));
    }
    render() {
        return this.isMobile
            ? this.renderMobileHeader()
            : this.renderDesktopHeader();
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "activeintlinkid": ["activeIntLinkChange"]
    }; }
}
ZHeader.style = stylesCss$e;

const icons = {
    "ask-your-manager": "M16.01,4.14 C16.5260026,4.14 16.9249986,4.28099859 17.207,4.563 C17.4890014,4.84500141 17.63,5.24399742 17.63,5.76 L17.63,13.68 C17.63,14.1840025 17.4890014,14.5799986 17.207,14.868 C16.9249986,15.1560014 16.5260026,15.3 16.01,15.3 L1.97,15.3 C1.46599748,15.3 1.07000144,15.1560014 0.782,14.868 C0.49399856,14.5799986 0.35,14.1840025 0.35,13.68 L0.35,5.76 C0.35,5.24399742 0.48799862,4.84500141 0.764,4.563 C1.04000138,4.28099859 1.44199736,4.14 1.97,4.14 L4.166,4.14 L4.166,2.52 C4.166,2.00399742 4.30099865,1.60500141 4.571,1.323 C4.84100135,1.04099859 5.23399742,0.9 5.75,0.9 L12.23,0.9 C12.7220025,0.9 13.1089986,1.04399856 13.391,1.332 C13.6730014,1.62000144 13.814,2.01599748 13.814,2.52 L13.814,4.14 L16.01,4.14 Z M5.57,4.14 L12.41,4.14 L12.41,2.124 L5.57,2.124 L5.57,4.14 Z M16.226,5.364 L1.754,5.364 L1.754,8.352 L16.226,8.352 L16.226,5.364 Z M16.226,9.576 L10.61,9.576 L10.61,10.8 L7.37,10.8 L7.37,9.576 L1.754,9.576 L1.754,14.076 L16.226,14.076 L16.226,9.576 Z",
    "book-add": "M12.6630787,10.340625 L12.6630787,8.93900463 L15.3061343,8.93900463 L15.3061343,6.19583333 L16.7478009,6.19583333 L16.7478009,8.93900463 L19.3908565,8.93900463 L19.3908565,10.340625 L16.7478009,10.340625 L16.7478009,13.0837963 L15.3061343,13.0837963 L15.3061343,10.340625 L12.6630787,10.340625 Z M0.388888889,17.9293981 L19.6111111,17.9293981 L19.6111111,15.3864583 C14.6453704,15.3864583 12.3226852,15.7268519 10.8810185,17.1084491 L10.8810185,9.01909722 C10.8810185,4.73414352 12.1024306,3.55277778 18.0493056,3.55277778 L19.6111111,3.55277778 L19.6111111,2.11111111 L18.0493056,2.11111111 C13.4439815,2.11111111 11.2013889,2.87199074 10.0800926,4.81423611 C8.97881944,2.87199074 6.83634259,2.11111111 1.3900463,2.11111111 L1.3900463,4.23356481 L0.388888889,4.23356481 L0.388888889,17.9293981 Z M2.55138889,15.3864583 L2.55138889,3.55277778 C8.13784722,3.55277778 9.29918981,4.73414352 9.29918981,9.01909722 L9.29918981,17.1284722 C8.21793981,16.0672454 6.2556713,15.3864583 2.55138889,15.3864583 Z",
    "book-delete": "M0.35,15.1364583 L17.65,15.1364583 L17.65,12.8478125 C13.1808333,12.8478125 11.0904167,13.1541667 9.79291667,14.3976042 L9.79291667,7.1171875 C9.79291667,3.26072917 10.8921875,2.1975 16.244375,2.1975 L17.65,2.1975 L17.65,0.9 L16.244375,0.9 C12.0995833,0.9 10.08125,1.58479167 9.07208333,3.3328125 C8.0809375,1.58479167 6.15270833,0.9 1.25104167,0.9 L1.25104167,2.81020833 L0.35,2.81020833 L0.35,15.1364583 Z M2.29625,12.8478125 L2.29625,2.1975 C7.3240625,2.1975 8.36927083,3.26072917 8.36927083,7.1171875 L8.36927083,14.415625 C7.39614583,13.4605208 5.63010417,12.8478125 2.29625,12.8478125 Z M11.8292708,8.144375 L11.8292708,6.91895833 L17.65,6.91895833 L17.65,8.144375 L11.8292708,8.144375 Z",
    "cart": "M0.35,0.35 L3.266,0.35 L3.554,1.934 L17.99,1.934 L16.532,10.25 L5.012,10.25 L5.444,12.662 L15.83,12.662 L15.83,13.886 L4.49,13.886 L2.312,1.574 L0.35,1.574 L0.35,0.35 Z M4.814,9.026 L15.542,9.026 L16.568,3.158 L3.788,3.158 L4.814,9.026 Z M4.49,16.55 C4.49,16.141998 4.63399856,15.7970014 4.922,15.515 C5.21000144,15.2329986 5.55799796,15.0979999 5.966,15.11 C6.36200198,15.0979999 6.69799862,15.2359986 6.974,15.524 C7.25000138,15.8120014 7.38200006,16.153998 7.37,16.55 C7.37,16.946002 7.23200138,17.2849986 6.956,17.567 C6.67999862,17.8490014 6.35000192,17.99 5.966,17.99 C5.55799796,17.99 5.21000144,17.8490014 4.922,17.567 C4.63399856,17.2849986 4.49,16.946002 4.49,16.55 Z M13.094,16.514 C13.094,16.105998 13.2349986,15.7700013 13.517,15.506 C13.7990014,15.2419987 14.1499979,15.11 14.57,15.11 C14.9540019,15.11 15.2839986,15.2479986 15.56,15.524 C15.8360014,15.8000014 15.974,16.1299981 15.974,16.514 C15.974,16.922002 15.8360014,17.2699986 15.56,17.558 C15.2839986,17.8460014 14.942002,17.99 14.534,17.99 C14.1139979,17.99 13.7690014,17.8460014 13.499,17.558 C13.2289987,17.2699986 13.094,16.922002 13.094,16.514 Z",
    "checkbox-selected": "M0.35,16.082 L0.35,1.898 C0.35,0.926 0.926,0.35 1.898,0.35 L16.082,0.35 C17.054,0.35 17.63,0.926 17.63,1.898 L17.63,16.082 C17.63,17.054 17.054,17.63 16.082,17.63 L1.898,17.63 C0.89,17.63 0.35,17.054 0.35,16.082 Z M1.754,16.406 L16.226,16.406 L16.226,1.574 L1.754,1.574 L1.754,16.406 Z M3.914,13.508 L3.914,4.472 C3.914,3.896 4.256,3.554 4.832,3.554 L13.148,3.554 C13.724,3.554 14.066,3.896 14.066,4.472 L14.066,13.508 C14.066,14.084 13.724,14.426 13.148,14.426 L4.832,14.426 C4.238,14.426 3.914,14.084 3.914,13.508 Z",
    "checkbox-unchecked": "M0.35,16.082 L0.35,1.898 C0.35,1.40599754 0.48799862,1.02500135 0.764,0.755 C1.04000138,0.48499865 1.4179976,0.35 1.898,0.35 L16.082,0.35 C16.5740025,0.35 16.9549987,0.48499865 17.225,0.755 C17.4950014,1.02500135 17.63,1.40599754 17.63,1.898 L17.63,16.082 C17.63,16.5740025 17.4950014,16.9549986 17.225,17.225 C16.9549987,17.4950013 16.5740025,17.63 16.082,17.63 L1.898,17.63 C1.39399748,17.63 1.01000132,17.4950013 0.746,17.225 C0.48199868,16.9549986 0.35,16.5740025 0.35,16.082 Z M1.754,1.574 L1.754,16.406 L16.226,16.406 L16.226,1.574 L1.754,1.574 Z",
    "chevron-down": "8.03 9.42 0.2 1.608 1.19 0.6 8.012 7.476 14.852 0.6 15.842 1.59",
    "chevron-left": "0.65 8.03 8.462 0.2 9.47 1.19 2.594 8.012 9.47 14.852 8.48 15.842",
    "chevron-right": "0.5 1.19 1.508 0.2 9.32 8.03 1.49 15.842 0.5 14.852 7.376 8.012",
    "chevron-up": "1.19 8.82 0.2 7.812 8.03 0 15.842 7.83 14.852 8.82 8.012 1.944",
    "circle-check": "M0,8.964 C0,7.13999088 0.36299637,5.55300675 1.089,4.203 C1.81500363,2.85299325 2.85299325,1.81500363 4.203,1.089 C5.55300675,0.36299637 7.15199076,0 9,0 C10.8480092,0 12.4469933,0.36299637 13.797,1.089 C15.1470068,1.81500363 16.1849964,2.85299325 16.911,4.203 C17.6370036,5.55300675 18,7.13999088 18,8.964 C18,10.9320098 17.6400036,12.5909932 16.92,13.941 C16.1999964,15.2910067 15.1680067,16.3049966 13.824,16.983 C12.4799933,17.6610034 10.8720094,18 9,18 C7.12799064,18 5.52000672,17.6610034 4.176,16.983 C2.83199328,16.3049966 1.8000036,15.2910067 1.08,13.941 C0.3599964,12.5909932 0,10.9320098 0,8.964 Z M1.476,10.044 C1.476,11.3280064 1.78199694,12.4769949 2.394,13.491 C3.00600306,14.5050051 3.88499427,15.2999971 5.031,15.876 C6.17700573,16.4520029 7.52399226,16.74 9.072,16.74 C10.6200077,16.74 11.9549944,16.4520029 13.077,15.876 C14.1990056,15.2999971 15.0539971,14.5050051 15.642,13.491 C16.2300029,12.4769949 16.524,11.3280064 16.524,10.044 L16.524,7.884 C16.524,6.67199394 16.1970033,5.56200504 15.543,4.554 C14.8889967,3.54599496 13.9890057,2.74500297 12.843,2.151 C11.6969943,1.55699703 10.4160071,1.26 9,1.26 C7.58399292,1.26 6.30300573,1.55699703 5.157,2.151 C4.01099427,2.74500297 3.11100327,3.54599496 2.457,4.554 C1.80299673,5.56200504 1.476,6.67199394 1.476,7.884 L1.476,10.044 Z M4.68,8.406 L7.452,11.196 L13.266,5.382 L14.274,6.372 L7.47,13.176 L3.69,9.396 L4.68,8.406 Z",
    "circle-chevron-down": "M0,8.964 C0,7.13999088 0.36299637,5.55300675 1.089,4.203 C1.81500363,2.85299325 2.85299325,1.81500363 4.203,1.089 C5.55300675,0.36299637 7.15199076,0 9,0 C10.8480092,0 12.4469932,0.36299637 13.797,1.089 C15.1470068,1.81500363 16.1849964,2.85299325 16.911,4.203 C17.6370036,5.55300675 18,7.13999088 18,8.964 C18,10.9320098 17.6400036,12.5909933 16.92,13.941 C16.1999964,15.2910068 15.1680067,16.3049966 13.824,16.983 C12.4799933,17.6610034 10.8720094,18 9,18 C7.12799064,18 5.52000672,17.6610034 4.176,16.983 C2.83199328,16.3049966 1.8000036,15.2910068 1.08,13.941 C0.3599964,12.5909933 0,10.9320098 0,8.964 Z M1.476,10.044 C1.476,11.3280064 1.78199694,12.4799949 2.394,13.5 C3.00600306,14.5200051 3.88499427,15.3209971 5.031,15.903 C6.17700573,16.4850029 7.52399226,16.776 9.072,16.776 C10.6200077,16.776 11.9549944,16.4850029 13.077,15.903 C14.1990056,15.3209971 15.0539971,14.5200051 15.642,13.5 C16.2300029,12.4799949 16.524,11.3280064 16.524,10.044 L16.524,7.884 C16.524,6.67199394 16.1970033,5.55900507 15.543,4.545 C14.8889967,3.53099493 13.9860058,2.724 12.834,2.124 C11.6819942,1.523997 10.404007,1.224 9,1.224 C7.59599298,1.224 6.31800576,1.523997 5.166,2.124 C4.01399424,2.724 3.11100327,3.53099493 2.457,4.545 C1.80299673,5.55900507 1.476,6.67199394 1.476,7.884 L1.476,10.044 Z M14.166,7.848 L9,13.014 L3.78,7.794 L4.77,6.804 L8.982,11.052 L13.194,6.84 L14.166,7.848 Z",
    "circle-chevron-left": "M0,8.964 C0,7.13999088 0.36299637,5.55300675 1.089,4.203 C1.81500363,2.85299325 2.85299325,1.81500363 4.203,1.089 C5.55300675,0.36299637 7.15199076,0 9,0 C10.8480092,0 12.4469932,0.36299637 13.797,1.089 C15.1470068,1.81500363 16.1849964,2.85299325 16.911,4.203 C17.6370036,5.55300675 18,7.13999088 18,8.964 C18,10.9320098 17.6400036,12.5909933 16.92,13.941 C16.1999964,15.2910068 15.1680067,16.3049966 13.824,16.983 C12.4799933,17.6610034 10.8720094,18 9,18 C7.12799064,18 5.52000672,17.6610034 4.176,16.983 C2.83199328,16.3049966 1.8000036,15.2910068 1.08,13.941 C0.3599964,12.5909933 0,10.9320098 0,8.964 Z M1.476,10.044 C1.476,11.3280064 1.78199694,12.4769949 2.394,13.491 C3.00600306,14.5050051 3.88499427,15.2999971 5.031,15.876 C6.17700573,16.4520029 7.52399226,16.74 9.072,16.74 C10.6200077,16.74 11.9549944,16.4520029 13.077,15.876 C14.1990056,15.2999971 15.0539971,14.5050051 15.642,13.491 C16.2300029,12.4769949 16.524,11.3280064 16.524,10.044 L16.524,7.884 C16.524,6.67199394 16.1970033,5.56200504 15.543,4.554 C14.8889967,3.54599496 13.9890057,2.74500297 12.843,2.151 C11.6969943,1.55699703 10.4160071,1.26 9,1.26 C7.58399292,1.26 6.30300573,1.55699703 5.157,2.151 C4.01099427,2.74500297 3.11100327,3.54599496 2.457,4.554 C1.80299673,5.56200504 1.476,6.67199394 1.476,7.884 L1.476,10.044 Z M10.152,14.202 L4.986,9.036 L10.206,3.816 L11.196,4.806 L6.948,9.018 L11.16,13.23 L10.152,14.202 Z",
    "circle-chevron-up": "M18,9.036 C18,10.8600091 17.6370036,12.4469933 16.911,13.797 C16.1849964,15.1470068 15.1470068,16.1849964 13.797,16.911 C12.4469933,17.6370036 10.8480092,18 9,18 C7.15199076,18 5.55300675,17.6370036 4.203,16.911 C2.85299325,16.1849964 1.81500363,15.1470068 1.089,13.797 C0.36299637,12.4469933 0,10.8600091 0,9.036 C0,7.06799016 0.3599964,5.40900675 1.08,4.059 C1.8000036,2.70899325 2.83199328,1.69500339 4.176,1.017 C5.52000672,0.33899661 7.12799064,0 9,0 C10.8720094,0 12.4799933,0.33899661 13.824,1.017 C15.1680067,1.69500339 16.1999964,2.70899325 16.92,4.059 C17.6400036,5.40900675 18,7.06799016 18,9.036 Z M16.524,7.956 C16.524,6.67199358 16.2180031,5.5200051 15.606,4.5 C14.9939969,3.4799949 14.1150057,2.67900291 12.969,2.097 C11.8229943,1.51499709 10.476,1.224 8.928,1.224 C7.37999226,1.224 6.04500561,1.51499709 4.923,2.097 C3.80099439,2.67900291 2.94600294,3.4799949 2.358,4.5 C1.76999706,5.5200051 1.476,6.67199358 1.476,7.956 L1.476,10.116 C1.476,11.3280061 1.80299673,12.4409949 2.457,13.455 C3.11100327,14.4690051 4.01399424,15.275997 5.166,15.876 C6.31800576,16.476003 7.59599298,16.776 9,16.776 C10.404007,16.776 11.6819942,16.476003 12.834,15.876 C13.9860058,15.275997 14.8889967,14.4690051 15.543,13.455 C16.1970033,12.4409949 16.524,11.3280061 16.524,10.116 L16.524,7.956 Z M3.834,10.166 L9,5 L14.22,10.22 L13.23,11.21 L9.018,6.962 L4.806,11.174 L3.834,10.166 Z",
    "circle-cross-fill": "M0,8.964 C0,7.05599046 0.3599964,5.43300669 1.08,4.095 C1.8000036,2.75699331 2.83499325,1.74000348 4.185,1.044 C5.53500675,0.34799652 7.1399907,0 9,0 C10.8600093,0 12.4649933,0.34799652 13.815,1.044 C15.1650067,1.74000348 16.1999964,2.75699331 16.92,4.095 C17.6400036,5.43300669 18,7.05599046 18,8.964 C18,12.0000152 17.2170078,14.2649925 15.651,15.759 C14.0849922,17.2530075 11.8680143,18 9,18 C6.13198566,18 3.91500783,17.2530075 2.349,15.759 C0.78299217,14.2649925 0,12.0000152 0,8.964 Z M8.01,8.928 L4.572,12.366 L5.562,13.356 L9,9.918 L12.438,13.356 L13.428,12.366 L9.99,8.928 L13.428,5.49 L12.438,4.5 L9,7.938 L5.562,4.5 L4.572,5.49 L8.01,8.928 Z",
    "circle-cross-stroke": "M0,8.964 C0,7.13999088 0.36299637,5.55300675 1.089,4.203 C1.81500363,2.85299325 2.85299325,1.81500363 4.203,1.089 C5.55300675,0.36299637 7.15199076,0 9,0 C10.8480092,0 12.4469933,0.36299637 13.797,1.089 C15.1470068,1.81500363 16.1849964,2.85299325 16.911,4.203 C17.6370036,5.55300675 18,7.13999088 18,8.964 C18,10.9320098 17.6400036,12.5909932 16.92,13.941 C16.1999964,15.2910067 15.1680067,16.3049966 13.824,16.983 C12.4799933,17.6610034 10.8720094,18 9,18 C7.12799064,18 5.52000672,17.6610034 4.176,16.983 C2.83199328,16.3049966 1.8000036,15.2910067 1.08,13.941 C0.3599964,12.5909932 0,10.9320098 0,8.964 Z M1.476,10.044 C1.476,11.3280064 1.78199694,12.4769949 2.394,13.491 C3.00600306,14.5050051 3.88499427,15.2999971 5.031,15.876 C6.17700573,16.4520029 7.52399226,16.74 9.072,16.74 C10.6200077,16.74 11.9549944,16.4520029 13.077,15.876 C14.1990056,15.2999971 15.0539971,14.5050051 15.642,13.491 C16.2300029,12.4769949 16.524,11.3280064 16.524,10.044 L16.524,7.884 C16.524,6.67199394 16.1970033,5.56200504 15.543,4.554 C14.8889967,3.54599496 13.9890057,2.74500297 12.843,2.151 C11.6969943,1.55699703 10.4160071,1.26 9,1.26 C7.58399292,1.26 6.30300573,1.55699703 5.157,2.151 C4.01099427,2.74500297 3.11100327,3.54599496 2.457,4.554 C1.80299673,5.56200504 1.476,6.67199394 1.476,7.884 L1.476,10.044 Z M12.852,6.102 L9.972,8.982 L12.834,11.844 L11.844,12.816 L8.982,9.954 L6.12,12.834 L5.112,11.844 L7.992,8.964 L5.13,6.102 L6.12,5.13 L8.982,7.992 L11.844,5.112 L12.852,6.102 Z",
    "circle-cross": "M0,8.964 C0,7.05599046 0.3599964,5.43300669 1.08,4.095 C1.8000036,2.75699331 2.83499325,1.74000348 4.185,1.044 C5.53500675,0.34799652 7.1399907,0 9,0 C10.8600093,0 12.4649933,0.34799652 13.815,1.044 C15.1650067,1.74000348 16.1999964,2.75699331 16.92,4.095 C17.6400036,5.43300669 18,7.05599046 18,8.964 C18,12.0000152 17.2170078,14.2649925 15.651,15.759 C14.0849922,17.2530075 11.8680143,18 9,18 C6.13198566,18 3.91500783,17.2530075 2.349,15.759 C0.78299217,14.2649925 0,12.0000152 0,8.964 Z M8.01,8.928 L4.572,12.366 L5.562,13.356 L9,9.918 L12.438,13.356 L13.428,12.366 L9.99,8.928 L13.428,5.49 L12.438,4.5 L9,7.938 L5.562,4.5 L4.572,5.49 L8.01,8.928 Z",
    "circle-plus": "M0,8.964 C0,7.13999088 0.36299637,5.55300675 1.089,4.203 C1.81500363,2.85299325 2.85299325,1.81500363 4.203,1.089 C5.55300675,0.36299637 7.15199076,0 9,0 C10.8480092,0 12.4469933,0.36299637 13.797,1.089 C15.1470068,1.81500363 16.1849964,2.85299325 16.911,4.203 C17.6370036,5.55300675 18,7.13999088 18,8.964 C18,10.9320098 17.6400036,12.5909932 16.92,13.941 C16.1999964,15.2910067 15.1680067,16.3049966 13.824,16.983 C12.4799933,17.6610034 10.8720094,18 9,18 C7.12799064,18 5.52000672,17.6610034 4.176,16.983 C2.83199328,16.3049966 1.8000036,15.2910067 1.08,13.941 C0.3599964,12.5909932 0,10.9320098 0,8.964 Z M1.476,10.044 C1.476,11.3280064 1.78199694,12.4769949 2.394,13.491 C3.00600306,14.5050051 3.88499427,15.2999971 5.031,15.876 C6.17700573,16.4520029 7.52399226,16.74 9.072,16.74 C10.6200077,16.74 11.9549944,16.4520029 13.077,15.876 C14.1990056,15.2999971 15.0539971,14.5050051 15.642,13.491 C16.2300029,12.4769949 16.524,11.3280064 16.524,10.044 L16.524,7.884 C16.524,6.67199394 16.1970033,5.56200504 15.543,4.554 C14.8889967,3.54599496 13.9890057,2.74500297 12.843,2.151 C11.6969943,1.55699703 10.4160071,1.26 9,1.26 C7.58399292,1.26 6.30300573,1.55699703 5.157,2.151 C4.01099427,2.74500297 3.11100327,3.54599496 2.457,4.554 C1.80299673,5.56200504 1.476,6.67199394 1.476,7.884 L1.476,10.044 Z M4.626,9.54 L4.626,8.316 L8.298,8.316 L8.298,4.212 L9.702,4.212 L9.702,8.316 L13.374,8.316 L13.374,9.54 L9.702,9.54 L9.702,13.644 L8.298,13.644 L8.298,9.54 L4.626,9.54 Z",
    "circle-warning": "M8.982,14.418 C8.57399796,14.418 8.29500075,14.3340008 8.145,14.166 C7.99499925,13.9979992 7.92,13.7700014 7.92,13.482 L7.92,13.266 C7.92,12.9899986 7.99499925,12.7650009 8.145,12.591 C8.29500075,12.4169991 8.57399796,12.33 8.982,12.33 C9.4020021,12.33 9.68999922,12.4169991 9.846,12.591 C10.0020008,12.7650009 10.08,12.9899986 10.08,13.266 L10.08,13.482 C10.08,13.7700014 10.0020008,13.9979992 9.846,14.166 C9.68999922,14.3340008 9.4020021,14.418 8.982,14.418 Z M0,8.964 C0,7.13999088 0.36299637,5.55300675 1.089,4.203 C1.81500363,2.85299325 2.85299325,1.81500363 4.203,1.089 C5.55300675,0.36299637 7.15199076,0 9,0 C10.8480092,0 12.4469933,0.36299637 13.797,1.089 C15.1470068,1.81500363 16.1849964,2.85299325 16.911,4.203 C17.6370036,5.55300675 18,7.13999088 18,8.964 C18,10.9320098 17.6400036,12.5909932 16.92,13.941 C16.1999964,15.2910067 15.1680067,16.3049966 13.824,16.983 C12.4799933,17.6610034 10.8720094,18 9,18 C7.12799064,18 5.52000672,17.6610034 4.176,16.983 C2.83199328,16.3049966 1.8000036,15.2910067 1.08,13.941 C0.3599964,12.5909932 0,10.9320098 0,8.964 Z M1.476,10.044 C1.476,11.3280064 1.78199694,12.4769949 2.394,13.491 C3.00600306,14.5050051 3.88499427,15.2999971 5.031,15.876 C6.17700573,16.4520029 7.52399226,16.74 9.072,16.74 C10.6200077,16.74 11.9549944,16.4520029 13.077,15.876 C14.1990056,15.2999971 15.0539971,14.5050051 15.642,13.491 C16.2300029,12.4769949 16.524,11.3280064 16.524,10.044 L16.524,7.884 C16.524,6.67199394 16.1970033,5.56200504 15.543,4.554 C14.8889967,3.54599496 13.9890057,2.74500297 12.843,2.151 C11.6969943,1.55699703 10.4160071,1.26 9,1.26 C7.58399292,1.26 6.30300573,1.55699703 5.157,2.151 C4.01099427,2.74500297 3.11100327,3.54599496 2.457,4.554 C1.80299673,5.56200504 1.476,6.67199394 1.476,7.884 L1.476,10.044 Z M8.208,7.254 L8.208,3.51 L9.792,3.51 L9.792,7.254 L9.504,10.89 L8.496,10.89 L8.208,7.254 Z",
    "download": "M8.99,14.012 L4.562,9.296 L5.498,8.396 L8.288,11.492 L8.288,0.35 L9.692,0.35 L9.692,11.492 L12.482,8.396 L13.418,9.296 L8.99,14.012 Z M16.226,9.782 L17.63,9.782 L17.63,16.082 C17.63,16.5740025 17.4950014,16.9549986 17.225,17.225 C16.9549987,17.4950013 16.5740025,17.63 16.082,17.63 L1.898,17.63 C1.4179976,17.63 1.04000138,17.4950013 0.764,17.225 C0.48799862,16.9549986 0.35,16.5740025 0.35,16.082 L0.35,9.782 L1.754,9.782 L1.754,16.406 L16.226,16.406 L16.226,9.782 Z",
    "drop-down": "M0.86,2.148 C0.6199988,1.87199862 0.5,1.59600138 0.5,1.32 C0.5,1.10399892 0.57799922,0.93000066 0.734,0.798 C0.89000078,0.66599934 1.09999868,0.6 1.364,0.6 L12.596,0.6 C12.8720014,0.6 13.0849993,0.66599934 13.235,0.798 C13.3850008,0.93000066 13.46,1.09799898 13.46,1.302 C13.46,1.59000144 13.3160014,1.89599838 13.028,2.22 L7.736,7.944 C7.50799886,8.1840012 7.25600138,8.304 6.98,8.304 C6.70399862,8.304 6.45200114,8.1840012 6.224,7.944 L0.86,2.148 Z M6.98,6.774 L11.48,1.824 L2.48,1.824 L6.98,6.774 Z",
    "drop-up-down": "M6.224,0.36 C6.45200114,0.1199988 6.70399862,0 6.98,0 C7.25600138,0 7.50799886,0.1199988 7.736,0.36 L13.028,6.084 C13.3160014,6.40800162 13.46,6.71399856 13.46,7.002 C13.46,7.20600102 13.3850008,7.37399934 13.235,7.506 C13.0849993,7.63800066 12.8720014,7.704 12.596,7.704 L1.364,7.704 C1.09999868,7.704 0.89000078,7.63800066 0.734,7.506 C0.57799922,7.37399934 0.5,7.20000108 0.5,6.984 C0.5,6.70799862 0.6199988,6.43200138 0.86,6.156 L6.224,0.36 Z M11.48,6.48 L6.98,1.53 L2.48,6.48 L11.48,6.48 Z M0.86,11.844 C0.6199988,11.5679986 0.5,11.2920014 0.5,11.016 C0.5,10.7999989 0.57799922,10.6260007 0.734,10.494 C0.89000078,10.3619993 1.09999868,10.296 1.364,10.296 L12.596,10.296 C12.8720014,10.296 13.0849993,10.3619993 13.235,10.494 C13.3850008,10.6260007 13.46,10.793999 13.46,10.998 C13.46,11.2860014 13.3160014,11.5919984 13.028,11.916 L7.736,17.64 C7.50799886,17.8800012 7.25600138,18 6.98,18 C6.70399862,18 6.45200114,17.8800012 6.224,17.64 L0.86,11.844 Z M6.98,16.47 L11.48,11.52 L2.48,11.52 L6.98,16.47 Z",
    // "drop-up": "M0.86,2.148 C0.6199988,1.87199862 0.5,1.59600138 0.5,1.32 C0.5,1.10399892 0.57799922,0.93000066 0.734,0.798 C0.89000078,0.66599934 1.09999868,0.6 1.364,0.6 L12.596,0.6 C12.8720014,0.6 13.0849993,0.66599934 13.235,0.798 C13.3850008,0.93000066 13.46,1.09799898 13.46,1.302 C13.46,1.59000144 13.3160014,1.89599838 13.028,2.22 L7.736,7.944 C7.50799886,8.1840012 7.25600138,8.304 6.98,8.304 C6.70399862,8.304 6.45200114,8.1840012 6.224,7.944 L0.86,2.148 Z M6.98,6.774 L11.48,1.824 L2.48,1.824 L6.98,6.774 Z",
    "external-link-down": "M14.174,17.63 L14.174,16.406 L16.226,16.406 L16.226,1.574 L1.754,1.574 L1.754,16.406 L3.806,16.406 L3.806,17.63 L1.898,17.63 C1.39399748,17.63 1.01000132,17.4950013 0.746,17.225 C0.48199868,16.9549986 0.35,16.5740025 0.35,16.082 L0.35,1.898 C0.35,1.40599754 0.48799862,1.02500135 0.764,0.755 C1.04000138,0.48499865 1.4179976,0.35 1.898,0.35 L16.082,0.35 C16.5740025,0.35 16.9549987,0.48499865 17.225,0.755 C17.4950014,1.02500135 17.63,1.40599754 17.63,1.898 L17.63,16.082 C17.63,16.5740025 17.4950014,16.9549986 17.225,17.225 C16.9549987,17.4950013 16.5740025,17.63 16.082,17.63 L14.174,17.63 Z M5.408,12.284 L8.27,15.452 L8.27,4.418 L9.674,4.418 L9.674,15.452 L12.554,12.266 L13.634,13.328 L8.972,17.99 L4.328,13.364 L5.408,12.284 Z",
    "external-link-left": "M0.36,14.174 L1.764,14.174 L1.764,16.406 L16.236,16.406 L16.236,1.574 L1.764,1.574 L1.764,3.806 L0.36,3.806 L0.36,1.898 C0.36,1.39399748 0.49499865,1.01000132 0.765,0.746 C1.03500135,0.48199868 1.41599754,0.35 1.908,0.35 L16.092,0.35 C16.5840025,0.35 16.9649986,0.48499865 17.235,0.755 C17.5050013,1.02500135 17.64,1.40599754 17.64,1.898 L17.64,16.082 C17.64,16.5740025 17.5050013,16.9549986 17.235,17.225 C16.9649986,17.4950013 16.5840025,17.63 16.092,17.63 L1.908,17.63 C1.4279976,17.63 1.05000138,17.4950013 0.774,17.225 C0.49799862,16.9549986 0.36,16.5740025 0.36,16.082 L0.36,14.174 Z M5.706,5.408 L2.538,8.27 L13.572,8.27 L13.572,9.674 L2.538,9.674 L5.724,12.554 L4.662,13.634 L-2.85993451e-13,8.972 L4.626,4.328 L5.706,5.408 Z",
    "external-link-right": "M17.63,3.806 L16.226,3.806 L16.226,1.574 L1.754,1.574 L1.754,16.406 L16.226,16.406 L16.226,14.174 L17.63,14.174 L17.63,16.082 C17.63,16.5860025 17.4950014,16.9699987 17.225,17.234 C16.9549987,17.4980013 16.5740025,17.63 16.082,17.63 L1.898,17.63 C1.4179976,17.63 1.04000138,17.4950014 0.764,17.225 C0.48799862,16.9549987 0.35,16.5740025 0.35,16.082 L0.35,1.898 C0.35,1.40599754 0.48799862,1.02500135 0.764,0.755 C1.04000138,0.48499865 1.4179976,0.35 1.898,0.35 L16.082,0.35 C16.5740025,0.35 16.9549987,0.48499865 17.225,0.755 C17.4950014,1.02500135 17.63,1.40599754 17.63,1.898 L17.63,3.806 Z M12.284,12.572 L15.452,9.71 L4.418,9.71 L4.418,8.306 L15.452,8.306 L12.266,5.426 L13.328,4.346 L17.99,9.008 L13.364,13.652 L12.284,12.572 Z",
    "external-link-right-up": "M16.226,10.106 L17.63,10.106 L17.63,16.082 C17.63,16.5740025 17.4950014,16.9549986 17.225,17.225 C16.9549987,17.4950013 16.5740025,17.63 16.082,17.63 L1.898,17.63 C1.4179976,17.63 1.04000138,17.4950013 0.764,17.225 C0.48799862,16.9549986 0.35,16.5740025 0.35,16.082 L0.35,1.898 C0.35,1.40599754 0.48799862,1.02500135 0.764,0.755 C1.04000138,0.48499865 1.4179976,0.35 1.898,0.35 L7.874,0.35 L7.874,1.574 L1.754,1.574 L1.754,16.406 L16.226,16.406 L16.226,10.106 Z M17.63,0.35 L17.63,6.866 L16.226,6.866 L16.442,2.51 L6.182,12.878 L5.102,11.798 L15.47,1.538 L11.114,1.754 L11.114,0.35 L17.63,0.35 Z",
    "folder": "M0.35,12.52 L0.35,1.72 C0.35,1.19199736 0.49099859,0.79000138 0.773,0.514 C1.05500141,0.23799862 1.45399742,0.1 1.97,0.1 L6.866,0.1 L8.522,2.584 L12.986,2.584 C13.5140026,2.584 13.9159986,2.72199862 14.192,2.998 C14.4680014,3.27400138 14.606,3.67599736 14.606,4.204 L14.606,6.544 L16.802,6.544 C17.1620018,6.544 17.4499989,6.63099913 17.666,6.805 C17.8820011,6.97900087 17.99,7.20399862 17.99,7.48 C17.99,7.69600108 17.9300006,7.9239988 17.81,8.164 L15.686,12.664 C15.4459988,13.1680025 15.1580017,13.5399988 14.822,13.78 C14.4859983,14.0200012 14.0660025,14.14 13.562,14.14 L1.97,14.14 C1.46599748,14.14 1.07000144,13.9960014 0.782,13.708 C0.49399856,13.4199986 0.35,13.0240025 0.35,12.52 Z M1.754,1.324 L1.754,10.666 L2.906,8.056 C3.36200228,7.04799496 4.09399496,6.544 5.102,6.544 L13.202,6.544 L13.202,3.808 L7.838,3.808 L6.11,1.324 L1.754,1.324 Z M4.4,7.768 L2.132,12.916 L14.282,12.916 L16.622,7.768 L4.4,7.768 Z",
    "menu-burger": "M0.85,1.532 L0.85,0.2 L15.25,0.2 L15.25,1.532 L0.85,1.532 Z M0.85,6.644 L0.85,5.312 L15.25,5.312 L15.25,6.644 L0.85,6.644 Z M0.85,11.756 L0.85,10.424 L15.25,10.424 L15.25,11.756 L0.85,11.756 Z",
    "plus": "0.5 6.314 6.332 6.314 6.332 0.05 7.7 0.05 7.7 6.314 13.532 6.314 13.532 7.538 7.7 7.538 7.7 13.802 6.332 13.802 6.332 7.538 0.5 7.538",
    "question-mark": "M0,8.964 C0,7.13999088 0.36299637,5.55300675 1.089,4.203 C1.81500363,2.85299325 2.85299325,1.81500363 4.203,1.089 C5.55300675,0.36299637 7.15199076,0 9,0 C10.8480092,0 12.4469933,0.36299637 13.797,1.089 C15.1470068,1.81500363 16.1849964,2.85299325 16.911,4.203 C17.6370036,5.55300675 18,7.13999088 18,8.964 C18,10.9320098 17.6400036,12.5909932 16.92,13.941 C16.1999964,15.2910068 15.1680067,16.3049966 13.824,16.983 C12.4799933,17.6610034 10.8720094,18 9,18 C7.12799064,18 5.52000672,17.6610034 4.176,16.983 C2.83199328,16.3049966 1.8000036,15.2910068 1.08,13.941 C0.3599964,12.5909932 0,10.9320098 0,8.964 Z M1.476,10.044 C1.476,11.3280064 1.78199694,12.4769949 2.394,13.491 C3.00600306,14.5050051 3.88499427,15.2999971 5.031,15.876 C6.17700573,16.4520029 7.52399226,16.74 9.072,16.74 C10.6200077,16.74 11.9549944,16.4520029 13.077,15.876 C14.1990056,15.2999971 15.0539971,14.5050051 15.642,13.491 C16.2300029,12.4769949 16.524,11.3280064 16.524,10.044 L16.524,7.884 C16.524,6.67199394 16.1970033,5.56200504 15.543,4.554 C14.8889967,3.54599496 13.9890057,2.74500297 12.843,2.151 C11.6969943,1.55699703 10.4160071,1.26 9,1.26 C7.58399292,1.26 6.30300573,1.55699703 5.157,2.151 C4.01099427,2.74500297 3.11100327,3.54599496 2.457,4.554 C1.80299673,5.56200504 1.476,6.67199394 1.476,7.884 L1.476,10.044 Z M8.856,3.87 C10.008,3.87 10.8359975,4.12499745 11.34,4.635 C11.8440025,5.14500255 12.096,5.8799952 12.096,6.84 C12.096,7.47600318 11.9640013,8.01299781 11.7,8.451 C11.4359987,8.88900219 11.109002,9.21299895 10.719,9.423 C10.328998,9.63300105 9.94200192,9.738 9.558,9.738 L9.558,10.962 L8.154,10.962 L8.154,8.73 C8.97000408,8.71799994 9.56399814,8.53800174 9.936,8.19 C10.3080019,7.84199826 10.494,7.39200276 10.494,6.84 C10.494,6.39599778 10.3680013,6.00000174 10.116,5.652 C9.86399874,5.30399826 9.46200276,5.13 8.91,5.13 C8.29799694,5.13 7.8120018,5.32199808 7.452,5.706 C7.0919982,6.09000192 6.84600066,6.53399748 6.714,7.038 L5.508,6.246 C5.73600114,5.53799646 6.11699733,4.96500219 6.651,4.527 C7.18500267,4.08899781 7.91999532,3.87 8.856,3.87 Z M8.892,12.168 C9.63600372,12.168 10.008,12.5279964 10.008,13.248 C10.008,13.6200019 9.90900099,13.8989991 9.711,14.085 C9.51299901,14.2710009 9.24000174,14.364 8.892,14.364 C8.54399826,14.364 8.27100099,14.2710009 8.073,14.085 C7.87499901,13.8989991 7.776,13.6200019 7.776,13.248 C7.776,12.8879982 7.87499901,12.6180009 8.073,12.438 C8.27100099,12.2579991 8.54399826,12.168 8.892,12.168 Z",
    "school": "M0.35,10.192 C0.35,9.66399736 0.49699853,9.25600144 0.791,8.968 C1.08500147,8.67999856 1.48999742,8.536 2.006,8.536 L4.202,8.536 L4.202,3.856 C4.202,3.32799736 4.34899853,2.92000144 4.643,2.632 C4.93700147,2.34399856 5.34199742,2.2 5.858,2.2 L12.086,2.2 C12.6140026,2.2 13.0219986,2.34399856 13.31,2.632 C13.5980014,2.92000144 13.742,3.32799736 13.742,3.856 L13.742,8.536 L15.974,8.536 C16.5020026,8.536 16.9099986,8.67999856 17.198,8.968 C17.4860014,9.25600144 17.63,9.66399736 17.63,10.192 L17.63,15.916 L16.226,15.916 L16.226,9.76 L13.742,9.76 L13.742,15.916 L12.338,15.916 L12.338,3.424 L5.606,3.424 L5.606,15.916 L4.202,15.916 L4.202,9.76 L1.754,9.76 L1.754,15.916 L0.35,15.916 L0.35,10.192 Z M8.954,8.77 C8.37799712,8.77 7.95200138,8.63500135 7.676,8.365 C7.39999862,8.09499865 7.262,7.67200288 7.262,7.096 C7.262,6.495997 7.39699865,6.05500141 7.667,5.773 C7.93700135,5.49099859 8.36599706,5.35 8.954,5.35 C9.554003,5.35 9.99199862,5.48499865 10.268,5.755 C10.5440014,6.02500135 10.682,6.45399706 10.682,7.042 C10.682,7.63000294 10.5440014,8.06499859 10.268,8.347 C9.99199862,8.62900141 9.554003,8.77 8.954,8.77 Z M10.61,11.74 L10.61,15.916 L7.334,15.916 L7.334,11.74 L10.61,11.74 Z",
    "search": "M16.956,17.874 L10.854,12.186 C9.70199424,12.990004 8.2860084,13.392 6.606,13.392 C5.32199358,13.392 4.18200498,13.1370025 3.186,12.627 C2.18999502,12.1169974 1.41000282,11.358005 0.846,10.35 C0.28199718,9.34199496 0,8.11200726 0,6.66 C0,5.29199316 0.28499715,4.10700501 0.855,3.105 C1.42500285,2.10299499 2.21699493,1.33500267 3.231,0.801 C4.24500507,0.26699733 5.38799364,-5.68434189e-14 6.66,-5.68434189e-14 C7.94400642,-5.68434189e-14 9.09299493,0.26699733 10.107,0.801 C11.1210051,1.33500267 11.9159971,2.10599496 12.492,3.114 C13.0680029,4.12200504 13.356,5.30399322 13.356,6.66 C13.356,8.53200936 12.8700049,10.0499942 11.898,11.214 L18,16.848 L16.956,17.874 Z M1.476,7.632 C1.476,8.46000414 1.69799778,9.21599658 2.142,9.9 C2.58600222,10.5840034 3.1979961,11.126998 3.978,11.529 C4.7580039,11.931002 5.63999508,12.132 6.624,12.132 C7.62000498,12.132 8.51999598,11.934002 9.324,11.538 C10.128004,11.141998 10.7549978,10.6020034 11.205,9.918 C11.6550022,9.23399658 11.88,8.4720042 11.88,7.632 L11.88,5.868 C11.88,5.0279958 11.6400024,4.25400354 11.16,3.546 C10.6799976,2.83799646 10.038004,2.28000204 9.234,1.872 C8.42999598,1.46399796 7.57200456,1.26 6.66,1.26 C5.77199556,1.26 4.92900399,1.46399796 4.131,1.872 C3.33299601,2.28000204 2.69100243,2.83799646 2.205,3.546 C1.71899757,4.25400354 1.476,5.0279958 1.476,5.868 L1.476,7.632 Z",
    "user": "M9,0 C10.8480092,0 12.4469933,0.36299637 13.797,1.089 C15.1470068,1.81500363 16.1849964,2.85299325 16.911,4.203 C17.6370036,5.55300675 18,7.13999088 18,8.964 C18,10.9320098 17.6400036,12.5909932 16.92,13.941 C16.1999964,15.2910068 15.1680067,16.3049966 13.824,16.983 C12.4799933,17.6610034 10.8720094,18 9,18 C7.12799064,18 5.52000672,17.6610034 4.176,16.983 C2.83199328,16.3049966 1.8000036,15.2910068 1.08,13.941 C0.3599964,12.5909932 0,10.9320098 0,8.964 C0,7.13999088 0.36299637,5.55300675 1.089,4.203 C1.81500363,2.85299325 2.85299325,1.81500363 4.203,1.089 C5.55300675,0.36299637 7.15199076,0 9,0 Z M14.418,14.976 C15.1020034,14.375997 15.6239982,13.6530042 15.984,12.807 C16.3440018,11.9609958 16.524,11.040005 16.524,10.044 L16.524,7.884 C16.524,6.67199394 16.1970033,5.56200504 15.543,4.554 C14.8889967,3.54599496 13.9890057,2.74500297 12.843,2.151 C11.6969943,1.55699703 10.4160071,1.26 9,1.26 C7.58399292,1.26 6.30300573,1.55699703 5.157,2.151 C4.01099427,2.74500297 3.11100327,3.54599496 2.457,4.554 C1.80299673,5.56200504 1.476,6.67199394 1.476,7.884 L1.476,10.044 C1.476,11.0280049 1.6559982,11.9369958 2.016,12.771 C2.3760018,13.6050042 2.89799658,14.3159971 3.582,14.904 C3.6420003,13.9799954 3.83099841,13.2390028 4.149,12.681 C4.46700159,12.1229972 4.9559967,11.7120013 5.616,11.448 C6.2760033,11.1839987 7.15199454,11.052 8.244,11.052 L9.756,11.052 C10.8600055,11.052 11.7419967,11.1869987 12.402,11.457 C13.0620033,11.7270014 13.5509984,12.1469972 13.869,12.717 C14.1870016,13.2870029 14.3699998,14.0399953 14.418,14.976 Z M9.036,3.888 C9.97200468,3.888 10.6979974,4.13399754 11.214,4.626 C11.7300026,5.11800246 11.988,5.81999544 11.988,6.732 C11.988,7.65600462 11.7330026,8.34899769 11.223,8.811 C10.7129975,9.27300231 9.98400474,9.504 9.036,9.504 C8.03999502,9.504 7.28700255,9.27300231 6.777,8.811 C6.26699745,8.34899769 6.012,7.65600462 6.012,6.732 C6.012,5.80799538 6.26999742,5.10300243 6.786,4.617 C7.30200258,4.13099757 8.05199508,3.888 9.036,3.888 Z M10.638,6.39 C10.638,5.99399802 10.4880015,5.67300123 10.188,5.427 C9.8879985,5.18099877 9.49200246,5.058 9,5.058 C8.49599748,5.058 8.10300141,5.1779988 7.821,5.418 C7.53899859,5.6580012 7.398,5.98199796 7.398,6.39 L7.398,7.002 C7.398,7.4220021 7.53599862,7.75499877 7.812,8.001 C8.08800138,8.24700123 8.48399742,8.37 9,8.37 C9.50400252,8.37 9.90299853,8.24400126 10.197,7.992 C10.4910015,7.73999874 10.638,7.41000204 10.638,7.002 L10.638,6.39 Z M4.86,15.786 C6.060006,16.4220032 7.46399196,16.74 9.072,16.74 C10.6200077,16.74 11.9759942,16.440003 13.14,15.84 C13.1159999,14.8559951 13.002001,14.1180025 12.798,13.626 C12.593999,13.1339975 12.2580023,12.7980009 11.79,12.618 C11.3219977,12.4379991 10.6440044,12.348 9.756,12.348 L8.244,12.348 C7.4039958,12.348 6.75000234,12.4379991 6.282,12.618 C5.81399766,12.7980009 5.46600114,13.1309976 5.238,13.617 C5.00999886,14.1030024 4.88400012,14.8259952 4.86,15.786 Z",
    "close": "3.636 15.372 2.556 14.292 7.92 8.928 2.556 3.564 3.636 2.484 9 7.848 14.364 2.484 15.444 3.564 10.08 8.928 15.444 14.292 14.364 15.372 9 10.008",
    "exit": "M7.2,1.8 L1.872,1.8 L1.872,16.2 L7.2,16.2 L7.2,17.64 L1.908,17.64 C0.936,17.64 0.36,17.064 0.36,16.092 L0.36,1.908 C0.36,0.936 0.936,0.36 1.908,0.36 L7.2,0.36 L7.2,1.8 Z M5.364,9 L9.972,4.392 L11.088,5.508 L8.028,8.244 L17.64,8.244 L17.64,9.792 L8.028,9.792 L11.088,12.528 L9.972,13.608 L5.364,9 Z",
    "enter": "M10.8,1.8 L10.8,0.36 L16.092,0.36 C17.064,0.36 17.64,0.936 17.64,1.908 L17.64,16.092 C17.64,17.064 17.064,17.64 16.092,17.64 L10.8,17.64 L10.8,16.2 L16.128,16.2 L16.128,1.8 L10.8,1.8 Z M6.912,12.528 L9.972,9.792 L0.36,9.792 L0.36,8.244 L9.972,8.244 L6.912,5.508 L8.028,4.392 L12.636,9 L8.028,13.608 L6.912,12.528 Z",
};

const stylesCss$f = ":host{line-height:0;vertical-align:middle}";

class ZIcon {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** icon height (optional) */
        this.height = 18;
        /** icon width (optional) */
        this.width = 18;
    }
    selectPathOrPolygon(iconName) {
        if (iconName && iconName.startsWith('M')) {
            return index.h("path", { d: icons[this.name] });
        }
        else {
            return index.h("polygon", { points: icons[this.name] });
        }
    }
    render() {
        return (index.h("svg", { viewBox: "0 0 18 18", width: this.width, height: this.height, id: this.iconid }, this.selectPathOrPolygon(icons[this.name])));
    }
}
ZIcon.style = stylesCss$f;

const stylesCss$g = ":host>div{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-pack:start;justify-content:flex-start;font-family:Verdana, Arial, Helvetica, sans-serif;font-size:12px}:host>div>div{width:300px;margin:5px}:host>div>div>label{margin:0 10px}";

class ZIconPackage {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const iconsNames = Object.keys(icons);
        return (index.h("div", null, iconsNames.map((icon) => {
            return (index.h("div", null, index.h("z-icon", { name: icon }), index.h("label", null, icon)));
        })));
    }
}
ZIconPackage.style = stylesCss$g;

const stylesCss$h = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host>div{background:var(--accent-lighter);padding:var(--basex2);border-radius:var(--radius-base);display:-ms-flexbox;display:flex;width:inherit}:host>div>slot{color:var(--text-grey-800);font-size:14px}:host>div>z-icon{fill:var(--myz-blue);cursor:pointer;margin-left:var(--basex2)}";

/**
 * @slot content - set the info box content
 */
class ZInfoBox {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** render close icon flag */
        this.isclosable = true;
        this.infoBoxClose = index.createEvent(this, "infoBoxClose", 7);
    }
    emitInfoBoxClose() {
        this.infoBoxClose.emit({ boxid: this.boxid });
    }
    render() {
        return (index.h("div", { id: this.boxid }, index.h("slot", { name: "content" }), this.isclosable && index.h("z-icon", { name: "close", "data-action": "infoBoxClose", onClick: () => this.emitInfoBoxClose() })));
    }
}
ZInfoBox.style = stylesCss$h;

const stylesCss$i = ":host{display:inline-block;width:inherit}:host input,:host textarea,:host ul[role=\"listbox\"]{background:var(--bg-white);border-radius:0px;border:var(--border-size-small) solid var(--bg-grey-200);border-color:var(--bg-grey-200);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-rg);font-size:16px;outline:none}:host .filled{border-color:var(--text-grey-800) !important}:host input:focus,:host ul[role=\"listbox\"].closed:focus,:host li[role=\"option\"]:focus,:host .focus{border-color:transparent;-webkit-box-shadow:0 0 2px 2px var(--accent-dark);box-shadow:0 0 2px 2px var(--accent-dark);outline:none}:host input:hover,:host textarea:hover,:host ul[role=\"listbox\"].closed:hover,:host .hover{background:var(--bg-grey-050) !important;border-color:var(--text-grey-800) !important}:host input[readonly],:host .readonly,:host input[readonly].filled,:host .readonly.filled,:host ul[role=\"listbox\"].closed.readonly{border-color:var(--text-grey-200) !important;color:var(--text-grey-800) !important;pointer-events:none}:host input[readonly]:hover,:host textarea[readonly]:hover,:host .readonly.hover,:host ul[role=\"listbox\"].closed[readonly]:hover{background:var(--bg-white)}:host input:disabled,:host .disabled,:host .filled:disabled,:host input:disabled:hover,:host textarea:disabled:hover,:host .disabled.hover,:host ul[role=\"listbox\"].closed.disabled,:host ul[role=\"listbox\"].closed.disabled:hover{background:var(--bg-white) !important;border-color:var(--bg-grey-200) !important;-webkit-box-shadow:none !important;box-shadow:none !important;color:var(--text-grey-700) !important;fill:var(--bg-grey-200) !important;pointer-events:none}:host .input_success,:host .input_success:hover,:host .input_success.hover{background:var(--status-success-green-lighter) !important;border-color:var(--status-success-green) !important}:host .input_error,:host .input_error:hover,:host .input_error.hover{background:var(--status-error-red-lighter) !important;border-color:var(--status-error-red) !important}:host .input_warning,:host .input_warning:hover,:host .input_warning.hover{background:var(--status-warning-yellow-lighter) !important;border-color:var(--status-warning-yellow) !important}:host input:focus.istyping,:host .focus.istyping{border-color:var(--myz-blue) !important;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;color:var(--myz-blue)}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--text-grey-700)}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:var(--text-grey-700)}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:var(--text-grey-700)}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--text-grey-700)}:host input::placeholder,:host textarea::placeholder{color:var(--text-grey-700)}::-webkit-input-placeholder,::-webkit-textarea-placeholder{color:var(--text-grey-700)}:-ms-input-placeholder,:-ms-textarea-placeholder{color:var(--text-grey-700)}::-moz-placeholder{color:var(--text-grey-700)}:-moz-placeholder{color:var(--text-grey-700)}:host label{display:block;color:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:12px;line-height:16px;text-transform:uppercase;text-align:left;margin:var(--basex1) 0}:host label.disabledLabel{color:var(--text-grey-700)}:host span.statusMsg{font-family:var(--dashboard-font);font-weight:var(--font-rg);font-size:14px;line-height:16px;min-height:16px;color:var(--text-grey-700);fill:var(--text-grey-700);margin-top:var(--basex1);display:-ms-flexbox;display:flex}:host span.statusMsg.msg_success{color:var(--status-success-green);fill:var(--status-success-green)}:host span.statusMsg.msg_error{color:var(--status-error-red);fill:var(--status-error-red)}:host span.statusMsg.msg_warning{color:var(--status-warning-yellow-dark);fill:var(--status-warning-yellow-dark)}:host span.statusMsg>z-icon{margin-right:var(--basex1);margin-top:1px}:host>div.textWrapper>div{fill:var(--text-grey-800)}:host>div.textWrapper>div>input{height:44px;width:100%;margin:0;padding:0 var(--half-x3)}:host>div.textWrapper>div{position:relative;z-index:1}:host>div.textWrapper>div>z-icon{position:absolute;bottom:var(--half-x3);right:var(--half-x3);cursor:pointer;z-index:2}:host>div.textWrapper>div>div.textareaWrapper{background:var(--bg-white);border:var(--border-size-small) solid var(--bg-grey-200);padding:var(--half-x3)}:host>div.textWrapper>div>div.textareaWrapper>textarea{min-height:132px;width:100%;margin:0;padding:0;resize:none;scrollbar-width:thin;scrollbar-color:var(--myz-blue) var(--bg-grey-200);border-color:transparent}:host>div.textWrapper>div>div.textareaWrapper>textarea:hover{border-color:transparent !important}:host>div.textWrapper>div>div.textareaWrapper>textarea.filled,:host>div.textWrapper>div>div.textareaWrapper>textarea.input_success,:host>div.textWrapper>div>div.textareaWrapper>textarea.input_warning,:host>div.textWrapper>div>div.textareaWrapper>textarea.input_error{border:none}:host>div.textWrapper>div>div.textareaWrapper.input_success.disabled,:host>div.textWrapper>div>div.textareaWrapper.input_warning.disabled,:host>div.textWrapper>div>div.textareaWrapper.input_error.disabled{background:var(--bg-white) !important;border-color:var(--bg-grey-200) !important}:host>div.textWrapper>div>div.textareaWrapper>textarea.istyping{color:var(--myz-blue)}::-webkit-scrollbar{background:linear-gradient(\n    90deg,\n    var(--bg-white) 2px,\n    var(--bg-grey-200) 4px,\n    var(--bg-white) 8px\n  );border-radius:var(--radius-base);width:10px;margin-right:20px;padding-right:20px}::-webkit-scrollbar-thumb{background-color:var(--myz-blue);border-radius:var(--radius-base);width:10px;margin-right:20px;padding:20px}:host>.checkboxWrapper{display:inline-block;font-family:var(--dashboard-font);font-weight:var(--font-rg);font-size:inherit;position:relative}:host>.checkboxWrapper>input[type=\"checkbox\"]{opacity:0;position:absolute;z-index:0}:host label{display:block}:host label.disabledLabel{color:var(--text-grey-700)}:host>.checkboxWrapper>label.checkboxLabel{display:-ms-inline-flexbox;display:inline-flex;line-height:16px;color:inherit;font-family:inherit;font-weight:inherit;font-size:inherit;text-transform:inherit;margin:0}:host>.checkboxWrapper>label.checkboxLabel.after{-ms-flex-direction:row;flex-direction:row}:host>.checkboxWrapper>label.checkboxLabel.before{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host>.checkboxWrapper>label.checkboxLabel.after>span{margin-left:var(--basex1)}:host>.checkboxWrapper>label.checkboxLabel.before>span{margin-right:var(--basex1)}:host>.checkboxWrapper>label.checkboxLabel>z-icon{fill:var(--myz-blue);height:18px;width:18px}:host>.checkboxWrapper>input[type=\"checkbox\"]:focus+label.checkboxLabel>z-icon{-webkit-box-shadow:0 0 2px 2px var(--accent-dark);box-shadow:0 0 2px 2px var(--accent-dark)}:host>.checkboxWrapper>input[type=\"checkbox\"]:disabled+label.checkboxLabel>z-icon{fill:var(--bg-grey-700);cursor:default}:host>.checkboxWrapper>input[type=\"checkbox\"][readonly]+label.checkboxLabel>z-icon{fill:var(--bg-grey-800);pointer-events:none;cursor:default}:host>div.selectWrapper>div{position:relative;height:44px}:host>div.selectWrapper>div>ul{list-style:none;height:44px;line-height:44px;min-width:100%;margin:0;padding:0;overflow:hidden;position:absolute;z-index:10}:host>div.selectWrapper>div>ul.closed{max-width:100%}:host>div.selectWrapper>div>ul>li{padding:0 var(--half-x3);text-align:left;white-space:nowrap;cursor:pointer}:host>div.selectWrapper>div>ul>li.selected{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;border:var(--border-size-small) solid transparent}:host>div.selectWrapper>div>ul>li.selected>span{width:calc(100% - 40px);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host>div.selectWrapper>div>ul.closed>li.selected>span.placeholder{color:var(--text-grey-700)}:host>div.selectWrapper>div>ul>li.selected>z-icon{padding-left:var(--basex2);padding-right:0;padding-top:8px;fill:var(--text-grey-800);-webkit-transform:rotate(360deg);transform:rotate(360deg);-webkit-transition:all 200ms linear;transition:all 200ms linear}:host>div.selectWrapper>div>ul.open{height:auto;overflow-y:auto;border:none;z-index:20;min-width:100%;width:auto}:host>div.selectWrapper>div>ul.open>li.selected{border-color:var(--myz-blue) !important;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;color:var(--myz-blue)}:host>div.selectWrapper>div>ul.open>li.selected>z-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-transition:all 200ms linear;transition:all 200ms linear;padding-left:0;padding-right:var(--basex2)}:host>div.selectWrapper>div>ul.open>li[role=\"option\"]{border-left:var(--border-size-small) solid var(--bg-grey-200);border-right:var(--border-size-small) solid var(--bg-grey-200);color:var(--text-grey-800)}:host>div.selectWrapper>div>ul.open>li[role=\"option\"]:focus{margin:2px}:host>div.selectWrapper>div>ul.open>li[role=\"option\"]:last-child{border-bottom:var(--border-size-small) solid var(--bg-grey-200)}:host>div.selectWrapper>div>ul.open>li[role=\"option\"]>span{display:block;border-bottom:var(--border-size-small) solid var(--bg-grey-200);padding:0 var(--basex1)}:host>div.selectWrapper>div>ul.open>li[role=\"option\"]:last-child>span{border-bottom:none}:host>div.selectWrapper>div>ul.open>li[role=\"option\"]:hover{color:var(--myz-blue-dark);background:var(--bg-grey-050)}:host>div.selectWrapper>div>ul.open>li[role=\"option\"]::-moz-focus-inner{border:0}:host>div.selectWrapper>div>ul.open>li[role=\"option\"].disabled{color:var(--text-grey-700);cursor:default;pointer-events:none}:host>div.selectWrapper>div>ul.open>li[role=\"option\"][aria-selected=\"\"]{font-weight:var(--font-sb)}";

class ZInput {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** the id of the input element */
        this.htmlid = utils.randomId();
        /** the input is disabled */
        this.disabled = false;
        /** the input is readonly */
        this.readonly = false;
        /** checked: available for checkbox, radio */
        this.checked = false;
        /** show input helper message (optional): available for text, password, number, email, textarea, select */
        this.hasmessage = true;
        /** the input label position: available for checkbox, radio */
        this.labelafter = true;
        /** timeout setting before trigger `inputChange` event (optional): available for text, textarea */
        this.typingtimeout = 300;
        this.isTyping = false;
        this.textareaWrapperHover = "";
        this.textareaWrapperFocus = "";
        this.isOpen = false;
        this.statusIcons = {
            success: "circle-check",
            error: "circle-cross-stroke",
            warning: "circle-warning"
        };
        this.itemsList = [];
        this.toggleSelectUl = this.toggleSelectUl.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.handleSelectFocus = this.handleSelectFocus.bind(this);
        this.inputChange = index.createEvent(this, "inputChange", 7);
        this.startTyping = index.createEvent(this, "startTyping", 7);
        this.stopTyping = index.createEvent(this, "stopTyping", 7);
        this.inputCheck = index.createEvent(this, "inputCheck", 7);
        this.optionSelect = index.createEvent(this, "optionSelect", 7);
    }
    watchItems() {
        this.itemsList =
            typeof this.items === "string" ? JSON.parse(this.items) : this.items;
        this.selectedItem = this.itemsList.find((item) => item.selected);
        if (this.selectedItem) {
            this.value = this.selectedItem.id;
        }
    }
    /** get the input value */
    async getValue() {
        return this.value;
    }
    /** set the input value */
    async setValue(value) {
        this.value = value;
    }
    /** get checked status */
    async isChecked() {
        switch (this.type) {
            case utils.InputTypeEnum.checkbox:
                return this.checked;
            default:
                return false;
        }
    }
    emitInputChange(value, keycode) {
        if (!this.isTyping) {
            this.emitStartTyping();
        }
        this.value = value;
        this.inputChange.emit({ value, keycode });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.emitStopTyping(this.value);
        }, this.typingtimeout);
    }
    emitStartTyping() {
        this.isTyping = true;
        this.startTyping.emit();
    }
    emitStopTyping(value) {
        this.isTyping = false;
        this.stopTyping.emit({ value: value });
    }
    emitInputCheck(checked) {
        this.inputCheck.emit({ id: this.htmlid, checked: checked });
    }
    emitOptionSelect(item) {
        this.value = item.id;
        this.selectedItem = item;
        this.optionSelect.emit({ id: this.htmlid, selected: item.id });
    }
    componentWillLoad() {
        if (this.type === utils.InputTypeEnum.select) {
            this.watchItems();
        }
    }
    /* START text/password/email/number */
    getTextAttributes() {
        return {
            id: this.htmlid,
            name: this.name,
            placeholder: this.placeholder,
            value: this.value,
            disabled: this.disabled,
            readonly: this.readonly,
            title: this.htmltitle,
            class: `
        ${this.status ? "input_" + this.status : "input_default"}
        ${this.isTyping && "istyping"}
        ${!this.isTyping && this.value && "filled"}
      `,
            onInput: (e) => this.emitInputChange(e.target.value, e.keyCode)
        };
    }
    renderInputText(type = utils.InputTypeEnum.text) {
        return (index.h("div", { class: "textWrapper" }, this.renderLabel(), index.h("div", null, index.h("input", Object.assign({}, this.getTextAttributes(), { type: type })), this.renderResetIcon()), this.renderMessage()));
    }
    renderLabel() {
        if (!this.label)
            return;
        let attributes = {};
        if (this.type === utils.InputTypeEnum.textarea) {
            attributes = this.getTextareaExtraAttributes();
        }
        return (index.h("label", Object.assign({ htmlFor: this.htmlid, class: this.disabled && "disabledLabel" }, attributes), this.label));
    }
    renderResetIcon() {
        if (!this.value || this.disabled || this.readonly)
            return;
        return (index.h("z-icon", { name: "close", onClick: (e) => this.emitInputChange("", e.keyCode) }));
    }
    renderMessage() {
        if (!this.hasmessage)
            return;
        return (index.h("span", { class: `statusMsg msg_${this.status}` }, this.status ? (index.h("z-icon", { name: this.statusIcons[this.status], width: 14, height: 14 })) : null, index.h("span", { innerHTML: this.message })));
    }
    /* END text/password/email/number */
    /* START textarea */
    renderTextarea() {
        return (index.h("div", { class: "textWrapper" }, this.renderLabel(), index.h("div", null, this.renderTextareaBody()), this.renderMessage()));
    }
    renderTextareaBody() {
        const attributes = this.getTextAttributes();
        return (index.h("div", { class: `
            textareaWrapper
            ${attributes.class}
            ${attributes.disabled && " disabled"}
            ${attributes.readonly && " readonly"}
            ${this.isTyping && " istyping"}
            ${this.textareaWrapperFocus}
            ${this.textareaWrapperHover}
          ` }, index.h("textarea", Object.assign({}, attributes, this.getTextareaExtraAttributes()))));
    }
    getTextareaExtraAttributes() {
        return {
            onFocus: () => (this.textareaWrapperFocus = "focus"),
            onBlur: () => (this.textareaWrapperFocus = ""),
            onMouseOver: () => (this.textareaWrapperHover = "hover"),
            onMouseOut: () => (this.textareaWrapperHover = "")
        };
    }
    /* END textarea */
    /* START checkbox */
    handleCheckboxChange() {
        this.checked = !this.checked;
        this.emitInputCheck(this.checked);
    }
    renderCheckbox() {
        return (index.h("div", { class: "checkboxWrapper" }, index.h("input", { id: this.htmlid, type: "checkbox", name: this.name, checked: this.checked, value: this.value, disabled: this.disabled, readonly: this.readonly, onChange: () => this.handleCheckboxChange() }), index.h("label", { htmlFor: this.htmlid, class: `checkboxLabel ${this.labelafter ? "after" : "before"}` }, index.h("z-icon", { name: this.checked ? "checkbox-selected" : "checkbox-unchecked", "aria-hidden": true }), this.label && index.h("span", { innerHTML: this.label }))));
    }
    /* END checkbox */
    /* START select */
    renderSelect() {
        return (index.h("div", { class: "selectWrapper" }, this.renderLabel(), this.renderSelectUl(), this.renderMessage()));
    }
    renderSelectUl() {
        return (index.h("div", null, index.h("ul", { role: "listbox", tabindex: this.disabled || this.readonly ? -1 : 0, id: this.htmlid, "aria-activedescendant": this.value, class: `
            ${this.isOpen ? "open" : "closed"}
            ${this.disabled && " disabled"}
            ${this.readonly && " readonly"}
            ${this.status ? " input_" + this.status : " input_default"}
            ${this.selectedItem ? " filled" : ""}
          `, onClick: () => this.toggleSelectUl(), onKeyUp: (e) => utils.handleKeyboardSubmit(e, this.toggleSelectUl), onKeyDown: (e) => this.arrowsSelectNav(e, this.selectedItem ? this.itemsList.indexOf(this.selectedItem) : -1) }, this.renderSelectedItem(), this.renderSelectItems())));
    }
    renderSelectedItem() {
        return (index.h("li", { class: "selected" }, this.selectedItem ? (index.h("span", null, this.selectedItem.name)) : (index.h("span", { class: "placeholder" }, this.placeholder)), index.h("z-icon", { name: "drop-down" })));
    }
    renderSelectItems() {
        if (!this.isOpen)
            return;
        return this.itemsList.map((item, key) => (index.h("li", { role: "option", tabindex: item.disabled ? -1 : 0, "aria-selected": !!item.selected, class: item.disabled && "disabled", id: `${this.htmlid}_${key}`, onClick: () => this.selectItem(item), onKeyUp: (e) => utils.handleKeyboardSubmit(e, this.selectItem, item), onKeyDown: (e) => this.arrowsSelectNav(e, key) }, index.h("span", null, item.name))));
    }
    selectItem(item) {
        if (item.disabled)
            return;
        this.itemsList = this.itemsList.map((i) => {
            if (i.selected)
                i.selected = false;
            if (i === item)
                i.selected = true;
            return i;
        });
        this.emitOptionSelect(item);
    }
    arrowsSelectNav(e, key) {
        const arrows = [utils.keybordKeyCodeEnum.ARROW_DOWN, utils.keybordKeyCodeEnum.ARROW_UP];
        if (!arrows.includes(e.keyCode))
            return;
        e.preventDefault();
        e.stopPropagation();
        if (!this.isOpen)
            this.toggleSelectUl();
        let index;
        if (e.keyCode === utils.keybordKeyCodeEnum.ARROW_DOWN) {
            index = key + 1 === this.itemsList.length ? 0 : key + 1;
        }
        else if (e.keyCode === utils.keybordKeyCodeEnum.ARROW_UP) {
            index = key <= 0 ? this.itemsList.length - 1 : key - 1;
        }
        const focusElem = this.hostElement.shadowRoot.getElementById(`${this.htmlid}_${index}`);
        if (focusElem)
            focusElem.focus();
    }
    toggleSelectUl(selfFocusOnClose = false) {
        if (!this.isOpen) {
            document.addEventListener("click", this.handleSelectFocus);
            document.addEventListener("keyup", this.handleSelectFocus);
        }
        else {
            document.removeEventListener("click", this.handleSelectFocus);
            document.removeEventListener("keyup", this.handleSelectFocus);
            if (selfFocusOnClose) {
                this.hostElement.shadowRoot.getElementById(this.htmlid).focus();
            }
        }
        this.isOpen = !this.isOpen;
    }
    handleSelectFocus(e) {
        if (e instanceof KeyboardEvent && e.keyCode === utils.keybordKeyCodeEnum.ESC) {
            e.stopPropagation();
            return this.toggleSelectUl(true);
        }
        if (e instanceof KeyboardEvent && e.keyCode !== utils.keybordKeyCodeEnum.TAB) {
            return;
        }
        const tree = utils.getElementTree(utils.getClickedElement());
        const parent = tree.find((elem) => elem.nodeName.toLowerCase() === "ul" && elem.id === this.htmlid);
        if (!parent) {
            this.toggleSelectUl(e instanceof MouseEvent ? true : false);
        }
    }
    /* END select */
    render() {
        switch (this.type) {
            case utils.InputTypeEnum.text:
            case utils.InputTypeEnum.password:
            case utils.InputTypeEnum.number:
            case utils.InputTypeEnum.email:
                return this.renderInputText(this.type);
            case utils.InputTypeEnum.textarea:
                return this.renderTextarea();
            case utils.InputTypeEnum.checkbox:
                return this.renderCheckbox();
            case utils.InputTypeEnum.select:
                return this.renderSelect();
            default:
                return this.renderInputText();
        }
    }
    get hostElement() { return index.getElement(this); }
    static get watchers() { return {
        "items": ["watchItems"]
    }; }
}
ZInput.style = stylesCss$i;

const stylesCss$j = ":host{font-family:var(--dashboard-font);font-weight:inherit;font-size:inherit;line-height:inherit;outline:none}a{cursor:pointer;color:var(--myz-blue);fill:var(--myz-blue);display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;text-decoration:none;padding:var(--half-x1) 0;border-top:var(--border-base) solid transparent;border-bottom:var(--border-base) solid transparent}a:hover{color:var(--myz-blue-dark);fill:var(--myz-blue-dark);text-decoration:none}a.disabled{cursor:default;pointer-events:none}a.disabled,a.disabled:active,a.disabled:visited,a.disabled:hover{color:var(--bg-neutral-200);fill:var(--bg-neutral-200);text-decoration:none}a.white,a.white:active,a.white:visited,a.white:hover{color:var(--bg-white);fill:var(--bg-white);text-decoration:none}a.active,a.active:active,a.active:visited{color:var(--text-grey-800);fill:var(--text-grey-800);text-decoration:none;border-bottom:var(--border-base) solid var(--myz-blue)}a>z-icon{margin-right:8px}";

class ZLink {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** link target (optional) */
        this.target = "_self";
        /** tabindex link attribute (optional) */
        this.htmltabindex = 0;
        /** disable link flag (optional) */
        this.isdisabled = false;
        /** active link flag (optional) */
        this.isactive = false;
        /** white variant flag (optional) */
        this.iswhite = false;
        this.emitZLinkClick = this.emitZLinkClick.bind(this);
        this.emitZLinkInteraction = this.emitZLinkInteraction.bind(this);
        this.zLinkClick = index.createEvent(this, "zLinkClick", 7);
    }
    emitZLinkClick(e, linkId) {
        this.emitZLinkInteraction(e, linkId);
    }
    emitZLinkInteraction(e, linkId) {
        this.zLinkClick.emit({ e, linkId });
    }
    render() {
        return (index.h("a", { id: this.htmlid, href: this.href ? this.href : null, class: `${this.isdisabled && "disabled"}
          ${this.isactive && "active"}
          ${this.iswhite && "white"}`, target: this.target, role: this.href ? "link" : "button", tabindex: this.htmltabindex, onClick: (e) => this.emitZLinkClick(e, this.htmlid) }, this.icon && index.h("z-icon", { name: this.icon, width: 12, height: 12 }), index.h("slot", null)));
    }
}
ZLink.style = stylesCss$j;

const stylesCss$k = "ul{margin:0;padding:0}";

class ZList {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentDidLoad() {
        if (this.inputrawdata) {
            this.parseinputrawdata(this.inputrawdata);
        }
    }
    parseinputrawdata(inputrawdata) {
        this.list = [...JSON.parse(inputrawdata)];
    }
    oninputrawdataChange(newValue) {
        this.parseinputrawdata(newValue);
    }
    render() {
        const lastElem = this.list ? this.list.length - 1 : -1;
        return (index.h("ul", null, this.list &&
            this.list.map((bean, i) => (index.h("z-list-item", { listitemid: bean.listitemid, text: bean.text, link: bean.link, linktarget: bean.linktarget, icon: bean.icon, underlined: lastElem != i })))));
    }
    static get watchers() { return {
        "inputrawdata": ["oninputrawdataChange"]
    }; }
}
ZList.style = stylesCss$k;

const stylesCss$l = ":host li{all:unset;all:reset;width:100%}:host li{list-style-type:none;line-height:14px}:host li>span{line-height:14px;padding:var(--basex2) 0;display:-ms-flexbox;display:flex;font-family:var(--dashboard-font);font-weight:var(--font-rg);font-size:16px;letter-spacing:0.23px;color:var(--text-grey-800);fill:var(--text-grey-800)}:host li>span.border{border-bottom:2px solid var(--bg-grey-200)}:host li span:hover,a:hover{color:var(--myz-blue);fill:var(--myz-blue)}a,a:visited,a:active{color:inherit;fill:inherit;text-decoration:none}:host li span z-icon{color:var(--myz-blue);fill:var(--myz-blue);height:var(--basex2);width:var(--basex2);padding:0 var(--half-x3) 0 0;background-size:contain;background-repeat:no-repeat}";

class ZListItem {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** link target (optional) */
        this.linktarget = "_self";
        /** underlined style flag */
        this.underlined = true;
        this.emitZListItemLinkClick = this.emitZListItemLinkClick.bind(this);
        this.emitZListItemClick = this.emitZListItemClick.bind(this);
        this.zListItemLinkClick = index.createEvent(this, "zListItemLinkClick", 7);
        this.zListItemClick = index.createEvent(this, "zListItemClick", 7);
    }
    emitZListItemLinkClick(e, linkId) {
        this.zListItemLinkClick.emit({ e, linkId });
    }
    emitZListItemClick(e, listitemid) {
        this.zListItemClick.emit({ e, listitemid });
    }
    render() {
        const linkId = this.listitemid ? `link_${this.listitemid}` : "";
        return (index.h("li", { role: "button", id: this.listitemid, "data-action": this.action, onClick: (e) => this.emitZListItemClick(e, this.listitemid), onKeyPress: (ev) => utils.handleKeyboardSubmit(ev, this.emitZListItemClick, this.listitemid) }, index.h("span", { class: this.underlined && "border" }, this.icon && index.h("z-icon", { name: this.icon }), this.link ? (index.h("a", { href: this.link ? this.link : null, target: this.linktarget, id: linkId, onClick: (e) => this.emitZListItemLinkClick(e, linkId), onKeyPress: (ev) => utils.handleKeyboardSubmit(ev, this.emitZListItemLinkClick, linkId), role: this.link ? "link" : "button", tabindex: "0" }, this.text)) : (index.h("span", { innerHTML: this.text })), index.h("slot", null))));
    }
}
ZListItem.style = stylesCss$l;

const stylesCss$m = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host>div{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:start;justify-content:flex-start}polygon{fill:var(--myz-red)}path{fill:var(--bg-white)}";

class ZLogo {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** image width */
        this.width = 163;
        /** image height */
        this.height = 42;
    }
    renderSvg() {
        return (index.h("svg", { width: `${this.width}px`, height: `${this.height}px`, viewBox: "0 0 163 42" }, index.h("title", null, this.imagealt), index.h("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, index.h("g", { transform: "translate(-663.000000, -534.000000)" }, index.h("g", { transform: "translate(371.000000, 369.000000)" }, index.h("g", { transform: "translate(285.000000, 2.000000)" }, index.h("g", { transform: "translate(0.000000, 156.000000)" }, index.h("g", null, index.h("g", { transform: "translate(7.636364, 7.636364)" }, index.h("polygon", { points: "1.70530257e-13 40.7272727 161.884545 40.7272727 161.884545 0 1.70530257e-13 0" }), index.h("path", { d: "M148.501818,32.6807001 L154.248342,32.6807001 L154.248342,8.04537315 L148.501818,8.04537315 L148.501818,32.6807001 Z M134.349311,32.6807001 L146.667574,32.6807001 L146.667574,28.3207306 L140.436476,28.3207306 L140.436476,8.04537315 L134.349311,8.04537315 L134.349311,32.6807001 Z M120.196443,32.6807001 L132.513506,32.6807001 L132.513506,28.3207306 L126.283608,28.3207306 L126.283608,8.04537315 L120.196443,8.04537315 L120.196443,32.6807001 Z M105.225555,8.04537315 L105.225555,32.6807001 L118.363037,32.6807001 L118.363037,28.3195312 L111.381089,28.3195312 L111.381089,22.3858946 L117.967221,22.3858946 L117.967221,17.9899418 L111.381089,17.9899418 L111.381089,12.4077415 L118.363037,12.4077415 L118.363037,8.04537315 L105.225555,8.04537315 Z M86.9693975,32.6807001 L93.0613603,32.6807001 L93.0613603,22.3858946 L97.3013857,22.3858946 L97.3013857,32.6807001 L103.392149,32.6807001 L103.392149,8.04537315 L97.3013857,8.04537315 L97.3013857,17.9911413 L93.0613603,17.9911413 L93.0613603,8.04537315 L86.9693975,8.04537315 L86.9693975,32.6807001 Z M61.1321098,32.6807001 L66.8810325,32.6807001 L66.8810325,8.04537315 L61.1321098,8.04537315 L61.1321098,32.6807001 Z M33.8777427,23.237498 L32.2524996,12.5636689 L30.5936721,23.237498 L33.8777427,23.237498 Z M41.6777101,32.6807001 L35.8088433,32.6807001 L34.9644366,27.063716 L30.3609805,27.063716 L29.4829894,32.6807001 L23.6129231,32.6807001 L28.639782,8.04537315 L36.6520506,8.04537315 L41.6777101,32.6807001 Z M54.1207152,24.0279298 L48.8707602,8.04537315 L42.8759521,8.04537315 L42.8759521,32.6807001 L47.984373,32.6807001 L47.984373,16.6297753 L53.1971453,32.6807001 L59.2999032,32.6807001 L59.2999032,8.04537315 L54.1207152,8.04537315 L54.1207152,24.0279298 Z M68.7132396,20.3636364 C68.7132396,21.9672895 68.7132396,23.411417 68.8463776,24.8975249 C68.9795156,26.3908294 69.2481905,27.8013725 69.7951358,29.0188055 C70.9058185,31.4920537 73.1391784,33.0909091 77.4511703,33.0909091 C82.4144588,33.0909091 85.1371908,30.8479537 85.1371908,24.1958516 L85.1371908,23.9043874 L79.5058134,23.9043874 L79.4962178,24.1850567 C79.4782262,24.6636338 79.472229,25.2117785 79.4350463,25.7635216 C79.3990631,26.3092674 79.3330938,26.8466171 79.2023547,27.3191971 C78.939677,28.2523625 78.4503049,28.8628781 77.4511703,28.8628781 C74.9275455,28.8628781 74.4909489,26.7638557 74.4909489,20.3636364 C74.4909489,13.963417 74.9275455,11.8643946 77.4511703,11.8643946 C78.6578083,11.8643946 79.257529,12.7291918 79.257529,16.0240574 L79.257529,16.3179205 L84.855322,16.3179205 L84.866117,16.0360518 C85.0748198,10.6817454 82.8774432,7.63636364 77.4511703,7.63636364 C73.1403779,7.63636364 70.9082174,9.21602796 69.7951358,11.6832789 C69.2481905,12.8959142 68.9795156,14.3040584 68.8463776,15.8009613 C68.7132396,17.2906675 68.7132396,18.7443905 68.7132396,20.3636364 L68.7132396,20.3636364 Z M22.2095767,8.0465726 L22.2095767,12.930698 L13.748717,28.3207306 L22.41708,28.3207306 L22.41708,32.6807001 L7.63636364,32.6807001 L7.63636364,27.8673418 L16.0984227,12.408941 L8.70746481,12.408941 L8.70746481,8.0465726 L22.2095767,8.0465726 Z" }))))))))));
    }
    render() {
        return (index.h("div", null, this.link && (index.h("a", { href: this.link, target: this.targetblank ? "_blank" : undefined }, this.renderSvg())), !this.link && this.renderSvg()));
    }
}
ZLogo.style = stylesCss$m;

const stylesCss$n = ":host{font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:12px;height:32px;width:inherit;letter-spacing:0.17px;line-height:14px}a,a:visited,a:active{color:inherit;text-decoration:none}:host>a{display:block;background:var(--bg-grey-050);color:var(--text-grey-800);border-radius:var(--radius-base);border:1px solid transparent;width:147px;outline:none}:host>a::-moz-focus-inner{border:0}:host>a:hover,:host>a.menu-opened:hover{color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}:host>a:focus{color:var(--myz-blue);fill:var(--myz-blue);border:1px solid var(--myz-blue);-webkit-box-shadow:0px 0px 2px 2px var(--myz-blue-light);box-shadow:0px 0px 2px 2px var(--myz-blue-light)}:host>a:active{color:var(--myz-blue-light);fill:var(--myz-blue-light);border:1px solid var(--myz-blue-light);-webkit-box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.4);box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.4)}.container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:32px;position:relative}.menu-opened{padding-bottom:var(--basex2);width:auto !important;min-width:147px;position:inherit}.menu-opened a,.menu-opened a:active,.menu-opened a:visited{color:var(--myz-blue);fill:var(--myz-blue)}.menu-opened a:hover{color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}.menu-opened .container{margin-bottom:8px}div>img,div>z-icon{width:14px;height:14px;padding-left:var(--half-x3)}div>span.arrow{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding-left:var(--basex1);padding-right:var(--basex1)}span.arrow>z-icon{-webkit-transform:rotate(360deg);transform:rotate(360deg);-webkit-transition:all 200ms linear;transition:all 200ms linear;margin-top:var(--basex1)}.menu-opened span.arrow>z-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-transition:all 200ms linear;transition:all 200ms linear;margin-top:-8px}div>span.user{padding-left:var(--half-x1);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;cursor:pointer}ul{list-style:none;-webkit-padding-start:var(--basex4);padding-inline-start:var(--basex4);margin:0px}li{height:var(--basex3);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (max-width: 1024px){:host{width:inherit}:host>a{width:88px}.container{width:88px}.container>span.user{width:37px}:host>a.menu-opened .container{width:auto}:host>a.menu-opened span.user{width:auto}}";

class ZMenuDropdown {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ismenuopen = false;
        this.handleToggle = this.handleToggle.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }
    componentWillRender() {
        this.linkarray =
            typeof this.menucontent === "string"
                ? JSON.parse(this.menucontent)
                : this.menucontent;
    }
    renderMenuOpen() {
        if (this.ismenuopen) {
            return (index.h("ul", null, this.linkarray.map(bean => (index.h("li", null, index.h("z-link", { htmlid: bean.id, href: bean.link, icon: bean.icon }, bean.label))))));
        }
    }
    renderButtonMenu() {
        return (index.h("span", { class: "arrow" }, index.h("z-icon", { name: "drop-down", width: 14, height: 14 })));
    }
    retriveMenuClass() {
        if (this.ismenuopen)
            return "menu-opened";
    }
    handleToggle() {
        this.ismenuopen = !this.ismenuopen;
    }
    handleFocus(e) {
        if (e instanceof KeyboardEvent && e.keyCode !== utils.keybordKeyCodeEnum.TAB)
            return;
        const tree = utils.getElementTree(utils.getClickedElement());
        const menuParent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-menu-dropdown");
        if (!menuParent) {
            document.removeEventListener("click", this.handleFocus);
            document.removeEventListener("keyup", this.handleFocus);
            this.ismenuopen = false;
        }
    }
    render() {
        return (index.h("a", { class: this.retriveMenuClass(), role: "button", tabindex: "0", onFocus: () => {
                document.addEventListener("click", this.handleFocus);
                document.addEventListener("keyup", this.handleFocus);
            }, onKeyUp: (e) => utils.handleKeyboardSubmit(e, this.handleToggle) }, index.h("div", { class: "container", onClick: () => this.handleToggle() }, index.h("z-icon", { name: "user", width: 14, height: 14 }), index.h("span", { class: "user" }, this.nomeutente), this.renderButtonMenu()), this.renderMenuOpen()));
    }
}
ZMenuDropdown.style = stylesCss$n;

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
    return commonjsRequire();
  }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var hammer = createCommonjsModule(function (module) {
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined$1) {

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined$1) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined$1 || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined$1 && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined$1)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined$1 : undefined$1, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined$1) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined$1;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined$1;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined$1)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined$1;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined$1) {
            return;
        }
        if (handler === undefined$1) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined$1) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (typeof undefined$1 === 'function' && undefined$1.amd) {
    undefined$1(function() {
        return Hammer;
    });
} else if ( module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');
});

const stylesCss$o = ":host>div{height:48px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}:host>div>z-icon{cursor:pointer;margin:15px 0;color:var(--myz-blue);fill:var(--myz-blue)}:host>div>z-icon.disabled{cursor:default;pointer-events:none;color:var(--bg-neutral-200);fill:var(--bg-neutral-200)}";

class ZPaginationBar {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.goToPage = index.createEvent(this, "goToPage", 7);
        this.changeStartPage = index.createEvent(this, "changeStartPage", 7);
        this.addPageToHistory = index.createEvent(this, "addPageToHistory", 7);
    }
    componentDidLoad() {
        this.scrollPage = this.scrollPage.bind(this);
        let mc = new hammer(this.bar);
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
        return (index.h("div", { ref: el => (this.bar = el) }, index.h("z-icon", { name: "chevron-left", class: !this.canNavigateLeft() && "disabled", onClick: () => this.navigateLeft(), onKeyPress: (ev) => utils.handleKeyboardSubmit(ev, this.navigateLeft), tabindex: this.canNavigateLeft() ? 0 : -1 }), this.currentPages.map(page => (index.h("z-pagination-page", { value: page, isselected: page === this.currentpage, onClick: () => this.emitGoToPage(page), onKeyDown: (ev) => utils.handleKeyboardSubmit(ev, this.emitGoToPage, page), isvisited: this.listhistoryrow.includes(page) }))), index.h("z-icon", { name: "chevron-right", class: !this.canNavigateRight() && "disabled", onClick: () => this.navigateRight(), onKeyPress: (ev) => utils.handleKeyboardSubmit(ev, this.navigateRight), tabindex: this.canNavigateRight() ? 0 : -1 })));
    }
}
ZPaginationBar.style = stylesCss$o;

const stylesCss$p = ":host{font-family:var(--dashboard-font);font-weight:var(--font-sb);display:inline-block}:host>a{cursor:pointer;outline:none;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;height:48px;line-height:48px;text-align:center;border-bottom:4px solid transparent;color:var(--myz-blue);font-size:14px;text-decoration:none;-webkit-transition:border-bottom 0.2s ease, font-size 0.2s ease;transition:border-bottom 0.2s ease, font-size 0.2s ease;min-width:56px}:host>a.disabled{pointer-events:none;cursor:default;color:var(--text-grey-700)}:host>a:hover{border-bottom:4px solid rgba(0, 86, 193, 0.5);background-color:var(--bg-grey-050);text-decoration:none;-webkit-transition:border-bottom 0.2s ease, background-color 0.2s ease;transition:border-bottom 0.2s ease, background-color 0.2s ease}:host>a:focus{border-bottom:4px solid var(--bg-grey-200);-webkit-box-shadow:0px 0px 2px 2px var(--accent-dark);box-shadow:0px 0px 2px 2px var(--accent-dark);background-color:var(--bg-grey-050);text-decoration:none}:host>a.visited{border-color:rgba(0, 86, 193, 0.5);text-decoration:none}:host>a.selected{border-bottom:4px solid var(--myz-blue);font-size:28px;-webkit-transition:border-bottom 0.2s ease, font-size 0.2s ease;transition:border-bottom 0.2s ease, font-size 0.2s ease}@media only screen and (min-width: 768px){:host>a{}}";

class ZPaginationPage {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** selected status flag */
        this.isselected = false;
        /** disabled status flag */
        this.isdisabled = false;
        /** visited status flag */
        this.isvisited = false;
    }
    render() {
        return (index.h("a", { id: this.pageid, ref: el => (this.page = el), class: `${this.isselected && "selected"} ${this.isdisabled &&
                "disabled"} ${this.isvisited && "visited"}`, tabindex: this.isdisabled ? -1 : 0, role: "button" }, this.value));
    }
}
ZPaginationPage.style = stylesCss$p;

const stylesCss$q = ".t-weight-lt{font-weight:var(--font-lt)}.t-weight-rg{font-weight:var(--font-rg)}.t-weight-sb{font-weight:var(--font-sb)}.t-align-center{text-align:center}.t-color-light{color:var(--text-grey-medium);fill:var(--text-grey-medium)}.caption-01{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-rg);font-size:12px;line-height:16px}.helper-text-01{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-rg);font-style:italic;font-size:12px;line-height:16px}.body-short-01{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-rg);font-size:14px;line-height:20px}.body-short-02{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-rg);font-size:16px;line-height:24px}.body-long-01{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-rg);font-size:14px;line-height:20px}.body-long-02{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:16px;line-height:24px}.heading-01{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:14px;line-height:20px}.heading-02{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:16px;line-height:24px}.heading-03{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:20px;line-height:24px}.heading-04{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:28px;line-height:36px}.heading-05{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:32px;line-height:40px}.expressive-heading-04{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-rg);font-size:32px;line-height:40px}@media only screen and (max-width: 767px){.expressive-heading-04{font-size:28px;line-height:36px}}.expressive-heading-05{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-rg);font-size:48px;line-height:56px}@media only screen and (max-width: 1024px){.expressive-heading-05{font-size:36px;line-height:44px}}@media only screen and (max-width: 767px){.expressive-heading-05{font-size:32px;line-height:40px}}.expressive-paragraph-01{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-lt);font-size:32px;line-height:40px}@media only screen and (max-width: 767px){.expressive-paragraph-01{font-size:24px;line-height:32px}}.quotation-01{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-lt);font-size:32px;line-height:40px}@media only screen and (max-width: 767px){.quotation-01{font-size:20px;line-height:28px}}.quotation-02{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-lt);font-size:60px;line-height:72px}@media only screen and (max-width: 1024px){.quotation-02{font-size:36px;line-height:44px}}@media only screen and (max-width: 767px){.quotation-02{font-size:32px;line-height:40px}}.display-01{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-lt);font-size:76px;line-height:88px}@media only screen and (max-width: 767px){.display-01{font-size:42px;line-height:52px}}.display-02{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:76px;line-height:88px}@media only screen and (max-width: 767px){.display-02{font-size:42px;line-height:52px}}.display-03{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-lt);font-size:156px;line-height:164px}@media only screen and (max-width: 1024px){.display-03{font-size:68px;line-height:80px}}@media only screen and (max-width: 767px){.display-03{font-size:42px;line-height:52px}}.display-04{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:156px;line-height:164px}@media only screen and (max-width: 1024px){.display-04{font-size:68px;line-height:80px}}@media only screen and (max-width: 767px){.display-04{font-size:42px;line-height:52px}}:host{font-family:var(--dashboard-font);font-weight:var(--font-rg);width:inherit}.panel-elem-container{width:100%}.panel-elem-icon{margin:auto var(--basex3)}.panel-elem-icon img{display:block;-o-object-fit:contain;object-fit:contain;max-width:96px;height:32px;margin:auto}.panel-elem-link{border-radius:var(--radius-min);margin:var(--basex1) auto 0;text-align:center;font-size:12px}.panel-elem-link>z-link{font-weight:var(--font-sb)}.panel-elem-desc{letter-spacing:0.16px;text-align:center;margin:0;padding-top:var(--basex1)}";

/**
 * @slot `descr_slot_name` - description content
 */
class ZPanelElem {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** link target (optional) */
        this.target = "_blank";
        /** disabled status flag (optional) */
        this.isdisabled = false;
    }
    renderIcon() {
        if (this.isdisabled) {
            return index.h("img", { src: this.imgurl, alt: this.imgalt });
        }
        return (index.h("a", { class: "elem-icon", href: this.url, target: this.target }, index.h("img", { src: this.imgurl, alt: this.imgalt })));
    }
    render() {
        const elemId = this.elemid ? this.elemid : "";
        return (index.h("div", { class: "panel-elem-container" }, (this.imgurl || this.imgalt) && (index.h("div", { class: "panel-elem-icon" }, this.renderIcon())), index.h("div", { class: "panel-elem-link" }, index.h("z-link", { href: this.url, icon: this.linkicon, isdisabled: this.isdisabled, target: this.target, htmlid: elemId + "link_id" }, this.linklabel)), this.descr_slot_name && (index.h("div", { class: "panel-elem-desc body-long-01" }, index.h("slot", { name: this.descr_slot_name })))));
    }
}
ZPanelElem.style = stylesCss$q;

const stylesCss$r = "button{font-family:var(--dashboard-font);font-weight:var(--font-sb);height:36px;border:var(--border-base) solid;border-color:transparent;border-radius:var(--radius-base);color:var(--myz-blue);fill:var(--myz-blue);background-color:var(--bg-white);-webkit-box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.2);text-transform:uppercase;font-size:14px;outline:none;padding-left:0px;padding-right:var(--basex2);-webkit-transition:all 200ms linear;transition:all 200ms linear;cursor:pointer}button::-moz-focus-inner{border:0}button:hover{color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}button:focus{border-color:var(--myz-blue);color:var(--myz-blue);fill:var(--myz-blue);-webkit-box-shadow:0px 0px 2px 2px var(--accent-dark);box-shadow:0px 0px 2px 2px var(--accent-dark)}button:active{border-color:var(--myz-blue-light);color:var(--myz-blue-light);fill:var(--myz-blue-light);-webkit-box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.4);box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.4)}button:disabled{color:var(--text-grey-700);fill:var(--text-grey-700)}z-icon{display:inline-block;margin:0 var(--basex1) 0 var(--basex2);-webkit-transform:rotate(360deg);transform:rotate(360deg);-webkit-transition:all 200ms linear;transition:all 200ms linear}button.isopen{top:-20px}button.avoid-clicks{pointer-events:none}";

class ZToggleButton {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** disabled status flag (optional) */
        this.isdisabled = false;
        this.isOpen = false;
        this.toggleClick = index.createEvent(this, "toggleClick", 7);
    }
    emitToggleClick() {
        if (this.isdisabled)
            return;
        this.isOpen = !this.isOpen;
        this.toggleClick.emit(this.isOpen);
    }
    retrieveButtonClass() {
        let className = this.isOpen && "isopen";
        if (this.avoidclick)
            className = className + " avoid-clicks";
        return className;
    }
    render() {
        return (index.h("button", { tabindex: this.avoidclick ? "-1" : "0", class: this.retrieveButtonClass(), disabled: this.isdisabled, onClick: () => this.emitToggleClick() }, index.h("z-icon", { name: this.isOpen ? "chevron-down" : "chevron-up", width: 16, height: 16 }), this.label));
    }
}
ZToggleButton.style = stylesCss$r;

const stylesCss$s = ":host{color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-weight:var(--font-rg);font-style:italic;line-height:16px;letter-spacing:0.32px;font-size:12px}:host>div.tooltip{position:relative;max-width:200px;margin:0 auto;display:inline-block;border-radius:var(--radius-base);text-align:center;background:var(--bg-white);border:1px solid var(--bg-grey-200);-webkit-box-shadow:0px 1px 2px 0px rgba(0, 0, 0, 0.08);box-shadow:0px 1px 2px 0px rgba(0, 0, 0, 0.08);padding:var(--basex2)}:host>div.tooltip-top-arrow:after{content:\"\";position:absolute;left:calc(50% - 7px);top:-8px;width:14px;height:14px;background:inherit;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-left:1px solid var(--bg-grey-200);border-top:1px solid var(--bg-grey-200);-webkit-box-shadow:0px -1px 20px 0px rgba(0, 0, 0, 0.08);box-shadow:0px -1px 20px 0px rgba(0, 0, 0, 0.08)}:host>div.tooltip-bottom-arrow:after{content:\"\";position:absolute;left:calc(50% - 7px);bottom:-8px;width:14px;height:14px;background:inherit;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-right:1px solid var(--bg-grey-200);border-bottom:1px solid var(--bg-grey-200);-webkit-box-shadow:0px 1px 2px 0px rgba(0, 0, 0, 0.08);box-shadow:0px 1px 2px 0px rgba(0, 0, 0, 0.08)}:host>div.tooltip-left-arrow:after{content:\"\";position:absolute;top:calc(50% - 7px);left:-7px;width:14px;height:14px;background:inherit;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-left:1px solid var(--bg-grey-200);border-bottom:1px solid var(--bg-grey-200);-webkit-box-shadow:0px 1px 2px 0px rgba(0, 0, 0, 0.08);box-shadow:0px 1px 2px 0px rgba(0, 0, 0, 0.08)}:host>div.tooltip-right-arrow:after{content:\"\";position:absolute;top:calc(50% - 7px);right:-7px;width:14px;height:14px;background:inherit;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-right:1px solid var(--bg-grey-200);border-top:1px solid var(--bg-grey-200);-webkit-box-shadow:0px -1px 2px 0px rgba(0, 0, 0, 0.08);box-shadow:0px -1px 2px 0px rgba(0, 0, 0, 0.08)}";

class ZTooltip {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.direction = utils.TooltipPosition[(this.type).toUpperCase()];
    }
    getArrowClass() {
        switch (this.direction) {
            case utils.TooltipPosition.TOP:
                return "tooltip tooltip-bottom-arrow";
            case utils.TooltipPosition.BOTTOM:
                return "tooltip tooltip-top-arrow";
            case utils.TooltipPosition.LEFT:
                return "tooltip tooltip-right-arrow";
            case utils.TooltipPosition.RIGHT:
                return "tooltip tooltip-left-arrow";
        }
    }
    render() {
        return index.h("div", { class: this.getArrowClass() }, this.content);
    }
}
ZTooltip.style = stylesCss$s;

exports.z_button = ZButton;
exports.z_button_filter = ZButtonFilter;
exports.z_button_sort = ZButtonSort;
exports.z_card = ZCardComponent;
exports.z_card_alert = ZCardAlert;
exports.z_card_body = ZCardBody;
exports.z_card_cover = ZCardCover;
exports.z_card_footer = ZCardFooter;
exports.z_card_header = ZCardHeader;
exports.z_card_icon = ZCardIcon;
exports.z_card_list = ZCardList;
exports.z_chip = ZChip;
exports.z_combobox = ZCombobox;
exports.z_footer = ZFooter;
exports.z_header = ZHeader;
exports.z_icon = ZIcon;
exports.z_icon_package = ZIconPackage;
exports.z_info_box = ZInfoBox;
exports.z_input = ZInput;
exports.z_link = ZLink;
exports.z_list = ZList;
exports.z_list_item = ZListItem;
exports.z_logo = ZLogo;
exports.z_menu_dropdown = ZMenuDropdown;
exports.z_pagination_bar = ZPaginationBar;
exports.z_pagination_page = ZPaginationPage;
exports.z_panel_elem = ZPanelElem;
exports.z_toggle_button = ZToggleButton;
exports.z_tooltip = ZTooltip;

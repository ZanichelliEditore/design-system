'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-6b6a3299.js');
const utils = require('./utils-8cc414c9.js');
require('./breakpoints-88c4fd6c.js');

const stylesCss$1 = ":host{font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:12px;height:32px;width:inherit;letter-spacing:0.17px}a,a:visited,a:active{color:inherit;text-decoration:none}:host>a{display:block;background:var(--bg-grey-050);color:var(--text-grey-800);border-radius:var(--border-radius);border:var(--border-size-small) solid transparent;outline:none}:host>a::-moz-focus-inner{border:0}:host>a:hover,:host>a.menu-opened:hover{color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}:host>a:focus{color:var(--myz-blue);fill:var(--myz-blue);border:var(--border-size-small) solid var(--myz-blue);box-shadow:0px 0px 2px 2px var(--myz-blue-light)}:host>a:active{color:var(--myz-blue-light);fill:var(--myz-blue-light);border:var(--border-size-small) solid var(--myz-blue-light);box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.4)}div.container{display:flex;align-items:center;justify-content:space-between;height:32px;position:relative;padding:0 var(--basex1)}div.container>span.user-wrapper{display:flex}div.container>span.user-wrapper>span.user{padding:0 var(--basex1);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;cursor:pointer;width:30px}div.container>span.arrow{display:flex;justify-content:center;align-items:center}div.container>span.arrow>z-icon{transform:rotate(360deg);transition:all 200ms linear}ul{list-style:none;padding:0 calc(var(--space-unit) * 2);margin:0px}li{height:var(--basex3);display:flex;align-items:center;padding:calc(var(--space-unit) / 4) 0;width:max-content}.menu-opened{padding-bottom:calc(var(--space-unit) * 2);width:auto !important;min-width:147px;position:inherit}.menu-opened a,.menu-opened a:active,.menu-opened a:visited{color:var(--myz-blue);fill:var(--myz-blue)}.menu-opened a:hover{color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}.menu-opened>div.container{margin-bottom:var(--basex1)}.menu-opened>div.container>span.user-wrapper>span.user{width:auto}.menu-opened>div.container>span.arrow>z-icon{transform:rotate(180deg);transition:all 200ms linear}@media only screen and (min-width: 1152px){:host>a{width:147px;padding:0 calc(var(--space-unit) / 4)}:host>a.menu-opened{width:147px;padding-bottom:calc(var(--space-unit) * 2)}div.container>span.user-wrapper>span.user{width:80px}}";

const ZMenuDropdown = class {
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
      return (index.h("ul", null, this.linkarray.map((bean) => (index.h("li", null, index.h("z-link", { htmlid: bean.id, href: bean.link, icon: bean.icon }, bean.label))))));
    }
  }
  renderButtonMenu() {
    return (index.h("span", { class: "arrow" }, index.h("z-icon", { name: "caret-down", width: 14, height: 14 })));
  }
  retriveMenuClass() {
    if (this.ismenuopen)
      return "menu-opened";
  }
  handleToggle() {
    this.ismenuopen = !this.ismenuopen;
  }
  handleFocus(e) {
    if (e instanceof KeyboardEvent && e.keyCode !== index$1.KeyboardKeyCodeEnum.TAB)
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
      }, onKeyUp: (e) => utils.handleKeyboardSubmit(e, this.handleToggle) }, index.h("div", { class: "container", onClick: () => this.handleToggle() }, index.h("span", { class: "user-wrapper" }, index.h("z-icon", { name: "user-avatar", width: 14, height: 14 }), index.h("span", { class: "user" }, this.nomeutente)), this.renderButtonMenu()), this.renderMenuOpen()));
  }
};
ZMenuDropdown.style = stylesCss$1;

const stylesCss = "ul{margin:0;padding:0}";

const ZMyzList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
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
      this.list.map((bean, i) => (index.h("z-myz-list-item", { listitemid: bean.listitemid, text: bean.text, link: bean.link, linktarget: bean.linktarget, icon: bean.icon, underlined: lastElem != i })))));
  }
  static get watchers() { return {
    "inputrawdata": ["oninputrawdataChange"]
  }; }
};
ZMyzList.style = stylesCss;

exports.z_menu_dropdown = ZMenuDropdown;
exports.z_myz_list = ZMyzList;

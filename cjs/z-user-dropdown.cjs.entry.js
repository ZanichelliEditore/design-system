'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dee3e21d.js');
const breakpoints = require('./breakpoints-88c4fd6c.js');

const stylesCss = ":host{background-color:var(--gray900)}:host(.inverse){background-color:var(--color-white)}button{cursor:pointer;display:flex;flex-direction:column;width:100%;margin:0;background-color:var(--gray900);border:none;padding:0;letter-spacing:0.16px;white-space:nowrap}button.inverse{background-color:var(--color-white)}button div.firstline{display:flex;justify-content:flex-end;align-items:center;max-width:200px}button.open div.firstline{max-width:none}z-icon{padding:0 2px;fill:var(--color-white)}z-icon.inverse{fill:var(--gray900)}ul{box-sizing:border-box;position:absolute;left:0;padding:calc(var(--space-unit) / 2) calc(var(--space-unit) * 2) 0 calc(var(--space-unit) * 2);width:100%;margin:calc(var(--space-unit) * 1.5) 0 0 0;background-color:var(--gray900);font-family:var(--font-family-sans);font-weight:var(--font-sb);font-size:14px;line-height:20px;letter-spacing:0.3px}ul.inverse{background-color:var(--color-white)}ul>li{display:flex;justify-content:flex-end;white-space:nowrap;padding:calc(var(--space-unit) * 1.5 - 1px) 0;margin:0;border-bottom:var(--border-base) solid var(--gray700)}ul>li.inverse{border-bottom-color:var(--gray400)}ul>li:first-child{border-top:none;padding-top:0;padding-bottom:calc(var(--space-unit) + 6px);flex-direction:column;align-items:end}ul>li:last-child{border-bottom:none;margin-bottom:0}#guestbutton{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;width:100%;font-family:var(--font-family-sans);font-weight:var(--font-sb);font-size:14px;line-height:1;letter-spacing:0.3px;border-width:var(--border-size-medium);border-style:solid;border-radius:var(--border-radius);vertical-align:middle;text-transform:uppercase;text-decoration:none;cursor:pointer;outline:none;fill:currentColor;height:32px;min-width:32px;padding:0 calc(var(--space-unit) * 2);background-color:var(--color-white);border-color:var(--color-white);color:var(--gray800)}#guestbutton.inverse{background-color:var(--gray800);border-color:var(--gray800);color:var(--color-white)}.userfullname{padding:0;overflow:hidden;max-width:250px;text-overflow:ellipsis;width:100%;color:var(--color-white);font-family:var(--font-family-sans);font-weight:var(--font-sb);font-size:16px;line-height:24px;letter-spacing:0;text-align:right}.userfullname.inverse{color:var(--gray800)}.useremail{color:var(--color-white);font-family:var(--font-family-sans);font-weight:var(--font-rg);font-size:12px;line-height:16px;letter-spacing:0.32px;overflow:hidden;text-overflow:ellipsis;width:100%;text-align:right}.useremail.inverse{color:var(--gray800)}@media only screen and (min-width: 768px){:host{height:calc(var(--space-unit) * 4);background-color:var(--gray900)}:host(.inverse){background-color:var(--color-white)}:host>div{position:relative;top:50%;transform:translateY(-50%)}:host>div.open{top:auto;transform:none}:host>div>div{padding:0}:host>div>div.open{position:absolute;right:calc(var(--space-unit) * -1);box-shadow:0px 2px calc(var(--space-unit) * .5) 0px rgba(0, 0, 0, 0.5);background-color:var(--color-white);margin-top:calc(var(--space-unit) / 2);padding:calc(var(--space-unit) / 2 + 1px) var(--space-unit) 0 var(--space-unit);transform:translate(0, -4px)}:host>div>div.inverse.open{background-color:var(--gray800)}button{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-end;align-items:end;align-content:center}button.open{background-color:var(--color-white);border-top:var(--border-size-small) solid var(--color-white);border-top-left-radius:calc(var(--space-unit) * .5);border-top-right-radius:calc(var(--space-unit) * .5);max-width:initial;margin-left:var(--space-unit);padding-right:var(--space-unit)}button.open.inverse{border-top-color:var(--gray800);background-color:var(--gray800)}button:not(.open) z-icon{fill:var(--color-white)}button:not(.open) z-icon.inverse{fill:var(--gray800)}button.open z-icon{fill:var(--gray800)}button.open z-icon.inverse{fill:var(--color-white)}.userfullname{font-family:var(--font-family-sans);font-weight:var(--font-sb);font-size:14px;line-height:20px;letter-spacing:0.16px;padding:0 calc(var(--space-unit) - 6px) 0 calc(var(--space-unit) - 2px);width:auto}.userfullname.inverse{color:var(--gray800)}button.open div.userfullname{color:var(--gray800);max-width:none;text-overflow:clip}button.open div.userfullname.inverse{color:var(--color-white)}.useremail{padding-right:calc(var(--space-unit) * 3 - 2px);box-sizing:border-box}button.open div.useremail{color:var(--gray800)}button.open div.useremail.inverse{color:var(--color-white)}ul{position:initial;left:initial;padding:0;width:100%;background-color:var(--color-white)}ul.inverse{border-bottom-color:var(--gray800);background-color:var(--gray800)}ul>li{color:var(--gray800);border-bottom:var(--border-base) solid var(--gray400);margin:0 var(--space-unit)}ul>li.inverse{color:var(--color-white)}ul>li:first-child{border-top:var(--border-base) solid var(--gray400);padding-top:calc(var(--space-unit) + 3px);padding-bottom:calc(var(--space-unit) + 5px)}}";

const ZUserDropdown = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.userButtonClick = index.createEvent(this, "userButtonClick", 7);
    this.dropdownMenuLinkClick = index.createEvent(this, "dropdownMenuLinkClick", 7);
    /** if inner components colors are inverted, or not, default false */
    this.useInverseColors = false;
    this.isMenuOpen = false;
    this.handleLoggedButtonClick = this.handleLoggedButtonClick.bind(this);
    this.emitDropdownMenuLinkClick = this.emitDropdownMenuLinkClick.bind(this);
  }
  componentDidLoad() {
    this.setMobileAndDivToResizeWidth();
  }
  componentWillUpdate() {
    this.setMobileAndDivToResizeWidth();
  }
  componentWillRender() {
    if (this.menuContent) {
      this.linkArray = typeof this.menuContent === "string" ? JSON.parse(this.menuContent) : this.menuContent;
    }
  }
  setMobileAndDivToResizeWidth() {
    var _a;
    if (this.divToResize) {
      this.isMobile = window.screen.width <= breakpoints.mobileBreakpoint || window.innerWidth <= breakpoints.mobileBreakpoint;
      if (this.logged && !this.isMobile && this.isMenuOpen) {
        this.divToResize.style.width = `${(_a = this.userButton) === null || _a === void 0 ? void 0 : _a.offsetWidth}px`;
      }
      else {
        this.divToResize.removeAttribute('style');
      }
    }
  }
  emitUserButtonClick() {
    this.userButtonClick.emit(this.isMenuOpen);
  }
  emitDropdownMenuLinkClick(e) {
    this.isMenuOpen = false;
    this.dropdownMenuLinkClick.emit({ e, linkId: e.detail.linkId });
  }
  handleResize() {
    this.isMobile = window.innerWidth <= breakpoints.mobileBreakpoint;
  }
  handleOrientationChange() {
    this.isMobile = screen.width <= breakpoints.mobileBreakpoint;
  }
  handleClickOutside(e) {
    if (e.target.nodeName !== "Z-USER-DROPDOWN") {
      this.isMenuOpen = false;
    }
  }
  handleLoggedButtonClick() {
    this.isMenuOpen = !this.isMenuOpen;
    this.emitUserButtonClick();
  }
  renderGuestButton() {
    return (index.h("button", { id: "guestbutton", class: this.useInverseColors ? "inverse" : "", onClick: () => this.emitUserButtonClick() }, "ENTRA"));
  }
  renderLoggedButton() {
    const direction = this.isMenuOpen ? "up" : "down";
    const colorClass = this.useInverseColors ? "inverse" : "";
    return (index.h("button", { ref: (el) => (this.userButton = el), title: this.userFullName, class: `${colorClass} ${this.isMenuOpen ? "open" : ""}`, onClick: this.handleLoggedButtonClick }, index.h("div", null, index.h("div", { class: "firstline" }, index.h("z-icon", { class: colorClass, name: "user-avatar-filled", height: 16, width: 16 }), !this.isMobile && index.h("div", { class: `userfullname ${colorClass}` }, this.userFullName), index.h("z-icon", { class: colorClass, name: `caret-${direction}-filled`, height: 16, width: 16 })), !this.isMobile && this.isMenuOpen && index.h("div", { class: `useremail ${colorClass}` }, this.userEmail))));
  }
  getZLinkTextcolor() {
    if (this.isMobile) {
      return this.useInverseColors ? "black" : "white";
    }
    else {
      return this.useInverseColors ? "white" : "black";
    }
  }
  renderDropdownMenu() {
    const colorClass = this.useInverseColors ? "inverse" : "";
    return (this.isMenuOpen && (index.h("ul", { class: colorClass }, this.isMobile &&
      index.h("li", { class: colorClass }, index.h("div", { class: `userfullname ${colorClass}` }, this.userFullName), index.h("div", { class: `useremail ${colorClass}` }, this.userEmail)), this.linkArray && this.linkArray.map((link) => index.h("li", { id: link.id, class: colorClass }, index.h("z-link", { textcolor: this.getZLinkTextcolor(), href: link.link, htmlid: link.id, target: link.target, icon: link.icon, onZLinkClick: this.emitDropdownMenuLinkClick }, link.label))))));
  }
  render() {
    const openClass = `${this.logged && this.isMenuOpen ? "open" : ""}`;
    const colorClass = this.useInverseColors ? "inverse" : "";
    return (index.h(index.Host, { class: colorClass }, index.h("div", { ref: (el) => (this.divToResize = el), class: openClass }, index.h("div", { class: `${colorClass} ${openClass}` }, this.logged ? this.renderLoggedButton() : this.renderGuestButton(), this.logged && this.renderDropdownMenu()))));
  }
};
ZUserDropdown.style = stylesCss;

exports.z_user_dropdown = ZUserDropdown;

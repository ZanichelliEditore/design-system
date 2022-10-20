import { r as registerInstance, c as createEvent, h, H as Host } from './index-a2ca4b97.js';
import { m as mobileBreakpoint } from './breakpoints-c386984e.js';

const stylesCss = ":host{background-color:var(--gray900)}:host(.inverse){background-color:var(--color-white)}button{display:flex;width:100%;flex-direction:column;padding:0;border:none;margin:0;background-color:var(--gray900);cursor:pointer;letter-spacing:0.16px;white-space:nowrap}button.inverse{background-color:var(--color-white)}button div.firstline{display:flex;max-width:200px;align-items:center;justify-content:flex-end}button.open div.firstline{max-width:none}z-icon{padding:0 2px;fill:var(--color-white)}z-icon.inverse{fill:var(--gray900)}ul{position:absolute;left:0;width:100%;box-sizing:border-box;padding:calc(var(--space-unit) / 2) calc(var(--space-unit) * 2) 0 calc(var(--space-unit) * 2);margin:calc(var(--space-unit) * 1.5) 0 0 0;background-color:var(--gray900);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-sb);letter-spacing:0.3px;line-height:20px}ul.inverse{background-color:var(--color-white)}ul>li{display:flex;justify-content:flex-end;padding:calc(var(--space-unit) * 1.5 - 1px) 0;border-bottom:var(--border-base) solid var(--gray700);margin:0;white-space:nowrap}ul>li.inverse{border-bottom-color:var(--gray400)}ul>li:first-child{flex-direction:column;align-items:end;padding-top:0;padding-bottom:calc(var(--space-unit) + 6px);border-top:none}ul>li:last-child{border-bottom:none;margin-bottom:0}#guestbutton{display:inline-flex;width:100%;min-width:32px;height:32px;box-sizing:border-box;flex-direction:row;align-items:center;justify-content:center;padding:0 calc(var(--space-unit) * 2);border-width:var(--border-size-medium);border-style:solid;border-color:var(--color-white);background-color:var(--color-white);border-radius:var(--border-radius);color:var(--gray800);cursor:pointer;fill:currentcolor;font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-sb);letter-spacing:0.3px;line-height:1;outline:none;text-decoration:none;text-transform:uppercase;vertical-align:middle}#guestbutton.inverse{border-color:var(--gray800);background-color:var(--gray800);color:var(--color-white)}.userfullname{overflow:hidden;width:100%;max-width:250px;padding:0;color:var(--color-white);font-family:var(--font-family-sans);font-size:16px;font-weight:var(--font-sb);letter-spacing:0;line-height:24px;text-align:right;text-overflow:ellipsis}.userfullname.inverse{color:var(--gray800)}.useremail{overflow:hidden;width:100%;color:var(--color-white);font-family:var(--font-family-sans);font-size:12px;font-weight:var(--font-rg);letter-spacing:0.32px;line-height:16px;text-align:right;text-overflow:ellipsis}.useremail.inverse{color:var(--gray800)}@media only screen and (min-width: 768px){:host{height:calc(var(--space-unit) * 4);background-color:var(--gray900)}:host(.inverse){background-color:var(--color-white)}:host>div{position:relative;top:50%;transform:translateY(-50%)}:host>div.open{top:auto;transform:none}:host>div>div{padding:0}:host>div>div.open{position:absolute;right:calc(var(--space-unit) * -1);padding:calc(var(--space-unit) / 2 + 1px) var(--space-unit) 0 var(--space-unit);margin-top:calc(var(--space-unit) / 2);background-color:var(--color-white);box-shadow:0 2px calc(var(--space-unit) * 0.5) 0 rgb(0 0 0 / 50%);transform:translate(0, -4px)}:host>div>div.inverse.open{background-color:var(--gray800)}button{display:flex;flex-flow:row nowrap;align-content:center;align-items:end;justify-content:flex-end}button.open{max-width:initial;padding-right:var(--space-unit);border-top:var(--border-size-small) solid var(--color-white);margin-left:var(--space-unit);background-color:var(--color-white);border-top-left-radius:calc(var(--space-unit) * 0.5);border-top-right-radius:calc(var(--space-unit) * 0.5)}button.open.inverse{border-top-color:var(--gray800);background-color:var(--gray800)}button:not(.open) z-icon{fill:var(--color-white)}button:not(.open) z-icon.inverse{fill:var(--gray800)}button.open z-icon{fill:var(--gray800)}button.open z-icon.inverse{fill:var(--color-white)}.userfullname{width:auto;padding:0 calc(var(--space-unit) - 6px) 0 calc(var(--space-unit) - 2px);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-sb);letter-spacing:0.16px;line-height:20px}.userfullname.inverse{color:var(--gray800)}button.open div.userfullname{max-width:none;color:var(--gray800);text-overflow:clip}button.open div.userfullname.inverse{color:var(--color-white)}.useremail{box-sizing:border-box;padding-right:calc(var(--space-unit) * 3 - 2px)}button.open div.useremail{color:var(--gray800)}button.open div.useremail.inverse{color:var(--color-white)}ul{position:initial;left:initial;width:100%;padding:0;background-color:var(--color-white)}ul.inverse{border-bottom-color:var(--gray800);background-color:var(--gray800)}ul>li{border-bottom:var(--border-base) solid var(--gray400);margin:0 var(--space-unit);color:var(--gray800)}ul>li.inverse{color:var(--color-white)}ul>li:first-child{padding-top:calc(var(--space-unit) + 3px);padding-bottom:calc(var(--space-unit) + 5px);border-top:var(--border-base) solid var(--gray400)}}";

const ZUserDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.userButtonClick = createEvent(this, "userButtonClick", 7);
    this.dropdownMenuLinkClick = createEvent(this, "dropdownMenuLinkClick", 7);
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
      this.isMobile = window.screen.width <= mobileBreakpoint || window.innerWidth <= mobileBreakpoint;
      if (this.logged && !this.isMobile && this.isMenuOpen) {
        this.divToResize.style.width = `${(_a = this.userButton) === null || _a === void 0 ? void 0 : _a.offsetWidth}px`;
      }
      else {
        this.divToResize.removeAttribute("style");
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
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }
  handleOrientationChange() {
    this.isMobile = screen.width <= mobileBreakpoint;
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
    return (h("button", { id: "guestbutton", class: this.useInverseColors ? "inverse" : "", onClick: () => this.emitUserButtonClick() }, "ENTRA"));
  }
  renderLoggedButton() {
    const direction = this.isMenuOpen ? "up" : "down";
    const colorClass = this.useInverseColors ? "inverse" : "";
    return (h("button", { ref: (el) => (this.userButton = el), title: this.userFullName, class: `${colorClass} ${this.isMenuOpen ? "open" : ""}`, onClick: this.handleLoggedButtonClick }, h("div", null, h("div", { class: "firstline" }, h("z-icon", { class: colorClass, name: "user-avatar-filled", height: 16, width: 16 }), !this.isMobile && h("div", { class: `userfullname ${colorClass}` }, this.userFullName), h("z-icon", { class: colorClass, name: `caret-${direction}-filled`, height: 16, width: 16 })), !this.isMobile && this.isMenuOpen && h("div", { class: `useremail ${colorClass}` }, this.userEmail))));
  }
  getZLinkTextcolor() {
    if (this.isMobile) {
      return this.useInverseColors ? "black" : "white";
    }
    return this.useInverseColors ? "white" : "black";
  }
  renderDropdownMenu() {
    const colorClass = this.useInverseColors ? "inverse" : "";
    return (this.isMenuOpen && (h("ul", { class: colorClass }, this.isMobile && (h("li", { class: colorClass }, h("div", { class: `userfullname ${colorClass}` }, this.userFullName), h("div", { class: `useremail ${colorClass}` }, this.userEmail))), this.linkArray &&
      this.linkArray.map((link) => (h("li", { id: link.id, class: colorClass }, h("z-link", { textcolor: this.getZLinkTextcolor(), href: link.link, htmlid: link.id, target: link.target, icon: link.icon, onZLinkClick: this.emitDropdownMenuLinkClick }, link.label)))))));
  }
  render() {
    const openClass = `${this.logged && this.isMenuOpen ? "open" : ""}`;
    const colorClass = this.useInverseColors ? "inverse" : "";
    return (h(Host, { class: colorClass }, h("div", { ref: (el) => (this.divToResize = el), class: openClass }, h("div", { class: `${colorClass} ${openClass}` }, this.logged ? this.renderLoggedButton() : this.renderGuestButton(), this.logged && this.renderDropdownMenu()))));
  }
};
ZUserDropdown.style = stylesCss;

export { ZUserDropdown as z_user_dropdown };

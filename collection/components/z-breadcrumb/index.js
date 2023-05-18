import { h, Host } from "@stencil/core";
import { BreadcrumbHomepageVariant, BreadcrumbPathStyle, Device, KeyboardCode, ListDividerType, ListSize, PopoverPosition, } from "../../beans";
import { getDevice, handleKeyboardSubmit } from "../../utils/utils";
export class ZBreadcrumb {
  constructor() {
    /** [optional] Sets the path style */
    this.pathStyle = BreadcrumbPathStyle.UNDERLINED;
    /** [optional] Variant of first node */
    this.homepageVariant = BreadcrumbHomepageVariant.ICON;
    /** [optional] Sets max number of element to show */
    this.maxNodesToShow = 5;
    /** [optional] Controls the behaviour on <a> tag click/enter */
    this.preventFollowUrl = false;
    /** [optional] Sets max number of row for each path inside the popover. Zero equals unlimited */
    this.overflowMenuItemRows = 0;
    /** [optional] Sets the maximun number of chars per single node */
    this.truncateChar = 30;
    /** Detect whether the length of the nodes shown exceeds the container length */
    this.hasOverflow = false;
    this.popoverEllipsisOpen = false;
    this.collapsedElements = [];
    this.currentIndex = 0;
    this.truncatePosition = null;
  }
  handleResize() {
    this.viewPortWidth = getDevice();
    if (this.viewPortWidth !== Device.MOBILE &&
      this.wrapElement &&
      this.wrapElement.scrollWidth > this.wrapElement.clientWidth) {
      this.hasOverflow = true;
    }
  }
  // eslint-disable-next-line lines-between-class-members
  handlePropChange() {
    this.initializeBreadcrumb(this.viewPortWidth === Device.MOBILE);
  }
  handleResizeUp(newValue, oldValue) {
    if (newValue === Device.MOBILE ||
      (oldValue === Device.MOBILE && newValue === Device.TABLET) ||
      (oldValue === Device.MOBILE && newValue === Device.DESKTOP) ||
      (oldValue === Device.MOBILE && newValue === Device.DESKTOP_WIDE) ||
      (oldValue === Device.TABLET && newValue === Device.DESKTOP) ||
      (oldValue === Device.TABLET && newValue === Device.DESKTOP_WIDE) ||
      (oldValue === Device.DESKTOP && newValue === Device.DESKTOP_WIDE)) {
      this.initializeBreadcrumb(this.viewPortWidth === Device.MOBILE);
    }
  }
  componentWillLoad() {
    this.viewPortWidth = getDevice();
    this.initializeBreadcrumb(this.viewPortWidth === Device.MOBILE);
  }
  componentWillRender() {
    if (this.viewPortWidth !== Device.MOBILE && this.hasOverflow) {
      this.checkEllipsisOrOverflowMenu();
      this.hasOverflow = false;
    }
  }
  componentDidRender() {
    if (this.collapsedElementsRef) {
      this.anchorElements = Array.from(this.hostElement.shadowRoot.querySelectorAll("z-list-group a"));
    }
    if (this.viewPortWidth !== Device.MOBILE && this.wrapElement.scrollWidth > this.wrapElement.clientWidth) {
      this.hasOverflow = true;
    }
  }
  initializeBreadcrumb(isMobile) {
    if (isMobile) {
      this.pathsList = this.getPathsItemsList().filter((item) => !!item.path);
    }
    else {
      this.pathsList = this.getPathsItemsList();
    }
    this.totalLenght = this.pathsList.length;
    this.homepageNode = this.pathsList.shift();
    this.pathListCopy = JSON.parse(JSON.stringify(this.pathsList));
    this.collapsedElements = [];
    if (this.totalLenght > this.maxNodesToShow) {
      this.collapsedElements = this.pathsList.splice(0, this.pathsList.length - 2);
    }
  }
  checkEllipsisOrOverflowMenu() {
    if (this.pathListCopy.length > 0) {
      for (let i = 0; i < this.pathsList.length; i++) {
        if (this.pathsList[i].text.length > this.truncateChar) {
          if (this.truncatePosition !== null) {
            if (this.truncatePosition > 0) {
              const arrayToPush = this.pathListCopy.splice(0, this.truncatePosition);
              arrayToPush.forEach((item) => {
                this.collapsedElements.push(item);
              });
              this.pathsList.splice(0, this.truncatePosition);
              this.truncatePosition = 0;
              return;
            }
            if (this.truncatePosition === 0) {
              const arrayToPush = this.pathListCopy.splice(0, this.truncatePosition + 1);
              this.collapsedElements.push(...arrayToPush);
              this.pathsList.splice(0, this.truncatePosition + 1);
              this.truncatePosition = null;
              return;
            }
          }
          if (i !== this.pathsList.length - 1) {
            const truncatedString = this.truncateWithEllipsis(this.pathsList[i].text, this.truncateChar);
            this.currentEllipsisText = this.pathsList[i].text;
            this.pathsList[i].text = truncatedString;
            this.pathsList[i].hasTooltip = true;
            this.truncatePosition = i;
            return;
          }
        }
      }
    }
  }
  truncateWithEllipsis(str, length) {
    const ending = "&mldr;";
    if (str.length > length) {
      return str.substring(0, length - 1) + ending;
    }
    return str;
  }
  getPathsItemsList() {
    if (!this.paths) {
      return Array.from(this.hostElement.children).map((item) => {
        return {
          text: item.textContent,
          path: item.href,
          hasTooltip: false,
        };
      });
    }
    const ret = typeof this.paths === "string" ? JSON.parse(this.paths) : this.paths;
    return ret.map((item) => {
      return Object.assign(Object.assign({}, item), { hasTooltip: false });
    });
  }
  renderMobileBreadcrumb() {
    const lastPath = this.pathsList[this.pathsList.length - 1];
    return (h("nav", { "aria-label": "Breadcrumb", class: {
        underlined: this.pathStyle === BreadcrumbPathStyle.UNDERLINED,
        semibold: this.pathStyle === BreadcrumbPathStyle.SEMIBOLD,
      } }, h("ol", null, this.renderNode(lastPath, true))));
  }
  renderHomepageNode(item) {
    return (h("li", null, h("a", { class: {
        "homepage-icon": this.homepageVariant === BreadcrumbHomepageVariant.ICON,
        "homepage-text": this.homepageVariant === BreadcrumbHomepageVariant.TEXT,
      }, href: item.path, onClick: (e) => this.handlePreventFollowUrl(e, item) }, this.homepageVariant === BreadcrumbHomepageVariant.ICON ? (h("z-icon", { name: "home", fill: "color-link-primary", height: 16, width: 16 })) : ("Home"))));
  }
  renderNode(item, mobile) {
    return (h("li", null, item.hasTooltip && (h("z-popover", { class: "full-path-tooltip", "bind-to": this.triggerEllipsis, open: this.popoverEllipsisOpen, position: PopoverPosition.BOTTOM, closable: false, showArrow: true }, h("span", { class: "tooltip-content" }, this.currentEllipsisText))), h("a", { class: {
        "missing-path": !item.path,
        "text-ellipsis": mobile,
      }, ref: (val) => (this.triggerEllipsis = val), "aria-current": item.path ? undefined : "page", href: item.path, onClick: (e) => this.handlePreventFollowUrl(e, item), onMouseOver: () => {
        if (item.hasTooltip) {
          this.popoverEllipsisOpen = true;
        }
      }, onMouseLeave: () => {
        if (item.hasTooltip) {
          this.popoverEllipsisOpen = false;
        }
      }, innerHTML: mobile ? `<z-icon fill="color-link-primary" name="chevron-left"></z-icon> ${item.text}` : item.text })));
  }
  renderBreadcrumb() {
    return (h("nav", { ref: (val) => (this.wrapElement = val), "aria-label": "Breadcrumb", class: {
        underlined: this.pathStyle === BreadcrumbPathStyle.UNDERLINED,
        semibold: this.pathStyle === BreadcrumbPathStyle.SEMIBOLD,
      } }, h("ol", null, this.renderHomepageNode(this.homepageNode), this.collapsedElements.length ? this.renderOverflowMenu() : "", this.pathsList.map((item) => this.renderNode(item, false)))));
  }
  togglePopover() {
    if (!this.collapsedElementsRef.open) {
      this.collapsedElementsRef.open = true;
    }
  }
  handlePreventFollowUrl(e, item) {
    if (this.preventFollowUrl) {
      e.preventDefault();
      this.clickOnNode.emit(item.path);
    }
  }
  handleOverflowMenuAccessibility(e) {
    const anchorElementsLenght = this.anchorElements.length;
    if (e.key === KeyboardCode.TAB) {
      e.preventDefault();
      return;
    }
    e.stopPropagation();
    const arrows = [KeyboardCode.ARROW_DOWN, KeyboardCode.ARROW_UP];
    if (arrows.includes(e.key)) {
      e.preventDefault();
      if (e.key === KeyboardCode.ARROW_DOWN) {
        this.currentIndex = anchorElementsLenght === this.currentIndex + 1 ? 0 : this.currentIndex + 1;
      }
      if (e.key === KeyboardCode.ARROW_UP) {
        this.currentIndex = this.currentIndex <= 0 ? anchorElementsLenght - 1 : this.currentIndex - 1;
      }
      this.anchorElements[this.currentIndex].focus();
    }
    if (e.key === KeyboardCode.ESC) {
      this.triggerButton.focus();
    }
  }
  renderOverflowMenu() {
    if (this.collapsedElements.length) {
      return (h("li", null, h("z-popover", { class: "hidden-paths-popover", ref: (val) => (this.collapsedElementsRef = val), "bind-to": this.triggerButton, position: PopoverPosition.BOTTOM_RIGHT, closable: true, showArrow: true }, h("div", { class: "popover-content" }, h("z-list", null, h("z-list-group", { dividerType: ListDividerType.ELEMENT, size: ListSize.SMALL }, this.collapsedElements.map((item) => (h("z-list-element", { clickable: true }, h("a", { class: "text-ellipsis", href: item.path, onClick: (e) => this.handlePreventFollowUrl(e, item), onKeyDown: (e) => this.handleOverflowMenuAccessibility(e) }, item.text)))))))), h("button", { "aria-label": "Mostra pi\u00F9 breadcrumb", "aria-haspopup": "true", ref: (el) => (this.triggerButton = el), class: "dots", onClick: () => {
          this.togglePopover();
        }, onKeyDown: (e) => {
          handleKeyboardSubmit(e, this.togglePopover.bind(this));
          setTimeout(() => {
            this.anchorElements[0].focus();
          }, 100);
        } }, "...")));
    }
  }
  render() {
    return (h(Host, { style: { "--line-clamp": `${this.overflowMenuItemRows}` } }, this.viewPortWidth === Device.MOBILE ? this.renderMobileBreadcrumb() : this.renderBreadcrumb()));
  }
  static get is() { return "z-breadcrumb"; }
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
      "paths": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BreadcrumbPath[] | string",
          "resolved": "BreadcrumbPath[] | string",
          "references": {
            "BreadcrumbPath": {
              "location": "import",
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "[optional] Path elements, the first of which is the home path"
        },
        "attribute": "paths",
        "reflect": false
      },
      "pathStyle": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BreadcrumbPathStyle",
          "resolved": "BreadcrumbPathStyle.SEMIBOLD | BreadcrumbPathStyle.UNDERLINED",
          "references": {
            "BreadcrumbPathStyle": {
              "location": "import",
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "[optional] Sets the path style"
        },
        "attribute": "path-style",
        "reflect": true,
        "defaultValue": "BreadcrumbPathStyle.UNDERLINED"
      },
      "homepageVariant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BreadcrumbHomepageVariant",
          "resolved": "BreadcrumbHomepageVariant.ICON | BreadcrumbHomepageVariant.TEXT",
          "references": {
            "BreadcrumbHomepageVariant": {
              "location": "import",
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "[optional] Variant of first node"
        },
        "attribute": "homepage-variant",
        "reflect": false,
        "defaultValue": "BreadcrumbHomepageVariant.ICON"
      },
      "maxNodesToShow": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "[optional] Sets max number of element to show"
        },
        "attribute": "max-nodes-to-show",
        "reflect": false,
        "defaultValue": "5"
      },
      "preventFollowUrl": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "[optional] Controls the behaviour on <a> tag click/enter"
        },
        "attribute": "prevent-follow-url",
        "reflect": false,
        "defaultValue": "false"
      },
      "overflowMenuItemRows": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "[optional] Sets max number of row for each path inside the popover. Zero equals unlimited"
        },
        "attribute": "overflow-menu-item-rows",
        "reflect": false,
        "defaultValue": "0"
      },
      "truncateChar": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "[optional] Sets the maximun number of chars per single node"
        },
        "attribute": "truncate-char",
        "reflect": false,
        "defaultValue": "30"
      }
    };
  }
  static get states() {
    return {
      "viewPortWidth": {},
      "hasOverflow": {},
      "popoverEllipsisOpen": {}
    };
  }
  static get events() {
    return [{
        "method": "clickOnNode",
        "name": "clickOnNode",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when preventFollowUrl=true to handle custom page transition"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "paths",
        "methodName": "handlePropChange"
      }, {
        "propName": "maxNodesToShow",
        "methodName": "handlePropChange"
      }, {
        "propName": "viewPortWidth",
        "methodName": "handleResizeUp"
      }];
  }
  static get listeners() {
    return [{
        "name": "resize",
        "method": "handleResize",
        "target": "window",
        "capture": false,
        "passive": true
      }];
  }
}

import { Component, Prop, h, State } from "@stencil/core";
import { MenuItem, keybordKeyCodeEnum } from "../../../beans/index";

import {
  handleKeyboardSubmit,
  getClickedElement,
  getElementTree
} from "../../../utils/utils";

@Component({
  tag: "z-menu-dropdown",
  styleUrl: "styles.css",
  shadow: true
})
export class ZMenuDropdown {
  /** user name text */
  @Prop() nomeutente: string;
  /** Json stringified or array to fill menu dropdown */
  @Prop() menucontent: string | MenuItem[];
  /** unique button id */
  @Prop() buttonid: string;

  @State() ismenuopen: boolean = false;

  linkarray: MenuItem[];

  constructor() {
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
      return (
        <ul>
          {this.linkarray.map(bean => (
            <li>
              <z-link htmlid={bean.id} href={bean.link} icon={bean.icon}>
                {bean.label}
              </z-link>
            </li>
          ))}
        </ul>
      );
    }
  }

  renderButtonMenu() {
    return (
      <span class="arrow">
        <z-icon name="caret-down" width={14} height={14} />
      </span>
    );
  }

  retriveMenuClass() {
    if (this.ismenuopen) return "menu-opened";
  }

  handleToggle() {
    this.ismenuopen = !this.ismenuopen;
  }

  handleFocus(e: MouseEvent | KeyboardEvent) {
    if (e instanceof KeyboardEvent && e.keyCode !== keybordKeyCodeEnum.TAB)
      return;

    const tree = getElementTree(getClickedElement());
    const menuParent = tree.find(
      (elem: any) => elem.nodeName.toLowerCase() === "z-menu-dropdown"
    );

    if (!menuParent) {
      document.removeEventListener("click", this.handleFocus);
      document.removeEventListener("keyup", this.handleFocus);
      this.ismenuopen = false;
    }
  }

  render() {
    return (
      <a
        class={this.retriveMenuClass()}
        role="button"
        tabindex="0"
        onFocus={() => {
          document.addEventListener("click", this.handleFocus);
          document.addEventListener("keyup", this.handleFocus);
        }}
        onKeyUp={(e: KeyboardEvent) =>
          handleKeyboardSubmit(e, this.handleToggle)
        }
      >
        <div class="container" onClick={() => this.handleToggle()}>
          <span class="user-wrapper">
            <z-icon name="user-avatar" width={14} height={14} />
            <span class="user">{this.nomeutente}</span>
          </span>
          {this.renderButtonMenu()}
        </div>
        {this.renderMenuOpen()}
      </a>
    );
  }
}

import {Component, Prop, h, State} from "@stencil/core";
import {MenuItem, KeyboardKeyCodeEnum} from "../../../beans/index";

import {handleKeyboardSubmit, getClickedElement, getElementTree} from "../../../utils/utils";

@Component({
  tag: "z-menu-dropdown",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZMenuDropdown {
  /** user name text */
  @Prop()
  nomeutente: string;
  /** Json stringified or array to fill menu dropdown */
  @Prop()
  menucontent: string | MenuItem[];
  /** unique button id */
  @Prop()
  buttonid: string;

  @State()
  ismenuopen = false;

  private linkarray: MenuItem[];

  constructor() {
    this.handleToggle = this.handleToggle.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  componentWillRender(): void {
    this.linkarray = typeof this.menucontent === "string" ? JSON.parse(this.menucontent) : this.menucontent;
  }

  private renderMenuOpen(): HTMLUListElement {
    if (this.ismenuopen) {
      return (
        <ul>
          {this.linkarray.map((bean) => (
            <li>
              <z-link
                htmlid={bean.id}
                href={bean.link}
                icon={bean.icon}
              >
                {bean.label}
              </z-link>
            </li>
          ))}
        </ul>
      );
    }
  }

  private renderButtonMenu(): HTMLSpanElement {
    return (
      <span class="arrow">
        <z-icon
          name="caret-down"
          width={14}
          height={14}
        />
      </span>
    );
  }

  private retriveMenuClass(): string {
    if (this.ismenuopen) return "menu-opened";
  }

  private handleToggle(): void {
    this.ismenuopen = !this.ismenuopen;
  }

  private handleFocus(e: MouseEvent | KeyboardEvent): void {
    if (e instanceof KeyboardEvent && e.keyCode !== KeyboardKeyCodeEnum.TAB) return;

    const tree = getElementTree(getClickedElement());
    const menuParent = tree.find((elem: Element) => elem.nodeName.toLowerCase() === "z-menu-dropdown");

    if (!menuParent) {
      document.removeEventListener("click", this.handleFocus);
      document.removeEventListener("keyup", this.handleFocus);
      this.ismenuopen = false;
    }
  }

  render(): HTMLAnchorElement {
    return (
      <a
        class={this.retriveMenuClass()}
        role="button"
        tabindex="0"
        onFocus={() => {
          document.addEventListener("click", this.handleFocus);
          document.addEventListener("keyup", this.handleFocus);
        }}
        onKeyUp={(e: KeyboardEvent) => handleKeyboardSubmit(e, this.handleToggle)}
      >
        <div
          class="container"
          onClick={() => this.handleToggle()}
        >
          <span class="user-wrapper">
            <z-icon
              name="user-avatar"
              width={14}
              height={14}
            />
            <span class="user">{this.nomeutente}</span>
          </span>
          {this.renderButtonMenu()}
        </div>
        {this.renderMenuOpen()}
      </a>
    );
  }
}

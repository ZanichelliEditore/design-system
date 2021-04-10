import { Component, Prop, State, h } from "@stencil/core";
import { MenuItem } from "../../beans";

@Component({
  tag: "z-user-dropdown",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZUserDropdown {
  @Prop() islogged: boolean;
  /** user name text */
  @Prop() nomeutente: string;
  /** Json stringified or array to fill menu dropdown */
  @Prop() menucontent?: string | MenuItem[];
  /** unique button id */
  @Prop() buttonid: string;

  @State() ismenuopen: boolean = false;

  linkarray: MenuItem[];

  componentWillRender() {
    this.linkarray =
      typeof this.menucontent === "string"
        ? JSON.parse(this.menucontent)
        : this.menucontent;
  }

  handleToggle() {
    this.ismenuopen = !this.ismenuopen;
  }

  renderCaretIcon() {
    const direction = this.ismenuopen ? "up" : "down";
    return (
      <z-icon
        slot="login"
        name={`caret-${direction}-filled`}
        height={18}
        width={18}
      ></z-icon>
    );
  }

  renderGuestButton() {
    return (
      <z-link big={true} icon="enter" iswhite>
        Entra
      </z-link>
      // <button>
      //   <z-icon name="enter" height={18} width={18}></z-icon>
      //   <span>Entra</span>
      // </button>
    );
  }

  renderLoggedButton() {
    return (
      <button onClick={() => this.handleToggle()}>
        <z-icon name="user-avatar-filled" height={18} width={18}></z-icon>
        {this.renderCaretIcon()}
      </button>
    );
  }

  renderDropdownMenu() {
    return (
      this.ismenuopen && (
        <ul>
          {this.linkarray.map((link) => {
            return (
              <li id={link.id}>
                <z-link
                  iswhite
                  href={link.link}
                  target="_blank"
                  icon={link.icon}
                >
                  {link.label}
                </z-link>
              </li>
            );
          })}
        </ul>
      )
    );
  }

  render() {
    return (
      <span>
        {this.islogged ? this.renderLoggedButton() : this.renderGuestButton()}
        {this.islogged && this.renderDropdownMenu()}
      </span>
    );
  }
}

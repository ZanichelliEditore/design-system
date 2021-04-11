import { Component, Prop, State, h } from "@stencil/core";
import { MenuItem } from "../../beans";

@Component({
  tag: "z-user-dropdown",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZUserDropdown {
  @Prop() islogged: boolean;
  /** user full name */
  @Prop() userfullname?: string;
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
      <z-link big={true} icon="enter" textcolor="white">
        Entra
      </z-link>
    );
  }

  renderLoggedButton() {
    return (
      <button class={`${this.ismenuopen ? 'open' : ''}`} onClick={() => this.handleToggle()}>
        <z-icon name="user-avatar-filled" height={18} width={18}></z-icon>
        <span class="userfullname">
          {this.userfullname}
        </span>
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
                  textcolor={window.innerWidth <= 768 ? 'white' : 'black'}
                  big
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

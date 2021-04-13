import { Component, Prop, State, h } from "@stencil/core";
import { MenuItem, ThemeVariant, ThemeVariantBean } from "../../beans";
import { mobileBreakpoint } from "../../constants/breakpoints";

@Component({
  tag: "z-user-dropdown",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZUserDropdown {
  /** logged status flag */
  @Prop() islogged: boolean;
  /** user full name */
  @Prop() userfullname?: string;
  /** Json stringified or array to fill menu dropdown */
  @Prop() menucontent?: string | MenuItem[];
  /** theme variant, default 'dark' */
  @Prop() theme?: ThemeVariantBean = ThemeVariant.dark;

  @State() ismenuopen: boolean = false;

  private linkarray: MenuItem[];

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
      <z-link big={true} icon="enter" textcolor={this.theme === ThemeVariant.light ? 'black' : 'white'}>
        Entra
      </z-link>
    );
  }

  renderLoggedButton() {
    return (
      <button title={this.userfullname} class={`${this.ismenuopen ? 'open' : ''} ${this.theme}`} onClick={() => this.handleToggle()}>
        <z-icon name="user-avatar-filled" height={18} width={18}></z-icon>
        <span class="userfullname">
          {this.userfullname}
        </span>
        {this.renderCaretIcon()}
      </button>
    );
  }

  retrieveLiTextColor(): 'white' | 'black' {
    if (this.theme === ThemeVariant.light) return 'black';
    return window.innerWidth <= mobileBreakpoint ? 'white' : 'black'
  }

  renderDropdownMenu() {
    return (
      this.ismenuopen && (
        <ul class={this.theme}>
          {this.linkarray.map((link) => {
            return (
              <li id={link.id}>
                <z-link
                  textcolor={this.retrieveLiTextColor()}
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
      <div class={`${this.ismenuopen ? 'open' : ''}`}>
        {this.islogged ? this.renderLoggedButton() : this.renderGuestButton()}
        {this.islogged && this.renderDropdownMenu()}
      </div>
    );
  }
}

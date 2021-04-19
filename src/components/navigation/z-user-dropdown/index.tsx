import { Component, Prop, State, Event, Listen, h, EventEmitter } from "@stencil/core";
import { MenuItem, ThemeVariant, ThemeVariantBean } from "../../../beans";
import { mobileBreakpoint } from "../../../constants/breakpoints";

@Component({
  tag: "z-user-dropdown",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZUserDropdown {
  /** logged status flag */
  @Prop() logged?: boolean;
  /** user full name */
  @Prop() userfullname?: string;
  /** Json stringified or array to fill menu dropdown */
  @Prop() menucontent?: string | MenuItem[];
  /** theme variant, default 'dark' */
  @Prop() theme?: ThemeVariantBean = ThemeVariant.dark;

  @State() ismenuopen: boolean = false;

  private linkarray: MenuItem[];

  constructor() {
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentWillRender() {
    this.linkarray =
      typeof this.menucontent === "string"
        ? JSON.parse(this.menucontent)
        : this.menucontent;
  }

  /** Emitted on enter or user Button click, returns ismenuopen (bool) */
  @Event() userButtonClick: EventEmitter;
  emitUserButtonClick() {
    this.userButtonClick.emit(this.ismenuopen);
  }

  @Listen('click', { target: 'window' })
  handleClickOutside(e: MouseEvent) {
    if ((e.target as HTMLElement).nodeName !== 'Z-USER-DROPDOWN') {
      this.ismenuopen = false
    }
  }

  handleToggle() {
    this.ismenuopen = !this.ismenuopen;
    this.emitUserButtonClick();
  }

  renderCaretIcon() {
    const direction = this.ismenuopen ? "up" : "down";
    return (
      <z-icon
        name={`caret-${direction}-filled`}
        height={18}
        width={18}
      ></z-icon>
    );
  }

  renderGuestButton() {
    return (
      <z-link
        onClick={() => this.emitUserButtonClick()}
        big={true}
        icon="enter"
        textcolor={this.theme === ThemeVariant.light ? "black" : "white"}
      >
        Entra
      </z-link>
    );
  }

  renderLoggedButton() {
    return (
      <button
        title={this.userfullname}
        class={`${this.ismenuopen ? "open" : ""} ${this.theme}`}
        onClick={() => this.handleToggle()}
      >
        <z-icon name="user-avatar-filled" height={18} width={18}></z-icon>
        <span class="userfullname">{this.userfullname}</span>
        {this.renderCaretIcon()}
      </button>
    );
  }

  retrieveLiTextColor(): "white" | "black" {
    if (this.theme === ThemeVariant.light) return "black";
    return window.innerWidth <= mobileBreakpoint ? "white" : "black";
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
      <div class={`${this.ismenuopen ? "open" : ""}`}>
        {this.logged ? this.renderLoggedButton() : this.renderGuestButton()}
        {this.logged && this.renderDropdownMenu()}
      </div>
    );
  }
}

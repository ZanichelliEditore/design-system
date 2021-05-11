import {
  Component,
  Prop,
  State,
  Event,
  Listen,
  h,
  EventEmitter,
} from "@stencil/core";
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
  @State() isMobile: boolean;

  private linkarray: MenuItem[];
  private userButton!: HTMLButtonElement;
  private gosthDiv!: HTMLDivElement;

  constructor() {
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentWillLoad() {
    this.setMobileAndGhostDivWidth();
  }

  componentDidLoad() {
    this.setMobileAndGhostDivWidth();
  }

  componentWillUpdate() {
    this.setMobileAndGhostDivWidth();
  }

  componentWillRender() {
    this.linkarray =
      typeof this.menucontent === "string"
        ? JSON.parse(this.menucontent)
        : this.menucontent;
  }

  setMobileAndGhostDivWidth() {
    this.isMobile =
      window.screen.width <= mobileBreakpoint ||
      window.innerWidth <= mobileBreakpoint;
    if (this.gosthDiv)
      this.gosthDiv.style.width =
        !this.isMobile && this.ismenuopen
          ? `${this.userButton?.offsetWidth}px`
          : "";
  }

  /** Emitted on enter or user Button click, returns ismenuopen (bool) */
  @Event() userButtonClick: EventEmitter;
  emitUserButtonClick() {
    this.userButtonClick.emit(this.ismenuopen);
  }

  /** Emitted on dropdown menu zlink click, returns zlink linkId */
  @Event() dropdownMenuLinkClick: EventEmitter;
  emitDropdownMenuLinkClick(e: CustomEvent) {
    this.dropdownMenuLinkClick.emit(e.detail.linkId);
  }
  @Listen("resize", { target: "window" })
  handleResize(): void {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }

  @Listen("orientationchange", { target: "window" })
  handleOrientationChange(): void {
    this.isMobile = screen.width <= mobileBreakpoint;
  }

  @Listen("click", { target: "window" })
  handleClickOutside(e: MouseEvent) {
    if ((e.target as HTMLElement).nodeName !== "Z-USER-DROPDOWN") {
      this.ismenuopen = false;
    }
  }

  handleToggle() {
    this.ismenuopen = !this.ismenuopen;
    this.emitUserButtonClick();
  }

  handleDropdownLinkClick(e) {
    this.emitDropdownMenuLinkClick(e)
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
        ref={(el) => (this.userButton = el as HTMLButtonElement)}
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
    return this.isMobile ? "white" : "black";
  }

  renderGhostDiv() {
    return <div ref={(el) => (this.gosthDiv = el as HTMLDivElement)}></div>;
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
                  htmlid={link.id}
                  target={link.target}
                  icon={link.icon}
                  onZLinkClick={(e) => this.handleDropdownLinkClick(e)}
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
      <div>
        {this.logged && !this.isMobile && this.renderGhostDiv()}
        <div class={`${this.ismenuopen ? "open" : ""}`}>
          {this.logged ? this.renderLoggedButton() : this.renderGuestButton()}
          {this.logged && this.renderDropdownMenu()}
        </div>
      </div>
    );
  }
}

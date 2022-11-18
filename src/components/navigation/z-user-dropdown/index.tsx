import {Component, Prop, State, Event, Listen, h, EventEmitter, Host} from "@stencil/core";
import {MenuItem} from "../../../beans";
import {mobileBreakpoint} from "../../../constants/breakpoints";

@Component({
  tag: "z-user-dropdown",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZUserDropdown {
  /** logged status flag */
  @Prop()
  logged?: boolean;

  /** user full name */
  @Prop()
  userFullName?: string;

  /** user email */
  @Prop()
  userEmail?: string;

  /** Json stringified or array to fill menu dropdown */
  @Prop()
  menuContent?: string | MenuItem[];

  /** if inner components colors are inverted, or not, default false */
  @Prop()
  useInverseColors?: boolean = false;

  @State()
  isMenuOpen = false;

  @State()
  isMobile: boolean;

  private linkArray: MenuItem[];

  private userButton!: HTMLButtonElement;

  private divToResize!: HTMLDivElement;

  constructor() {
    this.handleLoggedButtonClick = this.handleLoggedButtonClick.bind(this);
    this.emitDropdownMenuLinkClick = this.emitDropdownMenuLinkClick.bind(this);
  }

  componentDidLoad(): void {
    this.setMobileAndDivToResizeWidth();
  }

  componentWillUpdate(): void {
    this.setMobileAndDivToResizeWidth();
  }

  componentWillRender(): void {
    if (this.menuContent) {
      this.linkArray = typeof this.menuContent === "string" ? JSON.parse(this.menuContent) : this.menuContent;
    }
  }

  private setMobileAndDivToResizeWidth(): void {
    if (this.divToResize) {
      this.isMobile = window.screen.width <= mobileBreakpoint || window.innerWidth <= mobileBreakpoint;

      if (this.logged && !this.isMobile && this.isMenuOpen) {
        this.divToResize.style.width = `${this.userButton?.offsetWidth}px`;
      } else {
        this.divToResize.removeAttribute("style");
      }
    }
  }

  /** Emitted on enter or user Button click, returns isMenuOpen (bool) */
  @Event()
  userButtonClick: EventEmitter;

  private emitUserButtonClick(): void {
    this.userButtonClick.emit(this.isMenuOpen);
  }

  /** Emitted on dropdown menu zlink click, returns event */
  @Event()
  dropdownMenuLinkClick: EventEmitter;

  private emitDropdownMenuLinkClick(e: CustomEvent): void {
    this.isMenuOpen = false;
    this.dropdownMenuLinkClick.emit({e, linkId: e.detail.linkId});
  }

  @Listen("resize", {target: "window"})
  handleResize(): void {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }

  @Listen("orientationchange", {target: "window"})
  handleOrientationChange(): void {
    this.isMobile = screen.width <= mobileBreakpoint;
  }

  @Listen("click", {target: "window"})
  handleClickOutside(e: MouseEvent): void {
    if ((e.target as HTMLElement).nodeName !== "Z-USER-DROPDOWN") {
      this.isMenuOpen = false;
    }
  }

  private handleLoggedButtonClick(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.emitUserButtonClick();
  }

  private renderGuestButton(): HTMLButtonElement {
    return (
      <button
        id="guestbutton"
        class={this.useInverseColors ? "inverse" : ""}
        onClick={() => this.emitUserButtonClick()}
      >
        ENTRA
      </button>
    );
  }

  private renderLoggedButton(): HTMLButtonElement {
    const direction = this.isMenuOpen ? "up" : "down";
    const colorClass = this.useInverseColors ? "inverse" : "";

    return (
      <button
        ref={(el) => (this.userButton = el as HTMLButtonElement)}
        title={this.userFullName}
        class={`${colorClass} ${this.isMenuOpen ? "open" : ""}`}
        onClick={this.handleLoggedButtonClick}
      >
        <div>
          <div class="firstline">
            <z-icon class={colorClass} name="user-avatar-filled" height={16} width={16} />
            {!this.isMobile && <div class={`userfullname ${colorClass}`}>{this.userFullName}</div>}
            <z-icon class={colorClass} name={`caret-${direction}-filled`} height={16} width={16} />
          </div>
          {!this.isMobile && this.isMenuOpen && <div class={`useremail ${colorClass}`}>{this.userEmail}</div>}
        </div>
      </button>
    );
  }

  private getZLinkTextcolor(): "white" | "black" {
    if (this.isMobile) {
      return this.useInverseColors ? "black" : "white";
    }

    return this.useInverseColors ? "white" : "black";
  }

  private renderDropdownMenu(): HTMLUListElement {
    const colorClass = this.useInverseColors ? "inverse" : "";

    return (
      this.isMenuOpen && (
        <ul class={colorClass}>
          {this.isMobile && (
            <li class={colorClass}>
              <div class={`userfullname ${colorClass}`}>{this.userFullName}</div>
              <div class={`useremail ${colorClass}`}>{this.userEmail}</div>
            </li>
          )}
          {this.linkArray &&
            this.linkArray.map((link) => (
              <li id={link.id} class={colorClass}>
                <z-link
                  textcolor={this.getZLinkTextcolor()}
                  href={link.link}
                  htmlid={link.id}
                  target={link.target}
                  icon={link.icon}
                  onZLinkClick={this.emitDropdownMenuLinkClick}
                >
                  {link.label}
                </z-link>
              </li>
            ))}
        </ul>
      )
    );
  }

  render(): HTMLZUserDropdownElement {
    const openClass = `${this.logged && this.isMenuOpen ? "open" : ""}`;
    const colorClass = this.useInverseColors ? "inverse" : "";

    return (
      <Host class={colorClass}>
        <div ref={(el) => (this.divToResize = el as HTMLDivElement)} class={openClass}>
          <div class={`${colorClass} ${openClass}`}>
            {this.logged ? this.renderLoggedButton() : this.renderGuestButton()}
            {this.logged && this.renderDropdownMenu()}
          </div>
        </div>
      </Host>
    );
  }
}

import { Component, Prop, State, Event, Listen, h, EventEmitter, Host } from "@stencil/core";
import { MenuItem } from "../../../beans";
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
  /** user email */
  @Prop() useremail?: string;
  /** Json stringified or array to fill menu dropdown */
  @Prop() menucontent?: string | MenuItem[];
  /** if inner components colors are inverted, or not, default false */
  @Prop() useinversecolors?: boolean = false;

  @State() ismenuopen: boolean = false;
  @State() ismobile: boolean;

  private linkarray: MenuItem[];
  private userbutton!: HTMLButtonElement;
  private divtoresize!: HTMLDivElement;

  constructor() {
    this.handleLoggedButtonClick = this.handleLoggedButtonClick.bind(this);
    this.emitDropdownMenuLinkClick = this.emitDropdownMenuLinkClick.bind(this);
  }

  componentWillLoad() {
    this.setMobileAndDivToResizeWidth();
  }

  componentDidLoad() {
    this.setMobileAndDivToResizeWidth();
  }

  componentWillUpdate() {
    this.setMobileAndDivToResizeWidth();
  }

  componentWillRender() {
    if (this.menucontent) {
      this.linkarray = typeof this.menucontent === "string" ? JSON.parse(this.menucontent) : this.menucontent;
    }
  }

  setMobileAndDivToResizeWidth() {
    if (this.divtoresize) {
      this.ismobile = window.screen.width <= mobileBreakpoint || window.innerWidth <= mobileBreakpoint;

      if (this.logged && !this.ismobile && this.ismenuopen) {
        this.divtoresize.style.width = `${this.userbutton?.offsetWidth}px`;
      } else {
        this.divtoresize.removeAttribute('style');
      }
    }
  }

  /** Emitted on enter or user Button click, returns ismenuopen (bool) */
  @Event() userButtonClick: EventEmitter;
  emitUserButtonClick() {
    this.userButtonClick.emit(this.ismenuopen);
  }

  /** Emitted on dropdown menu zlink click, returns event */
  @Event() dropdownMenuLinkClick: EventEmitter;
  emitDropdownMenuLinkClick(e: CustomEvent) {
    this.ismenuopen = false;
    this.dropdownMenuLinkClick.emit({ e, linkId: e.detail.linkId });
  }

  @Listen("resize", { target: "window" })
  handleResize(): void {
    this.ismobile = window.innerWidth <= mobileBreakpoint;
  }

  @Listen("orientationchange", { target: "window" })
  handleOrientationChange(): void {
    this.ismobile = screen.width <= mobileBreakpoint;
  }

  @Listen("click", { target: "window" })
  handleClickOutside(e: MouseEvent) {
    if ((e.target as HTMLElement).nodeName !== "Z-USER-DROPDOWN") {
      this.ismenuopen = false;
    }
  }
    
  handleLoggedButtonClick() {
    this.ismenuopen = !this.ismenuopen;
    this.emitUserButtonClick();
  }

  renderGuestButton() {
    return (
      <button
        id="guestbutton"
        class={this.useinversecolors ? "inverse" : ""}
        onClick={() => this.emitUserButtonClick()}
      >
        ENTRA
      </button>
    );
  }

  renderLoggedButton() {
    const direction = this.ismenuopen ? "up" : "down";
    const colorClass = this.useinversecolors ? "inverse" : "";

    return (
      <button
        ref={(el) => (this.userbutton = el as HTMLButtonElement)}
        title={this.userfullname}
        class={`${colorClass} ${this.ismenuopen ? "open" : ""}`}
        onClick={this.handleLoggedButtonClick}
      >
        <div>
          <div class="firstline">
            <z-icon class={colorClass} name="user-avatar-filled" height={16} width={16} />
            {!this.ismobile && <div class={`userfullname ${colorClass}`}>{this.userfullname}</div> }
            <z-icon class={colorClass} name={`caret-${direction}-filled`} height={16} width={16} />
          </div>
          {!this.ismobile && this.ismenuopen && <div class={`useremail ${colorClass}`}>{this.useremail}</div> }
        </div>
      </button>
    );
  }

  getZLinkTextcolor(): "white" | "black" {
    if (this.ismobile) {
      return this.useinversecolors ? "black" : "white";
    } else {
      return this.useinversecolors ? "white" : "black";
    }
  }

  renderDropdownMenu() {
    const colorClass = this.useinversecolors ? "inverse" : "";

    return (
      this.ismenuopen && (
        <ul class={colorClass}>
          {this.ismobile &&
            <li
              class={colorClass}
            >
              <div class={`userfullname ${colorClass}`}>{this.userfullname}</div>
              <div class={`useremail ${colorClass}`}>{this.useremail}</div>
            </li>
          }
          {this.linkarray.map((link) => 
            <li
              id={link.id}
              class={colorClass}
            >
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
          )}
        </ul>
      )
    );
  }

  render() {
    const openClass = `${this.logged && this.ismenuopen ? "open" : ""}`;
    const colorClass = this.useinversecolors ? "inverse" : "";

    return (
      <Host class={colorClass}>
        <div
          ref={(el) => (this.divtoresize = el as HTMLDivElement)}
          class={openClass}
          onClick={(e) => e.stopPropagation()}
        >
          <div class={`${colorClass} ${openClass}`}>
            {this.logged ? this.renderLoggedButton() : this.renderGuestButton()}
            {this.logged && this.renderDropdownMenu()}
          </div>
        </div>
      </Host>
    );
  }
}

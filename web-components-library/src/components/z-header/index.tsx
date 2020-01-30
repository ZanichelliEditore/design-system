import {
  Component,
  Prop,
  h,
  State,
  Element,
  Listen,
  Watch
} from "@stencil/core";
import { MenuItem, HeaderUserData, ListItemBean } from "../../beans";
import { mobileBreakpoint } from "../../constants/breakpoints";

@Component({
  tag: "z-header",
  styleUrl: "styles.css",
  shadow: true
})
export class ZHeader {
  @Prop() intlinkdata: string | MenuItem[];
  @Prop() extlinkdata: string | MenuItem[];
  @Prop() userdata?: string | HeaderUserData;
  @Prop() ismyz: boolean;
  @Prop() logolink?: string;
  @Prop() imagealt?: string;
  @Prop() activeintlinkid?: string;
  @Prop() activesublinkid?: string;

  @State() activeMenuItem: MenuItem;
  @State() currentMenuItem: MenuItem;
  @State() isMobile: boolean = true;
  @State() isMenuMobileOpen: boolean = false;
  private intMenuData: MenuItem[];
  private extMenuData: MenuItem[];
  private userData: HeaderUserData;
  private isLogged: boolean = false;

  @Element() private element: HTMLElement;

  @Watch("activeintlinkid")
  activeIntLinkChange(newValue: string) {
    this.activeMenuItem = this.currentMenuItem = this.intMenuData.find(
      (item: MenuItem) => item.id === newValue
    );
  }

  @Listen("resize", { target: "window" })
  handleResize(): void {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }

  @Listen("zListItemLinkClick", { capture: true })
  handleZListItemLinkClick(): void {
    this.isMenuMobileOpen = false;
  }
  @Listen("zListItemClick", { capture: true })
  handleZListItemClick(): void {
    this.isMenuMobileOpen = false;
  }

  componentWillLoad() {
    this.intMenuData =
      typeof this.intlinkdata === "string"
        ? JSON.parse(this.intlinkdata)
        : this.intlinkdata;
    this.extMenuData =
      typeof this.extlinkdata === "string"
        ? JSON.parse(this.extlinkdata)
        : this.extlinkdata;
    this.activeMenuItem = this.currentMenuItem = this.intMenuData.find(
      (item: MenuItem) => item.id === this.activeintlinkid
    );
    if (this.userdata) {
      this.userData =
        typeof this.userdata === "string"
          ? JSON.parse(this.userdata)
          : this.userdata;
      this.isLogged = this.userData.islogged;
    }
    this.handleResize();
  }

  renderTopHeader(): HTMLDivElement {
    if (!this.ismyz) return <div />;

    return (
      <div class="top-header">
        <div class="editors">
          <slot name="editors" />
        </div>
      </div>
    );
  }

  renderLogoDiv(): HTMLDivElement {
    return (
      <div class="logo">
        <z-logo
          link={this.logolink ? this.logolink : null}
          targetblank={true}
          width={144}
          height={36}
          imagealt={this.imagealt}
        />
      </div>
    );
  }

  renderIntMenu(menuItems: MenuItem[]): HTMLDivElement {
    if (!this.isLogged || !this.ismyz) return <div />;

    return (
      <div id="link-int" class="link-int">
        {menuItems.map(item => this.renderIntMenuItem(item))}
      </div>
    );
  }

  renderIntMenuItem(menuItem: MenuItem): HTMLSpanElement {
    const { id, label, link } = menuItem;
    return (
      <span>
        <a
          href={link ? link : null}
          id={id}
          class="menu-item"
          onClick={() => {
            this.activeMenuItem = this.currentMenuItem = menuItem;
            this.activeintlinkid = menuItem.id;
            if (menuItem.subMenu) this.handleToggleMobileMenuItem(menuItem.id);
          }}
          onMouseEnter={() => {
            this.activeMenuItem = menuItem;
          }}
          onMouseLeave={() => {
            this.activeMenuItem = this.currentMenuItem;
          }}
          role={link ? "link" : "button"}
          tabindex={this.getIntMenuItemTabindex(menuItem)}
        >
          <span>{label}</span>
          {menuItem.subMenu ? <i></i> : null}
        </a>
        <svg
          height="8"
          width="16"
          class={
            this.activeMenuItem
              ? id !== this.activeMenuItem.id && "hidden"
              : "hidden"
          }
        >
          <polygon points="8,0 16,8 0,8" class="arrow" />
        </svg>
        {this.isMobile && this.renderMenuItemsData(menuItem)}
      </span>
    );
  }

  getIntMenuItemTabindex(item: MenuItem) {
    return this.intMenuData.indexOf(item);
  }

  handleToggleMobileMenuItem(elementId: string): void {
    if (!this.isMobile) return;

    this.element.shadowRoot
      .getElementById(elementId)
      .classList.toggle("isopen");
    this.element.shadowRoot
      .getElementById("mobile-dropdown-" + elementId)
      .classList.toggle("visible");
  }

  renderMenuItemsData(menuItem): HTMLSpanElement | null {
    if (!menuItem.subMenu) return null;

    const listItems: ListItemBean[] = menuItem.subMenu.map((item: MenuItem) => {
      return {
        id: item.id,
        text: item.label,
        link: item.link,
        listitemid: item.id
      };
    });
    return this.renderMobileSubMenu(listItems, menuItem.id);
  }

  renderMobileSubMenu(menuItems: ListItemBean[], id?: string): HTMLSpanElement {
    return (
      <span class="mobile-dropdown" id={id ? `mobile-dropdown-${id}` : ""}>
        <z-list list={menuItems} />
      </span>
    );
  }

  renderSubMenu(menuItem: MenuItem): HTMLDivElement {
    if (!menuItem || !menuItem["subMenu"] || !this.isLogged || !this.ismyz) {
      return <div id="dropdown-menu" class={`dropdown-menu hidden`} />;
    }

    return (
      <div id="dropdown-menu" class={`dropdown-menu`}>
        <ul class="dropdown-links">
          {menuItem.subMenu.map(
            (item: MenuItem): HTMLAnchorElement => (
              <li>
                <a
                  id={item.id}
                  class={item.id === this.activesublinkid ? "active" : ""}
                  href={item.link ? item.link : null}
                  role={item.link ? "link" : "button"}
                  tabindex={this.getIntMenuItemTabindex(menuItem)}
                >
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    );
  }

  renderExtMenu(menuItems: MenuItem[]): HTMLDivElement {
    if (!this.isLogged) return <div />;

    return (
      <div id="link-ext" class="link-ext">
        {menuItems.map(
          (menuItem: MenuItem): HTMLSpanElement => {
            const { id, label, link, icon } = menuItem;
            return (
              <span class={`link-ext-span ${this.ismyz && "myz"}`}>
                <z-link
                  id={id}
                  linkid={id}
                  url={link}
                  label={label}
                  icon={icon}
                  iswhite={this.ismyz ? true : false}
                  target="_blank"
                  linktabindex={10}
                />
              </span>
            );
          }
        )}
      </div>
    );
  }

  renderLoginDiv(userData: HeaderUserData): HTMLDivElement {
    return (
      <div class="login">
        {this.isLogged ? (
          <z-menu-dropdown
            nomeutente={userData.name}
            menucontent={JSON.stringify(userData.userlinks)}
          />
        ) : (
          this.renderLoginButton()
        )}
      </div>
    );
  }

  renderLoginButton() {
    return (
      <z-button
        label="entra"
        type={`${this.ismyz ? "secondary" : "tertiary"}`}
        buttonid="login-button"
        icon="enter"
        issmall={true}
      />
    );
  }

  renderMobileLoginDiv(userData: HeaderUserData): HTMLDivElement {
    return (
      <div id="mobile-login" class="mobile-login">
        <span>
          <a
            class="menu-item"
            id="user-data"
            onClick={() => this.handleToggleMobileMenuItem("user-data")}
            role="button"
          >
            <span>
              <z-icon name="user" height={16} width={16} />
              {userData.name}
            </span>
            <i></i>
          </a>
          {this.renderUserData(userData)}
        </span>
      </div>
    );
  }

  renderUserData(userData: HeaderUserData) {
    if (this.isMobile && !userData) return null;

    const listItems: ListItemBean[] = userData.userlinks.map(
      (item: MenuItem) => {
        return {
          text: item.label,
          link: item.link,
          icon: item.icon,
          listitemid: item.id
        };
      }
    );
    return this.renderMobileSubMenu(listItems, "user-data");
  }

  renderDesktopHeader(): HTMLHeadingElement {
    return (
      <header>
        {this.renderTopHeader()}
        {this.renderMainHeader()}
        {this.renderSubMenu(this.activeMenuItem)}
      </header>
    );
  }

  renderMainHeader(): HTMLDivElement {
    return (
      <div id="main-header" class={`main-header ${!this.ismyz && "myz-out"}`}>
        {this.renderLogoDiv()}
        {this.renderIntMenu(this.intMenuData)}
        {this.renderExtMenu(this.extMenuData)}
        {this.renderLoginDiv(this.userData)}
      </div>
    );
  }

  renderMobileHeader(): HTMLHeadingElement {
    return (
      <header>
        {this.renderMobileMenu()}
        {this.renderMobileMenuContent()}
      </header>
    );
  }

  renderMobileMenu(): HTMLDivElement {
    return (
      <div
        id="mobile-header"
        class={`mobile-header ${!this.ismyz && "myz-out"}`}
      >
        {this.renderLogoDiv()}
        {this.renderMobileMenuToggle()}
      </div>
    );
  }

  renderMobileMenuToggle() {
    if (!this.isLogged) return this.renderLoginButton();

    return (
      <div
        class="menu-mobile"
        id="mobile-menu-wrapper"
        onClick={() => (this.isMenuMobileOpen = !this.isMenuMobileOpen)}
      >
        <div
          class={`menu-toggle ${this.isMenuMobileOpen && "is-active"}`}
          id="mobile-menu"
        >
          <span class="bar" />
          <span class="bar" />
          <span class="bar" />
        </div>
        <span>Menu</span>
      </div>
    );
  }

  renderMobileMenuContent(): HTMLDivElement | null {
    if (!this.isLogged) return null;

    return (
      <div
        id="mobile-content"
        class={`mobile-content ${this.isMenuMobileOpen && "open"} ${!this
          .ismyz && "myz-out"}`}
      >
        {this.renderMobileLoginDiv(this.userData)}
        {this.ismyz && <hr />}
        {this.renderIntMenu(this.intMenuData)}
        <hr />
        {this.renderExtMenu(this.extMenuData)}
      </div>
    );
  }

  render() {
    return this.isMobile
      ? this.renderMobileHeader()
      : this.renderDesktopHeader();
  }
}

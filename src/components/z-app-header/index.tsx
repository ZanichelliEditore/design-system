import {Component, Element, Event, EventEmitter, Fragment, Host, Listen, Prop, State, Watch, h} from "@stencil/core";
import {ButtonVariant, ControlSize, KeyboardCode, OffCanvasVariant, TransitionDirection} from "../../beans";
import {Breakpoints} from "../../constants/breakpoints";

const SUPPORT_INTERSECTION_OBSERVER = typeof IntersectionObserver !== "undefined";

/**
 * @slot title - Slot for the main title
 * @slot top-subtitle - Slot for the top subtitle. It will not appear in stuck header.
 * @slot stucked-title - Title for the stuck header. By default it uses the text from the `title` slot.
 * @slot product-logo - To insert the product logo, it should be used with an img tag.
 * @cssprop --app-header-content-max-width - Use it to set header's content max width. Useful when the project use a fixed width layout. Defaults to `100%`.
 * @cssprop --app-header-top-offset - Top offset for the stuck header. Useful when there are other fixed elements above the header. Defaults to `48px` (the height of the main topbar).
 * @cssprop --app-header-drawer-trigger-size - The size of the drawer icon. Defaults to `--space-unit * 4`.
 * @cssprop --app-header-bg - Header background color. Defaults to `--color-surface01`.
 * @cssprop --app-header-stucked-bg - Stuck header background color. Defaults to `--color-surface01`.
 * @cssprop --app-header-stucked-text-color - Stuck header text color. Defaults to `--color-default-text`.
 */
@Component({
  tag: "z-app-header",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZAppHeader {
  @Element() hostElement: HTMLZAppHeaderElement;

  /**
   * Stuck mode for the header.
   * You can programmatically set it using an IntersectionObserver.
   */
  @Prop({reflect: true})
  stuck = false;

  /**
   * When enabled, the menu bar is not displayed and a burger icon appears to open the offcanvas menu. Automatically enabled on mobile and when the menu items overflow the container.
   */
  @Prop({reflect: true, mutable: true})
  enableOffcanvas = false;

  /**
   * Enable the search bar.
   */
  @Prop({reflect: true})
  enableSearch = false;

  /**
   * Placeholder text for the search bar.
   */
  @Prop()
  searchPlaceholder = "Cerca";

  /**
   * Search string for the search bar.
   */
  @Prop({mutable: true})
  searchString = "";

  /**
   * Url to the search page.
   * Set this prop and `enableSearch` to show a link-button on mobile and tablet viewports, instead of the normal searchbar.
   * The link will also appear on the sticky header.
   */
  @Prop()
  searchPageUrl: string;

  /**
   * Enable laZ logo.
   */
  @Prop({reflect: true})
  enableZLogo = true;

  /**
   * Emitted when the `stuck` state of the header changes
   */
  @Event()
  sticking: EventEmitter;

  /**
   * The stuck state of the bar.
   */
  @State()
  private _stuck = false;

  /**
   * Current count of menu items.
   */
  @State()
  private menuLength: number;

  /**
   * The opening state of the drawer.
   */
  @State()
  private drawerOpen = false;

  @State()
  private isMobile = true;

  @State()
  private isTablet = false;

  private container?: HTMLDivElement;

  private menuContainer?: HTMLElement;

  private menuElements?: HTMLZMenuElement[];

  private closeMenuButton: HTMLButtonElement;

  private burgerButton: HTMLButtonElement;

  private searchbar: HTMLZSearchbarElement;

  private menuResizeObserver: ResizeObserver;

  private currentIndex = -1;

  private stuckIntersecObserver?: IntersectionObserver =
    SUPPORT_INTERSECTION_OBSERVER &&
    new IntersectionObserver(
      ([entry]) => {
        this._stuck = !entry.isIntersecting;
      },
      {threshold: 0.5}
    );

  constructor() {
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.collectMenuElements = this.collectMenuElements.bind(this);
  }

  @Listen("keydown")
  handleKeyDown(e: KeyboardEvent): void {
    if (e.code === KeyboardCode.ESC && this.drawerOpen) {
      this.closeDrawer();

      return;
    }
    this.handleArrowsNav(e);
  }

  private handleArrowsNav(e: KeyboardEvent): void {
    if (e.code !== KeyboardCode.ARROW_DOWN && e.code !== KeyboardCode.ARROW_UP && this.enableOffcanvas) {
      return;
    }

    if (document.activeElement.slot === "item") {
      return;
    }

    const menuItems = this.menuElements.map((el) => el.shadowRoot.querySelector(".menu-label") as HTMLElement);

    let nextFocusableItem: HTMLElement;
    if (this.enableOffcanvas || this._stuck) {
      // INFO: reset focus on all menu items
      menuItems.forEach((item: HTMLElement) => item.setAttribute("tabindex", "-1"));
      e.preventDefault();
      e.stopPropagation();
      if (e.code === KeyboardCode.ARROW_DOWN) {
        nextFocusableItem = this.getNextItem(menuItems, 1);
      } else if (e.code === KeyboardCode.ARROW_UP) {
        nextFocusableItem = this.getNextItem(menuItems, -1);
      }
    } else {
      if (e.code === KeyboardCode.ARROW_DOWN || e.code === KeyboardCode.ARROW_UP) {
        e.preventDefault();

        return;
      }
      //INFO: reset focus on all menu items
      menuItems.forEach((item: HTMLElement) => item.setAttribute("tabindex", "-1"));
      if (e.code === KeyboardCode.ARROW_RIGHT) {
        nextFocusableItem = this.getNextItem(menuItems, 1);
      } else if (e.code === KeyboardCode.ARROW_LEFT) {
        nextFocusableItem = this.getNextItem(menuItems, -1);
      }
    }
    if (nextFocusableItem) {
      nextFocusableItem.setAttribute("tabindex", "0");
      nextFocusableItem.focus();
    }
  }

  private getNextItem(menuItems: HTMLElement[], direction: number): HTMLElement {
    if (this.currentIndex === -1) {
      this.currentIndex = direction === 1 ? 0 : menuItems.length - 1;

      return menuItems[this.currentIndex];
    }

    this.currentIndex = (this.currentIndex + direction + menuItems.length) % menuItems.length;

    return menuItems[this.currentIndex];
  }

  @Watch("_stuck")
  onStuck(): void {
    const scrollParent = this.scrollParent;
    if (!scrollParent) {
      return;
    }

    this.sticking.emit(this._stuck);
  }

  @Watch("drawerOpen")
  setMenuFloatingMode(): void {
    if (this.menuElements.length === 0) {
      return;
    }

    this.menuElements.forEach((element) => {
      element.open = false;
      element.floating = !this.drawerOpen;
      element.verticalContext = this.drawerOpen;
      element.setAttribute("role", "menuitem");
      element.setAttribute("tabindex", "-1");
    });
    // enable tab navigation on the active menu, if any. Otherwise, enable it on the first menu
    const activeMenu = this.menuElements.find(({active}) => active);
    if (activeMenu) {
      activeMenu.setAttribute("tabindex", "0");
    } else {
      this.menuElements[0].setAttribute("tabindex", "0");
    }
  }

  @Watch("stuck")
  onStuckChange(): void {
    if (this.stuck) {
      this.stuckIntersecObserver?.observe(this.container);
    } else {
      this._stuck = false;
      this.stuckIntersecObserver?.unobserve(this.container);
    }
  }

  private get title(): string {
    return this.hostElement.querySelector('[slot="title"]')?.textContent.trim();
  }

  private get scrollParent(): Window | Element {
    const parent = this.hostElement.offsetParent;
    if (parent === document.body || parent === document.documentElement) {
      return window;
    }

    return parent;
  }

  private get canShowMenu(): boolean {
    return !this.enableOffcanvas && this.menuElements.length > 0 && !this.isMobile && !this.drawerOpen;
  }

  private openDrawer(): void {
    this.drawerOpen = true;
    this.closeMenuButton.focus();
  }

  private closeDrawer(): void {
    this.drawerOpen = false;
    this.burgerButton.focus();
    this.currentIndex = -1;
  }

  private collectMenuElements(): void {
    this.menuElements = Array.from(this.hostElement.querySelectorAll('[slot="menu"]'));
    this.menuLength = this.menuElements.length;
    this.setMenuFloatingMode();
  }

  private setupMenuResizeObserver(): void {
    if (this.enableOffcanvas) {
      return;
    }

    this.menuResizeObserver = new ResizeObserver((entries) => {
      if (this.isMobile) {
        this.enableOffcanvas = true;

        return;
      }

      const menuWidth = this.menuContainer?.getBoundingClientRect().width;
      const containerWidth = entries[0].contentBoxSize[0].inlineSize;
      if (menuWidth > containerWidth && !this.enableOffcanvas) {
        this.enableOffcanvas = true;
      } else if (menuWidth <= containerWidth && this.enableOffcanvas) {
        this.enableOffcanvas = false;
      }
    });
    this.menuResizeObserver.observe(this.container);
  }

  private hasSlot(slotName: string): boolean {
    return this.hostElement.querySelector(`[slot="${slotName}"]`) !== null;
  }

  private renderSeachbar(): HTMLZButtonElement | HTMLZSearchbarElement | undefined {
    if (this.isMobile && !this.searchPageUrl && this._stuck) {
      return;
    }

    if (this.searchPageUrl && (this.isMobile || this.isTablet)) {
      return (
        <z-button
          class="search-page-button"
          variant={ButtonVariant.SECONDARY}
          href={this.searchPageUrl}
          icon="search"
          size={ControlSize.X_SMALL}
        />
      );
    }

    return (
      <z-searchbar
        ref={(el) => (this.searchbar = el as HTMLZSearchbarElement)}
        value={this.searchString}
        placeholder={this.searchPlaceholder}
        showSearchButton={true}
        searchButtonIconOnly={this.isMobile || this.isTablet}
        size={ControlSize.X_SMALL}
        variant={ButtonVariant.SECONDARY}
        preventSubmit={this.searchString.length < 3}
        onSearchTyping={(e) => (this.searchString = e.detail)}
        onKeyDown={(e) => {
          if (e.code === KeyboardCode.ARROW_RIGHT || e.code === KeyboardCode.ARROW_LEFT) {
            e.stopPropagation();
          }
        }}
      />
    );
  }

  private renderProductLogos(): HTMLElement | null {
    return (
      <Fragment>
        {this.enableZLogo && (
          <img
            class="z-logo"
            alt="Logo Zanichelli"
          />
        )}
        {!this.isMobile && <slot name="product-logo"></slot>}
      </Fragment>
    );
  }

  private renderMenuButton(): HTMLButtonElement {
    return (
      this.menuLength > 0 &&
      (this.enableOffcanvas || this._stuck || this.isMobile) && (
        <button
          ref={(el) => (this.burgerButton = el as HTMLButtonElement)}
          aria-label="Apri menu"
          aria-haspopup="menu"
          aria-expanded={`${this.drawerOpen}`}
          aria-controls="offcanvas-menu"
          class="drawer-trigger"
          onClick={this.openDrawer}
        >
          <z-icon name="burger-menu" />
        </button>
      )
    );
  }

  private renderOffcanvas(): HTMLZOffcanvasElement {
    return (
      <z-offcanvas
        id="offcanvas-menu"
        variant={OffCanvasVariant.OVERLAY}
        transitiondirection={TransitionDirection.RIGHT}
        open={this.drawerOpen}
        onCanvasOpenStatusChanged={(ev) => (this.drawerOpen = ev.detail)}
      >
        <div slot="canvasContent">
          <button
            ref={(el) => (this.closeMenuButton = el as HTMLButtonElement)}
            class="drawer-close"
            aria-label="Chiudi menu"
            onClick={this.closeDrawer}
            aria-hidden={`${!this.drawerOpen}`}
            disabled={!this.drawerOpen}
          >
            <z-icon name="close" />
          </button>

          <div
            class="drawer-content"
            aria-hidden={`${!this.drawerOpen}`}
          >
            <slot
              name="menu"
              onSlotchange={this.collectMenuElements}
            ></slot>
          </div>
        </div>
      </z-offcanvas>
    );
  }

  private renderStuck(): HTMLElement {
    return (
      <div class="heading-stuck">
        <div class="heading-stuck-content">
          {this.renderMenuButton()}
          <div class="heading-title">
            {this.renderProductLogos()}
            <slot name="stucked-title">{this.title}</slot>
          </div>
          {this.enableSearch && this.renderSeachbar()}
        </div>
      </div>
    );
  }

  private focusToFirstItemMenu(): void {
    const menuItems = this.menuElements.map((el) => el.shadowRoot.querySelector(".menu-label") as HTMLElement);

    menuItems[0].focus();
    this.currentIndex = 0;
  }

  private handleFocusItem(e): void {
    const menuItems = this.menuElements.map((el) => el.shadowRoot.querySelector(".menu-label") as HTMLElement);

    if (
      e.code === KeyboardCode.ARROW_DOWN ||
      e.code === KeyboardCode.ARROW_UP ||
      e.code === KeyboardCode.ENTER ||
      e.code === KeyboardCode.TAB
    ) {
      return;
    }

    if (document.activeElement.tagName === "Z-MENU-SECTION" || document.activeElement.tagName === "Z-MENU") {
      return;
    }

    if (this.enableSearch && this.currentIndex === 0) {
      const input = this.searchbar.shadowRoot.querySelector("z-input input") as HTMLInputElement;
      input.focus();
      this.currentIndex = -1;
    }

    if (this.currentIndex !== -1) {
      menuItems[this.currentIndex].focus();
    }
  }

  componentWillLoad(): void {
    this.collectMenuElements();

    const mobileMediaQuery = window.matchMedia(`(max-width: ${Breakpoints.MOBILE}px)`);
    this.isMobile = mobileMediaQuery.matches;
    mobileMediaQuery.addEventListener("change", (e) => (this.isMobile = e.matches));
    const tabletMediaQuery = window.matchMedia(
      `(min-width: ${Breakpoints.MOBILE + 1}px) and (max-width: ${Breakpoints.TABLET}px)`
    );
    this.isTablet = tabletMediaQuery.matches;
    tabletMediaQuery.addEventListener("change", (e) => (this.isTablet = e.matches));
  }

  componentDidLoad(): void {
    this.onStuckChange();
    this.setupMenuResizeObserver();
  }

  disconnectedCallback(): void {
    this.menuResizeObserver?.disconnect();
  }

  render(): HTMLZAppHeaderElement {
    const hasTopSubtitle = this.hasSlot("top-subtitle");

    return (
      <Host menu-length={this.menuLength}>
        <div
          class={{"heading-panel": true, "has-menu": this.menuLength > 0 && !this.enableOffcanvas}}
          ref={(el) => (this.container = el)}
        >
          <div class="heading-container">
            {((!this.enableSearch && this.isMobile) || !this.isMobile) && (
              <div class="top-subtitle">
                <slot name="top-subtitle"></slot>
              </div>
            )}
            <div class="heading-title">
              {this.renderMenuButton()}
              {!hasTopSubtitle && !this._stuck && this.renderProductLogos()}
              <slot name="title"></slot>
              {this.enableSearch && !this.isMobile && this.renderSeachbar()}
            </div>
            {this.enableSearch && this.isMobile && this.renderSeachbar()}
          </div>

          <nav
            ref={(el) => (this.menuContainer = el)}
            class="menu-container"
            aria-label={this.title || undefined}
            onKeyUp={(e) => {
              if (this.enableOffcanvas) {
                return;
              }
              if (this.currentIndex === -1) {
                this.focusToFirstItemMenu();
              } else {
                this.handleFocusItem(e);
              }
            }}
          >
            {this.canShowMenu && (
              <div
                role="menubar"
                aria-label={this.title || undefined}
              >
                <slot
                  name="menu"
                  onSlotchange={this.collectMenuElements}
                ></slot>
              </div>
            )}
          </nav>
        </div>
        {this.renderOffcanvas()}
        {this._stuck && this.renderStuck()}
      </Host>
    );
  }
}

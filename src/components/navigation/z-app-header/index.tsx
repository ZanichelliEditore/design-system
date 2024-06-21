import {Component, Element, Prop, State, Watch, Host, Event, EventEmitter, Listen, h, Fragment} from "@stencil/core";
import {
  ButtonVariant,
  ControlSize,
  Device,
  DividerOrientation,
  KeyboardCode,
  OffCanvasVariant,
  TransitionDirection,
} from "../../../beans";
import {getDevice} from "../../../utils/utils";

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
   * Control menu bar position in the header.
   * - auto: the menu bar is positioned near the title
   * - stack: the menu bar is positioned below the title
   * - offcanvas: the menu bar is not displayed and a burger icon appears to open the offcanvas menu
   */
  @Prop({reflect: true})
  flow: "auto" | "stack" | "offcanvas" = "auto";

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
  enableZLogo = false;

  /**
   * The stuck state of the bar.
   */
  @State()
  private _stuck = false;

  /**
   * Current viewport.
   * Used to change the aspect of the search button (icon only) on mobile and tablet.
   */
  @State()
  private currentViewport: "mobile" | "tablet" | "desktop" | "desktop-wide" = "mobile";

  /**
   * Current count of menu items.
   */
  @State()
  menuLength: number;

  /**
   * Emitted when the `stuck` state of the header changes
   */
  @Event()
  sticking: EventEmitter;

  /**
   * The opening state of the drawer.
   */
  @State()
  private drawerOpen = false;

  private container?: HTMLDivElement;

  private menuElements?: NodeListOf<HTMLElement>;

  private closeMenuButton: HTMLButtonElement;

  private burgerButton: HTMLButtonElement;

  private currentIndex = -1;

  private observer?: IntersectionObserver =
    SUPPORT_INTERSECTION_OBSERVER &&
    new IntersectionObserver(
      ([entry]) => {
        this._stuck = !entry.isIntersecting;
      },
      {
        threshold: 0.5,
      }
    );

  constructor() {
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.collectMenuElements = this.collectMenuElements.bind(this);
  }

  @Listen("resize", {target: "window", passive: true})
  evaluateViewport(): void {
    this.currentViewport = getDevice();
  }

  @Listen("keyup")
  handleKeyUp(e: KeyboardEvent): void {
    console.log("tab", e.code);
    if (e.code === KeyboardCode.ESC) {
      this.closeDrawer();

      return;
    }

    this.handleArrowsNav(e);
  }

  private handleArrowsNav(e: KeyboardEvent): void {
    const elements = [];
    this.menuElements.forEach((el) => {
      elements.push(el.shadowRoot.querySelector(".menu-label"));
    });
    const firstMenuItem = elements[0] as HTMLElement;
    const lastMenuItem = elements[elements.length - 1] as HTMLElement;

    if (document.activeElement.slot === "item") {
      return;
    }

    if (e.code !== KeyboardCode.ARROW_DOWN && e.code !== KeyboardCode.ARROW_UP) {
      return;
    }
    let nextFocusableItem: HTMLElement;

    // INFO: reset focus on all menu items
    elements.forEach((item: HTMLElement) => item.setAttribute("tabindex", "-1"));

    if (e.code === KeyboardCode.ARROW_DOWN) {
      switch (this.currentIndex) {
        case -1:
          nextFocusableItem = firstMenuItem;
          this.currentIndex++;
          break;
        case elements.length - 1:
          nextFocusableItem = firstMenuItem;
          this.currentIndex = 0;
          break;
        default:
          nextFocusableItem = elements[this.currentIndex + 1] as HTMLElement;
          this.currentIndex++;
          break;
      }
    } else if (e.code === KeyboardCode.ARROW_UP) {
      switch (this.currentIndex) {
        case -1:
          nextFocusableItem = lastMenuItem;
          this.currentIndex--;
          break;
        case 0:
          nextFocusableItem = lastMenuItem;
          this.currentIndex = elements.length - 1;
          break;
        default:
          nextFocusableItem = elements[this.currentIndex - 1] as HTMLElement;
          this.currentIndex--;
          break;
      }
    }

    if (nextFocusableItem) {
      nextFocusableItem.setAttribute("tabindex", "0");
      nextFocusableItem.focus();
    }
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
    const elements = this.menuElements;
    elements.forEach((element, index) => {
      (element as HTMLZMenuElement).open = false;
      (element as HTMLZMenuElement).floating = !this.drawerOpen;
      (element as HTMLZMenuElement).verticalContext = this.drawerOpen;
      (element as HTMLZMenuElement).setAttribute("tabindex", "-1");
      (element as HTMLZMenuElement).setAttribute("role", "menuitem");

      (element as HTMLZMenuElement).hasDivider =
        this.flow === "offcanvas" ? false : index !== this.menuElements.length - 1 && this.menuElements.length > 1;
    });
  }

  @Watch("stuck")
  onStuckMode(): void {
    if (this.stuck) {
      this.enableStuckObserver();
    } else {
      this.disableStuckMode();
    }
  }

  private get title(): string {
    const titleElement = this.hostElement.querySelector('[slot="title"]');
    if (titleElement === null) {
      return "";
    }

    return titleElement.textContent.trim();
  }

  private get scrollParent(): Window | Element {
    const parent = this.hostElement.offsetParent;
    if (parent === document.body || parent === document.documentElement) {
      return window;
    }

    return parent;
  }

  private get canShowMenu(): boolean {
    return this.flow !== "offcanvas" && this.currentViewport !== "mobile" && !this.drawerOpen;
  }

  private get canShowSearchbar(): boolean {
    if (!this.enableSearch) {
      return false;
    }

    // Always show the searchbar on desktop, even if a searchPageUrl is set
    if (this.searchPageUrl) {
      return this.currentViewport === "desktop";
    }

    return true;
  }

  private openDrawer(): void {
    this.drawerOpen = true;
  }

  private closeDrawer(): void {
    this.drawerOpen = false;
    this.burgerButton.focus();
  }

  private collectMenuElements(): void {
    const menuElements = (this.menuElements = this.hostElement.querySelectorAll('[slot="menu"]'));
    this.menuLength = menuElements.length;
    this.setMenuFloatingMode();
  }

  private enableStuckObserver(): void {
    if (this.observer) {
      this.observer.observe(this.container);
    }
  }

  private disableStuckMode(): void {
    this._stuck = false;
    if (this.observer) {
      this.observer.unobserve(this.container);
    }
  }

  private isSlotPresent(slotName: string): boolean {
    const slot = this.hostElement.querySelector(`[slot="${slotName}"]`);

    return !!slot;
  }

  private renderSearchLinkButton(): HTMLZButtonElement | null {
    if (!this.enableSearch || !this.searchPageUrl || this.currentViewport === "desktop") {
      return null;
    }

    return (
      <z-button
        class="search-page-button"
        variant={ButtonVariant.SECONDARY}
        href={this.searchPageUrl}
        icon="search"
        size={ControlSize.X_SMALL}
      ></z-button>
    );
  }

  private renderSeachbar(searchButtonIconOnly: boolean): HTMLZSearchbarElement {
    return (
      <z-searchbar
        value={this.searchString}
        placeholder={this.searchPlaceholder}
        showSearchButton={true}
        searchButtonIconOnly={searchButtonIconOnly}
        size={ControlSize.X_SMALL}
        variant={ButtonVariant.SECONDARY}
        preventSubmit={this.searchString.length < 3}
        onSearchTyping={(e) => (this.searchString = e.detail)}
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
        {this.enableZLogo && this.currentViewport !== Device.MOBILE && (
          <z-divider
            class="heading-divider"
            orientation={DividerOrientation.VERTICAL}
            color="color-black"
          ></z-divider>
        )}
        {this.currentViewport !== Device.MOBILE && <slot name="product-logo"></slot>}
      </Fragment>
    );
  }

  private renderMenuButton(): HTMLButtonElement {
    return (
      this.menuLength > 0 && (
        <button
          ref={(el) => (this.burgerButton = el as HTMLButtonElement)}
          aria-label="Apri menu"
          aria-haspopup="menu"
          aria-expanded={`${this.drawerOpen}`}
          aria-controls="menu-offcanvas"
          class="drawer-trigger"
          onClick={this.openDrawer}
          onKeyUp={(ev: KeyboardEvent) => {
            if (ev.code === KeyboardCode.ENTER || ev.code === KeyboardCode.SPACE) {
              this.closeMenuButton.focus();
            }
          }}
        >
          <z-icon name="burger-menu"></z-icon>
        </button>
      )
    );
  }

  private renderOffcanvas(): HTMLZOffcanvasElement {
    return (
      <z-offcanvas
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
            <z-icon name="close"></z-icon>
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

          {this.renderSearchLinkButton()}
          {this.canShowSearchbar && this.currentViewport === Device.DESKTOP && this.renderSeachbar(false)}
        </div>
      </div>
    );
  }

  componentWillLoad(): void {
    this.collectMenuElements();
    this.evaluateViewport();
  }

  componentDidLoad(): void {
    this.onStuckMode();
  }

  render(): HTMLZAppHeaderElement {
    return (
      <Host menu-length={this.menuLength}>
        <div
          class={`heading-panel ${this.isSlotPresent("top-subtitle") ? "padding-top-subtitle" : ""}`}
          ref={(el) => (this.container = el)}
        >
          <div class="heading-container">
            {((!this.canShowSearchbar && this.currentViewport === Device.MOBILE) ||
              this.currentViewport !== Device.MOBILE) && (
              <div class={`heading-top-subtitle ${this.isSlotPresent("top-subtitle") ? "active-top-subtitle" : ""}`}>
                <slot name="top-subtitle"></slot>
              </div>
            )}
            <div class="heading-title">
              {this.renderMenuButton()}
              {!this.isSlotPresent("top-subtitle") && !this._stuck && this.renderProductLogos()}
              <slot name="title"></slot>
              {this.canShowSearchbar && this.renderSeachbar(this.currentViewport !== Device.DESKTOP)}

              {this.renderSearchLinkButton()}
            </div>
          </div>

          {(this.canShowMenu || this.canShowSearchbar) && (
            <div class={`menu-container ${this.isSlotPresent("top-subtitle") ? "menu-top-subtitle" : ""}`}>
              {this.canShowMenu && (
                <slot
                  name="menu"
                  onSlotchange={this.collectMenuElements}
                ></slot>
              )}
            </div>
          )}
        </div>

        {this.renderOffcanvas()}

        {this._stuck && this.renderStuck()}
      </Host>
    );
  }
}

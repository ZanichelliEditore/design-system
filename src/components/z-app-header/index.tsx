import {Component, Element, Event, EventEmitter, Fragment, Host, Listen, Prop, State, Watch, h} from "@stencil/core";
import {ButtonVariant, ControlSize, KeyboardCode, OffCanvasVariant, TransitionDirection} from "../../beans";
import {Breakpoints} from "../../constants/breakpoints";
import {containsElement} from "../../utils/utils";

const SUPPORT_INTERSECTION_OBSERVER = typeof IntersectionObserver !== "undefined";

/**
 * @slot title - Slot for the main title
 * @slot top-subtitle - Slot for the top subtitle. It will not appear in stuck header.
 * @slot stucked-title - Title for the stuck header. By default it uses the text from the `title` slot.
 * @slot product-logo - To insert the product logo, it should be used with an img tag.
 * @cssprop --app-header-content-max-width - Use it to set header's content max width. Useful when the project use a fixed width layout. Defaults to `100%`.
 * @cssprop --app-header-top-offset - Top offset for the stuck header. Useful when there are other fixed elements above the header. Defaults to `48px` (the height of the main topbar).
 * @cssprop --app-header-bg - Header background color. Defaults to `--color-surface01`.
 * @cssprop --app-header-text-color - Header text color. Defaults to `--color-default-text`.
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

  private menuElements: HTMLZMenuElement[] = [];

  private menuWidth: number;

  private closeMenuButton: HTMLButtonElement;

  private burgerButton: HTMLButtonElement;

  private menuResizeObserver: ResizeObserver;

  private stuckIntersecObserver?: IntersectionObserver = SUPPORT_INTERSECTION_OBSERVER
    ? new IntersectionObserver(
        ([entry]) => {
          this._stuck = !entry.isIntersecting;
        },
        {threshold: 0.5}
      )
    : undefined;

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
      element.verticalContext = this.drawerOpen;
    });
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

  private get focusableMenu(): HTMLZMenuElement {
    return this.menuElements.find((el) => el.htmlTabindex === 0);
  }

  private openDrawer(): void {
    this.drawerOpen = true;
    this.menuElements.forEach((element, index) => (element.htmlTabindex = index === 0 ? 0 : -1));
    setTimeout(() => this.closeMenuButton.focus(), 100);
  }

  private closeDrawer(): void {
    this.drawerOpen = false;
    setTimeout(() => this.burgerButton.focus(), 100);
  }

  private collectMenuElements(): void {
    this.menuElements = Array.from(this.hostElement.querySelectorAll('[slot="menu"]'));
    this.menuElements.forEach((element, index) => (element.htmlTabindex = index === 0 ? 0 : -1));
    this.menuLength = this.menuElements.length;
    if (!this.enableOffcanvas) {
      this.menuWidth =
        this.menuElements.reduce((acc, el) => acc + el.getBoundingClientRect().width, 0) +
        (this.menuLength - 1) * 32 /* 32px is the gap between each menu item */;
    }
    this.setMenuFloatingMode();
  }

  /** Automatically use offcanvas mode when the menubar doesn't fit in the header. */
  private setupMenuResizeObserver(): void {
    if (this.enableOffcanvas) {
      return;
    }

    this.menuResizeObserver = new ResizeObserver((entries) => {
      if (this.isMobile) {
        this.enableOffcanvas = true;

        return;
      }

      const containerWidth = entries[0].contentBoxSize[0].inlineSize;
      if (this.menuWidth === 0) {
        return;
      }

      if (this.menuWidth > containerWidth && !this.enableOffcanvas) {
        this.enableOffcanvas = true;
      } else if (this.menuWidth <= containerWidth && this.enableOffcanvas) {
        this.enableOffcanvas = false;
      }
    });
    this.menuResizeObserver.observe(this.container);
  }

  private hasSlot(slotName: string): boolean {
    return this.hostElement.querySelector(`[slot="${slotName}"]`) !== null;
  }

  private moveFocus(current: HTMLZMenuElement, next: HTMLZMenuElement): void {
    current.htmlTabindex = -1;
    current.open = false;
    next.htmlTabindex = 0;
    next.setFocus();
  }

  /** Close each menu except the one receiving focus/click */
  @Listen("focusin", {target: "document", passive: true})
  @Listen("click", {target: "document", passive: true})
  manageMenus(ev: FocusEvent | PointerEvent): void {
    this.menuElements.forEach((menu) => {
      if (!menu.open || !menu.floating || menu.verticalContext || containsElement(menu, ev.target as Element)) {
        return;
      }
      menu.open = false;
    });
  }

  @Listen("keydown", {passive: true})
  handleMenubarKeydown(ev: KeyboardEvent): void {
    if (!this.menuElements.some((elem) => elem.contains(ev.target as HTMLElement))) {
      return;
    }

    const current = this.focusableMenu;
    const currentIndex = this.menuElements.indexOf(current);
    let next: HTMLZMenuElement;
    if (
      (ev.key === KeyboardCode.ARROW_RIGHT && !current.verticalContext) ||
      (ev.key === KeyboardCode.ARROW_DOWN && current.verticalContext)
    ) {
      next = currentIndex < this.menuElements.length - 1 ? this.menuElements[currentIndex + 1] : this.menuElements[0];
    } else if (
      (ev.key === KeyboardCode.ARROW_LEFT && !current.verticalContext) ||
      (ev.key === KeyboardCode.ARROW_UP && current.verticalContext)
    ) {
      next = currentIndex > 0 ? this.menuElements[currentIndex - 1] : this.menuElements[this.menuElements.length - 1];
    }
    if (!next) {
      return;
    }

    this.moveFocus(current, next);
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
        value={this.searchString}
        placeholder={this.searchPlaceholder}
        showSearchButton={true}
        searchButtonIconOnly={this.isMobile || this.isTablet}
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
          <span class="z-logo">
            <img alt="Logo Zanichelli" />
          </span>
        )}
        {this.hostElement.querySelector("[slot='product-logo']") && (
          <span class="product-logo">
            <slot name="product-logo" />
          </span>
        )}
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
            />
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
            <div class="stucked-title">
              <slot name="stucked-title">{this.title}</slot>
            </div>
          </div>
          {this.enableSearch && this.renderSeachbar()}
        </div>
      </div>
    );
  }

  constructor() {
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.collectMenuElements = this.collectMenuElements.bind(this);
  }

  componentWillLoad(): void {
    this.collectMenuElements();

    // mobile and tablet media queries listeners
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
          class={{"heading-panel": true, "has-menubar": this.menuLength > 0 && !this.enableOffcanvas}}
          ref={(el) => (this.container = el)}
        >
          <div class="heading-container">
            {((!this.enableSearch && this.isMobile) || !this.isMobile) && (
              <div class="top-subtitle">
                <slot name="top-subtitle" />
              </div>
            )}
            <div class="heading-title">
              {this.renderMenuButton()}
              {!hasTopSubtitle && !this._stuck && this.renderProductLogos()}
              <slot name="title" />
              {this.enableSearch && !this.isMobile && this.renderSeachbar()}
            </div>
            {this.enableSearch && this.isMobile && this.renderSeachbar()}
          </div>

          <nav
            class="menu-container"
            aria-label={this.title || undefined}
          >
            {this.canShowMenu && (
              <div
                role="menubar"
                aria-label={this.title || undefined}
              >
                <slot
                  name="menu"
                  onSlotchange={this.collectMenuElements}
                />
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

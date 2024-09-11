import {Component, Element, Event, EventEmitter, Host, Listen, Prop, State, Watch, h} from "@stencil/core";
import {ButtonVariant, ControlSize, OffCanvasVariant, TransitionDirection} from "../../../beans";

const SUPPORT_INTERSECTION_OBSERVER = typeof IntersectionObserver !== "undefined";

/**
 * @slot title - Slot for the main title
 * @slot subtitle - Slot for the bottom subtitle. It will not appear in stuck header.
 * @slot top-subtitle - Slot for the top subtitle. It will not appear in stuck header.
 * @slot stucked-title - Title for the stuck header. By default it uses the text from the `title` slot.
 * @cssprop --app-header-typography-1-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `24px`.
 * @cssprop --app-header-typography-2-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `28px`.
 * @cssprop --app-header-typography-3-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `32px`.
 * @cssprop --app-header-typography-4-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `36px`.
 * @cssprop --app-header-typography-5-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `42px`.
 * @cssprop --app-header-typography-6-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `48px`.
 * @cssprop --app-header-typography-7-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `54px`.
 * @cssprop --app-header-typography-8-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `60px`.
 * @cssprop --app-header-typography-9-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `68px`.
 * @cssprop --app-header-typography-10-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `76px`.
 * @cssprop --app-header-typography-11-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `84px`.
 * @cssprop --app-header-typography-12-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `92px`.
 * @cssprop --app-header-typography-1-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.33`.
 * @cssprop --app-header-typography-2-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.29`.
 * @cssprop --app-header-typography-3-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.25`.
 * @cssprop --app-header-typography-4-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.24`.
 * @cssprop --app-header-typography-5-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.24`.
 * @cssprop --app-header-typography-6-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.25`.
 * @cssprop --app-header-typography-7-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.2`.
 * @cssprop --app-header-typography-8-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.26`.
 * @cssprop --app-header-typography-9-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.24`.
 * @cssprop --app-header-typography-10-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.26`.
 * @cssprop --app-header-typography-11-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.2`.
 * @cssprop --app-header-typography-12-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.2`.
 * @cssprop --app-header-typography-1-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-0.2 / 1em)`.
 * @cssprop --app-header-typography-2-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-0.4 / 1em)`.
 * @cssprop --app-header-typography-3-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-0.6 / 1em)`.
 * @cssprop --app-header-typography-4-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-0.8 / 1em)`.
 * @cssprop --app-header-typography-5-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-1 / 1em)`.
 * @cssprop --app-header-typography-6-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-1.2 / 1em)`.
 * @cssprop --app-header-typography-7-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-1.4 / 1em)`.
 * @cssprop --app-header-typography-8-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-1.6 / 1em)`.
 * @cssprop --app-header-typography-9-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-1.8 / 1em)`.
 * @cssprop --app-header-typography-10-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-2 / 1em)`.
 * @cssprop --app-header-typography-11-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-2.2 / 1em)`.
 * @cssprop --app-header-typography-12-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-2.4 / 1em)`.
 * @cssprop --app-header-content-max-width - Use it to set header's content max width. Useful when the project use a fixed width layout. Defaults to `100%`.
 * @cssprop --app-header-height - Defaults to `auto`.
 * @cssprop --app-header-top-offset - Top offset for the stuck header. Useful when there are other fixed elements above the header. Defaults to `48px` (the height of the main topbar).
 * @cssprop --app-header-drawer-trigger-size - The size of the drawer icon. Defaults to `--space-unit * 4`.
 * @cssprop --app-header-bg - Header background color. Defaults to `--color-surface01`.
 * @cssprop --app-header-stucked-bg - Stuck header background color. Defaults to `--color-surface01`.
 * @cssprop --app-header-text-color - Text color. Useful on `hero` variant to set text color based on the colors of the background image. Defaults to `--color-default-text`.
 * @cssprop --app-header-title-font-size - Variable to customize the title's font size.
 * NOTE: Only use one of the exported `--app-header-typography-*-size` as a value.
 * Defaults to `--app-header-typography-3-size`.
 * @cssprop --app-header-title-lineheight - Variable to customize the title's line-height.
 * NOTE: Only use one of the exported `--app-header-typography-*-lineheight` as a value and use the same level as the one of the font size.
 * Defaults to `--app-header-typography-3-lineheight`.
 * @cssprop --app-header-title-letter-spacing - Variable to customize the title's letter-spacing.
 * NOTE: Only use one of the exported `--app-header-typography-*-tracking` as a value and use the same level as the one of the font size.
 * Defaults to `--app-header-typography-3-tracking`.
 * @cssprop --app-header-stucked-text-color - Stuck header text color. Defaults to `--color-default-text`.
 */
@Component({
  tag: "z-app-header-deprecated",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZAppHeaderDeprecated {
  @Element() hostElement: HTMLZAppHeaderDeprecatedElement;

  /**
   * Stuck mode for the header.
   * You can programmatically set it using an IntersectionObserver.
   */
  @Prop({reflect: true})
  stuck = false;

  /**
   * Set the hero image source for the header.
   * You can also use a [slot="hero"] node for advanced customization.
   */
  @Prop()
  hero: string;

  /**
   * Should place an overlay over the hero image.
   * Useful for legibility purpose.
   */
  @Prop({reflect: true})
  overlay = false;

  /**
   * Control menu bar position in the header.
   * - auto: the menu bar is positioned near the title
   * - stack: the menu bar is positioned below the title
   * - offcanvas: the menu bar is not displayed and a burger icon appears to open the offcanvas menu
   */
  @Prop({reflect: true})
  flow: "auto" | "stack" | "offcanvas" = "auto";

  /**
   * The opening state of the drawer.
   */
  @Prop({reflect: true})
  drawerOpen = false;

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
   * The stuck state of the bar.
   */
  @State()
  private _stuck = false;

  /**
   * Current viewport.
   * Used to change the aspect of the search button (icon only) on mobile and tablet.
   */
  @State()
  private currentViewport: "mobile" | "tablet" | "desktop" = "mobile";

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

  private container?: HTMLDivElement;

  private menuElements?: NodeListOf<HTMLElement>;

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
    if (window.innerWidth < 768) {
      this.currentViewport = "mobile";
    } else if (window.innerWidth >= 768 && window.innerWidth < 1152) {
      this.currentViewport = "tablet";
    } else {
      this.currentViewport = "desktop";
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
    elements.forEach((element) => {
      (element as HTMLZMenuElement).open = false;
      (element as HTMLZMenuElement).floating = !this.drawerOpen;
      (element as HTMLZMenuElement).verticalContext = this.drawerOpen;
    });
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

  /**
   * Whether the header has a hero image, either as a prop or as a slot.
   */
  private get hasHero(): boolean {
    return !!this.hero || this.hostElement.querySelector("[slot=hero]") !== null;
  }

  private openDrawer(): void {
    this.drawerOpen = true;
  }

  private closeDrawer(): void {
    this.drawerOpen = false;
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

  @Watch("stuck")
  onStuckMode(): void {
    if (this.stuck) {
      this.enableStuckObserver();
    } else {
      this.disableStuckMode();
    }
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

  componentDidLoad(): void {
    this.collectMenuElements();
    this.onStuckMode();
    this.evaluateViewport();
  }

  render(): HTMLZAppHeaderElement {
    return (
      <Host menu-length={this.menuLength}>
        {this.hasHero && (
          <div class="hero-container">
            <slot name="hero">
              {this.hero && (
                <img
                  alt=""
                  src={this.hero}
                />
              )}
            </slot>
          </div>
        )}

        <div
          class="heading-panel"
          ref={(el) => (this.container = el)}
        >
          <div class="heading-container">
            <div class="heading-subtitle">
              <slot name="top-subtitle"></slot>
            </div>
            <div class="heading-title">
              {this.menuLength > 0 && (
                <button
                  class="drawer-trigger"
                  aria-label="Apri menu"
                  onClick={this.openDrawer}
                >
                  <z-icon name="burger-menu"></z-icon>
                </button>
              )}

              <slot name="title"></slot>

              {this.renderSearchLinkButton()}
            </div>

            <div class="heading-subtitle">
              <slot name="subtitle"></slot>
            </div>
          </div>

          {(this.canShowMenu || this.canShowSearchbar) && (
            <div class="menu-container">
              {this.canShowMenu && (
                <slot
                  name="menu"
                  onSlotchange={this.collectMenuElements}
                ></slot>
              )}

              {this.canShowSearchbar && this.renderSeachbar(this.currentViewport !== "desktop")}
            </div>
          )}
        </div>

        <z-offcanvas
          variant={OffCanvasVariant.OVERLAY}
          transitiondirection={TransitionDirection.RIGHT}
          open={this.drawerOpen}
          onCanvasOpenStatusChanged={(ev) => (this.drawerOpen = ev.detail)}
        >
          <button
            class="drawer-close"
            aria-label="Chiudi menu"
            onClick={this.closeDrawer}
            slot="canvasContent"
            aria-hidden={`${!this.drawerOpen}`}
            disabled={!this.drawerOpen}
          >
            <z-icon name="close"></z-icon>
          </button>

          <div
            class="drawer-content"
            slot="canvasContent"
            aria-hidden={`${!this.drawerOpen}`}
          >
            <slot
              name="menu"
              onSlotchange={this.collectMenuElements}
            ></slot>
          </div>
        </z-offcanvas>

        {this._stuck && (
          <div class="heading-stuck">
            <div class="heading-stuck-content">
              {this.menuLength > 0 && (
                <button
                  class="drawer-trigger"
                  aria-label="Apri menu"
                  onClick={this.openDrawer}
                >
                  <z-icon name="burger-menu"></z-icon>
                </button>
              )}

              <div class="heading-title">
                <slot name="stucked-title">{this.title}</slot>
              </div>

              {this.renderSearchLinkButton()}
              {this.canShowSearchbar && this.currentViewport === "desktop" && this.renderSeachbar(false)}
            </div>
          </div>
        )}
      </Host>
    );
  }
}

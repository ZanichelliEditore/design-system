import {Component, Element, Event, EventEmitter, Host, Listen, Prop, State, Watch, h} from "@stencil/core";
import {NavigationTabsKeyboardEvents, NavigationTabsOrientation, NavigationTabsSize} from "../../beans";

/**
 * Navigation tabs component.
 * To select a specific tab programmatically, set the `aria-selected` attribute to `true` on the desired tab.
 * @slot - Main slot. Use `<button>` or `<a>` tags as children.
 * @cssprop --z-navigation-tabs-nav-buttons-bg - Navigation buttons background color.
 * @cssprop --z-navigation-tabs-nav-buttons-fg - Navigation buttons foreground color.
 */
@Component({
  tag: "z-navigation-tabs",
  styleUrl: "styles.css",
})
export class ZNavigationTabs {
  /**
   * Set `aria-label` attribute to the internal `<nav>` element with `tablist` role.
   */
  @Prop()
  ariaLabel = "";

  /**
   * Navigation tabs orientation.
   */
  @Prop({reflect: true})
  orientation? = NavigationTabsOrientation.HORIZONTAL;

  /**
   * Navigation tabs size.
   */
  @Prop({reflect: true})
  size? = NavigationTabsSize.BIG;

  /**
   * Index of the selected tab.
   * Useful to programmatically select a tab.
   * The tab can also be selected by setting the `aria-selected` attribute to `true` on the desired tab.
   */
  @Prop({mutable: true})
  selectedTab: number = undefined;

  /**
   * Emitted when the selected tab changes.
   * Contains the index of the new selected tab in the `detail` of the event.
   */
  @Event()
  selected: EventEmitter<number>;

  /**
   * Whether to show navigation buttons.
   */
  @State()
  canNavigate: boolean;

  /**
   * Whether backwards navigation is allowed.
   */
  @State()
  canNavigatePrev: boolean;

  /**
   * Whether forward navigation is allowed.
   */
  @State()
  canNavigateNext: boolean;

  @Element() host: HTMLZNavigationTabsElement;

  /**
   * Index of the last tab that held focus.
   */
  private focusedTab = undefined;

  /**
   * Reference to the `<nav>` element
   */
  private nav: HTMLElement;

  /**
   * Getter for the direction to check based on current orientation.
   */
  get direction(): string {
    return this.orientation == NavigationTabsOrientation.HORIZONTAL ? "Left" : "Top";
  }

  /**
   * Getter for the dimension to check based on current orientation.
   */
  get dimension(): string {
    return this.orientation == NavigationTabsOrientation.HORIZONTAL ? "Width" : "Height";
  }

  get tabs(): HTMLElement[] {
    return Array.from(this.nav.children) as HTMLElement[];
  }

  private resizeObserver: ResizeObserver;

  /**
   * Scroll into view to center the tab.
   */
  private scrollToTab(tabElement: HTMLElement): void {
    const scrollOptions = (
      this.orientation === NavigationTabsOrientation.HORIZONTAL
        ? {block: "nearest", inline: "center"}
        : {block: "center", inline: "nearest"}
    ) as ScrollIntoViewOptions;

    tabElement.scrollIntoView({
      behavior: "smooth",
      ...scrollOptions,
    });
  }

  /**
   * Scroll the navigation bar half of its size backward.
   */
  private navigateBackwards(): void {
    this.nav.scrollBy({
      [this.direction.toLowerCase()]: 0 - this.nav[`client${this.dimension}`] / 2,
      behavior: "smooth",
    });
  }

  /**
   * Scroll the navigation bar half of its size forward.
   */
  private navigateForward(): void {
    this.nav.scrollBy({
      [this.direction.toLowerCase()]: this.nav[`scroll${this.direction}`] + this.nav[`client${this.dimension}`] / 2,
      behavior: "smooth",
    });
  }

  /**
   * Check if a keyboard event was triggered by an arrow key.
   */
  private isArrowNavigation(e: KeyboardEvent): boolean {
    return Object.values(NavigationTabsKeyboardEvents).includes(e.key as NavigationTabsKeyboardEvents);
  }

  /**
   * Check if the navigation buttons are needed.
   */
  private checkScrollVisible(): void {
    if (!this.nav) {
      return;
    }

    this.canNavigate = this.nav[`scroll${this.dimension}`] > this.nav[`client${this.dimension}`];
  }

  /**
   * Check if navigation buttons can be enabled for each direction.
   */
  @Watch("canNavigate")
  checkScrollEnabled(): void {
    if (!this.nav) {
      return;
    }

    this.canNavigateNext =
      this.nav[`scroll${this.direction}`] + this.nav[`client${this.dimension}`] < this.nav[`scroll${this.dimension}`];
    this.canNavigatePrev = this.nav[`scroll${this.direction}`] > 0;
  }

  /**
   * When the selected tab changes, update the `aria-selected` attribute on each tab and scroll to the selected tab.
   */
  @Watch("selectedTab")
  onTabSelected(): void {
    this.tabs.forEach((tab, i) => {
      const zicon = tab.querySelector("z-icon");
      const strokeIcon = zicon?.name.replace("-filled", "");
      if (i !== this.selectedTab) {
        tab.setAttribute("aria-selected", "false");
        tab.tabIndex = -1;
        if (zicon) {
          zicon.name = strokeIcon;
        }

        return;
      }

      if (zicon) {
        zicon.name = `${strokeIcon}-filled`;
      }
      tab.setAttribute("aria-selected", "true");
    });
    this.selected.emit(this.selectedTab);
    if (this.selectedTab !== undefined) {
      this.scrollToTab(this.tabs[this.selectedTab]);
    }
  }

  /**
   * Handle click on the tabs.
   * @param event `click` event triggered by a child tab
   */
  @Listen("click")
  handleTabClick(event: MouseEvent): void {
    const clickedTab = (event.target as HTMLElement).closest<HTMLElement>("[role='tab']");
    if (!this.tabs.some((child) => child.contains(clickedTab))) {
      return;
    }

    this.selectedTab = this.tabs.indexOf(clickedTab);
  }

  /**
   * When a tab is focused, temporarily set to -1 the `tabindex` of the selected tab (if any) and set the `focusedTab` to the index of the focused tab.
   */
  @Listen("focusin")
  onTabFocusIn(event: FocusEvent): void {
    const focused = this.tabs.findIndex((tab) => tab.contains(event.target as HTMLElement));
    if (focused === -1) {
      return;
    }

    if (this.selectedTab !== undefined) {
      this.tabs[this.selectedTab].tabIndex = -1;
    }
    this.focusedTab = focused;
    this.tabs[this.focusedTab].tabIndex = -1;
    this.scrollToTab(this.tabs[this.focusedTab]);
  }

  /**
   * Handle keyboard navigation through tabs with arrow keys.
   */
  @Listen("keydown")
  navigateThroughTabs(event: KeyboardEvent): void | boolean {
    if (!this.tabs.some((tab) => tab.contains(event.target as HTMLElement)) || !this.isArrowNavigation(event)) {
      return true;
    }

    event.preventDefault();
    if (
      (event.key === NavigationTabsKeyboardEvents.RIGHT && this.orientation == NavigationTabsOrientation.HORIZONTAL) ||
      (event.key === NavigationTabsKeyboardEvents.DOWN && this.orientation == NavigationTabsOrientation.VERTICAL)
    ) {
      // Move forward
      this.focusedTab++;
      if (this.focusedTab >= this.tabs.length) {
        this.focusedTab = 0;
      }
    } else if (
      (event.key === NavigationTabsKeyboardEvents.LEFT && this.orientation == NavigationTabsOrientation.HORIZONTAL) ||
      (event.key === NavigationTabsKeyboardEvents.UP && this.orientation == NavigationTabsOrientation.VERTICAL)
    ) {
      // Move backward
      this.focusedTab--;
      if (this.focusedTab < 0) {
        this.focusedTab = this.tabs.length - 1;
      }
    }
    // Ignore disabled tabs
    if (
      this.tabs[this.focusedTab].hasAttribute("disabled") &&
      this.tabs[this.focusedTab].getAttribute("disabled") !== "false"
    ) {
      return this.navigateThroughTabs(event);
    }

    this.tabs[this.focusedTab].focus();
    this.scrollToTab(this.tabs[this.focusedTab]);
  }

  /**
   * If the focus is not going on a tab (`relatedTarget` is the new focused element), set to 0 the `tabindex` of the selected tab or the one of the first tab, then unset the `focusedTab`.
   */
  @Listen("focusout")
  onTabFocusOut(event: FocusEvent): void {
    if (!this.tabs.some((tab) => tab.contains(event.relatedTarget as HTMLElement))) {
      this.tabs[this.selectedTab ?? 0].tabIndex = 0;
      this.focusedTab = undefined;
    }
  }

  connectedCallback(): void {
    this.resizeObserver = new ResizeObserver(() => this.checkScrollVisible());
  }

  componentDidLoad(): void {
    // Set role and tabindex to each slotted tab
    this.tabs.forEach((tab) => {
      tab.setAttribute("role", "tab");
      tab.tabIndex = -1;
    });

    const preselectedTab = this.selectedTab ?? this.tabs.findIndex((tab) => tab.ariaSelected === "true");
    if (preselectedTab !== -1) {
      this.selectedTab = preselectedTab;
      this.tabs[preselectedTab].tabIndex = 0;
      this.onTabSelected();
    } else {
      this.tabs[0].tabIndex = 0;
    }

    this.resizeObserver.observe(this.nav);
  }

  disconnectedCallback(): void {
    this.resizeObserver?.disconnect();
  }

  render(): HTMLZNavigationTabsElement {
    return (
      <Host
        class={{
          "interactive-2": this.size === NavigationTabsSize.SMALL,
          "interactive-1": this.size !== NavigationTabsSize.SMALL,
        }}
        scrollable={this.canNavigate}
      >
        <button
          class="navigation-button"
          onClick={this.navigateBackwards.bind(this)}
          tabIndex={-1}
          disabled={!this.canNavigatePrev}
          aria-label="Mostra elementi precedenti"
          hidden={!this.canNavigate}
        >
          <z-icon
            name={this.orientation === NavigationTabsOrientation.HORIZONTAL ? "chevron-left" : "chevron-up"}
            width={16}
            height={16}
          />
        </button>

        <nav
          role="tablist"
          aria-label={this.ariaLabel}
          ref={(el) => (this.nav = el ?? this.nav)}
          onScroll={this.checkScrollEnabled.bind(this)}
          aria-orientation={this.orientation}
        >
          <slot></slot>
        </nav>

        <button
          class="navigation-button"
          onClick={this.navigateForward.bind(this)}
          tabIndex={-1}
          disabled={!this.canNavigateNext}
          aria-label="Mostra elementi successivi"
          hidden={!this.canNavigate}
        >
          <z-icon
            name={this.orientation === NavigationTabsOrientation.HORIZONTAL ? "chevron-right" : "chevron-down"}
            width={16}
            height={16}
          />
        </button>
      </Host>
    );
  }
}

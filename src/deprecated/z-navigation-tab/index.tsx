import {Component, Prop, h, Listen, Event, EventEmitter, Watch, Host} from "@stencil/core";
import {NavigationTabsOrientation, NavigationTabsSize} from "../../beans";
import {ICONS} from "../../components/icons/icons";

/**
 * Single tab component to use inside `z-navigation-tabs`. It renders a button.
 * This component uses the `tab` role:
 * @link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role
 */
@Component({
  tag: "z-navigation-tab",
  styleUrl: "../navigation-tab.css",
})
export class ZNavigationTab {
  /**
   * `aria-controls` attribute of the tab.
   * Identifies the element (with `role=tabpanel`) whose contents or presence are controlled by this tab.
   * The value must be the `id` of the element it controls.
   * @link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls
   */
  @Prop()
  ariaControls?: string;

  /**
   * `id` attribute of the tab.
   * Set this id to the `aria-labelledby` attribute of the controlled `tabpanel` element.
   * @link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby
   * @deprecated Use native `id` attribute instead
   */
  @Prop()
  tabId?: string;

  /**
   * Whether the tab is selected.
   */
  @Prop({mutable: true, reflect: true})
  selected?: boolean = false;

  /**
   * Whether the tab is disabled.
   */
  @Prop({reflect: true})
  disabled?: boolean = false;

  /**
   * Tab orientation. Do not set this manually: `z-navigation-tabs` will handle this.
   */
  @Prop({reflect: true})
  orientation: NavigationTabsOrientation = NavigationTabsOrientation.HORIZONTAL;

  /**
   * Tab size. Do not set this manually: `z-navigation-tabs` will handle this.
   */
  @Prop({reflect: true})
  size: NavigationTabsSize = NavigationTabsSize.BIG;

  /**
   * Name of the icon to use.
   * The `filled` version will be automatically used (if found) when the tab is `selected`.
   * @deprecated Use a native `<button>` instead.
   */
  @Prop()
  icon: string;

  /**
   * Label to show in the tab.
   */
  @Prop()
  label: string;

  /**
   * Html `title` attribute for the button.
   */
  @Prop()
  htmlTitle: string;

  /**
   * The tab has been selected.
   */
  @Event({eventName: "selected"})
  private selectedEvent: EventEmitter;

  /**
   * Scroll into view to center the tab.
   */
  private scrollToTab({target: button}): void {
    const scrollOptions = (
      this.orientation === NavigationTabsOrientation.HORIZONTAL
        ? {block: "nearest", inline: "center"}
        : {block: "center", inline: "nearest"}
    ) as ScrollIntoViewOptions;

    button.scrollIntoView({
      behavior: "smooth",
      ...scrollOptions,
    });
  }

  @Listen("click")
  onClick(): void {
    if (!this.disabled) {
      this.selected = true;
    }
  }

  @Watch("selected")
  onSelected(): void {
    if (this.selected) {
      this.selectedEvent.emit();
    }
  }

  /**
   * Render the icon component using the icon's name passed from prop.
   * Use the `filled` version when the tab is `selected`.
   * @returns {HTMLElement}
   */
  private renderIcon(): HTMLZIconElement {
    let icon = this.icon;
    const iconFilled = `${icon.replace(/-filled$/, "")}-filled`;

    if (this.selected && Object.keys(ICONS).includes(iconFilled)) {
      icon = iconFilled;
    }

    return <z-icon name={icon}></z-icon>;
  }

  render(): HTMLZNavigationTabElement {
    return (
      <Host
        role="tab"
        id={this.tabId}
        aria-selected={this.selected ? "true" : "false"}
        aria-controls={this.ariaControls}
      >
        <button
          tabIndex={this.selected ? 0 : -1}
          onFocus={this.scrollToTab.bind(this)}
          disabled={this.disabled}
          title={this.htmlTitle}
        >
          {this.icon && this.renderIcon()}
          {this.orientation === NavigationTabsOrientation.HORIZONTAL && this.label}
        </button>
      </Host>
    );
  }
}

import {Component, Prop, h, Listen, Event, EventEmitter, Watch, Host} from "@stencil/core";
import {NavigationTabsOrientation, NavigationTabsSize} from "../../beans";
import {ICONS} from "../../components/icons/icons";

/**
 * Single tab component to use inside `z-navigation-tabs`. It renders an anchor element.
 * This component uses the `tab` role:
 * @link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role
 * @deprecated Use a native `<a>` instead.
 */
@Component({
  tag: "z-navigation-tab-link",
  styleUrl: "../navigation-tab.css",
})
export class ZNavigationTabLink {
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
  orientation = NavigationTabsOrientation.HORIZONTAL;

  /**
   * Tab size. Do not set this manually: `z-navigation-tabs` will handle this.
   */
  @Prop({reflect: true})
  size = NavigationTabsSize.BIG;

  /**
   * Html title attribute for the anchor element.
   */
  @Prop()
  htmlTitle: string;

  /**
   * Html `target` attribute for the anchor element.
   */
  @Prop()
  target: string;

  /**
   * Url to set to the anchor element.
   */
  @Prop()
  href: string;

  /**
   * Name of the icon to use.
   * The `filled` version will be automatically used (if found) when the tab is `selected`.
   */
  @Prop()
  icon: string;

  /**
   * Label to show in the tab.
   */
  @Prop()
  label: string;

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
    this.selected = true;
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

  render(): HTMLZNavigationTabLinkElement {
    return (
      <Host
        role="tab"
        id={this.tabId}
        aria-selected={this.selected ? "true" : "false"}
        aria-controls={this.ariaControls}
      >
        <a
          tabIndex={this.selected ? 0 : -1}
          onFocus={this.scrollToTab.bind(this)}
          href={!this.disabled && this.href}
          title={this.htmlTitle}
          target={this.target}
        >
          {this.icon && this.renderIcon()}
          {this.orientation === "horizontal" && this.label}
        </a>
      </Host>
    );
  }
}

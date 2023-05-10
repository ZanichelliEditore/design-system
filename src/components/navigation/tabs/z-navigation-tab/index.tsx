import {Component, Prop, h, Listen, Event, EventEmitter, Watch} from "@stencil/core";
import {NavigationTabsOrientation, NavigationTabsSize} from "../../../../beans";
import {ICONS} from "../../../icons/icons";

/**
 * Single tab component to use inside `z-navigation-tabs`. It renders a button.
 */
@Component({
  tag: "z-navigation-tab",
  styleUrl: "../navigation-tab.css",
})
export class ZNavigationTab {
  /**
   * set aria-controls attribute to tab property identifying a corresponding tabpanel
   * (that has a tabpanel role) by that element's id.
   * When an element with the tabpanel role has focus, or a child of it has focus,
   * that indicates that the connected element with the tab role is the active tab in a tablist.
   */
  @Prop()
  ariaControls?: string = "";

  /**
   * set id attribute to tab property identifying a corresponding tabpanel
   * (that has a tabpanel role) by that element's attribute  aria-labelledby.
   */
  @Prop()
  tabId?: string = "";

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
    const scrollOptions =
      this.orientation === NavigationTabsOrientation.HORIZONTAL
        ? ({block: "nearest", inline: "center"} as ScrollIntoViewOptions)
        : ({block: "center", inline: "nearest"} as ScrollIntoViewOptions);

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

  render(): HTMLButtonElement {
    return (
      <button
        role="tab"
        id={this.tabId}
        disabled={this.disabled}
        title={this.htmlTitle}
        onFocus={this.scrollToTab.bind(this)}
        aria-selected={this.selected ? "true" : "false"}
        aria-controls={this.ariaControls}
        tabindex={this.selected ? "0" : "-1"}
      >
        {this.icon && this.renderIcon()}
        {this.orientation === NavigationTabsOrientation.HORIZONTAL && this.label}
      </button>
    );
  }
}

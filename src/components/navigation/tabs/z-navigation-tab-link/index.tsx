import {Component, Prop, h, Listen, Event, EventEmitter, Watch} from "@stencil/core";
import {NavigationTabsOrientation, NavigationTabsSize} from "../../../../beans";
import {ICONS} from "../../../icons/icons";

/**
 * Single tab component to use inside `z-navigation-tabs`. It renders an anchor element.
 */
@Component({
  tag: "z-navigation-tab-link",
  styleUrl: "../navigation-tab.css",
})
export class ZNavigationTabLink {
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

  render(): HTMLAnchorElement {
    return (
      <a
        role="tab"
        id={this.tabId}
        href={!this.disabled && this.href}
        title={this.htmlTitle}
        target={this.target}
        onFocus={this.scrollToTab.bind(this)}
        aria-selected={this.selected ? "true" : "false"}
        aria-controls={this.ariaControls}
      >
        {this.icon && this.renderIcon()}
        {this.orientation === "horizontal" && this.label}
      </a>
    );
  }
}

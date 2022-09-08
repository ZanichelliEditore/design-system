import {Component, Prop, h, Listen, Event, EventEmitter, Watch} from "@stencil/core";
import {
  NavigationTabsOrientations,
  NavigationTabsOrientation,
  NavigationTabsSizes,
  NavigationTabsSize,
} from "../../../../beans";
import {icons} from "../../../icons/icons";

/**
 * Single tab component to use inside `z-navigation-tabs`. It renders a button.
 */
@Component({
  tag: "z-navigation-tab",
  styleUrl: "../navigation-tab.css",
})
export class ZNavigationTab {
  /**
   * Whether the tab is selected.
   */
  @Prop({mutable: true, reflect: true}) selected?: boolean = false;

  /**
   * Whether the tab is disabled.
   */
  @Prop({reflect: true}) disabled?: boolean = false;

  /**
   * Tab orientation. Do not set this manually: `z-navigation-tabs` will handle this.
   */
  @Prop({reflect: true}) orientation: NavigationTabsOrientation = NavigationTabsOrientations.horizontal;

  /**
   * Tab size. Do not set this manually: `z-navigation-tabs` will handle this.
   */
  @Prop({reflect: true}) size: NavigationTabsSize = NavigationTabsSizes.big;

  /**
   * Name of the icon to use.
   * The `filled` version will be automatically used (if found) when the tab is `selected`.
   */
  @Prop() icon: string;

  /**
   * Label to show in the tab.
   */
  @Prop() label: string;

  /**
   * Html `title` attribute for the button.
   */
  @Prop() htmlTitle: string;

  @Event({eventName: "selected"})
  private selectedEvent: EventEmitter;

  /**
   * Scroll into view to center the tab.
   */
  scrollToTab({target: button}) {
    const scrollOptions =
      this.orientation === NavigationTabsOrientations.horizontal
        ? ({block: "nearest", inline: "center"} as ScrollIntoViewOptions)
        : ({block: "center", inline: "nearest"} as ScrollIntoViewOptions);

    button.scrollIntoView({
      behavior: "smooth",
      ...scrollOptions,
    });
  }

  @Listen("click")
  onClick() {
    if (!this.disabled) {
      this.selected = true;
    }
  }

  @Watch("selected")
  onSelected() {
    if (this.selected) {
      this.selectedEvent.emit();
    }
  }

  /**
   * Render the icon component using the icon's name passed from prop.
   * Use the `filled` version when the tab is `selected`.
   * @returns {HTMLElement}
   */
  renderIcon() {
    let icon = this.icon;
    const iconFilled = `${icon.replace(/-filled$/, "")}-filled`;

    if (this.selected && Object.keys(icons).includes(iconFilled)) {
      icon = iconFilled;
    }

    return <z-icon name={icon}></z-icon>;
  }

  render() {
    return (
      <button
        role="tab"
        disabled={this.disabled}
        title={this.htmlTitle}
        onFocus={this.scrollToTab.bind(this)}
      >
        {this.icon && this.renderIcon()}
        {this.orientation === "horizontal" && this.label}
      </button>
    );
  }
}

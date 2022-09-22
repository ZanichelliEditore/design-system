import {Component, Prop, h, Listen, Event, EventEmitter, Watch} from "@stencil/core";
import {NavigationTabsOrientations, NavigationTabsSizes} from "../../../../beans";
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
  orientation = NavigationTabsOrientations.HORIZONTAL;

  /**
   * Tab size. Do not set this manually: `z-navigation-tabs` will handle this.
   */
  @Prop({reflect: true})
  size = NavigationTabsSizes.BIG;

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
      this.orientation === NavigationTabsOrientations.HORIZONTAL
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
        disabled={this.disabled}
        title={this.htmlTitle}
        onFocus={this.scrollToTab.bind(this)}
      >
        {this.icon && this.renderIcon()}
        {this.orientation === NavigationTabsOrientations.HORIZONTAL && this.label}
      </button>
    );
  }
}

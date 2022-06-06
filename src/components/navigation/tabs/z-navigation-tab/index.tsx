import { Component, Prop, h, Element, Listen, Event, EventEmitter, Watch } from "@stencil/core";
import {
  NavigationTabsOrientations,
  NavigationTabsOrientation,
  NavigationTabsSizes,
  NavigationTabsSize
} from "../../../../beans";
import { icons } from "../../../icons/icons";

/**
 * Single tab component to use inside `z-navigation-tabs`. It renders a button.
 * @slot icon - Tab icon. If no extra customization is needed, use the `icon` prop passing the icon's name.
 */
@Component({
  tag: "z-navigation-tab",
  styleUrl: "../navigation-tab.css",
  shadow: true
})
export class ZNavigationTab {
  @Element() host: HTMLElement;

  /**
   * Whether the tab is selected.
   */
  @Prop({ mutable: true, reflect: true }) selected?: boolean = false;

  /**
   * Whether the tab is disabled.
   */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /**
   * Tab orientation. Do not set this manually: `z-navigation-tabs` will handle this.
   */
  @Prop({ reflect: true }) orientation: NavigationTabsOrientation = NavigationTabsOrientations.horizontal;

  /**
   * Tab size. Do not set this manually: `z-navigation-tabs` will handle this.
   */
  @Prop({ reflect: true }) size: NavigationTabsSize = NavigationTabsSizes.big;

  /**
   * Name of the icon to use. Use the slot `icon` for extra customization.
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

  @Event({ eventName: "selected" })
  private emitSelected: EventEmitter;

  @Listen("focus")
  onFocus() {
    this.host.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
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
      this.emitSelected.emit();
    }
  }

  /**
   * Render the icon component using the icon's name passed from prop.
   * Use the `filled` version when the tab is `selected`.
   * @returns {HTMLElement}
   */
  renderIcon() {
    let icon = this.icon;
    const iconFilled = `${icon.replace(/-filled$/, '')}-filled`;

    if (this.selected && Object.keys(icons).includes(iconFilled)) {
      icon = iconFilled;
    }

    return <z-icon name={icon}></z-icon>;
  }

  render() {
    return (
      <button role="tab" disabled={this.disabled} title={this.htmlTitle}>
        <slot name="icon">{this.icon && this.renderIcon()}</slot>
        {this.orientation === "horizontal" && this.label}
      </button>
    );
  }
}

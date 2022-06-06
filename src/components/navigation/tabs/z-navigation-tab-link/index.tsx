import {
  Component,
  Prop,
  h,
  Element,
  Listen,
  Event,
  EventEmitter,
  Watch,
} from "@stencil/core";
import {
  NavigationTabsOrientations,
  NavigationTabsOrientation,
  NavigationTabsSizes,
  NavigationTabsSize,
} from "../../../../beans";
import { icons } from "../../../icons/icons";

/**
 * Single tab component to use inside `z-navigation-tabs`. It renders an anchor element.
 * @slot icon - Tab icon. If no extra customization is needed, use the `icon` prop passing the icon's name.
 */
@Component({
  tag: "z-navigation-tab-link",
  styleUrls: ["../navigation-tab.css", "styles.css"],
  shadow: true,
})
export class ZNavigationTabLink {
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
  @Prop({ reflect: true }) orientation: NavigationTabsOrientation =
    NavigationTabsOrientations.horizontal;

  /**
   * Tab size. Do not set this manually: `z-navigation-tabs` will handle this.
   */
  @Prop({ reflect: true }) size: NavigationTabsSize = NavigationTabsSizes.big;

  /**
   * Html title attribute for the anchor element.
   */
  @Prop() htmlTitle: string;

  /**
   * Html `target` attribute for the anchor element.
   */
  @Prop() target: string;

  /**
   * Url to set to the anchor element.
   */
  @Prop() href: string;

  /**
   * Name of the icon to use. Use the slot `icon` for extra customization.
   * The `filled` version will be automatically used (if found) when the tab is `selected`.
   */
  @Prop() icon: string;

  /**
   * Label to show in the tab.
   */
  @Prop() label: string;

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
    this.selected = true;
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
      <a
        role="tab"
        href={!this.disabled && this.href}
        title={this.htmlTitle}
        target={this.target}
      >
        <slot name="icon">{this.icon && this.renderIcon()}</slot>
        {this.orientation === "horizontal" && this.label}
      </a>
    );
  }
}

import { Component, Prop, h, Element, Listen, Event, EventEmitter, Watch } from "@stencil/core";
import { NavigationTabsOrientations, NavigationTabsOrientation, NavigationTabsSizes, NavigationTabsSize } from '../../../../beans';

/**
 * Single tab component to use inside `z-navigation-tabs`. It renders an anchor element.
 * @slot icon - Tab icon
 * @slot label - Tab label
 */
@Component({
  tag: "z-navigation-tab-link",
  styleUrls: ['../navigation-tab.css', 'styles.css'],
  shadow: true
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
   * Tab orientation.
   */
  @Prop({ reflect: true }) orientation: NavigationTabsOrientation = NavigationTabsOrientations.horizontal;

  /**
   * Tab size.
   */
  @Prop({ reflect: true }) size: NavigationTabsSize = NavigationTabsSizes.big;

  /**
   * Html `title` attribute for the anchor element.
   */
  @Prop() title: string;

  /**
   * Html `target` attribute for the anchor element.
   */
  @Prop() target: string;

  /**
   * Url to set to the anchor element.
   */
  @Prop() href: string;

  @Event({ eventName: 'selected' })
  private emitSelected: EventEmitter;

  @Listen('focus')
  onFocus() {
    this.host.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest',
    });
  }

  @Listen('click')
  onClick() {
    this.selected = true;
  }

  @Watch('selected')
  onSelected() {
    if (this.selected) {
      this.emitSelected.emit();
    }
  }

  render() {
    return (
      <a
        role="tab"
        href={!this.disabled && this.href}
        title={this.title}
        target={this.target}
      >
        <slot name="icon"></slot>
        {this.orientation === "horizontal" && <slot name="label"></slot>}
      </a>
    );
  }
}

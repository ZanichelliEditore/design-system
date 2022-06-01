import { Component, Prop, h, Element, Listen, Event, EventEmitter, Watch } from "@stencil/core";
import { NavigationTabsOrientations, NavigationTabsOrientation, NavigationTabsSizes, NavigationTabsSize } from '../../../../beans';

/**
 * Single tab component to use inside `z-navigation-tabs`. It renders a button.
 * @slot icon - Tab icon
 * @slot label - Tab label
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
   * Tab orientation.
   */
  @Prop({ reflect: true }) orientation: NavigationTabsOrientation = NavigationTabsOrientations.horizontal;

  /**
   * Tab size.
   */
  @Prop({ reflect: true }) size: NavigationTabsSize = NavigationTabsSizes.big;

  /**
   * Html title attribute for the button.
   */
  @Prop() title: string;

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
    if (!this.disabled) {
      this.selected = true;
    }
  }

  @Watch('selected')
  onSelected() {
    if (this.selected) {
      this.emitSelected.emit();
    }
  }

  render() {
    return (
      <button role="tab" disabled={this.disabled} title={this.title}>
        <slot name="icon"></slot>
        {this.orientation === "horizontal" && <slot name="label"></slot>}
      </button>
    );
  }
}

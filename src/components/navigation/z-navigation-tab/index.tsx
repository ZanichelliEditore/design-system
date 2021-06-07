import { Component, Prop, h, Element, Listen, Event, EventEmitter, Watch } from "@stencil/core";

/**
 * @slot - tab label
 */

@Component({
  tag: "z-navigation-tab",
  styleUrl: "styles.css",
  shadow: true,
})

export class ZNavigationTab {
  @Element() hostElement: HTMLElement;

  @Prop({ reflect: true }) selected?: boolean = false;

  @Event({ eventName: 'selected' })
  private emitSelected: EventEmitter;

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
      <slot />
    );
  }
}

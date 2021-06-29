import { Component, Prop, h, Element, Listen, Event, EventEmitter, Watch } from "@stencil/core";

/**
 * @slot icon - tab icon
 * @slot label - tab label
 */
@Component({
  tag: "z-navigation-tab",
  styleUrl: "styles.css",
  shadow: true
})

export class ZNavigationTab {
  @Element() host: HTMLElement;

  @Prop({ mutable: true, reflect: true }) selected?: boolean = false;
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop({ reflect: true }) orientation: string = 'horizontal';
  @Prop({ reflect: true }) size: string = 'big';

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
    return <button disabled={this.disabled} role="tab">
      <slot name="icon"></slot>
      <slot name="label"></slot>
    </button>;
  }
}

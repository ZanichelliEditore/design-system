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

  @Prop({ mutable: true, reflect: true }) selected?: boolean = false;
  @Prop({ reflect: true }) disabled?: boolean = false;

  @Event({ eventName: 'selected' })
  private emitSelected: EventEmitter;

  @Listen('focus')
  onFocus() {
    this.hostElement.scrollIntoView({
      behavior: "smooth",
    });
  }

  @Listen('click')
  onClick() {
    if(!this.disabled){
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
    return [
      <button disabled={this.disabled} role="tab">
        <slot name="icon" />
        <slot name="label" />
      </button>
    ];
  }
}

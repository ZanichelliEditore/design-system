import { Component, Event, EventEmitter, h, Prop, State } from "@stencil/core";
import { ThemeVariant, ThemeVariantBean } from "../../../beans";

@Component({
  tag: "z-app-switcher",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZAppSwitcher {
  /** theme variant, default 'dark' */
  @Prop() theme?: ThemeVariantBean = ThemeVariant.dark;
  @State() isopen: boolean = false;

  constructor() {
    this.emitAppButtonClick = this.emitAppButtonClick.bind(this);
  }

  /** emitted on app button icon click, returns open/closed state */
  @Event() appButtonClick: EventEmitter;
  emitAppButtonClick() {
    this.isopen = !this.isopen;
    this.appButtonClick.emit({ isopen: this.isopen });
  }

  render() {
    return (
      <button title="app-switcher" onClick={() => this.emitAppButtonClick()}>
        <z-icon name="app-switcher" class={this.theme} />
      </button>
    );
  }
}

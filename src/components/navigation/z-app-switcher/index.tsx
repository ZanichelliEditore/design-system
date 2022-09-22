import {Component, Event, EventEmitter, h, Prop, State} from "@stencil/core";
import {ThemeVariant} from "../../../beans";

@Component({
  tag: "z-app-switcher",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZAppSwitcher {
  /** theme variant, default 'dark' */
  @Prop()
  theme?: ThemeVariant = ThemeVariant.DARK;

  @State()
  isopen = false;

  constructor() {
    this.emitAppButtonClick = this.emitAppButtonClick.bind(this);
  }

  /** emitted on app button icon click, returns open/closed state */
  @Event()
  appButtonClick: EventEmitter;

  private emitAppButtonClick(): void {
    this.isopen = !this.isopen;
    this.appButtonClick.emit({isopen: this.isopen});
  }

  render(): HTMLButtonElement {
    return (
      <button
        title="app-switcher"
        onClick={() => this.emitAppButtonClick()}
      >
        <z-icon
          name="app-switcher"
          class={this.theme}
        />
      </button>
    );
  }
}

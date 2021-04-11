import { Component, Event, EventEmitter, h, State } from "@stencil/core";

@Component({
  tag: "z-app-menu",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZAppMenu {
  @State() isopen: boolean = false;

  constructor() {
    this.emitAppButtonClick = this.emitAppButtonClick.bind(this);
  }

  /** emitted on app button icon click, returns open/cloed state */
  @Event() appButtonClick: EventEmitter;
  emitAppButtonClick() {
    this.isopen = !this.isopen;
    this.appButtonClick.emit({ isopen: this.isopen });
  }

  renderDots(num = 9) {
    const result = [];
    for (let index = 0; index < num; index++) {
      result.push(<span></span>);
    }
    return result;
  }

  render() {
    return (
      <button onClick={() => this.emitAppButtonClick()}>
        {this.renderDots()}
      </button>
    );
  }
}

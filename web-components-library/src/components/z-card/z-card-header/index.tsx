import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "z-card-header",
  styleUrls: ["../../../global-styles.css", "z-card-header.css"],
  shadow: true
})
export class ZCardHeader {
  @Prop() titolo: string;
  @Prop() icon: string;
  // @Prop() handleiconclick: (e: MouseEvent) => void;

  @Event() iconClick: EventEmitter;

  handleIconClick(e: MouseEvent) {
    this.iconClick.emit(e);
  }

  render() {
    return (
      <header>
        <h2>{this.titolo}</h2>
        <span onClick={(e: MouseEvent) => this.handleIconClick(e)}>
          <img src={this.icon} />
        </span>
      </header>
    );
  }
}

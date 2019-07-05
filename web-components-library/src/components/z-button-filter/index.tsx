import { Component, Prop, Event, EventEmitter, h } from "@stencil/core";

@Component({
  tag: "z-button-filter",
  styleUrl: "styles.css",
  shadow: true
})
export class ZButtonFilter {
  @Prop() filtername: string;
  @Prop() isfixed: boolean = false;
  @Prop() icon?: string;
  @Prop() filterid: string;
  @Event({
    eventName: "removefilter",
    composed: true,
    cancelable: true,
    bubbles: true
  })
  removefilter: EventEmitter;

  constructor() {
    this.handleRemovingFilterClick = this.handleRemovingFilterClick.bind(this);
  }

  handleRemovingFilterClick(): void {
    console.log("this.filterid: " + this.filterid);
    this.removefilter.emit({
      filterid: this.filterid
    });
  }

  render() {
    const filtername = this.filtername.toLowerCase();
    return (
      <button class="container">
        <span
          class="close-icon-container"
          onClick={this.handleRemovingFilterClick}
        />
        <span class="text-container">{filtername}</span>
      </button>
    );
  }
}

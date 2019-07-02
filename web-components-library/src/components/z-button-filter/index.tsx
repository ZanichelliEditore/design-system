import { Component, Prop, Event, EventEmitter, State, h } from "@stencil/core";

@Component({
  tag: "z-button-filter",
  styleUrl: "styles.css",
  shadow: true
})
export class ZButtonFilter {
  @Prop() labeltext: string;
  @Prop() componentid: string;
  @Event() disableFilter: EventEmitter;

  @State() isActive: boolean = true;

  constructor() {
    this.handleRemovingFilterClick = this.handleRemovingFilterClick.bind(this);
  }

  handleRemovingFilterClick(): void {
    console.log("this.componentid: " + this.componentid);
    this.isActive = false;
    this.disableFilter.emit();
  }

  renderElement() {
    const labeltext = this.labeltext.toLowerCase();
    return (
      <button class="container">
        <span
          class="close-icon-container"
          onClick={this.handleRemovingFilterClick}
        />{" "}
        <span class="text-container">{labeltext}</span>
      </button>
    );
  }

  render() {
    const isActive = this.isActive;
    return (
      <span id={this.componentid}>{isActive && this.renderElement()}</span>
    );
  }
}

import { Component, Prop, Event, EventEmitter, h } from "@stencil/core";

@Component({
  tag: "z-button-filter",
  styleUrl: "styles.css",
  shadow: true
})
export class ZButtonFilter {
  @Prop() labeltext: string;
  @Prop() fixed: boolean = false;
  @Prop() icon?: string;
  @Prop() componentid: string;
  @Event() disableFilter: EventEmitter;

  constructor() {
    this.handleRemovingFilterClick = this.handleRemovingFilterClick.bind(this);
  }

  handleRemovingFilterClick(): void {
    console.log("this.componentid: " + this.componentid);
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
    return <span id={this.componentid}>{this.renderElement()}</span>;
  }
}

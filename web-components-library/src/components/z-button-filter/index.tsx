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

  //@State() handleRemovingFilterClick: Function;

  constructor() {
    this.handleRemovingFilterClick = this.handleRemovingFilterClick.bind(this);
  }

  /* @Method()
  async settingRemoveFilterExternalHandler(externalFn: Function) {
    return Promise.resolve((this.handleRemovingFilterClick = externalFn));
  } */

  handleRemovingFilterClick(): void {
    console.log("this.componentid: " + this.componentid);
    this.disableFilter.emit(this.componentid);
  }

  /* renderElement() {
    const labeltext = this.labeltext.toLowerCase();
    return (
      <button class="container">
        <span
          class="close-icon-container"
          onClick={() => {
            this.handleRemovingFilterClick();
          }}
        />{" "}
        <span class="text-container">{labeltext}</span>
      </button>
    );
  } */

  render() {
    const labeltext = this.labeltext.toLowerCase();
    //return <span>{this.renderElement()}</span>;
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
}

import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-pagination-page",
  styleUrl: "styles.css",
  shadow: true
})
export class ZPaginationPage {
  /** anchor html id */
  @Prop() pageid: string;
  /** numeric page value (optional) */
  @Prop() value?: number;
  /** selected status flag */
  @Prop() isselected: boolean = false;
  /** disabled status flag */
  @Prop() isdisabled: boolean = false;
  /** visited status flag */
  @Prop() isvisited: boolean = false;

  page: HTMLElement;

  render() {
    return (
      <a
        id={this.pageid}
        ref={el => (this.page = el as HTMLElement)}
        class={`${this.isselected && "selected"} ${this.isdisabled &&
          "disabled"} ${this.isvisited && "visited"}`}
        tabindex={this.isdisabled ? -1 : 0}
        role="button"
      >
        {this.value}
      </a>
    );
  }
}

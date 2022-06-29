import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-pagination-page",
  styleUrl: "styles.css",
  shadow: true
})
export class ZPaginationPage {
  /** html id */
  @Prop() pageid: string;
  /** numeric page value (optional) */
  @Prop() value?: number;
  /** selected status flag */
  @Prop() isselected: boolean = false;
  /** disabled status flag */
  @Prop() isdisabled: boolean = false;
  /** visited status flag */
  @Prop() isvisited: boolean = false;
  /** aria-label string */
  @Prop() ariaLabel?: string;

  render() {
    return (
      <button
        id={this.pageid}
        aria-label={this.ariaLabel ? this.ariaLabel : `Go to page ${this.value}`}
        class={{ selected: this.isselected, visited: this.isvisited }}
        disabled={this.isdisabled}
        type="button"
      >
        {this.value}
      </button>
    );
  }
}

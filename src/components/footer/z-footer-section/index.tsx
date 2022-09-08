import {Component, Prop, h, State} from "@stencil/core";

/**
 * @slot - section content
 */
@Component({
  tag: "z-footer-section",
  styleUrls: ["styles.css"],
  shadow: true,
})
export class ZFooterSection {
  /** section title */
  @Prop() name: string;

  @State() isOpen = false;

  renderToggleButton(): HTMLButtonElement {
    return (
      <button
        class="toggleButton"
        onClick={() => (this.isOpen = !this.isOpen)}
      >
        <z-icon
          name={this.isOpen ? "chevron-up" : "chevron-down"}
          width={16}
          height={16}
        />
      </button>
    );
  }

  render(): HTMLElement {
    return (
      <nav>
        <div class="header">
          <h2>{this.name}</h2>
          {this.renderToggleButton()}
        </div>
        <div class={`content ${this.isOpen ? "show" : ""}`}>
          <slot />
        </div>
      </nav>
    );
  }
}

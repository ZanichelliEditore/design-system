import { Component, Prop, h, Listen } from "@stencil/core";
import { ButtonVariantEnum } from "../../../beans";

/**
 * @slot  - generic card slot
 * @slot info - dictionary info
 */
@Component({
  tag: "z-card-dictionary",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardDictionary {
  @Prop() name: string;
  @Prop() cover: string;
  @Prop() disabled: boolean = false;
  @Prop({ mutable: true }) flipped: boolean = false;

  @Listen("closeInfo")
  handleToggle(): void {
    this.flipped = false;
  }

  renderFront() {
    return (
      <div class="front">
        <z-card>
          {this.renderHeader()}
          <z-card-body>
            <z-card-cover
              slot="cover"
              titolo={this.name}
              img={this.cover}
              faded={this.disabled}
            />
          </z-card-body>
          <slot />
        </z-card>

        <z-button
          variant={ButtonVariantEnum.secondary}
          icon="informationsource"
          issmall={true}
          onClick={() => (this.flipped = true)}
        >
          INFO
        </z-button>
      </div>
    );
  }

  renderBack() {
    return (
      <div class="back">
        <z-card>
          {this.renderHeader()}
          <z-card-body />
          <div class="info">
            <slot name="back-info" />
          </div>
          <slot name="back-footer" />
        </z-card>
      </div>
    );
  }

  renderHeader() {
    return <z-card-header titolo={this.name}></z-card-header>;
  }

  render() {
    return (
      <div class={this.flipped ? "flipped" : ""}>
        {this.renderFront()}
        {this.renderBack()}
      </div>
    );
  }
}

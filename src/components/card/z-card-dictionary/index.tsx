import { Component, Prop, h, Listen, Event, EventEmitter } from "@stencil/core";
import { ButtonVariantEnum } from "../../../beans";

/**
 * @slot  - generic card slot
 * @slot info - flipped card info
 */
@Component({
  tag: "z-card-dictionary",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardDictionary {
  /** card title */
  @Prop() name: string;
  /** card cover */
  @Prop() cover: string;
  /** card is disabled */
  @Prop() disabled: boolean = false;
  /** card is flipped */
  @Prop({ mutable: true }) flipped: boolean = false;
  /** flip button label */
  @Prop() flipbuttonlabel: string = "INFO";

  @Listen("flipCard")
  handleFlipCard(e: CustomEvent) {
    this.flipCard(e.detail);
  }

  /** when card is flipped */
  @Event() cardFlipped: EventEmitter;
  flipCard(showBack: boolean = true): void {
    this.flipped = showBack;
    this.cardFlipped.emit(showBack);
  }

  render() {
    return (
      <div>
        <z-card>
          <z-card-header titolo={this.name}></z-card-header>
          <div class={`content ${this.flipped ? "flipped" : ""}`}>
            <div class="front">
              <z-card-body>
                <z-card-cover
                  slot="cover"
                  titolo={this.name}
                  img={this.cover}
                  faded={this.disabled}
                />
              </z-card-body>
              <z-button
                variant={ButtonVariantEnum.secondary}
                icon="informationsource"
                issmall={true}
                onClick={() => this.flipCard(true)}
                disabled={this.flipped}
              >
                {this.flipbuttonlabel}
              </z-button>
            </div>
            <div class="back">
              <slot name="info" />
            </div>
          </div>
          <slot />
        </z-card>
      </div>
    );
  }
}

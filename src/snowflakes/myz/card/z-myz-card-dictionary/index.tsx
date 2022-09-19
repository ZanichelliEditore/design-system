import {Component, Prop, h, Listen, Event, EventEmitter} from "@stencil/core";
import {ButtonSizeEnum, ButtonVariantEnum} from "../../../../beans";

/**
 * @slot  - generic card slot
 * @slot info - flipped card info
 */
@Component({
  tag: "z-myz-card-dictionary",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZMyzCardDictionary {
  /** card title */
  @Prop() name: string;
  /** card cover */
  @Prop() cover: string;
  /** card is disabled */
  @Prop() disabled = false;
  /** card is flipped */
  @Prop({mutable: true}) flipped = false;
  /** flip button label */
  @Prop() flipbuttonlabel = "INFO";
  /** hide info button */
  @Prop() hideinfobtn = false;

  @Listen("flipCard")
  handleFlipCard(e: CustomEvent): void {
    this.flipCard(e.detail);
  }

  /** when card is flipped */
  @Event() cardFlipped: EventEmitter;
  flipCard(showBack = true): void {
    this.flipped = showBack;
    this.cardFlipped.emit(showBack);
  }

  render(): HTMLDivElement {
    return (
      <div>
        <z-myz-card>
          <z-myz-card-header titolo={this.name}></z-myz-card-header>
          <div class={`content ${this.flipped ? "flipped" : ""}`}>
            <div class="front">
              <z-myz-card-body>
                <z-myz-card-cover
                  slot="cover"
                  titolo={this.name}
                  img={this.cover}
                  faded={this.disabled}
                />
              </z-myz-card-body>
              <z-button
                class={this.hideinfobtn ? "hideInfo" : ""}
                variant={ButtonVariantEnum.secondary}
                icon="informationsource"
                size={ButtonSizeEnum["x-small"]}
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
        </z-myz-card>
      </div>
    );
  }
}

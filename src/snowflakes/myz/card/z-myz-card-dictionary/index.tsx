import {Component, Event, EventEmitter, Listen, Prop, h} from "@stencil/core";
import {ButtonSize, ButtonVariant} from "../../../../beans";

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
  @Prop()
  name: string;

  /** card cover */
  @Prop()
  cover: string;

  /** card is disabled */
  @Prop()
  disabled = false;

  /** card is flipped */
  @Prop({mutable: true})
  flipped = false;

  /** flip button label */
  @Prop()
  flipbuttonlabel = "INFO";

  /** hide info button */
  @Prop()
  hideinfobtn = false;

  @Listen("flipCard")
  handleFlipCard(e: CustomEvent): void {
    this.flipCard(e.detail);
  }

  /** when card is flipped */
  @Event()
  cardFlipped: EventEmitter;

  private flipCard(showBack = true): void {
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
                class={{"hide-info": this.hideinfobtn}}
                variant={ButtonVariant.SECONDARY}
                icon="informationsource"
                size={ButtonSize.X_SMALL}
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

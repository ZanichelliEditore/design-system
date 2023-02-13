import {Component, Element, h, Host, Prop} from "@stencil/core";

@Component({
  tag: "z-table-empty-box",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZTableEmptyBox {
  @Element() hostElement: HTMLZTableEmptyBoxElement;

  /** Sets main title message*/
  @Prop()
  message?: string = "Siamo spiacenti, al momento non sono presenti dati da visualizzare.";

  /** Sets message */
  @Prop()
  subtitle?: string = "";

  /** Checks if cta1 or cta2 slots exist */
  private hasCta1Slot: boolean;

  private hasCta2Slot: boolean;

  componentWillLoad(): void {
    this.hasCta1Slot = !!this.hostElement.querySelector('[slot="cta1"]');
    this.hasCta2Slot = !!this.hostElement.querySelector('[slot="cta2"]');
  }

  render(): HTMLZTableEmptyBoxElement {
    return (
      <Host>
        <span class="body-3-sb">{this.message}</span>
        <br />
        {!!this.subtitle && <span class="body-4">{this.subtitle}</span>}
        {(!!this.hasCta1Slot || !!this.hasCta2Slot) && (
          <div
            class={{
              "cta": true,
              "has-2-cta": !!this.hasCta1Slot && !!this.hasCta2Slot,
            }}
          >
            <slot name="cta1"></slot>
            <slot name="cta2"></slot>
          </div>
        )}
      </Host>
    );
  }
}

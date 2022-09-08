import {Component, Element, h, Host, Prop} from "@stencil/core";
import classNames from "classnames";

@Component({
  tag: "z-table-empty-box",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZTableEmptyBox {
  @Element() hostElement: HTMLElement;

  /** Sets main title message*/
  @Prop() message?: string = "Siamo spiacenti, al momento non sono presenti dati da visualizzare.";

  /** Sets message */
  @Prop() subtitle?: string = "";

  /** Checks if cta1 or cta2 slots exist */
  hasCta1Slot: boolean;
  hasCta2Slot: boolean;

  componentWillLoad() {
    this.hasCta1Slot = !!this.hostElement.querySelector('[slot="cta1"]');
    this.hasCta2Slot = !!this.hostElement.querySelector('[slot="cta2"]');
  }

  render() {
    return (
      <Host>
        <z-body
          level={3}
          variant={"semibold"}
        >
          {this.message}
        </z-body>
        <br />
        {!!this.subtitle && (
          <z-body
            level={4}
            variant={"regular"}
          >
            {this.subtitle}
          </z-body>
        )}
        {(!!this.hasCta1Slot || !!this.hasCta2Slot) && (
          <div
            class={classNames("cta", {
              has2Cta: !!this.hasCta1Slot && !!this.hasCta2Slot,
            })}
          >
            <slot name="cta1"></slot>
            <slot name="cta2"></slot>
          </div>
        )}
      </Host>
    );
  }
}

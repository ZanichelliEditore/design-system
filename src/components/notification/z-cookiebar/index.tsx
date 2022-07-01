import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";
import { ButtonVariantEnum } from "../../../beans";

@Component({
  tag: "z-cookiebar",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZCookiebar {
  /** cookie policy link url  */
  @Prop() cookiepolicyurl: string;
  /** hide cookie bar (optional)  */
  @Prop() hide?: boolean;
  /** callback to handle ok button action (optional) */
  @Prop() callback?: () => any;

  /** emitted on ACCETTA button click, returns event */
  @Event() accept: EventEmitter;
  emitAccept(ev: MouseEvent | KeyboardEvent) {
    this.accept.emit({ ev });
  }

  handleOkButtonClick(ev: MouseEvent) {
    this.emitAccept(ev);
    if (typeof this.callback === "function") {
      this.callback();
    }
  }

  handleOkButtonKeyUp(ev: KeyboardEvent) {
    this.emitAccept(ev);
    if (ev.code === "Enter") {
      if (
        typeof this.callback !== "undefined" &&
        typeof this.callback === "function"
      ) {
        this.callback();
      }
    }
  }

  renderContentSlot() {
    return (
      <div class="content" slot="content">
        <div>
          <h2>Su questo sito usiamo i cookie.</h2>
          <div>
            <p>
              Se continui a navigare ci permetti di farlo secondo le regole
              spiegate nella nostra informativa sulla privacy relativa ai &nbsp;
              <a href={this.cookiepolicyurl} target="_blank">
                cookie
              </a>
              .
            </p>
          </div>
        </div>
        <z-button-deprecated
          variant={ButtonVariantEnum.primary}
          onClick={(ev: MouseEvent) => this.handleOkButtonClick(ev)}
          onKeyUp={(ev: KeyboardEvent) => this.handleOkButtonKeyUp(ev)}
        >
          ACCETTA
        </z-button-deprecated>
      </div>
    );
  }
  render() {
    return (
      <z-candybar class={`${this.hide ? "hidden" : ""}`}>
        {this.renderContentSlot()}
      </z-candybar>
    );
  }
}

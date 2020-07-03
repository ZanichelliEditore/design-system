import { Component, Prop, h, State, Listen } from "@stencil/core";
import { LicenseTypeEnum } from "../../../beans/index";

/**
 * @slot toggle - toggle button slot
 * @slot list - card resources list slot
 */
@Component({
  tag: "z-card-footer",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardFooter {
  /** volume title */
  @Prop() titolo: string;
  /** authors label text */
  @Prop() autorilabel: string = "Autore";
  /** authors name text */
  @Prop() autori: string;
  /** volume isbn */
  @Prop() isbn: string;
  /** faded status */
  @Prop() faded: boolean;
  /** card graphic variant (optional) */
  @Prop() cardtype?: LicenseTypeEnum;

  @State() isOpen: boolean = false;

  @Listen("toggleClick")
  handleToggle(): void {
    this.isOpen = !this.isOpen;
  }

  retrieveClass() {
    return {
      isopen: this.isOpen,
      real: this.cardtype === LicenseTypeEnum.real,
      trial: this.cardtype === LicenseTypeEnum.trial
    };
  }

  render() {
    return (
      <div class={this.faded && "faded"}>
        <footer class={this.retrieveClass()}>
          <span class="toggle">
            <slot name="toggle" />
          </span>
          <h2>{this.titolo}</h2>
          <div>
            <p class="authors">
              {this.autorilabel}: <b>{this.autori}</b>
            </p>
            <p class="year_isbn">
              <span class="isbn">
                ISBN (ed. cartacea): <b>{this.isbn}</b>
              </span>
            </p>
          </div>
          <div class={`slot-handler ${this.isOpen ? 'visible' : 'hidden'}`}>
            <slot name="list" />
          </div>
        </footer>
      </div>
    );
  }
}

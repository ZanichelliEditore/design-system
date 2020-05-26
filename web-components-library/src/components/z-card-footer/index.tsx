import { Component, Prop, h, State, Listen } from "@stencil/core";
import { LicenseTypeEnum } from "../../beans/index";

/**
 * @slot toggle - toggle button slot
 * @slot list - card resources list slot
 */
@Component({
  tag: "z-card-footer",
  styleUrl: "styles.css",
  shadow: true,
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
    let elemClasses = "";

    if (this.isOpen) elemClasses += "isopen ";
    if (this.cardtype === LicenseTypeEnum.real) elemClasses += "real";

    return elemClasses;
  }

  render() {
    return (
      <div class={this.faded && "faded"}>
        <footer class={this.retrieveClass()}>
          <span class="toggle">
            <slot name="toggle" />
          </span>
          <h2 class={this.retrieveClass()}>{this.titolo}</h2>
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
          {this.isOpen && <slot name="list" />}
        </footer>
      </div>
    );
  }
}

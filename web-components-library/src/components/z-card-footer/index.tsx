import { Component, Prop, h, State, Listen } from "@stencil/core";
import { LicenseTypeEnum } from "../../beans/index";

@Component({
  tag: "z-card-footer",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardFooter {
  @Prop() titolo: string;
  @Prop() autorilabel: string = "Autore";
  @Prop() autori: string;
  @Prop() anno: number;
  @Prop() annolabel: string = "Edizione";
  @Prop() isbn: string;
  @Prop() faded: boolean;
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
      <div class={this.faded && 'faded'}>
        <footer class={this.retrieveClass()}>
          <span class="toggle">
            <slot name="toggle" />
          </span>
          <h2 class={this.retrieveClass()}>{this.titolo}</h2>
          <div>
            <p>
              {this.autorilabel}: <b>{this.autori}</b>
            </p>
            <p>
              <span class="year">
                {this.annolabel}: <b>{this.anno}</b>
              </span>
              <span class="isbn">
                ISBN: <b>{this.isbn}</b>
              </span>
            </p>
          </div>
          <slot name="list" />
        </footer>
      </div>
    );
  }
}

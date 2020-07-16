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

  @State() allowTooltipAuthors: boolean = false;
  @State() allowTooltipIsbn: boolean = false;

  private footer?: HTMLElement;
  private ellipsisAuthors?: HTMLElement;
  private ellipsisIsbn?: HTMLElement;

  @Listen("toggleClick")
  handleToggle(): void {
    this.isOpen = !this.isOpen;
  }

  getTitleAuthors(): string {
    return this.allowTooltipAuthors ? this.autori : "";
  }

  getTitleIsbn(): string {
    return this.allowTooltipIsbn ? this.isbn : "";
  }

  componentDidLoad() {
    this.footer.ontransitionend = event => {
      if (["visibility", "height"].includes(event.propertyName))
        this.elementsEllipsis();
    };
  }

  elementsEllipsis(): void {
    this.allowTooltipAuthors = this.elementAuthorsHasEllipsis() ? true : false;
    this.allowTooltipIsbn = this.elementIsbnHasEllipsis() ? true : false;
  }

  elementAuthorsHasEllipsis(): boolean {
    return this.ellipsisAuthors.offsetWidth < this.ellipsisAuthors.scrollWidth;
  }

  elementIsbnHasEllipsis(): boolean {
    return this.ellipsisIsbn.offsetWidth < this.ellipsisIsbn.scrollWidth;
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
        <footer
          ref={el => (this.footer = el as HTMLElement)}
          class={this.retrieveClass()}
        >
          <span class="toggle">
            <slot name="toggle" />
          </span>
          <h2>{this.titolo}</h2>
          <div>
            <p
              class="authors"
              ref={el => (this.ellipsisAuthors = el as HTMLElement)}
            >
              {this.autorilabel}:
              <span title={this.getTitleAuthors()}>
                <b> {this.autori}</b>
              </span>
            </p>
            <p class="year_isbn">
              <span
                class="isbn"
                ref={el => (this.ellipsisIsbn = el as HTMLElement)}
              >
                ISBN (ed. cartacea):
                <span title={this.getTitleIsbn()}>
                  <b> {this.isbn}</b>
                </span>
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

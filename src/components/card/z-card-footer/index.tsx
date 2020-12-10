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
  /** authors name text */
  @Prop() autori: string;
  /** volume isbn */
  @Prop() isbn: string;
  /** faded status */
  @Prop() faded: boolean;
  /** card graphic variant (optional) */
  @Prop() cardtype?: LicenseTypeEnum;

  @Prop() opened?: boolean = false;

  @State() isOpen: boolean = false;

  @State() allowTooltipAuthors: boolean = false;

  private footer?: HTMLElement;
  private ellipsisAuthors?: HTMLElement;

  @Listen("toggleClick")
  handleToggle(): void {
    this.isOpen = !this.isOpen;
  }

  getTitleAuthors(): string {
    return this.allowTooltipAuthors ? this.autori : "";
  }

  componentDidLoad() {
    this.footer.ontransitionend = event => {
      if (["visibility", "height"].includes(event.propertyName))
        this.elementsEllipsis();
    };

    if (this.opened) this.isOpen = true;
  }

  elementsEllipsis(): void {
    this.allowTooltipAuthors = this.elementAuthorsHasEllipsis() ? true : false;
  }

  elementAuthorsHasEllipsis(): boolean {
    return this.ellipsisAuthors.offsetWidth < this.ellipsisAuthors.scrollWidth;
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
              <span title={this.getTitleAuthors()}>
                <b>{this.autori}</b>
              </span>
            </p>
            <p class="year_isbn">
              <span class="isbn">
                <span>
                  <b>{this.isbn}</b> (ed. cartacea)
                </span>
              </span>
            </p>
          </div>
          <div class={`slot-handler ${this.isOpen ? "visible" : "hidden"}`}>
            <slot name="list" />
          </div>
        </footer>
      </div>
    );
  }
}

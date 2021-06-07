import { Component, Prop, h, State, Listen } from "@stencil/core";
import { LicenseTypeEnum } from "../../../../beans/index";

/**
 * @slot toggle - toggle button slot
 * @slot list - card resources list slot
 */
@Component({
  tag: "z-myz-card-footer",
  styleUrl: "styles.css",
  shadow: true
})
export class ZMyzCardFooter {
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

  @State() isOpen: boolean = false;

  @State() allowTooltipAuthors: boolean = false;

  private ellipsisAuthors?: HTMLElement;

  @Listen("toggleClick")
  handleToggle(): void {
    this.isOpen = !this.isOpen;
  }

  getTitleAuthors(): string {
    return this.allowTooltipAuthors ? this.autori : "";
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

  footerTransitionHandler(e: TransitionEvent) {
    if (["visibility", "height"].includes(e.propertyName)) {
      this.elementsEllipsis();
    }
  }

  render() {
    return (
      <div class={this.faded && "faded"}>
        <footer
          class={this.retrieveClass()}
          onTransitionEnd={(e: TransitionEvent) =>
            this.footerTransitionHandler(e)
          }
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
                <span class="bold">{this.autori}</span>
              </span>
            </p>
            <p class="year_isbn">
              <span class="isbn">
                <span>
                  <span class="bold">{this.isbn}</span> (ed. cartacea)
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

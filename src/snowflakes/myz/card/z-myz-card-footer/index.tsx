import {Component, Prop, h, State, Listen} from "@stencil/core";
import {LicenseTypeEnum} from "../../../../beans/index";

/**
 * @slot toggle - toggle button slot
 * @slot list - card resources list slot
 */
@Component({
  tag: "z-myz-card-footer",
  styleUrl: "styles.css",
  shadow: true,
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
  /** footer opened by default (optional) */
  @Prop() opened?: boolean = false;
  /** display footer custom slotted content */
  @Prop() customContent: boolean = false;

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

  componentWillLoad() {
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
      trial: this.cardtype === LicenseTypeEnum.trial,
      temp: this.cardtype === LicenseTypeEnum.temp,
      customContent: this.customContent,
    };
  }

  footerTransitionHandler(e: TransitionEvent) {
    if (["visibility", "height"].includes(e.propertyName)) {
      this.elementsEllipsis();
    }
  }

  render() {
    return (
      <div class={{...this.retrieveClass(), wrapper: true}}>
        <footer
          class={this.retrieveClass()}
          onTransitionEnd={(e: TransitionEvent) => this.footerTransitionHandler(e)}
        >
          <span class="toggle">
            <slot name="toggle" />
          </span>
          {this.titolo && <p class={{customContent: this.customContent}}>{this.titolo}</p>}
          <div class={{content: true, customContent: this.customContent}}>
            <div>
              <p
                class="authors"
                ref={(el) => (this.ellipsisAuthors = el as HTMLElement)}
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
          </div>
        </footer>
        {this.customContent && <slot name="content" />}
      </div>
    );
  }
}

import {Component, Element, Listen, Prop, State, h} from "@stencil/core";
import {JSXBase} from "@stencil/core/internal";
import {LicenseType} from "../../../../beans/index";

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
  @Element() host: HTMLZMyzCardFooterElement;

  /** volume title */
  @Prop()
  titolo: string;

  /** authors name text */
  @Prop()
  autori: string;

  /** volume isbn */
  @Prop()
  isbn: string;

  /** faded status */
  @Prop()
  faded: boolean;

  /** card graphic variant (optional) */
  @Prop()
  cardtype?: LicenseType;

  /** footer opened by default (optional) */
  @Prop()
  opened?: boolean = false;

  /** display footer custom slotted content */
  @Prop()
  customContent = false;

  @State()
  isOpen = false;

  @State()
  allowTooltipAuthors = false;

  private ellipsisAuthors?: HTMLElement;

  @Listen("toggleClick")
  handleToggle(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      const firstElem = this.getFirstListItem();
      if (firstElem) {
        requestAnimationFrame(() => {
          firstElem.focus();
        });
      }
    }
  }

  private getTitleAuthors(): string {
    return this.allowTooltipAuthors ? this.autori : "";
  }

  componentWillLoad(): void {
    if (this.opened) {
      this.isOpen = true;
    }
  }

  private elementsEllipsis(): void {
    this.allowTooltipAuthors = this.elementAuthorsHasEllipsis() ? true : false;
  }

  private elementAuthorsHasEllipsis(): boolean {
    return this.ellipsisAuthors.offsetWidth < this.ellipsisAuthors.scrollWidth;
  }

  private retrieveClass(): JSXBase.HTMLAttributes["class"] {
    return {
      "isopen": this.isOpen,
      "real": this.cardtype === LicenseType.REAL,
      "trial": this.cardtype === LicenseType.TRIAL,
      "temp": this.cardtype === LicenseType.TEMP,
      "custom-content": this.customContent,
    };
  }

  private footerTransitionHandler(e: TransitionEvent): void {
    if (["visibility", "height"].includes(e.propertyName)) {
      this.elementsEllipsis();
    }
  }

  private getFirstListItem(): HTMLElement {
    return this.host.querySelector("[slot=list] > li a");
  }

  render(): HTMLDivElement {
    return (
      <div class={{...(this.retrieveClass() as Record<string, boolean>), wrapper: true}}>
        <footer
          class={this.retrieveClass()}
          onTransitionEnd={(e: TransitionEvent) => this.footerTransitionHandler(e)}
        >
          <span class="toggle">
            <slot name="toggle" />
          </span>
          {this.titolo && <p class={{"custom-content": this.customContent}}>{this.titolo}</p>}
          <div class={{"content": true, "custom-content": this.customContent}}>
            <div>
              <p
                class="authors"
                ref={(el) => (this.ellipsisAuthors = el as HTMLElement)}
              >
                <span title={this.getTitleAuthors()}>
                  <span
                    aria-description="Autori"
                    class="bold"
                  >
                    {this.autori}
                  </span>
                </span>
              </p>
              <p class="year-isbn">
                <span class="isbn">
                  <span>
                    <span
                      aria-description="ISBN edizione cartacea"
                      class="bold"
                    >
                      {this.isbn}
                    </span>{" "}
                    (ed. cartacea)
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

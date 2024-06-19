import {Component, Event, EventEmitter, Prop, State, h} from "@stencil/core";
import {DictionaryData, PopoverPosition} from "../../../../beans";
import {handleKeyboardSubmit} from "../../../../utils/utils";

/**
 * @slot  - content
 */
@Component({
  tag: "z-myz-card-info",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZMyzCardInfo {
  /** dictionary info */
  @Prop()
  data: string | DictionaryData;

  /** tabindex link attribute (optional) */
  @Prop()
  htmltabindex?: number = 0;

  @State()
  hiddenContent = false;

  @State()
  tooltip = false;

  private cardData: DictionaryData;

  private contentWrapper: HTMLElement;

  private infoWrapper: HTMLElement;

  private onlineLicenseWrapper: HTMLElement;

  private offlineLicenseWrapper: HTMLElement;

  /** flip card to front */
  @Event()
  flipCard: EventEmitter;

  private emitFlipCard(showBack = false): void {
    this.flipCard.emit(showBack);
  }

  constructor() {
    this.emitFlipCard = this.emitFlipCard.bind(this);
  }

  componentWillLoad(): void {
    this.setStringOrArray();
  }

  componentWillUpdate(): void {
    this.setStringOrArray();
  }

  componentDidRender(): void {
    this.handleContentHeight();
  }

  private handleContentHeight(): void {
    if (!this.contentWrapper && !this.infoWrapper) {
      this.hiddenContent = false;

      return;
    }

    if (
      this.contentWrapper.scrollHeight > this.contentWrapper.offsetHeight ||
      this.infoWrapper.scrollHeight > this.infoWrapper.offsetHeight
    ) {
      const height =
        this.contentWrapper.offsetHeight -
        this.onlineLicenseWrapper.offsetHeight -
        this.offlineLicenseWrapper.offsetHeight;
      this.infoWrapper.style.height = `${height}px`;
      this.hiddenContent = true;

      return;
    }

    this.hiddenContent = false;
  }

  private setStringOrArray(): void {
    if (typeof this.data === "string") {
      this.cardData = JSON.parse(this.data);
    } else {
      this.cardData = this.data;
    }
  }

  private renderCloseIcon(): HTMLZIconElement {
    return (
      <z-icon
        name="multiply-circled-filled"
        height={18}
        width={18}
        onClick={() => this.emitFlipCard(false)}
        tabindex={this.htmltabindex}
        onKeyUp={(e: KeyboardEvent) => {
          handleKeyboardSubmit(e, this.emitFlipCard, false);
        }}
      />
    );
  }

  private renderGeneralSection(): HTMLElement {
    const title = this?.cardData?.title;
    const description = this?.cardData?.description;

    return (
      <section
        class={`info-wrapper ${this.hiddenContent ? "hidden" : ""}`}
        onClick={() => {
          if (this.hiddenContent) {
            this.tooltip = !this.tooltip;
          }
        }}
        ref={(el) => (this.infoWrapper = el)}
      >
        {this.renderAuthor()}
        {this.renderYear()}
        {title}
        <br />
        {description}
      </section>
    );
  }

  private renderAuthor(): HTMLSpanElement {
    const author = this?.cardData?.author;
    if (!author) {
      return null;
    }

    return (
      <span>
        Autore: <b>{author}</b>
        <br />
      </span>
    );
  }

  private renderYear(): HTMLSpanElement {
    const year = this?.cardData?.year;
    if (!year) {
      return null;
    }

    return (
      <span>
        Anno: <b>{year}</b>
        <br />
      </span>
    );
  }

  private renderTooltip(): HTMLZPopoverElement {
    if (!this.tooltip) {
      return;
    }

    if (!this.cardData) {
      return;
    }
    const {title, year, author, description} = this.cardData;

    return (
      <z-popover
        position={PopoverPosition.RIGHT}
        onClick={() => (this.tooltip = false)}
      >
        {`${title} ${year} ${author} ${description}`}
      </z-popover>
    );
  }

  private setExpirationLicenseMessage(type: string): HTMLSpanElement {
    if (
      (type === "online" && this.cardData.onlineLicense.expired) ||
      (type === "offline" && this.cardData.offlineLicense.expired)
    ) {
      return <span class="expired">SCADUTA</span>;
    }

    if (
      (type === "online" && this.cardData.onlineLicense.expiring) ||
      (type === "offline" && this.cardData.offlineLicense.expiring)
    ) {
      return <span class="expiring">IN SCADENZA</span>;
    }
  }

  private renderOnlineLicenseSection(): HTMLElement {
    if (!this?.cardData?.onlineLicense) {
      return;
    }

    return (
      <section ref={(el) => (this.onlineLicenseWrapper = el)}>
        <span class="license-heading">
          <span>Licenza online</span>
          {this.setExpirationLicenseMessage("online")}
        </span>
        Scadenza il <b>{this.cardData.onlineLicense.expiration}</b>
        <br />
      </section>
    );
  }

  private renderOfflineLicenseSection(): HTMLElement {
    if (!this?.cardData?.offlineLicense) {
      return;
    }

    return (
      <section ref={(el) => (this.offlineLicenseWrapper = el)}>
        <span class="license-heading">
          <span>Licenza offline</span>
          {this.setExpirationLicenseMessage("offline")}
        </span>
        Scadenza il <b>{this.cardData.offlineLicense.expiration}</b>
        <br />
        Installazioni disponibili: <b>{this.cardData.offlineLicense.installations}</b>
      </section>
    );
  }

  render(): HTMLDivElement {
    return (
      <div>
        {this.renderCloseIcon()}
        <div
          class="content-wrapper"
          ref={(el) => (this.contentWrapper = el)}
        >
          {this.renderGeneralSection()}
          {this.renderTooltip()}
          {this.renderOnlineLicenseSection()}
          {this.renderOfflineLicenseSection()}
        </div>
        <div class="cta-wrapper">
          <slot />
        </div>
      </div>
    );
  }
}

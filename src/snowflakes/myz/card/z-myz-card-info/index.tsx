import { Component, Prop, h, Event, EventEmitter, State } from "@stencil/core";
import { DictionaryData, PopoverPositions } from "../../../../beans";
import { handleKeyboardSubmit } from "../../../../utils/utils";

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
  @Prop() data: string | DictionaryData;
  /** tabindex link attribute (optional) */
  @Prop() htmltabindex?: number = 0;

  @State() hiddenContent: boolean = false;
  @State() tooltip: boolean = false;

  private cardData: DictionaryData;

  private contentWrapper: HTMLElement;
  private infoWrapper: HTMLElement;
  private onlineLicenseWrapper: HTMLElement;
  private offlineLicenseWrapper: HTMLElement;

  /** flip card to front */
  @Event() flipCard: EventEmitter;
  emitFlipCard(showBack: boolean = false) {
    this.flipCard.emit(showBack);
  }

  constructor() {
    this.emitFlipCard = this.emitFlipCard.bind(this);
  }

  componentWillLoad() {
    this.setStringOrArray();
  }

  componentWillUpdate() {
    this.setStringOrArray();
  }

  componentDidRender() {
    this.handleContentHeight();
  }

  handleContentHeight() {
    if (!this.contentWrapper && !this.infoWrapper)
      return (this.hiddenContent = false);

    if (
      this.contentWrapper.scrollHeight > this.contentWrapper.offsetHeight ||
      this.infoWrapper.scrollHeight > this.infoWrapper.offsetHeight
    ) {
      const height =
        this.contentWrapper.offsetHeight -
        this.onlineLicenseWrapper.offsetHeight -
        this.offlineLicenseWrapper.offsetHeight;
      this.infoWrapper.style.height = `${height}px`;
      return (this.hiddenContent = true);
    }

    return (this.hiddenContent = false);
  }

  setStringOrArray() {
    if (typeof this.data === "string") {
      this.cardData = JSON.parse(this.data);
    } else {
      this.cardData = this.data;
    }
  }

  renderCloseIcon() {
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

  renderGeneralSection() {
    const title = this?.cardData?.title;
    const description = this?.cardData?.description;

    return (
      <section
        class={`info-wrapper ${this.hiddenContent ? "hidden" : ""}`}
        onClick={() => {
          if (this.hiddenContent) this.tooltip = !this.tooltip;
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

  renderAuthor() {
    const author = this?.cardData?.author;
    if (!author) return null;

    return (
      <span>
        Autore: <b>{author}</b>
        <br />
      </span>
    );
  }

  renderYear() {
    const year = this?.cardData?.year;
    if (!year) return null;

    return (
      <span>
        Anno: <b>{year}</b>
        <br />
      </span>
    );
  }

  renderTooltip() {
    if (!this.tooltip) return;

    if (!this.cardData) return;
    const { title, year, author, description } = this.cardData!;

    return (
      <z-popover
        position={PopoverPositions.RIGHT}
        onClick={() => (this.tooltip = false)}
      >
        {`${title} ${year} ${author} ${description}`}
      </z-popover>
    );
  }

  setExpirationLicenseMessage(type: string) {
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

  renderOnlineLicenseSection() {
    if (!this?.cardData?.onlineLicense) return;

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

  renderOfflineLicenseSection() {
    if (!this?.cardData?.offlineLicense) return;

    return (
      <section ref={(el) => (this.offlineLicenseWrapper = el)}>
        <span class="license-heading">
          <span>Licenza offline</span>
          {this.setExpirationLicenseMessage("offline")}
        </span>
        Scadenza il <b>{this.cardData.offlineLicense.expiration}</b>
        <br />
        Installazioni disponibili:{" "}
        <b>{this.cardData.offlineLicense.installations}</b>
      </section>
    );
  }

  render() {
    return (
      <div>
        {this.renderCloseIcon()}
        <div class="content-wrapper" ref={(el) => (this.contentWrapper = el)}>
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

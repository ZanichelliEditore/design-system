import { Component, Prop, h, Event, EventEmitter, State } from "@stencil/core";
import { DictionaryData, TooltipPosition } from "../../../beans";
import { handleKeyboardSubmit } from "../../../utils/utils";

/**
 * @slot  - content
 */
@Component({
  tag: "z-card-info",
  styleUrl: "styles.css",
  shadow: true,
})
export class zCardInfo {
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
    return (
      <section
        class={`info-wrapper ${this.hiddenContent ? "hidden" : ""}`}
        onClick={() => {
          if (this.hiddenContent) this.tooltip = !this.tooltip;
        }}
        ref={(el) => (this.infoWrapper = el)}
      >
        {this?.cardData?.author ? (
          <span>
            Autore: <b>{this.cardData.author}</b>
            <br />
          </span>
        ) : (
          ""
        )}
        {this?.cardData?.year ? (
          <span>
            Anno: <b>{this.cardData.year}</b>
            <br />
          </span>
        ) : (
          ""
        )}
        {this?.cardData?.title}
        <br />
        {this?.cardData?.description}
      </section>
    );
  }

  renderTooltip() {
    if (!this.tooltip) return;

    return (
      <z-tooltip
        content={`${this?.cardData?.title} ${this?.cardData?.year} ${this?.cardData?.author} ${this?.cardData?.description}`}
        type={TooltipPosition.RIGHT}
        onClick={() => (this.tooltip = false)}
      />
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

  componentDidRender() {
    if (
      (this.contentWrapper &&
        this.contentWrapper.scrollHeight > this.contentWrapper.offsetHeight) ||
      (this.infoWrapper &&
        this.infoWrapper.scrollHeight > this.infoWrapper.offsetHeight)
    ) {
      const height =
        this.contentWrapper.offsetHeight -
        this.onlineLicenseWrapper.offsetHeight -
        this.offlineLicenseWrapper.offsetHeight;
      this.infoWrapper.style.height = `${height}px`;
      this.hiddenContent = true;
    } else {
      this.hiddenContent = false;
    }
  }

  render() {
    return (
      <div>
        {this.renderCloseIcon()}
        <div class={`content-wrapper`} ref={(el) => (this.contentWrapper = el)}>
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

import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";
import { DictionaryData } from "../../../beans";
import { handleKeyboardSubmit } from "../../../utils/utils";

/**
 * @slot  - content
 */
@Component({
  tag: "z-card-info",
  styleUrl: "styles.css",
  shadow: true
})
export class zCardInfo {
  /** dictionary info */
  @Prop() data: string | DictionaryData;
  /** tabindex link attribute (optional) */
  @Prop() htmltabindex?: number = 0;

  private cardData: DictionaryData;

  /** flip card to front */
  @Event() flipCard: EventEmitter;
  emitFlipCard(showBack: boolean = false) {
    this.flipCard.emit(showBack);
  }

  constructor() {
    this.emitFlipCard = this.emitFlipCard.bind(this);
  }

  componentWillLoad() {
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
      <section>
        Autore: <b>{this?.cardData?.author}</b>
        <br />
        Anno: <b>{this?.cardData?.year}</b>
        <br />
        {this?.cardData?.title}
        <br />
        {this?.cardData?.description}
      </section>
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

  renderOnlineLicenzeSection() {
    if (!this?.cardData?.onlineLicense) return;

    return (
      <section>
        <span class="license-heading">
          <span>Licenza online</span>
          {this.setExpirationLicenseMessage("online")}
        </span>
        Scadenza: <b>{this.cardData.onlineLicense.expiration}</b>
        <br />
      </section>
    );
  }

  renderOfflineLicenzeSection() {
    if (!this?.cardData?.offlineLicense) return;

    return (
      <section>
        <span class="license-heading">
          <span>Licenza offline</span>
          {this.setExpirationLicenseMessage("offline")}
        </span>
        Scadenza: <b>{this.cardData.offlineLicense.expiration}</b>
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
        <div class="content-wrapper">
          {this.renderGeneralSection()}
          {this.renderOnlineLicenzeSection()}
          {this.renderOfflineLicenzeSection()}
        </div>
        <div class="cta-wrapper">
          <slot />
        </div>
      </div>
    );
  }
}

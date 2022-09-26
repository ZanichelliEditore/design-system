import {Component, h, Prop, Event, EventEmitter, Listen} from "@stencil/core";
import {ButtonSizeEnum} from "../../../beans";

/**
 * @slot - main navigation
 * @slot links - bottom navigation
 * @slot social - social links
 */
@Component({
  tag: "z-footer",
  styleUrls: ["styles.css"],
  shadow: true,
})
export class ZFooter {
  /** deprecated - JSON stringified data to fill the footer */
  @Prop()
  data?: string;

  /** The product name to be displayed on the top panel of the footer */
  @Prop()
  productName?: string;

  /** The product version to be displayed on the top panel of the footer */
  @Prop()
  productVersion?: string;

  /** 'undefined' or 'null' means 'don't show Credits',
   * empty string means 'emit creditsLinkClick event',
   * not empty string means 'open the url and emit creditsLinkClick event' */
  @Prop()
  productCreditsLink?: string;

  /** True if the product must display a "Report a problem" button on the top panel of the footer */
  @Prop()
  showReportAProblemButton?: boolean;

  /** Maximum width of footer content */
  @Prop()
  contentMaxWidth?: number;

  private jsonData;

  private creditsLinkId = "creditsLinkId";

  constructor() {
    this.emitReportAProblemButtonClick = this.emitReportAProblemButtonClick.bind(this);
  }

  componentWillLoad(): void {
    if (this.data) {
      console.warn("z-footer: `data` prop is deprecated and will be removed in a future version. Use slots instead.");
      this.jsonData = JSON.parse(this.data);
    }
  }

  @Listen("zLinkClick")
  zLinkClickListener(e: CustomEvent): void {
    if (e.detail.linkId === this.creditsLinkId) {
      this.emitCreditsLinkClick();
    }
  }

  /** Emitted on credits link click */
  @Event()
  creditsLinkClick: EventEmitter;

  private emitCreditsLinkClick(): void {
    this.creditsLinkClick.emit();
  }

  /** Emitted on report a problem button click */
  @Event()
  reportAProblemButtonClick: EventEmitter;

  private emitReportAProblemButtonClick(): void {
    this.reportAProblemButtonClick.emit();
  }

  private renderZLogo(): HTMLZLogoElement {
    return (
      <z-logo
        link="https://www.zanichelli.it"
        width={144}
        height={38}
        imageAlt="Home Zanichelli"
        targetBlank={true}
      />
    );
  }

  private renderAddress(): HTMLParagraphElement {
    return (
      <p>
        Zanichelli editore S.p.A. via Irnerio 34, 40126 Bologna
        <br />
        Fax 051 - 249.782 / 293.224 | Tel. 051 - 293.111 / 245.024
        <br />
        Partita IVA 03978000374
      </p>
    );
  }

  private renderSocial(): HTMLDivElement {
    return (
      <div class="social">
        <slot name="social" />
        {this.renderFooterSocialJsonData()}
      </div>
    );
  }

  private renderCopyright(): HTMLParagraphElement {
    return (
      <p>
        Copyright – 2018-{new Date().getFullYear()} Zanichelli
        <span>All rights reserved</span>
      </p>
    );
  }

  private renderCertification(): HTMLParagraphElement {
    return (
      <p>
        Zanichelli editore S.p.A. opera con sistema qualità certificato CertiCarGraf n. 477
        <br />
        secondo la norma UNI EN ISO 9001:2015
      </p>
    );
  }

  private renderBottomLinks(): HTMLDivElement {
    return (
      <div class="item bottom-links">
        <slot name="links" />
        {this.renderFooterBottomJsonData()}
      </div>
    );
  }

  private renderFooterBottom(): HTMLElement {
    return (
      <section id="bottom">
        <div
          class={{"limited-width": !!this.contentMaxWidth}}
          style={this.contentMaxWidth ? {"--mw": `${this.contentMaxWidth}px`} : {}}
        >
          <div class="item logo">
            {this.renderZLogo()}
            {this.renderCopyright()}
            {this.renderCertification()}
          </div>
          <div class="item">
            {this.renderAddress()}
            {this.renderSocial()}
          </div>
          {this.renderBottomLinks()}
        </div>
      </section>
    );
  }

  private renderFooterTop(): HTMLElement {
    return (
      <section id="top">
        <div
          class={{"limited-width": !!this.contentMaxWidth}}
          style={this.contentMaxWidth ? {"--mw": `${this.contentMaxWidth}px`} : {}}
        >
          <slot />
          {this.renderFooterTopJsonData()}
        </div>
      </section>
    );
  }

  private renderFooterProductInfo(): HTMLElement {
    if (this.productName || this.productVersion || this.productCreditsLink != null || this.showReportAProblemButton) {
      const versionString = `${this.productName ? " versione" : "Versione"} ${this.productVersion}`;

      const creditsObject = (
        <z-body level={5}>
          {(this.productName || this.productVersion) && " - "}
          <z-link
            htmlid={this.creditsLinkId}
            href={this.productCreditsLink?.trim()}
            target="_blank"
            textcolor="white"
          >
            Credits
          </z-link>
        </z-body>
      );

      return (
        <div id="extension">
          <div
            class={{"limited-width": !!this.contentMaxWidth}}
            style={this.contentMaxWidth ? {"--mw": `${this.contentMaxWidth}px`} : {}}
          >
            <span>
              {this.productName && (
                <z-body
                  level={5}
                  variant="semibold"
                >
                  {this.productName}
                </z-body>
              )}
              {this.productVersion && <z-body level={5}>{versionString}</z-body>}
              {this.productCreditsLink != null && creditsObject}
            </span>
            {this.showReportAProblemButton && (
              <div>
                <z-body level={5}>Hai bisogno di aiuto?</z-body>
                <z-button
                  size={ButtonSizeEnum.SMALL}
                  onClick={this.emitReportAProblemButtonClick}
                >
                  SEGNALA UN PROBLEMA
                </z-button>
              </div>
            )}
            <z-divider color="gray500" />
          </div>
        </div>
      );
    }
  }

  // INFO: backward compatibility
  private renderFooterTopJsonData(): null | HTMLElement {
    if (!this.jsonData || !this.jsonData.zanichelliLinks) {
      return null;
    }

    const zanichelliLinks = this.jsonData.zanichelliLinks;
    if (this.jsonData.bottomLinks) {
      const bottomLinks = this.jsonData.bottomLinks;
      zanichelliLinks.push({
        title: "Altre informazioni",
        items: bottomLinks,
      });
    }

    return zanichelliLinks.map((item) => (
      <z-footer-section name={item.title}>
        {item.items.map((item) => (
          <z-footer-link href={item.link}>{item.label}</z-footer-link>
        ))}
      </z-footer-section>
    ));
  }

  // INFO: backward compatibility
  private renderFooterBottomJsonData(): null | HTMLElement {
    if (!this.jsonData || !this.jsonData.bottomLinks) {
      return null;
    }

    const bottomLinks = this.jsonData.bottomLinks;

    return bottomLinks.map((item) => <z-footer-link href={item.link}>{item.label}</z-footer-link>);
  }

  // INFO: backward compatibility
  private renderFooterSocialJsonData(): null | HTMLElement {
    if (!this.jsonData || !this.jsonData.social) {
      return null;
    }

    const social = this.jsonData.social;

    return social.map((item) => (
      <z-footer-social
        href={item.link}
        icon={item.icon}
        description={item.description}
      />
    ));
  }

  render(): HTMLElement {
    return (
      <footer>
        {this.renderFooterProductInfo()}
        {this.renderFooterTop()}
        {this.renderFooterBottom()}
      </footer>
    );
  }
}

import { Component, h } from "@stencil/core";

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
  renderZLogo(): HTMLZLogoElement {
    return (
      <z-logo
        link="https://www.zanichelli.it"
        width={144}
        height={38}
        imagealt="Home Zanichelli"
        targetblank={true}
      />
    );
  }

  renderAddress(): HTMLParagraphElement {
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

  renderSocial(): HTMLDivElement {
    return (
      <div class="social">
        <slot name="social" />
      </div>
    );
  }

  renderCopyright(): HTMLParagraphElement {
    return (
      <p>
        Copyright – 2018-{new Date().getFullYear()} Zanichelli
        <span> All rights reserved </span>
      </p>
    );
  }

  renderCertification(): HTMLParagraphElement {
    return (
      <p>
        Zanichelli editore S.p.A. opera con sistema qualità certificato
        CertiCarGraf n. 477
        <br />
        secondo la norma UNI EN ISO 9001:2015
      </p>
    );
  }

  renderBottomLinks(): HTMLDivElement {
    return (
      <div class="item bottom-links">
        <slot name="links" />
      </div>
    );
  }

  renderFooterBottom(): HTMLElement {
    return (
      <section class="bottom">
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
      </section>
    );
  }

  renderFooterTop(): HTMLElement {
    return (
      <section class="top">
        <slot />
      </section>
    );
  }

  render(): HTMLElement {
    return (
      <footer>
        {this.renderFooterTop()}
        {this.renderFooterBottom()}
      </footer>
    );
  }
}

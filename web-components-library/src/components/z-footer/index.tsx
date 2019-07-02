import { Component, Prop, h } from "@stencil/core";

import { FooterGroupBean, FooterGroupItemBean, MyzLinkBean, FooterSocialBean } from "../../beans/index.js";

@Component({
  tag: "z-footer",
  styleUrls: ["styles.css"],
  shadow: true
})
export class Footer {
  @Prop() zanichelliLinks: string;
  @Prop() myzLink: string;
  @Prop() zanichelliAddress: string;
  @Prop() social: string;
  @Prop() bottomLinks: string;
  @Prop() certification: string;

  renderFooterSection(group: FooterGroupBean): HTMLElement {
    return (
      <div class="column">
        <nav>
          <h2>{group.title}</h2>
          <ul>
            {group.items.map(
              (item: FooterGroupItemBean): HTMLElement => (
                <li>
                  <a href={item.link} target={item.targetBlank ? '_blank' : undefined}>{item.label}</a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    );
  }

  renderFooterTop(): HTMLElement {
    const zanichelliLinks: FooterGroupBean[] = JSON.parse(this.zanichelliLinks);

    return (
      <section class="top">
        {zanichelliLinks.map(
          (item: FooterGroupBean): HTMLElement =>
            this.renderFooterSection(item)
        )}
      </section>
    );
  }

  renderMyzLink(): HTMLElement {
    const myzLink : MyzLinkBean = JSON.parse(this.myzLink);

    return (
      <div class="item">
        <a target="_blank" href={myzLink.link}>
          <img src="../../assets/images/png/zanichelli-logo-footer.png" />
        </a>
      </div>
    );
  }

  renderAddress(): HTMLElement {
    const zanichelliAddress = this.zanichelliAddress;

    return (
      <div class="item">
        {zanichelliAddress.split('\n').map(
          (item: string): HTMLElement =>
            <p>{item}</p>
        )}
      </div>
    );
  }

  renderSocial(): HTMLElement {
    const social: FooterSocialBean[] = JSON.parse(this.social);

    return (
      <div class="item">
        <ul>
        {social.map(
          (item: FooterSocialBean): HTMLElement =>
            <li>
              <a href={item.link}>{item.icon}</a>
            </li>
        )}
        </ul>
      </div>
    );
  }

  renderCopyright(): HTMLElement {
    return (
      <small>Copyright – {new Date().getFullYear()} Zanichelli All rights reserved</small>
    );
  }

  renderCertification(): HTMLElement {
    return (
      {this.certification.split('\n').map(
        (item: string): HTMLElement =>
          <p>{item}</p>
      )}
  );
  }

  renderBottomLinks(): HTMLElement {
    const social: FooterSocialBean[] = JSON.parse(this.social);

    return (
      {social.map(
        (item: FooterSocialBean): HTMLElement =>
          <a href={item.link}>{item.icon}</a>
      )}
    );
  }

  renderFooterBottom(): HTMLElement {
    return (
      <section class="bottom">
        <div class="item">
          {this.renderMyzLink()}
          {this.renderCopyright()}
          {this.renderCertification()}
        </div>
        <div class="item">
          {this.renderAddress()}
        </div>
        <div class="item">
          {this.renderSocial()}
        </div>
      </section>
    );
  }

  render() {
    return (
      <footer>
        {this.renderFooterTop()}
        {this.renderFooterBottom()}
      </footer>
    );
  }
}

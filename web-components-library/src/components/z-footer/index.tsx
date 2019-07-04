import { Component, Prop, State, h } from "@stencil/core";

import { FooterGroupBean, FooterGroupItemBean, MyzLinkBean, FooterSocialBean } from "../../beans/index.js";


@Component({
  tag: "z-footer",
  styleUrls: ["styles.css"],
  shadow: true
})
export class Footer {
  @Prop() data: string;

  @State() jsonData = JSON.parse(this.data);

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
    const zanichelliLinks: FooterGroupBean[] = this.jsonData.zanichelliLinks;

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
    const myzLink : MyzLinkBean = this.jsonData.myzLink;

    return (
      <a target="_blank" href={myzLink.link}>
        <img src="../../assets/images/png/zanichelli-logo-footer.png" />
      </a>
    );
  }

  renderAddress(): HTMLElement {
    const zanichelliAddress : string = this.jsonData.zanichelliAddress;

    return (
      <span>{zanichelliAddress}</span>
    );
  }

  renderSocial(): HTMLElement {
    const social: FooterSocialBean[] = this.jsonData.social;

    return (
      <ul class="social">
        {social.map(
          (item: FooterSocialBean): HTMLElement =>
            <li>
              <a href={item.link}><img src={item.icon}/></a>
            </li>
        )}
      </ul>
    );
  }

  renderCopyright(): HTMLElement {
    return (
      <p>Copyright – {new Date().getFullYear()} Zanichelli All rights reserved</p>
    );
  }

  renderCertification(): HTMLElement {
    const certification : string = this.jsonData.certification;

    return (
      <small>{certification}</small>
    );
  }

  renderBottomLinks(): HTMLElement {
    const bottomLinks: FooterGroupItemBean[] = this.jsonData.bottomLinks;

    return (
      <ul>
        {bottomLinks.map(
          (item: FooterGroupItemBean): HTMLElement =>
            <li>
              <a href={item.link}>{item.label}</a>
            </li>
        )}
      </ul>
    );
  }

  renderFooterBottom(): HTMLElement {
    return (
      <section class="bottom">
        <div class="item logo">
          {this.renderMyzLink()}
          {this.renderCopyright()}
          {this.renderCertification()}
        </div>
        <div class="item">
          {this.renderAddress()}
          {this.renderSocial()}
        </div>
        <div class="item bottom-links">
          {this.renderBottomLinks()}
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

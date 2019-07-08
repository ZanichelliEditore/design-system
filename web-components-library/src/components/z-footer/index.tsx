import { Component, Prop, State, h } from "@stencil/core";

import { FooterGroupBean, FooterGroupItemBean, MyzLinkBean, FooterSocialBean } from "../../beans/index.js";

@Component({
  tag: "z-footer",
  styleUrls: ["styles.css"],
  shadow: true
})
export class ZFooter {
  @Prop() data: string;

  @State() jsonData = JSON.parse(this.data);

  renderFooterSection(group: FooterGroupBean): HTMLElement {
    return (
      <nav>
        <div class="header">
          <h2>{group.title}</h2>
        </div>
        <div class="content">
          <ul>
            {group.items.map(
              (item: FooterGroupItemBean): HTMLElement => (
                <li>
                  <a href={item.link} target={item.target ? item.target : '_blank'}>{item.label}</a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
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

  renderZLogo(): HTMLElement {
    const myzLink : MyzLinkBean = this.jsonData.myzLink;

    return (
      <z-logo
        link={myzLink.link}
        imageurl={myzLink.img}
        imagealt={myzLink.label}
        targetblank={true} />
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
              <a href={item.link} target="_blank"><img src={item.icon}/></a>
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
              <a href={item.link} target={item.target ? item.target : '_blank'}>{item.label}</a>
            </li>
        )}
      </ul>
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
        <div class="item bottom-links">
          {this.renderBottomLinks()}
        </div>
      </section>
    );
  }

  render() {
    if (this.jsonData) {
      return (
        <footer>
          {this.renderFooterTop()}
          {this.renderFooterBottom()}
        </footer>
      );
    }
  }
}

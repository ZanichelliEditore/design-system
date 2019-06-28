import { Component, Prop, h } from "@stencil/core";

import { FooterGroupBean, FooterGroupItemBean, MyzLinkBean } from "../../beans/index.js";

@Component({
  tag: "z-footer",
  styleUrls: ["styles.css"],
  shadow: true
})
export class Footer {
  @Prop() zanichelliLinks: string;
  @Prop() myzLink: string;
  @Prop() zanichelliAddress: string;
  //@Prop() social: SocialBean[];
  //@Prop() customLinks: CustomLinkBean[];

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
      <a target="_blank" href={myzLink.link}>
        <img src="../../assets/images/png/zanichelli-logo-footer.png" />
      </a>
    );
  }

  renderCopyright(): HTMLElement {
    return (
      <p>
        <small>Copyright – {new Date().getFullYear()} Zanichelli All rights reserved</small>
      </p>
    );
  }

  renderAddress(): HTMLElement {
    const zanichelliAddress = this.zanichelliAddress;

    return (
      <p>
        {zanichelliAddress.split('\n').map(
          (item: string): HTMLElement =>
            <p>{item}</p>
        )}
      </p>
    );
  }

  renderFooterBottom(): HTMLElement {
    return (
      <section class="bottom">
        {this.renderMyzLink()}
        {this.renderCopyright()}
        {this.renderAddress()}
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

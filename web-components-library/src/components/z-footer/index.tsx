import { Component, Prop, State, h } from "@stencil/core";

import { FooterBean, FooterGroupBean, FooterGroupItemBean, MyzLinkBean, FooterSocialBean } from "../../beans/index.js";

@Component({
  tag: "z-footer",
  styleUrls: ["styles.css"],
  shadow: true
})
export class Footer {
  @Prop() data: string;
  @State() jsonData: FooterBean;
  @State() isOpen : boolean[] = [];
  @State() isMobile : boolean;

  componentWillLoad() {
    this.jsonData = JSON.parse(this.data);
    this.isOpen = Array<boolean>(this.jsonData.zanichelliLinks.length).fill(false);
  }

  componentDidLoad() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.isMobile = window.innerWidth <= 360;
  }

  handleOnHeaderClick(id: number): void {
    // stencil non si accorge delle modifiche su isOpen quindi copio l'array prima
    var open = this.isOpen.slice(0);
    open[id] = !open[id];
    this.isOpen = [...open];
  }

  renderFooterSection(id: number, group: FooterGroupBean): HTMLElement {
    return (
      <nav>
        <div class="header" >
          <h2>{group.title}</h2>
          {this.isMobile &&
            <img src={this.isOpen[id] ? '../../assets/images/png/down-arrow.png' : '../../assets/images/png/up-arrow.png' }
                onClick={() => this.handleOnHeaderClick(id)}/>
          }
        </div>
        <div class="content">
          <ul class={this.isOpen[id] ? "show" : ""}>
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
          (item: FooterGroupBean, id: number): HTMLElement =>
            this.renderFooterSection(id, item)
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

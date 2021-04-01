import { Component, Prop, State, h } from "@stencil/core";
import { mobileBreakpoint } from "../../../constants/breakpoints";
import {
  FooterBean,
  FooterGroupBean,
  FooterGroupItemBean,
} from "../../../beans/index.js";

@Component({
  tag: "z-footer",
  styleUrls: ["styles.css"],
  shadow: true
})
export class ZFooter {
  /** JSON stringified data to fill the footer */
  @Prop() data: string;
  @State() isOpen: boolean[] = [];
  @State() isMobile: boolean;

  jsonData: FooterBean;

  componentWillLoad() {
    this.jsonData = JSON.parse(this.data);
    this.isOpen = Array<boolean>(this.jsonData.zanichelliLinks.length).fill(
      false
    );
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

  }

  // componentDidLoad() {
  //   window.addEventListener("resize", this.resize.bind(this));
  //   this.resize();
  // }

  resize() {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
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
        <div class="header">
          <h2>{group.title}</h2>
          {this.isMobile && (
            <button onClick={() => this.handleOnHeaderClick(id)}>
              <z-icon
                name={this.isOpen[id] ? "chevron-up" : "chevron-down"}
                width={16}
                height={16}
              />
            </button>
          )}
        </div>
        <div class="content">
          <ul class={this.isOpen[id] ? "show" : ""}>
            {group.items.map(
              (item: FooterGroupItemBean): HTMLElement => (
                <li>
                  <a
                    href={item.link}
                    target={item.target ? item.target : "_blank"}
                  >
                    {item.label}
                  </a>
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
    const bottomLinks: FooterGroupItemBean[] = this.jsonData.bottomLinks;
    const zanichelliLinksToRender = zanichelliLinks.slice();

    if (this.isMobile) {
      zanichelliLinksToRender.push({
        title: "Altre informazioni",
        items: bottomLinks
      });
    }

    return (
      // main slot
      <section class="top">
        {zanichelliLinksToRender.map(
          (item: FooterGroupBean, id: number): HTMLElement =>
            this.renderFooterSection(id, item)
        )}
      </section>
    );
  }

  renderZLogo(): HTMLElement {


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

  renderAddress(): HTMLElement {
    // fixed
    return <p class="address">Zanichelli editore S.p.A. via Irnerio 34, 40126 Bologna<br/>Fax 051 - 249.782 / 293.224 | Tel. 051 - 293.111 / 245.024<br/>Partita IVA 03978000374</p>;
  }

  renderSocial(): HTMLElement {
    return (
      <div class="social">
        <slot name="social"/>
      </div>
    )
    // return (
    //   <ul class="social">
    //     {social.map(
    //       (item: FooterSocialBean): HTMLElement => (
    //         <li>
    //           <a href={item.link} target="_blank">
    //             <img src={item.icon} alt={item.description} />
    //           </a>
    //         </li>
    //       )
    //     )}
    //   </ul>
    // );
  }

  renderCopyright(): HTMLElement {

      return (
        <p>
          Copyright – 2018-{new Date().getFullYear()} Zanichelli
          <span> All rights reserved </span>
        </p>
      )
  }

  renderCertification(): HTMLElement {

    return <p>Zanichelli editore S.p.A. opera con sistema qualità certificato CertiCarGraf n. 477<br/>secondo la norma UNI EN ISO 9001:2015</p>;
  }

  renderBottomLinks(): HTMLElement {
    if (!this.isMobile) {
      return (
        <div class="item bottom-links">
          <slot name="links"/>
          {/* <ul>
            {bottomLinks.map(
              (item: FooterGroupItemBean): HTMLElement => (
                <li>
                  <a
                    href={item.link}
                    target={item.target ? item.target : "_blank"}
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul> */}
        </div>
      );
    }
  }

  renderFooterBottom(): HTMLElement {
    return (
      <section class="bottom">
        <div class="item logo">
          {/* fixed */}
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

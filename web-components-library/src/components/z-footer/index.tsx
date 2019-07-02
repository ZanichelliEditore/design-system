import { Component, h } from "@stencil/core";

import { FooterGroupBean, FooterGroupItemBean, MyzLinkBean, FooterSocialBean } from "../../beans/index.js";

var data;

@Component({
  tag: "z-footer",
  styleUrls: ["styles.css"],
  shadow: true
})
export class Footer {
  componentWillLoad() {

    // TODO: fetch from API
    data = {
      zanichelliLinks: [{"title":"Zanichelli.it","items":[{"label":"Home zanichelli.it","link":"http://www.zanichelli.it","targetBlank":true},{"label":"Ricerca in catalogo","link":""},{"label":"Contatti","link":""}]},{"title":"Scuola","items":[{"label":"Home scuola","link":""},{"label":"Catalogo scuola","link":""},{"label":"Bisogni Educativi Speciali (BES)","link":""},{"label":"Formazione docenti","link":""}]}],
      myzLink: {"descr": "Home MyZanichelli", "link": "https://my.zanichelli.it"},
      zanichelliAddress: `
        Zanichelli editore S.p.A. via Irnerio 34, 40126 Bologna
        Fax 051 - 249.782 / 293.224 | Tel. 051 - 293.111 / 245.024
        Partita IVA 03978000374
      `,
      social: [{
              "icon": "Youtube",
              "link": "https://www.youtube.com/user/zanichellieditore"
            },{
              "icon": "Facebook",
              "link": "https://it-it.facebook.com/zanichelliscuola"
            }],
      certification: `
        Zanichelli editore S.p.A. opera con sistema qualità certificato CertiCarGraf n. 477
        secondo la norma UNI EN ISO 9001:2015
      `,
      bottomLinks: [{
        "label": "Chi siamo",
        "link": "#"
      },{
        "label": "Contatti e recapiti",
        "link": "#"
      },{
        "label": "Area stampa",
        "link": "#"
      },{
        "label": "Per acqusti online",
        "link": "#"
      },{
        "label": "Filiali e agenzie",
        "link": "#"
      },{
        "label": "Privacy",
        "link": "#"
      }],
    }
  }

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
    const zanichelliLinks: FooterGroupBean[] = data.zanichelliLinks;

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
    const myzLink : MyzLinkBean = data.myzLink;

    return (
      <a target="_blank" href={myzLink.link}>
        <img src="../../assets/images/png/zanichelli-logo-footer.png" />
      </a>
    );
  }

  renderAddress(): HTMLElement {
    const zanichelliAddress : string =  data.zanichelliAddress;

    return (
      <p>{zanichelliAddress}</p>
    );
  }

  renderSocial(): HTMLElement {
    const social: FooterSocialBean[] = data.social;

    return (
      <ul>
      {social.map(
        (item: FooterSocialBean): HTMLElement =>
          <li>
            <a href={item.link}>{item.icon}</a>
          </li>
      )}
      </ul>
    );
  }

  renderCopyright(): HTMLElement {
    return (
      <p>Copyright – {new Date().getFullYear()} Zanichelli All rights reserved></p>
    );
  }

  renderCertification(): HTMLElement {
    const certification : string = data.certification;

    return (
      <p><small>{certification}</small></p>
    );
  }

  renderBottomLinks(): HTMLElement {
    const bottomLinks: FooterGroupItemBean[] = data.bottomLinks;

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
        <div class="item">
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

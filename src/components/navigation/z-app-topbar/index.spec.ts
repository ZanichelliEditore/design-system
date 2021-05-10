import { newSpecPage } from "@stencil/core/testing";

import { ZAppTopbar } from "./index";

describe("Suite test ZAppTopbar", () => {
  it("Test render ZAppTopbar empty", async () => {
    const page = await newSpecPage({
      components: [ZAppTopbar],
      html: `<z-app-topbar></z-app-topbar>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-topbar>
        <mock:shadow-root>
          <div class="dark">
            <div class="left">
              <slot name="logo"></slot>
            </div>
            <div class="right undefined">
              <slot name="actions"></slot>
              <slot name="login"></slot>
              <slot name="app-switcher"></slot>
            </div>
          </div>
        </mock:shadow-root>
      </z-app-topbar>
    `);
  });
  it("Test render ZAppTopbar with logo and hashtag", async () => {
    const page = await newSpecPage({
      components: [ZAppTopbar],
      html: `<z-app-topbar hashtag="apoteosi">
              <z-logo
                slot="logo"
                width="138"
                height="36"
                imagealt="zanichelli-logo"
                link="https://www.zanichelli.it"
                targetblank
              ></z-logo>
            </z-app-topbar>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-topbar hashtag="apoteosi">
        <mock:shadow-root>
          <div class="dark">
            <div class="left">
              <slot name="logo"></slot>
              <span id="hashtag">
                apoteosi
              </span>
            </div>
            <div class="right undefined">
              <slot name="actions"></slot>
              <slot name="login"></slot>
              <slot name="app-switcher"></slot>
            </div>
          </div>
        </mock:shadow-root>
        <z-logo height="36" imagealt="zanichelli-logo" link="https://www.zanichelli.it" slot="logo" targetblank="" width="138"></z-logo>
      </z-app-topbar>
    `);
  });
  it("Test render ZAppTopbar with logo, user dropdown and app switcher", async () => {
    const page = await newSpecPage({
      components: [ZAppTopbar],
      html: `<z-app-topbar>
              <z-logo
                slot="logo"
                width="138"
                height="36"
                imagealt="zanichelli-logo"
                link="https://www.zanichelli.it"
                targetblank
              ></z-logo>
              <z-user-dropdown
              userfullname="docente di calabresi per italiani"
              islogged="false"
              slot="login"
              ></z-user-dropdown>
              <z-app-switcher slot="app-switcher"></z-app-switcher>
            </z-app-topbar>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-topbar>
        <mock:shadow-root>
          <div class="dark">
            <div class="left">
              <slot name="logo"></slot>
            </div>
            <div class="right undefined">
              <slot name="actions"></slot>
              <slot name="login"></slot>
              <slot name="app-switcher"></slot>
            </div>
          </div>
        </mock:shadow-root>
        <z-logo height="36" imagealt="zanichelli-logo" link="https://www.zanichelli.it" slot="logo" targetblank="" width="138"></z-logo>
        <z-user-dropdown islogged="false" slot="login" userfullname="docente di calabresi per italiani"></z-user-dropdown>
        <z-app-switcher slot="app-switcher"></z-app-switcher>
        </z-app-topbar>
    `);
  });
  it("Test render dark ZAppTopbar with not logged user", async () => {
    const page = await newSpecPage({
      components: [ZAppTopbar],
      html: `<z-app-topbar hashtag="via crucis">
              <z-logo
                slot="logo"
                width="138"
                height="36"
                imagealt="zanichelli-logo"
                link="https://www.zanichelli.it"
                targetblank
              ></z-logo>
              <z-link
                textcolor="white"
                big
                icon="support-filled"
                slot="actions"
                href="#"
                >Supporto</z-link
              >
              <z-link
                textcolor="white"
                big
                icon="shopping-cart-filled"
                slot="actions"
                href="#"
                >Carrello</z-link
              >
              <z-user-dropdown
                userfullname="docente di calabresi per italiani"
                islogged="false"
                slot="login"
              ></z-user-dropdown>
              <z-app-switcher slot="app-switcher"></z-app-switcher>
            </z-app-topbar>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-topbar hashtag="via crucis">
        <mock:shadow-root>
          <div class="dark">
            <div class="left">
              <slot name="logo"></slot>
              <span id="hashtag">
                viacrucis
              </span>
            </div>
            <div class="right undefined">
              <slot name="actions"></slot>
              <slot name="login"></slot>
              <slot name="app-switcher"></slot>
            </div>
          </div>
        </mock:shadow-root>
        <z-logo height="36" imagealt="zanichelli-logo" link="https://www.zanichelli.it" slot="logo" targetblank="" width="138"></z-logo>
        <z-link big="" href="#" icon="support-filled" slot="actions" textcolor="white">
          Supporto
        </z-link>
        <z-link big="" href="#" icon="shopping-cart-filled" slot="actions" textcolor="white">
          Carrello
        </z-link>
        <z-user-dropdown islogged="false" slot="login" userfullname="docente di calabresi per italiani"></z-user-dropdown>
        <z-app-switcher slot="app-switcher"></z-app-switcher>
        </z-app-topbar>
    `);
  });
  it("Test render dark ZAppTopbar with logged user", async () => {
    const page = await newSpecPage({
      components: [ZAppTopbar],
      html: `<z-app-topbar hashtag="faresci" logged>
              <z-logo
                slot="logo"
                width="138"
                height="36"
                imagealt="zanichelli-logo"
                link="https://www.zanichelli.it"
                targetblank
              ></z-logo>
              <z-link
                textcolor="white"
                big
                icon="support-filled"
                slot="actions"
                href="#"
                >Supporto</z-link
              >
              <z-link
                iswhite
                big
                icon="shopping-cart-filled"
                slot="actions"
                href="#"
                >Carrello</z-link
              >
              <z-user-dropdown
                userfullname="Fabio Funzionario"
                islogged="true"
                slot="login"
                menucontent='[{"label":"Profilo", "link":"http://www.zanichelli.it", "icon":"arrow-quad-north-east"}, {"label":"I Tuoi Ordini", "link":"http://www.zanichelli.it", "icon":"exit"},{"label":"Esci", "link":"http://www.google.it", "icon":"enter"}]'
              >
              </z-user-dropdown>
              <z-app-switcher slot="app-switcher"></z-app-switcher>
            </z-app-topbar>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-topbar hashtag="faresci" logged>
        <mock:shadow-root>
          <div class="dark">
            <div class="left">
              <slot name="logo"></slot>
              <span id="hashtag">
                faresci
              </span>
            </div>
            <div class="false right">
              <slot name="actions"></slot>
              <slot name="login"></slot>
              <slot name="app-switcher"></slot>
            </div>
          </div>
        </mock:shadow-root>
        <z-logo height="36" imagealt="zanichelli-logo" link="https://www.zanichelli.it" slot="logo" targetblank="" width="138"></z-logo>
        <z-link big="" href="#" icon="support-filled" slot="actions" textcolor="white">
          Supporto
        </z-link>
        <z-link big="" href="#" icon="shopping-cart-filled" slot="actions"  iswhite="">
          Carrello
        </z-link>
        <z-user-dropdown
          islogged="true"
          slot="login"
          userfullname="Fabio Funzionario"
          menucontent='[{"label":"Profilo", "link":"http://www.zanichelli.it", "icon":"arrow-quad-north-east"}, {"label":"I Tuoi Ordini", "link":"http://www.zanichelli.it", "icon":"exit"},{"label":"Esci", "link":"http://www.google.it", "icon":"enter"}]'></z-user-dropdown>
        <z-app-switcher slot="app-switcher"></z-app-switcher>
        </z-app-topbar>
    `);
  });
  it("Test render light ZAppTopbar with not logged user", async () => {
    const page = await newSpecPage({
      components: [ZAppTopbar],
      html: `<z-app-topbar theme="light" hashtag="via crucis">
              <z-logo
                slot="logo"
                width="138"
                height="36"
                imagealt="zanichelli-logo"
                link="https://www.zanichelli.it"
                targetblank
              ></z-logo>
              <z-link
                textcolor="black"
                big
                icon="support-filled"
                slot="actions"
                href="#"
                >Supporto</z-link
              >
              <z-link
                textcolor="black"
                big
                icon="shopping-cart-filled"
                slot="actions"
                href="#"
                >Carrello</z-link
              >
              <z-user-dropdown
              theme="light"
                userfullname="docente di calabresi per italiani"
                islogged="false"
                slot="login"
              ></z-user-dropdown>
              <z-app-switcher theme="light" slot="app-switcher"></z-app-switcher>
            </z-app-topbar>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-topbar hashtag="via crucis" theme="light">
        <mock:shadow-root>
          <div class="light">
            <div class="left">
              <slot name="logo"></slot>
              <span id="hashtag">
                viacrucis
              </span>
            </div>
            <div class="right undefined">
              <slot name="actions"></slot>
              <slot name="login"></slot>
              <slot name="app-switcher"></slot>
            </div>
          </div>
        </mock:shadow-root>
        <z-logo height="36" imagealt="zanichelli-logo" link="https://www.zanichelli.it" slot="logo" targetblank="" width="138"></z-logo>
        <z-link big="" href="#" icon="support-filled" slot="actions" textcolor="black">
          Supporto
        </z-link>
        <z-link big="" href="#" icon="shopping-cart-filled" slot="actions" textcolor="black">
          Carrello
        </z-link>
        <z-user-dropdown theme="light" islogged="false" slot="login" userfullname="docente di calabresi per italiani"></z-user-dropdown>
        <z-app-switcher theme="light" slot="app-switcher"></z-app-switcher>
        </z-app-topbar>
    `);
  });
  it("Test render full ZAppTopbar with logged user", async () => {
    const page = await newSpecPage({
      components: [ZAppTopbar],
      html: `<z-app-topbar hashtag="faresci" logged theme="light">
              <z-logo
                slot="logo"
                width="138"
                height="36"
                imagealt="zanichelli-logo"
                link="https://www.zanichelli.it"
                targetblank
              ></z-logo>
              <z-link
                textcolor="black"
                big
                icon="support-filled"
                slot="actions"
                href="#"
                >Supporto</z-link
              >
              <z-link
                textcolor="black"
                big
                icon="shopping-cart-filled"
                slot="actions"
                href="#"
                >Carrello</z-link
              >
              <z-user-dropdown
                theme="light"
                userfullname="Fabio Funzionario"
                islogged="true"
                slot="login"
                menucontent='[{"label":"Profilo", "link":"http://www.zanichelli.it", "icon":"arrow-quad-north-east"}, {"label":"I Tuoi Ordini", "link":"http://www.zanichelli.it", "icon":"exit"},{"label":"Esci", "link":"http://www.google.it", "icon":"enter"}]'
              >
              </z-user-dropdown>
              <z-app-switcher theme="light" slot="app-switcher"></z-app-switcher>
            </z-app-topbar>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-topbar hashtag="faresci" logged theme="light">
        <mock:shadow-root>
          <div class="light">
            <div class="left">
              <slot name="logo"></slot>
              <span id="hashtag">
                faresci
              </span>
            </div>
            <div class="false right">
              <slot name="actions"></slot>
              <slot name="login"></slot>
              <slot name="app-switcher"></slot>
            </div>
          </div>
        </mock:shadow-root>
        <z-logo height="36" imagealt="zanichelli-logo" link="https://www.zanichelli.it" slot="logo" targetblank="" width="138"></z-logo>
        <z-link big="" href="#" icon="support-filled" slot="actions" textcolor="black">
          Supporto
        </z-link>
        <z-link big="" href="#" icon="shopping-cart-filled" slot="actions" textcolor="black">
          Carrello
        </z-link>
        <z-user-dropdown
          theme="light"
          islogged="true"
          slot="login"
          userfullname="Fabio Funzionario"
          menucontent='[{"label":"Profilo", "link":"http://www.zanichelli.it", "icon":"arrow-quad-north-east"}, {"label":"I Tuoi Ordini", "link":"http://www.zanichelli.it", "icon":"exit"},{"label":"Esci", "link":"http://www.google.it", "icon":"enter"}]'></z-user-dropdown>
        <z-app-switcher theme="light" slot="app-switcher"></z-app-switcher>
        </z-app-topbar>
    `);
  });
});

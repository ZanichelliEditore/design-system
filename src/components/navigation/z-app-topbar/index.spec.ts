import { newSpecPage } from "@stencil/core/testing";

import { ZAppTopbar } from "./index";

describe("Suite test ZAppTopbar", () => {

  it("Test render ZAppTopbar empty", async () => {
    const page = await newSpecPage({
      components: [ZAppTopbar],
      html: `<z-app-topbar></z-app-topbar>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-topbar class="dark">
        <mock:shadow-root>
          <div id="content-container">
            <div id="left-panel">
              <z-logo height="32" imagealt="zanichelli-logo" link="https://www.zanichelli.it" targetblank="" width="128"></z-logo>
            </div>
            <div id="right-panel">
              <z-app-switcher theme="dark"></z-app-switcher>
              <div id="divider-container">
                <z-divider color="color-white" orientation="vertical"></z-divider>
              </div>
              <z-user-dropdown></z-user-dropdown>
            </div>
          </div>
        </mock:shadow-root>
      </z-app-topbar>
    `);
  });
  
  /* it("Test render ZAppTopbar with logo, user dropdown and app switcher", async () => {
    const page = await newSpecPage({
      components: [ZAppTopbar],
      html: `<z-app-topbar>
              <div id="left-panel">
                <z-logo height="32" imagealt="zanichelli-logo" link="https://www.zanichelli.it" targetblank="" width="128"></z-logo>
              </div>
              <div id="right-panel">
              <z-user-dropdown
                userfullname="docente di calabresi per italiani"
                islogged="false"
                slot="login"
                ></z-user-dropdown>
                <z-app-switcher slot="app-switcher"></z-app-switcher>
              </div>
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
  }); */

  it("Test render dark ZAppTopbar with not logged user", async () => {
    const page = await newSpecPage({
      components: [ZAppTopbar],
      html: `<z-app-topbar
              topbarcontent='[{"label": "Assistenza", "link": "./pages/notification.html", "icon": "support"}, {"label": "Contattaci", "link": "./pages/notification.html", "icon": "question-mark-circle"}, {"label": "Carrello", "link": "./pages/notification.html", "icon": "shopping-cart"}]'
              dropdowncontent='[{"id": "profile", "label": "Profilo", "link": "./pages/notification.html"}, {"id": "ask-to", "label": "Chiedi al tuo responsabile", "link": "./pages/notification.html"}, {"id": "activate-resource", "label": "Attiva opera", "link": "./pages/notification.html"}, {"id": "your-orders", "label": "I tuoi ordini", "link": "./pages/notification.html"}, {"id": "logout", "label": "Esci", "link": "./pages/notification.html"}]'
            >`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-topbar
        topbarcontent="[{"label": "Assistenza", "link": "./pages/notification.html", "icon": "support"}, {"label": "Contattaci", "link": "./pages/notification.html", "icon": "question-mark-circle"}, {"label": "Carrello", "link": "./pages/notification.html", "icon": "shopping-cart"}]"
        dropdowncontent="[{"id": "profile", "label": "Profilo", "link": "./pages/notification.html"}, {"id": "ask-to", "label": "Chiedi al tuo responsabile", "link": "./pages/notification.html"}, {"id": "activate-resource", "label": "Attiva opera", "link": "./pages/notification.html"}, {"id": "your-orders", "label": "I tuoi ordini", "link": "./pages/notification.html"}, {"id": "logout", "label": "Esci", "link": "./pages/notification.html"}]"
        class="dark"
      >
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
      html: `<z-app-topbar logged>
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
      <z-app-topbar logged>
        <mock:shadow-root>
          <div class="dark">
            <div class="left">
              <slot name="logo"></slot>
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
      html: `<z-app-topbar theme="light">
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
      <z-app-topbar theme="light">
        <mock:shadow-root>
          <div class="light">
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
      html: `<z-app-topbar logged theme="light">
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
      <z-app-topbar logged theme="light">
        <mock:shadow-root>
          <div class="light">
            <div class="left">
              <slot name="logo"></slot>
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

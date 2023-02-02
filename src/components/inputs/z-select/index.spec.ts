import {newSpecPage} from "@stencil/core/testing";

import {ZSelect} from "./index";

describe("Suite test ZSelect", () => {
  it("Test render ZSelect chiusa con elementi", async () => {
    const page = await newSpecPage({
      components: [ZSelect],
      html: `<z-select htmlid="checkid" placeholder="select here" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false}]'> </z-select>`,
    });
    page.rootInstance.isOpen = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
        <z-select htmlid="checkid" placeholder="select here" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false}]'>
            <div class="select-wrapper">
              <z-input
                label="default"
                id="checkid_input"
                htmlid="checkid_input"
                placeholder="select here"
                icon="caret-down"
                aria-label=""
                autocomplete="off"
              ></z-input>
              <div class="closed" tabindex="-1">
                <div class="ul-scroll-wrapper" tabindex="-1">
                  <z-list
                    role="listbox"
                    tabindex="-1"
                    id="checkid"
                  >
                    <z-list-element
                      clickable=""
                      dividertype="header"
                      role="option"
                      tabindex="-1"
                      class=""
                      id="checkid_0"
                    >
                      <span>SELECT HERE questa opzione con etichetta lunga lunghissima</span>
                    </z-list-element>
                  </z-list>
                </div>
              </div>
              <z-input-message></z-input-message>
            </div>
        </z-select>
      `);
  });

  it("Test render ZSelect aperta con elementi", async () => {
    const page = await newSpecPage({
      components: [ZSelect],
      html: `<z-select htmlid="checkid" placeholder="select here" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'> </z-select>`,
    });
    page.rootInstance.isOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
        <z-select htmlid="checkid" placeholder="select here" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'>
            <div class="select-wrapper">
              <z-input
                label="default"
                id="checkid_input"
                htmlid="checkid_input"
                placeholder="select here"
                icon="caret-up"
                readonly=""
                aria-label=""
                autocomplete="off"
              ></z-input>
              <div class="open" tabindex="-1">
                <div class="ul-scroll-wrapper" tabindex="-1">
                  <z-list
                    role="listbox"
                    tabindex="0"
                    id="checkid"
                  >
                    <z-list-element
                      clickable=""
                      dividertype="element"
                      role="option"
                      tabindex="0"
                      class=""
                      id="checkid_0"
                    >
                      <span>SELECT HERE questa opzione con etichetta lunga lunghissima</span>
                    </z-list-element>
                    <z-list-element
                      clickable=""
                      dividertype="header"
                      role="option"
                      tabindex="0"
                      class=""
                      id="checkid_1"
                    >
                      <span>primo elemento</span>
                    </z-list-element>
                  </z-list>
                </div>
              </div>
              <z-input-message></z-input-message>
            </div>
        </z-select>
      `);
  });

  it("Test render ZSelect aperta con elemento selezionato", async () => {
    const page = await newSpecPage({
      components: [ZSelect],
      html: `<z-select htmlid="checkid" placeholder="select here" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":true}]'> </z-select>`,
    });
    page.rootInstance.isOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-select htmlid="checkid" placeholder="select here" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":true}]'>
          <div class="select-wrapper">
            <z-input
              label="default"
              id="checkid_input"
              htmlid="checkid_input"
              placeholder="select here"
              icon="caret-up"
              readonly=""
              aria-label=""
              autocomplete="off"
            ></z-input>
            <div class="open" tabindex="-1">
              <div class="ul-scroll-wrapper" tabindex="-1">
                <z-list
                  role="listbox"
                  tabindex="0"
                  id="checkid"
                  aria-activedescendant="item_1"
                  class="filled"
                >
                  <z-list-element
                    clickable=""
                    dividertype="element"
                    role="option"
                    tabindex="0"
                    class=""
                    id="checkid_0"
                  >
                    <span>SELECT HERE questa opzione con etichetta lunga lunghissima</span>
                  </z-list-element>
                  <z-list-element
                    clickable=""
                    dividertype="header"
                    role="option"
                    tabindex="0"
                    aria-selected=""
                    class=""
                    id="checkid_1"
                  >
                    <span class="selected">primo elemento</span>
                  </z-list-element>
                </z-list>
              </div>
            </div>
            <z-input-message></z-input-message>
          </div>
      </z-select>
    `);
  });

  it("Test render ZSelect chiusa disabilitato con elementi", async () => {
    const page = await newSpecPage({
      components: [ZSelect],
      html: `<z-select htmlid="checkid" placeholder="select here" disabled readonly label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'> </z-select>`,
    });
    page.rootInstance.isOpen = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
        <z-select htmlid="checkid" placeholder="select here" disabled readonly label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'>
            <div class="select-wrapper">
              <z-input
                label="default"
                id="checkid_input"
                htmlid="checkid_input"
                placeholder="select here"
                icon="caret-down"
                disabled=""
                readonly=""
                aria-label=""
                autocomplete="off"
              ></z-input>
              <div class="closed" tabindex="-1">
                <div class="ul-scroll-wrapper" tabindex="-1">
                  <z-list
                    role="listbox"
                    tabindex="-1"
                    id="checkid"
                    class="disabled readonly"
                  >
                    <z-list-element
                      clickable=""
                      dividertype="element"
                      role="option"
                      tabindex="-1"
                      class=""
                      id="checkid_0"
                    >
                      <span>SELECT HERE questa opzione con etichetta lunga lunghissima</span>
                    </z-list-element>
                    <z-list-element
                      clickable=""
                      dividertype="header"
                      role="option"
                      tabindex="-1"
                      class=""
                      id="checkid_1"
                    >
                      <span>primo elemento</span>
                    </z-list-element>
                  </z-list>
                </div>
              </div>
              <z-input-message></z-input-message>
            </div>
        </z-select>
      `);
  });

  it("Test render ZSelect chiusa con elementi, status/messages", async () => {
    const page = await newSpecPage({
      components: [ZSelect],
      html: `<z-select htmlid="checkid" placeholder="select here" status="success" message="message message" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'> </z-select>`,
    });
    page.rootInstance.isOpen = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
          <z-select htmlid="checkid" placeholder="select here" status="success" message="message message" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'>
              <div class="select-wrapper">
                <z-input
                  aria-label=""
                  label="default"
                  id="checkid_input"
                  htmlid="checkid_input"
                  placeholder="select here"
                  icon="caret-down"
                  status="success"
                  autocomplete="off"
                ></z-input>
                <div class="closed" tabindex="-1">
                  <div class="ul-scroll-wrapper" tabindex="-1">
                    <z-list
                      role="listbox"
                      tabindex="-1"
                      id="checkid"
                      class="input-success"
                    >
                      <z-list-element
                        clickable=""
                        dividertype="element"
                        role="option"
                        tabindex="-1"
                        class=""
                        id="checkid_0"
                      >
                        <span>SELECT HERE questa opzione con etichetta lunga lunghissima</span>
                      </z-list-element>
                    <z-list-element
                        clickable=""
                        dividertype="header"
                        role="option"
                        tabindex="-1"
                        class=""
                        id="checkid_1"
                      >
                        <span>primo elemento</span>
                      </z-list-element>
                    </z-list>
                  </div>
                </div>
                <z-input-message status="success" message="message message"></z-input-message>
              </div>
          </z-select>
        `);
  });

  it("Test render ZSelect aperta con elementi, un elemento disabilitato", async () => {
    const page = await newSpecPage({
      components: [ZSelect],
      html: `<z-select htmlid="checkid" placeholder="select here" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false,"disabled":true}]'> </z-select>`,
    });
    page.rootInstance.isOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
        <z-select htmlid="checkid" placeholder="select here" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false,"disabled":true}]'>
            <div class="select-wrapper">
              <z-input
                aria-label=""
                label="default"
                id="checkid_input"
                htmlid="checkid_input"
                placeholder="select here"
                icon="caret-up"
                readonly=""
                autocomplete="off"
              ></z-input>
              <div class="open" tabindex="-1">
                <div class="ul-scroll-wrapper" tabindex="-1">
                  <z-list
                    role="listbox"
                    tabindex="0"
                    id="checkid"
                  >
                    <z-list-element
                      clickable=""
                      dividertype="element"
                      role="option"
                      tabindex="0"
                      class=""
                      id="checkid_0"
                    >
                      <span>SELECT HERE questa opzione con etichetta lunga lunghissima</span>
                    </z-list-element>
                  <z-list-element
                      disabled=""
                      dividertype="header"
                      role="option"
                      tabindex="-1"
                      id="checkid_1"
                    >
                      <span>primo elemento</span>
                    </z-list-element>
                  </z-list>
                </div>
              </div>
              <z-input-message></z-input-message>
            </div>
        </z-select>
      `);
  });

  it("Test render ZSelect aperta con elementi con autocomplete", async () => {
    const page = await newSpecPage({
      components: [ZSelect],
      html: `<z-select htmlid="checkid" placeholder="select here" label="default" autocomplete="on" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'> </z-select>`,
    });
    page.rootInstance.isOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-select htmlid="checkid" placeholder="select here" label="default" autocomplete="on" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'>
          <div class="select-wrapper">
            <z-input
              label="default"
              id="checkid_input"
              htmlid="checkid_input"
              placeholder="select here"
              icon="caret-up"
              hasclearicon=""
              aria-label=""
              autocomplete="off"
            ></z-input>
            <div class="open" tabindex="-1">
              <div class="ul-scroll-wrapper" tabindex="-1">
                <z-list
                  role="listbox"
                  tabindex="0"
                  id="checkid"
                >
                  <z-list-element
                    clickable=""
                    dividertype="element"
                    role="option"
                    tabindex="0"
                    class=""
                    id="checkid_0"
                  >
                    <span>SELECT HERE questa opzione con etichetta lunga lunghissima</span>
                  </z-list-element>
                  <z-list-element
                    clickable=""
                    dividertype="header"
                    role="option"
                    tabindex="0"
                    class=""
                    id="checkid_1"
                  >
                    <span>primo elemento</span>
                  </z-list-element>
                </z-list>
              </div>
            </div>
            <z-input-message></z-input-message>
          </div>
      </z-select>
    `);
  });

  it("Test render ZSelect aperta con elementi con autocomplete e ricerca", async () => {
    const page = await newSpecPage({
      components: [ZSelect],
      html: `<z-select htmlid="checkid" placeholder="select here" label="default" autocomplete="true" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'> </z-select>`,
    });
    page.rootInstance.isOpen = true;
    page.rootInstance.searchString = "opzione";
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-select htmlid="checkid" placeholder="select here" label="default" autocomplete="true" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'>
        <div class="select-wrapper">
            <z-input autocomplete="off" aria-label="" label="default" hasclearicon="" htmlid="checkid_input" icon="caret-up" id="checkid_input" placeholder="select here"></z-input>
            <div class="open" tabindex="-1">
              <div class="ul-scroll-wrapper" tabindex="-1">
                <z-list id="checkid" role="listbox" tabindex="0">
                  <z-list-element clickable="" dividertype="header" id="checkid_0" role="option" tabindex="0">
                    <span>
                      SELECT HERE questa
                      <strong>
                        opzione
                      </strong>
                      con etichetta lunga lunghissima
                    </span>
                  </z-list-element>
                </z-list>
              </div>
            </div>
            <z-input-message></z-input-message>
          </div>
        </z-select>
    `);
  });

  it("Test render ZSelect aperta con reset item", async () => {
    const page = await newSpecPage({
      components: [ZSelect],
      html: `<z-select htmlid="checkid" placeholder="select here" reset-item="Pulisci selezione" label="default" autocomplete="true" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":true}]'></z-select>`,
    });
    page.rootInstance.isOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-select htmlid="checkid" placeholder="select here" label="default" autocomplete="true" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":true}]' reset-item="Pulisci selezione">
        <div class="select-wrapper">
            <z-input autocomplete="off" aria-label="" label="default" hasclearicon="" htmlid="checkid_input" icon="caret-up" id="checkid_input" placeholder="select here"></z-input>
            <div class="open" tabindex="-1">
              <div class="ul-scroll-wrapper" tabindex="-1">
                <z-list aria-activedescendant="item_0" class="filled" id="checkid" role="listbox" tabindex="0">
                  <z-list-element clickable="" aria-selected="false" class="reset-item" dividertype="element" id="checkid_0" role="option" tabindex="0">
                    <z-icon name="multiply-circled"></z-icon>
                    Pulisci selezione
                  </z-list-element>
                  <z-list-element aria-selected="" clickable="" dividertype="header" id="checkid_1" role="option" tabindex="0">
                    <span class="selected">
                      SELECT HERE questa opzione con etichetta lunga lunghissima
                    </span>
                  </z-list-element>
                </z-list>
              </div>
            </div>
            <z-input-message></z-input-message>
          </div>
        </z-select>
    `);
  });
});

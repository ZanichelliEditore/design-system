import { newSpecPage } from "@stencil/core/testing";

import { ZSelect } from "./index";

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
          <mock:shadow-root>
            <div class="selectWrapper">
              <z-input-label aria-label="default" htmlfor="checkid" id="checkid_input_label" value="default"></z-input-label>
              <z-input
                id="checkid_input"
                htmlid="checkid_input"
                placeholder="select here"
                icon="caret-down"
              ></z-input>
              <div class="closed" tabindex="-1">
                <div class="ulScrollWrapper" tabindex="-1">
                  <ul
                    role="listbox"
                    tabindex="-1"
                    id="checkid"
                    class="input_default"
                  >
                    <li
                      role="option"
                      tabindex="-1"
                      class=""
                      id="checkid_0"
                    >
                      <span>SELECT HERE questa opzione con etichetta lunga lunghissima</span>
                    </li>
                  </ul>
                </div>
              </div>
              <z-input-message></z-input-message>
            </div>
          </mock:shadow-root>
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
          <mock:shadow-root>
            <div class="selectWrapper">
              <z-input-label aria-label="default" htmlfor="checkid" id="checkid_input_label" value="default"></z-input-label>
              <z-input
                id="checkid_input"
                htmlid="checkid_input"
                placeholder="select here"
                icon="caret-up"
                readonly=""
                status="selecting"
              ></z-input>
              <div class="open" tabindex="-1">
                <div class="ulScrollWrapper" tabindex="-1">
                  <ul
                    role="listbox"
                    tabindex="0"
                    id="checkid"
                    class="input_default"
                  >
                    <li
                      role="option"
                      tabindex="0"
                      class=""
                      id="checkid_0"
                    >
                      <span>SELECT HERE questa opzione con etichetta lunga lunghissima</span>
                    </li>
                    <li
                      role="option"
                      tabindex="0"
                      class=""
                      id="checkid_1"
                    >
                      <span>primo elemento</span>
                    </li>
                  </ul>
                </div>
              </div>
              <z-input-message></z-input-message>
            </div>
          </mock:shadow-root>
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
        <mock:shadow-root>
          <div class="selectWrapper">
            <z-input-label aria-label="default" htmlfor="checkid" id="checkid_input_label" value="default"></z-input-label>
            <z-input
              id="checkid_input"
              htmlid="checkid_input"
              placeholder="select here"
              icon="caret-up"
              readonly=""
              status="selecting"
            ></z-input>
            <div class="open" tabindex="-1">
              <div class="ulScrollWrapper" tabindex="-1">
                <ul
                  role="listbox"
                  tabindex="0"
                  id="checkid"
                  aria-activedescendant="item_1"
                  class="filled input_default"
                >
                  <li
                    role="option"
                    tabindex="0"
                    class=""
                    id="checkid_0"
                  >
                    <span>SELECT HERE questa opzione con etichetta lunga lunghissima</span>
                  </li>
                  <li
                    role="option"
                    tabindex="0"
                    aria-selected=""
                    class=""
                    id="checkid_1"
                  >
                    <span>primo elemento</span>
                  </li>
                </ul>
              </div>
            </div>
            <z-input-message></z-input-message>
          </div>
        </mock:shadow-root>
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
          <mock:shadow-root>
            <div class="selectWrapper">
              <z-input-label aria-label="default" htmlfor="checkid" id="checkid_input_label" value="default" disabled=""></z-input-label>
              <z-input
                id="checkid_input"
                htmlid="checkid_input"
                placeholder="select here"
                icon="caret-down"
                disabled=""
                readonly=""
              ></z-input>
              <div class="closed" tabindex="-1">
                <div class="ulScrollWrapper" tabindex="-1">
                  <ul
                    role="listbox"
                    tabindex="-1"
                    id="checkid"
                    class="disabled input_default readonly"
                  >
                    <li
                      role="option"
                      tabindex="-1"
                      class=""
                      id="checkid_0"
                    >
                      <span>SELECT HERE questa opzione con etichetta lunga lunghissima</span>
                    </li>
                   <li
                      role="option"
                      tabindex="-1"
                      class=""
                      id="checkid_1"
                    >
                      <span>primo elemento</span>
                    </li>
                  </ul>
                </div>
              </div>
              <z-input-message></z-input-message>
            </div>
          </mock:shadow-root>
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
            <mock:shadow-root>
              <div class="selectWrapper">
                <z-input-label aria-label="default" htmlfor="checkid" id="checkid_input_label" value="default"></z-input-label>
                <z-input
                  id="checkid_input"
                  htmlid="checkid_input"
                  placeholder="select here"
                  icon="caret-down"
                  status="success"
                ></z-input>
                <div class="closed" tabindex="-1">
                  <div class="ulScrollWrapper" tabindex="-1">
                    <ul
                      role="listbox"
                      tabindex="-1"
                      id="checkid"
                      class="input_success"
                    >
                      <li
                        role="option"
                        tabindex="-1"
                        class=""
                        id="checkid_0"
                      >
                        <span>SELECT HERE questa opzione con etichetta lunga lunghissima</span>
                      </li>
                    <li
                        role="option"
                        tabindex="-1"
                        class=""
                        id="checkid_1"
                      >
                        <span>primo elemento</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <z-input-message status="success" message="message message"></z-input-message>
              </div>
            </mock:shadow-root>
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
          <mock:shadow-root>
            <div class="selectWrapper">
              <z-input-label aria-label="default" htmlfor="checkid" id="checkid_input_label" value="default"></z-input-label>
              <z-input
                id="checkid_input"
                htmlid="checkid_input"
                placeholder="select here"
                icon="caret-up"
                readonly=""
                status="selecting"
              ></z-input>
              <div class="open" tabindex="-1">
                <div class="ulScrollWrapper" tabindex="-1">
                  <ul
                    role="listbox"
                    tabindex="0"
                    id="checkid"
                    class="input_default"
                  >
                    <li
                      role="option"
                      tabindex="0"
                      class=""
                      id="checkid_0"
                    >
                      <span>SELECT HERE questa opzione con etichetta lunga lunghissima</span>
                    </li>
                  <li
                      role="option"
                      tabindex="-1"
                      id="checkid_1"
                      class="disabled"
                    >
                      <span>primo elemento</span>
                    </li>
                  </ul>
                </div>
              </div>
              <z-input-message></z-input-message>
            </div>
          </mock:shadow-root>
        </z-select>
      `);
  });

  it("Test render ZSelect multiple aperta con elementi", async () => {
    const page = await newSpecPage({
      components: [ZSelect],
      html: `<z-select htmlid="checkid" placeholder="select here" label="default" multiple items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'> </z-select>`,
    });
    page.rootInstance.isOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-select htmlid="checkid" placeholder="select here" label="default" multiple items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'>
        <mock:shadow-root>
          <div class="selectWrapper">
            <z-input-label aria-label="default" htmlfor="checkid" id="checkid_input_label" value="default"></z-input-label>
            <z-input
              id="checkid_input"
              htmlid="checkid_input"
              placeholder="select here"
              icon="caret-up"
              readonly=""
              status="selecting"
            ></z-input>
            <div class="open" tabindex="-1">
              <div class="ulScrollWrapper" tabindex="-1">
                <ul
                  role="listbox"
                  tabindex="0"
                  id="checkid"
                  class="input_default"
                  aria-multiselectable=""
                >
                  <li
                    role="option"
                    tabindex="0"
                    class=""
                    id="checkid_0"
                  >
                    <span>SELECT HERE questa opzione con etichetta lunga lunghissima</span>
                  </li>
                  <li
                    role="option"
                    tabindex="0"
                    class=""
                    id="checkid_1"
                  >
                    <span>primo elemento</span>
                  </li>
                </ul>
              </div>
            </div>
            <z-input-message></z-input-message>
          </div>
        </mock:shadow-root>
      </z-select>
    `);
  });

  it("Test render ZSelect multiple aperta con elementi selezionati", async () => {
    const page = await newSpecPage({
      components: [ZSelect],
      html: `<z-select htmlid="checkid" placeholder="select here" label="default" multiple items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":true}]'> </z-select>`,
    });
    page.rootInstance.isOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-select htmlid="checkid" placeholder="select here" label="default" multiple items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":true}]'>
        <mock:shadow-root>
          <div class="selectWrapper">
            <z-input-label aria-label="default" htmlfor="checkid" id="checkid_input_label" value="default"></z-input-label>
            <div class="chipsWrapper open">
              <z-button-filter filterid="item_1" filtername="primo elemento" issmall="" />
            </div>
            <z-input
              id="checkid_input"
              htmlid="checkid_input"
              placeholder="select here"
              icon="caret-up"
              readonly=""
              status="selecting"
            ></z-input>
            <div class="open" tabindex="-1">
              <div class="ulScrollWrapper" tabindex="-1">
                <ul
                  role="listbox"
                  tabindex="0"
                  id="checkid"
                  class="input_default filled"
                  aria-multiselectable=""
                >
                  <li
                    role="option"
                    tabindex="0"
                    class=""
                    id="checkid_0"
                  >
                    <span>SELECT HERE questa opzione con etichetta lunga lunghissima</span>
                  </li>
                  <li
                    role="option"
                    tabindex="0"
                    class=""
                    id="checkid_1"
                    aria-selected=""
                  >
                    <span>primo elemento</span>
                  </li>
                </ul>
              </div>
            </div>
            <z-input-message></z-input-message>
          </div>
        </mock:shadow-root>
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
        <mock:shadow-root>
          <div class="selectWrapper">
            <z-input-label aria-label="default" htmlfor="checkid" id="checkid_input_label" value="default"></z-input-label>
            <z-input
              id="checkid_input"
              htmlid="checkid_input"
              placeholder="select here"
              icon="caret-up"
              hasclearicon=""
              status="selecting"
            ></z-input>
            <div class="open" tabindex="-1">
              <div class="ulScrollWrapper" tabindex="-1">
                <ul
                  role="listbox"
                  tabindex="0"
                  id="checkid"
                  class="input_default"
                >
                  <li
                    role="option"
                    tabindex="0"
                    class=""
                    id="checkid_0"
                  >
                    <span>SELECT HERE questa opzione con etichetta lunga lunghissima</span>
                  </li>
                  <li
                    role="option"
                    tabindex="0"
                    class=""
                    id="checkid_1"
                  >
                    <span>primo elemento</span>
                  </li>
                </ul>
              </div>
            </div>
            <z-input-message></z-input-message>
          </div>
        </mock:shadow-root>
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
        <mock:shadow-root>
          <div class="selectWrapper">
            <z-input-label aria-label="default" htmlfor="checkid" id="checkid_input_label" value="default"></z-input-label>
            <z-input
              id="checkid_input"
              htmlid="checkid_input"
              placeholder="select here"
              icon="caret-up"
              hasclearicon=""
              status="selecting"
            ></z-input>
            <div class="open" tabindex="-1">
              <div class="ulScrollWrapper" tabindex="-1">
                <ul
                  role="listbox"
                  tabindex="0"
                  id="checkid"
                  class="input_default"
                >
                  <li
                    role="option"
                    tabindex="0"
                    class=""
                    id="checkid_0"
                  >
                    <span>SELECT HERE questa <b>opzione</b> con etichetta lunga lunghissima</span>
                  </li>
                </ul>
              </div>
            </div>
            <z-input-message></z-input-message>
          </div>
        </mock:shadow-root>
      </z-select>
    `);
  });
});

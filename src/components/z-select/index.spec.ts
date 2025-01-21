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
                class="cursor-select"
                label="default"
                id="checkid_input"
                htmlid="checkid_select_input"
                placeholder="select here"
                icon="caret-down"
                aria-label=""
                aria-autocomplete="none"
                aria-expanded="false"
                aria-activedescendant=""
                aria-controls="checkid_list"
                role="combobox"
                size="big"
              ></z-input>
              <div class="closed">
                <div class="ul-scroll-wrapper">
                  <z-list
                    role="listbox"
                    aria-label="default"
                    tabindex="-1"
                    id="checkid_list"
                    size="medium"
                  >
                    <z-list-element
                      clickable=""
                      aria-selected="false"
                      dividertype="header"
                      role="option"
                      tabindex="-1"
                      class=""
                      id="checkid_0"
                      size="medium"
                    >
                    <div class="list-element-container">
                      <div class="list-element-content">SELECT HERE questa opzione con etichetta lunga lunghissima</div>
                    </div>
                    </z-list-element>
                  </z-list>
                </div>
              </div>
              <z-input-message class="big"></z-input-message>
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
                class="cursor-select active-select"
                label="default"
                id="checkid_input"
                htmlid="checkid_select_input"
                placeholder="select here"
                icon="caret-up"
                readonly=""
                aria-label=""
                aria-autocomplete="none"
                aria-expanded="true"
                aria-controls="checkid_list"
                role="combobox"
                size="big"
              ></z-input>
              <div class="open">
                <div class="ul-scroll-wrapper">
                  <z-list
                    role="listbox"
                    aria-label="default"
                    tabindex="0"
                    id="checkid_list"
                    size="medium"
                  >
                    <z-list-element
                      clickable=""
                      aria-selected="false"
                      dividertype="element"
                      role="option"
                      tabindex="0"
                      class=""
                      id="checkid_0"
                      size="medium"
                    >
                    <div class="list-element-container">
                      <div class="list-element-content">SELECT HERE questa opzione con etichetta lunga lunghissima</div>
                    </div>
                    </z-list-element>
                    <z-list-element
                      clickable=""
                      aria-selected="false"
                      dividertype="header"
                      role="option"
                      tabindex="0"
                      class=""
                      id="checkid_1"
                      size="medium"
                    >
                    <div class="list-element-container">
                      <div class="list-element-content">primo elemento</div>
                    </div>
                    </z-list-element>
                  </z-list>
                </div>
              </div>
              <z-input-message class="big"></z-input-message>
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
              class="cursor-select active-select"
              label="default"
              id="checkid_input"
              htmlid="checkid_select_input"
              placeholder="select here"
              icon="caret-up"
              readonly=""
              aria-label=""
              aria-autocomplete="none"
              aria-expanded="true"
              aria-controls="checkid_list"
              role="combobox"
              size="big"
            ></z-input>
            <div class="open">
              <div class="ul-scroll-wrapper">
                <z-list
                  role="listbox"
                  aria-label="default"
                  tabindex="0"
                  id="checkid_list"
                  size="medium"
                >
                  <z-list-element
                    clickable=""
                    aria-selected="false"
                    dividertype="element"
                    role="option"
                    tabindex="0"
                    class=""
                    id="checkid_0"
                    size="medium"
                  >
                  <div class="list-element-container">
                    <div class="list-element-content">SELECT HERE questa opzione con etichetta lunga lunghissima</div>
                  </div>
                  </z-list-element>
                  <z-list-element
                    clickable=""
                    dividertype="header"
                    role="option"
                    tabindex="0"
                    aria-selected="true"
                    class=""
                    id="checkid_1"
                    size="medium"
                  >
                  <div class="list-element-container">
                    <div class="list-element-content selected">primo elemento</div>
                  </div>
                  </z-list-element>
                </z-list>
              </div>
            </div>
            <z-input-message class="big"></z-input-message>
          </div>
      </z-select>
    `);
  });

  it("Test render ZSelect chiusa disabilitata con elementi", async () => {
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
                class="cursor-select"
                label="default"
                id="checkid_input"
                htmlid="checkid_select_input"
                placeholder="select here"
                icon="caret-down"
                disabled=""
                readonly=""
                aria-label=""
                aria-autocomplete="none"
                aria-expanded="false"
                aria-activedescendant=""
                aria-controls="checkid_list"
                role="combobox"
                size="big"
              ></z-input>
              <div class="closed">
                <div class="ul-scroll-wrapper">
                  <z-list
                    role="listbox"
                    aria-label="default"
                    tabindex="-1"
                    id="checkid_list"
                    class="disabled readonly"
                    size="medium"
                  >
                    <z-list-element
                      clickable=""
                      aria-selected="false"
                      dividertype="element"
                      role="option"
                      tabindex="-1"
                      class=""
                      id="checkid_0"
                      size="medium"
                    >
                    <div class="list-element-container">
                      <div class="list-element-content">SELECT HERE questa opzione con etichetta lunga lunghissima</div>
                    </div>
                    </z-list-element>
                    <z-list-element
                      clickable=""
                      aria-selected="false"
                      dividertype="header"
                      role="option"
                      tabindex="-1"
                      class=""
                      id="checkid_1"
                      size="medium"
                    >
                    <div class="list-element-container">
                      <div class="list-element-content">primo elemento</div>
                    </div>
                    </z-list-element>
                  </z-list>
                </div>
              </div>
              <z-input-message disabled class="big"></z-input-message>
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
                  class="cursor-select"
                  aria-label=""
                  label="default"
                  id="checkid_input"
                  htmlid="checkid_select_input"
                  placeholder="select here"
                  icon="caret-down"
                  status="success"
                  aria-autocomplete="none"
                  aria-expanded="false"
                  aria-activedescendant=""
                  aria-controls="checkid_list"
                  role="combobox"
                  size="big"
                ></z-input>
                <div class="closed">
                  <div class="ul-scroll-wrapper">
                    <z-list
                      role="listbox"
                      aria-label="default"
                      tabindex="-1"
                      id="checkid_list"
                      class="input-success"
                      size="medium"
                    >
                      <z-list-element
                        clickable=""
                        aria-selected="false"
                        dividertype="element"
                        role="option"
                        tabindex="-1"
                        class=""
                        id="checkid_0"
                        size="medium"
                      >
                      <div class="list-element-container">
                        <div class="list-element-content">SELECT HERE questa opzione con etichetta lunga lunghissima</div>
                      </div>
                      </z-list-element>
                    <z-list-element
                        clickable=""
                        aria-selected="false"
                        dividertype="header"
                        role="option"
                        tabindex="-1"
                        class=""
                        id="checkid_1"
                        size="medium"
                      >
                      <div class="list-element-container">
                        <div class="list-element-content">primo elemento</div>
                      </div>
                      </z-list-element>
                    </z-list>
                  </div>
                </div>
                <z-input-message class="big" status="success" message="message message"></z-input-message>
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
                class="cursor-select active-select"
                aria-label=""
                label="default"
                id="checkid_input"
                htmlid="checkid_select_input"
                placeholder="select here"
                icon="caret-up"
                readonly=""
                aria-autocomplete="none"
                aria-expanded="true"
                aria-controls="checkid_list"
                role="combobox"
                size="big"
              ></z-input>
              <div class="open">
                <div class="ul-scroll-wrapper">
                  <z-list
                    role="listbox"
                    aria-label="default"
                    tabindex="0"
                    id="checkid_list"
                    size="medium"
                  >
                    <z-list-element
                      clickable=""
                      aria-selected="false"
                      dividertype="element"
                      role="option"
                      tabindex="0"
                      class=""
                      id="checkid_0"
                      size="medium"
                    >
                    <div class="list-element-container">
                      <div class="list-element-content">SELECT HERE questa opzione con etichetta lunga lunghissima</div>
                    </div>
                    </z-list-element>
                  <z-list-element
                      disabled=""
                      aria-selected="false"
                      dividertype="header"
                      role="option"
                      tabindex="-1"
                      id="checkid_1"
                      size="medium"
                    >
                    <div class="list-element-container">
                      <div class="list-element-content">primo elemento</div>
                    </div>
                    </z-list-element>
                  </z-list>
                </div>
              </div>
              <z-input-message class="big"></z-input-message>
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
              class="active-select"
              label="default"
              id="checkid_input"
              htmlid="checkid_select_input"
              placeholder="select here"
              icon="caret-up"
              hasclearicon=""
              aria-label=""
              aria-autocomplete="list"
              aria-expanded="true"
              aria-controls="checkid_list"
              role="combobox"
              size="big"
            ></z-input>
            <div class="open">
              <div class="ul-scroll-wrapper">
                <z-list
                  role="listbox"
                  aria-label="default"
                  tabindex="0"
                  id="checkid_list"
                  size="medium"
                >
                  <z-list-element
                    clickable=""
                    aria-selected="false"
                    dividertype="element"
                    role="option"
                    tabindex="0"
                    class=""
                    id="checkid_0"
                    size="medium"
                  >
                  <div class="list-element-container">
                    <div class="list-element-content">SELECT HERE questa opzione con etichetta lunga lunghissima</div>
                  </div>
                  </z-list-element>
                  <z-list-element
                    clickable=""
                    aria-selected="false"
                    dividertype="header"
                    role="option"
                    tabindex="0"
                    class=""
                    id="checkid_1"
                    size="medium"
                  >
                  <div class="list-element-container">
                    <div class="list-element-content">primo elemento</div>
                  </div>
                  </z-list-element>
                </z-list>
              </div>
            </div>
            <z-input-message class="big"></z-input-message>
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
            <z-input class="active-select"aria-autocomplete="list"  aria-controls="checkid_list" role="combobox" aria-label="" aria-expanded="true" label="default" hasclearicon="" size="big" htmlid="checkid_select_input" icon="caret-up" id="checkid_input" placeholder="select here"></z-input>
            <div class="open">
              <div class="ul-scroll-wrapper">
                <z-list id="checkid_list" role="listbox" aria-label="default" tabindex="0" size="medium">
                  <z-list-element clickable="" aria-selected="false" dividertype="header" id="checkid_0" role="option" size="medium" tabindex="0">
                  <div class="list-element-container">
                    <div class="list-element-content">
                      SELECT HERE questa
                      <strong>
                        opzione
                      </strong>
                      con etichetta lunga lunghissima
                    </div>
                  </div>
                  </z-list-element>
                </z-list>
              </div>
            </div>
            <z-input-message class="big"></z-input-message>
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
      <z-select autocomplete="true" htmlid="checkid" items="[{&quot;id&quot;:&quot;item_0&quot;,&quot;name&quot;:&quot;SELECT HERE questa opzione con etichetta lunga lunghissima&quot;,&quot;selected&quot;:true}]" label="default" placeholder="select here" reset-item="Pulisci selezione">
          <div class="select-wrapper">
            <z-input aria-expanded="true" aria-label="" aria-autocomplete="list" aria-controls="checkid_list" role="combobox" class="active-select" hasclearicon="" size="big" htmlid="checkid_select_input" icon="caret-up" id="checkid_input" label="default" placeholder="select here"></z-input>
            <div class="open">
              <div class="ul-scroll-wrapper">
                <z-list id="checkid_list" role="listbox" aria-label="default" size="medium" tabindex="0">
                  <z-list-element aria-selected="false" class="reset-item reset-item-margin" clickable="" dividertype="element" size="medium" id="checkid_0" role="option" tabindex="0">
                    <div class="reset-item-content">
                      <z-icon name="multiply-circled"></z-icon>
                      <span>
                        Pulisci selezione
                      </span>
                    </div>
                  </z-list-element>
                  <z-list-element aria-selected="true" clickable="" dividertype="header" id="checkid_1" role="option" size="medium" tabindex="0">
                  <div class="list-element-container">
                    <div class="list-element-content selected">
                      SELECT HERE questa opzione con etichetta lunga lunghissima
                    </div>
                  </div>
                  </z-list-element>
                </z-list>
              </div>
            </div>
            <z-input-message class="big"></z-input-message>
          </div>
        </z-select>
    `);
  });

  it("Test render ZSelect fixed", async () => {
    const page = await newSpecPage({
      components: [ZSelect],
      html: `<z-select htmlid="checkid" placeholder="select here" label="fixed without groups" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]' isfixed="true"> </z-select>`,
    });
    page.rootInstance.isOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
        <z-select htmlid="checkid" placeholder="select here" label="fixed without groups" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]' isfixed="true">
            <div class="select-wrapper">
              <z-input
                class="cursor-select active-select"
                label="fixed without groups"
                id="checkid_input"
                htmlid="checkid_select_input"
                placeholder="select here"
                icon="caret-up"
                readonly=""
                aria-label=""
                aria-expanded="true"
                aria-autocomplete="none"
                aria-controls="checkid_list"
                role="combobox"
                size="big"
              ></z-input>
              <div class="open">
                <div class="fixed ul-scroll-wrapper">
                  <z-list
                    role="listbox"
                    aria-label="fixed without groups"
                    tabindex="0"
                    id="checkid_list"
                    size="medium"
                  >
                    <z-list-element
                      clickable=""
                      aria-selected="false"
                      dividertype="element"
                      role="option"
                      tabindex="0"
                      class=""
                      id="checkid_0"
                      size="medium"
                    >
                    <div class="list-element-container">
                      <div class="list-element-content">SELECT HERE questa opzione con etichetta lunga lunghissima</div>
                    </div>
                    </z-list-element>
                    <z-list-element
                      clickable=""
                      aria-selected="false"
                      dividertype="header"
                      role="option"
                      tabindex="0"
                      class=""
                      id="checkid_1"
                      size="medium"
                    >
                    <div class="list-element-container">
                      <div class="list-element-content">primo elemento</div>
                    </div>
                    </z-list-element>
                  </z-list>
                </div>
              </div>
              <z-input-message class="big"></z-input-message>
            </div>
        </z-select>
      `);
  });
  it("Test render ZSelect aperta con elementi, elemento con icona", async () => {
    const page = await newSpecPage({
      components: [ZSelect],
      html: `<z-select htmlid="checkid" placeholder="select here" label="default" items='[{"id":"item_0","name":"item 0","selected":false,"icon":"teacher"},{"id":"item_1","name":"item 1","selected":false}]'> </z-select>`,
    });
    page.rootInstance.isOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
        <z-select htmlid="checkid" placeholder="select here" label="default" items='[{"id":"item_0","name":"item 0","selected":false,"icon":"teacher"},{"id":"item_1","name":"item 1","selected":false}]'>
            <div class="select-wrapper">
              <z-input
                class="cursor-select active-select"
                label="default"
                id="checkid_input"
                htmlid="checkid_select_input"
                placeholder="select here"
                icon="caret-up"
                readonly=""
                aria-label=""
                aria-autocomplete="none"
                aria-expanded="true"
                aria-controls="checkid_list"
                role="combobox"
                size="big"
              ></z-input>
              <div class="open">
                <div class="ul-scroll-wrapper">
                  <z-list
                    role="listbox"
                    aria-label="default"
                    tabindex="0"
                    id="checkid_list"
                    size="medium"
                  >
                    <z-list-element
                      clickable=""
                      aria-selected="false"
                      dividertype="element"
                      role="option"
                      tabindex="0"
                      class=""
                      id="checkid_0"
                      size="medium"
                    >
                    <div class="list-element-container">
                      <div class="list-element-content">item 0</div>
                      <z-tag icon="teacher"></z-tag>
                    </div>
                    </z-list-element>
                    <z-list-element
                      clickable=""
                      aria-selected="false"
                      dividertype="header"
                      role="option"
                      tabindex="0"
                      class=""
                      id="checkid_1"
                      size="medium"
                    >
                    <div class="list-element-container">
                      <div class="list-element-content">item 1</div>
                    </div>
                    </z-list-element>
                  </z-list>
                </div>
              </div>
              <z-input-message class="big"></z-input-message>
            </div>
        </z-select>
      `);
  });

  it("Test render ZSelect con alberatura", async () => {
    const page = await newSpecPage({
      components: [ZSelect],
      html: `<z-select
      htmlid="checkid"
      placeholder="select here"
      label="default"
      items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false,"children":[{"id":"item_0_1","name":"sotto elemento 1","selected":false},{"id":"item_0_2","name":"sotto elemento 2","selected":false}]},{"id":"item_1","name":"primo elemento","selected":false}]'
    ></z-select>`,
    });

    page.rootInstance.isOpen = true;
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
    <z-select
      htmlid="checkid"
      placeholder="select here"
      label="default"
      items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false,"children":[{"id":"item_0_1","name":"sotto elemento 1","selected":false},{"id":"item_0_2","name":"sotto elemento 2","selected":false}]},{"id":"item_1","name":"primo elemento","selected":false}]'
    >
      <div class="select-wrapper">
        <z-input
          class="cursor-select active-select"
          label="default"
          id="checkid_input"
          htmlid="checkid_select_input"
          placeholder="select here"
          icon="caret-up"
          readonly=""
          aria-label=""
          aria-autocomplete="none"
          aria-expanded="true"
          aria-controls="checkid_list"
          role="combobox"
          size="big"
        ></z-input>
        <div class="open">
          <div class="ul-scroll-wrapper">
            <z-list
              role="listbox"
              aria-label="default"
              tabindex="0"
              id="checkid_list"
              size="medium"
            >
              <z-list-element
                clickable=""
                aria-selected="false"
                dividertype="element"
                role="option"
                tabindex="0"
                class=""
                id="checkid_0"
                size="medium"
              >
                <div class="list-element-container">
                  <div class="list-element-content">
                    SELECT HERE questa opzione con etichetta lunga lunghissima
                  </div>
                </div>
              </z-list-element>
              <z-list-element
                clickable=""
                aria-selected="false"
                dividertype="header"
                role="option"
                tabindex="0"
                class=""
                id="checkid_1"
                size="medium"
              >
                <div class="list-element-container">
                  <div class="list-element-content">
                    primo elemento
                  </div>
                </div>
              </z-list-element>
            </z-list>
          </div>
        </div>
        <z-input-message class="big"></z-input-message>
      </div>
    </z-select>
  `);
  });
});

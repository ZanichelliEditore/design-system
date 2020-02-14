import { newSpecPage } from "@stencil/core/testing";

import { ZCombobox } from "./index";

describe("Suite test ZCombobox", () => {
  it("Test render ZCombobox chiusa", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox items='[]'></z-combobox>`
    });
    page.rootInstance.isopen = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox items='[]'>
        <mock:shadow-root>
          <div class="false" data-action="combo-undefined">
            <header tabindex="0">
              <h2><span></span></h2>
              <z-icon name="drop-down" width="18" height="18" />
            </header>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox chiusa con attributi", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox items='[]' inputid="combobox" label="label" isfixed></z-combobox>`
    });
    page.rootInstance.isopen = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox items='[]' inputid="combobox" label="label" isfixed>
        <mock:shadow-root>
          <div class="false fixed" id="combobox" data-action="combo-combobox">
            <header tabindex="0">
              <h2>
                label
                <span></span>
              </h2>
              <z-icon name="drop-down" width="18" height="18" />
            </header>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox chiusa con attributi ed elemento selezionato", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]' inputid="combobox" label="label"></z-combobox>`
    });
    page.rootInstance.isopen = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]' inputid="combobox" label="label">
        <mock:shadow-root>
          <div class="false" data-action="combo-combobox" id="combobox">
            <header tabindex="0">
              <h2>
                label
                <span>(1)</span>
              </h2>
              <z-icon name="drop-down" width="18" height="18" />
            </header>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox aperta vuota", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox items='[]' noresultslabel='non ci sono risultati'></z-combobox>`
    });
    expect(page.root).toEqualHtml(`
      <z-combobox items='[]' noresultslabel='non ci sono risultati'>
        <mock:shadow-root>
          <div class="open false" data-action="combo-undefined">
            <header tabindex="0">
              <h2><span></span></h2>
              <z-icon name="drop-down" width="18" height="18" />
            </header>
            <div class="openComboData">
              <div>
                <ul>
                  <z-list-item id='no-results' text='non ci sono risultati' listitemid='no-results' icon='circle-cross-stroke'></z-list-item>
                </ul>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox aperta con elementi", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combo" label="combo" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`
    });
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open false" data-action="combo-combo" id="combo">
            <header tabindex="0">
              <h2>combo<span>(1)</span></h2>
              <z-icon name="drop-down" width="18" height="18" />
            </header>
            <div class="openComboData">
              <div>
                <ul>
                  <z-list-item id="item_1" text="primo elemento" listitemid="item_1" icon="checkbox-unchecked" action="combo-li-combo" underlined="" tabindex="0"></z-list-item>
                  <z-list-item id="item_2" text="secondo elemento" listitemid="item_2" icon="checkbox-selected" action="combo-li-combo" tabindex="0"></z-list-item>
                </ul>
              </div
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox aperta con ricerca", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`
    });
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open false" data-action="combo-combo" id="combo">
            <header tabindex="0">
              <h2>combo<span>(1)</span></h2>
              <z-icon name="drop-down" width="18" height="18" />
            </header>
            <div class="openComboData">
              <z-input-text inputid="combo_search" label="cerca" placeholder="placeholder" type="text"></z-input-text>
              <div>
                <ul>
                  <z-list-item id="item_1" text="primo elemento" listitemid="item_1" icon="checkbox-unchecked" action="combo-li-combo" underlined="" tabindex="0"></z-list-item>
                  <z-list-item id="item_2" text="secondo elemento" listitemid="item_2" icon="checkbox-selected" action="combo-li-combo" tabindex="0"></z-list-item>
                </ul>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox aperta con ricerca attiva e risultati", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" closesearchtext="CHIUDI" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`
    });
    page.rootInstance.searchValue = "primo";
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" closesearchtext="CHIUDI" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open false" data-action="combo-combo" id="combo">
            <header tabindex="0">
              <h2>combo<span>(1)</span></h2>
              <z-icon name="drop-down" width="18" height="18" />
            </header>
            <div class="openComboData">
              <z-input-text inputid="combo_search" label="cerca" placeholder="placeholder" type="text" value="primo"></z-input-text>
              <div class="search">
                <ul>
                  <z-list-item id="item_1" text="<b>primo</b> elemento" listitemid="item_1" icon="checkbox-unchecked" action="combo-li-combo" tabindex="0"></z-list-item>
                </ul>
                <a role="button">CHIUDI</a>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox aperta con ricerca attiva senza testo di chiusura della ricerca testuale", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`
    });
    page.rootInstance.searchValue = "primo";
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open false" data-action="combo-combo" id="combo">
            <header tabindex="0">
              <h2>combo<span>(1)</span></h2>
              <z-icon name="drop-down" width="18" height="18" />
            </header>
            <div class="openComboData">
              <z-input-text inputid="combo_search" label="cerca" placeholder="placeholder" type="text" value="primo"></z-input-text>
              <div class="search">
                <ul>
                  <z-list-item id="item_1" text="<b>primo</b> elemento" listitemid="item_1" icon="checkbox-unchecked" action="combo-li-combo" tabindex="0"></z-list-item>
                </ul>
                <a role="button"></a>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox aperta con ricerca attiva senza risultati", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" closesearchtext="CHIUDI" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]' noresultslabel='non ci sono risultati'></z-combobox>`
    });
    page.rootInstance.searchValue = "prova";
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" closesearchtext="CHIUDI" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]' noresultslabel='non ci sono risultati'>
        <mock:shadow-root>
          <div class="open false" data-action="combo-combo" id="combo">
            <header tabindex="0">
              <h2>combo<span>(1)</span></h2>
              <z-icon name="drop-down" width="18" height="18" />
            </header>
            <div class="openComboData">
              <z-input-text inputid="combo_search" label="cerca" placeholder="placeholder" type="text" value="prova"></z-input-text>
              <div class="search">
                <ul>
                  <z-list-item id='no-results' text='non ci sono risultati' listitemid='no-results' icon='circle-cross-stroke'></z-list-item>
                </ul>
                <a role="button">CHIUDI</a>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });
});

import { newSpecPage } from "@stencil/core/testing";

import { ZCombobox } from "./index";

describe("Suite test ZCombobox", () => {
  it("Test render ZCombobox chiusa", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox items='[]'></z-combobox>`
    });
    page.rootInstance.isOpen = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox items='[]'>
        <mock:shadow-root>
          <div class="">
            <header>
              <h2><span></span></h2>
              <z-icon name="select-icon-stroked" width="18" height="18" />
            </header>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox chiusa con attributi", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox items='[]' inputid="combobox" label="label"></z-combobox>`
    });
    page.rootInstance.isOpen = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox items='[]' inputid="combobox" label="label">
        <mock:shadow-root>
          <div class="" id="combobox">
            <header>
              <h2>
                label
                <span></span>
              </h2>
              <z-icon name="select-icon-stroked" width="18" height="18" />
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
    page.rootInstance.isOpen = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]' inputid="combobox" label="label">
        <mock:shadow-root>
          <div class="" id="combobox">
            <header>
              <h2>
                label
                <span>(1)</span>
              </h2>
              <z-icon name="select-icon-stroked" width="18" height="18" />
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
          <div class="open">
            <header>
              <h2><span></span></h2>
              <z-icon name="select-icon-stroked" width="18" height="18" />
            </header>
            <div class="">
              <ul>
                <z-list-item id='no-results' text='non ci sono risultati' listitemid='no-results' icon='error-icon-stroked'></z-list-item>
              </ul>
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
          <div class="open" id="combo">
            <header>
              <h2>combo<span>(1)</span></h2>
              <z-icon name="select-icon-stroked" width="18" height="18" />
            </header>
            <div class="">
              <ul>
                <z-list-item id="item_1" text="primo elemento" listitemid="item_1" icon="checkbox-unchecked-icon" action="combo-li-combo" underlined=""></z-list-item>
                <z-list-item id="item_2" text="secondo elemento" listitemid="item_2" icon="checkbox-success-icon-filled" action="combo-li-combo"></z-list-item>
            </ul>
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
          <div class="open" id="combo">
            <header>
              <h2>combo<span>(1)</span></h2>
              <z-icon name="select-icon-stroked" width="18" height="18" />
            </header>
            <z-input-text inputid="combo_search" label="cerca" placeholder="placeholder" type="text"></z-input-text>
            <div class="">
              <ul>
                <z-list-item id="item_1" text="primo elemento" listitemid="item_1" icon="checkbox-unchecked-icon" action="combo-li-combo" underlined=""></z-list-item>
                <z-list-item id="item_2" text="secondo elemento" listitemid="item_2" icon="checkbox-success-icon-filled" action="combo-li-combo"></z-list-item>
              </ul>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox aperta con ricerca attiva e risultati", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`
    });
    page.rootInstance.searchValue = "primo";
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open" id="combo">
            <header>
              <h2>combo<span>(1)</span></h2>
              <z-icon name="select-icon-stroked" width="18" height="18" />
            </header>
            <z-input-text inputid="combo_search" label="cerca" placeholder="placeholder" type="text" value="primo"></z-input-text>
            <div class="search">
              <ul>
                <z-list-item id="item_1" text="<b>primo</b> elemento" listitemid="item_1" icon="checkbox-unchecked-icon" action="combo-li-combo"></z-list-item>
              </ul>
              <a>CHIUDI</a>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox aperta con ricerca attiva senza risultati", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]' noresultslabel='non ci sono risultati'></z-combobox>`
    });
    page.rootInstance.searchValue = "prova";
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]' noresultslabel='non ci sono risultati'>
        <mock:shadow-root>
          <div class="open" id="combo">
            <header>
              <h2>combo<span>(1)</span></h2>
              <z-icon name="select-icon-stroked" width="18" height="18" />
            </header>
            <z-input-text inputid="combo_search" label="cerca" placeholder="placeholder" type="text" value="prova"></z-input-text>
            <div class="search">
              <ul>
                <z-list-item id='no-results' text='non ci sono risultati' listitemid='no-results' icon='error-icon-stroked'></z-list-item>
              </ul>
              <a>CHIUDI</a>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });
});

import {newSpecPage} from "@stencil/core/testing";
import {ZCombobox} from "./index";

describe("Suite test ZCombobox", () => {
  it("Test render ZCombobox - closed", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox items='[]' inputid="combobox"></z-combobox>`,
    });
    expect(page.root).toEqualHtml(`
      <z-combobox items='[]' inputid="combobox">
        <mock:shadow-root>
          <div data-action="combo-combobox" id="combobox">
            <div aria-controls="open-combo-data" aria-expanded="false" class="header" role="button" tabindex="0">
            <span class="body-3"><span></span></span>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data" id="open-combo-data">
              <span aria-activedescendant="" aria-controls="combobox_list" aria-expanded="false" role="combobox"></span>
              <div aria-multiselectable="true" aria-owns="" id="combobox_list" role="listbox">
                <div role="presentation" tabindex="-1">
                  <ul role="presentation"></ul>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox - disabled", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox items='[]' inputid="combobox" disabled='true'></z-combobox>`,
    });
    expect(page.root).toEqualHtml(`
      <z-combobox disabled='' items='[]' inputid="combobox">
        <mock:shadow-root>
          <div class="disabled" data-action="combo-combobox" id="combobox">
            <div aria-controls="open-combo-data" aria-expanded="false" class="header" role="button" tabindex="0">
            <span class="body-3"><span></span></span>
              <z-icon class="big" name="caret-down" />
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox - closed with attributes", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox items='[]' inputid="combobox" label="label" isfixed></z-combobox>`,
    });
    expect(page.root).toEqualHtml(`
      <z-combobox items='[]' inputid="combobox" label="label" isfixed>
        <mock:shadow-root>
          <div class="fixed" id="combobox" data-action="combo-combobox">
            <div aria-controls="open-combo-data" aria-expanded="false" class="header" role="button" tabindex="0">
              <span class="body-3">
                label
                <span></span>
              </span>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data" id="open-combo-data">
              <span aria-activedescendant="" aria-controls="combobox_list" aria-expanded="false" role="combobox"></span>
              <div aria-label="label" aria-multiselectable="true" aria-owns="" id="combobox_list" role="listbox">
                <div role="presentation" tabindex="-1">
                  <ul role="presentation"></ul>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox - closed with attributes and selected item", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]' inputid="combobox" label="label"></z-combobox>`,
    });
    expect(page.root).toEqualHtml(`
      <z-combobox items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]' inputid="combobox" label="label">
        <mock:shadow-root>
          <div data-action="combo-combobox" id="combobox">
            <div aria-controls="open-combo-data" aria-expanded="false" class="header" role="button" tabindex="0">
              <span class="body-3">
                label
                <span>(1)</span>
              </span>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data" id="open-combo-data">
              <span aria-activedescendant="" aria-controls="combobox_list" aria-expanded="false" role="combobox"></span>
              <div aria-label="label" aria-multiselectable="true" aria-owns="" id="combobox_list" role="listbox">
                <div role="presentation" tabindex="-1">
                  <ul role="presentation">
                    <z-list-element aria-selected="false" dividertype="element" id="option-item_1" role="option" size="large">
                      <z-input class="combo-item-checkbox-input-combobox" disabled="0" htmlid="combo-checkbox-combobox-item_1" label="primo elemento" size="big" type="checkbox"></z-input>
                    </z-list-element>
                    <z-list-element aria-selected="true" dividertype="none" id="option-item_2" role="option" size="large">
                      <z-input checked="" class="combo-item-checkbox-input-combobox" htmlid="combo-checkbox-combobox-item_2" label="secondo elemento" size="big" type="checkbox"></z-input>
                    </z-list-element>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox - open without items", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox items='[]' inputid="combobox" noresultslabel='non ci sono risultati'></z-combobox>`,
    });
    page.rootInstance.isopen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox items='[]' inputid="combobox" noresultslabel='non ci sono risultati'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combobox" id="combobox">
            <div aria-controls="open-combo-data" aria-expanded="true" class="header" role="button" tabindex="0">
           <span class="body-3"><span></span></span>
              <z-icon class="big" name="caret-down" ></z-icon>
            </div>
            <div class="open-combo-data" id="open-combo-data">
              <span role="combobox" aria-controls="combobox_list" aria-expanded="true"></span>
              <div aria-multiselectable="true" role="listbox" id="combobox_list" aria-owns="">
                <div role="presentation" tabindex="-1">
                  <ul role="presentation"></ul>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox - open with items", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combobox" label="combo" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`,
    });
    page.rootInstance.isopen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combobox" label="combo" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combobox" id="combobox">
            <div aria-controls="open-combo-data" aria-expanded="true" class="header" role="button" tabindex="0">
            <span class="body-3">combo<span>(1)</span></span>
              <z-icon class="big" name="caret-down" />
            </div>
             <div class="open-combo-data" id="open-combo-data">
              <span role="combobox" aria-controls="combobox_list" aria-expanded="true"></span>
              <div aria-multiselectable="true" role="listbox" aria-label="combo" id="combobox_list" aria-owns="option-item_1 option-item_2">
                <div role="presentation" tabindex="-1">
                  <ul role="presentation">
                    <z-list-element dividertype="element" id="option-item_1" size="large" role="option" aria-selected="false">
                      <z-input disabled="0" class="combo-item-checkbox-input-combobox" type="checkbox" size="big" htmlid="combo-checkbox-combobox-item_1" label="primo elemento"></z-input>
                    </z-list-element>
                    <z-list-element dividertype="none" id="option-item_2" size="large" role="option" aria-selected="true">
                      <z-input type="checkbox" class="combo-item-checkbox-input-combobox" size="big" htmlid="combo-checkbox-combobox-item_2" label="secondo elemento" checked></z-input>
                    </z-list-element>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox - open with search input", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combobox" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`,
    });
    page.rootInstance.isopen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combobox" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combobox" id="combobox">
            <div aria-controls="open-combo-data" aria-expanded="true" class="header" role="button" tabindex="0">
            <span class="body-3">combo<span>(1)</span></span>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data" id="open-combo-data">
              <z-input html-aria-autocomplete="list" html-aria-controls="combobox_list" html-aria-expanded="true" htmlid="combobox_search" label="cerca" placeholder="placeholder" role="combobox" size="big" type="text"></z-input>
              <div aria-multiselectable="true" role="listbox" aria-label="combo" id="combobox_list" aria-owns="option-item_1 option-item_2">
                <div role="presentation" tabindex="-1">
                  <ul role="presentation">
                    <z-list-element dividertype="element" id="option-item_1" size="large" role="option" aria-selected="false">
                      <z-input disabled="0" class="combo-item-checkbox-input-combobox" type="checkbox" size="big" htmlid="combo-checkbox-combobox-item_1" label="primo elemento"></z-input>
                    </z-list-element>
                    <z-list-element dividertype="none" id="option-item_2" size="large" role="option" aria-selected="true">
                      <z-input type="checkbox" class="combo-item-checkbox-input-combobox" size="big" htmlid="combo-checkbox-combobox-item_2"  label="secondo elemento" checked></z-input>
                    </z-list-element>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox - open with search input and results", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combobox" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`,
    });
    page.rootInstance.isopen = true;
    page.rootInstance.searchValue = "primo";
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combobox" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combobox" id="combobox">
            <div aria-controls="open-combo-data" aria-expanded="true" class="header" role="button" tabindex="0">
            <span class="body-3">combo<span>(1)</span></span>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data" id="open-combo-data">
              <z-input html-aria-autocomplete="list" html-aria-controls="combobox_list" html-aria-expanded="true" htmlid="combobox_search" label="cerca" placeholder="placeholder" role="combobox" size="big" type="text" value="primo"></z-input>
              <div aria-multiselectable="true" role="listbox" aria-label="combo" id="combobox_list" aria-owns="option-item_1 option-item_2">
                <div class="search" role="presentation" tabindex="-1">
                  <ul role="presentation">
                    <z-list-element dividertype="none" id="option-item_1" size="large" role="option" aria-selected="false">
                      <z-input disabled="0" class="combo-item-checkbox-input-combobox" type="checkbox" size="big" htmlid="combo-checkbox-combobox-item_1" label="<strong>primo</strong> elemento"></z-input>
                    </z-list-element>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox - open with search input, without close button", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combobox" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`,
    });
    page.rootInstance.isopen = true;
    page.rootInstance.searchValue = "primo";
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combobox" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combobox" id="combobox">
            <div aria-controls="open-combo-data" aria-expanded="true" class="header" role="button" tabindex="0">
            <span class="body-3">combo<span>(1)</span></span>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data" id="open-combo-data">
              <z-input html-aria-autocomplete="list" html-aria-controls="combobox_list" html-aria-expanded="true" htmlid="combobox_search" label="cerca" placeholder="placeholder" role="combobox" size="big" type="text" value="primo"></z-input>
              <div aria-multiselectable="true" role="listbox" aria-label="combo" id="combobox_list" aria-owns="option-item_1 option-item_2">
                <div class="search" role="presentation" tabindex="-1">
                  <ul role="presentation">
                    <z-list-element dividertype="none" id="option-item_1" size="large" role="option" aria-selected="false">
                      <z-input disabled="0" class="combo-item-checkbox-input-combobox" type="checkbox" size="big" htmlid="combo-checkbox-combobox-item_1" label="<strong>primo</strong> elemento"></z-input>
                    </z-list-element>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox - open with search input, with empty result", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combobox" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]' noresultslabel='non ci sono risultati'></z-combobox>`,
    });
    page.rootInstance.isopen = true;
    page.rootInstance.searchValue = "prova";
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combobox" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]' noresultslabel='non ci sono risultati'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combobox" id="combobox">
            <div aria-controls="open-combo-data" aria-expanded="true" class="header" role="button" tabindex="0">
              <span class="body-3">combo<span>(1)</span></span>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data" id="open-combo-data">
              <z-input html-aria-autocomplete="list" html-aria-controls="combobox_list" html-aria-expanded="true" htmlid="combobox_search" label="cerca" placeholder="placeholder" role="combobox" size="big" type="text" value="prova"></z-input>
              <div aria-label="combo" aria-multiselectable="true" role="listbox" id="combobox_list" aria-owns="option-item_1 option-item_2">
                <div class="search" role="presentation" tabindex="-1">
                  <div class="no-results">
                    <span>non ci sono risultati</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox - open with check all", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combobox" label="combo" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`,
    });
    page.rootInstance.isopen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combobox" label="combo" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combobox" id="combobox">
            <div aria-controls="open-combo-data" aria-expanded="true" class="header" role="button" tabindex="0">
              <span class="body-3">combo<span>(1)</span></span>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data" id="open-combo-data">
              <span role="combobox" aria-controls="combobox_list" aria-expanded="true"></span>
              <div aria-multiselectable="true" role="listbox" aria-label="combo" id="combobox_list" aria-owns="option-check-all option-item_1 option-item_2">
                <div class="check-all-wrapper" id="option-check-all" role="option">
                  <z-input type="checkbox" size="big" htmlid="combo-checkbox-combobox-check-all" class="combo-item-checkbox-input-combobox" label="CHECK" disabled="0" />
                </div>
                <div role="presentation" tabindex="-1">
                  <ul role="presentation">
                    <z-list-element dividertype="element" id="option-item_1" size="large" role="option" aria-selected="false">
                      <z-input disabled="0" class="combo-item-checkbox-input-combobox" type="checkbox" size="big" htmlid="combo-checkbox-combobox-item_1" label="primo elemento"></z-input>
                    </z-list-element>
                  <z-list-element dividertype="none" id="option-item_2" size="large" role="option" aria-selected="true">
                      <z-input type="checkbox" class="combo-item-checkbox-input-combobox" size="big" htmlid="combo-checkbox-combobox-item_2" label="secondo elemento" checked></z-input>
                    </z-list-element>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox - open with uncheck all", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combobox" label="combo" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":true},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`,
    });
    page.rootInstance.isopen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combobox" label="combo" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":true},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combobox" id="combobox">
            <div aria-controls="open-combo-data" aria-expanded="true" class="header" role="button" tabindex="0">
              <span class="body-3">combo<span>(2)</span></span>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data" id="open-combo-data">
              <span role="combobox" aria-controls="combobox_list" aria-expanded="true"></span>
              <div aria-multiselectable="true" role="listbox" aria-label="combo" id="combobox_list" aria-owns="option-check-all option-item_1 option-item_2">
                <div class="check-all-wrapper" id="option-check-all" role="option">
                  <z-input type="checkbox" size="big" htmlid="combo-checkbox-combobox-check-all" class="combo-item-checkbox-input-combobox" label="UNCHECK" checked disabled="0" />
                </div>
                <div role="presentation" tabindex="-1">
                  <ul role="presentation">
                    <z-list-element dividertype="element" id="option-item_1" size="large" role="option" aria-selected="true">
                      <z-input type="checkbox" class="combo-item-checkbox-input-combobox" size="big" htmlid="combo-checkbox-combobox-item_1" label="primo elemento" checked></z-input>
                    </z-list-element>
                    <z-list-element dividertype="none" id="option-item_2" size="large" role="option" aria-selected="true">
                      <z-input type="checkbox" class="combo-item-checkbox-input-combobox" size="big" htmlid="combo-checkbox-combobox-item_2" label="secondo elemento" checked></z-input>
                    </z-list-element>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox - open with maxcheckableitems", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combobox" label="combo" maxcheckableitems="1" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`,
    });
    page.rootInstance.isopen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combobox" label="combo" maxcheckableitems="1" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combobox" id="combobox">
            <div aria-controls="open-combo-data" aria-expanded="true" class="header" role="button" tabindex="0">
             <span class="body-3">combo<span>(1)</span></span>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data" id="open-combo-data">
              <span role="combobox" aria-controls="combobox_list" aria-expanded="true"></span>
              <div aria-multiselectable="true" role="listbox" aria-label="combo" id="combobox_list" aria-owns="option-item_2">
                <div role="presentation" tabindex="-1">
                  <ul role="presentation">
                    <z-list-element dividertype="element" id="option-item_1" size="large" role="presentation" aria-selected="false">
                      <z-input disabled="" class="combo-item-checkbox-input-combobox" type="checkbox" size="big" htmlid="combo-checkbox-combobox-item_1" label="primo elemento"></z-input>
                    </z-list-element>
                    <z-list-element dividertype="none" id="option-item_2" size="large" role="option" aria-selected="true">
                      <z-input type="checkbox" class="combo-item-checkbox-input-combobox" size="big" htmlid="combo-checkbox-combobox-item_2" label="secondo elemento" checked></z-input>
                    </z-list-element>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox - open with maxcheckableitems and check all", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combobox" label="combo" maxcheckableitems="3" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":true},{"id":"item_2","name":"secondo elemento","checked":false}]'></z-combobox>`,
    });
    page.rootInstance.isopen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combobox" label="combo" maxcheckableitems="3" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":true},{"id":"item_2","name":"secondo elemento","checked":false}]'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combobox" id="combobox">
            <div aria-controls="open-combo-data" aria-expanded="true" class="header" role="button" tabindex="0">
              <span class="body-3">combo<span>(1)</span></span>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data" id="open-combo-data">
              <span role="combobox" aria-controls="combobox_list" aria-expanded="true"></span>
              <div aria-multiselectable="true" role="listbox" aria-label="combo" id="combobox_list" aria-owns="option-check-all option-item_1 option-item_2">
                <div class="check-all-wrapper" id="option-check-all" role="option">
                  <z-input type="checkbox" size="big" htmlid="combo-checkbox-combobox-check-all" class="combo-item-checkbox-input-combobox" label="CHECK" />
                </div>
                <div role="presentation" tabindex="-1">
                  <ul role="presentation">
                    <z-list-element dividertype="element" id="option-item_1" size="large" role="option" aria-selected="true">
                      <z-input type="checkbox" size="big" class="combo-item-checkbox-input-combobox" htmlid="combo-checkbox-combobox-item_1" label="primo elemento" checked></z-input>
                    </z-list-element>
                    <z-list-element dividertype="none" id="option-item_2" size="large" role="option" aria-selected="false">
                      <z-input type="checkbox" size="big" class="combo-item-checkbox-input-combobox" htmlid="combo-checkbox-combobox-item_2" label="secondo elemento"></z-input>
                    </z-list-element>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox - open with maxcheckableitems and disabled check all", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combobox" label="combo" maxcheckableitems="1" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":true},{"id":"item_2","name":"secondo elemento","checked":false}]'></z-combobox>`,
    });
    page.rootInstance.isopen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combobox" label="combo" maxcheckableitems="1" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":true},{"id":"item_2","name":"secondo elemento","checked":false}]'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combobox" id="combobox">
            <div aria-controls="open-combo-data" aria-expanded="true" class="header" role="button" tabindex="0">
              <span class="body-3">combo<span>(1)</span></span>
              <z-icon class="big" name="caret-down" />
            </div>

            <div class="open-combo-data" id="open-combo-data">
              <span role="combobox" aria-controls="combobox_list" aria-expanded="true"></span>
              <div aria-multiselectable="true" role="listbox" aria-label="combo" id="combobox_list" aria-owns="option-check-all option-item_1">
                <div class="check-all-wrapper" id="option-check-all" role="option">
                  <z-input type="checkbox" size="big" disabled htmlid="combo-checkbox-combobox-check-all" class="combo-item-checkbox-input-combobox" label="CHECK" />
                </div>
                <div role="presentation" tabindex="-1">
                  <ul role="presentation">
                    <z-list-element dividertype="element" id="option-item_1" size="large" role="option" aria-selected="true">
                      <z-input type="checkbox" class="combo-item-checkbox-input-combobox" size="big" htmlid="combo-checkbox-combobox-item_1" label="primo elemento" checked></z-input>
                    </z-list-element>
                    <z-list-element dividertype="none" id="option-item_2" size="large" role="presentation" aria-selected="false">
                      <z-input type="checkbox" class="combo-item-checkbox-input-combobox" size="big" htmlid="combo-checkbox-combobox-item_2" label="secondo elemento" disabled></z-input>
                    </z-list-element>
                  </ul>
                </div
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });
});

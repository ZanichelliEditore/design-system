import {newSpecPage} from "@stencil/core/testing";
import {ZCombobox} from "./index";

describe("Suite test ZCombobox", () => {
  it("test", async () => {});

  it("Test render ZCombobox - closed", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox items='[]' inputid="combobox"></z-combobox>`,
    });
    expect(page.root).toEqualHtml(`
        <z-combobox items='[]' inputid="combobox">
          <mock:shadow-root>
            <div data-action="combo-combobox" id="combobox">
              <div aria-controls="combobox_list" aria-expanded="false" aria-activedescendant="" class="header" role="combobox" tabindex="0">
              <span class="body-3"><span></span></span>
                <z-icon class="big" name="caret-down" />
              </div>
              <div class="open-combo-data" id="open-combo-data">
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
              <div aria-controls="combobox_list" aria-expanded="false" aria-activedescendant="" class="header" role="combobox" tabindex="0">
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
              <div aria-controls="combobox_list" aria-expanded="false" aria-activedescendant="" class="header" role="combobox" tabindex="0">
                <span class="body-3" aria-label="label">
                  label
                  <span></span>
                </span>
                <z-icon class="big" name="caret-down" />
              </div>
              <div class="open-combo-data" id="open-combo-data">
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
              <div aria-controls="combobox_list" aria-expanded="false" aria-activedescendant="" class="header" role="combobox" tabindex="0">
                <span class="body-3" aria-label="label - 1 selezionati">
                  label
                  <span>(1)</span>
                </span>
                <z-icon class="big" name="caret-down" />
              </div>
              <div class="open-combo-data" id="open-combo-data">
                <div aria-label="label" aria-multiselectable="true" aria-owns="" id="combobox_list" role="listbox">
                  <div role="presentation" tabindex="-1">
                    <ul role="presentation">
                      <z-list-element dividertype="element" htmltabindex="-1" role="presentation" size="large">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox" class=""></z-icon>
                          <span id="combobox-option-item_1" role="option" aria-selected="false" aria-label="primo elemento">primo elemento</span>
                        </span>
                      </z-list-element>
                      <z-list-element dividertype="none" htmltabindex="-1" role="presentation" size="large">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox-checked" class=""></z-icon>
                          <span id="combobox-option-item_2" role="option" aria-selected="true" aria-label="secondo elemento">secondo elemento</span>
                        </span>
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
              <div aria-controls="combobox_list" aria-expanded="true" aria-activedescendant="" class="header" role="combobox" tabindex="0">
             <span class="body-3"><span></span></span>
                <z-icon class="big" name="caret-down" ></z-icon>
              </div>
              <div class="open-combo-data" id="open-combo-data">
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
              <div aria-controls="combobox_list" aria-expanded="true" aria-activedescendant="" class="header" role="combobox" tabindex="0">
              <span class="body-3" aria-label="combo - 1 selezionati">combo<span>(1)</span></span>
                <z-icon class="big" name="caret-down" />
              </div>
              <div class="open-combo-data" id="open-combo-data">
                <div aria-label="combo" aria-multiselectable="true" aria-owns="combobox-option-item_1 combobox-option-item_2" id="combobox_list" role="listbox">
                  <div role="presentation" tabindex="-1">
                    <ul role="presentation">
                      <z-list-element dividertype="element" htmltabindex="-1" role="presentation" size="large">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox" class=""></z-icon>
                          <span id="combobox-option-item_1" role="option" aria-selected="false" aria-label="primo elemento">primo elemento</span>
                        </span>
                      </z-list-element>
                      <z-list-element dividertype="none" htmltabindex="-1" role="presentation" size="large">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox-checked" class=""></z-icon>
                          <span id="combobox-option-item_2" role="option" aria-selected="true" aria-label="secondo elemento">secondo elemento</span>
                        </span>
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
              <span class="body-3" aria-label="combo - 1 selezionati">combo<span>(1)</span></span>
                <z-icon class="big" name="caret-down" />
              </div>
              <div class="open-combo-data" id="open-combo-data">
                <z-input html-aria-activedescendant="" html-aria-autocomplete="list" html-aria-controls="combobox_list" html-aria-expanded="true" htmlid="combobox_search" label="cerca" placeholder="placeholder" role="combobox" size="big" type="text"></z-input>
                <div aria-label="combo" aria-multiselectable="true" aria-owns="combobox-option-item_1 combobox-option-item_2" id="combobox_list" role="listbox">
                  <div role="presentation" tabindex="-1">
                    <ul role="presentation">
                      <z-list-element dividertype="element" htmltabindex="-1" role="presentation" size="large">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox" class=""></z-icon>
                          <span id="combobox-option-item_1" role="option" aria-selected="false" aria-label="primo elemento">primo elemento</span>
                        </span>
                      </z-list-element>
                      <z-list-element dividertype="none" htmltabindex="-1" role="presentation" size="large">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox-checked" class=""></z-icon>
                          <span id="combobox-option-item_2" role="option" aria-selected="true" aria-label="secondo elemento">secondo elemento</span>
                        </span>
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
              <span class="body-3" aria-label="combo - 1 selezionati">combo<span>(1)</span></span>
                <z-icon class="big" name="caret-down" />
              </div>
              <div class="open-combo-data" id="open-combo-data">
                <z-input html-aria-activedescendant="" html-aria-autocomplete="list" html-aria-controls="combobox_list" html-aria-expanded="true" htmlid="combobox_search" label="cerca" placeholder="placeholder" role="combobox" size="big" type="text" value="primo"></z-input>
                <div aria-label="combo" aria-multiselectable="true" aria-owns="combobox-option-item_1 combobox-option-item_2" id="combobox_list" role="listbox">
                  <div class="search" role="presentation" tabindex="-1">
                    <ul role="presentation">
                      <z-list-element dividertype="none" htmltabindex="-1" role="presentation" size="large">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox" class=""></z-icon>
                          <span id="combobox-option-item_1" role="option" aria-selected="false" aria-label="primo elemento"><strong>primo</strong> elemento</span>
                        </span>
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
              <span class="body-3" aria-label="combo - 1 selezionati">combo<span>(1)</span></span>
                <z-icon class="big" name="caret-down" />
              </div>
              <div class="open-combo-data" id="open-combo-data">
                <z-input html-aria-activedescendant="" html-aria-autocomplete="list" html-aria-controls="combobox_list" html-aria-expanded="true" htmlid="combobox_search" label="cerca" placeholder="placeholder" role="combobox" size="big" type="text" value="prova"></z-input>
                <div aria-label="combo" aria-multiselectable="true" aria-owns="combobox-option-item_1 combobox-option-item_2" id="combobox_list" role="listbox">
                  <div class="search" role="presentation" tabindex="-1">
                  <div class="no-results"><span>non ci sono risultati</span></div>
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
              <div aria-controls="combobox_list" aria-expanded="true" aria-activedescendant="" class="header" role="combobox" tabindex="0">
              <span class="body-3" aria-label="combo - 1 selezionati">combo<span>(1)</span></span>
                <z-icon class="big" name="caret-down" />
              </div>
              <div class="open-combo-data" id="open-combo-data">
                <div aria-label="combo" aria-multiselectable="true" aria-owns="combobox-check-all combobox-option-item_1 combobox-option-item_2" id="combobox_list" role="listbox">
                  <div role="presentation" tabindex="-1">
                    <ul role="presentation">
                      <z-list-element dividertype="element" dividercolor="gray800" htmltabindex="-1" role="presentation" size="large" class="check-all-wrapper">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox" class=""></z-icon>
                          <span id="combobox-check-all" role="option" aria-selected="false">CHECK</span>
                        </span>
                      </z-list-element>
                      <z-list-element dividertype="element" htmltabindex="-1" role="presentation" size="large">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox" class=""></z-icon>
                          <span id="combobox-option-item_1" role="option" aria-selected="false" aria-label="primo elemento">primo elemento</span>
                        </span>
                      </z-list-element>
                      <z-list-element dividertype="none" htmltabindex="-1" role="presentation" size="large">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox-checked" class=""></z-icon>
                          <span id="combobox-option-item_2" role="option" aria-selected="true" aria-label="secondo elemento">secondo elemento</span>
                        </span>
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
              <div aria-controls="combobox_list" aria-expanded="true" aria-activedescendant="" class="header" role="combobox" tabindex="0">
              <span class="body-3" aria-label="combo - 2 selezionati">combo<span>(2)</span></span>
                <z-icon class="big" name="caret-down" />
              </div>
              <div class="open-combo-data" id="open-combo-data">
                <div aria-label="combo" aria-multiselectable="true" aria-owns="combobox-check-all combobox-option-item_1 combobox-option-item_2" id="combobox_list" role="listbox">
                  <div role="presentation" tabindex="-1">
                    <ul role="presentation">
                      <z-list-element dividertype="element" dividercolor="gray800" htmltabindex="-1" role="presentation" size="large" class="check-all-wrapper">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox-checked" class=""></z-icon>
                          <span id="combobox-check-all" role="option" aria-selected="true">UNCHECK</span>
                        </span>
                      </z-list-element>
                      <z-list-element dividertype="element" htmltabindex="-1" role="presentation" size="large">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox-checked" class=""></z-icon>
                          <span id="combobox-option-item_1" role="option" aria-selected="true" aria-label="primo elemento">primo elemento</span>
                        </span>
                      </z-list-element>
                      <z-list-element dividertype="none" htmltabindex="-1" role="presentation" size="large">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox-checked" class=""></z-icon>
                          <span id="combobox-option-item_2" role="option" aria-selected="true" aria-label="secondo elemento">secondo elemento</span>
                        </span>
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
              <div aria-controls="combobox_list" aria-expanded="true" aria-activedescendant="" class="header" role="combobox" tabindex="0">
              <span class="body-3" aria-label="combo - 1 selezionati">combo<span>(1)</span></span>
                <z-icon class="big" name="caret-down" />
              </div>
              <div class="open-combo-data" id="open-combo-data">
                <div aria-label="combo" aria-multiselectable="true" aria-owns="combobox-option-item_2" id="combobox_list" role="listbox">
                  <div role="presentation" tabindex="-1">
                    <ul role="presentation">
                      <z-list-element dividertype="element" htmltabindex="-1" role="presentation" size="large" disabled="">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox" class=""></z-icon>
                          <span id="combobox-option-item_1" role="presentation" aria-selected="false" aria-label="primo elemento">primo elemento</span>
                        </span>
                      </z-list-element>
                      <z-list-element dividertype="none" htmltabindex="-1" role="presentation" size="large">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox-checked" class=""></z-icon>
                          <span id="combobox-option-item_2" role="option" aria-selected="true" aria-label="secondo elemento">secondo elemento</span>
                        </span>
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
              <div aria-controls="combobox_list" aria-expanded="true" aria-activedescendant="" class="header" role="combobox" tabindex="0">
              <span class="body-3" aria-label="combo - 1 selezionati">combo<span>(1)</span></span>
                <z-icon class="big" name="caret-down" />
              </div>
              <div class="open-combo-data" id="open-combo-data">
                <div aria-label="combo" aria-multiselectable="true" aria-owns="combobox-check-all combobox-option-item_1 combobox-option-item_2" id="combobox_list" role="listbox">
                  <div role="presentation" tabindex="-1">
                    <ul role="presentation">
                      <z-list-element dividertype="element" dividercolor="gray800" htmltabindex="-1" role="presentation" size="large" class="check-all-wrapper">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox" class=""></z-icon>
                          <span id="combobox-check-all" role="option" aria-selected="false">CHECK</span>
                        </span>
                      </z-list-element>
                      <z-list-element dividertype="element" htmltabindex="-1" role="presentation" size="large">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox-checked" class=""></z-icon>
                          <span id="combobox-option-item_1" role="option" aria-selected="true" aria-label="primo elemento">primo elemento</span>
                        </span>
                      </z-list-element>
                      <z-list-element dividertype="none" htmltabindex="-1" role="presentation" size="large">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox" class=""></z-icon>
                          <span id="combobox-option-item_2" role="option" aria-selected="false" aria-label="secondo elemento">secondo elemento</span>
                        </span>
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
              <div aria-controls="combobox_list" aria-expanded="true" aria-activedescendant="" class="header" role="combobox" tabindex="0">
              <span class="body-3" aria-label="combo - 1 selezionati">combo<span>(1)</span></span>
                <z-icon class="big" name="caret-down" />
              </div>
              <div class="open-combo-data" id="open-combo-data">
                <div aria-label="combo" aria-multiselectable="true" aria-owns="combobox-option-item_1" id="combobox_list" role="listbox">
                  <div role="presentation" tabindex="-1">
                    <ul role="presentation">
                      <z-list-element dividertype="element" dividercolor="gray800" htmltabindex="-1" role="presentation" size="large" class="check-all-wrapper" disabled="">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox" class=""></z-icon>
                          <span id="combobox-check-all" role="presentation" aria-selected="false">CHECK</span>
                        </span>
                      </z-list-element>
                      <z-list-element dividertype="element" htmltabindex="-1" role="presentation" size="large">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox-checked" class=""></z-icon>
                          <span id="combobox-option-item_1" role="option" aria-selected="true" aria-label="primo elemento">primo elemento</span>
                        </span>
                      </z-list-element>
                      <z-list-element dividertype="none" htmltabindex="-1" role="presentation" size="large" disabled="">
                        <span class="option-wrap" role="presentation">
                          <z-icon name="checkbox" class=""></z-icon>
                          <span id="combobox-option-item_2" role="presentation" aria-selected="false" aria-label="secondo elemento">secondo elemento</span>
                        </span>
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
});

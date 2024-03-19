import { newSpecPage } from "@stencil/core/testing";
import { ZCombobox } from "./index";
describe("Suite test ZCombobox", () => {
    it("Test render ZCombobox chiusa", async () => {
        const page = await newSpecPage({
            components: [ZCombobox],
            html: `<z-combobox items='[]'></z-combobox>`,
        });
        expect(page.root).toEqualHtml(`
      <z-combobox items='[]'>
        <mock:shadow-root>
          <div data-action="combo-undefined">
            <div class="header" role="button" tabindex="0">
            <p class="body-3"><span></span></p>
              <z-icon class="big" name="caret-down" />
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
    });
    it("Test render ZCombobox disabilitata", async () => {
        const page = await newSpecPage({
            components: [ZCombobox],
            html: `<z-combobox items='[]' disabled='true'></z-combobox>`,
        });
        expect(page.root).toEqualHtml(`
      <z-combobox disabled='' items='[]'>
        <mock:shadow-root>
          <div class="disabled" data-action="combo-undefined">
            <div class="header" role="button" tabindex="0">
            <p class="body-3"><span></span></p>
              <z-icon class="big" name="caret-down" />
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
    });
    it("Test render ZCombobox chiusa con attributi", async () => {
        const page = await newSpecPage({
            components: [ZCombobox],
            html: `<z-combobox items='[]' inputid="combobox" label="label" isfixed></z-combobox>`,
        });
        expect(page.root).toEqualHtml(`
      <z-combobox items='[]' inputid="combobox" label="label" isfixed>
        <mock:shadow-root>
          <div class="fixed" id="combobox" data-action="combo-combobox">
            <div class="header" role="button" tabindex="0">
              <p class="body-3">
                label
                <span></span>
              </p>
              <z-icon class="big" name="caret-down" />
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
    });
    it("Test render ZCombobox chiusa con attributi ed elemento selezionato", async () => {
        const page = await newSpecPage({
            components: [ZCombobox],
            html: `<z-combobox items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]' inputid="combobox" label="label"></z-combobox>`,
        });
        expect(page.root).toEqualHtml(`
      <z-combobox items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]' inputid="combobox" label="label">
        <mock:shadow-root>
          <div data-action="combo-combobox" id="combobox">
            <div class="header" role="button" tabindex="0">
              <p class="body-3">
                label
                <span>(1)</span>
              </p>
              <z-icon class="big" name="caret-down" />
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
    });
    it("Test render ZCombobox aperta vuota", async () => {
        const page = await newSpecPage({
            components: [ZCombobox],
            html: `<z-combobox items='[]' noresultslabel='non ci sono risultati'></z-combobox>`,
        });
        page.rootInstance.isopen = true;
        await page.waitForChanges();
        expect(page.root).toEqualHtml(`
      <z-combobox items='[]' noresultslabel='non ci sono risultati'>
        <mock:shadow-root>
          <div class="open" data-action="combo-undefined">
            <div class="header" role="button" tabindex="0">
           <p class="body-3"><span></span></p>
              <z-icon class="big" name="caret-down" ></z-icon>
            </div>
            <div class="open-combo-data">
              <div tabindex="-1">
                <ul></ul>
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
            html: `<z-combobox inputid="combo" label="combo" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`,
        });
        page.rootInstance.isopen = true;
        await page.waitForChanges();
        expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combo" id="combo">
            <div class="header" role="button" tabindex="0">
            <p class="body-3">combo<span>(1)</span></p>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data">
              <div tabindex="-1">
                <ul>
                  <z-myz-list-item class="big" id="item_1" listitemid="item_1" action="combo-li-combo" underlined="">
                    <z-input disabled="0" type="checkbox" size="big" htmlid="combo-checkbox-combo-item_1" label="primo elemento"></z-input>
                  </z-myz-list-item>
                  <z-myz-list-item class="big" id="item_2" listitemid="item_2" action="combo-li-combo">
                    <z-input type="checkbox" size="big" htmlid="combo-checkbox-combo-item_2" label="secondo elemento" checked></z-input>
                  </z-myz-list-item>
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
            html: `<z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`,
        });
        page.rootInstance.isopen = true;
        await page.waitForChanges();
        expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combo" id="combo">
            <div class="header" role="button" tabindex="0">
            <p class="body-3">combo<span>(1)</span></p>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data">
              <z-input size="big" htmlid="combo_search" label="cerca" placeholder="placeholder" type="text"></z-input>
              <div tabindex="-1">
                <ul>
                  <z-myz-list-item class="big" id="item_1" listitemid="item_1" action="combo-li-combo" underlined="">
                    <z-input disabled="0" type="checkbox" size="big" htmlid="combo-checkbox-combo-item_1" label="primo elemento"></z-input>
                  </z-myz-list-item>
                  <z-myz-list-item class="big" id="item_2" listitemid="item_2" action="combo-li-combo">
                    <z-input type="checkbox" size="big" htmlid="combo-checkbox-combo-item_2" label="secondo elemento" checked></z-input>
                  </z-myz-list-item>
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
            html: `<z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" closesearchtext="CHIUDI" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`,
        });
        page.rootInstance.isopen = true;
        page.rootInstance.searchValue = "primo";
        await page.waitForChanges();
        expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" closesearchtext="CHIUDI" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combo" id="combo">
            <div class="header" role="button" tabindex="0">
            <p class="body-3">combo<span>(1)</span></p>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data">
              <z-input size="big" htmlid="combo_search" label="cerca" placeholder="placeholder" type="text" value="primo"></z-input>
              <div class="search" tabindex="-1">
                <ul>
                  <z-myz-list-item class="big" id="item_1" listitemid="item_1" action="combo-li-combo">
                    <z-input disabled="0" type="checkbox" size="big" htmlid="combo-checkbox-combo-item_1" label="<b>primo</b> elemento"></z-input>
                  </z-myz-list-item>
                </ul>
                <div>
                  <a role="button" tabindex="0">CHIUDI</a>
                </div>
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
            html: `<z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`,
        });
        page.rootInstance.isopen = true;
        page.rootInstance.searchValue = "primo";
        await page.waitForChanges();
        expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combo" id="combo">
            <div class="header" role="button" tabindex="0">
            <p class="body-3">combo<span>(1)</span></p>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data">
              <z-input size="big" htmlid="combo_search" label="cerca" placeholder="placeholder" type="text" value="primo"></z-input>
              <div class="search" tabindex="-1">
                <ul>
                  <z-myz-list-item class="big" id="item_1" listitemid="item_1" action="combo-li-combo">
                    <z-input disabled="0" type="checkbox" size="big" htmlid="combo-checkbox-combo-item_1" label="<b>primo</b> elemento"></z-input>
                  </z-myz-list-item>
                </ul>
                <div>
                  <a role="button" tabindex="0">Chiudi</a>
                </div>
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
            html: `<z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" closesearchtext="CHIUDI" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]' noresultslabel='non ci sono risultati'></z-combobox>`,
        });
        page.rootInstance.isopen = true;
        page.rootInstance.searchValue = "prova";
        await page.waitForChanges();
        expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" closesearchtext="CHIUDI" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]' noresultslabel='non ci sono risultati'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combo" id="combo">
            <div class="header" role="button" tabindex="0">
              <p class="body-3">combo<span>(1)</span></p>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data">
              <z-input size="big" htmlid="combo_search" label="cerca" placeholder="placeholder" type="text" value="prova"></z-input>
              <div class="search" tabindex="-1">
                <ul>
                  <z-myz-list-item class="big" id='no-results' text='non ci sono risultati' listitemid='no-results' icon='multiply-circle'></z-myz-list-item>
                </ul>
                <div>
                  <a role="button" tabindex="0">CHIUDI</a>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
    });
    it("Test render ZCombobox aperta con check all", async () => {
        const page = await newSpecPage({
            components: [ZCombobox],
            html: `<z-combobox inputid="combo" label="combo" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`,
        });
        page.rootInstance.isopen = true;
        await page.waitForChanges();
        expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combo" id="combo">
            <div class="header" role="button" tabindex="0">
              <p class="body-3">combo<span>(1)</span></p>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data">
              <div class="check-all-wrapper">
                <z-input type="checkbox" size="big" htmlid="combo-checkbox-combo-check-all" label="CHECK" disabled="0" />
              </div>
              <div tabindex="-1">
                <ul>
                  <z-myz-list-item class="big" id="item_1" listitemid="item_1" action="combo-li-combo" underlined="">
                    <z-input disabled="0" type="checkbox" size="big" htmlid="combo-checkbox-combo-item_1" label="primo elemento"></z-input>
                  </z-myz-list-item>
                  <z-myz-list-item class="big" id="item_2" listitemid="item_2" action="combo-li-combo">
                    <z-input type="checkbox" size="big" htmlid="combo-checkbox-combo-item_2" label="secondo elemento" checked></z-input>
                  </z-myz-list-item>
                </ul>
              </div
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
    });
    it("Test render ZCombobox aperta con uncheck all", async () => {
        const page = await newSpecPage({
            components: [ZCombobox],
            html: `<z-combobox inputid="combo" label="combo" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":true},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`,
        });
        page.rootInstance.isopen = true;
        await page.waitForChanges();
        expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":true},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combo" id="combo">
            <div class="header" role="button" tabindex="0">
              <p class="body-3">combo<span>(2)</span></p>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data">
              <div class="check-all-wrapper">
                <z-input type="checkbox" size="big" htmlid="combo-checkbox-combo-check-all" label="UNCHECK" checked disabled="0" />
              </div>
              <div tabindex="-1">
                <ul>
                  <z-myz-list-item class="big" id="item_1" listitemid="item_1" action="combo-li-combo" underlined="">
                    <z-input type="checkbox" size="big" htmlid="combo-checkbox-combo-item_1" label="primo elemento" checked></z-input>
                  </z-myz-list-item>
                  <z-myz-list-item class="big" id="item_2" listitemid="item_2" action="combo-li-combo">
                    <z-input type="checkbox" size="big" htmlid="combo-checkbox-combo-item_2" label="secondo elemento" checked></z-input>
                  </z-myz-list-item>
                </ul>
              </div
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
    });
    it("Test render ZCombobox aperta con max checkable items", async () => {
        const page = await newSpecPage({
            components: [ZCombobox],
            html: `<z-combobox inputid="combo" label="combo" maxcheckableitems="1" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`,
        });
        page.rootInstance.isopen = true;
        await page.waitForChanges();
        expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" maxcheckableitems="1" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combo" id="combo">
            <div class="header" role="button" tabindex="0">
             <p class="body-3">combo<span>(1)</span></p>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data">
              <div tabindex="-1">
                <ul>
                  <z-myz-list-item class="big" id="item_1" listitemid="item_1" action="combo-li-combo" underlined="">
                    <z-input disabled="" type="checkbox" size="big" htmlid="combo-checkbox-combo-item_1" label="primo elemento"></z-input>
                  </z-myz-list-item>
                  <z-myz-list-item class="big" id="item_2" listitemid="item_2" action="combo-li-combo">
                    <z-input type="checkbox" size="big" htmlid="combo-checkbox-combo-item_2" label="secondo elemento" checked></z-input>
                  </z-myz-list-item>
                </ul>
              </div
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
    });
    it("Test render ZCombobox aperta con maxcheckableitems + check all", async () => {
        const page = await newSpecPage({
            components: [ZCombobox],
            html: `<z-combobox inputid="combo" label="combo" maxcheckableitems="3" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":true},{"id":"item_2","name":"secondo elemento","checked":false}]'></z-combobox>`,
        });
        page.rootInstance.isopen = true;
        await page.waitForChanges();
        expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" maxcheckableitems="3" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":true},{"id":"item_2","name":"secondo elemento","checked":false}]'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combo" id="combo">
            <div class="header" role="button" tabindex="0">
              <p class="body-3">combo<span>(1)</span></p>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data">
              <div class="check-all-wrapper">
                <z-input type="checkbox" size="big" htmlid="combo-checkbox-combo-check-all" label="CHECK" />
              </div>
              <div tabindex="-1">
                <ul>
                  <z-myz-list-item id="item_1" class="big" listitemid="item_1" action="combo-li-combo" underlined="">
                    <z-input type="checkbox" size="big" htmlid="combo-checkbox-combo-item_1" label="primo elemento" checked></z-input>
                  </z-myz-list-item>
                  <z-myz-list-item id="item_2" class="big" listitemid="item_2" action="combo-li-combo">
                    <z-input type="checkbox" size="big" htmlid="combo-checkbox-combo-item_2" label="secondo elemento"></z-input>
                  </z-myz-list-item>
                </ul>
              </div
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
    });
    it("Test render ZCombobox aperta con maxcheckableitems + check all (disabled)", async () => {
        const page = await newSpecPage({
            components: [ZCombobox],
            html: `<z-combobox inputid="combo" label="combo" maxcheckableitems="1" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":true},{"id":"item_2","name":"secondo elemento","checked":false}]'></z-combobox>`,
        });
        page.rootInstance.isopen = true;
        await page.waitForChanges();
        expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" maxcheckableitems="1" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":true},{"id":"item_2","name":"secondo elemento","checked":false}]'>
        <mock:shadow-root>
          <div class="open" data-action="combo-combo" id="combo">
            <div class="header" role="button" tabindex="0">
              <p class="body-3">combo<span>(1)</span></p>
              <z-icon class="big" name="caret-down" />
            </div>
            <div class="open-combo-data">
              <div class="check-all-wrapper">
                <z-input type="checkbox" size="big" disabled htmlid="combo-checkbox-combo-check-all" label="CHECK" />
              </div>
              <div tabindex="-1">
                <ul>
                  <z-myz-list-item id="item_1" class="big" listitemid="item_1" action="combo-li-combo" underlined="">
                    <z-input type="checkbox" size="big" htmlid="combo-checkbox-combo-item_1" label="primo elemento" checked></z-input>
                  </z-myz-list-item>
                  <z-myz-list-item id="item_2" class="big" listitemid="item_2" action="combo-li-combo">
                    <z-input type="checkbox" size="big" htmlid="combo-checkbox-combo-item_2" label="secondo elemento" disabled></z-input>
                  </z-myz-list-item>
                </ul>
              </div
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
    });
});
//# sourceMappingURL=index.spec.js.map

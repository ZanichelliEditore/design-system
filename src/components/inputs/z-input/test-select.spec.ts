import { newSpecPage } from "@stencil/core/testing";

import { ZInput } from "./index";

describe("Suite test ZInput - select", () => {
  it("Test render ZInput - select chiusa con elementi", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input hasmessage="false" htmlid="checkid" placeholder="select here" type="select" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false}]'> </z-input>`
    });
    page.rootInstance.isOpen = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
        <z-input hasmessage="false" htmlid="checkid" placeholder="select here" type="select" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false}]'>
          <mock:shadow-root>
            <div class="selectWrapper">
                <label htmlfor="checkid">default</label>
                <div>
                    <ul class="closed false input_default" id="checkid" role="listbox" tabindex="0">
                        <li class="selected">
                            <span class="placeholder">select here</span>
                            <z-icon name="drop-down"/>
                        </li>
                    </ul>
                </div>
            </div>
          </mock:shadow-root>
        </z-input>
      `);
  });

  it("Test render ZInput aperto con elementi", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input hasmessage="false" htmlid="checkid" placeholder="select here" type="select" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'> </z-input>`
    });
    page.rootInstance.isOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
        <z-input hasmessage="false" htmlid="checkid" placeholder="select here" type="select" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'>
          <mock:shadow-root>
            <div class="selectWrapper">
                <label htmlfor="checkid">default</label>
                <div>
                    <ul class="open false input_default" id="checkid" role="listbox" tabindex="0">
                        <li class="selected">
                            <span class="placeholder">select here</span>
                            <z-icon name="drop-down"/>
                        </li>
                        <li id="checkid_0"  role="option" tabindex="0">
                            <span>
                                SELECT HERE questa opzione con etichetta lunga lunghissima
                            </span>
                        </li>
                        <li id="checkid_1" role="option" tabindex="0">
                            <span>
                                primo elemento
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
          </mock:shadow-root>
        </z-input>
      `);
  });

  it("Test render ZInput aperto con elemento selezionato", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input hasmessage="false" htmlid="checkid" placeholder="select here" type="select" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":true}]'> </z-input>`
    });
    page.rootInstance.isOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-input hasmessage="false" htmlid="checkid" placeholder="select here" type="select" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":true}]'>
        <mock:shadow-root>
          <div class="selectWrapper">
              <label htmlfor="checkid">default</label>
              <div>
                  <ul class="open false input_default filled" id="checkid" role="listbox" tabindex="0" aria-activedescendant="item_1">
                      <li class="selected">
                          <span>primo elemento</span>
                          <z-icon name="drop-down"/>
                      </li>
                      <li id="checkid_0" role="option" tabindex="0">
                          <span>
                              SELECT HERE questa opzione con etichetta lunga lunghissima
                          </span>
                      </li>
                      <li id="checkid_1" role="option" tabindex="0" aria-selected="">
                          <span>
                              primo elemento
                          </span>
                      </li>
                  </ul>
              </div>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });

  it("Test render ZInput chiuso disabilitato con elementi", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input hasmessage="false" htmlid="checkid" placeholder="select here" disabled readonly type="select" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'> </z-input>`
    });
    page.rootInstance.isOpen = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
        <z-input hasmessage="false" htmlid="checkid" placeholder="select here" disabled readonly type="select" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'>
          <mock:shadow-root>
            <div class="selectWrapper">
                <label class="disabledLabel" htmlfor="checkid">default</label>
                <div>
                    <ul class="closed readonly input_default disabled" id="checkid" role="listbox" tabindex="-1">
                        <li class="selected">
                            <span class="placeholder">select here</span>
                            <z-icon name="drop-down"/>
                        </li>
                    </ul>
                </div>
            </div>
          </mock:shadow-root>
        </z-input>
      `);
  });

  it("Test render ZInput chiusa con elementi, status/messages", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="checkid" placeholder="select here" type="select" status="success" message="message message" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'> </z-input>`
    });
    page.rootInstance.isOpen = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
          <z-input htmlid="checkid" placeholder="select here" type="select" status="success" message="message message" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'>
            <mock:shadow-root>
              <div class="selectWrapper">
                  <label htmlfor="checkid">default</label>
                  <div>
                    <ul class="closed false input_success" id="checkid" role="listbox" tabindex="0">
                          <li class="selected">
                              <span class="placeholder">select here</span>
                              <z-icon name="drop-down"/>
                          </li>
                      </ul>
                  </div>
                  <span class="statusMsg msg_success">
                    <z-icon height="14" name="circle-check" width="14"></z-icon>
                    <span>message message</span>
                  </span>
              </div>
            </mock:shadow-root>
          </z-input>
        `);
  });

  it("Test render ZInput aperto con elementi, un elemento disabilitato", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input hasmessage="false" htmlid="checkid" placeholder="select here" type="select" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false,"disabled":true}]'> </z-input>`
    });
    page.rootInstance.isOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
        <z-input hasmessage="false" htmlid="checkid" placeholder="select here" type="select" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false,"disabled":true}]'>
          <mock:shadow-root>
            <div class="selectWrapper">
                <label htmlfor="checkid">default</label>
                <div>
                    <ul class="open false input_default" id="checkid" role="listbox" tabindex="0">
                        <li class="selected">
                            <span class="placeholder">select here</span>
                            <z-icon name="drop-down"/>
                        </li>
                        <li id="checkid_0"  role="option" tabindex="0">
                            <span>
                                SELECT HERE questa opzione con etichetta lunga lunghissima
                            </span>
                        </li>
                        <li id="checkid_1" role="option" tabindex="-1" class="disabled">
                            <span>
                                primo elemento
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
          </mock:shadow-root>
        </z-input>
      `);
  });
});

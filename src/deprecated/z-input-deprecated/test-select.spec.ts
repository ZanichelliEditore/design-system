import { newSpecPage } from "@stencil/core/testing";

import { ZInputDeprecated } from "./index";

describe("Suite test ZInputDeprecated - select", () => {
  it("Test render ZInputDeprecated - select chiusa con elementi", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated htmlid="checkid" placeholder="select here" type="select" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false}]'></z-input-deprecated>`,
    });
    page.rootInstance.isOpen = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
        <z-input-deprecated htmlid="checkid" placeholder="select here" type="select" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false}]'>

            <z-select hasmessage="" htmlid="checkid" items="[{&quot;id&quot;:&quot;item_0&quot;,&quot;name&quot;:&quot;SELECT HERE questa opzione con etichetta lunga lunghissima&quot;,&quot;selected&quot;:false}]" label="default" placeholder="select here"></z-select>

        </z-input-deprecated>
      `);
  });

  it("Test render ZInputDeprecated aperto con elementi", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated htmlid="checkid" placeholder="select here" type="select" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'> </z-input-deprecated>`,
    });
    page.rootInstance.isOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
        <z-input-deprecated htmlid="checkid" placeholder="select here" type="select" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'>

            <z-select hasmessage="" htmlid="checkid" placeholder="select here" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'></z-select>

        </z-input-deprecated>
      `);
  });

  it("Test render ZInputDeprecated aperto con elemento selezionato", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated htmlid="checkid" placeholder="select here" type="select" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":true}]'> </z-input-deprecated>`,
    });
    page.rootInstance.isOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-input-deprecated htmlid="checkid" placeholder="select here" type="select" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":true}]'>

        <z-select hasmessage="" htmlid="checkid" placeholder="select here" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":true}]'></z-select>

      </z-input-deprecated>
    `);
  });

  it("Test render ZInputDeprecated chiuso disabilitato con elementi", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated htmlid="checkid" placeholder="select here" disabled readonly type="select" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'> </z-input-deprecated>`,
    });
    page.rootInstance.isOpen = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
        <z-input-deprecated htmlid="checkid" placeholder="select here" disabled readonly type="select" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'>

            <z-select hasmessage="" htmlid="checkid" placeholder="select here" disabled readonly label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'></z-select>

        </z-input-deprecated>
      `);
  });

  it("Test render ZInputDeprecated chiusa con elementi, status/messages", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated htmlid="checkid" placeholder="select here" type="select" status="success" message="message message" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'> </z-input-deprecated>`,
    });
    page.rootInstance.isOpen = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
          <z-input-deprecated htmlid="checkid" placeholder="select here" type="select" status="success" message="message message" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'>

              <z-select hasmessage="" htmlid="checkid" placeholder="select here" status="success" message="message message" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'></z-select>

          </z-input-deprecated>
        `);
  });

  it("Test render ZInputDeprecated aperto con elementi, un elemento disabilitato", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated htmlid="checkid" placeholder="select here" type="select" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false,"disabled":true}]'> </z-input-deprecated>`,
    });
    page.rootInstance.isOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
        <z-input-deprecated htmlid="checkid" placeholder="select here" type="select" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false,"disabled":true}]'>

            <z-select hasmessage="" htmlid="checkid" placeholder="select here" label="default" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false,"disabled":true}]'></z-select>

        </z-input-deprecated>
      `);
  });

  it("Test render ZInputDeprecated multiple aperta con elementi", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated htmlid="checkid" placeholder="select here" type="select" label="default" multiple items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'> </z-input-deprecated>`,
    });
    page.rootInstance.isOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-input-deprecated type="select" htmlid="checkid" placeholder="select here" type="select" label="default" multiple items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'>

          <z-select hasmessage="" htmlid="checkid" placeholder="select here" label="default" multiple items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'></z-select>

      </z-input-deprecated>
    `);
  });

  it("Test render ZInputDeprecated aperta con elementi con autocomplete", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated htmlid="checkid" placeholder="select here" type="select" label="default" autocomplete="true" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'> </z-input-deprecated>`,
    });
    page.rootInstance.isOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-input-deprecated type="select" htmlid="checkid" placeholder="select here" type="select" label="default" autocomplete="true" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'>
          <z-select hasmessage="" htmlid="checkid" placeholder="select here" label="default" autocomplete="true" items='[{"id":"item_0","name":"SELECT HERE questa opzione con etichetta lunga lunghissima","selected":false},{"id":"item_1","name":"primo elemento","selected":false}]'></z-select>
      </z-input-deprecated>
    `);
  });
});

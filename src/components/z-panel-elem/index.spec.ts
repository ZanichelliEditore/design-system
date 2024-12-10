import {newSpecPage} from "@stencil/core/testing";

import {ZPanelElem} from "./index";

describe("Suite test ZPanelElem", () => {
  it("Test render ZPanelElem vuoto", async () => {
    const page = await newSpecPage({
      components: [ZPanelElem],
      html: `<z-panel-elem></z-panel-elem>`,
    });

    expect(page.root).toEqualHtml(`
      <z-panel-elem>
          <div class="panel-elem-container">
            <div class="panel-elem-link">
              <a class="z-link z-link-blue z-link-icon" id="link_id" target="_blank">
                <z-icon height="14" width="14"></z-icon>
              </a>
            </div>
          </div>
      </z-panel-elem>
    `);
  });

  it("Test render ZPanelElem with only mandatory params", async () => {
    const page = await newSpecPage({
      components: [ZPanelElem],
      html: `<z-panel-elem linklabel="label" url="http://www.google.it" ></z-panel-elem>`,
    });

    expect(page.root).toEqualHtml(`
      <z-panel-elem linklabel="label" url="http://www.google.it">
          <div class="panel-elem-container">
          <div class="panel-elem-link">
            <a class="z-link z-link-blue z-link-icon" href="http://www.google.it" id="link_id" target="_blank">
              <z-icon height="14" width="14"></z-icon>
              label
            </a>
          </div>
        </div>
      </z-panel-elem>
    `);
  });

  it("Test render ZPanelElem with elemid", async () => {
    const page = await newSpecPage({
      components: [ZPanelElem],
      html: `<z-panel-elem elemid="example" linklabel="label" url="http://www.google.it" ></z-panel-elem>`,
    });

    expect(page.root).toEqualHtml(`
      <z-panel-elem elemid="example" linklabel="label" url="http://www.google.it">
          <div class="panel-elem-container">
          <div class="panel-elem-link">
            <a class="z-link z-link-blue z-link-icon" id="examplelink_id" href="http://www.google.it" id="link_id" target="_blank">
              <z-icon height="14" width="14"></z-icon>
              label
            </a>
          </div>
        </div>
      </z-panel-elem>
    `);
  });

  it("Test render ZPanelElem with elemid and isdisabled", async () => {
    const page = await newSpecPage({
      components: [ZPanelElem],
      html: `<z-panel-elem isdisabled elemid="example" linklabel="label" url="http://www.google.it" ></z-panel-elem>`,
    });

    expect(page.root).toEqualHtml(`
      <z-panel-elem isdisabled elemid="example" linklabel="label" url="http://www.google.it">
          <div class="panel-elem-container">
            <div class="panel-elem-link">
              <a class="z-link z-link-blue z-link-disabled z-link-icon" href="http://www.google.it" id="examplelink_id" target="_blank">
                <z-icon height="14" width="14"></z-icon>
                label
              </a>
            </div>
          </div>
      </z-panel-elem>
    `);
  });

  it("Test render ZPanelElem with target=_self", async () => {
    const page = await newSpecPage({
      components: [ZPanelElem],
      html: `<z-panel-elem target="_self" elemid="example" linklabel="label" url="http://www.google.it" ></z-panel-elem>`,
    });

    expect(page.root).toEqualHtml(`
      <z-panel-elem target="_self" elemid="example" linklabel="label" url="http://www.google.it">
        <div class="panel-elem-container">
          <div class="panel-elem-link">
            <a class="z-link z-link-blue z-link-icon" href="http://www.google.it" id="examplelink_id" target="_self">
              <z-icon height="14" width="14"></z-icon>
              label
            </a>
          </div>
        </div>
      </z-panel-elem>
    `);
  });

  it("Test render ZPanelElem with linkicon", async () => {
    const page = await newSpecPage({
      components: [ZPanelElem],
      html: `<z-panel-elem linkicon="example" elemid="example" linklabel="label" url="http://www.google.it" ></z-panel-elem>`,
    });

    expect(page.root).toEqualHtml(`
      <z-panel-elem linkicon="example" elemid="example" linklabel="label" url="http://www.google.it">
        <div class="panel-elem-container">
          <div class="panel-elem-link">
            <a class="z-link z-link-blue z-link-icon" href="http://www.google.it" id="examplelink_id" target="_blank">
              <z-icon height="14" name="example" width="14"></z-icon>
              label
            </a>
          </div>
        </div>
      </z-panel-elem>
    `);
  });

  it("Test render ZPanelElem with imgurl", async () => {
    const page = await newSpecPage({
      components: [ZPanelElem],
      html: `<z-panel-elem imgurl="exampleImgUrl" linkicon="example" elemid="example" linklabel="label" url="http://www.google.it" ></z-panel-elem>`,
    });

    expect(page.root).toEqualHtml(`
      <z-panel-elem imgurl="exampleImgUrl" linkicon="example" elemid="example" linklabel="label" url="http://www.google.it">
          <div class="panel-elem-container">
          <div aria-hidden="true" class="panel-elem-icon">
            <img src="exampleImgUrl" />
          </div>
          <div class="panel-elem-link">
            <a class="z-link z-link-blue z-link-icon" href="http://www.google.it" id="examplelink_id" target="_blank">
              <z-icon height="14" name="example" width="14"></z-icon>
              label
            </a>
          </div>
        </div>
      </z-panel-elem>
    `);
  });

  it("Test render ZPanelElem with imgurl and target=_self", async () => {
    const page = await newSpecPage({
      components: [ZPanelElem],
      html: `<z-panel-elem imgurl="exampleImgUrl" target="_self" linkicon="example" elemid="example" linklabel="label" url="http://www.google.it" ></z-panel-elem>`,
    });

    expect(page.root).toEqualHtml(`
      <z-panel-elem imgurl="exampleImgUrl" target="_self" linkicon="example" elemid="example" linklabel="label" url="http://www.google.it">
          <div class="panel-elem-container">
          <div aria-hidden="true" class="panel-elem-icon">
            <img src="exampleImgUrl" />
          </div>
          <div class="panel-elem-link">
            <a class="z-link z-link-blue z-link-icon" href="http://www.google.it" id="examplelink_id" target="_self">
              <z-icon height="14" name="example" width="14"></z-icon>
              label
            </a>
          </div>
        </div>
      </z-panel-elem>
    `);
  });

  it("Test render ZPanelElem with imgalt", async () => {
    const page = await newSpecPage({
      components: [ZPanelElem],
      html: `<z-panel-elem imgalt="exampleDesc" linkicon="example" elemid="example" linklabel="label" url="http://www.google.it" ></z-panel-elem>`,
    });

    expect(page.root).toEqualHtml(`
      <z-panel-elem imgalt="exampleDesc" linkicon="example" elemid="example" linklabel="label" url="http://www.google.it">
          <div class="panel-elem-container">
          <div aria-hidden="true" class="panel-elem-icon">
            <img alt="exampleDesc" />
          </div>
          <div class="panel-elem-link">
            <a class="z-link z-link-blue z-link-icon" href="http://www.google.it" id="examplelink_id" target="_blank">
              <z-icon height="14" name="example" width="14"></z-icon>
              label
            </a>
          </div>
        </div>
      </z-panel-elem>
    `);
  });

  it("Test render ZPanelElem with imgalt and target=_self", async () => {
    const page = await newSpecPage({
      components: [ZPanelElem],
      html: `<z-panel-elem imgalt="exampleDesc" target="_self" linkicon="example" elemid="example" linklabel="label" url="http://www.google.it" ></z-panel-elem>`,
    });

    expect(page.root).toEqualHtml(`
      <z-panel-elem imgalt="exampleDesc" target="_self" linkicon="example" elemid="example" linklabel="label" url="http://www.google.it">
          <div class="panel-elem-container">
          <div aria-hidden="true" class="panel-elem-icon">
            <img alt="exampleDesc" />
          </div>
          <div class="panel-elem-link">
            <a class="z-link z-link-blue z-link-icon" href="http://www.google.it" id="examplelink_id" target="_self">
              <z-icon height="14" name="example" width="14"></z-icon>
              label
            </a>
          </div>
        </div>
      </z-panel-elem>
    `);
  });

  it("Test render ZPanelElem with icon and slot name", async () => {
    const page = await newSpecPage({
      components: [ZPanelElem],
      html: `<z-panel-elem descr-slot-name="slotname" imgurl="exampleUrl" target="_self" linkicon="example" elemid="example" linklabel="label" url="http://www.google.it"></z-panel-elem>`,
    });

    expect(page.root).toEqualHtml(`
      <z-panel-elem descr-slot-name="slotname" imgurl="exampleUrl" target="_self" linkicon="example" elemid="example" linklabel="label" url="http://www.google.it">
          <div class="panel-elem-container">
          <div aria-hidden="true" class="panel-elem-icon">
            <img src="exampleUrl" />
          </div>
          <div class="panel-elem-link">
            <a class="z-link z-link-blue z-link-icon" href="http://www.google.it" id="examplelink_id" target="_self">
              <z-icon height="14" name="example" width="14"></z-icon>
              label
            </a>
          </div>
          <div class="panel-elem-desc">
          </div>
        </div>
      </z-panel-elem>
    `);
  });

  it("Test render ZPanelElem with icon and complete slot data", async () => {
    const page = await newSpecPage({
      components: [ZPanelElem],
      html: `<z-panel-elem descrSlotName="slotname" imgurl="exampleUrl" target="_self" linkicon="example" elemid="example" linklabel="label" url="http://www.google.it" ><div class="panel-elem-desc"> <span slot="slotname">Full application description</span> </div></z-panel-elem>`,
    });

    expect(page.root).toEqualHtml(`
      <z-panel-elem descrslotname="slotname" imgurl="exampleUrl" target="_self" linkicon="example" elemid="example" linklabel="label" url="http://www.google.it">
        <div class="panel-elem-desc">
          <span slot="slotname">Full application description</span>
        </div>
        <div class="panel-elem-container">
          <div aria-hidden="true" class="panel-elem-icon">
            <img src="exampleUrl" />
          </div>
          <div class="panel-elem-link">
            <a class="z-link z-link-blue z-link-icon" href="http://www.google.it" id="examplelink_id" target="_self">
              <z-icon height="14" name="example" width="14"></z-icon>
              label
            </a>
          </div>
      </z-panel-elem>
    `);
  });

  it("Test render ZPanelElem with imgurl and isdisabled", async () => {
    const page = await newSpecPage({
      components: [ZPanelElem],
      html: `<z-panel-elem isdisabled imgurl="exampleImgUrl" linkicon="example" elemid="example" linklabel="label" url="http://www.google.it" ></z-panel-elem>`,
    });

    expect(page.root).toEqualHtml(`
      <z-panel-elem isdisabled imgurl="exampleImgUrl" linkicon="example" elemid="example" linklabel="label" url="http://www.google.it">
          <div class="panel-elem-container">
          <div aria-hidden="true" class="panel-elem-icon">
              <img src="exampleImgUrl" />
          </div>
          <div class="panel-elem-link">
            <a class="z-link z-link-blue z-link-icon z-link-disabled" href="http://www.google.it" id="examplelink_id" target="_blank">
              <z-icon height="14" name="example" width="14"></z-icon>
              label
            </a>
          </div>
        </div>
      </z-panel-elem>
    `);
  });

  it("Test render ZPanelElem with imgalt and isdisabled", async () => {
    const page = await newSpecPage({
      components: [ZPanelElem],
      html: `<z-panel-elem isdisabled imgalt="exampleAlt" linkicon="example" elemid="example" linklabel="label" url="http://www.google.it" target="_self"></z-panel-elem>`,
    });

    expect(page.root).toEqualHtml(`
      <z-panel-elem isdisabled imgalt="exampleAlt" linkicon="example" elemid="example" linklabel="label" url="http://www.google.it" target="_self">
          <div class="panel-elem-container">
          <div aria-hidden="true" class="panel-elem-icon">
              <img alt="exampleAlt" />
          </div>
          <div class="panel-elem-link">
          <a class="z-link z-link-blue z-link-icon z-link-disabled" href="http://www.google.it" id="examplelink_id" target="_self">
            <z-icon height="14" name="example" width="14"></z-icon>
            label
          </a>
          </div>
        </div>
      </z-panel-elem>
    `);
  });
});

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
        <mock:shadow-root>
          <div class="panel-elem-container">
          <div class="panel-elem-link">
            <z-link htmlid="link_id" target="_blank"></z-link>
          </div>
        </div>
        </mock:shadow-root>
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
        <mock:shadow-root>
          <div class="panel-elem-container">
          <div class="panel-elem-link">
            <z-link htmlid="link_id" target="_blank" href="http://www.google.it">label</z-link>
          </div>
        </div>
        </mock:shadow-root>
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
        <mock:shadow-root>
          <div class="panel-elem-container">
          <div class="panel-elem-link">
            <z-link htmlid="examplelink_id" target="_blank" href="http://www.google.it">label</z-link>
          </div>
        </div>
        </mock:shadow-root>
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
        <mock:shadow-root>
          <div class="panel-elem-container">
          <div class="panel-elem-link">
            <z-link isdisabled htmlid="examplelink_id" target="_blank" href="http://www.google.it">label</z-link>
          </div>
        </div>
        </mock:shadow-root>
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
        <mock:shadow-root>
          <div class="panel-elem-container">
          <div class="panel-elem-link">
            <z-link target="_self" htmlid="examplelink_id" target="_blank" href="http://www.google.it">label</z-link>
          </div>
        </div>
        </mock:shadow-root>
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
        <mock:shadow-root>
          <div class="panel-elem-container">
          <div class="panel-elem-link">
            <z-link icon="example" htmlid="examplelink_id" target="_blank" href="http://www.google.it">label</z-link>
          </div>
        </div>
        </mock:shadow-root>
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
        <mock:shadow-root>
          <div class="panel-elem-container">
          <div class="panel-elem-icon">
            <a class="elem-icon" href="http://www.google.it" target="_blank">
              <img src="exampleImgUrl" />
            </a>
          </div>
          <div class="panel-elem-link">
            <z-link icon="example" htmlid="examplelink_id" target="_blank" href="http://www.google.it">label</z-link>
          </div>
        </div>
        </mock:shadow-root>
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
        <mock:shadow-root>
          <div class="panel-elem-container">
          <div class="panel-elem-icon">
            <a class="elem-icon" href="http://www.google.it" target="_self">
              <img src="exampleImgUrl" />
            </a>
          </div>
          <div class="panel-elem-link">
            <z-link icon="example" htmlid="examplelink_id" target="_self" href="http://www.google.it">label</z-link>
          </div>
        </div>
        </mock:shadow-root>
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
        <mock:shadow-root>
          <div class="panel-elem-container">
          <div class="panel-elem-icon">
            <a class="elem-icon" href="http://www.google.it" target="_blank">
              <img alt="exampleDesc" />
            </a>
          </div>
          <div class="panel-elem-link">
            <z-link icon="example" htmlid="examplelink_id" target="_blank" href="http://www.google.it">label</z-link>
          </div>
        </div>
        </mock:shadow-root>
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
        <mock:shadow-root>
          <div class="panel-elem-container">
          <div class="panel-elem-icon">
            <a class="elem-icon" href="http://www.google.it" target="_self">
              <img alt="exampleDesc" />
            </a>
          </div>
          <div class="panel-elem-link">
            <z-link icon="example" htmlid="examplelink_id" target="_self" href="http://www.google.it">label</z-link>
          </div>
        </div>
        </mock:shadow-root>
      </z-panel-elem>
    `);
  });

  it("Test render ZPanelElem with icon and slot name", async () => {
    const page = await newSpecPage({
      components: [ZPanelElem],
      html: `<z-panel-elem descrSlotName="slotname" imgurl="exampleUrl" target="_self" linkicon="example" elemid="example" linklabel="label" url="http://www.google.it" ></z-panel-elem>`,
    });

    expect(page.root).toEqualHtml(`
      <z-panel-elem descrSlotName="slotname" imgurl="exampleUrl" target="_self" linkicon="example" elemid="example" linklabel="label" url="http://www.google.it">
        <mock:shadow-root>
          <div class="panel-elem-container">
          <div class="panel-elem-icon">
            <a class="elem-icon" href="http://www.google.it" target="_self">
              <img src="exampleUrl" />
            </a>
          </div>
          <div class="panel-elem-link">
            <z-link icon="example" htmlid="examplelink_id" target="_self" href="http://www.google.it">label</z-link>
          </div>
          <div class="panel-elem-desc body-long-01">
            <slot name="slotname" />
          </div>
        </div>
        </mock:shadow-root>
      </z-panel-elem>
    `);
  });

  it("Test render ZPanelElem with icon and complete slot data", async () => {
    const page = await newSpecPage({
      components: [ZPanelElem],
      html: `<z-panel-elem descrSlotName="slotname" imgurl="exampleUrl" target="_self" linkicon="example" elemid="example" linklabel="label" url="http://www.google.it" > <span slot="slotname">Full application description</span> </z-panel-elem>`,
    });

    expect(page.root).toEqualHtml(`
      <z-panel-elem descrSlotName="slotname" imgurl="exampleUrl" target="_self" linkicon="example" elemid="example" linklabel="label" url="http://www.google.it">
        <mock:shadow-root>
          <div class="panel-elem-container">
          <div class="panel-elem-icon">
            <a class="elem-icon" href="http://www.google.it" target="_self">
              <img src="exampleUrl" />
            </a>
          </div>
          <div class="panel-elem-link">
            <z-link icon="example" htmlid="examplelink_id" target="_self" href="http://www.google.it">label</z-link>
          </div>
          <div class="panel-elem-desc body-long-01">
            <slot name="slotname"></slot>
          </div>
        </div>
        </mock:shadow-root>
        <span slot="slotname">
        Full application description
      </span>

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
        <mock:shadow-root>
          <div class="panel-elem-container">
          <div class="panel-elem-icon">
              <img src="exampleImgUrl" />
          </div>
          <div class="panel-elem-link">
            <z-link isdisabled icon="example" htmlid="examplelink_id" target="_blank" href="http://www.google.it">label</z-link>
          </div>
        </div>
        </mock:shadow-root>
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
        <mock:shadow-root>
          <div class="panel-elem-container">
          <div class="panel-elem-icon">
              <img alt="exampleAlt" />
          </div>
          <div class="panel-elem-link">
            <z-link isdisabled icon="example" htmlid="examplelink_id" target="_self" href="http://www.google.it">label</z-link>
          </div>
        </div>
        </mock:shadow-root>
      </z-panel-elem>
    `);
  });
});

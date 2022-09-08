import {newSpecPage} from "@stencil/core/testing";

import {ZStatusTag} from "./index";

describe("Suite test ZStatusTag", () => {
  it("Test render z-status-tag default", async () => {
    const page = await newSpecPage({
      components: [ZStatusTag],
      html: `<z-status-tag class="body-5-sb"></z-status-tag>`,
    });

    expect(page.root).toEqualHtml(
      `<z-status-tag class="body-5-sb" status="default">
        <mock:shadow-root></mock:shadow-root>
      </z-status-tag>`
    );
  });

  it("Test render icon", async () => {
    const page = await newSpecPage({
      components: [ZStatusTag],
      html: `<z-status-tag icon="gear"></z-status-tag>`,
    });

    expect(page.root).toEqualHtml(
      `<z-status-tag class="body-5-sb" status="default" icon="gear">
        <mock:shadow-root>
          <z-icon name="gear" />
        </mock:shadow-root>
      </z-status-tag>`
    );
  });

  it("Test render text", async () => {
    const page = await newSpecPage({
      components: [ZStatusTag],
      html: `<z-status-tag text="in progress"></z-status-tag>`,
    });

    expect(page.root).toEqualHtml(
      `<z-status-tag class="body-5-sb" status="default" text="in progress">
        <mock:shadow-root>
          <span>in progress</span>
        </mock:shadow-root>
      </z-status-tag>`
    );
  });

  it("Test render both icon and text", async () => {
    const page = await newSpecPage({
      components: [ZStatusTag],
      html: `<z-status-tag icon="gear" text="in progress"></z-status-tag>`,
    });

    expect(page.root).toEqualHtml(
      `<z-status-tag class="body-5-sb" icon="gear" status="default" text="in progress">
        <mock:shadow-root>
          <z-icon name="gear"></z-icon>
          <span>in progress</span>
        </mock:shadow-root>
      </z-status-tag>`
    );
  });

  it("Test expandable prop", async () => {
    const page = await newSpecPage({
      components: [ZStatusTag],
      html: `<z-status-tag expandable="true"></z-status-tag>`,
    });

    expect(page.root).toEqualHtml(
      `<z-status-tag class="body-5-sb" status="default" expandable="true">
        <mock:shadow-root></mock:shadow-root>
      </z-status-tag>`
    );
  });

  it("Test status prop", async () => {
    const page = await newSpecPage({
      components: [ZStatusTag],
      html: `<z-status-tag status="warning"></z-status-tag>`,
    });

    expect(page.root).toEqualHtml(
      `<z-status-tag class="body-5-sb" status="warning">
        <mock:shadow-root></mock:shadow-root>
      </z-status-tag>`
    );
  });

  it("Test variant prop", async () => {
    const page = await newSpecPage({
      components: [ZStatusTag],
      html: `<z-status-tag variant="dark"></z-status-tag>`,
    });

    expect(page.root).toEqualHtml(
      `<z-status-tag class="body-5-sb dark" status="default" variant="dark">
        <mock:shadow-root></mock:shadow-root>
      </z-status-tag>`
    );
  });
});

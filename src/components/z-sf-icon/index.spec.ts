import {newSpecPage} from "@stencil/core/testing";

import {ICONS} from "../../constants/iconset";
import {ZSfIcon} from "./index";

describe("Suite test ZSfIcon", () => {
  it("Test render ZSfIcon con path", async () => {
    const page = await newSpecPage({
      components: [ZSfIcon],
      html: `<z-sf-icon name="download" iconid="ZSfIcon"></z-sf-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <z-sf-icon name="download" iconid="ZSfIcon" aria-hidden="true">
        <mock:shadow-root>
          <svg viewBox="0 0 1000 1000" id="ZSfIcon" aria-hidden="true">
            <path d="${ICONS["download"]}"></path>
          </svg>
        </mock:shadow-root>
      </z-sf-icon>
    `);
  });

  it("Test render ZSfIcon con path con dimensioni", async () => {
    const page = await newSpecPage({
      components: [ZSfIcon],
      html: `<z-sf-icon name="download" iconid="ZSfIcon" width="10" height="10"></z-sf-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <z-sf-icon name="download" iconid="ZSfIcon" width="10" height="10" aria-hidden="true">
        <mock:shadow-root>
          <svg viewBox="0 0 1000 1000" width="10" height="10" id="ZSfIcon" aria-hidden="true">
            <path d="${ICONS["download"]}"></path>
          </svg>
        </mock:shadow-root>
      </z-sf-icon>
    `);
  });

  it("Test render ZSfIcon con polygon", async () => {
    const page = await newSpecPage({
      components: [ZSfIcon],
      html: `<z-sf-icon name="chevron-down" iconid="ZSfIcon"></z-sf-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <z-sf-icon name="chevron-down" iconid="ZSfIcon" aria-hidden="true">
        <mock:shadow-root>
          <svg viewBox="0 0 1000 1000" id="ZSfIcon" aria-hidden="true">
            <path d="${ICONS["chevron-down"]}"></path>
          </svg>
        </mock:shadow-root>
      </z-sf-icon>
    `);
  });

  it("Test render ZSfIcon con polygon con dimensioni pixels", async () => {
    const page = await newSpecPage({
      components: [ZSfIcon],
      html: `<z-sf-icon name="chevron-down" iconid="ZSfIcon" width="10" height="10"></z-sf-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <z-sf-icon name="chevron-down" iconid="ZSfIcon" width="10" height="10" aria-hidden="true">
        <mock:shadow-root>
          <svg viewBox="0 0 1000 1000" width="10" height="10" id="ZSfIcon" aria-hidden="true">
            <path d="${ICONS["chevron-down"]}"></path>
          </svg>
        </mock:shadow-root>
      </z-sf-icon>
    `);
  });

  it("Test render ZSfIcon con polygon con dimensioni rem", async () => {
    const page = await newSpecPage({
      components: [ZSfIcon],
      html: `<z-sf-icon name="chevron-down" iconid="ZSfIcon" width="2rem" height="2rem"></z-sf-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <z-sf-icon name="chevron-down" iconid="ZSfIcon" width="2rem" height="2rem" aria-hidden="true">
        <mock:shadow-root>
          <svg viewBox="0 0 1000 1000" width="2rem" height="2rem" id="ZSfIcon" aria-hidden="true">
            <path d="${ICONS["chevron-down"]}"></path>
          </svg>
        </mock:shadow-root>
      </z-sf-icon>
    `);
  });

  it("Test render ZSfIcon con fill", async () => {
    const page = await newSpecPage({
      components: [ZSfIcon],
      html: `<z-sf-icon name="atom" fill="color-primary01"></z-sf-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <z-sf-icon name="atom" fill="color-primary01" aria-hidden="true">
        <mock:shadow-root>
          <svg fill="var(--color-primary01)" viewBox="0 0 1000 1000" aria-hidden="true">
            <path d="${ICONS["atom"]}"></path>
          </svg>
        </mock:shadow-root>
      </z-sf-icon>
    `);
  });

  it("Test render ZSfIcon con indicatore colore", async () => {
    const page = await newSpecPage({
      components: [ZSfIcon],
      html: `<z-sf-icon indicator-color="#CCAA00" name="bg-color"></z-sf-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <z-sf-icon indicator-color="#CCAA00" name="bg-color" aria-hidden="true">
        <mock:shadow-root>
          <div class="icon-sf-wrapper">
            <svg class="color-indicator" viewBox="0 0 1000 1000" fill="#CCAA00" aria-hidden="true">
              <path d="${ICONS["picker-color"]}"></path>
            </svg>
            <svg viewBox="0 0 1000 1000" aria-hidden="true">
              <path d="${ICONS["bg-color"]}"></path>
            </svg>
          </div>
        </mock:shadow-root>
      </z-sf-icon>
    `);
  });

  it("Test render ZSfIcon con indicatore colore trasparente", async () => {
    const page = await newSpecPage({
      components: [ZSfIcon],
      html: `<z-sf-icon indicator-color="transparent" name="bg-color"></z-sf-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <z-sf-icon indicator-color="transparent" name="bg-color" aria-hidden="true">
        <mock:shadow-root>
          <svg viewBox="0 0 1000 1000" aria-hidden="true">
            <path d="${ICONS["bg-color-transparent"]}"></path>
          </svg>
        </mock:shadow-root>
      </z-sf-icon>
    `);
  });
});

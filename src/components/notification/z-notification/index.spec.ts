import { newSpecPage } from "@stencil/core/testing";

import { ZNotification } from "./index";

describe("Suite test ZNotification", () => {
  it("Test render ZNotification with icon, action and close icon", async () => {

    const page = await newSpecPage({
      components: [ZNotification],
      html: `<z-notification
        contenticonname="gear"
        contenttext="Io ne ho viste cose"
        actiontext="Annulla"
        type="success"
        showclose="true"
      ></z-notification>`
    });

    expect(page.root).toEqualHtml(`
      <z-notification actiontext="Annulla" contenticonname="gear" contenttext="Io ne ho viste cose" showclose="true" type="success">
        <mock:shadow-root>
          <div class="notification-container success-notification">
            <z-icon
              name="gear"
              width="16"
              height="16"
            ></z-icon>
            <div class="content-container">
              <z-body class="content-text" level="4">Io ne ho viste cose</z-body>
                  <z-body
                    class="action-text"
                    role="button"
                    tabindex="0"
                    level="5"
                    variant="semibold"
                  >
                    Annulla
                  </z-body>
            </div>
            <z-icon
              class="close-icon"
              name="multiply-circle"
              width="16"
              height="16"
            />

          </div>
        </mock:shadow-root>
      </z-notification>
    `);
  });

  it("Test render ZNotification without icon, action and close icon", async () => {

    const page = await newSpecPage({
      components: [ZNotification],
      html: `<z-notification
        contenttext="Io ne ho viste cose"
        type="success"
      ></z-notification>`
    });

    expect(page.root).toEqualHtml(`
      <z-notification contenttext="Io ne ho viste cose" type="success">
        <mock:shadow-root>
          <div class="notification-container success-notification">
            <div class="content-container">
              <z-body class="content-text" level="4">Io ne ho viste cose</z-body>
            </div>
          </div>
        </mock:shadow-root>
      </z-notification>
    `);
  });

  it("Test render ZNotification with icon, action", async () => {

    const page = await newSpecPage({
      components: [ZNotification],
      html: `<z-notification
        contenticonname="gear"
        contenttext="Io ne ho viste cose"
        actiontext="Annulla"
        type="success"
        showclose="false"
      ></z-notification>`
    });

    expect(page.root).toEqualHtml(`
      <z-notification actiontext="Annulla" contenticonname="gear" contenttext="Io ne ho viste cose" showclose="false" type="success">
        <mock:shadow-root>
          <div class="notification-container success-notification">
            <z-icon
              name="gear"
              width="16"
              height="16"
            ></z-icon>
            <div class="content-container">
              <z-body class="content-text" level="4">Io ne ho viste cose</z-body>
                  <z-body
                    class="action-text"
                    role="button"
                    tabindex="0"
                    level="5"
                    variant="semibold"
                  >
                    Annulla
                  </z-body>
            </div>
          </div>
        </mock:shadow-root>
      </z-notification>
    `);
  });

  it("renders ZNotification with shadow", async () => {
    const page = await newSpecPage({
      components: [ZNotification],
      html: `<z-notification
        contenticonname="gear"
        contenttext="Io ne ho viste cose"
        actiontext="Annulla"
        type="success"
        showclose="false"
        showshadow="true"
      ></z-notification>`
    });

    expect(page.root).toEqualHtml(`
      <z-notification actiontext="Annulla" contenticonname="gear" contenttext="Io ne ho viste cose" showclose="false" showshadow="true" type="success">
        <mock:shadow-root>
          <div class="notification-container success-notification shadow">
            <z-icon
              name="gear"
              width="16"
              height="16"
            ></z-icon>
            <div class="content-container">
              <z-body class="content-text" level="4">Io ne ho viste cose</z-body>
                  <z-body
                    class="action-text"
                    role="button"
                    tabindex="0"
                    level="5"
                    variant="semibold"
                  >
                    Annulla
                  </z-body>
            </div>
          </div>
        </mock:shadow-root>
      </z-notification>
    `);
  });
});

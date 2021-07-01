import { newSpecPage } from "@stencil/core/testing";

import { ZNotification } from "./index";

describe("Suite test ZNotification", () => {
  it("Test render ZNotification with icon, action and close icon", async () => {

    const page = await newSpecPage({
      components: [ZNotification],
      html: `<z-notification
        contenticonname="gear"
        actiontext="Annulla"
        type="success"
        showclose="true"
      >Io ne ho viste cose</z-notification>`
    });

    expect(page.root).toEqualHtml(`
      <z-notification actiontext="Annulla" contenticonname="gear" showclose="true" type="success">
        <mock:shadow-root>
          <div class="notification-container success-notification">
            <z-icon
              name="gear"
              width="16"
              height="16"
            ></z-icon>
            <div class="content-container">
              <z-body class="content-text" level="4"><slot></slot></z-body>
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
        Io ne ho viste cose
      </z-notification>
    `);
  });

  it("Test render ZNotification without icon, action and close icon", async () => {

    const page = await newSpecPage({
      components: [ZNotification],
      html: `<z-notification
        type="success"
      >Io ne ho viste cose</z-notification>`
    });

    expect(page.root).toEqualHtml(`
      <z-notification type="success">
        <mock:shadow-root>
          <div class="notification-container success-notification">
            <div class="content-container">
              <z-body class="content-text" level="4"><slot></slot></z-body>
            </div>
          </div>
        </mock:shadow-root>
        Io ne ho viste cose
      </z-notification>
    `);
  });

  it("Test render ZNotification with icon, action", async () => {

    const page = await newSpecPage({
      components: [ZNotification],
      html: `<z-notification
        contenticonname="gear"
        actiontext="Annulla"
        type="success"
        showclose="false"
      >Io ne ho viste cose</z-notification>`
    });

    expect(page.root).toEqualHtml(`
      <z-notification actiontext="Annulla" contenticonname="gear" showclose="false" type="success">
        <mock:shadow-root>
          <div class="notification-container success-notification">
            <z-icon
              name="gear"
              width="16"
              height="16"
            ></z-icon>
            <div class="content-container">
              <z-body class="content-text" level="4"><slot></slot></z-body>
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
        Io ne ho viste cose
      </z-notification>
    `);
  });

  it("renders ZNotification with shadow", async () => {
    const page = await newSpecPage({
      components: [ZNotification],
      html: `<z-notification
        contenticonname="gear"
        actiontext="Annulla"
        type="success"
        showclose="false"
        showshadow="true"
      >Io ne ho viste cose</z-notification>`
    });

    expect(page.root).toEqualHtml(`
      <z-notification actiontext="Annulla" contenticonname="gear" showclose="false" showshadow="true" type="success">
        <mock:shadow-root>
          <div class="notification-container success-notification shadow">
            <z-icon
              name="gear"
              width="16"
              height="16"
            ></z-icon>
            <div class="content-container">
              <z-body class="content-text" level="4"><slot></slot></z-body>
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
        Io ne ho viste cose
      </z-notification>
    `);
  });
});

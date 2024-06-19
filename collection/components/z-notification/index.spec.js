import { newSpecPage } from "@stencil/core/testing";
import { ZNotification } from "./index";
describe("Suite test ZNotification", () => {
    it("Test render ZNotification with icon, action and close button", async () => {
        const page = await newSpecPage({
            components: [ZNotification],
            html: `<z-notification
        contenticonname="gear"
        actiontext="Annulla"
        type="success"
        showclose="true"
      >Testo della notifica</z-notification>`,
        });
        expect(page.root).toEqualHtml(`
      <z-notification actiontext="Annulla" contenticonname="gear" showclose="true" type="success">
        <mock:shadow-root>
          <z-icon
            class="status-icon"
            name="gear"
            width="16"
            height="16"
          ></z-icon>
          <div class="content-container">
            <div class="content-text"><slot></slot></div>
            <button class="action-button" type="button">Annulla</button>
          </div>
          <button class="close-button" type="button">
            <z-icon
              name="multiply-circle"
              width="16"
              height="16"
            />
          </button>
        </mock:shadow-root>
        Testo della notifica
      </z-notification>
    `);
    });
    it("Test render ZNotification without icon, action and close button", async () => {
        const page = await newSpecPage({
            components: [ZNotification],
            html: `<z-notification type="success">Testo della notifica</z-notification>`,
        });
        expect(page.root).toEqualHtml(`
      <z-notification type="success">
        <mock:shadow-root>
          <div class="content-container">
            <div class="content-text"><slot></slot></div>
          </div>
        </mock:shadow-root>
        Testo della notifica
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
      >Testo della notifica</z-notification>`,
        });
        expect(page.root).toEqualHtml(`
      <z-notification actiontext="Annulla" contenticonname="gear" showclose="false" type="success">
        <mock:shadow-root>
          <z-icon
            class="status-icon"
            name="gear"
            width="16"
            height="16"
          ></z-icon>
          <div class="content-container">
            <div class="content-text"><slot></slot></div>
            <button class="action-button" type="button">Annulla</button>
          </div>
        </mock:shadow-root>
        Testo della notifica
      </z-notification>
    `);
    });
});
//# sourceMappingURL=index.spec.js.map

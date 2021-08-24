import { newSpecPage } from "@stencil/core/testing";
import { ZToastNotification } from "./index";

describe("Suite test ZToastNotification", () => {
  it("Test render ZToastNotification vuoto", async () => {

    const page = await newSpecPage({
      components: [ZToastNotification],
      html: `<z-toast-notification></z-toast-notification>`
    });

    expect(page.root).toEqualHtml(`
    <z-toast-notification class="slide-in-down" style="--percentuale: undefined%; undefined: rgba(0,0,0,0);">
      <mock:shadow-root>
        <div id="external-container">
          <div id="text">
            <span class="title"></span>
            <span class="message"></span>
          </div>
          <div id="button">
            <slot name="button"></slot>
          </div>
        </div>
      </mock:shadow-root>
    </z-toast-notification>
    `)
  });

  it("Test render ZToastNotification con props e closebutton", async () => {

    const page = await newSpecPage({
      components: [ZToastNotification],
      html: `<z-toast-notification 
        heading="Titolo" 
        type="dark" 
        message="descrizione della notifica" 
        closebutton="true" 
        transition="slide-in-down"
        draggablepercentage="10"
      ></z-toast-notification>`
    });

    expect(page.root).toEqualHtml(`
    <z-toast-notification class="slide-in-down" closebutton="true" draggablepercentage="10" heading="Titolo" message="descrizione della notifica" transition="slide-in-down" type="dark" style="--percentuale: undefined%; undefined: rgba(0,0,0,0);">
      <mock:shadow-root>
        <div class="dark" id="external-container">
          <div id="text">
            <span class="title">
              Titolo
            </span>
            <span class="message">
              descrizione della notifica
            </span>
          </div>
          <div id="button">
            <slot name="button"></slot>
          </div>
          <div id="icon">
            <z-icon height="15" name="multiply-circled" width="15"></z-icon>
          </div>
        </div>
      </mock:shadow-root>
    </z-toast-notification>
    `)
  });

  it("Test render ZToastNotification con props e slot", async () => {

    const page = await newSpecPage({
      components: [ZToastNotification],
      html: `<z-toast-notification 
        heading="Titolo" 
        type="dark" 
        message="descrizione della notifica" 
        closebutton="true" 
        transition="slide-in-down" 
        draggablepercentage="10"
      >
        <z-button variant="dark-bg" issmall slot="button">button</z-button>
      </z-toast-notification>`
    });

    expect(page.root).toEqualHtml(`
    <z-toast-notification class="slide-in-down" closebutton="true" draggablepercentage="10" heading="Titolo" message="descrizione della notifica" transition="slide-in-down" type="dark" style="--percentuale: undefined%; undefined: rgba(0,0,0,0);">
      <mock:shadow-root>
        <div class="dark" id="external-container">
          <div id="text">
            <span class="title">
              Titolo
            </span>
            <span class="message">
              descrizione della notifica
            </span>
          </div>
          <div id="button">
            <slot name="button"></slot>
          </div>
          <div id="icon">
            <z-icon height="15" name="multiply-circled" width="15"></z-icon>
          </div>
        </div>
      </mock:shadow-root>
      <z-button issmall="" slot="button" variant="dark-bg">
        button
      </z-button>
    </z-toast-notification>
    `)
  });
});


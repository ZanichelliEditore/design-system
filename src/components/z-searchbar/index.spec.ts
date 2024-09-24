import {newSpecPage} from "@stencil/core/testing";

import {ZSearchbar} from "./index";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("Suite test ZSearchbar", () => {
  it("Simple searchbar", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar htmlid="my-id" show-search-button="true"></z-searchbar>`,
    });
    expect(page.root).toEqualHtml(`
      <z-searchbar class="has-submit" htmlid="my-id" show-search-button="true">
        <mock:shadow-root>
          <div class="input-container">
            <z-input size="big"></z-input>
          </div>
          <z-button size="big" variant="primary">CERCA</z-button>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Autocomplete searchbar without search", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar htmlid="my-id" autocomplete="true" prevent-submit="true"></z-searchbar>`,
    });
    expect(page.root).toEqualHtml(`
      <z-searchbar class="has-results" htmlid="my-id" autocomplete="true" prevent-submit="true">
        <mock:shadow-root>
          <div class="input-container">
            <z-input size="big"></z-input>
          </div>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Autocomplete searchbar with search and results - no input search", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar
        htmlid="my-id"
        autocomplete="true"
        results-items='${JSON.stringify(getItems())}'
        show-search-button="true"
      ></z-searchbar>`,
    });
    expect(page.root).toEqualHtml(`
      <z-searchbar
        class="has-submit has-results"
        htmlid="my-id"
        autocomplete="true"
        results-items='${JSON.stringify(getItems())}'
        show-search-button="true"
      >
        <mock:shadow-root>
          <div class="input-container">
            <z-input size="big"></z-input>
          </div>
          <z-button size="big" variant="primary">CERCA</z-button>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Autocomplete searchbar with search and results - with input search", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar
        htmlid="my-id"
        autocomplete="true"
        results-items='${JSON.stringify(getItems())}'
        show-search-button="true"
      ></z-searchbar>`,
    });
    page.rootInstance.searchString = "item";
    page.rootInstance.showResults = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-searchbar
        class="has-submit has-results"
        htmlid="my-id"
        autocomplete="true"
        results-items='${JSON.stringify(getItems())}'
        show-search-button="true"
      >
        <mock:shadow-root>
          <div class="input-container">
            <z-input size="big" value="item"></z-input>
            <div class="results-wrapper">
              <div class="results">
                <z-list role="listbox" id="list-my-id">
                  ${searchHelper()}
                  ${resultsItems()}
                </z-list>
              </div>
            </div>
          </div>
          <z-button size="big" variant="primary">CERCA</z-button>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Autocomplete searchbar with search and limited results - with input search", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar
        htmlid="my-id"
        autocomplete="true"
        results-items='${JSON.stringify(getItems())}'
        results-count="1"
        show-search-button="true"
      ></z-searchbar>`,
    });
    page.rootInstance.searchString = "item";
    page.rootInstance.showResults = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-searchbar
        class="has-submit has-results"
        htmlid="my-id"
        autocomplete="true"
        results-items='${JSON.stringify(getItems())}'
        results-count="1"
        show-search-button="true"
      >
        <mock:shadow-root>
          <div class="input-container">
            <z-input size="big" value="item"></z-input>
            <div class="results-wrapper">
              <div class="results">
                <z-list role="listbox" id="list-my-id">
                  ${searchHelper()}
                  <z-list-group divider-type="element">
                    <z-list-element
                      id="list-item-my-id-0"
                      role="option"
                      dividerType="element"
                      tabindex="0"
                    >
                    <div class="list-element" tabindex="0">
                      <span class="item ellipsis">
                        <z-icon class="item-icon" name="download"></z-icon>
                        <span class="item-label" title="item 1"><mark>item</mark> 1</span>
                      </span>
                    </div>
                    </z-list-element>
                  </z-list-group>
                  ${showAllResults()}
                </z-list>
              </div>
            </div>
          </div>
          <z-button size="big" variant="primary">CERCA</z-button>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Autocomplete searchbar with search and limited results (show all) - with input search", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar
        htmlid="my-id"
        autocomplete="true"
        results-items='${JSON.stringify(getItems())}'
        show-search-button="true"
      ></z-searchbar>`,
    });
    page.rootInstance.searchString = "item";
    page.rootInstance.showResults = true;
    page.rootInstance.currResultsCount = 0;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-searchbar
        class="has-submit has-results"
        htmlid="my-id"
        autocomplete="true"
        results-items='${JSON.stringify(getItems())}'
        show-search-button="true"
      >
        <mock:shadow-root>
          <div class="input-container">
            <z-input size="big" value="item"></z-input>
            <div class="results-wrapper">
              <div class="results">
                <z-list role="listbox" id="list-my-id">
                  ${searchHelper()}
                  ${resultsItems()}
                </z-list>
              </div>
            </div>
          </div>
          <z-button size="big" variant="primary">CERCA</z-button>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Autocomplete searchbar without search and no results - with input search", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar
        htmlid="my-id"
        autocomplete="true"
        prevent-submit="true"
        results-items='[]'
      ></z-searchbar>`,
    });
    page.rootInstance.searchString = "item";
    page.rootInstance.showResults = true;
    page.rootInstance.currResultsCount = 0;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-searchbar
        class="has-results"
        htmlid="my-id"
        autocomplete="true"
        prevent-submit="true"
        results-items="[]"
      >
        <mock:shadow-root>
          <div class="input-container">
            <z-input size="big" value="item"></z-input>
            <div class="results-wrapper">
              <div class="results">
                <span class="item item-no-results">
                  Non abbiamo trovato risultati per <b>item</b>
                  <br /><br />
                  Cosa puoi fare?
                  <ul>
                    <li>Verificare di aver scritto bene</li>
                    <li>Provare a cercare un'altra parola</li>
                    <li>Provare a cercare qualcosa di più generico</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Autocomplete searchbar with search and no results - with input search", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar
        htmlid="my-id"
        autocomplete="true"
        results-items='[]'
        show-search-button="true"
      ></z-searchbar>`,
    });
    page.rootInstance.searchString = "item";
    page.rootInstance.showResults = true;
    page.rootInstance.currResultsCount = 0;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-searchbar
        class="has-submit has-results"
        htmlid="my-id"
        autocomplete="true"
        results-items='[]'
        show-search-button="true"
      >
        <mock:shadow-root>
          <div class="input-container">
            <z-input size="big" value="item"></z-input>
            <div class="results-wrapper">
              <div class="results">
                <z-list role="listbox" id="list-my-id">
                  ${searchHelper(false)}
                </z-list>
              </div>
            </div>
          </div>
          <z-button size="big" variant="primary">CERCA</z-button>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Simple searchbar change size", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar htmlid="my-id" show-search-button="true" size="small"></z-searchbar>`,
    });
    expect(page.root).toEqualHtml(`
      <z-searchbar class="has-submit" htmlid="my-id" show-search-button="true" size="small">
        <mock:shadow-root>
          <div class="input-container">
            <z-input size="small"></z-input>
          </div>
          <z-button size="small" variant="primary">CERCA</z-button>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Simple searchbar change button variant", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar htmlid="my-id" show-search-button="true" variant="secondary"></z-searchbar>`,
    });
    expect(page.root).toEqualHtml(`
      <z-searchbar class="has-submit" htmlid="my-id" show-search-button="true" variant="secondary">
        <mock:shadow-root>
          <div class="input-container">
            <z-input size="big"></z-input>
          </div>
          <z-button size="big" variant="secondary">CERCA</z-button>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Simple searchbar only icon button", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar htmlid="my-id" show-search-button="true" search-button-icon-only="true"></z-searchbar>`,
    });
    expect(page.root).toEqualHtml(`
      <z-searchbar class="has-submit" htmlid="my-id" show-search-button="true" search-button-icon-only="true">
        <mock:shadow-root>
          <div class="input-container">
            <z-input size="big"></z-input>
          </div>
          <z-button icon="search" size="big" variant="primary"></z-button>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });
});

const getItems = () => [{label: "item 1", icon: "download"}, {label: "item 2"}, {label: "item 3"}];

const resultsItems = () => `
  <z-list-group divider-type="element">
    <z-list-element
      id="list-item-my-id-0"
      role="option"
      tabindex="0"
      dividerType="element"
    >
    <div class="list-element" tabindex="0">
      <span class="item ellipsis">
        <z-icon class="item-icon" name="download"></z-icon>
        <span class="item-label" title="item 1"><mark>item</mark> 1</span>
      </span>
    </div>
    </z-list-element>
    <z-list-element
      id="list-item-my-id-1"
      role="option"
      tabindex="0"
      dividerType="element"
    >
    <div class="list-element" tabindex="0">
      <span class="item ellipsis">
        <span class="item-label" title="item 2"><mark>item</mark> 2</span>
      </span>
    </div>
    </z-list-element>
    <z-list-element
      id="list-item-my-id-2"
      role="option"
      tabindex="0"
    >
    <div class="list-element" tabindex="0">
      <span class="item ellipsis">
        <span class="item-label" title="item 3"><mark>item</mark> 3</span>
      </span>
    </div>
    </z-list-element>
  </z-list-group>`;

const searchHelper = (divider: boolean = true) => `
  <z-list-element
    role="option"
    ${divider ? `dividerType="element"` : ``}
    id="list-item-my-id-search"
  >
    <div class="list-element" tabindex="0">
    <span class="item item-search">
      <z-icon class="search-icon" name="left-magnifying-glass"></z-icon>
      <span class="item-label">Cerca <mark>item</mark></span>
    </span>
    </div>
  </z-list-element>
`;

const showAllResults = () => `
  <z-list-element
    role="option"
    id="list-item-my-id-show-all"
    color="color-primary01"
    tabindex="0"
    clickable
  >
    <div class="item-show-all">Vedi tutti i risultati</div>
  </z-list-element>
`;

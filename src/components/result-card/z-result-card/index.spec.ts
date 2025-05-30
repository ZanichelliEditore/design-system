import {newSpecPage} from "@stencil/core/testing";
import {ZResultCard} from "./index";

describe("Suite test ZResultCard", () => {
  it("Test render ZResultCard with single cover", async () => {
    const page = await newSpecPage({
      components: [ZResultCard],
      html: `<z-result-card 
                  author="Test author"
                  card-title="Opera title single cover" 
                  card-subtitle="Opera subtitle single cover"
                  cover="test-cover.jpg"
              ></z-result-card>`,
    });

    expect(page.root).toEqualHtml(`
            <z-result-card author="Test author" card-title="Opera title single cover" card-subtitle="Opera subtitle single cover" cover="test-cover.jpg" tabindex="0">
                <mock:shadow-root>
                    <div class="z-cover-container">
                        <div class="z-cover-stack">
                            <img alt="Book Cover" class="z-cover-img" src="test-cover.jpg">
                        </div>
                    </div>
                    <div class="info-container">
                        <div class="author-label">Test author</div>
                        <div class="card-title">Opera title single cover</div>
                        <div class="card-subtitle">Opera subtitle single cover</div>
                        <div class="tags-container">
                            <slot name="tags"></slot>
                        </div>
                        <div class="volumes-label">
                            <slot name="volumes"></slot>
                        </div>
                    </div>
                </mock:shadow-root>
            </z-result-card>
        `);
  });

  it("Test render ZResultCard with multiple covers", async () => {
    const page = await newSpecPage({
      components: [ZResultCard],
      html: `<z-result-card 
                author="Test author"
                card-title="Opera title multiple cover" 
                card-subtitle="Opera subtitle multiple cover"
                cover="test-cover.jpg"
                has-multiple-covers="true"
            ></z-result-card>`,
    });

    expect(page.root).toEqualHtml(`
            <z-result-card author="Test author" card-title="Opera title multiple cover" card-subtitle="Opera subtitle multiple cover" cover="test-cover.jpg" has-multiple-covers="true" tabindex="0">
                <mock:shadow-root>
                    <div class="z-cover-container has-multiple">
                        <div class="z-cover-stack">
                            <div>
                                <div class="z-cover-shadow z-shadow-2"></div>
                                <div class="z-cover-shadow z-shadow-1"></div>
                            </div>
                            <img alt="Book Cover" class="z-cover-img" src="test-cover.jpg">
                        </div>
                    </div>
                    <div class="info-container">
                        <div class="author-label">Test author</div>
                        <div class="card-title">Opera title multiple cover</div>
                        <div class="card-subtitle">Opera subtitle multiple cover</div>
                        <div class="tags-container">
                            <slot name="tags"></slot>
                        </div>
                        <div class="volumes-label">
                            <slot name="volumes"></slot>
                        </div>
                    </div>
                </mock:shadow-root>
            </z-result-card>
        `);
  });

  it("Test render ZResultCard without author", async () => {
    const page = await newSpecPage({
      components: [ZResultCard],
      html: `<z-result-card 
                card-title="Opera title multiple cover" 
                card-subtitle="Opera subtitle multiple cover"
                cover="test-cover.jpg"
                has-multiple-covers="true"
            ></z-result-card>`,
    });

    expect(page.root).toEqualHtml(`
            <z-result-card card-title="Opera title multiple cover" card-subtitle="Opera subtitle multiple cover" cover="test-cover.jpg" has-multiple-covers="true" tabindex="0">
                <mock:shadow-root>
                    <div class="z-cover-container has-multiple">
                        <div class="z-cover-stack">
                            <div>
                                <div class="z-cover-shadow z-shadow-2"></div>
                                <div class="z-cover-shadow z-shadow-1"></div>
                            </div>
                            <img alt="Book Cover" class="z-cover-img" src="test-cover.jpg">
                        </div>
                    </div>
                    <div class="info-container">
                        <div class="card-title">Opera title multiple cover</div>
                        <div class="card-subtitle">Opera subtitle multiple cover</div>
                        <div class="tags-container">
                            <slot name="tags"></slot>
                        </div>
                        <div class="volumes-label">
                            <slot name="volumes"></slot>
                        </div>
                    </div>
                </mock:shadow-root>
            </z-result-card>
        `);
  });

  it("Test render ZResultCard with tags", async () => {
    const page = await newSpecPage({
      components: [ZResultCard],
      html: `<z-result-card 
                author="Test author"
                card-title="Opera with tags" 
                card-subtitle="Subtitle with tags"
                cover="test-cover.jpg">
                <div slot="tags">Tag 1</div>
                <div slot="tags">Tag 2</div>
            </z-result-card>`,
    });

    expect(page.root).toEqualHtml(`
            <z-result-card author="Test author" card-title="Opera with tags" card-subtitle="Subtitle with tags" cover="test-cover.jpg" tabindex="0">
                <mock:shadow-root>
                    <div class="z-cover-container">
                        <div class="z-cover-stack">
                            <img alt="Book Cover" class="z-cover-img" src="test-cover.jpg">
                        </div>
                    </div>
                    <div class="info-container">
                        <div class="author-label">Test author</div>
                        <div class="card-title">Opera with tags</div>
                        <div class="card-subtitle">Subtitle with tags</div>
                        <div class="tags-container">
                            <slot name="tags"></slot>
                        </div>
                        <div class="volumes-label">
                            <slot name="volumes"></slot>
                        </div>
                    </div>
                </mock:shadow-root>
                <div slot="tags">Tag 1</div>
                <div slot="tags">Tag 2</div>
            </z-result-card>
        `);
  });

  it("Test render ZResultCard with volumes", async () => {
    const page = await newSpecPage({
      components: [ZResultCard],
      html: `<z-result-card 
                author="Test author"
                card-title="Opera with volumes" 
                card-subtitle="Subtitle with volumes"
                cover="test-cover.jpg">
                <span slot="volumes">Volume 1</span>
            </z-result-card>`,
    });

    expect(page.root).toEqualHtml(`
            <z-result-card author="Test author" card-title="Opera with volumes" card-subtitle="Subtitle with volumes" cover="test-cover.jpg" tabindex="0">
                <mock:shadow-root>
                    <div class="z-cover-container">
                        <div class="z-cover-stack">
                            <img alt="Book Cover" class="z-cover-img" src="test-cover.jpg">
                        </div>
                    </div>
                    <div class="info-container">
                        <div class="author-label">Test author</div>
                        <div class="card-title">Opera with volumes</div>
                        <div class="card-subtitle">Subtitle with volumes</div>
                        <div class="tags-container">
                            <slot name="tags"></slot>
                        </div>
                        <div class="volumes-label">
                            <slot name="volumes"></slot>
                        </div>
                    </div>
                </mock:shadow-root>
                <span slot="volumes">Volume 1</span>
            </z-result-card>
        `);
  });

  it("Test render ZResultCard as info card", async () => {
    const page = await newSpecPage({
      components: [ZResultCard],
      html: `<z-result-card
                card-title="Info Title"
                card-subtitle="Info Subtitle"
                is-info-card="true"
            ></z-result-card>`,
    });

    expect(page.root).toEqualHtml(`
            <z-result-card card-title="Info Title" card-subtitle="Info Subtitle" is-info-card="true" class="info-card" tabindex="0">
                <mock:shadow-root>
                    <div class="info-icon-column">
                        <div class="info-icon-container">
                            <z-icon class="info-icon" height="18" name="link" width="18"></z-icon>
                        </div>
                    </div>
                    <div class="info-container">
                        <div class="card-title info-title">Info Title</div>
                        <div class="card-subtitle info-subtitle">Info Subtitle</div>
                    </div>
                </mock:shadow-root>
            </z-result-card>
        `);
  });
});

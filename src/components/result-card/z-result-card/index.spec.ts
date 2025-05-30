import {newSpecPage} from "@stencil/core/testing";
import {ZResultCard} from "./index";

describe("Suite test ZResultCard", () => {
  it("Test render ZResultCard empty", async () => {
    const page = await newSpecPage({
      components: [ZResultCard],
      html: `<z-result-card card-title="" card-subtitle=""></z-result-card>`,
    });

    expect(page.root).toEqualHtml(`
            <z-result-card card-title="" card-subtitle="" tabindex="0">
                <mock:shadow-root>
                    <div class="z-cover-container">
                        <div class="z-cover-stack">
                            <img alt="Book Cover" class="z-cover-img">
                        </div>
                    </div>
                    <div class="info-container">
                        <div class="card-title"></div>
                        <div class="card-subtitle"></div>
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

  it("Test render ZResultCard with opera props", async () => {
    const page = await newSpecPage({
      components: [ZResultCard],
      html: `<z-result-card 
                author="Test Author"
                card-title="Test Title" 
                card-subtitle="Test Subtitle"
                cover="test-cover.jpg"
                has-multiple-covers="true"
            ></z-result-card>`,
    });

    expect(page.root).toEqualHtml(`
            <z-result-card author="Test Author" card-title="Test Title" card-subtitle="Test Subtitle" cover="test-cover.jpg" has-multiple-covers="true" tabindex="0">
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
                        <div class="author-label">Test Author</div>
                        <div class="card-title">Test Title</div>
                        <div class="card-subtitle">Test Subtitle</div>
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

import {Component, Host, Prop, h} from "@stencil/core";
import defaultFallbackCover from "../../assets/images/png/placeholder-cover.png";

/**
 * This component displays a book cover image,
 * with options for borders and a representation of multiple books with a stack of fake covers behind the original one.
 * The aspect ratio of the cover image is preserved.
 * Alignment of the image inside the container can be customized via CSS properties.
 * @cssprop --z-book-cover-width - width of the book cover (default: `100%`)
 * @cssprop --z-book-cover-height - height of the book cover (default: `378px`)
 * @cssprop --z-book-cover-border-radius - border radius of the book cover (default: `var(--border-radius)`)
 * @cssprop --z-book-cover-stack-offset-x - horizontal offset for stacked covers when `multiple` is `true` (default: `8px`)
 * @cssprop --z-book-cover-stack-offset-y - vertical offset for stacked covers when `multiple` is `true` (default: `12px`)
 * @cssprop --z-book-cover-vertical-alignment - vertical alignment of the cover image within the container. Provide any valid value for `align-items` CSS property (default: `start`)
 * @cssprop --z-book-cover-horizontal-alignment - horizontal alignment of the cover image within the container. Provide any valid value for `justify-content` CSS property (default: `start`)
 */
@Component({
  tag: "z-book-cover",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZBookCover {
  /** URL of the cover image. */
  @Prop()
  cover: string;

  /** URL of the fallback cover image. */
  @Prop()
  fallbackCover: string;

  /** Whether to show a stack of covers to represent multiple books. */
  @Prop({reflect: true})
  multiple = false;

  /** Whether to apply a border around the cover image (always applied when `multiple` is enabled). */
  @Prop({reflect: true})
  bordered = false;

  render(): HTMLZBookCoverElement {
    return (
      <Host>
        {this.multiple && [...new Array(2)].map(() => <div class="stack-shadow"></div>)}
        <div class="cover-container">
          <img
            src={this.cover ?? defaultFallbackCover}
            aria-hidden="true"
            alt=""
            onError={() => (this.cover = this.fallbackCover || defaultFallbackCover)}
          />
        </div>
      </Host>
    );
  }
}

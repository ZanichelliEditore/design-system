import {Component, Host, Prop, h} from "@stencil/core";
import {COLOR_INDICATOR_ICONS, ICONS} from "../../constants/iconset";

/**
 * Component to render an SVG icon from the internal icon set, selected by `name`.
 * This component automatically recognizes icons that have an indicator (e.g. `bg-color`, `font-color`, etc.), that can be filled with a custom color via the `indicatorColor` prop.
 */
@Component({
  tag: "z-icon",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZIcon {
  /** Icon name */
  @Prop()
  name: string;

  /** Icon height (optional) */
  @Prop()
  height?: number | string;

  /** Icon width (optional) */
  @Prop()
  width?: number | string;

  /** HTML `id` attribute (optional) */
  @Prop()
  iconid?: string;

  /** Name of the CSS color token to use for the icon fill color (e.g. `blue500`). */
  @Prop()
  fill?: string;

  /**
   * Color to use to fill the icon's color indicator, if it has one.
   * Can be any valid value for the `fill` svg attribute.
   * If the icon passed through the `name` prop doesn't have a color indicator, this prop has no effect.
   */
  @Prop()
  indicatorColor?: string;

  /**
   * Selects either a `<path>` or `<polygon>` element based on the format of the icon data.
   * @param iconValue The SVG path data or polygon points from the ICONS set.
   */
  private selectPathOrPolygon(iconValue: string): SVGPathElement | SVGPolygonElement {
    if (iconValue?.startsWith("M")) {
      return <path d={iconValue}></path>;
    }

    return <polygon points={iconValue}></polygon>;
  }

  render(): SVGElement {
    const svgAttrs = {
      viewBox: "0 0 1000 1000",
      width: this.width,
      height: this.height,
    };

    return (
      <Host aria-hidden="true">
        <div class="icon-wrapper">
          <svg
            id={this.iconid || undefined}
            fill={this.fill ? `var(--${this.fill})` : undefined}
            {...svgAttrs}
          >
            {this.selectPathOrPolygon(ICONS[this.name])}
          </svg>
          {COLOR_INDICATOR_ICONS.includes(this.name) && (
            <svg
              class="color-indicator"
              fill={this.indicatorColor || "transparent"}
              {...svgAttrs}
            >
              {this.selectPathOrPolygon(ICONS["picker-color"])}
            </svg>
          )}
        </div>
      </Host>
    );
  }
}

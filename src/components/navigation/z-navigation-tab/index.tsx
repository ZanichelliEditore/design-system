import { Component, Prop, h, Element } from "@stencil/core";
import classNames from "classnames";

import {
  TabSizeBean,
  TabSizeEnum,
  TabOrientationBean,
  TabOrientationEnum
} from "../../../beans";

/**
 * @slot - tab label
 */

@Component({
  tag: "z-navigation-tab",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZNavigationTab {
  @Element() hostElement: HTMLElement;

  /** Identifier, should be unique. */
  @Prop() htmlid?: string;
  /** Available orientation: `horizontal` and `vertical`. Defaults to `horizontal`. */
  @Prop({ reflect: true }) orientation?: TabOrientationBean = TabOrientationEnum.horizontal;
  /** a disabled attribute. */
  @Prop({ reflect: true }) disabled?: boolean = false;
  /** a selected attribute. */
  @Prop({ reflect: true }) selected?: boolean = false;
  /** `z-icon` name to use (optional). */
  @Prop() icon?: string;
  /** Available sizes: `big` and `small`. Defaults to `big`. */
  @Prop({ reflect: true })
  size?: TabSizeBean = TabSizeEnum.big;

  render() {
    return (
      <slot name="element">
        <a
          id={this.htmlid}
          class={classNames(
            this.size,
          )
          && `${!this.disabled && this.selected && "selected"} ${this.disabled && "disabled"}`}
        >
          {this.icon && <z-icon name={this.icon} width={16} height={16} />}
          <slot />
        </a>
      </slot>
    );
  }
}

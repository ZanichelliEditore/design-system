import {Component, Element, h, Host, Prop} from "@stencil/core";
import { HostElement } from '@stencil/core/internal';
import {DividerSize, ZSectionTitleDividerPosition, ZSectionTitleDividerPositions} from "../../beans";

/**
 * Section title component.
 * An optional secondary title can be put over the primary one.
 *
 * @slot secondary-title - Slot for the secondary title. When present, the divider is always displayed under it,
 * following its width and removing the one for the primary title.
 * @slot primary-title - Slot for the primary title.
 * @cssprop --z-section-title--divider-color - Color of the divider. Use a CSS prop string like `"--red500"`. Default is `"--red500"`.
 */
@Component({
  tag: "z-section-title",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZSectionTitle {
  /**
   * Divider position for the primary title.
   * This prop only works if the secondary title is not set.
   */
  @Prop() dividerPosition: ZSectionTitleDividerPosition = ZSectionTitleDividerPositions.before;

  /**
   * Whether the primary title text is uppercase.
   */
  @Prop({reflect: true}) uppercase = true;

  @Element() host: HTMLZSectionTitleElement;

  private hasSecondaryTitle: boolean;

  componentWillRender(): void {
    this.hasSecondaryTitle = !!this.host.querySelector("[slot=secondary-title]");
  }

  render(): HostElement {
    return (
      <Host>
        <slot name="secondary-title" />
        {!this.hasSecondaryTitle && this.dividerPosition == ZSectionTitleDividerPositions.before && (
          <z-divider
            size={DividerSize.large}
            color="z-section-title--divider-color"
          />
        )}
        <slot name="primary-title" />
        {!this.hasSecondaryTitle && this.dividerPosition == ZSectionTitleDividerPositions.after && (
          <z-divider
            size={DividerSize.large}
            color="z-section-title--divider-color"
          />
        )}
      </Host>
    );
  }
}

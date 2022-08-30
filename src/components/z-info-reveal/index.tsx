import {
  Component,
  h,
  Prop,
  State,
  Watch,
  Element,
  Host,
} from '@stencil/core';
import { InfoRevealPosition } from "../../beans";

@Component({
  tag: 'z-info-reveal',
  styleUrl: 'styles.css',
  shadow: true
})

/**
 * Info reveal component.
 *
 * @slot - info to display in the info box. If more than one element has been slotted,
 * by clicking on the panel it switches to the next info element.
 * @cssprop --z-info-reveal-theme--surface - background color of the info reveal panel.
 * @cssprop --z-info-reveal-theme--text - foreground color of the info reveal panel.
 * @cssprop --z-info-reveal-shadow - shadow of the info reveal panel.
 * @cssprop --z-info-reveal-max-width - max width of the info reveal panel.
 */
export class ZInfoReveal {
  @Element() el: HTMLElement;

  /** Name of the icon for the open button */
  @Prop() icon?= 'informationsource';

  /** Position of the open/close button on the panel. */
  @Prop({ reflect: true }) position?= InfoRevealPosition.bottom_right;

  /** Text that appears on closed panel next to the open button. */
  @Prop() label?: string;

  /** Whether the info panel is open. */
  @State()
  open: boolean = false;

  /** Current index for the info queue. */
  @State()
  currentIndex: number = null;

  @Watch("currentIndex")
  watchItems() {
    Array.from(this.el.children).forEach((child, index) => {
      if (this.currentIndex === index) {
        child.setAttribute('data-current', '');
      } else {
        child.removeAttribute('data-current');
      }
    });
  }

  /**
   * Open the info box.
   */
  openInfoBox() {
    this.currentIndex = 0;
    this.open = true;
  }

  /**
   * Close the info box.
   */
  closeInfoBox() {
    this.open = false;
  }

  /**
   * Navigate slotted info.
   * It closes the info box after the last info has been navigated.
   */
  next() {
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex === this.el.children.length) {
      this.closeInfoBox();
    }
  }

  render() {
    return <Host open={this.open}>
      <button class="z-info-reveal-trigger" onClick={this.openInfoBox.bind(this)}>
        {this.label && <span class="z-info-reveal-label">{this.label}</span>}
        <z-icon name={this.icon}></z-icon>
      </button>
      {this.open && <div
        class="info-box"
        onClick={this.next.bind(this)}
        tabIndex={0}
      >
        <slot></slot>
        <button class="z-info-reveal-close" onClick={this.closeInfoBox.bind(this)}>
          <z-icon name="close"></z-icon>
        </button>
      </div>}
    </Host>;
  }
}

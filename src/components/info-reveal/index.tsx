import {
  Component,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  Listen,
  Element,
  Watch
} from '@stencil/core';
import { InfoRevealPosition } from "../../beans";

/**
  * TPDP
 */

@Component({
  tag: 'z-info-reveal',
  styleUrl: 'styles.css',
  shadow: false
})

export class ZInfoReveal {
  @Element() el: HTMLElement;

  /** Name of the icon for the open button */
  @Prop({ reflect: true }) icon?= 'informationsource';

  /** Position of the panel. */
  @Prop({ reflect: true }) position?= InfoRevealPosition.TOP_RIGHT;

  /** Statements that appears when clicking on the reveal panel. */
  @Prop({ reflect: true }) statements: Array<String>;

  /** Text might appears on closed panel aside the open button. */
  @Prop({ reflect: true }) label?: string;

  /** Whether the info panel is open. */
  @State()
  open: boolean = false;

  /** Current index for the statements queue. */
  @State()
  currentIndex: number = 0

  /**
   * @inheritdoc
   */
  connectedCallback() {
    this.el.addEventListener('click', () => {
      this.currentIndex = this.currentIndex + 1;
      if (this.currentIndex === this.statements.length) {
        this.open = false;
        this.currentIndex = 0;
      }
    });
  }

  render() {
    return [
      !this.open && [
        <z-button icon={this.icon} onClick={(ev) => {
          ev.stopPropagation();
          ev.preventDefault();
          this.open = true;
        }}></z-button>,
        this.label && <span class="z-info-reveal-label">{this.label}</span>
      ],
      this.open && [
        <z-button icon="close" onClick={(ev) => {
          ev.stopPropagation();
          ev.preventDefault();
          this.open = false;
        }}></z-button>,
        <span class="text-04">
          {this.statements[this.currentIndex]}
        </span>,
      ]
    ];
  }
}

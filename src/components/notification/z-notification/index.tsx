import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { NotificationType } from '../../../beans';

/**
 * Notification bar component.
 * @slot - the text of the notification
 */
@Component({
  tag: 'z-notification',
  styleUrl: 'styles.css',
  shadow: false,
  scoped: true,
})
export class ZNotification {
  /** Name of the icon on the left of the content */
  @Prop()
  contenticonname?: string;

  /** Action button text */
  @Prop()
  actiontext?: string;

  /** Alert variant type */
  @Prop({ reflect: true })
  type: NotificationType;

  /** Enable close icon */
  @Prop()
  showclose?: boolean = false;

  /**
   * Enable shadow.
   * @deprecated shadow is available only for the `sticky` version of the notification.
   */
  @Prop({ reflect: true })
  showshadow?: boolean = false;

  /** Enable sticky notification bar. */
  @Prop({ reflect: true })
  sticky?: boolean = false;

  /** Call to action clicked */
  @Event() notificationAction: EventEmitter;

  handleActionButtonClick(e: MouseEvent): void {
    e.preventDefault();
    this.notificationAction.emit();
  }

  /** Close button clicked */
  @Event() notificationClose: EventEmitter;

  handleCloseButtonClick(e: MouseEvent): void {
    e.preventDefault();
    this.notificationClose.emit();
  }

  constructor() {
    this.handleActionButtonClick = this.handleActionButtonClick.bind(this);
    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
  }

  render() {
    return [
      this.contenticonname && <z-icon
        class="status-icon"
        name={this.contenticonname}
        width={16}
        height={16}
      />,

      <div class="content-container">
        <div class="content-text body-4">
          <slot></slot>
        </div>

        {!!this.actiontext?.trim() &&
          <button
            class="action-button interactive-3-sb"
            type="button"
            onClick={this.handleActionButtonClick}
          >
            {this.actiontext}
          </button>
        }
      </div>,

      this.showclose && <button
        class="close-button"
        type="button"
        onClick={this.handleCloseButtonClick}
      >
        <z-icon
          name="multiply-circle"
          width={16}
          height={16}
        />
      </button>
    ];
  }
}

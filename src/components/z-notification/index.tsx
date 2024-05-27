import {Component, Prop, h, Event, EventEmitter, Host} from "@stencil/core";
import {NotificationType} from "../../beans";

/**
 * Notification bar component.
 * @slot - The text of the notification.
 * @cssprop --z-notification--top-offset - The top offset of the notification. Use it when `sticky` prop is set to `true` and you need the notification to stay under other sticky elements. Default: 0px.
 */
@Component({
  tag: "z-notification",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZNotification {
  /** Name of the icon on the left of the content */
  @Prop()
  contenticonname?: string;

  /** Action button text */
  @Prop()
  actiontext?: string;

  /** Alert variant type */
  @Prop({reflect: true})
  type: NotificationType;

  /** Enable close icon */
  @Prop()
  showclose?: boolean = false;

  /**
   * Enable shadow.
   * @deprecated shadow is available only for the `sticky` version of the notification.
   */
  @Prop({reflect: true})
  showshadow?: boolean = false;

  /** Enable sticky notification bar. */
  @Prop({reflect: true})
  sticky?: boolean = false;

  /** Call to action clicked */
  @Event()
  notificationAction: EventEmitter;

  private handleActionButtonClick(e: MouseEvent): void {
    e.preventDefault();
    this.notificationAction.emit();
  }

  /** Close button clicked */
  @Event()
  notificationClose: EventEmitter;

  private handleCloseButtonClick(e: MouseEvent): void {
    e.preventDefault();
    this.notificationClose.emit();
  }

  constructor() {
    this.handleActionButtonClick = this.handleActionButtonClick.bind(this);
    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
  }

  render(): HTMLZNotificationElement {
    return (
      <Host>
        {this.contenticonname && (
          <z-icon
            class="status-icon"
            name={this.contenticonname}
            width={16}
            height={16}
          />
        )}
        <div class="content-container">
          <div class="content-text">
            <slot></slot>
          </div>
          {!!this.actiontext?.trim() && (
            <button
              class="action-button"
              type="button"
              onClick={this.handleActionButtonClick}
            >
              {this.actiontext}
            </button>
          )}
        </div>
        {this.showclose && (
          <button
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
        )}
      </Host>
    );
  }
}

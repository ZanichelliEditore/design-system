import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

import { NotificationType } from '../../../beans';

@Component({
  tag: 'z-notification',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZNotification {
  /** icon on the left of the content  */
  @Prop() contenticonname?: string;
  /** action button text */
  @Prop() actiontext?: string;
  /** alert variant type */
  @Prop() type: NotificationType;
  /** enable close icon */
  @Prop() showclose?: boolean = false;
  /** enable shadow */
  @Prop() showshadow?: boolean = false;


  /** notification action event */
  @Event() notificationAction: EventEmitter;
  handleActionButtonClick(e: MouseEvent): void {
    e.preventDefault();
    this.notificationAction.emit();
  }

  /** notification close event */
  @Event() notificationClose: EventEmitter;
  handleCloseButtonClick(e: MouseEvent): void {
    e.preventDefault();
    this.notificationClose.emit();
  }

  render() {
    return (
      <div class={{
        "notification-container": true,
        "success-notification": this.type === NotificationType.success,
        "warning-notification": this.type === NotificationType.warning,
        "error-notification": this.type === NotificationType.error,
        "shadow": this.showshadow
      }}>
        {this.contenticonname && (
          <z-icon
            name={this.contenticonname}
            width={16}
            height={16}
          />
        )}
        <div class="content-container">
          <z-body class="content-text" level={4}><slot></slot></z-body>
          {this.actiontext && !!this.actiontext.trim().length && (
            <z-body
              class="action-text"
              role="button"
              tabindex="0"
              onClick={(e: MouseEvent) => {
                this.handleActionButtonClick(e);
              }}
              level={5}
              variant="semibold"
            >
              {this.actiontext}
            </z-body>
          )}
        </div>
        {this.showclose && (
          <z-icon
            class="close-icon"
            name="multiply-circle"
            width={16}
            height={16}
            onClick={(e: MouseEvent) => this.handleCloseButtonClick(e)}
          />
        )}
      </div>
    );
  }
}

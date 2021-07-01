import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'z-notification',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZNotification {
  /** icon on the left of the content  */
  @Prop() contenticonname: string;
  /** content text */
  @Prop() contenttext: string;
  /** action button text */
  @Prop() actiontext?: string;
  /** alert variant type */
  @Prop() type: string;
  /** enable close icon */
  @Prop() showclose: boolean;
  /** enable shadow */
  @Prop() showshadow: boolean;
  

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

  retrieveClass(): string {
    let className = "";
    switch (this.type) {
      case "success":
        className = "success-notification";
        break;
      case "warning":
        className = "warning-notification";
        break;
      case "error":
        className = "error-notification";
        break;
      default:
        className = "";
        break;
    }
    return className;
  }

  render() {
    return (
      <div class={`notification-container ${this.retrieveClass()}`}>
        {this.contenticonname && (
          <z-icon
            name={this.contenticonname}
            width={16}
            height={16}
            class={this.retrieveClass()}
          />
        )}
        <div class="content-container">
          <z-body class="content-text" level={4}>{this.contenttext}</z-body>
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

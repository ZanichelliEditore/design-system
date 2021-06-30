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
  

  /** notification action event */
  @Event() notificationAction: EventEmitter;
  emitAction() {
    this.notificationAction.emit({ actionType: this.type });
  }

  handleActionButtonClick(e: MouseEvent): void {
    e.preventDefault();
    this.emitAction();
  }

  /** notification close event */
  @Event() notificationClose: EventEmitter;
  emitClose() {
    this.notificationClose.emit({ actionType: this.type });
  }

  handleCloseButtonClick(e: MouseEvent): void {
    e.preventDefault();
    this.emitClose();
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
      <div class={`relative-container ${this.retrieveClass()}`}>
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
            /** BODY */
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
            
            /** BUTTON */
            // <z-button
            //   class="content-action"
            //   variant={ButtonVariantEnum.tertiary}
            //   size={ButtonSizeEnum['x-small']}
            //   onClick={(e: MouseEvent) => {
            //     this.handleActionButtonClick(e);
            //   }}
            // >
            //     {this.actiontext}
            // </z-button>

            /** LINK */
            // <z-link
            //   class="content-action"
            //   href="#"
            // >
            //   {this.actiontext}
            // </z-link>
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

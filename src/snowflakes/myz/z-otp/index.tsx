import {Component, Event, EventEmitter, Prop, h} from "@stencil/core";
import {InputStatus} from "../../../beans";

@Component({
  tag: "z-otp",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZOtp {
  /** Input number */
  @Prop()
  inputNum?: number = 6;

  /** Input status */
  @Prop()
  status?: InputStatus;

  /** Input message */
  @Prop()
  message?: string;

  private otp: string[];

  private otpRef: HTMLInputElement[];

  /** Otp change event */
  @Event()
  otpChange: EventEmitter;

  private emitInputChange(value: string): void {
    this.otpChange.emit({value});
  }

  componentWillLoad(): void {
    this.otp = [...Array(this.inputNum)];
    this.otpRef = [...Array(this.inputNum)];
  }

  render(): HTMLDivElement {
    return (
      <div class="otp-container">
        <div class="digits-container">
          {this.otp.map((_val, i) => (
            <input
              class={this.status == InputStatus.ERROR ? "error" : null}
              onKeyDown={(e: KeyboardEvent) => {
                if (e.keyCode > 47) {
                  this.otpRef[i].value = "";
                }
              }}
              onKeyUp={(e: KeyboardEvent) => {
                if (e.keyCode > 47) {
                  i < this.inputNum - 1 && this.otpRef[i + 1].focus();
                }
              }}
              onInput={(e: InputEvent) => {
                this.otp[i] = (e.target as HTMLInputElement).value;
                this.emitInputChange(this.otp.join(""));
              }}
              type="text"
              minlength="1"
              maxlength="1"
              autoComplete="off"
              ref={(el) => (this.otpRef[i] = el)}
            />
          ))}
        </div>
        <z-input-message
          message={this.message}
          status={this.status}
        ></z-input-message>
      </div>
    );
  }
}

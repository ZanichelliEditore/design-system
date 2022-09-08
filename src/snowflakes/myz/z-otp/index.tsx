import {Component, h, Event, EventEmitter, Prop} from "@stencil/core";
import {InputStatusBean, InputStatusEnum} from "../../../beans";

@Component({
  tag: "z-otp",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZOtp {
  @Prop() inputNum?: number = 6;
  @Prop() status?: InputStatusBean;
  @Prop() message?: string;

  private otp: string[];
  private otpRef: HTMLInputElement[];

  @Event() otpChange: EventEmitter;
  emitInputChange(value: string) {
    this.otpChange.emit({value});
  }

  componentWillLoad() {
    this.otp = Array.apply(null, Array(this.inputNum));
    this.otpRef = Array.apply(null, Array(this.inputNum));
  }

  render() {
    return (
      <div class="otp-container">
        <div class="digits-container">
          {this.otp.map((_elem, i) => {
            return (
              <input
                class={this.status == InputStatusEnum.error ? "error" : null}
                onKeyDown={(e: any) => {
                  if (e.keyCode > 47) this.otpRef[i].value = "";
                }}
                onKeyUp={(e: any) => {
                  if (e.keyCode > 47) {
                    i < this.inputNum - 1 && this.otpRef[i + 1].focus();
                  }
                }}
                onInput={(e: any) => {
                  this.otp[i] = e.target.value;
                  this.emitInputChange(this.otp.join(""));
                }}
                type="text"
                minlength="1"
                maxlength="1"
                autoComplete="off"
                ref={(input) => (this.otpRef[i] = input)}
              />
            );
          })}
        </div>
        <z-input-message
          message={this.message}
          status={this.status}
        ></z-input-message>
      </div>
    );
  }
}

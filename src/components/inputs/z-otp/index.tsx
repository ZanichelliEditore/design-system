import { Component, h, Event, EventEmitter, Prop } from "@stencil/core";
import {keybordKeyCodeEnum} from '../../../beans';

@Component({
  tag: "z-otp",
  styleUrl: "styles.css",
  shadow: true
})
export class ZOtp {
  @Prop() inputNum?: number = 6;

  private otp: string[];
  private otpRef: HTMLInputElement[];

  @Event() otpChange: EventEmitter;
  emitInputChange(value: string) {
    this.otpChange.emit({ value });
  }

  componentWillLoad() {
    this.otp = Array.apply(null, Array(this.inputNum));
    this.otpRef = Array.apply(null, Array(this.inputNum));
  }

  componentDidLoad() {
    this.otpRef[0].focus();
  }

  render() {
    return (
      <div class="otp-container">
        {this.otp.map((_elem, i) => {
          return (
            <input
              onInput={(e: any) => {
                this.otp[i] = e.target.value;
                this.emitInputChange(this.otp.join(""));
              }}
              onKeyUp={(e: any) => {
                if (e.keyCode !== keybordKeyCodeEnum.BACKSPACE && e.keyCode !== keybordKeyCodeEnum.DELETE)
                  i < this.inputNum && this.otpRef[i + 1].focus();
              }}
              type="number"
              autoComplete="off"
              maxLength={1}
              ref={input => (this.otpRef[i] = input)}
            />
          );
        })}
      </div>
    );
  }
}

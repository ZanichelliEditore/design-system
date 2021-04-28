import {
  Component,
  h,
  Element,
  Event,
  EventEmitter,
  Prop,
} from "@stencil/core";
import {
  ButtonVariantEnum,
  InputStatusBean,
  InputStatusEnum,
} from "../../../beans";

/**
 * @slot username - username input
 * @slot password - password input
 * @slot login - login button
 * @slot signup - signup button
 * @slot provider - expternal providers login buttons
 */
@Component({
  tag: "z-login-modal",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZLoginModal {
  @Element() hostElement: HTMLElement;

  /** Username/password input status */
  @Prop({ mutable: true }) status?: InputStatusBean;
  /** Username helper message */
  @Prop({ mutable: true }) message?: string;

  /** Emitted on login submit */
  @Event() loginSubmit: EventEmitter;
  emitLoginSubmit() {
    const usernameInput = this.hostElement.querySelector(
      "z-input#username"
    ) as HTMLZInputElement;
    const passwordInput = this.hostElement.querySelector(
      "z-input#password"
    ) as HTMLZInputElement;

    // INFO: slotted inputs
    if (!usernameInput || !passwordInput) return;

    let username = usernameInput.value;
    let password = passwordInput.value;

    if (!username || !password) {
      this.status = InputStatusEnum.error;
      return;
    }

    username = this.cleanUsername(username);

    this.loginSubmit.emit({
      username,
      password,
      originalUsername: usernameInput.value,
    });
  }

  /** Emitted on signup button click */
  @Event() signupClick: EventEmitter;
  emitSignupClick() {
    this.signupClick.emit();
  }

  /** Emitted on google button click */
  @Event() googleClick: EventEmitter;
  emitGoogleClick() {
    this.googleClick.emit();
  }

  /** Emitted on facebook button click */
  @Event() facebookClick: EventEmitter;
  emitFacebookClick() {
    this.facebookClick.emit();
  }

  /** Emitted on zaino digitale button click */
  @Event() zainoDigitaleClick: EventEmitter;
  emitZainoDigitaleClick() {
    this.zainoDigitaleClick.emit();
  }

  handleInputClick(e: KeyboardEvent) {
    if (e.code !== "Enter") return;
    this.emitLoginSubmit();
  }

  cleanUsername(username: string): string {
    username = username.trim().toLowerCase();

    const mobileRegex = /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g;
    if (mobileRegex.test(username)) {
      username = username.replace(/[- .)(]/g, "");
      if (/^[\d ]*$/.test(username)) username = "+39" + username;
    }

    return username;
  }

  render() {
    return (
      <z-modal modaltitle="Entra in MyZanichelli">
        <div class="wrapper" slot="modalContent">
          <form method="post">
            <div class="username">
              <slot name="username">
                <z-input
                  id="username"
                  label="email o numero di telefono"
                  placeholder="Inserisci la mail o il cellulare"
                  autocomplete="username"
                  name="username"
                  status={this.status}
                  message={this.message}
                  onKeyUp={(e: KeyboardEvent) => this.handleInputClick(e)}
                  onInputChange={() => (this.status = null)}
                ></z-input>
              </slot>
            </div>

            <div class="password">
              <slot name="password">
                <z-input
                  id="password"
                  label="password"
                  placeholder="Inserisci la password"
                  type="password"
                  name="password"
                  autocomplete="current-password"
                  status={this.status}
                  onKeyUp={(e: KeyboardEvent) => this.handleInputClick(e)}
                  onInputChange={() => (this.status = null)}
                ></z-input>
              </slot>
            </div>

            <z-link class="forget">Password dimenticata?</z-link>

            <div class="login">
              <slot name="login">
                <z-button
                  variant={ButtonVariantEnum.primary}
                  onClick={() => this.emitLoginSubmit()}
                >
                  Login
                </z-button>
              </slot>
            </div>
          </form>

          <hr />

          <z-body class="signup" level={4} variant="semibold">
            Non hai ancora un account?
          </z-body>

          <div class="signup">
            <slot name="signup">
              <z-button
                variant={ButtonVariantEnum.secondary}
                onClick={() => this.emitSignupClick()}
              >
                registrati
              </z-button>
            </slot>
          </div>

          <div class="provider">
            <slot name="provider">
              <z-body class="provider" level={5} variant="regular">
                OPPURE ACCEDI CON:
              </z-body>
              <div class="providers">
                <z-button
                  variant={ButtonVariantEnum.secondary}
                  onClick={() => this.emitGoogleClick()}
                >
                  GOOGLE
                </z-button>
                <z-button
                  variant={ButtonVariantEnum.secondary}
                  onClick={() => this.emitFacebookClick()}
                >
                  FACEBOOK
                </z-button>
                <z-button
                  variant={ButtonVariantEnum.secondary}
                  onClick={() => this.emitZainoDigitaleClick()}
                >
                  ZAINO DIGITALE
                </z-button>
                <z-link>Cos'è Zaino Digitale?</z-link>
              </div>
            </slot>
          </div>
        </div>
      </z-modal>
    );
  }
}

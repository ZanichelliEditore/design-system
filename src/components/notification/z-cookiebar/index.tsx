import { Component, Prop, h } from "@stencil/core";
import { ButtonVariantEnum } from "../../../beans";

@Component({
  tag: "z-cookiebar",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCookiebar {
  /** cookie policy link url  */
  @Prop() cookiepolicyurl: string;
  /** prevent default cookie set action on 'OK' button click (optional) */
  @Prop() preventcookieset?: boolean;
  /** hide cookie bar (optional) */
  @Prop({ mutable: true }) hide?: boolean;

  setAcceptCookie() {
    if (!this.preventcookieset) {
      const d = new Date();
      d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
      const expires = "expires=" + d.toUTCString();
      document.cookie =
        "cc_cookie_accept" + "=" + "y" + ";" + expires + ";path=/";
    }
    this.hide = true;
  }

  render() {
    return (
      <div class={`${this.hide ? "hidden" : ""}`}>
        <div class="wrapper">
          <div class="content">
            <div>
              <h2>Le vostre scelte riguardanti i Cookie su questo sito</h2>
              <div>
                <p>Su questo sito usiamo i cookies.</p>
                <p>
                  Se continui a navigare ci permetti di farlo secondo le regole
                  spiegate nella nostra informativa sulla privacy relativa ai
                  &nbsp;
                  <strong>
                    <z-link
                      style={{ "text-decoration": "underline", "height": "14px", "display": "inline-flex" }}
                      href={this.cookiepolicyurl}
                      target="_blank"
                      iswhite={true}
                    >
                      cookies
                    </z-link>
                  </strong>
                  .
                </p>
              </div>
            </div>
            <z-button
              variant={ButtonVariantEnum.secondary}
              onClick={() => this.setAcceptCookie()}
            >
              OK
            </z-button>
          </div>
        </div>
      </div>
    );
  }
}

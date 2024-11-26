import {Component, Element, Prop, h} from "@stencil/core";
import {ControlSize, InfoRevealPosition} from "../../../beans";

@Component({
  tag: "z-book-card-app",
  styleUrls: ["styles.css", "../../css-components/z-link/styles.css", "../../../tokens/typography.css"],
  shadow: true,
})
export class ZBookCardApp {
  @Element() hostElement: HTMLZBookCardAppElement;

  /**
   * App logo url
   */
  @Prop()
  logo: string;

  /**
   * App name
   */
  @Prop()
  name: string;

  /**
   * link to the app website
   */
  @Prop()
  link: string;

  /**
   * Show or hide laZ prefix before app name
   */
  @Prop()
  laz? = true;

  /**
   * Info text to show as inforeveal
   */
  @Prop()
  info?: string;

  private renderLaz(): HTMLSpanElement | null {
    if (this.laz) {
      return <span class="laz">laZ </span>;
    }

    return null;
  }

  render(): HTMLZBookCardAppElement {
    return (
      <div>
        <div class="app">
          <img
            src={this.logo}
            alt=""
          />
          <div class="name body-4-sb">
            {this.renderLaz()}
            {this.name}
          </div>
        </div>
        {this.info && (
          <z-info-reveal
            icon="info"
            size={ControlSize.X_SMALL}
            position={InfoRevealPosition.TOP_RIGHT}
            class="info body-5"
          >
            <div>{this.info}</div>
          </z-info-reveal>
        )}
        <a
          class="z-link z-link-icon"
          href={this.link}
          aria-label={this.name}
        >
          <z-icon
            name="chevron-right"
            width={16}
            height={16}
            fill="color-primary01-icon"
          ></z-icon>
        </a>
      </div>
    );
  }
}
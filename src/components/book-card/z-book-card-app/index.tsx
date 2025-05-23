import {Component, Element, Event, EventEmitter, Prop, h} from "@stencil/core";
import {ControlSize, InfoRevealPosition, PopoverPosition} from "../../../beans";

/**
 * ZBookCardApp component
 * @cssprop --z-book-card-app-padding-x - set left and right padding
 * @cssprop --z-book-card-app-padding-y - set top and bottom padding
 */
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
  logo?: string;

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

  /** click on app link */
  @Event()
  appClick: EventEmitter;

  private popover: HTMLZPopoverElement;

  private appNameElem: HTMLDivElement;

  private appNameText: HTMLDivElement;

  private appNameLaz: HTMLDivElement;

  private emitAppClick(): void {
    this.appClick.emit();
  }

  private elementHasEllipsis(): boolean {
    return this.appNameElem.offsetWidth < this.appNameLaz?.offsetWidth + this.appNameText.offsetWidth;
  }

  private renderLaz(): HTMLSpanElement | null {
    if (this.laz) {
      return (
        <span
          ref={(val) => (this.appNameLaz = val as HTMLDivElement)}
          class="laz"
        >
          laZ{" "}
        </span>
      );
    }

    return null;
  }

  private togglePopover(): void {
    if (!this.popover.open) {
      this.popover.open = true;
    }
  }

  render(): HTMLZBookCardAppElement {
    return (
      <div>
        <a
          class="app z-link"
          href={this.link}
          aria-label={`vai a ${this.laz ? "laz" : ""} ${this.name}`}
          onClick={() => this.emitAppClick()}
          target="_blank"
          onMouseOver={() => {
            this.elementHasEllipsis() && this.togglePopover();
          }}
        >
          {this.logo && (
            <img
              src={this.logo}
              alt=""
            />
          )}
          <div
            class="name body-4-sb"
            ref={(val) => (this.appNameElem = val as HTMLDivElement)}
          >
            {this.renderLaz()}
            <span ref={(val) => (this.appNameText = val as HTMLDivElement)}>{this.name}</span>
            <z-popover
              bindTo={this.appNameElem}
              position={PopoverPosition.BOTTOM_RIGHT}
              ref={(val) => (this.popover = val as HTMLZPopoverElement)}
              closable
              showArrow
            >
              <div>{this.name}</div>
            </z-popover>
          </div>
        </a>
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
          aria-label={`vai a ${this.laz ? "laz" : ""} ${this.name}`}
          onClick={() => this.emitAppClick()}
          target="_blank"
        >
          <z-icon
            name="chevron-right"
            fill="color-primary01-icon"
          ></z-icon>
        </a>
      </div>
    );
  }
}

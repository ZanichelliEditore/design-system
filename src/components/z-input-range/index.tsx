import {Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, State, Watch, h} from "@stencil/core";
import {ControlSize, Orientation, PopoverPosition} from "../../beans";

/**
 * Input range component.
 */
@Component({
  tag: "z-input-range",
  styleUrls: ["styles.css", "../../tokens/typography.css"],
  shadow: true,
})
export class ZInputRange implements ComponentInterface {
  @Element() host: HTMLZInputRangeElement;

  /** The value of the input range. */
  @Prop()
  value = 0;

  /** The orientation of the input range. */
  @Prop({reflect: true})
  orientation: Orientation;

  /** Whether the input range is disabled. */
  @Prop()
  disabled = false;

  /** The lowest value in the range of permitted values. */
  @Prop()
  min = 0;

  /** The greatest value in the range of permitted values. */
  @Prop()
  max = 100;

  /** The step value for the input range. */
  @Prop()
  step = 1;

  /** The size of the input range. Default: `ControlSize.BIG` */
  @Prop({reflect: true})
  size: ControlSize.BIG;

  /**
   * Whether to always show the tooltip with the current value.
   * When `false`, the tooltip is only shown on focus and when dragging the slider's thumb.
   */
  @Prop()
  showValue = false;

  /** Whether to show `min` and `max` values of the input range. Only visible with the `horizontal` orientation. */
  @Prop()
  showEdges = false;

  /**
   * The position of the tooltip displaying the current value.
   * Defaults to `top` for horizontal orientation and `left` for vertical orientation.
   * May be necessary to adjust this prop when the input range is close to the edges of the screen,
   * to prevent the tooltip from showing in unwanted positions.
   * For example, for a horizontal input range close to the top of the screen, you may want to set this prop to `bottom`.
   */
  @Prop()
  valuePosition = PopoverPosition.TOP;

  /**
   * Whether to invert the position of the edges.
   * By default the edges are positioned beneath the input range for horizontal orientation and to the right for vertical orientation.
   * When this prop is `true`, the edges are positioned above the input range for horizontal orientation and to the left for vertical orientation.
   * Useful to prevent the tooltip from overlapping with the edges.
   */
  @Prop()
  invertEdgesPosition = false;

  /** Emitted when the value of the input range is being changed (`input` native event). */
  @Event()
  rangeInput: EventEmitter<number>;

  /** Emitted when the value of the input range has changed (`change` native event). */
  @Event()
  rangeChange: EventEmitter<number>;

  @State()
  isActive = false;

  @State()
  currentValue = this.value;

  @State()
  tooltipGuideRef: HTMLSpanElement;

  private inputContainer: HTMLDivElement;

  /** Calculates the current ratio of the input range value. */
  private getCurrentRatio(): number {
    const range = this.max - this.min;

    if (range <= 0) {
      return 0;
    }

    const ratio = (this.currentValue - this.min) / range;

    return Math.min(1, Math.max(0, ratio));
  }

  private get tooltipPosition(): PopoverPosition {
    if (this.valuePosition) {
      return this.valuePosition;
    }

    return this.orientation === Orientation.VERTICAL ? PopoverPosition.LEFT : PopoverPosition.TOP;
  }

  @Watch("min")
  @Watch("max")
  @Watch("value")
  /** Updates the CSS variables for the input range progress and tooltip guide position. */
  private updateProgress(): void {
    const ratio = this.getCurrentRatio();
    const progress = ratio * 100;

    // Update CSS variables used to style track progress and tooltip guide position.
    this.inputContainer?.style.setProperty("--progress-ratio", `${ratio}`);
    this.inputContainer?.style.setProperty("--progress", `${progress}%`);
  }

  private onInput(event: InputEvent): void {
    event.stopPropagation();
    this.currentValue = Number((event.target as HTMLInputElement).value);
    this.updateProgress();
    this.rangeInput.emit(this.currentValue);
  }

  private onChange(event: Event): void {
    event.stopPropagation();
    this.currentValue = Number((event.target as HTMLInputElement).value);
    this.rangeChange.emit(this.currentValue);
  }

  componentDidLoad() {
    this.updateProgress();
  }

  render() {
    return (
      <Host class={{"invert-edges": this.invertEdgesPosition}}>
        <div
          class="input-container body-3"
          ref={(el) => (this.inputContainer = el)}
        >
          <input
            type="range"
            disabled={this.disabled}
            min={this.min}
            max={this.max}
            step={this.step}
            value={this.value}
            onInput={(event) => this.onInput(event)}
            onChange={(event) => this.onChange(event)}
            onFocus={() => (this.isActive = true)}
            onBlur={() => (this.isActive = false)}
          />
          <div
            class="tooltip-guide"
            ref={(el) => (this.tooltipGuideRef = el)}
          ></div>
          {(this.showValue || this.isActive) && this.tooltipGuideRef && (
            <z-tooltip
              position={this.tooltipPosition}
              bindTo={this.tooltipGuideRef}
              open
              closable={false}
            >
              <div class="current-value">{this.currentValue}</div>
            </z-tooltip>
          )}
        </div>
        {this.showEdges && (
          <div class="edges body-3">
            <span class="min">{this.min}</span>
            <span class="max">{this.max}</span>
          </div>
        )}
      </Host>
    );
  }
}

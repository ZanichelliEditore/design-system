import {
  AttachInternals,
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  Watch,
  h,
} from "@stencil/core";
import {ControlSize, Orientation, PopoverPosition} from "../../beans";
import {randomId} from "../../utils/utils";

/**
 * Input range component.
 */
@Component({
  tag: "z-input-range",
  styleUrls: ["styles.css", "../../tokens/typography.css"],
  shadow: true,
  formAssociated: true,
})
export class ZInputRange implements ComponentInterface {
  @Element() host: HTMLZInputRangeElement;

  @AttachInternals() internals: ElementInternals;

  /** Whether the input range is disabled. */
  @Prop()
  disabled = false;

  /**
   * The aria label of the input range. for accessibility.
   * Not necessary if the `label` prop is set.
   */
  @Prop()
  htmlAriaLabel: string;

  /** ID of the input range. */
  @Prop()
  htmlId = `z-input-range-${randomId()}`;

  /**
   * The label of the input range.
   * When `orientation` is set to `vertical`, the label is not visible but used as `aria-label`, unless `htmlAriaLabel` is provided.
   */
  @Prop()
  label: string;

  /** The greatest value in the range of permitted values. */
  @Prop()
  max = 100;

  /** The lowest value in the range of permitted values. */
  @Prop()
  min = 0;

  /** The orientation of the input range. */
  @Prop({reflect: true})
  orientation: Orientation;

  /** Whether to show `min` and `max` values of the input range. Only visible with the `horizontal` orientation. */
  @Prop()
  showEdges = false;

  /** The size of the input range. Default: `ControlSize.BIG` */
  @Prop({reflect: true})
  size: ControlSize.BIG;

  /** The step value for the input range. */
  @Prop()
  step = 1;

  /** The value of the input range. */
  @Prop()
  value = 0;

  /**
   * The position of the tooltip displaying the current value.
   * Defaults to `top` for horizontal orientation and `left` for vertical orientation.
   * May be necessary to adjust this prop when the input range is close to the edges of the screen,
   * to prevent the tooltip from showing out of the screen or in an unintended position due to auto adjustment.
   * For example, for a horizontal input range close to the top of the screen, you may want to set this prop to `bottom`.
   */
  @Prop()
  valuePosition: PopoverPosition.TOP | PopoverPosition.BOTTOM | PopoverPosition.LEFT | PopoverPosition.RIGHT;

  /** Emitted when the value of the input range is being changed (`input` native event). */
  @Event()
  rangeInput: EventEmitter<number>;

  /** Emitted when the value of the input range has changed (`change` native event). */
  @Event()
  rangeChange: EventEmitter<number>;

  /** The current value of the input range synchronized with the native input element. */
  @State()
  currentValue = this.value;

  /**
   * Whether to show the tooltip displaying the current value.
   * The tooltip is shown only when the input range is focused or while the user is changing the value.
   */
  @State()
  showValueTooltip = false;

  /**
   * Whether the native input value needs to be synced with the component state.
   * This is necessary when the `step` prop changes, as the browser may round the value,
   * so we need to update the component state accordingly.
   */
  private needsNativeValueSync = false;

  private inputRef: HTMLInputElement;

  private tooltipGuideRef: HTMLSpanElement;

  private get ariaLabel(): string | undefined {
    return this.htmlAriaLabel ?? (this.orientation === Orientation.VERTICAL ? this.label : undefined);
  }

  private get tooltipPosition(): typeof this.valuePosition {
    return (
      this.valuePosition ?? (this.orientation === Orientation.VERTICAL ? PopoverPosition.LEFT : PopoverPosition.TOP)
    );
  }

  private updateCurrentValue(nextValue: number): void {
    if (Number.isNaN(nextValue) || nextValue === this.currentValue) {
      return;
    }

    this.currentValue = nextValue;
    this.internals.setFormValue(this.currentValue.toString());
  }

  /** Calculates the current ratio of the input range value. */
  private getCurrentRatio(): number {
    const range = this.max - this.min;
    if (range <= 0) {
      return 0;
    }

    const ratio = (this.currentValue - this.min) / range;

    return Math.min(1, Math.max(0, ratio));
  }

  /** Updates the CSS variables used to color the track progress and tooltip guide position. */
  private updateProgress(): void {
    const ratio = this.getCurrentRatio();
    const progress = ratio * 100;

    this.host?.style.setProperty("--progress-ratio", `${ratio}`);
    this.host?.style.setProperty("--progress", `${progress}%`);
  }

  /**
   * Syncs current value from native input after render-time browser coercions:
   * when `step` changes, the browser may round the value, so we need to update the component state accordingly.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/range#step
   */
  private syncCurrentValueFromNativeInput(): void {
    if (!this.inputRef) {
      return;
    }

    this.updateCurrentValue(this.inputRef.valueAsNumber);
    this.updateProgress();
  }

  private onInput(event: InputEvent): void {
    event.stopPropagation();
    this.syncCurrentValueFromNativeInput();
    this.rangeInput.emit(this.currentValue);
  }

  private onChange(event: Event): void {
    event.stopPropagation();
    this.syncCurrentValueFromNativeInput();
    this.rangeChange.emit(this.currentValue);
  }

  @Watch("min")
  @Watch("max")
  @Watch("step")
  @Watch("value")
  onConstraintsChange(): void {
    this.needsNativeValueSync = true;
  }

  componentDidLoad() {
    this.needsNativeValueSync = true;
    this.syncCurrentValueFromNativeInput();
  }

  componentDidRender() {
    if (!this.needsNativeValueSync) {
      return;
    }

    this.syncCurrentValueFromNativeInput();
    this.needsNativeValueSync = false;
  }

  render() {
    return (
      <Host>
        {this.label && (
          <label
            class="z-label"
            htmlFor={this.htmlId}
          >
            {this.label}
          </label>
        )}
        <div class="input-container body-3">
          <input
            ref={(el) => (this.inputRef = el)}
            type="range"
            aria-label={this.ariaLabel}
            id={this.htmlId}
            disabled={this.disabled}
            min={this.min}
            max={this.max}
            step={this.step}
            value={this.currentValue}
            onInput={(event) => this.onInput(event)}
            onChange={(event) => this.onChange(event)}
            onFocus={() => (this.showValueTooltip = true)}
            onBlur={() => (this.showValueTooltip = false)}
          />
          <div
            class="tooltip-guide"
            ref={(el) => (this.tooltipGuideRef = el)}
          ></div>
          <z-tooltip
            position={this.tooltipPosition}
            bindTo={this.tooltipGuideRef}
            open={this.showValueTooltip}
            closable={false}
          >
            <div class="current-value">{this.currentValue}</div>
          </z-tooltip>
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

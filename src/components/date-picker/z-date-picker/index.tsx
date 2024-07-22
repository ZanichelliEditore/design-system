import {Component, Element, Event, EventEmitter, Listen, Prop, State, Watch, h} from "@stencil/core";

import flatpickr from "flatpickr";
import {Italian} from "flatpickr/dist/l10n/it.js";
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";
import {InputType, ZDatePickerMode, ZDatePickerPosition} from "../../../beans";
import {setAriaOptions, setFlatpickrPosition, validateDate} from "../utils";

@Component({
  tag: "z-date-picker",
  styleUrl: "../styles.css",
  shadow: false,
})
export class ZDatePicker {
  @Element() element: HTMLZDatePickerElement;

  /** unique id */
  @Prop()
  datePickerId: string;

  /** z-input aria label */
  @Prop()
  ariaLabel = "";

  /** z-input label */
  @Prop()
  label?: string;

  /** [Optional] datepicker mode: date, datetime, only months */
  @Prop()
  mode: ZDatePickerMode = ZDatePickerMode.DATE;

  @State()
  flatpickrPosition: ZDatePickerPosition = ZDatePickerPosition.BOTTOM;

  @State()
  inputError = false;

  private picker;

  private hasChildren: boolean;

  /** emitted when date changes, returns selected date */
  @Event()
  dateSelect: EventEmitter;

  private emitDateSelect(date): void {
    this.dateSelect.emit(date);
  }

  @Listen("keydown", {target: "body", capture: true})
  handleKeyDown(ev: KeyboardEvent): void {
    if (ev.key === "Escape") {
      this.picker?.close();
    }

    if (ev.key === "Enter" || ev.key === " ") {
      !this.hasChildren && this.picker?.open();

      const isCrossIconEntered = document.activeElement.classList.contains("reset-icon");

      if (isCrossIconEntered) {
        this.inputError = false;
        this.picker?.setDate([]);
        this.dateSelect.emit(null);
      }

      const flatpickrDayPressed = document.activeElement.classList.contains("flatpickr-day");
      if (flatpickrDayPressed) {
        //Sistemare il toggle
      }
      const isPrevArrowEntered = document.activeElement.classList.contains("flatpickr-prev-month");
      const isNextArrowEntered = document.activeElement.classList.contains("flatpickr-next-month");
      const arrowPressed = isPrevArrowEntered || isNextArrowEntered;

      arrowPressed && ev.key === " " && ev.preventDefault();

      if (this.mode === ZDatePickerMode.MONTHS) {
        isPrevArrowEntered && this.picker?.changeYear(this.picker.currentYear - 1);

        isNextArrowEntered && this.picker?.changeYear(this.picker.currentYear + 1);

        if (arrowPressed) {
          const calendar = this.element.getElementsByClassName("flatpickr-calendar")[0];
          const months = calendar?.querySelectorAll(".flatpickr-monthSelect-month");
          months?.forEach((element) => {
            element.setAttribute("aria-label", `${element.innerHTML} ${this.picker?.currentYear}`);
          });

          //Force check of the current day
          months &&
            Array.from(months).forEach((element, index) => {
              const curMonth = new Date().getMonth();
              const curYear = new Date().getFullYear();

              if (index === curMonth) {
                if (this.picker?.currentYear === curYear) {
                  element.setAttribute("class", "flatpickr-monthSelect-month today");
                } else {
                  element.setAttribute("class", "flatpickr-monthSelect-month");
                }
              }
            });
        }
      } else {
        isPrevArrowEntered && this.picker?.changeMonth(-1);
        isNextArrowEntered && this.picker?.changeMonth(1);
      }
    }
  }

  componentWillLoad(): void {
    const customToggle = this.element.querySelector("[slot=toggle]");
    this.hasChildren = !!customToggle;
    this.hasChildren && customToggle.setAttribute("data-toggle", "data-toggle");
  }

  componentDidLoad(): void {
    this.setupPickers();
  }

  @Watch("mode")
  setupPickers(): void {
    const classToAppend = this.hasChildren ? `${this.datePickerId}-hidden` : `${this.datePickerId}-container`;

    this.picker = flatpickr(`.${classToAppend}`, {
      appendTo: this.element.children[0] as HTMLElement,
      enableTime: this.mode === ZDatePickerMode.DATE_TIME,
      locale: Italian,
      allowInput: true,
      dateFormat: this.mode === ZDatePickerMode.DATE_TIME ? "d-m-Y - H:i" : "d-m-Y",
      ariaDateFormat: this.mode === ZDatePickerMode.MONTHS ? "F Y" : "d F Y",
      minuteIncrement: 1,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      time_24hr: true,
      onChange: (_selectedDates, dateStr) => {
        this.emitDateSelect(dateStr);
      },
      onOpen: () => {
        setAriaOptions(this.element as HTMLElement, this.mode);
        this.flatpickrPosition = setFlatpickrPosition(this.element as HTMLElement, this.mode);
      },
      onKeyDown: () => {
        setAriaOptions(this.element as HTMLElement, this.mode);
      },
      wrap: true,
      plugins: this.mode === ZDatePickerMode.MONTHS && [
        monthSelectPlugin({
          dateFormat: "m-Y",
          altFormat: "m-Y",
        }),
      ],
    });

    this.element.querySelectorAll(".flatpickr-weekday").forEach((element) => {
      element.innerHTML = element.innerHTML.trim().charAt(0);
    });
  }

  private formatDate(date): string {
    if (this.mode === ZDatePickerMode.DATE) {
      return `${flatpickr.formatDate(date, "d-m-Y")}`;
    } else if (this.mode === ZDatePickerMode.MONTHS) {
      return `${flatpickr.formatDate(date, "m-Y")}`;
    }

    return `${flatpickr.formatDate(date, "d-m-Y - H:i")}`;
  }

  private onStopTyping(value): void {
    let text = value.detail.value;

    if (this.mode === ZDatePickerMode.MONTHS) {
      text = "01-".concat(value.detail.value);
    }

    const englishData = text.split("-");
    const time = this.mode === ZDatePickerMode.DATE_TIME ? `T${englishData[3]}:00` : "";
    const englishParsedData = `${englishData[2]}-${englishData[1]}-${englishData[0]}${time}`.split(" ").join("");

    const isValidDate = validateDate(englishParsedData, this.mode === ZDatePickerMode.DATE_TIME);

    if (text === "") {
      this.inputError = false;
      this.picker.setDate([]);
      this.dateSelect.emit(null);
    } else if (!isValidDate) {
      this.inputError = true;
      this.dateSelect.emit(null);
    } else if (isValidDate) {
      this.inputError = false;
      this.picker.setDate([value.detail.value]);
      this.dateSelect.emit(this.formatDate(new Date(englishParsedData)));
    }
  }

  private renderSlottedContent(): HTMLDivElement {
    return (
      <div class={`${this.datePickerId}-hidden`}>
        <input
          class="hidden-input"
          data-input
        ></input>
        <slot name="toggle"></slot>
      </div>
    );
  }

  private renderZInput(): HTMLDivElement {
    return (
      <div class={`${this.datePickerId}-container`}>
        <z-input
          data-input="data-input"
          ariaLabel={this.ariaLabel}
          label={this.label}
          class={this.datePickerId}
          type={InputType.TEXT}
          icon="event"
          message={false}
          value=""
          onStopTyping={(value) => {
            this.onStopTyping(value);
          }}
          onStartTyping={() => {
            this.inputError = false;
          }}
        ></z-input>
      </div>
    );
  }

  render(): HTMLDivElement {
    return (
      <div
        class={{
          "flatpickr-toggle-container": true,
          [this.flatpickrPosition]: true,
          [this.mode]: true,
        }}
      >
        {this.hasChildren ? this.renderSlottedContent() : this.renderZInput()}
      </div>
    );
  }
}

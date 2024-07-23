import {Component, Element, Event, EventEmitter, Listen, Prop, State, Watch, h} from "@stencil/core";

import flatpickr from "flatpickr";
import {Italian} from "flatpickr/dist/l10n/it.js";

import {InputStatus, InputType, ZDatePickerPosition, ZRangePickerMode} from "../../../beans";
import {setAriaOptions, setFlatpickrPosition, validateDate} from "../utils";

@Component({
  tag: "z-range-picker",
  styleUrl: "../styles.css",
  shadow: false,
})
export class ZRangePicker {
  @Element() element: HTMLZRangePickerElement;

  /** unique id */
  @Prop()
  rangePickerId: string;

  /** first z-input aria label */
  @Prop()
  firstAriaLabel?: string;

  /** first z-input label */
  @Prop()
  firstLabel?: string;

  /** second z-input aria label */
  @Prop()
  secondAriaLabel?: string;

  /** second z-input label */
  @Prop()
  secondLabel?: string;

  /** [Optional] datepicker mode: date or datetime */
  @Prop()
  mode: ZRangePickerMode = ZRangePickerMode.DATE;

  /** readonly mode */
  @Prop()
  firstPickerReadOnly = false;

  /** readonly mode */
  @Prop()
  lastPickerReadOnly = false;

  /** readonly mode */
  @Prop()
  firstPickerPlaceholder = "";

  /** readonly mode */
  @Prop()
  lastPickerPlaceholder = "";

  @State()
  flatpickrPosition: ZDatePickerPosition = ZDatePickerPosition.BOTTOM;

  @State()
  activeInput = "start-input";

  @State()
  firstInputError = false;

  @State()
  lastInputError = false;

  private firstPicker;

  private lastPicker;

  /** emitted when date changes, returns an array with the two selected dates */
  @Event()
  dateSelect: EventEmitter;

  @Listen("click", {target: "body", capture: true})
  handleClick(): void {
    this.getFocusedInput();
  }

  @Listen("keyup", {target: "body", capture: true})
  handleKeyDown(ev: KeyboardEvent): void {
    const currentPicker = this.activeInput === "start-input" ? this.firstPicker : this.lastPicker;

    this.getFocusedInput();

    if (ev.key === "Escape") {
      document.activeElement.classList.contains(`${this.rangePickerId}-1`) && this.firstPicker?.close();

      document.activeElement.classList.contains(`${this.rangePickerId}-2`) && this.lastPicker?.close();
    }

    if (ev.key === "Enter" || ev.key === " ") {
      if (
        document.activeElement.classList.contains(`${this.rangePickerId}-1`) ||
        document.activeElement.classList.contains(`${this.rangePickerId}-2`)
      ) {
        currentPicker?.open();
      }

      const isCrossIconEntered = document.activeElement.classList.contains("reset-icon");

      if (isCrossIconEntered) {
        if (this.activeInput === "start-input") {
          this.firstInputError = false;
          this.firstPicker?.clear();
          this.printDate(null, this.lastPicker?.selectedDates[0] || null);
        }
        if (this.activeInput === "end-input") {
          this.lastInputError = false;
          this.firstPicker?.clear();
          this.printDate(this.firstPicker?.selectedDates[0] || null, null);
        }
      }

      const isPrevArrowEntered = document.activeElement.classList.contains("flatpickr-prev-month");
      const isNextArrowEntered = document.activeElement.classList.contains("flatpickr-next-month");
      const arrowPressed = isPrevArrowEntered || isNextArrowEntered;

      arrowPressed && ev.key === " " && ev.preventDefault();

      isPrevArrowEntered && currentPicker?.changeMonth(-1);
      isNextArrowEntered && currentPicker?.changeMonth(1);
    }
  }

  componentDidLoad(): void {
    this.setupPickers();
  }

  @Watch("firstPickerReadOnly")
  setupFirstPickersReadOnly(): void {
    this.firstPicker?.set("clickOpens", !this.firstPickerReadOnly);
  }

  @Watch("lastPickerReadOnly")
  setupLastPickersReadOnly(): void {
    this.lastPicker?.set("clickOpens", !this.lastPickerReadOnly);
  }

  @Watch("mode")
  setupPickers(): void {
    const config = {
      enableTime: this.mode === ZRangePickerMode.DATE_TIME,
      locale: Italian,
      allowInput: true,
      wrap: true,
      dateFormat: this.mode === ZRangePickerMode.DATE_TIME ? "d-m-Y - H:i" : "d-m-Y",
      ariaDateFormat: "d F Y",
      minuteIncrement: 1,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      time_24hr: true,
      onValueUpdate: () => {
        const firstInputActive = this.activeInput === "start-input";
        const firstDate = this.firstPicker.selectedDates[0];
        const lastDate = this.lastPicker.selectedDates[0];

        if (+firstDate > +lastDate) {
          if (firstInputActive) {
            this.firstInputError = true;
            this.printDate(null, lastDate || null);
          } else {
            this.lastInputError = true;
            this.printDate(firstDate || null, null);
          }
        } else {
          this.lastInputError = false;
          this.firstInputError = false;
          this.printDate(firstDate || null, lastDate || null);
        }
        this.setRangeStyle(0);
        this.setRangeStyle(1);
      },
      onChange: (_selectedDates, _dateStr, instance) => {
        this.onDateSelect();
        this.setRangeStyle(instance.input.classList.contains("start-input") ? 0 : 1);
      },
      onOpen: (_selectedDates, _dateStr, instance) => {
        setAriaOptions(this.element, this.mode);
        this.flatpickrPosition = setFlatpickrPosition(this.element, this.mode);
        this.setRangeStyle(instance.input.classList.contains("start-input") ? 0 : 1);
        this.getFocusedInput();
      },
      onYearChange: (_selectedDates, _dateStr, instance) => {
        this.setRangeStyle(instance.input.classList.contains("start-input") ? 0 : 1);
      },
      onMonthChange: (_selectedDates, _dateStr, instance) => {
        this.setRangeStyle(instance.input.classList.contains("start-input") ? 0 : 1);
      },
      onKeyDown: () => {
        setAriaOptions(this.element, this.mode);
      },
    };

    this.firstPicker = flatpickr(`.${this.rangePickerId}-1-container`, {
      ...{...config, clickOpens: !this.firstPickerReadOnly},
      mode: "single",
      appendTo: this.element.querySelector(`.${this.rangePickerId}-1-wrapper`),
    });
    this.lastPicker = flatpickr(`.${this.rangePickerId}-2-container`, {
      ...{...config, clickOpens: !this.lastPickerReadOnly},
      mode: "single",
      appendTo: this.element.querySelector(`.${this.rangePickerId}-2-wrapper`),
    });

    this.element.querySelectorAll(".flatpickr-weekday").forEach((element) => {
      element.innerHTML = element.innerHTML.trim().charAt(0);
    });
  }

  private onDateSelect(): void {
    const firstInputActive = this.activeInput === "start-input";
    const firstDate = this.firstPicker.selectedDates[0];
    const lastDate = this.lastPicker.selectedDates[0];

    if (+firstDate > +lastDate) {
      if (firstInputActive) {
        this.firstInputError = true;
        this.printDate(null, lastDate || null);
      } else {
        this.lastInputError = true;
        this.printDate(firstDate || null, null);
      }
    } else {
      this.lastInputError = false;
      this.firstInputError = false;
      this.printDate(firstDate || null, lastDate || null);
    }
  }

  private disableDates(date, index): void {
    const calendar = this.element.getElementsByClassName("flatpickr-calendar")[index];

    Array.from(calendar.getElementsByClassName("flatpickr-day")).forEach((element: Element) => {
      const calendarDate = this.getDateWithoutTime(this.replaceMonths(element.ariaLabel, null));

      const breakpoint = this.getDateWithoutTime(date);
      const inRange = index === 0 ? calendarDate > breakpoint : calendarDate < breakpoint;

      if (inRange) {
        element.classList.toggle("flatpickr-disabled", true);
      } else {
        element.classList.toggle("flatpickr-disabled", false);
      }
    });
    setAriaOptions(this.element, this.mode);
  }

  private formatDate(date): string {
    if (this.mode === ZRangePickerMode.DATE) {
      return `${flatpickr.formatDate(date, "d-m-Y")}`;
    }

    return `${flatpickr.formatDate(date, "d-m-Y - H:i")}`;
  }

  private printDate(firstDate, lastDate): void {
    const firstDateString = firstDate ? this.formatDate(firstDate) : null;
    const lastDateString = lastDate ? this.formatDate(lastDate) : null;

    this.dateSelect.emit([firstDateString, lastDateString]);
  }

  private getDateWithoutTime(date): Date {
    const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0);

    return newDate;
  }

  /** Replace month word to month number */
  private replaceMonths(date, time): Date {
    const month = date.split(" ")[1];
    const months = {
      /* eslint-disable @typescript-eslint/naming-convention */
      Gennaio: "01",
      Febbraio: "02",
      Marzo: "03",
      Aprile: "04",
      Maggio: "05",
      Giugno: "06",
      Luglio: "07",
      Agosto: "08",
      Settembre: "09",
      Ottobre: "10",
      Novembre: "11",
      Dicembre: "12",
      /* eslint-enable @typescript-eslint/naming-convention */
    };

    const pieces = date.replace(month, months[month]).split(" ");

    return new Date(
      parseInt(pieces[2]),
      parseInt(pieces[1]) - 1,
      parseInt(pieces[0]),
      time ? parseInt(time.split(":")[0]) : 0,
      time ? parseInt(time.split(":")[1]) : 0
    );
  }

  /** Get the current focused input, first or last */
  private getFocusedInput(): string {
    const focusedZInput = document.activeElement.closest("z-input");
    if (!focusedZInput) {
      return;
    }

    if (focusedZInput?.classList.contains("start-input")) {
      this.activeInput = "start-input";
    } else if (focusedZInput.classList.contains("end-input")) {
      this.activeInput = "end-input";
    }
  }

  /** Set style of the days between the two selected dates */
  private setRangeStyle(index): void {
    Array.from(this.element.getElementsByClassName("flatpickr-calendar")).forEach((element: Element) => {
      Array.from(element.getElementsByClassName("flatpickr-day")).forEach((element: Element) => {
        const hasFirstDate = this.firstPicker.selectedDates.length === 1;
        const hasLastDate = this.lastPicker.selectedDates.length === 1;
        let firstDate;
        let lastDate;
        const date = this.getDateWithoutTime(this.replaceMonths(element.ariaLabel, null));

        if (hasFirstDate) {
          firstDate = this.getDateWithoutTime(this.firstPicker.selectedDates[0]);
          if (+date === +firstDate) {
            element.classList.toggle("startRange", true);
          } else {
            element.classList.toggle("startRange", false);
          }
        }

        if (hasLastDate) {
          lastDate = this.getDateWithoutTime(this.lastPicker.selectedDates[0]);
          if (+date === +lastDate) {
            element.classList.toggle("endRange", true);
          } else {
            element.classList.toggle("endRange", false);
          }
        }

        if (hasFirstDate && hasLastDate) {
          if (date > firstDate && date < lastDate) {
            element.classList.toggle("inRange", true);
          } else {
            element.classList.toggle("inRange", false);
          }
        }

        if (index === 0 && hasLastDate) {
          this.disableDates(this.lastPicker.selectedDates[0], index);
        }
        if (index === 1 && hasFirstDate) {
          this.disableDates(this.firstPicker.selectedDates[0], index);
        }
      });
    });
  }

  private onStopTyping(value): void {
    const text = value.detail.value.replace("/", "-");
    const englishData = text.split("-");
    const time = this.mode === ZRangePickerMode.DATE_TIME ? `T${englishData[3]}:00` : "";
    const englishParsedData = `${englishData[2]}-${englishData[1]}-${englishData[0]}${time}`.split(" ").join("");

    const isValidDate = validateDate(text, this.mode === ZRangePickerMode.DATE_TIME);

    const date = Date.parse(englishParsedData).toString();

    if (this.activeInput === "start-input") {
      if (text === "") {
        this.firstInputError = false;
        this.firstPicker.setDate([]);
        this.printDate(null, this.lastPicker.selectedDates[0] || null);
      } else if (!isValidDate) {
        this.firstInputError = true;
        this.printDate(null, this.lastPicker.selectedDates[0] || null);
      } else if (isValidDate) {
        if (this.lastPicker.selectedDates.length === 1) {
          if (+date <= +this.lastPicker.selectedDates[0]) {
            this.firstInputError = false;
            this.firstPicker.setDate([text]);
            this.printDate(new Date(englishParsedData), this.lastPicker.selectedDates[0]);
          } else {
            this.firstInputError = true;
            this.printDate(null, this.lastPicker.selectedDates[0]);
          }
        } else {
          this.firstInputError = false;
          this.firstPicker.setDate([text]);
          this.printDate(new Date(englishParsedData), null);
        }
      }
    } else if (text === "") {
      this.lastInputError = false;
      this.lastPicker.setDate([]);
      this.printDate(this.firstPicker.selectedDates[0] || null, null);
    } else if (!isValidDate) {
      this.lastInputError = true;
      this.printDate(this.firstPicker.selectedDates[0] || null, null);
    } else if (isValidDate) {
      if (this.firstPicker.selectedDates.length === 1) {
        if (+date >= +this.firstPicker.selectedDates[0]) {
          this.lastInputError = false;
          this.lastPicker.setDate([text]);
          this.printDate(this.firstPicker.selectedDates[0], new Date(englishParsedData));
        } else {
          this.lastInputError = true;
          this.printDate(this.firstPicker.selectedDates[0], null);
        }
      } else {
        this.lastInputError = false;
        this.lastPicker.setDate([text]);
        this.printDate(null, new Date(englishParsedData));
      }
    }

    this.setRangeStyle(this.activeInput === "start-input" ? 0 : 1);
  }

  render(): HTMLDivElement {
    const zInputProps = {
      type: InputType.TEXT,
      icon: "event",
      tabindex: "0",
      message: false,
      onStopTyping: this.onStopTyping.bind(this),
      value: "",
    };

    return (
      <div
        class={{
          ["range-pickers-container"]: true,
          [this.mode]: true,
          [this.activeInput]: true,
          [this.flatpickrPosition]: true,
        }}
      >
        <div class={`${this.rangePickerId}-1-wrapper`}>
          <div class={`${this.rangePickerId}-1-container`}>
            <z-input
              {...zInputProps}
              placeholder={this.firstPickerPlaceholder}
              readonly={this.firstPickerReadOnly}
              data-input="data-input"
              class={`start-input ${this.rangePickerId}-1`}
              ariaLabel={this.firstAriaLabel}
              label={this.firstLabel}
              status={this.firstInputError && InputStatus.ERROR}
              onStartTyping={() => {
                this.firstInputError = false;
              }}
            />
          </div>
        </div>
        <div class={`${this.rangePickerId}-2-wrapper`}>
          <div class={`${this.rangePickerId}-2-container`}>
            <z-input
              {...zInputProps}
              placeholder={this.lastPickerPlaceholder}
              readonly={this.lastPickerReadOnly}
              data-input="data-input"
              class={`end-input ${this.rangePickerId}-2`}
              ariaLabel={this.secondAriaLabel}
              label={this.secondLabel}
              status={this.lastInputError && InputStatus.ERROR}
              onStartTyping={() => {
                this.lastInputError = false;
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

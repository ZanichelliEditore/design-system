import {ZDatePickerMode, ZDatePickerModeValue, ZDatePickerPosition, ZRangePickerMode} from "../../beans";

export function validateDate(dateStr: string, hasTime = false): boolean {
  const regex = hasTime ? /^\d{1,2}[/-]\d{1,2}[/-]\d{2,4} - \d{2}:\d{2}$/ : /^\d{1,2}[/-]\d{1,2}[/-]\d{2,4}$/;

  if (dateStr.match(regex) === null) {
    return false;
  }

  return true;
}

export function setFlatpickrPosition(
  element: HTMLElement,
  mode: ZDatePickerMode | ZRangePickerMode
): ZDatePickerPosition {
  const toggleHeight = element.children[0].clientHeight;
  element.style.setProperty("--z-range-picker--toggle-height", `${toggleHeight}px`);

  const flatpickrHeight =
    mode === ZDatePickerMode.DATE_TIME
      ? ZDatePickerModeValue.DATE_TIME
      : mode === ZDatePickerMode.MONTHS
        ? ZDatePickerModeValue.MONTHS
        : ZDatePickerModeValue.DATE;

  const bottom = element.getBoundingClientRect().bottom;
  const overflowBottom = bottom + flatpickrHeight > window.innerHeight;
  const overflowTop = bottom - flatpickrHeight - toggleHeight < 0;

  if (!overflowTop && overflowBottom) {
    return ZDatePickerPosition.TOP;
  }

  return ZDatePickerPosition.BOTTOM;
}

export function setAriaOptions(element: HTMLElement, mode: ZDatePickerMode | ZRangePickerMode): void {
  const calendar = element.getElementsByClassName("flatpickr-calendar");

  Array.from(calendar).forEach((element) => {
    element.setAttribute("tabindex", "0");
    const prevMonthArrow = element.getElementsByClassName("flatpickr-prev-month")[0];
    const nextMonthArrow = element.getElementsByClassName("flatpickr-next-month")[0];

    const tabindexElements = element.querySelectorAll('[tabindex = "-1"]');
    tabindexElements.forEach((element) => element.setAttribute("tabindex", "0"));

    Array.from(element.getElementsByClassName("flatpickr-day")).forEach((date: HTMLElement) => {
      if (date.classList.contains("flatpickr-disabled")) {
        date.setAttribute("tabindex", "-1");
      }
    });

    prevMonthArrow.setAttribute("tabindex", "0");
    nextMonthArrow.setAttribute("tabindex", "0");

    prevMonthArrow.setAttribute("role", "button");
    nextMonthArrow.setAttribute("role", "button");

    element.getElementsByClassName("cur-year")[0].setAttribute("aria-label", "Anno");

    if (mode === ZDatePickerMode.DATE) {
      setDateAriaOptions(element, prevMonthArrow, nextMonthArrow);
    }
    if (mode === ZDatePickerMode.DATE_TIME) {
      setDateTimeAriaOptions(element, prevMonthArrow, nextMonthArrow);
    }
    if (mode === ZDatePickerMode.MONTHS) {
      setMonthsAriaOptions(element, prevMonthArrow, nextMonthArrow);
    }
  });
}

function setDateAriaOptions(calendar, prevMonthArrow, nextMonthArrow): void {
  Array.from(calendar.getElementsByClassName("flatpickr-days")).forEach((element: HTMLElement) =>
    element.setAttribute("tabindex", "-1")
  );

  Array.from(calendar.getElementsByClassName("flatpickr-day")).forEach((element: HTMLElement) =>
    element.setAttribute("role", "button")
  );

  calendar.getElementsByClassName("flatpickr-monthDropdown-months")[0].setAttribute("aria-label", "Mese");

  prevMonthArrow.setAttribute("aria-label", "Mese precedente");
  nextMonthArrow.setAttribute("aria-label", "Mese successivo");
}

function setDateTimeAriaOptions(calendar, prevMonthArrow, nextMonthArrow): void {
  Array.from(calendar.getElementsByClassName("flatpickr-days")).forEach((element: HTMLElement) =>
    element.setAttribute("tabindex", "-1")
  );

  Array.from(calendar.getElementsByClassName("flatpickr-day")).forEach((element: HTMLElement) =>
    element.setAttribute("role", "button")
  );

  calendar.getElementsByClassName("flatpickr-monthDropdown-months")[0].setAttribute("aria-label", "Mese");

  prevMonthArrow.setAttribute("aria-label", "Mese precedente");
  nextMonthArrow.setAttribute("aria-label", "Mese successivo");

  Array.from(calendar.getElementsByClassName("time24hr")).forEach((element: HTMLElement) =>
    element.setAttribute("tabindex", "-1")
  );

  calendar.getElementsByClassName("flatpickr-hour")[0].setAttribute("aria-label", "Ora");
  calendar.getElementsByClassName("flatpickr-minute")[0].setAttribute("aria-label", "Minuti");
}

function setMonthsAriaOptions(calendar, prevMonthArrow, nextMonthArrow): void {
  Array.from(calendar.getElementsByClassName("flatpickr-monthSelect-months")).forEach((element: HTMLElement) =>
    element.setAttribute("tabindex", "-1")
  );

  Array.from(calendar.getElementsByClassName("flatpickr-monthSelect-month")).forEach((element: HTMLElement) =>
    element.setAttribute("role", "button")
  );

  prevMonthArrow.setAttribute("aria-label", "Anno precedente");
  nextMonthArrow.setAttribute("aria-label", "Anno successivo");
}

import {ZDatePickerMode, ZDatePickerModeValues, ZDatePickerPosition} from "../../beans";

export function validateDate(dateStr, hasTime = false) {
  const regex = hasTime ? /^\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4} - \d{2}:\d{2}$/ : /^\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4}$/;

  if (dateStr.match(regex) === null) {
    return false;
  }

  return true;
}

export function setFlatpickrPosition(element: HTMLElement, mode) {
  const toggleHeight = element.children[0].clientHeight;
  element.style.setProperty("--z-range-picker--toggle-height", `${toggleHeight}px`);

  const flatpickrHeight =
    mode === ZDatePickerMode.dateTime
      ? ZDatePickerModeValues.DATETIME
      : mode === ZDatePickerMode.months
      ? ZDatePickerModeValues.MONTHS
      : ZDatePickerModeValues.DATE;

  const bottom = element.getBoundingClientRect().bottom;
  const overflowBottom = bottom + flatpickrHeight > window.innerHeight;
  const overflowTop = bottom - flatpickrHeight - toggleHeight < 0;

  if (!overflowTop && overflowBottom) {
    return ZDatePickerPosition.top;
  } else {
    return ZDatePickerPosition.bottom;
  }
}

export function setAriaOptions(element: HTMLElement, mode) {
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

    if (mode === ZDatePickerMode.date) {
      setDateAriaOptions(element, prevMonthArrow, nextMonthArrow);
    }
    if (mode === ZDatePickerMode.dateTime) {
      setDateTimeAriaOptions(element, prevMonthArrow, nextMonthArrow);
    }
    if (mode === ZDatePickerMode.months) {
      setMonthsAriaOptions(element, prevMonthArrow, nextMonthArrow);
    }
  });
}

function setDateAriaOptions(calendar, prevMonthArrow, nextMonthArrow) {
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

function setDateTimeAriaOptions(calendar, prevMonthArrow, nextMonthArrow) {
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

function setMonthsAriaOptions(calendar, prevMonthArrow, nextMonthArrow) {
  Array.from(calendar.getElementsByClassName("flatpickr-monthSelect-months")).forEach((element: HTMLElement) =>
    element.setAttribute("tabindex", "-1")
  );

  Array.from(calendar.getElementsByClassName("flatpickr-monthSelect-month")).forEach((element: HTMLElement) =>
    element.setAttribute("role", "button")
  );

  prevMonthArrow.setAttribute("aria-label", "Anno precedente");
  nextMonthArrow.setAttribute("aria-label", "Anno successivo");
}
